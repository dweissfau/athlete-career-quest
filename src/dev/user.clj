(ns user
  "Development utilities and REPL helpers"
  (:require [mount.core :as mount]
            [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [app.server.core :as server]
            [app.server.db :as db]
            [app.server.scoring :as scoring]))

(defn start
  "Start the development server"
  []
  (log/info "Starting development server...")
  (mount/start)
  :started)

(defn stop
  "Stop the development server"
  []
  (log/info "Stopping development server...")
  (mount/stop)
  :stopped)

(defn restart
  "Restart the development server"
  []
  (stop)
  (start))

(defn load-seed-data!
  "Load seed data from EDN files into the database"
  []
  (log/info "Loading seed data...")
  (let [questions-data (-> (io/resource "seed-data.edn")
                           slurp
                           edn/read-string)
        careers-data (-> (io/resource "careers.edn")
                         slurp
                         edn/read-string)]

    ;; Load questions
    (doseq [question (:questions questions-data)]
      (try
        (db/create-question!
          {:category-id (java.util.UUID/fromString (:category-id question))
           :question-text (:text question)
           :question-type (:type question)
           :options (:options question)
           :scoring-weights (:scoring-weights question)
           :sort-order (:sort-order question)
           :is-active true})
        (catch Exception e
          (log/warn "Could not insert question:" (:id question) (.getMessage e)))))

    ;; Load careers would go here
    (log/info "Seed data loaded successfully")))

(defn test-scoring
  "Test the scoring algorithm with sample data"
  []
  (let [sample-responses [{:question-id "int-1" :response-value {:value 4}}
                          {:question-id "int-2" :response-value {:value 3}}
                          {:question-id "sk-1" :response-value {:value 5}}
                          {:question-id "sk-2" :response-value {:value 4}}
                          {:question-id "fin-1" :response-value {:value 3}}]
        sample-questions [{:id "int-1" :question-type "likert" :scoring-weights {:people 1.0 :collaborative 0.6}}
                          {:id "int-2" :question-type "likert" :scoring-weights {:creative 1.0 :analytical -0.4}}
                          {:id "sk-1" :question-type "likert" :scoring-weights {:leadership 1.0 :competitive 0.3}}
                          {:id "sk-2" :question-type "likert" :scoring-weights {:communication 1.0 :mentoring 0.5}}
                          {:id "fin-1" :question-type "likert" :scoring-weights {:income-priority 1.0}}]
        sample-careers [{:id "c1" :name "Sports Marketing" :category "sports"
                         :required-dimensions {:leadership 0.7 :communication 0.8 :people 0.6}
                         :grad-school-recommended false
                         :internship-importance 5
                         :typical-majors ["Marketing" "Business"]}
                        {:id "c2" :name "Athletic Director" :category "sports"
                         :required-dimensions {:leadership 0.9 :communication 0.7 :analytical 0.5}
                         :grad-school-recommended true
                         :internship-importance 4
                         :typical-majors ["Sports Management" "Business"]}]]
    (scoring/calculate-results sample-responses sample-questions sample-careers [])))

(defn db-status
  "Check database connection status"
  []
  (try
    (db/execute! {:select [[1 :one]]})
    {:status :connected}
    (catch Exception e
      {:status :disconnected
       :error (.getMessage e)})))

(comment
  ;; Development REPL commands

  ;; Start/stop server
  (start)
  (stop)
  (restart)

  ;; Check database
  (db-status)

  ;; Load seed data
  (load-seed-data!)

  ;; Test scoring
  (test-scoring)

  ;; Test Pathom query
  (server/process-pathom-request [{:questions/all [:question/id :question/text]}])

  ;; Get all categories
  (db/get-all-categories)

  ;; Get all questions
  (db/get-all-questions)
  )
