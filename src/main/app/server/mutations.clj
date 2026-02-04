(ns app.server.mutations
  "Pathom mutations for data modification"
  (:require [com.wsscode.pathom3.connect.operation :as pco]
            [app.server.db :as db]
            [app.server.scoring :as scoring]
            [buddy.hashers :as hashers]
            [clojure.tools.logging :as log])
  (:import [java.util UUID]))

;; Session Mutations
(pco/defmutation start-session
  "Start a new questionnaire session"
  [{:keys [user-id]}]
  {::pco/output [:session/id
                 :session/current-question-index
                 :session/total-questions]}
  (let [questions (db/get-all-questions)
        total (count questions)
        session-id (UUID/randomUUID)
        session (db/create-session!
                  {:id session-id
                   :user-id user-id
                   :current-question-index 0
                   :total-questions total
                   :is-complete false})]
    (log/info "Started new session" session-id "for user" user-id)
    {:session/id (:id session)
     :session/current-question-index 0
     :session/total-questions total}))

(pco/defmutation submit-response
  "Submit a response to a question"
  [{:keys [session-id question-id response-value user-id]}]
  {::pco/output [:response/id
                 :response/saved
                 :session/current-question-index]}
  (let [response (db/save-response!
                   {:user-id user-id
                    :question-id question-id
                    :response-value response-value
                    :session-id session-id})
        session (db/get-session session-id)
        new-index (inc (:current-question-index session))]
    (db/update-session! session-id {:current-question-index new-index})
    (log/info "Saved response for session" session-id "question" question-id)
    {:response/id (:id response)
     :response/saved true
     :session/current-question-index new-index}))

(pco/defmutation update-response
  "Update an existing response"
  [{:keys [response-id response-value]}]
  {::pco/output [:response/id
                 :response/updated]}
  (db/update-response! response-id response-value)
  (log/info "Updated response" response-id)
  {:response/id response-id
   :response/updated true})

(pco/defmutation complete-session
  "Complete a session and calculate results"
  [{:keys [session-id user-id]}]
  {::pco/output [:session/id
                 :session/is-complete
                 :results/id
                 :results/recommendations]}
  (let [responses (db/get-responses-by-session session-id)
        questions (db/get-all-questions)
        careers (db/get-all-careers)
        config (db/get-all-config)

        ;; Calculate scores
        results (scoring/calculate-results responses questions careers config)

        ;; Save results
        saved-results (db/save-results!
                        {:user-id user-id
                         :session-id session-id
                         :category-scores (:category-scores results)
                         :dimension-scores (:dimension-scores results)
                         :career-scores (:career-scores results)
                         :recommendations (:recommendations results)})]

    ;; Mark session complete
    (db/update-session! session-id {:is-complete true
                                     :completed-at (java.time.Instant/now)})

    (log/info "Completed session" session-id "with results" (:id saved-results))

    {:session/id session-id
     :session/is-complete true
     :results/id (:id saved-results)
     :results/recommendations (:recommendations results)}))

;; User Mutations
(pco/defmutation create-user
  "Create a new user account"
  [{:keys [email password first-name last-name]}]
  {::pco/output [:user/id
                 :user/email
                 :user/created]}
  (let [password-hash (hashers/derive password)
        user (db/create-user!
               {:email email
                :password-hash password-hash
                :first-name first-name
                :last-name last-name
                :is-admin false})]
    (log/info "Created new user" (:id user))
    {:user/id (:id user)
     :user/email (:email user)
     :user/created true}))

;; Admin Mutations
(pco/defmutation create-question
  "Create a new question (admin only)"
  [{:keys [category-id question-text question-type options scoring-weights sort-order]}]
  {::pco/output [:question/id
                 :question/created]}
  (let [question (db/create-question!
                   {:category-id category-id
                    :question-text question-text
                    :question-type question-type
                    :options options
                    :scoring-weights scoring-weights
                    :sort-order sort-order
                    :is-active true})]
    (log/info "Created new question" (:id question))
    {:question/id (:id question)
     :question/created true}))

(pco/defmutation update-question
  "Update an existing question (admin only)"
  [{:keys [id updates]}]
  {::pco/output [:question/id
                 :question/updated]}
  (db/update-question! id updates)
  (log/info "Updated question" id)
  {:question/id id
   :question/updated true})

(pco/defmutation deactivate-question
  "Deactivate a question (admin only)"
  [{:keys [id]}]
  {::pco/output [:question/id
                 :question/deactivated]}
  (db/update-question! id {:is-active false})
  (log/info "Deactivated question" id)
  {:question/id id
   :question/deactivated true})

(pco/defmutation update-config
  "Update admin configuration (admin only)"
  [{:keys [config-key config-value updated-by]}]
  {::pco/output [:config/key
                 :config/updated]}
  (db/update-config! config-key config-value updated-by)
  (log/info "Updated config" config-key "by" updated-by)
  {:config/key config-key
   :config/updated true})

(pco/defmutation update-scoring-weights
  "Update category scoring weights (admin only)"
  [{:keys [weights updated-by]}]
  {::pco/output [:config/updated]}
  (db/update-config! "scoring_weights" weights updated-by)
  (log/info "Updated scoring weights by" updated-by)
  {:config/updated true})

;; Export all mutations
(def all-mutations
  [start-session
   submit-response
   update-response
   complete-session
   create-user
   create-question
   update-question
   deactivate-question
   update-config
   update-scoring-weights])
