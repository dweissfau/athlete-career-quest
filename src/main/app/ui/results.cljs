(ns app.ui.results
  "Results display component"
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.routing.dynamic-routing :as dr]
            [app.ui.components :as ui]))

;; Career Match Card
(defsc CareerMatch [this {:keys [career-name career-category match-score typical-majors]}]
  (dom/div {:className "card" :style {:marginBottom "12px"}}
    (dom/div {:style {:display "flex" :justifyContent "space-between" :alignItems "center"}}
      (dom/div
        (dom/h4 {:style {:margin "0 0 4px 0"}} career-name)
        (dom/span {:style {:color "#64748b" :fontSize "0.9rem"}} career-category))
      (dom/div {:style {:textAlign "right"}}
        (dom/div {:style {:fontSize "1.5rem" :fontWeight "bold" :color "#2563eb"}}
          (str (Math/round (* match-score 100)) "%"))
        (dom/div {:style {:fontSize "0.8rem" :color "#64748b"}} "Match")))
    (when (seq typical-majors)
      (dom/div {:style {:marginTop "12px" :paddingTop "12px" :borderTop "1px solid #e2e8f0"}}
        (dom/span {:style {:fontSize "0.85rem" :color "#64748b"}} "Related majors: ")
        (dom/span {:style {:fontSize "0.85rem"}} (clojure.string/join ", " (take 3 typical-majors)))))))

(def ui-career-match (comp/factory CareerMatch {:keyfn :career-name}))

;; Profile Dimension Display
(defsc DimensionScore [this {:keys [dimension score]}]
  (let [dimension-labels {:people "People-Oriented"
                          :data "Data-Driven"
                          :creative "Creative"
                          :analytical "Analytical"
                          :leadership "Leadership"
                          :communication "Communication"
                          :technical "Technical"
                          :competitive "Competitive"
                          :collaborative "Collaborative"
                          :risk-tolerance "Risk Tolerance"
                          :income-priority "Income Focus"
                          :education-openness "Education-Oriented"
                          :urgency "Career Urgency"
                          :entrepreneurial "Entrepreneurial"}
        label (get dimension-labels dimension (name dimension))
        percentage (* score 100)]
    (dom/div {:style {:marginBottom "12px"}}
      (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "4px"}}
        (dom/span {:style {:fontSize "0.9rem"}} label)
        (dom/span {:style {:fontSize "0.9rem" :color "#64748b"}}
          (str (Math/round percentage) "%")))
      (dom/div {:className "progress-bar"}
        (dom/div {:className "progress-bar-fill"
                  :style {:width (str percentage "%")}})))))

(def ui-dimension-score (comp/factory DimensionScore {:keyfn :dimension}))

;; Main Results Component
(defsc Results [this {:results/keys [profile category-scores dimension-scores career-scores recommendations roadmap]}]
  {:query [:results/profile
           :results/category-scores
           :results/dimension-scores
           :results/career-scores
           :results/recommendations
           :results/roadmap]
   :ident (fn [] [:component/id :results])
   :initial-state (fn [_]
                    ;; Sample results for demo
                    {:results/profile {:dimensions {:leadership 0.85
                                                    :communication 0.78
                                                    :analytical 0.62
                                                    :creative 0.55
                                                    :people 0.82
                                                    :competitive 0.75}}
                     :results/dimension-scores {:leadership 0.85
                                                :communication 0.78
                                                :analytical 0.62
                                                :creative 0.55
                                                :people 0.82
                                                :competitive 0.75
                                                :technical 0.45
                                                :risk-tolerance 0.68
                                                :income-priority 0.72
                                                :education-openness 0.65}
                     :results/career-scores [{:career-name "Sports Marketing Manager"
                                              :career-category "Sports Business"
                                              :match-score 0.88
                                              :typical-majors ["Marketing" "Business Administration" "Sports Management"]}
                                             {:career-name "Athletic Director"
                                              :career-category "Sports Administration"
                                              :match-score 0.85
                                              :typical-majors ["Sports Management" "Business Administration" "Education"]}
                                             {:career-name "Corporate Sales Executive"
                                              :career-category "Business"
                                              :match-score 0.82
                                              :typical-majors ["Business" "Marketing" "Communications"]}
                                             {:career-name "Sports Agent"
                                              :career-category "Sports Business"
                                              :match-score 0.79
                                              :typical-majors ["Sports Management" "Law" "Business"]}
                                             {:career-name "Brand Manager"
                                              :career-category "Marketing"
                                              :match-score 0.76
                                              :typical-majors ["Marketing" "Business" "Communications"]}]
                     :results/recommendations {:internship {:recommended true
                                                            :confidence 0.85
                                                            :reasoning "Your strong leadership and communication skills make you well-suited for competitive internship programs in sports business and marketing."
                                                            :suggested-types ["Sports Marketing" "Corporate Sales" "Athletic Administration"]}
                                               :major {:top-3 [{:name "Sports Management" :fit 0.88}
                                                               {:name "Business Administration" :fit 0.82}
                                                               {:name "Marketing" :fit 0.78}]
                                                       :confidence 0.85}
                                               :grad-school {:recommended true
                                                             :confidence 0.72
                                                             :timing "After 2-3 years of work experience"
                                                             :suggested-programs ["MBA" "MS in Sports Management" "JD (if pursuing sports law)"]}
                                               :industry {:top-3 [{:name "Sports Business" :fit 0.87}
                                                                  {:name "Marketing & Advertising" :fit 0.79}
                                                                  {:name "Corporate Sales" :fit 0.74}]
                                                          :confidence 0.82}}
                     :results/roadmap [{:phase "Now"
                                        :actions ["Begin researching sports marketing internships"
                                                  "Connect with your university's career services"
                                                  "Join sports business student organizations"]}
                                       {:phase "Sophomore Year"
                                        :actions ["Secure first internship in sports marketing or sales"
                                                  "Declare Sports Management or Business major"
                                                  "Build network through industry events"]}
                                       {:phase "Junior Year"
                                        :actions ["Complete competitive internship with professional sports team"
                                                  "Develop specialization in marketing or management"
                                                  "Begin informational interviews with industry professionals"]}
                                       {:phase "Senior Year"
                                        :actions ["Apply to entry-level positions in sports business"
                                                  "Consider MBA programs for future advancement"
                                                  "Leverage athletic network for job opportunities"]}]})}

  (dom/div
    ;; Header
    (dom/div {:className "result-card"}
      (dom/h1 {:style {:margin "0 0 8px 0"}} "Your Career Profile")
      (dom/p {:style {:opacity "0.9"}}
        "Based on your responses, here are your personalized career recommendations."))

    ;; Your Profile Section
    (dom/div {:className "card"}
      (dom/h2 {:style {:marginBottom "24px"}} "Your Strengths Profile")
      (dom/div {:style {:display "grid" :gridTemplateColumns "repeat(auto-fit, minmax(280px, 1fr))" :gap "24px"}}
        (dom/div
          (dom/h4 {:style {:marginBottom "16px" :color "#64748b"}} "Top Strengths")
          (for [[dim score] (take 5 (sort-by val > dimension-scores))]
            (ui-dimension-score {:dimension dim :score score})))
        (dom/div
          (dom/h4 {:style {:marginBottom "16px" :color "#64748b"}} "Other Dimensions")
          (for [[dim score] (drop 5 (sort-by val > dimension-scores))]
            (ui-dimension-score {:dimension dim :score score})))))

    ;; Top Career Matches
    (dom/div {:className "card"}
      (dom/h2 {:style {:marginBottom "24px"}} "Top Career Matches")
      (for [career career-scores]
        (ui-career-match career)))

    ;; Key Recommendations
    (dom/h2 {:style {:marginTop "32px" :marginBottom "24px"}} "Key Recommendations")

    (dom/div {:style {:display "grid" :gridTemplateColumns "repeat(auto-fit, minmax(300px, 1fr))" :gap "16px"}}
      ;; Internship
      (ui/ui-recommendation-card
        {:title "Internships"
         :recommended (get-in recommendations [:internship :recommended])
         :confidence (get-in recommendations [:internship :confidence])
         :reasoning (get-in recommendations [:internship :reasoning])
         :items (get-in recommendations [:internship :suggested-types])})

      ;; Major
      (dom/div {:className "card"}
        (dom/h3 {:style {:marginBottom "16px"}} "Recommended Majors")
        (dom/div {:style {:marginBottom "16px"}}
          (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "4px"}}
            (dom/span "Confidence")
            (dom/span (str (Math/round (* 100 (get-in recommendations [:major :confidence]))) "%")))
          (dom/div {:className "progress-bar"}
            (dom/div {:className "progress-bar-fill"
                      :style {:width (str (* 100 (get-in recommendations [:major :confidence])) "%")}})))
        (dom/ol {:style {:margin 0 :paddingLeft "20px"}}
          (for [{:keys [name fit]} (get-in recommendations [:major :top-3])]
            (dom/li {:key name :style {:marginBottom "8px"}}
              (dom/span {:style {:fontWeight "500"}} name)
              (dom/span {:style {:color "#64748b" :marginLeft "8px"}}
                (str "(" (Math/round (* fit 100)) "% fit)"))))))

      ;; Graduate School
      (ui/ui-recommendation-card
        {:title "Graduate School"
         :recommended (get-in recommendations [:grad-school :recommended])
         :confidence (get-in recommendations [:grad-school :confidence])
         :reasoning (str "Recommended timing: " (get-in recommendations [:grad-school :timing]))
         :items (get-in recommendations [:grad-school :suggested-programs])})

      ;; Industry
      (dom/div {:className "card"}
        (dom/h3 {:style {:marginBottom "16px"}} "Target Industries")
        (for [{:keys [name fit]} (get-in recommendations [:industry :top-3])]
          (dom/div {:key name :style {:marginBottom "12px"}}
            (dom/div {:style {:display "flex" :justifyContent "space-between" :marginBottom "4px"}}
              (dom/span name)
              (dom/span {:style {:color "#64748b"}} (str (Math/round (* fit 100)) "%")))
            (dom/div {:className "progress-bar"}
              (dom/div {:className "progress-bar-fill"
                        :style {:width (str (* fit 100) "%")}}))))))

    ;; Career Roadmap
    (dom/div {:className "card" :style {:marginTop "24px"}}
      (dom/h2 {:style {:marginBottom "24px"}} "Your Career Roadmap")
      (dom/div {:className "recommendation-list"}
        (for [phase roadmap]
          (ui/ui-roadmap-phase phase))))

    ;; Action Buttons
    (dom/div {:style {:display "flex" :gap "16px" :marginTop "32px" :justifyContent "center"}}
      (dom/button {:className "btn btn-secondary"
                   :onClick #(dr/change-route! this ["questionnaire"])}
        "Retake Assessment")
      (dom/button {:className "btn btn-primary"
                   :onClick #(js/window.print)}
        "Print Results"))))

(def ui-results (comp/factory Results))
