(ns app.model.response
  "Response and session models"
  #?(:clj (:require [clojure.spec.alpha :as s])
     :cljs (:require [cljs.spec.alpha :as s])))

;; Response value types
(s/def :response-value/likert (s/and int? #(<= 1 % 5)))
(s/def :response-value/selected any?)
(s/def :response-value/score (s/or :number number? :map map?))
(s/def :response-value/ranks (s/coll-of string?))
(s/def :response-value/text string?)

;; Response value (flexible structure)
(s/def ::response-value
  (s/or :likert (s/keys :req-un [:response-value/value])
        :choice (s/keys :req-un [:response-value/selected]
                        :opt-un [:response-value/score])
        :ranking (s/keys :req-un [:response-value/ranks])
        :text (s/keys :req-un [:response-value/text])))

;; Response attributes
(s/def :response/id uuid?)
(s/def :response/user-id (s/nilable uuid?))
(s/def :response/question-id (s/or :uuid uuid? :string string?))
(s/def :response/value ::response-value)
(s/def :response/session-id uuid?)
(s/def :response/created-at inst?)

;; Response entity
(s/def ::response
  (s/keys :req [:response/id :response/question-id :response/value :response/session-id]
          :opt [:response/user-id :response/created-at]))

;; Session attributes
(s/def :session/id uuid?)
(s/def :session/user-id (s/nilable uuid?))
(s/def :session/current-question-index int?)
(s/def :session/total-questions int?)
(s/def :session/is-complete boolean?)
(s/def :session/started-at inst?)
(s/def :session/completed-at (s/nilable inst?))

;; Session entity
(s/def ::session
  (s/keys :req [:session/id]
          :opt [:session/user-id
                :session/current-question-index
                :session/total-questions
                :session/is-complete
                :session/started-at
                :session/completed-at]))

;; Helper functions
(defn progress-percentage
  "Calculate session progress as percentage"
  [{:session/keys [current-question-index total-questions]}]
  (if (and current-question-index total-questions (pos? total-questions))
    (* 100 (/ current-question-index total-questions))
    0))

(defn complete?
  "Check if session is complete"
  [{:session/keys [is-complete]}]
  (boolean is-complete))

(defn extract-likert-value
  "Extract numeric value from Likert response"
  [{:keys [value]}]
  (or value 3))

(defn extract-choice-value
  "Extract selected value from choice response"
  [{:keys [selected score]}]
  {:selected selected :score score})

(defn extract-ranking-value
  "Extract ranks from ranking response"
  [{:keys [ranks]}]
  (or ranks []))

(defn extract-text-value
  "Extract text from text response"
  [{:keys [text]}]
  (or text ""))
