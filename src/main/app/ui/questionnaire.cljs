(ns app.ui.questionnaire
  "Main questionnaire UI component"
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
            [com.fulcrologic.fulcro.algorithms.merge :as merge]
            [com.fulcrologic.fulcro.data-fetch :as df]
            [com.fulcrologic.fulcro.routing.dynamic-routing :as dr]
            [app.ui.components :as ui]
            [app.ui.questions :as questions]))

;; Forward declarations
(declare get-sample-questions get-sample-categories)

;; Local state mutations
(defmutation set-current-response
  "Store the current response value"
  [{:keys [value]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:questionnaire/id :main :current-response] value)))

(defmutation next-question
  "Move to the next question"
  [_]
  (action [{:keys [state]}]
    (swap! state update-in [:questionnaire/id :main :current-index] inc)
    (swap! state assoc-in [:questionnaire/id :main :current-response] nil)))

(defmutation previous-question
  "Move to the previous question"
  [_]
  (action [{:keys [state]}]
    (swap! state update-in [:questionnaire/id :main :current-index] dec)
    (swap! state assoc-in [:questionnaire/id :main :current-response] nil)))

(defmutation save-response
  "Save response to local state"
  [{:keys [question-id value]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:questionnaire/id :main :responses question-id] value)))

(defmutation start-questionnaire
  "Initialize the questionnaire with questions"
  [_]
  (action [{:keys [state]}]
    (swap! state assoc-in [:questionnaire/id :main]
           {:current-index 0
            :current-response nil
            :responses {}
            :is-complete false
            :show-intro true})))

(defmutation hide-intro
  "Hide the intro and show first question"
  [_]
  (action [{:keys [state]}]
    (swap! state assoc-in [:questionnaire/id :main :show-intro] false)))

(defmutation complete-questionnaire
  "Mark questionnaire as complete"
  [_]
  (action [{:keys [state]}]
    (swap! state assoc-in [:questionnaire/id :main :is-complete] true)))

;; Category intro component
(defsc CategoryIntro [this {:keys [name display-name description on-continue]}]
  (dom/div {:className "card" :style {:textAlign "center" :padding "48px"}}
    (dom/h2 {:style {:marginBottom "16px" :color "#2563eb"}} display-name)
    (dom/p {:style {:color "#64748b" :marginBottom "32px" :maxWidth "500px" :margin "0 auto 32px"}}
      description)
    (dom/button {:className "btn btn-primary"
                 :onClick on-continue}
      "Begin Section")))

(def ui-category-intro (comp/factory CategoryIntro))

;; Question navigation
(defsc QuestionNavigation [this {:keys [current-index total can-go-back on-back on-next on-skip has-response is-last]}]
  (dom/div {:style {:display "flex" :justifyContent "space-between" :marginTop "24px"}}
    (if can-go-back
      (dom/button {:className "btn btn-secondary"
                   :onClick on-back}
        "Back")
      (dom/div))

    (dom/div {:style {:display "flex" :gap "12px"}}
      (when-not is-last
        (dom/button {:className "btn btn-secondary"
                     :onClick on-skip}
          "Skip"))
      (dom/button {:className "btn btn-primary"
                   :onClick on-next
                   :disabled (and (not has-response) is-last)}
        (if is-last "See Results" "Next")))))

(def ui-question-navigation (comp/factory QuestionNavigation))

;; Main questionnaire component
(defsc Questionnaire [this {:questionnaire/keys [id current-index current-response responses
                                                   is-complete show-intro questions categories]}]
  {:query [:questionnaire/id
           :questionnaire/current-index
           :questionnaire/current-response
           :questionnaire/responses
           :questionnaire/is-complete
           :questionnaire/show-intro
           {:questionnaire/questions (comp/get-query questions/Question)}
           {:questionnaire/categories [:category/id :category/name :category/display-name :category/description]}]
   :ident :questionnaire/id
   :initial-state (fn [_]
                    {:questionnaire/id :main
                     :questionnaire/current-index 0
                     :questionnaire/current-response nil
                     :questionnaire/responses {}
                     :questionnaire/is-complete false
                     :questionnaire/show-intro true
                     :questionnaire/questions (get-sample-questions)
                     :questionnaire/categories (get-sample-categories)})}

  (let [total-questions (count questions)
        current-question (get questions current-index)
        current-question-id (:question/id current-question)
        saved-response (get responses current-question-id)
        response-value (or current-response saved-response)
        has-response (some? response-value)
        is-last (= current-index (dec total-questions))]

    (cond
      ;; Show intro screen
      show-intro
      (dom/div {:className "container"}
        (dom/div {:className "card" :style {:textAlign "center" :padding "48px"}}
          (dom/h1 {:style {:fontSize "2rem" :marginBottom "16px"}}
            "Career Path Assessment")
          (dom/p {:style {:color "#64748b" :marginBottom "24px" :maxWidth "500px" :margin "0 auto 24px"}}
            "This questionnaire will help you discover career paths that align with your interests,
             skills, and goals. Answer honestly - there are no right or wrong answers.")

          (dom/div {:style {:display "flex" :justifyContent "center" :gap "24px" :marginBottom "32px"}}
            (dom/div {:style {:textAlign "center"}}
              (dom/div {:style {:fontSize "2rem" :fontWeight "bold" :color "#2563eb"}}
                total-questions)
              (dom/div {:style {:color "#64748b"}} "Questions"))
            (dom/div {:style {:textAlign "center"}}
              (dom/div {:style {:fontSize "2rem" :fontWeight "bold" :color "#2563eb"}}
                "~15")
              (dom/div {:style {:color "#64748b"}} "Minutes"))
            (dom/div {:style {:textAlign "center"}}
              (dom/div {:style {:fontSize "2rem" :fontWeight "bold" :color "#2563eb"}}
                "4")
              (dom/div {:style {:color "#64748b"}} "Recommendations")))

          (dom/button {:className "btn btn-primary"
                       :style {:fontSize "1.1rem" :padding "16px 48px"}
                       :onClick #(comp/transact! this [(hide-intro {})])}
            "Start Assessment")))

      ;; Show completion screen
      is-complete
      (dom/div {:className "container"}
        (dom/div {:className "card" :style {:textAlign "center" :padding "48px"}}
          (dom/div {:style {:fontSize "4rem" :marginBottom "16px"}} "✓")
          (dom/h2 {:style {:marginBottom "16px"}} "Assessment Complete!")
          (dom/p {:style {:color "#64748b" :marginBottom "24px"}}
            "Your personalized career recommendations are ready.")
          (dom/button {:className "btn btn-primary"
                       :onClick #(dr/change-route! this ["results"])}
            "View Your Results")))

      ;; Show current question
      :else
      (dom/div {:className "container"}
        ;; Progress bar
        (ui/ui-progress-bar {:current (inc current-index) :total total-questions})

        ;; Question
        (questions/ui-question
          (comp/computed current-question
                         {:value response-value
                          :on-change (fn [value]
                                       (comp/transact! this [(set-current-response {:value value})]))}))

        ;; Navigation
        (ui-question-navigation
          {:current-index current-index
           :total total-questions
           :can-go-back (pos? current-index)
           :has-response has-response
           :is-last is-last
           :on-back #(do
                       (when has-response
                         (comp/transact! this [(save-response {:question-id current-question-id
                                                               :value response-value})]))
                       (comp/transact! this [(previous-question {})]))
           :on-next #(do
                       (when has-response
                         (comp/transact! this [(save-response {:question-id current-question-id
                                                               :value response-value})]))
                       (if is-last
                         (comp/transact! this [(complete-questionnaire {})])
                         (comp/transact! this [(next-question {})])))
           :on-skip #(comp/transact! this [(next-question {})])})))))

(def ui-questionnaire (comp/factory Questionnaire))

;; Sample data for initial state
(defn get-sample-categories []
  [{:category/id "background"
    :category/name "background"
    :category/display-name "Background"
    :category/description "Let's start with some basic information about you."}
   {:category/id "interests"
    :category/name "interests"
    :category/display-name "Interests & Passions"
    :category/description "Discover what activities and environments energize you."}
   {:category/id "skills"
    :category/name "skills"
    :category/display-name "Skills & Strengths"
    :category/description "Assess your natural abilities and developed skills."}
   {:category/id "financial"
    :category/name "financial"
    :category/display-name "Financial & Lifestyle Goals"
    :category/description "Understand your priorities for income and work-life balance."}
   {:category/id "timeline"
    :category/name "timeline"
    :category/display-name "Timeline & Career Goals"
    :category/description "Explore your timeline preferences and long-term vision."}])

(defn get-sample-questions []
  [;; Background
   {:question/id "bg-1"
    :question/text "What year are you in school?"
    :question/type "multiple_choice"
    :question/options [{:value "freshman" :label "Freshman" :score 0.25}
                       {:value "sophomore" :label "Sophomore" :score 0.5}
                       {:value "junior" :label "Junior" :score 0.75}
                       {:value "senior" :label "Senior" :score 1.0}]}

   {:question/id "bg-2"
    :question/text "What is your primary sport?"
    :question/type "multiple_choice"
    :question/options [{:value "football" :label "Football" :score 0.5}
                       {:value "basketball" :label "Basketball" :score 0.5}
                       {:value "baseball" :label "Baseball/Softball" :score 0.5}
                       {:value "soccer" :label "Soccer" :score 0.5}
                       {:value "track" :label "Track & Field" :score 0.5}
                       {:value "swimming" :label "Swimming" :score 0.5}
                       {:value "other" :label "Other" :score 0.5}]}

   {:question/id "bg-3"
    :question/text "What is your current GPA range?"
    :question/type "multiple_choice"
    :question/options [{:value "3.5+" :label "3.5 and above" :score 1.0}
                       {:value "3.0-3.49" :label "3.0 - 3.49" :score 0.8}
                       {:value "2.5-2.99" :label "2.5 - 2.99" :score 0.6}
                       {:value "below-2.5" :label "Below 2.5" :score 0.4}]}

   ;; Interests
   {:question/id "int-1"
    :question/text "I enjoy working directly with people more than working with data or systems."
    :question/type "likert"
    :question/scoring-weights {:people 1.0 :data -0.3}}

   {:question/id "int-2"
    :question/text "I prefer creative, open-ended projects over structured, analytical tasks."
    :question/type "likert"
    :question/scoring-weights {:creative 1.0 :analytical -0.3}}

   {:question/id "int-3"
    :question/text "Competition motivates me more than collaboration."
    :question/type "likert"
    :question/scoring-weights {:competitive 1.0 :collaborative -0.3}}

   {:question/id "int-4"
    :question/text "Which work environment appeals to you most?"
    :question/type "multiple_choice"
    :question/options [{:value "office" :label "Corporate Office" :description "Structured environment with clear hierarchy" :score {:corporate 1.0}}
                       {:value "startup" :label "Startup/Small Company" :description "Fast-paced, wear many hats" :score {:entrepreneurial 1.0}}
                       {:value "field" :label "Field/Travel-Based" :description "Variety of locations, active work" :score {:physical 1.0}}
                       {:value "remote" :label "Remote/Flexible" :description "Work from anywhere" :score {:independent 1.0}}]}

   {:question/id "int-5"
    :question/text "Rank these activities from most to least enjoyable:"
    :question/type "ranking"
    :question/options [{:value "Leading a team"}
                       {:value "Analyzing data"}
                       {:value "Building relationships"}
                       {:value "Creating content"}
                       {:value "Solving problems"}]}

   ;; Skills
   {:question/id "sk-1"
    :question/text "I naturally take charge in group situations."
    :question/type "likert"
    :question/scoring-weights {:leadership 1.0}}

   {:question/id "sk-2"
    :question/text "I can clearly explain complex ideas to others."
    :question/type "likert"
    :question/scoring-weights {:communication 1.0}}

   {:question/id "sk-3"
    :question/text "I enjoy working with numbers, statistics, and data analysis."
    :question/type "likert"
    :question/scoring-weights {:analytical 1.0 :data 0.8}}

   {:question/id "sk-4"
    :question/text "I'm comfortable learning new technology and software."
    :question/type "likert"
    :question/scoring-weights {:technical 1.0}}

   {:question/id "sk-5"
    :question/text "You're leading a team project and a key member isn't contributing. How do you handle it?"
    :question/type "scenario"
    :question/options [{:value "a" :label "Have a private conversation to understand their situation" :score {:communication 0.9 :leadership 0.8}}
                       {:value "b" :label "Redistribute the work among other team members" :score {:leadership 0.6 :practical 0.8}}
                       {:value "c" :label "Report the issue to your supervisor" :score {:hierarchical 0.7}}
                       {:value "d" :label "Motivate them by highlighting the team's goals" :score {:leadership 0.9 :collaborative 0.8}}]}

   {:question/id "sk-6"
    :question/text "Which skills from your athletic experience do you feel are most transferable?"
    :question/type "ranking"
    :question/options [{:value "Time management"}
                       {:value "Working under pressure"}
                       {:value "Team leadership"}
                       {:value "Goal setting"}
                       {:value "Handling criticism"}]}

   ;; Financial
   {:question/id "fin-1"
    :question/text "How important is earning a high salary immediately after graduation?"
    :question/type "likert"
    :question/scoring-weights {:income-priority 1.0 :urgency 0.5}}

   {:question/id "fin-2"
    :question/text "I would accept a lower-paying job if it offered better long-term growth potential."
    :question/type "likert"
    :question/scoring-weights {:income-priority -0.5 :education-openness 0.7}}

   {:question/id "fin-3"
    :question/text "What is your expected salary range 5 years after graduation?"
    :question/type "multiple_choice"
    :question/options [{:value "40-60k" :label "$40,000 - $60,000" :score 0.3}
                       {:value "60-80k" :label "$60,000 - $80,000" :score 0.5}
                       {:value "80-100k" :label "$80,000 - $100,000" :score 0.7}
                       {:value "100k+" :label "Over $100,000" :score 0.9}]}

   {:question/id "fin-4"
    :question/text "I'm willing to invest in additional education (graduate school, certifications) to advance my career."
    :question/type "likert"
    :question/scoring-weights {:education-openness 1.0}}

   {:question/id "fin-5"
    :question/text "Work-life balance is more important to me than career advancement."
    :question/type "likert"
    :question/scoring-weights {:urgency -0.5 :income-priority -0.3}}

   ;; Timeline
   {:question/id "tm-1"
    :question/text "How soon after graduation do you want to start your career?"
    :question/type "multiple_choice"
    :question/options [{:value "immediate" :label "Immediately" :description "Start working right after graduation" :score {:urgency 1.0}}
                       {:value "summer" :label "Within 3 months" :description "Take a short break first" :score {:urgency 0.8}}
                       {:value "year" :label "Within a year" :description "Travel or explore options" :score {:urgency 0.5}}
                       {:value "grad-school" :label "After graduate school" :description "Continue education first" :score {:urgency 0.2 :education-openness 1.0}}]}

   {:question/id "tm-2"
    :question/text "I see myself staying in one career field for most of my professional life."
    :question/type "likert"
    :question/scoring-weights {:stability 1.0}}

   {:question/id "tm-3"
    :question/text "I'm open to careers that require relocation."
    :question/type "likert"
    :question/scoring-weights {:flexibility 1.0 :physical 0.3}}

   {:question/id "tm-4"
    :question/text "Where do you see yourself in 10 years?"
    :question/type "short_text"}

   {:question/id "tm-5"
    :question/text "I'm interested in eventually starting my own business."
    :question/type "likert"
    :question/scoring-weights {:entrepreneurial 1.0 :risk-tolerance 0.8}}])
