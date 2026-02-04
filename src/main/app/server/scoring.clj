(ns app.server.scoring
  "Scoring algorithm for career recommendations"
  (:require [clojure.tools.logging :as log]))

;; Default dimension weights (20 dimensions)
;; Core dimensions (14):
;;   people, data, creative, analytical, leadership, communication,
;;   technical, physical, competitive, collaborative, risk-tolerance,
;;   income-priority, education-openness, urgency
;; Extended dimensions (6):
;;   sports-connection, negotiation, mentoring, entrepreneurial,
;;   pressure-tolerance, social-impact
(def default-dimension-weights
  {:people 1.0
   :data 1.0
   :creative 1.0
   :analytical 1.0
   :leadership 1.2
   :communication 1.1
   :technical 1.0
   :physical 0.8
   :competitive 1.0
   :collaborative 1.0
   :risk-tolerance 1.0
   :income-priority 1.0
   :education-openness 1.0
   :urgency 1.0
   ;; Extended dimensions for athlete career matching
   :sports-connection 1.0
   :negotiation 1.0
   :mentoring 1.0
   :entrepreneurial 1.0
   :pressure-tolerance 1.0
   :social-impact 1.0})

;; Default category weights
(def default-category-weights
  {:interests 0.25
   :skills 0.30
   :financial 0.20
   :timeline 0.25})

(defn get-config-value
  "Get configuration value with fallback"
  [config key default]
  (or (some-> (filter #(= (:config-key %) key) config)
              first
              :config-value)
      default))

(defn normalize-response
  "Normalize a response value to 0-1 scale"
  [response question]
  (let [value (:response-value response)
        q-type (:question-type question)]
    (case q-type
      "likert" (/ (dec (or (:value value) value 3)) 4.0)  ; 1-5 scale
      "multiple_choice" (or (:score value) 0.5)
      "ranking" (let [ranks (:ranks value)]
                  (if (seq ranks)
                    (/ (reduce + (map-indexed (fn [i _] (/ (- (count ranks) i) (count ranks))) ranks))
                       (count ranks))
                    0.5))
      "scenario" (or (:score value) 0.5)
      "short_text" 0.5  ; Text responses don't contribute to scoring directly
      0.5)))

(defn calculate-dimension-scores
  "Calculate scores for each dimension based on responses"
  [responses questions]
  (let [response-map (into {} (map (fn [r] [(:question-id r) r]) responses))
        question-map (into {} (map (fn [q] [(:id q) q]) questions))]
    (reduce
      (fn [scores response]
        (let [question (get question-map (:question-id response))
              weights (:scoring-weights question)
              normalized (normalize-response response question)]
          (reduce
            (fn [s [dimension weight]]
              (let [dim-key (keyword dimension)]
                (update s dim-key
                        (fn [{:keys [total count] :or {total 0 count 0}}]
                          {:total (+ total (* normalized weight))
                           :count (inc count)}))))
            scores
            weights)))
      {}
      responses)))

(defn finalize-dimension-scores
  "Convert accumulated scores to final 0-1 scores"
  [raw-scores dimension-weights]
  (reduce-kv
    (fn [scores dim {:keys [total count]}]
      (let [avg (if (pos? count) (/ total count) 0.5)
            weight (get dimension-weights dim 1.0)]
        (assoc scores dim (* avg weight))))
    {}
    raw-scores))

(defn calculate-category-scores
  "Calculate scores by category"
  [responses questions categories]
  (let [category-map (into {} (map (fn [c] [(:id c) c]) categories))
        question-categories (group-by :category-id questions)
        response-map (into {} (map (fn [r] [(:question-id r) r]) responses))]
    (reduce-kv
      (fn [scores cat-id cat-questions]
        (let [category (get category-map cat-id)
              cat-name (keyword (:name category))
              cat-responses (filter identity
                                    (map #(get response-map (:id %)) cat-questions))
              avg-score (if (seq cat-responses)
                          (/ (reduce + (map #(normalize-response %
                                               (first (filter (fn [q] (= (:id q) (:question-id %)))
                                                              cat-questions)))
                                            cat-responses))
                             (count cat-responses))
                          0.5)]
          (assoc scores cat-name avg-score)))
      {}
      question-categories)))

(defn calculate-career-match
  "Calculate match score between user profile and a career"
  [dimension-scores career]
  (let [required-dims (:required-dimensions career)
        match-scores (map
                       (fn [[dim importance]]
                         (let [user-score (get dimension-scores (keyword dim) 0.5)]
                           (* user-score importance)))
                       required-dims)]
    (if (seq match-scores)
      (/ (reduce + match-scores) (reduce + (map second required-dims)))
      0.5)))

(defn calculate-career-scores
  "Calculate match scores for all careers"
  [dimension-scores careers]
  (->> careers
       (map (fn [career]
              {:career-id (:id career)
               :career-name (:name career)
               :career-category (:category career)
               :match-score (calculate-career-match dimension-scores career)
               :grad-school-recommended (:grad-school-recommended career)
               :internship-importance (:internship-importance career)
               :typical-majors (:typical-majors career)
               :salary-range (:salary-range career)}))
       (sort-by :match-score >)))

(defn generate-internship-recommendation
  "Generate internship recommendation based on scores"
  [dimension-scores career-scores]
  (let [leadership (get dimension-scores :leadership 0.5)
        communication (get dimension-scores :communication 0.5)
        urgency (get dimension-scores :urgency 0.5)
        top-careers (take 3 career-scores)
        avg-internship-importance (/ (reduce + (map :internship-importance top-careers)) 3)]
    {:recommended (> avg-internship-importance 3)
     :confidence (min 1.0 (* (+ leadership communication) 0.5))
     :reasoning (cond
                  (and (> leadership 0.7) (> communication 0.7))
                  "Strong leadership and communication skills make you well-suited for competitive internship programs."
                  (> urgency 0.7)
                  "Your desire to gain practical experience early makes internships highly valuable."
                  :else
                  "Internships will help you explore career options and build professional skills.")
     :suggested-types (map :career-category (take 3 career-scores))}))

(defn generate-major-recommendation
  "Generate major recommendations based on career matches"
  [career-scores]
  (let [top-careers (take 5 career-scores)
        all-majors (mapcat :typical-majors top-careers)
        major-freq (frequencies all-majors)
        ranked-majors (->> major-freq
                           (sort-by val >)
                           (take 3)
                           (map (fn [[major freq]]
                                  {:name major
                                   :fit (/ freq (count top-careers))})))]
    {:top-3 ranked-majors
     :confidence (let [top-score (:match-score (first top-careers))]
                   (if top-score (min 1.0 (* top-score 1.1)) 0.5))}))

(defn generate-grad-school-recommendation
  "Generate grad school recommendation based on scores and careers"
  [dimension-scores career-scores]
  (let [education-openness (get dimension-scores :education-openness 0.5)
        income-priority (get dimension-scores :income-priority 0.5)
        urgency (get dimension-scores :urgency 0.5)
        top-careers (take 5 career-scores)
        grad-recommended-careers (filter :grad-school-recommended top-careers)
        grad-percentage (/ (count grad-recommended-careers) (max 1 (count top-careers)))]
    {:recommended (and (> education-openness 0.5)
                       (> grad-percentage 0.4))
     :confidence (min 1.0 (* education-openness grad-percentage))
     :timing (cond
               (and (> income-priority 0.7) (< urgency 0.3))
               "Consider pursuing immediately after undergraduate"
               (> urgency 0.5)
               "After 2-3 years of work experience"
               :else
               "After 3-5 years of work experience")
     :suggested-programs (distinct (mapcat :typical-majors grad-recommended-careers))}))

(defn generate-industry-recommendation
  "Generate top industry recommendations"
  [career-scores]
  (let [by-category (group-by :career-category career-scores)
        category-scores (->> by-category
                             (map (fn [[cat careers]]
                                    {:name cat
                                     :fit (/ (reduce + (map :match-score careers))
                                             (count careers))}))
                             (sort-by :fit >)
                             (take 3))]
    {:top-3 category-scores
     :confidence (:fit (first category-scores))}))

(defn generate-roadmap
  "Generate career roadmap based on recommendations"
  [internship-rec major-rec grad-school-rec industry-rec]
  [{:phase "Now"
    :actions [(if (:recommended internship-rec)
                "Begin researching internship opportunities"
                "Focus on building relevant skills")
              "Explore recommended majors"
              "Connect with career services"]}
   {:phase "Sophomore Year"
    :actions [(when (:recommended internship-rec)
                "Secure first internship")
              (str "Declare major: " (get-in major-rec [:top-3 0 :name]))
              "Join relevant student organizations"]}
   {:phase "Junior Year"
    :actions [(when (:recommended internship-rec)
                "Complete competitive internship")
              "Build professional network in target industry"
              "Begin informational interviews"]}
   {:phase "Senior Year"
    :actions [(if (:recommended grad-school-rec)
                (str "Apply to graduate programs (" (:timing grad-school-rec) ")")
                "Apply to entry-level positions")
              (str "Target industries: " (clojure.string/join ", " (map :name (:top-3 industry-rec))))]}])

(defn calculate-results
  "Main entry point: calculate all results from responses"
  [responses questions careers config]
  (log/info "Calculating results for" (count responses) "responses")

  (let [;; Get configuration
        category-weights (get-config-value config "scoring_weights" default-category-weights)
        dimension-weights (get-config-value config "dimension_weights" default-dimension-weights)

        ;; Calculate dimension scores
        raw-dimension-scores (calculate-dimension-scores responses questions)
        dimension-scores (finalize-dimension-scores raw-dimension-scores dimension-weights)

        ;; Calculate category scores (placeholder - would need category data)
        category-scores {:interests 0.5 :skills 0.5 :financial 0.5 :timeline 0.5}

        ;; Calculate career matches
        career-scores (calculate-career-scores dimension-scores careers)

        ;; Generate recommendations
        internship-rec (generate-internship-recommendation dimension-scores career-scores)
        major-rec (generate-major-recommendation career-scores)
        grad-school-rec (generate-grad-school-recommendation dimension-scores career-scores)
        industry-rec (generate-industry-recommendation career-scores)
        roadmap (generate-roadmap internship-rec major-rec grad-school-rec industry-rec)]

    {:profile {:dimensions dimension-scores}

     :category-scores category-scores
     :dimension-scores dimension-scores
     :career-scores (take 10 career-scores)

     :recommendations
     {:internship internship-rec
      :major major-rec
      :grad-school grad-school-rec
      :industry industry-rec}

     :roadmap roadmap}))

(comment
  ;; Test scoring
  (calculate-results
    [{:question-id "q1" :response-value {:value 4}}
     {:question-id "q2" :response-value {:value 5}}]
    [{:id "q1" :question-type "likert" :scoring-weights {:leadership 0.8 :communication 0.6}}
     {:id "q2" :question-type "likert" :scoring-weights {:analytical 0.9 :technical 0.7}}]
    [{:id "c1" :name "Sports Marketing" :category "sports"
      :required-dimensions {:leadership 0.7 :communication 0.8}
      :grad-school-recommended false
      :internship-importance 4
      :typical-majors ["Marketing" "Business"]}]
    [])
  )
