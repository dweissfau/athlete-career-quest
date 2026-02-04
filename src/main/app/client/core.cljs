(ns app.client.core
  "Client entry point"
  (:require [app.client.app :as app]
            [app.ui.questionnaire :as questionnaire]))

(defn ^:export init
  "Initialize the application"
  []
  (js/console.log "Initializing Athlete Career Quest")
  (app/mount!))

(defn ^:dev/after-load refresh
  "Hot reload handler"
  []
  (js/console.log "Hot reloading...")
  (app/mount!))
