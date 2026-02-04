(ns app.advice
  "Generate personalized career advice based on user's top career match"
  (:require [clojure.string :as str]
            #?(:cljs [goog.string :as gstr])
            #?(:cljs [goog.string.format])))

;; Internship templates by career category
(def internship-templates
  {"Sports Industry"  {:intro "As a future %s, hands-on experience in sports organizations is invaluable."
                       :suggestion "Look for internships with professional teams, athletic departments, or sports agencies."}
   "Business & Sales" {:intro "Your competitive drive translates well to %s."
                       :suggestion "Seek corporate internships where you can develop client relationships and sales skills."}
   "Healthcare"       {:intro "The path to %s requires clinical experience."
                       :suggestion "Look for practicums and clinical rotations in sports medicine settings."}
   "Media"            {:intro "Building your portfolio as a future %s is crucial."
                       :suggestion "Seek internships at sports networks, podcasts, or digital media companies."}
   "Education"        {:intro "To become an effective %s, practical experience is key."
                       :suggestion "Look for coaching assistantships, teaching practicums, or youth program coordinator roles."}
   "Technology"       {:intro "As a future %s, internships provide essential product exposure."
                       :suggestion "Target sports tech companies, athletic performance startups, or product teams at larger companies."}})

;; Map typical majors to grad programs
(def major-to-programs
  {"Physical Therapy" ["DPT (Doctor of Physical Therapy)"]
   "Psychology" ["PhD in Sports Psychology" "PsyD in Sports Psychology" "MA in Counseling"]
   "Sports Psychology" ["PhD in Sports Psychology" "PsyD in Sports Psychology"]
   "Law" ["JD (Juris Doctor)"]
   "Business Administration" ["MBA"]
   "Sports Management" ["MS Sports Management" "MBA with Sports Concentration"]
   "Marketing" ["MBA" "MS Marketing"]
   "Communications" ["MA Communications" "MS Sports Media"]
   "Exercise Science" ["MS Exercise Science" "DPT" "PhD Exercise Physiology"]
   "Kinesiology" ["MS Kinesiology" "DPT" "PhD Kinesiology"]
   "Athletic Training" ["MS Athletic Training" "DAT (Doctor of Athletic Training)"]
   "Education" ["MEd (Master of Education)" "EdD (Doctor of Education)"]
   "Counseling" ["MA Counseling" "PhD Counseling Psychology"]
   "Finance" ["MBA" "MS Finance" "CFA Certification"]
   "Economics" ["MA Economics" "MBA" "PhD Economics"]
   "Public Administration" ["MPA (Master of Public Administration)"]
   "Nonprofit Management" ["MNA (Master of Nonprofit Administration)" "MPA"]
   "Social Work" ["MSW (Master of Social Work)"]
   "Computer Science" ["MS Computer Science" "MBA"]
   "Engineering" ["MS Engineering" "MBA"]})

(defn importance->level
  "Convert internship importance (1-5) to recommendation level"
  [importance]
  (cond
    (>= importance 5) :essential
    (= importance 4)  :highly-recommended
    (= importance 3)  :helpful
    :else             :optional))

(defn grad-school->level
  "Convert grad school recommendation to level"
  [recommended? career-category]
  (cond
    (and recommended? (= career-category "Healthcare")) :required
    recommended? :recommended
    :else :optional))

(defn get-suggested-programs
  "Get suggested grad programs based on typical majors"
  [typical-majors]
  (->> typical-majors
       (mapcat #(get major-to-programs % []))
       distinct
       (take 3)
       vec))

(defn generate-internship-advice
  "Generate personalized internship advice for a career"
  [career]
  (let [{:keys [name category internship-importance]} career
        level (importance->level internship-importance)
        template (get internship-templates category (get internship-templates "Business & Sales"))
        intro #?(:cljs (gstr/format (:intro template) name)
                 :clj (format (:intro template) name))
        suggestion (:suggestion template)

        level-headline (case level
                         :essential "Internships are Essential"
                         :highly-recommended "Internships are Highly Recommended"
                         :helpful "Internships are Helpful"
                         :optional "Internships are Optional")

        importance-paragraph (case level
                               :essential "Given the competitive nature of this field, relevant internship experience is often a prerequisite for entry-level positions. Your athletic background gives you a unique advantage in standing out."
                               :highly-recommended "Strong internship experience will significantly improve your job prospects and help you build the professional network essential for this career."
                               :helpful "While not strictly required, internships can help you explore the field and make valuable connections that may lead to job opportunities."
                               :optional "You can enter this field through various paths. Internships are one option, but relevant skills and networking can be equally valuable.")]
    {:headline (str level-headline " for " name)
     :recommendation-level level
     :paragraphs [intro importance-paragraph suggestion]
     :career-name name}))

(defn generate-grad-school-advice
  "Generate personalized grad school advice for a career"
  [career]
  (let [{:keys [name category grad-school-recommended typical-majors]} career
        level (grad-school->level grad-school-recommended category)
        suggested-programs (get-suggested-programs typical-majors)

        level-headline (case level
                         :required "Graduate School is Required"
                         :recommended "Graduate School is Recommended"
                         :optional "Graduate School is Optional")

        main-paragraph (case level
                         :required (str "A graduate degree is required to practice as a " name ". This is a professional field with specific educational requirements that must be met before you can begin your career.")
                         :recommended (str "While not strictly required, a graduate degree can significantly accelerate your career as a " name ". It opens doors to senior positions and provides advanced knowledge that sets you apart.")
                         :optional (str "A graduate degree isn't required for " name ", but it could accelerate your path to leadership roles. Many successful professionals in this field have risen through experience and results alone."))

        program-paragraph (when (seq suggested-programs)
                            (str "Programs to consider: " (str/join ", " suggested-programs)))

        timing (case level
                 :required "Pursue immediately after your undergraduate degree"
                 :recommended "After 2-3 years of work experience"
                 :optional "After 3-5 years if you decide to pursue it")]
    {:headline (str level-headline " for " name)
     :recommendation-level level
     :paragraphs (filterv some? [main-paragraph program-paragraph])
     :career-name name
     :suggested-programs suggested-programs
     :timing timing}))

(defn generate-personalized-advice
  "Main entry point: generate personalized advice based on scoring results"
  [scoring-results careers]
  (let [career-scores (:career-scores scoring-results)
        top-career-score (first career-scores)
        top-career-name (:career-name top-career-score)
        top-career (first (filter #(= (:name %) top-career-name) careers))]
    (if top-career
      {:internship-advice (generate-internship-advice top-career)
       :grad-school-advice (generate-grad-school-advice top-career)}
      ;; Fallback if no career found
      {:internship-advice {:headline "Internships are Recommended"
                           :recommendation-level :recommended
                           :paragraphs ["Building professional experience through internships is valuable for any career path."]
                           :career-name "Your Career"}
       :grad-school-advice {:headline "Graduate School Depends on Your Goals"
                            :recommendation-level :optional
                            :paragraphs ["Consider graduate school based on your specific career goals and the requirements of your chosen field."]
                            :career-name "Your Career"
                            :suggested-programs []
                            :timing "Based on your career requirements"}})))
