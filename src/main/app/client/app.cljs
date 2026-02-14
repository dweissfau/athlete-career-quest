(ns app.client.app
  "Fulcro application setup"
  (:require [com.fulcrologic.fulcro.application :as app]
            [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
            [clojure.string]
            [app.scoring :as scoring]
            [app.careers :as careers]
            [app.advice :as advice]
            [app.ui.components :as ui]))

;; Simple state-based app without complex routing

;; Sample questions data - athlete-specific framing
(def sample-questions
  [;; ============================================
   ;; SECTION 1: Likert Scale (1-5) - Self-Assessment
   ;; 1 = Strongly Disagree | 5 = Strongly Agree
   ;; ============================================
   {:id "l-1"
    :text "I enjoy leading others toward a shared goal."
    :type "likert"
    :scoring-weights {:leadership 1.0 :people 0.3}}

   {:id "l-2"
    :text "I prefer clear structure and expectations."
    :type "likert"
    :scoring-weights {:stability 1.0}}

   {:id "l-3"
    :text "I perform well under pressure."
    :type "likert"
    :scoring-weights {:pressure-tolerance 1.0 :competitive 0.3 :sports-connection 0.2}}

   {:id "l-4"
    :text "I like solving complex problems."
    :type "likert"
    :scoring-weights {:analytical 1.0}}

   {:id "l-5"
    :text "I enjoy working with numbers and data."
    :type "likert"
    :scoring-weights {:analytical 0.8 :technical 0.3}}

   {:id "l-6"
    :text "I enjoy creative thinking and brainstorming."
    :type "likert"
    :scoring-weights {:creative 1.0}}

   {:id "l-7"
    :text "I prefer hands-on learning over lectures."
    :type "likert"
    :scoring-weights {:physical 0.7 :technical 0.3}}

   {:id "l-8"
    :text "I am comfortable taking risks."
    :type "likert"
    :scoring-weights {:risk-tolerance 1.0 :entrepreneurial 0.3}}

   {:id "l-9"
    :text "I value job security highly."
    :type "likert"
    :scoring-weights {:stability 1.0}}

   {:id "l-10"
    :text "I enjoy building professional relationships."
    :type "likert"
    :scoring-weights {:people 1.0 :negotiation 0.3}}

   {:id "l-11"
    :text "I like fast-paced environments."
    :type "likert"
    :scoring-weights {:pressure-tolerance 0.7 :competitive 0.5 :physical 0.2}}

   {:id "l-12"
    :text "I enjoy mentoring or coaching others."
    :type "likert"
    :scoring-weights {:mentoring 1.0 :people 0.3}}

   {:id "l-13"
    :text "I am motivated by financial success."
    :type "likert"
    :scoring-weights {:income-priority 1.0 :competitive 0.3 :negotiation 0.2}}

   {:id "l-14"
    :text "I would consider graduate school."
    :type "likert"
    :scoring-weights {:education-openness 1.0}}

   {:id "l-15"
    :text "I enjoy analyzing performance metrics."
    :type "likert"
    :scoring-weights {:analytical 0.9 :sports-connection 0.3}}

   {:id "l-16"
    :text "I prefer independent work over teamwork."
    :type "likert"
    :scoring-weights {:people -0.5 :entrepreneurial 0.3}}

   {:id "l-17"
    :text "I enjoy public speaking."
    :type "likert"
    :scoring-weights {:communication 1.0}}

   {:id "l-18"
    :text "I like long-term strategic planning."
    :type "likert"
    :scoring-weights {:leadership 0.5 :analytical 0.5}}

   {:id "l-19"
    :text "I want a career connected to sports."
    :type "likert"
    :scoring-weights {:sports-connection 1.0}}

   {:id "l-20"
    :text "I am willing to work long hours early in my career."
    :type "likert"
    :scoring-weights {:competitive 0.5 :income-priority 0.3}}

   ;; ============================================
   ;; SECTION 2: True / False - Career Tendencies
   ;; ============================================
   {:id "tf-1"
    :text "I would rather have stability than high earning potential."
    :type "true_false"
    :scoring-weights {:stability 1.0 :income-priority -0.5}}

   {:id "tf-2"
    :text "I am interested in starting my own business someday."
    :type "true_false"
    :scoring-weights {:entrepreneurial 1.0 :risk-tolerance 0.4}}

   {:id "tf-3"
    :text "I would relocate for the right job opportunity."
    :type "true_false"
    :scoring-weights {:risk-tolerance 0.5 :competitive 0.3}}

   {:id "tf-4"
    :text "I enjoy writing and communicating ideas clearly."
    :type "true_false"
    :scoring-weights {:communication 1.0}}

   {:id "tf-5"
    :text "I prefer physical activity over desk work."
    :type "true_false"
    :scoring-weights {:physical 1.0 :sports-connection 0.3}}

   {:id "tf-6"
    :text "I am interested in helping people solve personal challenges."
    :type "true_false"
    :scoring-weights {:social-impact 0.8 :people 0.5 :mentoring 0.4}}

   {:id "tf-7"
    :text "I am interested in how laws and policies shape society."
    :type "true_false"
    :scoring-weights {:social-impact 0.7 :analytical 0.3}}

   {:id "tf-8"
    :text "I enjoy technology and innovation."
    :type "true_false"
    :scoring-weights {:technical 1.0 :creative 0.3}}

   {:id "tf-9"
    :text "I would enjoy working in a hospital or healthcare setting."
    :type "true_false"
    :scoring-weights {:people 0.5 :social-impact 0.5 :education-openness 0.3}}

   {:id "tf-10"
    :text "I enjoy selling or persuading others."
    :type "true_false"
    :scoring-weights {:negotiation 1.0 :competitive 0.3}}

   {:id "tf-11"
    :text "I want a predictable 9\u20135 schedule."
    :type "true_false"
    :scoring-weights {:stability 1.0}}

   {:id "tf-12"
    :text "I am comfortable making decisions with limited information."
    :type "true_false"
    :scoring-weights {:risk-tolerance 0.8 :pressure-tolerance 0.4}}

   {:id "tf-13"
    :text "I enjoy research and deep analysis."
    :type "true_false"
    :scoring-weights {:analytical 1.0 :education-openness 0.3}}

   {:id "tf-14"
    :text "I prefer performance-based pay (bonuses/commission)."
    :type "true_false"
    :scoring-weights {:competitive 0.7 :income-priority 0.5 :risk-tolerance 0.3}}

   {:id "tf-15"
    :text "I would enjoy managing people or teams."
    :type "true_false"
    :scoring-weights {:leadership 1.0 :people 0.3 :negotiation 0.2}}

   ;; ============================================
   ;; SECTION 3: Multiple Choice - Interest & Industry
   ;; ============================================
   {:id "mc-1"
    :text "Which activity sounds most appealing?"
    :type "multiple_choice"
    :options [{:value "a" :label "Leading a team project" :score {:leadership 1.0 :people 0.5}}
              {:value "b" :label "Analyzing financial data" :score {:analytical 1.0 :income-priority 0.3}}
              {:value "c" :label "Designing a creative campaign" :score {:creative 1.0 :communication 0.4}}
              {:value "d" :label "Helping someone improve their life" :score {:social-impact 1.0 :mentoring 0.5}}
              {:value "e" :label "Building or engineering something" :score {:technical 1.0 :physical 0.4}}]}

   {:id "mc-2"
    :text "Which class would you most enjoy?"
    :type "multiple_choice"
    :options [{:value "a" :label "Business Management" :score {:leadership 0.7 :income-priority 0.5}}
              {:value "b" :label "Biology or Health Science" :score {:analytical 0.5 :social-impact 0.5 :education-openness 0.3}}
              {:value "c" :label "Communications" :score {:communication 1.0}}
              {:value "d" :label "Computer Science" :score {:technical 1.0 :analytical 0.5}}
              {:value "e" :label "Psychology" :score {:people 0.8 :social-impact 0.5 :mentoring 0.4}}]}

   {:id "mc-3"
    :text "What motivates you most?"
    :type "multiple_choice"
    :options [{:value "a" :label "Competition" :score {:competitive 1.0 :sports-connection 0.3}}
              {:value "b" :label "Impact" :score {:social-impact 1.0}}
              {:value "c" :label "Financial growth" :score {:income-priority 1.0}}
              {:value "d" :label "Innovation" :score {:creative 0.7 :technical 0.5 :entrepreneurial 0.5}}
              {:value "e" :label "Stability" :score {:stability 1.0}}]}

   {:id "mc-4"
    :text "What environment suits you best?"
    :type "multiple_choice"
    :options [{:value "a" :label "Corporate office" :score {:stability 0.5 :leadership 0.3}}
              {:value "b" :label "Hospital/clinical setting" :score {:social-impact 0.5 :people 0.5}}
              {:value "c" :label "School or university" :score {:mentoring 0.8 :education-openness 0.5}}
              {:value "d" :label "Startup environment" :score {:entrepreneurial 0.8 :risk-tolerance 0.5 :creative 0.3 :pressure-tolerance 0.4}}
              {:value "e" :label "Outdoor/active setting" :score {:physical 1.0}}]}

   {:id "mc-5"
    :text "How do you prefer to solve problems?"
    :type "multiple_choice"
    :options [{:value "a" :label "Data and analytics" :score {:analytical 1.0}}
              {:value "b" :label "Discussion and collaboration" :score {:people 0.7 :communication 0.5}}
              {:value "c" :label "Trial and experimentation" :score {:risk-tolerance 0.5 :creative 0.4 :physical 0.3}}
              {:value "d" :label "Structured procedures" :score {:stability 0.7 :analytical 0.3}}
              {:value "e" :label "Creative thinking" :score {:creative 1.0}}]}

   {:id "mc-6"
    :text "Which career path interests you most?"
    :type "multiple_choice"
    :options [{:value "a" :label "Finance/Business" :score {:income-priority 0.7 :analytical 0.5}}
              {:value "b" :label "Healthcare" :score {:social-impact 0.7 :people 0.5 :education-openness 0.3}}
              {:value "c" :label "Sports Management" :score {:sports-connection 1.0 :leadership 0.3}}
              {:value "d" :label "Technology" :score {:technical 1.0}}
              {:value "e" :label "Law/Public Policy" :score {:analytical 0.5 :social-impact 0.5 :communication 0.3}}]}

   {:id "mc-7"
    :text "What role do you naturally take on a team?"
    :type "multiple_choice"
    :options [{:value "a" :label "Leader" :score {:leadership 1.0}}
              {:value "b" :label "Strategist" :score {:analytical 0.8 :leadership 0.3}}
              {:value "c" :label "Motivator" :score {:people 0.7 :mentoring 0.5 :communication 0.5}}
              {:value "d" :label "Technical expert" :score {:technical 0.8 :analytical 0.4}}
              {:value "e" :label "Support role" :score {:people 0.5 :stability 0.3}}]}

   {:id "mc-8"
    :text "Which outcome matters most?"
    :type "multiple_choice"
    :options [{:value "a" :label "High income" :score {:income-priority 1.0}}
              {:value "b" :label "Helping others" :score {:social-impact 1.0 :people 0.3}}
              {:value "c" :label "Recognition" :score {:competitive 0.8 :communication 0.3}}
              {:value "d" :label "Work-life balance" :score {:stability 1.0}}
              {:value "e" :label "Influence/power" :score {:leadership 0.8 :negotiation 0.5}}]}

   {:id "mc-9"
    :text "Which internship sounds most interesting?"
    :type "multiple_choice"
    :options [{:value "a" :label "Investment firm" :score {:analytical 0.5 :income-priority 0.7}}
              {:value "b" :label "Physical therapy clinic" :score {:people 0.6 :physical 0.4 :social-impact 0.5}}
              {:value "c" :label "Athletic department" :score {:sports-connection 1.0 :leadership 0.3}}
              {:value "d" :label "Marketing agency" :score {:creative 0.8 :communication 0.6}}
              {:value "e" :label "Tech startup" :score {:technical 0.7 :entrepreneurial 0.6}}]}

   {:id "mc-10"
    :text "Which skill do you most want to develop?"
    :type "multiple_choice"
    :options [{:value "a" :label "Leadership" :score {:leadership 1.0}}
              {:value "b" :label "Analytical skills" :score {:analytical 1.0}}
              {:value "c" :label "Communication" :score {:communication 1.0}}
              {:value "d" :label "Technical skills" :score {:technical 1.0}}
              {:value "e" :label "Negotiation" :score {:negotiation 1.0}}]}

   {:id "mc-11"
    :text "Which best describes you?"
    :type "multiple_choice"
    :options [{:value "a" :label "Competitive" :score {:competitive 1.0 :sports-connection 0.3}}
              {:value "b" :label "Empathetic" :score {:people 0.8 :social-impact 0.5}}
              {:value "c" :label "Logical" :score {:analytical 0.8 :stability 0.3}}
              {:value "d" :label "Creative" :score {:creative 1.0}}
              {:value "e" :label "Organized" :score {:stability 0.7 :leadership 0.3}}]}

   {:id "mc-12"
    :text "If sport ended tomorrow, what would excite you most?"
    :type "multiple_choice"
    :options [{:value "a" :label "Building a business" :score {:entrepreneurial 1.0 :risk-tolerance 0.3 :negotiation 0.4}}
              {:value "b" :label "Coaching or mentoring" :score {:mentoring 1.0 :sports-connection 0.5 :physical 0.3}}
              {:value "c" :label "Graduate school" :score {:education-openness 1.0}}
              {:value "d" :label "Corporate career path" :score {:stability 0.5 :income-priority 0.5}}
              {:value "e" :label "Community impact work" :score {:social-impact 1.0}}]}

   {:id "mc-13"
    :text "How comfortable are you with uncertainty?"
    :type "multiple_choice"
    :options [{:value "a" :label "Very comfortable" :score {:risk-tolerance 1.0 :pressure-tolerance 0.7}}
              {:value "b" :label "Somewhat comfortable" :score {:risk-tolerance 0.7 :pressure-tolerance 0.4}}
              {:value "c" :label "Neutral" :score {:risk-tolerance 0.5}}
              {:value "d" :label "Prefer structure" :score {:stability 0.7 :risk-tolerance 0.3}}
              {:value "e" :label "Strongly prefer stability" :score {:stability 1.0}}]}

   {:id "mc-14"
    :text "What type of impact do you want to make?"
    :type "multiple_choice"
    :options [{:value "a" :label "Financial markets" :score {:analytical 0.5 :income-priority 0.7}}
              {:value "b" :label "Individual lives" :score {:people 0.7 :mentoring 0.5 :social-impact 0.5}}
              {:value "c" :label "Organizations" :score {:leadership 0.8 :negotiation 0.3}}
              {:value "d" :label "Technology advancement" :score {:technical 0.8 :creative 0.4}}
              {:value "e" :label "Public systems" :score {:social-impact 1.0}}]}

   {:id "mc-15"
    :text "Which best describes your long-term goal?"
    :type "multiple_choice"
    :options [{:value "a" :label "Executive leadership" :score {:leadership 1.0 :income-priority 0.3 :negotiation 0.4}}
              {:value "b" :label "Licensed professional (doctor, therapist, etc.)" :score {:education-openness 0.8 :people 0.5}}
              {:value "c" :label "Entrepreneur" :score {:entrepreneurial 1.0 :risk-tolerance 0.3}}
              {:value "d" :label "Industry specialist" :score {:technical 0.5 :analytical 0.5}}
              {:value "e" :label "Community leader" :score {:social-impact 0.8 :leadership 0.5}}]}])

(def sample-results
  {:career-matches [{:name "Sports Marketing Manager" :category "Sports Industry"}
                    {:name "Athletic Director" :category "Sports Industry"}
                    {:name "Corporate Sales Executive" :category "Business & Sales"}
                    {:name "Sports Agent" :category "Sports Industry"}
                    {:name "Brand Manager" :category "Business & Sales"}
                    {:name "Public Relations Director" :category "Media & Communications"}
                    {:name "Executive Recruiter" :category "Business & Sales"}
                    {:name "Sports Broadcaster/Analyst" :category "Sports Industry"}
                    {:name "Hotel General Manager" :category "Hospitality & Tourism"}
                    {:name "Political Campaign Manager" :category "Law & Public Policy"}]
   :recommended-majors ["Sports Management" "Business Administration" "Marketing"]
   :internship {:recommended true :confidence 85}
   :grad-school {:recommended true :timing "After 2-3 years work experience"}})

;; Mutations
(defmutation set-page [{:keys [page]}]
  (action [{:keys [state]}]
    (swap! state assoc :current-page page)))

(defmutation set-question-index [{:keys [index]}]
  (action [{:keys [state]}]
    (swap! state assoc :current-question index)))

(defmutation save-answer [{:keys [question-id value]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:answers question-id] value)))

;; Transform functions for scoring engine
(defn ->scoring-questions
  "Transform client questions to scoring engine format"
  [questions]
  (mapv (fn [q]
          {:id (:id q)
           :question-type (:type q)
           :scoring-weights (:scoring-weights q)
           :options (:options q)})
        questions))

(defn ->scoring-responses
  "Transform client answers to scoring engine format"
  [answers questions]
  (let [q-map (into {} (map (juxt :id identity) questions))]
    (vec (for [[qid value] answers
               :when (not (nil? value))]
           (let [q (get q-map qid)
                 q-type (:type q)]
             {:question-id qid
              :response-value (cond
                                (= q-type "likert")
                                {:value value}

                                (= q-type "true_false")
                                {:value value}

                                (= q-type "multiple_choice")
                                (let [opt (first (filter #(= (:value %) value) (:options q)))]
                                  {:value value :score (or (:score opt) 0.5)})

                                (= q-type "scenario")
                                (let [selected-val (:value value)
                                      opt (first (filter #(= (:value %) selected-val) (:options q)))]
                                  {:selected selected-val :score (or (:score opt) 0.5)})

                                (= q-type "ranking")
                                {:ranks (:ranks value)}

                                :else
                                {:value value})})))))

(defmutation compute-results [_]
  (action [{:keys [state]}]
    (let [answers (:answers @state)
          responses (->scoring-responses answers sample-questions)
          questions (->scoring-questions sample-questions)
          results (scoring/calculate-results responses questions careers/careers [])
          personalized-advice (advice/generate-personalized-advice results careers/careers)]
      (swap! state assoc
             :computed-results results
             :personalized-advice personalized-advice))))

;; Components
(defsc LikertScale [this {:keys [value on-change]}]
  (let [options [{:v 1 :label "Strongly Disagree"}
                 {:v 2 :label "Disagree"}
                 {:v 3 :label "Neutral"}
                 {:v 4 :label "Agree"}
                 {:v 5 :label "Strongly Agree"}]]
    (dom/div {:className "likert-scale"}
      (map (fn [{:keys [v label]}]
             (dom/div {:key v
                       :className (str "likert-option " (when (= value v) "selected"))
                       :onClick #(on-change v)}
               (dom/div {:style {:fontSize "1.2rem" :fontWeight "500"}} v)
               (dom/div {:style {:fontSize "0.75rem" :color "#64748b"}} label)))
           options))))

(def ui-likert-scale (comp/factory LikertScale))

(defsc MultipleChoice [this {:keys [options selected-value on-change]}]
  (dom/div {:className "multiple-choice"}
    (map (fn [{:keys [value label]}]
           (dom/div {:key value
                     :className (str "choice-option " (when (= selected-value value) "selected"))
                     :onClick #(on-change value)}
             label))
         options)))

(def ui-multiple-choice (comp/factory MultipleChoice))

(defsc ScenarioChoice [this {:keys [scenario options selected-value on-change]}]
  (dom/div {}
    (dom/div {:style {:backgroundColor "#f8fafc" :padding "20px" :borderRadius "8px"
                      :marginBottom "24px" :borderLeft "4px solid #2563eb"}}
      (dom/h4 {:style {:marginBottom "8px" :color "#1e293b"}} "Scenario")
      (dom/p {:style {:lineHeight "1.7"}} scenario))
    (dom/h4 {:style {:marginBottom "16px"}} "How would you respond?")
    (dom/div {:className "multiple-choice"}
      (map (fn [{:keys [value label score]}]
             (dom/div {:key value
                       :className (str "choice-option " (when (= selected-value value) "selected"))
                       :onClick #(on-change {:value value :score score})}
               label))
           options))))

(def ui-scenario-choice (comp/factory ScenarioChoice))

(defsc TrueFalseChoice [this {:keys [selected-value on-change]}]
  (dom/div {:style {:display "flex" :gap "16px" :justifyContent "center"}}
    (dom/div {:className (str "choice-option " (when (true? selected-value) "selected"))
              :style {:flex "1" :textAlign "center" :padding "24px" :cursor "pointer"
                      :fontWeight "700" :fontSize "1.1rem"}
              :onClick #(on-change true)}
      "True")
    (dom/div {:className (str "choice-option " (when (false? selected-value) "selected"))
              :style {:flex "1" :textAlign "center" :padding "24px" :cursor "pointer"
                      :fontWeight "700" :fontSize "1.1rem"}
              :onClick #(on-change false)}
      "False")))

(def ui-true-false-choice (comp/factory TrueFalseChoice))

(defsc RankingChoice [this {:keys [options current-ranks on-change]}]
  (let [available (remove (set current-ranks) (map :value options))]
    (dom/div {}
      (dom/p {:style {:color "#64748b" :marginBottom "16px"}}
        "Click items in order of preference (1st = most important)")
      ;; Ranked items
      (when (seq current-ranks)
        (dom/div {:style {:marginBottom "24px"}}
          (dom/h4 {:style {:marginBottom "12px"}} "Your Ranking:")
          (map-indexed
            (fn [idx item]
              (dom/div {:key item
                        :className "choice-option selected"
                        :style {:display "flex" :alignItems "center" :marginBottom "8px"}
                        :onClick #(on-change {:ranks (vec (remove #{item} current-ranks))})}
                (dom/span {:style {:backgroundColor "#2563eb" :color "white"
                                   :borderRadius "50%" :width "28px" :height "28px"
                                   :display "flex" :alignItems "center" :justifyContent "center"
                                   :marginRight "12px"}}
                  (inc idx))
                (dom/span {} item)))
            current-ranks)))
      ;; Available items
      (when (seq available)
        (dom/div {}
          (dom/h4 {:style {:marginBottom "12px"}} "Available:")
          (map (fn [item]
                 (dom/div {:key item
                           :className "choice-option"
                           :style {:marginBottom "8px"}
                           :onClick #(on-change {:ranks (conj (or current-ranks []) item)})}
                   item))
               available))))))

(def ui-ranking-choice (comp/factory RankingChoice))

(defsc Question [this {:keys [question answer on-answer]}]
  (let [{:keys [id text type options]} question]
    (dom/div {:className "card"}
      (when-not (= type "scenario")
        (dom/h3 {:style {:marginBottom "24px"}} text))
      (case type
        "likert" (ui-likert-scale {:value answer :on-change on-answer})
        "true_false" (ui-true-false-choice {:selected-value answer :on-change on-answer})
        "multiple_choice" (ui-multiple-choice {:options options :selected-value answer :on-change on-answer})
        "scenario" (ui-scenario-choice {:scenario text
                                        :options options
                                        :selected-value (:value answer)
                                        :on-change on-answer})
        "ranking" (ui-ranking-choice {:options options
                                      :current-ranks (:ranks answer)
                                      :on-change on-answer})
        ;; fallback
        (ui-likert-scale {:value answer :on-change on-answer})))))

(def ui-question (comp/factory Question))

(defsc LandingPage [this {:keys [on-start]}]
  (dom/div {:className "container"}
    (dom/div {:className "card" :style {:textAlign "center" :padding "48px"}}
      (dom/h1 {:style {:fontSize "2.5rem" :marginBottom "16px" :color "#1e293b"}}
        "Athlete Career Quest")
      (dom/p {:style {:fontSize "1.2rem" :color "#64748b" :marginBottom "32px"}}
        "Discover your ideal career path based on your unique strengths, interests, and goals.")

      (dom/div {:style {:display "flex" :gap "16px" :justifyContent "center" :marginBottom "32px"}}
        (dom/div {:className "card" :style {:padding "24px" :flex "1" :maxWidth "200px"}}
          (dom/h3 "50")
          (dom/p {:style {:color "#64748b"}} "Questions"))
        (dom/div {:className "card" :style {:padding "24px" :flex "1" :maxWidth "200px"}}
          (dom/h3 "50+")
          (dom/p {:style {:color "#64748b"}} "Career Paths"))
        (dom/div {:className "card" :style {:padding "24px" :flex "1" :maxWidth "200px"}}
          (dom/h3 "4")
          (dom/p {:style {:color "#64748b"}} "Recommendations")))

      (dom/button {:className "btn btn-primary"
                   :style {:fontSize "1.1rem" :padding "16px 48px"}
                   :onClick on-start}
        "Start Your Journey"))))

(def ui-landing-page (comp/factory LandingPage))

(defn answer-valid?
  "Check if an answer is valid based on question type"
  [question answer]
  (let [q-type (:type question)]
    (case q-type
      "likert" (some? answer)
      "true_false" (not (nil? answer))
      "multiple_choice" (some? answer)
      "scenario" (some? (:value answer))
      "ranking" (let [ranks (:ranks answer)
                      options (:options question)]
                  (and (seq ranks)
                       (= (count ranks) (count options))))
      ;; Default: require some answer
      (some? answer))))

(defsc QuestionnairePage [this {:keys [question-index answers on-answer on-next on-back on-complete]}]
  (let [total (count sample-questions)
        question (get sample-questions question-index)
        answer (get answers (:id question))
        progress (* 100 (/ (inc question-index) total))
        is-last (= question-index (dec total))
        can-proceed (answer-valid? question answer)]
    (dom/div {:className "container"}
      ;; Progress bar
      (dom/div {:style {:marginBottom "24px"}}
        (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "8px"}}
          (dom/span {:style {:fontSize "0.9rem" :color "#64748b"}}
            (str "Question " (inc question-index) " of " total))
          (dom/span {:style {:fontSize "0.9rem" :color "#64748b"}}
            (str (Math/round progress) "% complete")))
        (dom/div {:className "progress-bar"}
          (dom/div {:className "progress-bar-fill"
                    :style {:width (str progress "%")}})))

      ;; Question
      (ui-question {:question question
                    :answer answer
                    :on-answer on-answer})

      ;; Navigation
      (dom/div {:style {:display "flex" :justifyContent "space-between" :marginTop "24px"}}
        (if (pos? question-index)
          (dom/button {:className "btn btn-secondary" :onClick on-back} "Back")
          (dom/div))
        (dom/button {:className "btn btn-primary"
                     :disabled (not can-proceed)
                     :style (when (not can-proceed)
                              {:opacity "0.5" :cursor "not-allowed"})
                     :onClick (when can-proceed (if is-last on-complete on-next))}
          (if is-last "See Results" "Next"))))))

(def ui-questionnaire-page (comp/factory QuestionnairePage))

(defsc ResultsPage [this {:keys [computed-results personalized-advice on-restart]}]
  (let [{:keys [career-scores recommendations]} computed-results
        career-matches (map-indexed (fn [idx c]
                                      {:name (:career-name c)
                                       :rank (inc idx)
                                       :category (:career-category c)
                                       :majors (:typical-majors c)})
                                    (take 10 career-scores))
        recommended-majors (mapv :name (get-in recommendations [:major :top-3]))
        internship-advice (:internship-advice personalized-advice)
        grad-school-advice (:grad-school-advice personalized-advice)]
    (dom/div {:className "container"}
      ;; Header
      (dom/div {:className "result-card"}
        (dom/h1 {:style {:margin "0 0 8px 0"}} "Your Career Profile")
        (dom/p {:style {:opacity "0.9"}}
          "Based on your responses, here are your personalized recommendations."))

      ;; Top Careers
      (dom/div {:className "card"}
        (dom/div {:className "accent-stripe"})
        (dom/h2 {:style {:marginBottom "24px"}} "Top 10 Career Matches")
        (dom/div {:className "stagger-in"}
          (map (fn [{:keys [name rank category majors]}]
                 (dom/div {:key name :className "card" :style {:marginBottom "12px"}}
                   (dom/div {:style {:display "flex" :alignItems "center" :gap "16px"}}
                     (dom/div {:style {:minWidth "48px" :height "48px" :borderRadius "12px"
                                       :background "linear-gradient(135deg, #2563eb, #3b82f6)"
                                       :display "flex" :alignItems "center" :justifyContent "center"
                                       :color "#fff" :fontSize "1.25rem" :fontWeight "900"}}
                       (str "#" rank))
                     (dom/div {:style {:flex "1"}}
                       (dom/h4 {:style {:margin "0 0 4px 0"}} name)
                       (dom/span {:style {:color "#64748b" :fontSize "0.9rem" :fontWeight "500"}} category)))
                   (when (seq majors)
                     (dom/div {:style {:marginTop "12px" :paddingTop "12px" :borderTop "1px solid #e2e8f0"}}
                       (dom/span {:style {:fontSize "0.85rem" :color "#64748b" :fontWeight "500"}} "Related majors: ")
                       (dom/span {:style {:fontSize "0.85rem" :fontWeight "600"}} (clojure.string/join ", " (take 3 majors)))))))
               career-matches)))

      ;; Recommendations Grid
      (dom/div {:style {:display "grid" :gridTemplateColumns "repeat(auto-fit, minmax(280px, 1fr))" :gap "16px" :marginTop "24px"}}
        ;; Majors
        (dom/div {:className "card"}
          (dom/h3 {:style {:marginBottom "16px"}} "Recommended Majors")
          (dom/ol {:style {:margin 0 :paddingLeft "20px"}}
            (map (fn [major]
                   (dom/li {:key major :style {:marginBottom "8px"}} major))
                 recommended-majors)))

        ;; Personalized Internship Advice
        (ui/ui-personalized-advice-card internship-advice)

        ;; Personalized Grad School Advice
        (ui/ui-personalized-advice-card grad-school-advice))

      ;; Restart
      (dom/div {:style {:textAlign "center" :marginTop "32px"}}
        (dom/button {:className "btn btn-secondary" :onClick on-restart}
          "Retake Assessment")))))

(def ui-results-page (comp/factory ResultsPage))

;; Root component
(defsc Root [this {:keys [current-page current-question answers computed-results personalized-advice]}]
  {:query [:current-page :current-question :answers :computed-results :personalized-advice]
   :initial-state {:current-page :landing
                   :current-question 0
                   :answers {}
                   :computed-results nil
                   :personalized-advice nil}}
  (case current-page
    :landing
    (ui-landing-page {:on-start #(comp/transact! this [(set-page {:page :questionnaire})])})

    :questionnaire
    (ui-questionnaire-page
      {:question-index current-question
       :answers answers
       :on-answer #(comp/transact! this [(save-answer {:question-id (:id (get sample-questions current-question))
                                                        :value %})])
       :on-next #(comp/transact! this [(set-question-index {:index (inc current-question)})])
       :on-back #(comp/transact! this [(set-question-index {:index (dec current-question)})])
       :on-complete #(comp/transact! this [(compute-results {})
                                           (set-page {:page :results})])})

    :results
    (ui-results-page {:computed-results computed-results
                      :personalized-advice personalized-advice
                      :on-restart #(comp/transact! this [(set-page {:page :landing})
                                                          (set-question-index {:index 0})])})

    ;; Default
    (dom/div "Loading...")))

;; Application
(defonce app (app/fulcro-app {}))

(defn mount!
  "Mount the application"
  []
  (app/mount! app Root "app")
  (js/console.log "App mounted!"))
