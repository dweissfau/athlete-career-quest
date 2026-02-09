(ns app.ui.questions
  "Question type components"
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [app.ui.components :as ui]))

;; Likert Scale Question (1-5 agreement scale)
(defsc LikertQuestion [this {:question/keys [id text options] :keys [value on-change]}]
  {:query [:question/id :question/text :question/options :value :on-change]}
  (let [labels (or options
                   [{:value 1 :label "Strongly Disagree"}
                    {:value 2 :label "Disagree"}
                    {:value 3 :label "Neutral"}
                    {:value 4 :label "Agree"}
                    {:value 5 :label "Strongly Agree"}])]
    (dom/div {:className "card"}
      (dom/div {:className "accent-stripe"})
      (dom/h3 {:style {:marginBottom "24px" :lineHeight "1.4"}} text)
      (dom/div {:className "likert-scale stagger-in"}
        (map (fn [{:keys [value label] :as opt}]
               (let [opt-value (or value (:value opt))]
                 (ui/ui-likert-option
                   {:value opt-value
                    :label label
                    :selected (= opt-value value)
                    :onClick #(on-change {:value %})})))
             labels)))))

(def ui-likert-question (comp/factory LikertQuestion {:keyfn :question/id}))

;; Multiple Choice Question
(defsc MultipleChoiceQuestion [this {:question/keys [id text options] :keys [value on-change]}]
  {:query [:question/id :question/text :question/options :value :on-change]}
  (dom/div {:className "card"}
    (dom/div {:className "accent-stripe"})
    (dom/h3 {:style {:marginBottom "24px" :lineHeight "1.4"}} text)
    (dom/div {:className "multiple-choice stagger-in"}
      (map (fn [{:keys [value label description score] :as opt}]
             (ui/ui-choice-option
               {:value value
                :label label
                :description description
                :selected (= value (:selected value))
                :onClick #(on-change {:selected % :score score})}))
           options))))

(def ui-multiple-choice-question (comp/factory MultipleChoiceQuestion {:keyfn :question/id}))

;; Ranking Question (drag and drop ranking)
(defsc RankingQuestion [this {:question/keys [id text options] :keys [value on-change]}]
  {:query [:question/id :question/text :question/options :value :on-change]}
  (let [current-ranks (or (:ranks value) [])
        available (remove (set current-ranks) (map :value options))]
    (dom/div {:className "card"}
      (dom/div {:className "accent-stripe"})
      (dom/h3 {:style {:marginBottom "12px" :lineHeight "1.4"}} text)
      (dom/p {:style {:color "#64748b" :marginBottom "24px" :fontWeight "500"}}
        "Click items in order of preference (1st = most preferred)")

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
                (dom/span {:style {:background "linear-gradient(135deg, #2563eb, #1d4ed8)"
                                   :color "white"
                                   :borderRadius "50%" :width "32px" :height "32px"
                                   :display "flex" :alignItems "center" :justifyContent "center"
                                   :marginRight "12px" :fontSize "0.9rem" :fontWeight "800"
                                   :flexShrink "0"}}
                  (inc idx))
                (dom/span {:style {:fontWeight "600"}} item)
                (dom/span {:style {:marginLeft "auto" :color "#64748b" :fontSize "0.8rem" :fontWeight "500"}}
                  "Click to remove")))
            current-ranks)))

      ;; Available items
      (when (seq available)
        (dom/div {:className "stagger-in"}
          (dom/h4 {:style {:marginBottom "12px"}} "Available Options:")
          (map (fn [item]
                 (dom/div {:key item
                           :className "choice-option"
                           :style {:marginBottom "8px" :fontWeight "600"}
                           :onClick #(on-change {:ranks (conj current-ranks item)})}
                   item))
               available))))))

(def ui-ranking-question (comp/factory RankingQuestion {:keyfn :question/id}))

;; Short Text Question
(defsc ShortTextQuestion [this {:question/keys [id text] :keys [value on-change]}]
  {:query [:question/id :question/text :value :on-change]}
  (dom/div {:className "card"}
    (dom/div {:className "accent-stripe"})
    (dom/h3 {:style {:marginBottom "24px" :lineHeight "1.4"}} text)
    (dom/textarea
      {:value (or (:text value) "")
       :onChange #(on-change {:text (.. % -target -value)})
       :placeholder "Type your answer here..."
       :style {:width "100%" :minHeight "120px" :padding "14px"
               :border "2px solid #e2e8f0" :borderRadius "12px"
               :fontSize "1rem" :resize "vertical"
               :fontFamily "Inter, sans-serif"}})))

(def ui-short-text-question (comp/factory ShortTextQuestion {:keyfn :question/id}))

;; Scenario Question (situational judgment)
(defsc ScenarioQuestion [this {:question/keys [id text options] :keys [value on-change]}]
  {:query [:question/id :question/text :question/options :value :on-change]}
  (dom/div {:className "card"}
    (dom/div {:style {:background "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.12))"
                      :padding "24px" :borderRadius "12px"
                      :marginBottom "24px" :borderLeft "4px solid #2563eb"}}
      (dom/h3 {:style {:marginBottom "12px" :color "#1d4ed8"}} "Scenario")
      (dom/p {:style {:lineHeight "1.8" :color "#334155"}} text))

    (dom/h4 {:style {:marginBottom "16px"}} "How would you respond?")
    (dom/div {:className "multiple-choice stagger-in"}
      (map (fn [{:keys [value label description score] :as opt}]
             (ui/ui-choice-option
               {:value value
                :label label
                :description description
                :selected (= value (:selected value))
                :onClick #(on-change {:selected % :score score})}))
           options))))

(def ui-scenario-question (comp/factory ScenarioQuestion {:keyfn :question/id}))

;; Question dispatcher - renders the right component based on type
(defsc Question [this {:question/keys [id text type options scoring-weights] :as question}]
  {:query [:question/id :question/text :question/type :question/options :question/scoring-weights]
   :ident :question/id}
  (let [value (comp/get-computed this :value)
        on-change (comp/get-computed this :on-change)]
    (case type
      "likert" (ui-likert-question (assoc question :value value :on-change on-change))
      "multiple_choice" (ui-multiple-choice-question (assoc question :value value :on-change on-change))
      "ranking" (ui-ranking-question (assoc question :value value :on-change on-change))
      "short_text" (ui-short-text-question (assoc question :value value :on-change on-change))
      "scenario" (ui-scenario-question (assoc question :value value :on-change on-change))
      ;; Default fallback
      (dom/div {:className "card"}
        (dom/p {:style {:fontWeight "600"}} "Unknown question type: " type)))))

(def ui-question (comp/factory Question {:keyfn :question/id}))
