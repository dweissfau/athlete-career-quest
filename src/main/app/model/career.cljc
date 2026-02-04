(ns app.model.career
  "Career path and recommendation models"
  #?(:clj (:require [clojure.spec.alpha :as s])
     :cljs (:require [cljs.spec.alpha :as s])))

;; Career categories
(def career-categories
  #{:sports :business :healthcare :technology :education :media :finance :government :nonprofit})

;; Growth outlook values
(def growth-outlooks
  #{:excellent :good :moderate :limited})

;; Salary range
(s/def :salary/min int?)
(s/def :salary/max int?)
(s/def :salary/median int?)

(s/def ::salary-range
  (s/keys :req-un [:salary/min :salary/max]
          :opt-un [:salary/median]))

;; Required dimensions
(s/def ::required-dimensions
  (s/map-of keyword? (s/and number? #(<= 0 % 1))))

;; Career attributes
(s/def :career/id uuid?)
(s/def :career/name string?)
(s/def :career/category string?)
(s/def :career/description string?)
(s/def :career/typical-majors (s/coll-of string?))
(s/def :career/grad-school-recommended boolean?)
(s/def :career/internship-importance (s/and int? #(<= 1 % 5)))
(s/def :career/salary-range ::salary-range)
(s/def :career/growth-outlook string?)
(s/def :career/required-dimensions ::required-dimensions)
(s/def :career/is-active boolean?)

;; Career entity
(s/def ::career
  (s/keys :req [:career/id :career/name :career/category]
          :opt [:career/description
                :career/typical-majors
                :career/grad-school-recommended
                :career/internship-importance
                :career/salary-range
                :career/growth-outlook
                :career/required-dimensions
                :career/is-active]))

;; Match score
(s/def :match/career-id uuid?)
(s/def :match/career-name string?)
(s/def :match/score (s/and number? #(<= 0 % 1)))

(s/def ::career-match
  (s/keys :req-un [:match/career-id :match/career-name :match/score]))

;; Recommendation types
(s/def :rec/recommended boolean?)
(s/def :rec/confidence (s/and number? #(<= 0 % 1)))
(s/def :rec/reasoning string?)
(s/def :rec/items (s/coll-of string?))

(s/def ::internship-recommendation
  (s/keys :req-un [:rec/recommended :rec/confidence]
          :opt-un [:rec/reasoning :rec/items]))

(s/def :major/name string?)
(s/def :major/fit (s/and number? #(<= 0 % 1)))

(s/def ::major-recommendation
  (s/keys :req-un [:major/name :major/fit]))

(s/def :grad/timing string?)
(s/def :grad/suggested-programs (s/coll-of string?))

(s/def ::grad-school-recommendation
  (s/keys :req-un [:rec/recommended :rec/confidence]
          :opt-un [:grad/timing :grad/suggested-programs]))

(s/def :industry/name string?)
(s/def :industry/fit (s/and number? #(<= 0 % 1)))

(s/def ::industry-recommendation
  (s/keys :req-un [:industry/name :industry/fit]))

;; Roadmap
(s/def :roadmap/phase string?)
(s/def :roadmap/actions (s/coll-of string?))

(s/def ::roadmap-phase
  (s/keys :req-un [:roadmap/phase :roadmap/actions]))

;; Full recommendations
(s/def ::recommendations
  (s/keys :opt-un [::internship-recommendation
                   ::major-recommendation
                   ::grad-school-recommendation
                   ::industry-recommendation]))

;; Results
(s/def :results/id uuid?)
(s/def :results/user-id (s/nilable uuid?))
(s/def :results/session-id uuid?)
(s/def :results/category-scores (s/map-of keyword? number?))
(s/def :results/dimension-scores (s/map-of keyword? number?))
(s/def :results/career-scores (s/coll-of ::career-match))
(s/def :results/recommendations ::recommendations)
(s/def :results/roadmap (s/coll-of ::roadmap-phase))
(s/def :results/created-at inst?)

(s/def ::results
  (s/keys :req [:results/session-id]
          :opt [:results/id
                :results/user-id
                :results/category-scores
                :results/dimension-scores
                :results/career-scores
                :results/recommendations
                :results/roadmap
                :results/created-at]))

;; Helper functions
(defn top-careers
  "Get top N career matches by score"
  [career-scores n]
  (->> career-scores
       (sort-by :match/score >)
       (take n)))

(defn high-confidence?
  "Check if recommendation has high confidence (>= 75%)"
  [{:keys [confidence]}]
  (>= (or confidence 0) 0.75))

(defn format-salary-range
  "Format salary range for display"
  [{:keys [min max]}]
  (str "$" (quot min 1000) "K - $" (quot max 1000) "K"))

(defn grad-school-fit?
  "Check if grad school is recommended based on careers"
  [career-scores]
  (let [top-5 (take 5 career-scores)
        grad-recommended (filter :grad-school-recommended top-5)]
    (>= (/ (count grad-recommended) (count top-5)) 0.4)))
