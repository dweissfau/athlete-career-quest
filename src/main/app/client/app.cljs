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
  [{:id "bg-1"
    :text "What year of athletic eligibility are you in?"
    :type "multiple_choice"
    :options [{:value "freshman" :label "Freshman"}
              {:value "sophomore" :label "Sophomore"}
              {:value "junior" :label "Junior"}
              {:value "senior" :label "Senior"}]}
   ;; No scoring-weights - demographic question only

   {:id "int-1"
    :text "As a teammate, I'd rather motivate and support others than analyze game film and statistics."
    :type "likert"
    :scoring-weights {:people 1.0 :collaborative 0.7}}

   {:id "int-2"
    :text "I'd rather design a creative new play than study structured opponent scouting reports."
    :type "likert"
    :scoring-weights {:creative 1.0}}

   {:id "int-3"
    :text "Rank what motivates you most as an athlete:"
    :type "ranking"
    :scoring-weights {:competitive 1.0}
    :options [{:value "Winning championships and titles"}
              {:value "Setting personal records and improving stats"}
              {:value "Being part of a close-knit team"}
              {:value "Earning recognition from coaches and scouts"}]}

   {:id "sk-1"
    :text "Your team is down at halftime in a crucial game. The locker room is tense and some teammates look defeated. What do you do?"
    :type "scenario"
    :scoring-weights {:leadership 1.0 :pressure-tolerance 0.6}
    :options [{:value "rally" :label "Stand up and deliver a motivating speech to fire up the team" :score 1.0}
              {:value "strategy" :label "Quietly review what's working and suggest tactical adjustments" :score 0.6}
              {:value "individual" :label "Focus on preparing yourself mentally for the second half" :score 0.3}
              {:value "defer" :label "Let the coaches handle it - that's their job" :score 0.1}]}

   {:id "sk-2"
    :text "I can break down complex plays so any teammate understands their role."
    :type "likert"
    :scoring-weights {:communication 1.0 :mentoring 0.6}}

   {:id "sk-3"
    :text "I enjoy tracking my performance stats and analyzing game data."
    :type "likert"
    :scoring-weights {:data 1.0 :analytical 0.8}}

   {:id "sk-4"
    :text "I quickly adapt to new training technology, performance apps, and video analysis tools."
    :type "likert"
    :scoring-weights {:technical 1.0}}

   {:id "fin-1"
    :text "How important is earning potential when choosing your post-athletic career?"
    :type "likert"
    :scoring-weights {:income-priority 1.0}}

   {:id "fin-2"
    :text "Like investing in development years as a young athlete, I'd accept lower initial pay for long-term career growth."
    :type "likert"
    :scoring-weights {:education-openness 0.8}}

   {:id "tm-1"
    :text "How soon after your athletic career ends do you want to start your professional career?"
    :type "multiple_choice"
    :scoring-weights {:urgency 1.0}
    :options [{:value "immediate" :label "Immediately" :score 1.0}
              {:value "3-months" :label "Within 3 months" :score 0.75}
              {:value "6-months" :label "Within 6 months" :score 0.5}
              {:value "grad-school" :label "After graduate school" :score 0.0}]}

   {:id "tm-2"
    :text "I've thought about starting my own sports-related business (training facility, brand, agency, etc.)."
    :type "likert"
    :scoring-weights {:entrepreneurial 1.0 :risk-tolerance 0.7}}

   {:id "sk-5"
    :text "During training, I like breaking down complex techniques into smaller steps to master each part."
    :type "likert"
    :scoring-weights {:analytical 1.0 :data 0.5}}

   {:id "sk-6"
    :text "It's the final seconds of a championship game. Your team needs one play to win, and the ball is coming to you. How do you feel?"
    :type "scenario"
    :scoring-weights {:pressure-tolerance 1.0 :competitive 0.5}
    :options [{:value "thrive" :label "This is what I live for - I want this moment" :score 1.0}
              {:value "confident" :label "Nervous but confident - I've prepared for this" :score 0.75}
              {:value "anxious" :label "Very nervous - I hope I don't mess up" :score 0.35}
              {:value "avoid" :label "I'd rather someone else take this shot" :score 0.1}]}

   {:id "int-4"
    :text "Maintaining a connection to athletics is important to my career satisfaction - I want sports in my professional life."
    :type "likert"
    :scoring-weights {:sports-connection 1.0}}

   {:id "sk-7"
    :text "I'm comfortable discussing my value with coaches - negotiating playing time, role, or opportunities."
    :type "likert"
    :scoring-weights {:negotiation 1.0 :communication 0.4}}])

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
               :when (some? value)]
           (let [q (get q-map qid)
                 q-type (:type q)]
             {:question-id qid
              :response-value (cond
                                (= q-type "likert")
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
          (dom/h3 "16")
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
