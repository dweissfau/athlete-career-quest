(ns app.server.core
  "Main server entry point for Athlete Career Quest"
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :as response]
            [reitit.ring :as ring]
            [reitit.coercion.spec]
            [reitit.ring.coercion :as coercion]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [muuntaja.core :as m]
            [mount.core :as mount :refer [defstate]]
            [app.server.db :as db]
            [app.server.resolvers :as resolvers]
            [app.server.mutations :as mutations]
            [clojure.tools.logging :as log]
            [cheshire.core :as json]
            [com.wsscode.pathom3.connect.operation :as pco]
            [com.wsscode.pathom3.connect.indexes :as pci]
            [com.wsscode.pathom3.interface.eql :as p.eql])
  (:gen-class))

;; Pathom environment
(def pathom-env
  (pci/register
    (concat
      resolvers/all-resolvers
      mutations/all-mutations)))

(defn process-pathom-request
  "Process a Pathom EQL request"
  [query]
  (p.eql/process pathom-env query))

;; API Handlers
(defn health-handler [_request]
  {:status 200
   :body {:status "ok"
          :service "athlete-career-quest"
          :version "1.0.0"}})

(defn api-handler
  "Handle Pathom API requests"
  [request]
  (try
    (let [body (:body-params request)
          query (or (:query body) body)
          result (process-pathom-request query)]
      {:status 200
       :body result})
    (catch Exception e
      (log/error e "Error processing API request")
      {:status 500
       :body {:error "Internal server error"
              :message (.getMessage e)}})))

(defn index-handler [_request]
  (-> (response/resource-response "public/index.html")
      (response/content-type "text/html")))

;; Routes
(def routes
  [["/api"
    ["/health" {:get health-handler}]
    ["/query" {:post api-handler}]]

   ;; Serve index.html for the questionnaire iframe
   ["/questionnaire" {:get index-handler}]

   ;; Catch-all for SPA routing
   ["/*" {:get index-handler}]])

;; Middleware
(defn wrap-exceptions [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception e
        (log/error e "Unhandled exception")
        {:status 500
         :headers {"Content-Type" "application/json"}
         :body (json/generate-string {:error "Internal server error"})}))))

;; App
(def app
  (ring/ring-handler
    (ring/router
      routes
      {:conflicts nil
       :data {:coercion reitit.coercion.spec/coercion
              :muuntaja m/instance
              :middleware [muuntaja/format-middleware
                           coercion/coerce-exceptions-middleware
                           coercion/coerce-request-middleware
                           coercion/coerce-response-middleware]}})
    (ring/routes
      (ring/create-resource-handler {:path "/"})
      (ring/create-default-handler))
    {:middleware [[wrap-cors
                   :access-control-allow-origin [#".*"]
                   :access-control-allow-methods [:get :post :put :delete :options]]
                  wrap-exceptions
                  [wrap-defaults api-defaults]]}))

;; Server state
(defstate server
  :start (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))]
           (log/info "Starting server on port" port)
           (jetty/run-jetty #'app {:port port :join? false}))
  :stop (when server
          (log/info "Stopping server")
          (.stop server)))

(defn -main
  "Main entry point"
  [& _args]
  (log/info "Starting Athlete Career Quest application")
  (mount/start)
  (log/info "Application started successfully"))

(comment
  ;; Development helpers
  (mount/start)
  (mount/stop)

  ;; Test Pathom query
  (process-pathom-request [{:questions/all [:question/id :question/text]}])
  )
