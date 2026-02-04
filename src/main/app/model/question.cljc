(ns app.model.question
  "Question and category models"
  #?(:clj (:require [clojure.spec.alpha :as s])
     :cljs (:require [cljs.spec.alpha :as s])))

;; Question types
(def question-types
  #{:likert :multiple_choice :ranking :short_text :scenario})

;; Category attributes
(s/def :category/id uuid?)
(s/def :category/name string?)
(s/def :category/display-name string?)
(s/def :category/description string?)
(s/def :category/weight (s/and number? #(<= 0 % 1)))
(s/def :category/sort-order int?)

;; Category entity
(s/def ::category
  (s/keys :req [:category/id :category/name :category/display-name]
          :opt [:category/description :category/weight :category/sort-order]))

;; Question option
(s/def :option/value any?)
(s/def :option/label string?)
(s/def :option/description (s/nilable string?))
(s/def :option/score (s/or :number number? :map map?))

(s/def ::option
  (s/keys :req-un [:option/value :option/label]
          :opt-un [:option/description :option/score]))

;; Scoring weights
(s/def ::scoring-weights
  (s/map-of keyword? number?))

;; Question attributes
(s/def :question/id (s/or :uuid uuid? :string string?))
(s/def :question/category-id uuid?)
(s/def :question/text string?)
(s/def :question/type (s/and string? #(contains? #{"likert" "multiple_choice" "ranking" "short_text" "scenario"} %)))
(s/def :question/options (s/coll-of ::option))
(s/def :question/scoring-weights ::scoring-weights)
(s/def :question/sort-order int?)
(s/def :question/is-active boolean?)

;; Question entity
(s/def ::question
  (s/keys :req [:question/id :question/text :question/type]
          :opt [:question/category-id
                :question/options
                :question/scoring-weights
                :question/sort-order
                :question/is-active]))

;; Helper functions
(defn likert?
  "Check if question is a Likert scale"
  [{:question/keys [type]}]
  (= type "likert"))

(defn multiple-choice?
  "Check if question is multiple choice"
  [{:question/keys [type]}]
  (= type "multiple_choice"))

(defn ranking?
  "Check if question is a ranking question"
  [{:question/keys [type]}]
  (= type "ranking"))

(defn scenario?
  "Check if question is a scenario question"
  [{:question/keys [type]}]
  (= type "scenario"))

(defn short-text?
  "Check if question is short text"
  [{:question/keys [type]}]
  (= type "short_text"))

(defn default-likert-options
  "Get default Likert scale options"
  []
  [{:value 1 :label "Strongly Disagree"}
   {:value 2 :label "Disagree"}
   {:value 3 :label "Neutral"}
   {:value 4 :label "Agree"}
   {:value 5 :label "Strongly Agree"}])
