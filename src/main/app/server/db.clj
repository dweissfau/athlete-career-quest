(ns app.server.db
  "Database connection and query functions"
  (:require [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [next.jdbc.sql :as sql]
            [honey.sql :as hsql]
            [honey.sql.helpers :as h]
            [hikari-cp.core :as hikari]
            [mount.core :refer [defstate]]
            [clojure.tools.logging :as log]
            [cheshire.core :as json])
  (:import [org.postgresql.util PGobject]))

;; JSON support for PostgreSQL
(defn ->pgobject
  "Transform Clojure data to PostgreSQL jsonb object"
  [x]
  (doto (PGobject.)
    (.setType "jsonb")
    (.setValue (json/generate-string x))))

(defn <-pgobject
  "Transform PostgreSQL jsonb object to Clojure data"
  [^PGobject v]
  (let [type (.getType v)
        value (.getValue v)]
    (if (#{"jsonb" "json"} type)
      (json/parse-string value true)
      value)))

;; Extend protocols for JSON handling
(extend-protocol next.jdbc.result-set/ReadableColumn
  PGobject
  (read-column-by-label [^PGobject v _]
    (<-pgobject v))
  (read-column-by-index [^PGobject v _2 _3]
    (<-pgobject v)))

;; Database configuration
(def db-config
  {:jdbc-url (or (System/getenv "DATABASE_URL")
                 "jdbc:postgresql://localhost:5432/athlete_career_quest")
   :username (or (System/getenv "DB_USER") "postgres")
   :password (or (System/getenv "DB_PASSWORD") "postgres")
   :maximum-pool-size 10
   :minimum-idle 2})

(defstate datasource
  :start (do
           (log/info "Creating database connection pool")
           (hikari/make-datasource db-config))
  :stop (when datasource
          (log/info "Closing database connection pool")
          (hikari/close-datasource datasource)))

;; Query helpers
(defn execute!
  "Execute a HoneySQL query"
  [query]
  (jdbc/execute! datasource (hsql/format query)
                 {:builder-fn rs/as-unqualified-kebab-maps}))

(defn execute-one!
  "Execute a HoneySQL query and return first result"
  [query]
  (jdbc/execute-one! datasource (hsql/format query)
                     {:builder-fn rs/as-unqualified-kebab-maps}))

;; Question Categories
(defn get-all-categories []
  (execute!
    (-> (h/select :*)
        (h/from :question-categories)
        (h/order-by :sort-order))))

(defn get-category-by-id [id]
  (execute-one!
    (-> (h/select :*)
        (h/from :question-categories)
        (h/where [:= :id id]))))

;; Questions
(defn get-all-questions []
  (execute!
    (-> (h/select :*)
        (h/from :questions)
        (h/where [:= :is-active true])
        (h/order-by :category-id :sort-order))))

(defn get-questions-by-category [category-id]
  (execute!
    (-> (h/select :*)
        (h/from :questions)
        (h/where [:and
                  [:= :category-id category-id]
                  [:= :is-active true]])
        (h/order-by :sort-order))))

(defn get-question-by-id [id]
  (execute-one!
    (-> (h/select :*)
        (h/from :questions)
        (h/where [:= :id id]))))

(defn create-question! [question]
  (execute-one!
    (-> (h/insert-into :questions)
        (h/values [(-> question
                       (update :options ->pgobject)
                       (update :scoring-weights ->pgobject))])
        (h/returning :*))))

(defn update-question! [id updates]
  (execute-one!
    (-> (h/update :questions)
        (h/set (cond-> updates
                 (:options updates) (update :options ->pgobject)
                 (:scoring-weights updates) (update :scoring-weights ->pgobject)))
        (h/where [:= :id id])
        (h/returning :*))))

;; Career Paths
(defn get-all-careers []
  (execute!
    (-> (h/select :*)
        (h/from :career-paths)
        (h/where [:= :is-active true])
        (h/order-by :category :name))))

(defn get-career-by-id [id]
  (execute-one!
    (-> (h/select :*)
        (h/from :career-paths)
        (h/where [:= :id id]))))

(defn get-careers-by-category [category]
  (execute!
    (-> (h/select :*)
        (h/from :career-paths)
        (h/where [:and
                  [:= :category category]
                  [:= :is-active true]])
        (h/order-by :name))))

;; User Responses
(defn save-response! [response]
  (execute-one!
    (-> (h/insert-into :user-responses)
        (h/values [(update response :response-value ->pgobject)])
        (h/returning :*))))

(defn get-responses-by-session [session-id]
  (execute!
    (-> (h/select :*)
        (h/from :user-responses)
        (h/where [:= :session-id session-id])
        (h/order-by :created-at))))

(defn update-response! [id response-value]
  (execute-one!
    (-> (h/update :user-responses)
        (h/set {:response-value (->pgobject response-value)})
        (h/where [:= :id id])
        (h/returning :*))))

;; User Results
(defn save-results! [results]
  (execute-one!
    (-> (h/insert-into :user-results)
        (h/values [(-> results
                       (update :category-scores ->pgobject)
                       (update :dimension-scores ->pgobject)
                       (update :career-scores ->pgobject)
                       (update :recommendations ->pgobject))])
        (h/returning :*))))

(defn get-results-by-session [session-id]
  (execute-one!
    (-> (h/select :*)
        (h/from :user-results)
        (h/where [:= :session-id session-id]))))

(defn get-results-by-user [user-id]
  (execute!
    (-> (h/select :*)
        (h/from :user-results)
        (h/where [:= :user-id user-id])
        (h/order-by [:created-at :desc]))))

;; Sessions
(defn create-session! [session]
  (execute-one!
    (-> (h/insert-into :questionnaire-sessions)
        (h/values [session])
        (h/returning :*))))

(defn get-session [session-id]
  (execute-one!
    (-> (h/select :*)
        (h/from :questionnaire-sessions)
        (h/where [:= :id session-id]))))

(defn update-session! [session-id updates]
  (execute-one!
    (-> (h/update :questionnaire-sessions)
        (h/set updates)
        (h/where [:= :id session-id])
        (h/returning :*))))

;; Admin Config
(defn get-config [config-key]
  (execute-one!
    (-> (h/select :config-value)
        (h/from :admin-config)
        (h/where [:= :config-key config-key]))))

(defn get-all-config []
  (execute!
    (-> (h/select :*)
        (h/from :admin-config))))

(defn update-config! [config-key config-value updated-by]
  (execute-one!
    (-> (h/insert-into :admin-config)
        (h/values [{:config-key config-key
                    :config-value (->pgobject config-value)
                    :updated-by updated-by}])
        (h/on-conflict :config-key)
        (h/do-update-set {:config-value (->pgobject config-value)
                          :updated-by updated-by})
        (h/returning :*))))

;; Users
(defn create-user! [user]
  (execute-one!
    (-> (h/insert-into :users)
        (h/values [user])
        (h/returning :*))))

(defn get-user-by-id [id]
  (execute-one!
    (-> (h/select :*)
        (h/from :users)
        (h/where [:= :id id]))))

(defn get-user-by-email [email]
  (execute-one!
    (-> (h/select :*)
        (h/from :users)
        (h/where [:= :email email]))))

;; Analytics
(defn get-completion-stats []
  (execute-one!
    {:select [[[:count :*] :total-sessions]
              [[:count [:case [:= :is-complete true] 1]] :completed-sessions]]
     :from [:questionnaire-sessions]}))

(defn get-popular-careers []
  (execute!
    (-> (h/select :career-scores)
        (h/from :user-results)
        (h/order-by [:created-at :desc])
        (h/limit 100))))
