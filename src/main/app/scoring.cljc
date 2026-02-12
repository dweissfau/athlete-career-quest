(ns app.scoring
  "Scoring algorithm for career recommendations"
  (:require [clojure.string :as str]))

;; Redesigned scoring dimensions (18 total)
;; Derived from the 50-question assessment:
;;   Section 1 (Likert 1-5): Self-assessment traits
;;   Section 2 (True/False): Career tendencies
;;   Section 3 (Multiple Choice): Interest & industry indicators
;;
;; Merged from previous system:
;;   - 'data' absorbed into 'analytical'
;;   - 'collaborative' absorbed into 'people'
;;   - 'urgency' replaced by 'stability'
(def default-dimension-weights
  {:leadership 1.2
   :analytical 1.0
   :creative 1.0
   :communication 1.1
   :risk-tolerance 1.0
   :people 1.0
   :pressure-tolerance 1.0
   :mentoring 1.0
   :income-priority 1.0
   :education-openness 1.0
   :sports-connection 1.0
   :entrepreneurial 1.0
   :technical 1.0
   :physical 0.8
   :social-impact 1.0
   :negotiation 1.0
   :competitive 1.0
   :stability 1.0})

;; Section weights for the 3-section questionnaire
(def default-section-weights
  {:likert 0.35
   :true-false 0.30
   :multiple-choice 0.35})

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
      "likert" (/ (dec (or (:value value) value 3)) 4.0)  ; 1-5 scale → 0-1
      "true_false" (if (:value value) 1.0 0.0)            ; true → 1.0, false → 0.0
      "multiple_choice" (or (:score value) 0.5)            ; scalar score or map handled separately
      "scenario" (or (:score value) 0.5)
      "ranking" (let [ranks (:ranks value)]
                  (if (seq ranks)
                    (/ (reduce + (map-indexed (fn [i _] (/ (- (count ranks) i) (count ranks))) ranks))
                       (count ranks))
                    0.5))
      "short_text" 0.5
      0.5)))

(defn calculate-dimension-scores
  "Calculate scores for each dimension based on responses.
   Handles two scoring modes:
   1. Likert/True-False: normalize response × scoring-weights
   2. Multiple Choice with map scores: use selected option's score map directly"
  [responses questions]
  (let [question-map (into {} (map (fn [q] [(:id q) q]) questions))]
    (reduce
      (fn [scores response]
        (let [question (get question-map (:question-id response))
              q-type (:question-type question)
              value (:response-value response)]
          (cond
            ;; MC with map scores - use option score map directly as dimension contributions
            (and (= q-type "multiple_choice")
                 (map? (:score value)))
            (reduce
              (fn [s [dim score-val]]
                (let [dim-key (keyword dim)]
                  (update s dim-key
                          (fn [{:keys [total count] :or {total 0 count 0}}]
                            {:total (+ total score-val)
                             :count (inc count)}))))
              scores
              (:score value))

            ;; Likert, True/False, MC with scalar, Scenario - use scoring-weights
            :else
            (let [weights (:scoring-weights question)
                  normalized (normalize-response response question)]
              (if weights
                (reduce
                  (fn [s [dimension weight]]
                    (let [dim-key (keyword dimension)]
                      (update s dim-key
                              (fn [{:keys [total count] :or {total 0 count 0}}]
                                {:total (+ total (* normalized weight))
                                 :count (inc count)}))))
                  scores
                  weights)
                scores)))))
      {}
      responses)))

(defn finalize-dimension-scores
  "Convert accumulated scores to final 0-1 scores"
  [raw-scores dimension-weights]
  (reduce-kv
    (fn [scores dim {:keys [total count]}]
      (let [avg (if (pos? count) (/ total count) 0.5)
            clamped (max 0.0 (min 1.0 avg))
            weight (get dimension-weights dim 1.0)]
        (assoc scores dim (min 1.0 (* clamped weight)))))
    {}
    raw-scores))

(defn calculate-career-match
  "Calculate match score between user profile and a career.
   Supports negative weights: a negative importance penalizes users who are
   STRONG in that dimension (e.g. :risk-tolerance -0.3 means risk-lovers
   are a poor fit). Formula:
     positive weight → user-score × importance
     negative weight → (1 - user-score) × |importance|
   Denominator uses sum of absolute weights for proper normalization."
  [dimension-scores career]
  (let [required-dims (:required-dimensions career)
        match-scores (map
                       (fn [[dim importance]]
                         (let [user-score (get dimension-scores (keyword dim) 0.5)]
                           (if (neg? importance)
                             (* (- 1.0 user-score) (Math/abs importance))
                             (* user-score importance))))
                       required-dims)
        total-abs-weight (reduce + (map (fn [[_ w]] (Math/abs w)) required-dims))]
    (if (and (seq match-scores) (pos? total-abs-weight))
      (/ (reduce + match-scores) total-abs-weight)
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
        competitive (get dimension-scores :competitive 0.5)
        top-careers (take 3 career-scores)
        avg-internship-importance (/ (reduce + (map :internship-importance top-careers)) 3)]
    {:recommended (> avg-internship-importance 3)
     :confidence (min 1.0 (* (+ leadership communication) 0.5))
     :reasoning (cond
                  (and (> leadership 0.7) (> communication 0.7))
                  "Strong leadership and communication skills make you well-suited for competitive internship programs."
                  (> competitive 0.7)
                  "Your competitive drive and desire to gain practical experience make internships highly valuable."
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
        stability (get dimension-scores :stability 0.5)
        top-careers (take 5 career-scores)
        grad-recommended-careers (filter :grad-school-recommended top-careers)
        grad-percentage (/ (count grad-recommended-careers) (max 1 (count top-careers)))]
    {:recommended (or (> education-openness 0.6)
                      (and (> education-openness 0.4)
                           (> grad-percentage 0.4)))
     :confidence (min 1.0 (* education-openness (+ 0.5 (* grad-percentage 0.5))))
     :timing (cond
               (> education-openness 0.8)
               "Consider pursuing immediately after undergraduate"
               (and (> income-priority 0.7) (> education-openness 0.5))
               "Consider pursuing immediately after undergraduate"
               (> stability 0.6)
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
              (str "Target industries: " (str/join ", " (map :name (:top-3 industry-rec))))]}])

(defn calculate-results
  "Main entry point: calculate all results from responses"
  [responses questions careers config]
  (let [;; Get configuration
        dimension-weights (get-config-value config "dimension_weights" default-dimension-weights)

        ;; Calculate dimension scores
        raw-dimension-scores (calculate-dimension-scores responses questions)
        dimension-scores (finalize-dimension-scores raw-dimension-scores dimension-weights)

        ;; Calculate career matches
        career-scores (calculate-career-scores dimension-scores careers)

        ;; Generate recommendations
        internship-rec (generate-internship-recommendation dimension-scores career-scores)
        major-rec (generate-major-recommendation career-scores)
        grad-school-rec (generate-grad-school-recommendation dimension-scores career-scores)
        industry-rec (generate-industry-recommendation career-scores)
        roadmap (generate-roadmap internship-rec major-rec grad-school-rec industry-rec)]

    {:profile {:dimensions dimension-scores}

     :dimension-scores dimension-scores
     :career-scores (take 10 career-scores)

     :recommendations
     {:internship internship-rec
      :major major-rec
      :grad-school grad-school-rec
      :industry industry-rec}

     :roadmap roadmap}))
