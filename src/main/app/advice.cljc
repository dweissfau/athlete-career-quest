(ns app.advice
  "Generate personalized career advice based on user's top career matches"
  (:require [clojure.string :as str]))

;; Internship templates by career category — all 13 categories
(def internship-templates
  {"Sports Industry"        {:intro "Hands-on experience in sports organizations is invaluable for building a career in this field."
                             :suggestion "Look for internships with professional teams, athletic departments, sports agencies, or league offices."}
   "Business & Sales"       {:intro "Your competitive drive translates well to the business world, where client relationships and sales acumen are prized."
                             :suggestion "Seek corporate internships where you can develop client relationships, sales strategy, and business development skills."}
   "Healthcare"             {:intro "Clinical and practical experience is essential for building competence and credentials in healthcare."
                             :suggestion "Look for practicums, clinical rotations, and research assistant roles in sports medicine or rehabilitation settings."}
   "Media & Communications" {:intro "Building a strong portfolio and real-world reel is crucial for breaking into media and communications."
                             :suggestion "Seek internships at sports networks, podcasts, digital media companies, or public relations firms."}
   "Education"              {:intro "Practical teaching and mentoring experience is the foundation for a career in education."
                             :suggestion "Look for coaching assistantships, teaching practicums, tutoring roles, or youth program coordinator positions."}
   "Technology"             {:intro "Internships in tech provide essential exposure to product development cycles and engineering practices."
                             :suggestion "Target sports tech companies, athletic performance startups, data analytics teams, or product teams at larger tech firms."}
   "Finance & Accounting"   {:intro "Finance careers reward early exposure to real-world markets, modeling, and client advisory work."
                             :suggestion "Look for internships at investment banks, wealth management firms, corporate finance departments, or accounting firms."}
   "Law & Public Policy"    {:intro "Legal and policy careers benefit enormously from hands-on exposure to casework, legislation, and advocacy."
                             :suggestion "Seek internships at law firms, government offices, advocacy organizations, or sports league compliance departments."}
   "Hospitality & Tourism"  {:intro "The hospitality industry values practical experience in guest services, event coordination, and operations management."
                             :suggestion "Look for internships at hotels, resorts, event management companies, or sports venue operations teams."}
   "Creative Arts & Design" {:intro "A strong creative portfolio built through real projects is your ticket into arts and design careers."
                             :suggestion "Seek internships at design studios, branding agencies, sports apparel companies, or creative departments within larger organizations."}
   "Engineering"            {:intro "Engineering internships provide critical hands-on experience with real-world systems and design challenges."
                             :suggestion "Target engineering firms, sports equipment manufacturers, facility design companies, or R&D departments."}
   "Science & Research"     {:intro "Research experience — whether in a lab or in the field — is the cornerstone of a science career."
                             :suggestion "Look for research assistant positions at universities, sports science labs, or performance analytics organizations."}
   "Trades & Skilled Labor" {:intro "Apprenticeships and hands-on training are the most direct path into skilled trades."
                             :suggestion "Seek apprenticeships, trade school co-ops, or entry-level positions with experienced tradespeople or facility maintenance teams."}})

;; Human-readable names for scoring dimensions
(def dimension-readable-names
  {:leadership "leadership"
   :analytical "analytical thinking"
   :creative "creativity"
   :communication "communication"
   :risk-tolerance "comfort with risk"
   :people "interpersonal skills"
   :pressure-tolerance "ability to perform under pressure"
   :mentoring "mentoring and coaching"
   :sports-connection "passion for sports"
   :entrepreneurial "entrepreneurial drive"
   :technical "technical aptitude"
   :physical "preference for physical activity"
   :social-impact "desire to make a social impact"
   :negotiation "negotiation skills"
   :competitive "competitive drive"})

;; Dimensions to exclude from "top strengths" (meta-preferences, not skills)
(def meta-dimensions #{:income-priority :education-openness :stability})

(defn top-dimensions
  "Return the user's top 2-3 strongest dimensions as readable names,
   excluding meta-preferences like stability and income-priority."
  [dimension-scores]
  (->> dimension-scores
       (remove (fn [[k _]] (meta-dimensions k)))
       (sort-by val >)
       (take 3)
       (map (fn [[k _]] (get dimension-readable-names k (name k))))))

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
  "Generate personalized internship advice based on dominant career category and user dimensions"
  [career dominant-category dimension-scores]
  (let [{:keys [internship-importance]} career
        level (importance->level internship-importance)
        template (get internship-templates dominant-category (get internship-templates "Business & Sales"))
        intro (:intro template)
        suggestion (:suggestion template)
        top-dims (top-dimensions dimension-scores)
        dimension-paragraph (when (seq top-dims)
                              (str "Your strong "
                                   (if (= (count top-dims) 1)
                                     (first top-dims)
                                     (str (str/join ", " (butlast top-dims))
                                          " and " (last top-dims)))
                                   " align well with careers in " dominant-category "."))

        importance-paragraph (case level
                               :essential "Given the competitive nature of this field, relevant internship experience is often a prerequisite for entry-level positions. Your athletic background gives you a unique advantage in standing out."
                               :highly-recommended "Strong internship experience will significantly improve your job prospects and help you build the professional network essential for this career."
                               :helpful "While not strictly required, internships can help you explore the field and make valuable connections that may lead to job opportunities."
                               :optional "You can enter this field through various paths. Internships are one option, but relevant skills and networking can be equally valuable.")]
    {:headline "Internship Advice"
     :recommendation-level level
     :paragraphs (filterv some? [intro importance-paragraph dimension-paragraph suggestion])
     :career-name dominant-category}))

(defn generate-grad-school-advice
  "Generate personalized grad school advice based on dominant career category and user dimensions"
  [career dominant-category dimension-scores]
  (let [{:keys [category grad-school-recommended typical-majors]} career
        level (grad-school->level grad-school-recommended category)
        suggested-programs (->> (get-suggested-programs typical-majors)
                                (remove #(#{"Any" "Any Quantitative Field"} %))
                                vec)
        top-dims (top-dimensions dimension-scores)
        dimension-paragraph (when (seq top-dims)
                              (str "Your strong "
                                   (if (= (count top-dims) 1)
                                     (first top-dims)
                                     (str (str/join ", " (butlast top-dims))
                                          " and " (last top-dims)))
                                   " suggest you'd thrive in an advanced program in " dominant-category "."))

        main-paragraph (case level
                         :required (str "A graduate degree is required for many careers in " dominant-category ". This is a professional field with specific educational requirements that must be met before you can begin practicing.")
                         :recommended (str "While not strictly required, a graduate degree can significantly accelerate your career in " dominant-category ". It opens doors to senior positions and provides advanced knowledge that sets you apart.")
                         :optional (str "A graduate degree isn't required for most roles in " dominant-category ", but it could accelerate your path to leadership roles. Many successful professionals in this field have risen through experience and results alone."))

        program-paragraph (when (seq suggested-programs)
                            (str "Programs to consider: " (str/join ", " suggested-programs)))

        timing (case level
                 :required "Pursue immediately after your undergraduate degree"
                 :recommended "After 2-3 years of work experience"
                 :optional "After 3-5 years if you decide to pursue it")]
    {:headline "Graduate School Outlook"
     :recommendation-level level
     :paragraphs (filterv some? [main-paragraph dimension-paragraph program-paragraph])
     :career-name dominant-category
     :suggested-programs suggested-programs
     :timing timing}))

(defn generate-personalized-advice
  "Main entry point: generate personalized advice based on scoring results.
   Analyzes top 10 career scores to find the dominant category and uses
   the user's dimension scores to personalize recommendations."
  [scoring-results careers]
  (let [career-scores (:career-scores scoring-results)
        dimension-scores (:dimension-scores scoring-results)
        ;; Find dominant category from top 10
        top-categories (map :career-category (take 10 career-scores))
        category-freq (frequencies top-categories)
        dominant-category (first (first (sort-by val > category-freq)))
        ;; Use #1 career for importance/level data
        top-career-name (:career-name (first career-scores))
        top-career (first (filter #(= (:name %) top-career-name) careers))]
    (if top-career
      {:internship-advice (generate-internship-advice top-career dominant-category dimension-scores)
       :grad-school-advice (generate-grad-school-advice top-career dominant-category dimension-scores)}
      ;; Fallback if no career found
      {:internship-advice {:headline "Internship Advice"
                           :recommendation-level :recommended
                           :paragraphs ["Building professional experience through internships is valuable for any career path."]
                           :career-name "Your Field"}
       :grad-school-advice {:headline "Graduate School Outlook"
                            :recommendation-level :optional
                            :paragraphs ["Consider graduate school based on your specific career goals and the requirements of your chosen field."]
                            :career-name "Your Field"
                            :suggested-programs []
                            :timing "Based on your career requirements"}})))
