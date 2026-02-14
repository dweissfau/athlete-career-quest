(ns app.ui.questionnaire
  "Main questionnaire UI component"
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
            [com.fulcrologic.fulcro.algorithms.merge :as merge]
            [com.fulcrologic.fulcro.data-fetch :as df]
            [com.fulcrologic.fulcro.routing.dynamic-routing :as dr]
            [app.ui.components :as ui]
            [app.ui.questions :as questions]
            [app.client.app :as client-app]))

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
    (swap! state assoc-in [:questionnaire/id :main :transition-direction] "forward")
    (swap! state assoc-in [:questionnaire/id :main :transitioning] true)
    ;; Use a timeout to allow exit animation, then switch question
    (js/setTimeout
      (fn []
        (swap! state update-in [:questionnaire/id :main :current-index] inc)
        (swap! state assoc-in [:questionnaire/id :main :current-response] nil)
        (swap! state assoc-in [:questionnaire/id :main :transitioning] false))
      300)))

(defmutation previous-question
  "Move to the previous question"
  [_]
  (action [{:keys [state]}]
    (swap! state assoc-in [:questionnaire/id :main :transition-direction] "backward")
    (swap! state assoc-in [:questionnaire/id :main :transitioning] true)
    (js/setTimeout
      (fn []
        (swap! state update-in [:questionnaire/id :main :current-index] dec)
        (swap! state assoc-in [:questionnaire/id :main :current-response] nil)
        (swap! state assoc-in [:questionnaire/id :main :transitioning] false))
      300)))

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
            :show-intro true
            :transitioning false
            :transition-direction "forward"})))

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
  (dom/div {:className "card fade-in" :style {:textAlign "center" :padding "48px"}}
    (dom/h2 {:style {:marginBottom "16px" :color "#2563eb"}} display-name)
    (dom/p {:style {:color "#64748b" :marginBottom "32px" :maxWidth "500px" :margin "0 auto 32px"}}
      description)
    (dom/button {:className "btn btn-primary"
                 :onClick on-continue}
      "Begin Section")))

(def ui-category-intro (comp/factory CategoryIntro))

;; Question navigation
(defsc QuestionNavigation [this {:keys [current-index total can-go-back on-back on-next on-skip has-response is-last transitioning]}]
  (dom/div {:style {:display "flex" :justifyContent "space-between" :marginTop "28px"}}
    (if can-go-back
      (dom/button {:className "btn btn-secondary"
                   :disabled transitioning
                   :onClick on-back}
        "Back")
      (dom/div))

    (dom/div {:style {:display "flex" :gap "12px"}}
      (when-not is-last
        (dom/button {:className "btn btn-secondary"
                     :disabled transitioning
                     :onClick on-skip}
          "Skip"))
      (dom/button {:className "btn btn-primary"
                   :onClick on-next
                   :disabled (or transitioning (and (not has-response) is-last))}
        (if is-last "See Results" "Next")))))

(def ui-question-navigation (comp/factory QuestionNavigation))

;; Main questionnaire component
(defsc Questionnaire [this {:questionnaire/keys [id current-index current-response responses
                                                   is-complete show-intro questions categories
                                                   transitioning transition-direction]}]
  {:query [:questionnaire/id
           :questionnaire/current-index
           :questionnaire/current-response
           :questionnaire/responses
           :questionnaire/is-complete
           :questionnaire/show-intro
           :questionnaire/transitioning
           :questionnaire/transition-direction
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
                     :questionnaire/transitioning false
                     :questionnaire/transition-direction "forward"
                     :questionnaire/questions (get-sample-questions)
                     :questionnaire/categories (get-sample-categories)})}

  (let [total-questions (count questions)
        current-question (get questions current-index)
        current-question-id (:question/id current-question)
        saved-response (get responses current-question-id)
        response-value (or current-response saved-response)
        has-response (some? response-value)
        is-last (= current-index (dec total-questions))
        ;; Determine animation class
        anim-class (cond
                     transitioning
                     (if (= transition-direction "forward") "question-exit" "question-exit-back")
                     :else
                     (if (= transition-direction "forward") "question-enter" "question-enter-back"))]

    (cond
      ;; Show intro screen
      show-intro
      (dom/div {:className "container"}
        (dom/div {:className "card fade-in" :style {:textAlign "center" :padding "48px 32px"}}
          (dom/div {:className "accent-stripe"})
          (dom/h1 {:style {:fontSize "2.25rem" :marginBottom "12px"}}
            "Career Path Assessment")
          (dom/p {:style {:color "#64748b" :marginBottom "32px" :maxWidth "520px"
                          :margin "0 auto 32px" :fontSize "1.05rem" :lineHeight "1.7"}}
            "Discover career paths that align with your interests, skills, and goals as a student athlete. Answer honestly \u2014 there are no right or wrong answers.")

          (dom/div {:style {:display "flex" :justifyContent "center" :gap "40px" :marginBottom "40px"}
                    :className "stagger-in"}
            (dom/div {:className "intro-stat"}
              (dom/div {:className "intro-stat-value"} total-questions)
              (dom/div {:className "intro-stat-label"} "Questions"))
            (dom/div {:className "intro-stat"}
              (dom/div {:className "intro-stat-value"} "~20")
              (dom/div {:className "intro-stat-label"} "Minutes"))
            (dom/div {:className "intro-stat"}
              (dom/div {:className "intro-stat-value"} "4")
              (dom/div {:className "intro-stat-label"} "Recommendations")))

          (dom/button {:className "btn btn-primary"
                       :style {:fontSize "1.1rem" :padding "16px 52px"}
                       :onClick #(comp/transact! this [(hide-intro {})])}
            "Start Assessment")))

      ;; Show completion screen
      is-complete
      (dom/div {:className "container"}
        (dom/div {:className "card fade-in" :style {:textAlign "center" :padding "56px 32px"}}
          (dom/div {:className "accent-stripe"})
          (dom/div {:style {:fontSize "3.5rem" :marginBottom "16px"
                            :background "linear-gradient(135deg, #2563eb, #3b82f6)"
                            :WebkitBackgroundClip "text"
                            :WebkitTextFillColor "transparent"
                            :fontWeight "900"}}
            "\u2713")
          (dom/h2 {:style {:marginBottom "12px"}} "Assessment Complete!")
          (dom/p {:style {:color "#64748b" :marginBottom "32px" :fontSize "1.05rem"}}
            "Your personalized career recommendations are ready.")
          (dom/button {:className "btn btn-primary"
                       :style {:padding "16px 48px"}
                       :onClick #(dr/change-route! this ["results"])}
            "View Your Results")))

      ;; Show current question
      :else
      (dom/div {:className "container"}
        ;; Progress bar
        (ui/ui-progress-bar {:current (inc current-index) :total total-questions})

        ;; Question with transition animation
        (dom/div {:className anim-class :key current-index}
          (questions/ui-question
            (comp/computed current-question
                           {:value response-value
                            :on-change (fn [value]
                                         (comp/transact! this [(set-current-response {:value value})]))})))

        ;; Navigation
        (ui-question-navigation
          {:current-index current-index
           :total total-questions
           :can-go-back (pos? current-index)
           :has-response has-response
           :is-last is-last
           :transitioning transitioning
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
  [{:category/id "likert"
    :category/name "likert"
    :category/display-name "Self-Assessment"
    :category/description "Rate how much you agree with each statement about yourself."}
   {:category/id "true-false"
    :category/name "true-false"
    :category/display-name "Career Tendencies"
    :category/description "Answer True or False based on your career preferences."}
   {:category/id "multiple-choice"
    :category/name "multiple-choice"
    :category/display-name "Interest & Industry"
    :category/description "Select the option that best matches your interests."}])

(defn get-sample-questions
  "Derives questions from the single source of truth in app.client.app/sample-questions.
   Transforms flat keys (:id, :text, :type) to namespaced Fulcro keys (:question/id, etc.)."
  []
  (mapv (fn [q]
          (cond-> {:question/id (:id q)
                   :question/text (:text q)
                   :question/type (:type q)}
            (:scoring-weights q) (assoc :question/scoring-weights (:scoring-weights q))
            (:options q)         (assoc :question/options (:options q))))
        client-app/sample-questions))
