(ns app.ui.components
  "Shared UI components"
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]))

;; Progress Bar
(defsc ProgressBar [this {:keys [current total]}]
  {:query [:current :total]}
  (let [percentage (if (pos? total) (* 100 (/ current total)) 0)]
    (dom/div {:className "progress-container" :style {:marginBottom "28px"}}
      (dom/div {:style {:display "flex" :justifyContent "space-between" :alignItems "baseline" :marginBottom "10px"}}
        (dom/span {:style {:fontSize "0.95rem" :fontWeight "700" :color "#0f172a"}}
          (str "Question " current " of " total))
        (dom/span {:style {:fontSize "0.9rem" :fontWeight "600" :color "#2563eb"}}
          (str (Math/round percentage) "%")))
      (dom/div {:className "progress-bar"}
        (dom/div {:className "progress-bar-fill"
                  :style {:width (str percentage "%")}})))))

(def ui-progress-bar (comp/factory ProgressBar))

;; Button
(defsc Button [this {:keys [label onClick variant disabled className]}]
  (dom/button
    {:className (str "btn "
                     (case variant
                       :primary "btn-primary"
                       :secondary "btn-secondary"
                       "btn-primary")
                     " " className)
     :onClick onClick
     :disabled disabled}
    label))

(def ui-button (comp/factory Button))

;; Card
(defsc Card [this {:keys [title children className]}]
  (dom/div {:className (str "card " className)}
    (when title
      (dom/h3 {:style {:marginBottom "16px"}} title))
    children))

(def ui-card (comp/factory Card))

;; Score Bar (for results display)
(defsc ScoreBar [this {:keys [label score max-score color]}]
  (let [percentage (* 100 (/ score (or max-score 1)))]
    (dom/div {:style {:marginBottom "16px"}}
      (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "4px"}}
        (dom/span {:style {:fontWeight "600"}} label)
        (dom/span {:style {:fontWeight "700" :color "#2563eb"}} (str (Math/round (* score 100)) "%")))
      (dom/div {:className "score-bar"}
        (dom/div {:className "score-bar-fill"
                  :style {:width (str percentage "%")
                          :backgroundColor (or color "white")}})))))

(def ui-score-bar (comp/factory ScoreBar))

;; Likert Scale Option
(defsc LikertOption [this {:keys [value label selected onClick]}]
  (dom/div {:className (str "likert-option " (when selected "selected"))
            :onClick #(onClick value)}
    (dom/div {:style {:fontSize "1.3rem" :fontWeight "800"}} value)
    (when label
      (dom/div {:style {:fontSize "0.8rem" :fontWeight "600" :color "#64748b" :marginTop "2px"}} label))))

(def ui-likert-option (comp/factory LikertOption {:keyfn :value}))

;; Multiple Choice Option
(defsc ChoiceOption [this {:keys [value label description selected onClick]}]
  (dom/div {:className (str "choice-option " (when selected "selected"))
            :onClick #(onClick value)}
    (dom/div {:style {:fontWeight "700"}} label)
    (when description
      (dom/div {:style {:fontSize "0.9rem" :color "#64748b" :marginTop "4px"}}
        description))))

(def ui-choice-option (comp/factory ChoiceOption {:keyfn :value}))

;; Section Header
(defsc SectionHeader [this {:keys [title subtitle icon]}]
  (dom/div {:style {:marginBottom "24px" :textAlign "center"}}
    (when icon
      (dom/div {:style {:fontSize "2rem" :marginBottom "8px"}} icon))
    (dom/h2 {:style {:fontSize "1.6rem" :marginBottom "8px"}} title)
    (when subtitle
      (dom/p {:style {:color "#64748b" :fontWeight "500"}} subtitle))))

(def ui-section-header (comp/factory SectionHeader))

;; Alert
(defsc Alert [this {:keys [type message]}]
  (dom/div {:className "card"
            :style {:borderLeft (str "4px solid " (case type
                                                    :success "#22c55e"
                                                    :warning "#f59e0b"
                                                    :error "#ef4444"
                                                    "#2563eb"))
                    :backgroundColor (case type
                                       :success "#f0fdf4"
                                       :warning "#fffbeb"
                                       :error "#fef2f2"
                                       "#eff6ff")}}
    message))

(def ui-alert (comp/factory Alert))

;; Loading Spinner
(defsc LoadingSpinner [this {:keys [message]}]
  (dom/div {:style {:display "flex" :flexDirection "column" :alignItems "center"
                    :justifyContent "center" :padding "48px"}}
    (dom/div {:style {:width "48px" :height "48px" :border "4px solid #e2e8f0"
                      :borderTopColor "#2563eb" :borderRadius "50%"
                      :animation "spin 0.8s linear infinite"}})
    (when message
      (dom/p {:style {:marginTop "16px" :color "#64748b" :fontWeight "600"}} message))))

(def ui-loading-spinner (comp/factory LoadingSpinner))

;; Recommendation Card
(defsc RecommendationCard [this {:keys [title confidence recommended reasoning items]}]
  (dom/div {:className "card" :style {:marginBottom "16px"}}
    (dom/div {:style {:display "flex" :justifyContent "space-between" :alignItems "center"
                      :marginBottom "16px"}}
      (dom/h3 {:style {:margin 0}} title)
      (dom/span {:style {:backgroundColor (if recommended "#dcfce7" "#fee2e2")
                         :color (if recommended "#166534" "#991b1b")
                         :padding "4px 14px"
                         :borderRadius "9999px"
                         :fontSize "0.85rem"
                         :fontWeight "700"}}
        (if recommended "Recommended" "Consider")))

    (dom/div {:style {:marginBottom "16px"}}
      (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "4px"}}
        (dom/span {:style {:fontWeight "600"}} "Confidence")
        (dom/span {:style {:fontWeight "700" :color "#2563eb"}} (str (Math/round (* confidence 100)) "%")))
      (dom/div {:className "progress-bar"}
        (dom/div {:className "progress-bar-fill"
                  :style {:width (str (* confidence 100) "%")}})))

    (when reasoning
      (dom/p {:style {:color "#64748b" :marginBottom "16px" :lineHeight "1.6"}} reasoning))

    (when (seq items)
      (dom/div
        (dom/strong "Suggested: ")
        (dom/span (clojure.string/join ", " items))))))

(def ui-recommendation-card (comp/factory RecommendationCard {:keyfn :title}))

;; Roadmap Phase
(defsc RoadmapPhase [this {:keys [phase actions]}]
  (dom/div {:className "recommendation-item"}
    (dom/h4 {:style {:marginBottom "8px" :color "#2563eb"}} phase)
    (dom/ul {:style {:margin 0 :paddingLeft "20px"}}
      (map-indexed
        (fn [idx action]
          (dom/li {:key idx :style {:marginBottom "6px" :lineHeight "1.5"}} action))
        (filter some? actions)))))

(def ui-roadmap-phase (comp/factory RoadmapPhase {:keyfn :phase}))

;; Personalized Advice Card
(defsc PersonalizedAdviceCard [this {:keys [headline recommendation-level paragraphs career-name timing]}]
  (let [level-styles {:essential ["#dcfce7" "#166534" "Essential"]
                      :highly-recommended ["#dbeafe" "#1d4ed8" "Highly Recommended"]
                      :recommended ["#e0f2fe" "#0369a1" "Recommended"]
                      :helpful ["#fef3c7" "#92400e" "Helpful"]
                      :optional ["#f1f5f9" "#475569" "Optional"]
                      :required ["#dcfce7" "#166534" "Required"]}
        [bg text label] (get level-styles recommendation-level ["#f1f5f9" "#475569" "Consider"])]
    (dom/div {:className "card"}
      ;; Header with badge
      (dom/div {:style {:display "flex" :justifyContent "space-between" :alignItems "flex-start" :marginBottom "16px"}}
        (dom/h3 {:style {:margin 0 :flex 1 :paddingRight "12px"}} headline)
        (dom/span {:style {:backgroundColor bg :color text :padding "4px 14px"
                           :borderRadius "9999px" :fontSize "0.85rem" :fontWeight "700"
                           :whiteSpace "nowrap"}} label))
      ;; Paragraphs
      (dom/div {:style {:marginBottom "16px"}}
        (map-indexed (fn [i p]
                       (dom/p {:key i :style {:color "#475569" :lineHeight "1.7" :marginBottom "12px"}} p))
                     (filter some? paragraphs)))
      ;; Timing (grad school only)
      (when timing
        (dom/p {:style {:color "#64748b" :fontStyle "italic" :marginBottom "12px"}} (str "Timing: " timing)))
      ;; Career reference footer
      (dom/div {:style {:borderTop "1px solid #e2e8f0" :paddingTop "12px" :marginTop "12px"}}
        (dom/span {:style {:fontSize "0.85rem" :color "#64748b"}} "Based on your top matches in ")
        (dom/span {:style {:fontSize "0.85rem" :color "#2563eb" :fontWeight "700"}} career-name)))))

(def ui-personalized-advice-card (comp/factory PersonalizedAdviceCard {:keyfn :headline}))
