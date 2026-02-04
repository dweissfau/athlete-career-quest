(ns app.scoring-test
  "Tests for the scoring algorithm"
  (:require [clojure.test :refer [deftest testing is are]]
            [app.server.scoring :as scoring]))

;; Test data
(def sample-questions
  [{:id "q1" :question-type "likert"
    :scoring-weights {:leadership 1.0 :communication 0.6}}
   {:id "q2" :question-type "likert"
    :scoring-weights {:analytical 0.9 :technical 0.7}}
   {:id "q3" :question-type "multiple_choice"
    :scoring-weights {:people 0.8}}
   {:id "q4" :question-type "ranking"
    :scoring-weights {:creative 0.7 :entrepreneurial 0.5}}])

(def sample-responses
  [{:question-id "q1" :response-value {:value 5}}  ; Strongly agree
   {:question-id "q2" :response-value {:value 4}}  ; Agree
   {:question-id "q3" :response-value {:selected "a" :score 0.8}}
   {:question-id "q4" :response-value {:ranks ["Option A" "Option B"]}}])

(def sample-careers
  [{:id "c1"
    :name "Sports Marketing Manager"
    :category "sports"
    :required-dimensions {:leadership 0.8 :communication 0.9}
    :grad-school-recommended false
    :internship-importance 5
    :typical-majors ["Marketing" "Business"]}
   {:id "c2"
    :name "Data Analyst"
    :category "technology"
    :required-dimensions {:analytical 0.95 :technical 0.8}
    :grad-school-recommended false
    :internship-importance 4
    :typical-majors ["Statistics" "Computer Science"]}
   {:id "c3"
    :name "Athletic Director"
    :category "sports"
    :required-dimensions {:leadership 0.95 :communication 0.8 :analytical 0.5}
    :grad-school-recommended true
    :internship-importance 4
    :typical-majors ["Sports Management" "Business"]}])

;; Tests
(deftest test-normalize-response
  (testing "Likert response normalization"
    (is (= 0.0 (scoring/normalize-response
                 {:response-value {:value 1}}
                 {:question-type "likert"})))
    (is (= 0.5 (scoring/normalize-response
                 {:response-value {:value 3}}
                 {:question-type "likert"})))
    (is (= 1.0 (scoring/normalize-response
                 {:response-value {:value 5}}
                 {:question-type "likert"}))))

  (testing "Multiple choice normalization"
    (is (= 0.8 (scoring/normalize-response
                 {:response-value {:score 0.8}}
                 {:question-type "multiple_choice"}))))

  (testing "Unknown type defaults to 0.5"
    (is (= 0.5 (scoring/normalize-response
                 {:response-value {}}
                 {:question-type "unknown"})))))

(deftest test-calculate-dimension-scores
  (testing "Dimension scores are accumulated correctly"
    (let [scores (scoring/calculate-dimension-scores sample-responses sample-questions)]
      (is (contains? scores :leadership))
      (is (contains? scores :analytical))
      (is (map? (get scores :leadership))))))

(deftest test-finalize-dimension-scores
  (testing "Scores are averaged and weighted"
    (let [raw-scores {:leadership {:total 1.5 :count 2}
                      :communication {:total 0.8 :count 1}}
          weights {:leadership 1.2 :communication 1.0}
          final-scores (scoring/finalize-dimension-scores raw-scores weights)]
      (is (= (* 0.75 1.2) (:leadership final-scores)))
      (is (= 0.8 (:communication final-scores))))))

(deftest test-calculate-career-match
  (testing "Career match score calculation"
    (let [dimension-scores {:leadership 0.8 :communication 0.9}
          career {:required-dimensions {:leadership 0.7 :communication 0.8}}
          match-score (scoring/calculate-career-match dimension-scores career)]
      (is (number? match-score))
      (is (<= 0 match-score 1)))))

(deftest test-calculate-career-scores
  (testing "Career scores are sorted by match"
    (let [dimension-scores {:leadership 0.8 :communication 0.9 :analytical 0.5}
          career-scores (scoring/calculate-career-scores dimension-scores sample-careers)]
      (is (= 3 (count career-scores)))
      (is (>= (:match-score (first career-scores))
              (:match-score (second career-scores)))))))

(deftest test-generate-internship-recommendation
  (testing "Internship recommendation is generated"
    (let [dimension-scores {:leadership 0.8 :communication 0.9 :urgency 0.5}
          career-scores [{:internship-importance 5 :career-category "sports"}
                         {:internship-importance 4 :career-category "business"}
                         {:internship-importance 3 :career-category "tech"}]
          rec (scoring/generate-internship-recommendation dimension-scores career-scores)]
      (is (boolean? (:recommended rec)))
      (is (number? (:confidence rec)))
      (is (string? (:reasoning rec)))
      (is (sequential? (:suggested-types rec))))))

(deftest test-generate-major-recommendation
  (testing "Major recommendation includes top 3"
    (let [career-scores [{:typical-majors ["Marketing" "Business"] :match-score 0.9}
                         {:typical-majors ["Business" "Communications"] :match-score 0.85}
                         {:typical-majors ["Marketing" "Sports Management"] :match-score 0.8}]
          rec (scoring/generate-major-recommendation career-scores)]
      (is (= 3 (count (:top-3 rec))))
      (is (number? (:confidence rec))))))

(deftest test-generate-grad-school-recommendation
  (testing "Grad school recommendation considers education openness"
    (let [dimension-scores {:education-openness 0.9 :income-priority 0.5 :urgency 0.3}
          career-scores [{:grad-school-recommended true :match-score 0.9}
                         {:grad-school-recommended true :match-score 0.85}
                         {:grad-school-recommended false :match-score 0.8}]
          rec (scoring/generate-grad-school-recommendation dimension-scores career-scores)]
      (is (boolean? (:recommended rec)))
      (is (number? (:confidence rec)))
      (is (string? (:timing rec))))))

(deftest test-generate-industry-recommendation
  (testing "Industry recommendation groups by category"
    (let [career-scores [{:career-category "sports" :match-score 0.9}
                         {:career-category "sports" :match-score 0.85}
                         {:career-category "business" :match-score 0.8}
                         {:career-category "technology" :match-score 0.7}]
          rec (scoring/generate-industry-recommendation career-scores)]
      (is (= 3 (count (:top-3 rec))))
      (is (number? (:confidence rec))))))

(deftest test-calculate-results
  (testing "Full results calculation"
    (let [results (scoring/calculate-results
                    sample-responses
                    sample-questions
                    sample-careers
                    [])]
      (is (map? results))
      (is (contains? results :profile))
      (is (contains? results :category-scores))
      (is (contains? results :dimension-scores))
      (is (contains? results :career-scores))
      (is (contains? results :recommendations))
      (is (contains? results :roadmap))

      ;; Check recommendations structure
      (let [recs (:recommendations results)]
        (is (contains? recs :internship))
        (is (contains? recs :major))
        (is (contains? recs :grad-school))
        (is (contains? recs :industry)))

      ;; Check roadmap structure
      (is (= 4 (count (:roadmap results))))
      (is (every? #(contains? % :phase) (:roadmap results)))
      (is (every? #(contains? % :actions) (:roadmap results))))))

(deftest test-edge-cases
  (testing "Empty responses"
    (let [results (scoring/calculate-results [] sample-questions sample-careers [])]
      (is (map? results))))

  (testing "Empty questions"
    (let [results (scoring/calculate-results sample-responses [] sample-careers [])]
      (is (map? results))))

  (testing "Empty careers"
    (let [results (scoring/calculate-results sample-responses sample-questions [] [])]
      (is (map? results)))))
