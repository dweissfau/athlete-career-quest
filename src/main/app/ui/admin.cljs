(ns app.ui.admin
  "Admin dashboard component"
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
            [app.ui.components :as ui]))

;; Mutations
(defmutation set-active-tab
  [{:keys [tab]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:admin/dashboard :admin :active-tab] tab)))

(defmutation update-weight
  [{:keys [category weight]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:admin/dashboard :admin :weights category] weight)))

;; Question List Item
(defsc QuestionListItem [this {:question/keys [id text type is-active]}]
  {:query [:question/id :question/text :question/type :question/is-active]}
  (let [on-edit (comp/get-computed this :on-edit)
        on-toggle (comp/get-computed this :on-toggle)]
    (dom/div {:className "card" :style {:marginBottom "12px" :display "flex" :alignItems "center"}}
      (dom/div {:style {:flex 1}}
        (dom/div {:style {:fontWeight "500" :marginBottom "4px"}} text)
        (dom/div {:style {:display "flex" :gap "12px"}}
          (dom/span {:style {:fontSize "0.8rem" :color "#64748b"
                            :backgroundColor "#f1f5f9" :padding "2px 8px" :borderRadius "4px"}}
            type)
          (dom/span {:style {:fontSize "0.8rem"
                            :color (if is-active "#166534" "#991b1b")
                            :backgroundColor (if is-active "#dcfce7" "#fee2e2")
                            :padding "2px 8px" :borderRadius "4px"}}
            (if is-active "Active" "Inactive"))))
      (dom/div {:style {:display "flex" :gap "8px"}}
        (dom/button {:className "btn btn-secondary"
                     :style {:padding "8px 12px" :fontSize "0.85rem"}
                     :onClick on-edit}
          "Edit")
        (dom/button {:className "btn btn-secondary"
                     :style {:padding "8px 12px" :fontSize "0.85rem"}
                     :onClick on-toggle}
          (if is-active "Deactivate" "Activate"))))))

(def ui-question-list-item (comp/factory QuestionListItem {:keyfn :question/id}))

;; Weight Slider
(defsc WeightSlider [this {:keys [label value min max step on-change]}]
  (dom/div {:style {:marginBottom "24px"}}
    (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "8px"}}
      (dom/label label)
      (dom/span {:style {:fontWeight "500"}} (str (Math/round (* value 100)) "%")))
    (dom/input {:type "range"
                :min min
                :max max
                :step step
                :value value
                :onChange #(on-change (js/parseFloat (.. % -target -value)))
                :style {:width "100%"}})))

(def ui-weight-slider (comp/factory WeightSlider {:keyfn :label}))

;; Stats Card
(defsc StatsCard [this {:keys [title value subtitle color]}]
  (dom/div {:className "card" :style {:textAlign "center" :padding "24px"}}
    (dom/div {:style {:fontSize "2.5rem" :fontWeight "bold" :color (or color "#2563eb")}}
      value)
    (dom/div {:style {:fontWeight "500" :marginBottom "4px"}} title)
    (when subtitle
      (dom/div {:style {:fontSize "0.9rem" :color "#64748b"}} subtitle))))

(def ui-stats-card (comp/factory StatsCard {:keyfn :title}))

;; Question Management Tab
(defsc QuestionManagement [this {:keys [questions categories]}]
  (dom/div
    (dom/div {:style {:display "flex" :justifyContent "space-between" :alignItems "center" :marginBottom "24px"}}
      (dom/h3 "Question Bank")
      (dom/button {:className "btn btn-primary"}
        "+ Add Question"))

    ;; Category filter
    (dom/div {:style {:marginBottom "24px"}}
      (dom/label {:style {:marginRight "12px"}} "Filter by category:")
      (dom/select {:style {:padding "8px 16px" :borderRadius "6px" :border "1px solid #e2e8f0"}}
        (dom/option {:value ""} "All Categories")
        (for [{:category/keys [id display-name]} categories]
          (dom/option {:key id :value id} display-name))))

    ;; Question list
    (for [question questions]
      (ui-question-list-item
        (assoc question
               :on-edit #(js/console.log "Edit" (:question/id question))
               :on-toggle #(js/console.log "Toggle" (:question/id question)))))))

(def ui-question-management (comp/factory QuestionManagement))

;; Scoring Configuration Tab
(defsc ScoringConfiguration [this {:keys [weights on-weight-change]}]
  (dom/div
    (dom/h3 {:style {:marginBottom "24px"}} "Category Weights")
    (dom/p {:style {:color "#64748b" :marginBottom "24px"}}
      "Adjust how much each category contributes to the final career recommendations.")

    (dom/div {:className "card"}
      (ui-weight-slider {:label "Interests & Passions"
                         :value (get weights :interests 0.25)
                         :min 0 :max 1 :step 0.05
                         :on-change #(on-weight-change :interests %)})
      (ui-weight-slider {:label "Skills & Strengths"
                         :value (get weights :skills 0.30)
                         :min 0 :max 1 :step 0.05
                         :on-change #(on-weight-change :skills %)})
      (ui-weight-slider {:label "Financial Goals"
                         :value (get weights :financial 0.20)
                         :min 0 :max 1 :step 0.05
                         :on-change #(on-weight-change :financial %)})
      (ui-weight-slider {:label "Timeline Preferences"
                         :value (get weights :timeline 0.25)
                         :min 0 :max 1 :step 0.05
                         :on-change #(on-weight-change :timeline %)})

      (let [total (reduce + (vals weights))]
        (dom/div {:style {:marginTop "24px" :paddingTop "16px" :borderTop "1px solid #e2e8f0"
                          :display "flex" :justifyContent "space-between" :alignItems "center"}}
          (dom/span (str "Total: " (Math/round (* total 100)) "%"))
          (when (not= (Math/round (* total 100)) 100)
            (dom/span {:style {:color "#ef4444" :fontSize "0.9rem"}}
              "Weights should sum to 100%")))))

    (dom/div {:style {:marginTop "24px"}}
      (dom/button {:className "btn btn-primary"} "Save Weights")
      (dom/button {:className "btn btn-secondary" :style {:marginLeft "12px"}}
        "Reset to Default"))))

(def ui-scoring-configuration (comp/factory ScoringConfiguration))

;; Analytics Tab
(defsc AnalyticsTab [this {:keys [stats popular-careers completion-trend]}]
  (dom/div
    (dom/h3 {:style {:marginBottom "24px"}} "Analytics Overview")

    ;; Stats row
    (dom/div {:style {:display "grid" :gridTemplateColumns "repeat(auto-fit, minmax(200px, 1fr))"
                      :gap "16px" :marginBottom "32px"}}
      (ui-stats-card {:title "Total Sessions" :value (:total stats) :subtitle "All time"})
      (ui-stats-card {:title "Completed" :value (:completed stats) :subtitle "Finished assessment"
                      :color "#22c55e"})
      (ui-stats-card {:title "Completion Rate" :value (str (:rate stats) "%")
                      :subtitle "Of all sessions" :color "#f59e0b"})
      (ui-stats-card {:title "Avg. Duration" :value (:duration stats) :subtitle "Minutes"}))

    ;; Popular careers
    (dom/div {:className "card"}
      (dom/h4 {:style {:marginBottom "16px"}} "Most Recommended Careers")
      (for [{:keys [name count percentage]} popular-careers]
        (dom/div {:key name :style {:marginBottom "12px"}}
          (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "4px"}}
            (dom/span name)
            (dom/span {:style {:color "#64748b"}} (str count " (" percentage "%)")))
          (dom/div {:className "progress-bar"}
            (dom/div {:className "progress-bar-fill"
                      :style {:width (str percentage "%")}})))))

    ;; Drop-off analysis
    (dom/div {:className "card" :style {:marginTop "24px"}}
      (dom/h4 {:style {:marginBottom "16px"}} "Question Drop-off Points")
      (dom/p {:style {:color "#64748b" :marginBottom "16px"}}
        "Questions where users most commonly stop the assessment.")
      (dom/table {:style {:width "100%"}}
        (dom/thead
          (dom/tr {:style {:textAlign "left" :borderBottom "1px solid #e2e8f0"}}
            (dom/th {:style {:padding "12px 0"}} "Question")
            (dom/th {:style {:padding "12px 0"}} "Drop-off Rate")))
        (dom/tbody
          (dom/tr {:style {:borderBottom "1px solid #e2e8f0"}}
            (dom/td {:style {:padding "12px 0"}} "Q15: Financial Goals")
            (dom/td {:style {:padding "12px 0"}} "8.2%"))
          (dom/tr {:style {:borderBottom "1px solid #e2e8f0"}}
            (dom/td {:style {:padding "12px 0"}} "Q8: Skills Ranking")
            (dom/td {:style {:padding "12px 0"}} "5.1%"))
          (dom/tr
            (dom/td {:style {:padding "12px 0"}} "Q22: Long-term Vision")
            (dom/td {:style {:padding "12px 0"}} "4.3%")))))))

(def ui-analytics-tab (comp/factory AnalyticsTab))

;; Main Admin Dashboard
(defsc AdminDashboard [this {:admin/keys [active-tab weights stats questions categories
                                           popular-careers]}]
  {:query [:admin/active-tab
           :admin/weights
           :admin/stats
           {:admin/questions [:question/id :question/text :question/type :question/is-active]}
           {:admin/categories [:category/id :category/name :category/display-name]}
           :admin/popular-careers]
   :ident (fn [] [:admin/dashboard :admin])
   :initial-state (fn [_]
                    {:admin/active-tab :questions
                     :admin/weights {:interests 0.25 :skills 0.30 :financial 0.20 :timeline 0.25}
                     :admin/stats {:total 1247 :completed 892 :rate 72 :duration "14"}
                     :admin/questions [{:question/id "1" :question/text "What year are you in school?"
                                        :question/type "multiple_choice" :question/is-active true}
                                       {:question/id "2" :question/text "I enjoy working directly with people."
                                        :question/type "likert" :question/is-active true}
                                       {:question/id "3" :question/text "Rank these activities..."
                                        :question/type "ranking" :question/is-active true}]
                     :admin/categories [{:category/id "1" :category/name "background"
                                         :category/display-name "Background"}
                                        {:category/id "2" :category/name "interests"
                                         :category/display-name "Interests"}
                                        {:category/id "3" :category/name "skills"
                                         :category/display-name "Skills"}]
                     :admin/popular-careers [{:name "Sports Marketing" :count 234 :percentage 26}
                                             {:name "Athletic Director" :count 189 :percentage 21}
                                             {:name "Corporate Sales" :count 156 :percentage 17}
                                             {:name "Sports Agent" :count 142 :percentage 16}
                                             {:name "Brand Manager" :count 112 :percentage 13}]})}

  (dom/div
    ;; Header
    (dom/div {:style {:marginBottom "32px"}}
      (dom/h1 {:style {:marginBottom "8px"}} "Admin Dashboard")
      (dom/p {:style {:color "#64748b"}} "Manage questions, scoring weights, and view analytics."))

    ;; Tab navigation
    (dom/div {:style {:display "flex" :gap "8px" :marginBottom "24px" :borderBottom "2px solid #e2e8f0"
                      :paddingBottom "8px"}}
      (for [[tab label] [[:questions "Questions"]
                         [:scoring "Scoring"]
                         [:analytics "Analytics"]
                         [:users "Users"]]]
        (dom/button {:key tab
                     :className (str "btn " (if (= active-tab tab) "btn-primary" "btn-secondary"))
                     :style {:borderRadius "6px 6px 0 0"}
                     :onClick #(comp/transact! this [(set-active-tab {:tab tab})])}
          label)))

    ;; Tab content
    (case active-tab
      :questions
      (ui-question-management {:questions questions :categories categories})

      :scoring
      (ui-scoring-configuration {:weights weights
                                 :on-weight-change (fn [cat val]
                                                     (comp/transact! this
                                                       [(update-weight {:category cat :weight val})]))})

      :analytics
      (ui-analytics-tab {:stats stats :popular-careers popular-careers})

      :users
      (dom/div {:className "card" :style {:textAlign "center" :padding "48px"}}
        (dom/h3 "User Management")
        (dom/p {:style {:color "#64748b"}}
          "User authentication integration coming soon."))

      ;; Default
      (dom/div "Select a tab"))))

(def ui-admin-dashboard (comp/factory AdminDashboard))
