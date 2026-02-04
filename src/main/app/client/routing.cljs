(ns app.client.routing
  "Frontend routing configuration"
  (:require [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
            [com.fulcrologic.fulcro.dom :as dom]
            [com.fulcrologic.fulcro.routing.dynamic-routing :as dr :refer [defrouter]]
            [com.fulcrologic.fulcro.mutations :as m]))

;; Forward declarations for circular dependency resolution
(declare MainRouter)

;; Landing page
(defsc LandingPage [this props]
  {:query []
   :ident (fn [] [:component/id :landing])
   :route-segment [""]
   :initial-state {}}
  (dom/div {:className "container"}
    (dom/div {:className "card" :style {:textAlign "center" :padding "48px"}}
      (dom/h1 {:style {:fontSize "2.5rem" :marginBottom "16px" :color "#1e293b"}}
        "Athlete Career Quest")
      (dom/p {:style {:fontSize "1.2rem" :color "#64748b" :marginBottom "32px"}}
        "Discover your ideal career path based on your unique strengths, interests, and goals.")

      (dom/div {:style {:display "flex" :gap "16px" :justifyContent "center" :marginBottom "32px"}}
        (dom/div {:className "card" :style {:padding "24px" :flex "1" :maxWidth "200px"}}
          (dom/h3 "40+")
          (dom/p {:style {:color "#64748b"}} "Questions"))
        (dom/div {:className "card" :style {:padding "24px" :flex "1" :maxWidth "200px"}}
          (dom/h3 "50+")
          (dom/p {:style {:color "#64748b"}} "Career Paths"))
        (dom/div {:className "card" :style {:padding "24px" :flex "1" :maxWidth "200px"}}
          (dom/h3 "4")
          (dom/p {:style {:color "#64748b"}} "Key Recommendations")))

      (dom/button {:className "btn btn-primary"
                   :style {:fontSize "1.1rem" :padding "16px 48px"}
                   :onClick #(dr/change-route! this ["questionnaire"])}
        "Start Your Journey"))))

(def ui-landing-page (comp/factory LandingPage))

;; Questionnaire page (imports actual component)
(defsc QuestionnairePage [this {:keys [questionnaire]}]
  {:query [{:questionnaire (comp/get-query app.ui.questionnaire/Questionnaire)}]
   :ident (fn [] [:component/id :questionnaire])
   :route-segment ["questionnaire"]
   :initial-state (fn [_]
                    {:questionnaire (comp/get-initial-state app.ui.questionnaire/Questionnaire {})})}
  (dom/div {:className "container"}
    (app.ui.questionnaire/ui-questionnaire questionnaire)))

(def ui-questionnaire-page (comp/factory QuestionnairePage))

;; Results page
(defsc ResultsPage [this {:keys [results]}]
  {:query [{:results (comp/get-query app.ui.results/Results)}]
   :ident (fn [] [:component/id :results])
   :route-segment ["results"]
   :initial-state (fn [_]
                    {:results (comp/get-initial-state app.ui.results/Results {})})}
  (dom/div {:className "container"}
    (app.ui.results/ui-results results)))

(def ui-results-page (comp/factory ResultsPage))

;; Admin page
(defsc AdminPage [this {:keys [admin]}]
  {:query [{:admin (comp/get-query app.ui.admin/AdminDashboard)}]
   :ident (fn [] [:component/id :admin])
   :route-segment ["admin"]
   :initial-state (fn [_]
                    {:admin (comp/get-initial-state app.ui.admin/AdminDashboard {})})}
  (dom/div {:className "container"}
    (app.ui.admin/ui-admin-dashboard admin)))

(def ui-admin-page (comp/factory AdminPage))

;; Main router
(defrouter MainRouter [this props]
  {:router-targets [LandingPage QuestionnairePage ResultsPage AdminPage]})

(def ui-main-router (comp/factory MainRouter))

;; Navigation helpers
(defn navigate-to!
  "Navigate to a route"
  [app route]
  (dr/change-route! app route))

(defn navigate-to-results!
  "Navigate to results page with session ID"
  [app session-id]
  (dr/change-route! app ["results" session-id]))
