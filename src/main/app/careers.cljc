(ns app.careers
  "Career database for athlete career matching")

(def careers
  [   ;; ============================================
   ;; SPORTS INDUSTRY (23)
   ;; ============================================
   {:id "career-sports-marketing" :name "Sports Marketing Manager" :category "Sports Industry"
    :description "Leverage your athletic background to develop marketing strategies for sports teams, leagues, and brands."
    :typical-majors ["Marketing" "Business Administration" "Sports Management" "Communications"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 55000 :max 120000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:communication 0.9 :creative 0.8 :sports-connection 0.7 :people 0.6}}

   {:id "career-sports-agent" :name "Sports Agent" :category "Sports Industry"
    :description "Represent athletes in contract negotiations and endorsement deals using your firsthand knowledge of professional athletics."
    :typical-majors ["Sports Management" "Law" "Business Administration" "Communications"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 45000 :max 500000 :median 85000} :growth-outlook "Moderate"
    :required-dimensions {:negotiation 1.0 :people 0.9 :risk-tolerance 0.7 :income-priority 0.6 :stability -0.3}}

   {:id "career-coach" :name "College/Pro Coach" :category "Sports Industry"
    :description "Transform your competitive experience into coaching excellence, developing game strategies and building winning team cultures."
    :typical-majors ["Sports Management" "Physical Education" "Exercise Science" "Business"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 40000 :max 5000000 :median 80000} :growth-outlook "Good"
    :required-dimensions {:leadership 1.0 :mentoring 0.9 :sports-connection 0.8 :pressure-tolerance 0.7 :competitive 0.6}}

   {:id "career-sports-broadcaster" :name "Sports Broadcaster/Analyst" :category "Sports Industry"
    :description "Bring authentic athlete perspective to sports media through commentary, analysis, and storytelling."
    :typical-majors ["Communications" "Journalism" "Sports Management" "Broadcasting"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 35000 :max 300000 :median 65000} :growth-outlook "Moderate"
    :required-dimensions {:communication 1.0 :sports-connection 0.8 :pressure-tolerance 0.7}}

   {:id "career-athletic-director" :name "Athletic Director" :category "Sports Industry"
    :description "Lead athletic programs overseeing budgets, hiring coaches, and shaping the student-athlete experience."
    :typical-majors ["Sports Management" "Business Administration" "Education" "Public Administration"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 70000 :max 250000 :median 100000} :growth-outlook "Good"
    :required-dimensions {:leadership 1.0 :people 0.8 :communication 0.7 :sports-connection 0.6}}

   {:id "career-strength-conditioning" :name "Strength & Conditioning Coach" :category "Sports Industry"
    :description "Apply your athletic training knowledge to optimize performance and prevent injuries for the next generation of athletes."
    :typical-majors ["Exercise Science" "Kinesiology" "Physical Education" "Sports Medicine"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 40000 :max 150000 :median 60000} :growth-outlook "Good"
    :required-dimensions {:physical 0.9 :mentoring 0.8 :sports-connection 0.8 :communication 0.6}}

   {:id "career-sports-data-analyst" :name "Sports Data Analyst" :category "Sports Industry"
    :description "Use statistics and analytics to drive team strategy, player evaluation, and performance optimization."
    :typical-majors ["Statistics" "Data Science" "Sports Management" "Mathematics"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 120000 :median 72000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 1.0 :technical 0.8 :sports-connection 0.6}}

   {:id "career-sports-event-coordinator" :name "Sports Event Coordinator" :category "Sports Industry"
    :description "Plan and execute sporting events from local tournaments to major championships."
    :typical-majors ["Sports Management" "Event Management" "Business" "Communications"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 38000 :max 85000 :median 52000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :pressure-tolerance 0.8 :communication 0.7 :leadership 0.6}}

   {:id "career-sports-facility-manager" :name "Sports Facility Manager" :category "Sports Industry"
    :description "Oversee operations of stadiums, arenas, and athletic complexes to ensure top-tier experiences."
    :typical-majors ["Sports Management" "Facility Management" "Business Administration" "Public Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 45000 :max 110000 :median 65000} :growth-outlook "Good"
    :required-dimensions {:leadership 0.9 :analytical 0.7 :people 0.6 :sports-connection 0.6}}

   {:id "career-sports-nutritionist" :name "Sports Nutritionist" :category "Sports Industry"
    :description "Design nutrition plans that fuel athletic performance and recovery using science-backed strategies."
    :typical-majors ["Nutrition" "Dietetics" "Exercise Science" "Kinesiology"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 42000 :max 90000 :median 58000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :mentoring 0.7 :people 0.7 :sports-connection 0.6}}

   {:id "career-sports-photographer" :name "Sports Photographer" :category "Sports Industry"
    :description "Capture the intensity and emotion of athletic competition through professional photography."
    :typical-majors ["Photography" "Visual Arts" "Communications" "Journalism"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 30000 :max 90000 :median 45000} :growth-outlook "Moderate"
    :required-dimensions {:creative 1.0 :technical 0.7 :pressure-tolerance 0.7 :sports-connection 0.5}}

   {:id "career-sports-journalist" :name "Sports Journalist" :category "Sports Industry"
    :description "Cover the world of sports through compelling written stories, interviews, and investigative reporting."
    :typical-majors ["Journalism" "Communications" "English" "Sports Management"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 32000 :max 95000 :median 50000} :growth-outlook "Moderate"
    :required-dimensions {:communication 1.0 :creative 0.7 :sports-connection 0.7 :people 0.5}}

   {:id "career-sports-merchandise-manager" :name "Sports Merchandise Manager" :category "Sports Industry"
    :description "Oversee product lines and retail operations for sports teams and athletic brands."
    :typical-majors ["Business" "Marketing" "Retail Management" "Sports Management"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 42000 :max 95000 :median 60000} :growth-outlook "Good"
    :required-dimensions {:entrepreneurial 0.8 :analytical 0.7 :creative 0.7 :sports-connection 0.5}}

   {:id "career-talent-scout" :name "Talent Scout / Recruiter" :category "Sports Industry"
    :description "Identify and evaluate athletic talent for teams, colleges, and professional organizations."
    :typical-majors ["Sports Management" "Kinesiology" "Business" "Communications"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 35000 :max 100000 :median 55000} :growth-outlook "Good"
    :required-dimensions {:sports-connection 1.0 :analytical 0.8 :people 0.7 :competitive 0.6}}

   {:id "career-sports-lawyer" :name "Sports Lawyer" :category "Sports Industry"
    :description "Navigate the legal landscape of professional sports including contracts, labor disputes, and compliance."
    :typical-majors ["Law" "Sports Management" "Political Science" "Business"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 70000 :max 300000 :median 120000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :negotiation 0.9 :communication 0.8 :sports-connection 0.6}}

   {:id "career-league-operations" :name "League Operations Manager" :category "Sports Industry"
    :description "Manage the day-to-day operations of sports leagues including scheduling, rules, and team coordination."
    :typical-majors ["Sports Management" "Business Administration" "Public Administration" "Communications"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 130000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:leadership 0.8 :sports-connection 0.8 :communication 0.7 :analytical 0.6}}

   {:id "career-sports-social-media" :name "Sports Social Media Manager" :category "Sports Industry"
    :description "Build and engage fan communities through social media strategy for teams, athletes, and sports brands."
    :typical-majors ["Marketing" "Communications" "Digital Media" "Sports Management"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 38000 :max 85000 :median 52000} :growth-outlook "Excellent"
    :required-dimensions {:creative 0.9 :communication 0.9 :sports-connection 0.7 :technical 0.5}}

   {:id "career-sports-equipment-designer" :name "Sports Equipment Designer" :category "Sports Industry"
    :description "Design and develop innovative athletic equipment, footwear, and gear using engineering and sport science."
    :typical-majors ["Industrial Design" "Engineering" "Product Design" "Kinesiology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 110000 :median 72000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :technical 0.9 :analytical 0.6 :sports-connection 0.5}}

   {:id "career-sports-sponsorship" :name "Sports Sponsorship Manager" :category "Sports Industry"
    :description "Develop and manage sponsorship deals between brands and sports properties to create mutual value."
    :typical-majors ["Marketing" "Business" "Sports Management" "Communications"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 48000 :max 120000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:negotiation 0.9 :communication 0.8 :people 0.8 :sports-connection 0.7}}

   {:id "career-sports-medicine-physician" :name "Sports Medicine Physician" :category "Sports Industry"
    :description "Diagnose and treat sports-related injuries and help athletes return to peak performance."
    :typical-majors ["Pre-Med" "Biology" "Exercise Science" "Kinesiology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 200000 :max 400000 :median 280000} :growth-outlook "Excellent"
    :required-dimensions {:education-openness 1.0 :analytical 0.9 :sports-connection 0.8 :people 0.7}}

   {:id "career-player-development" :name "Player Development Coach" :category "Sports Industry"
    :description "Guide athletes through skill development, career transitions, and personal growth on and off the field."
    :typical-majors ["Sports Management" "Psychology" "Kinesiology" "Education"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 45000 :max 150000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:mentoring 1.0 :people 0.9 :communication 0.8 :sports-connection 0.7}}

   {:id "career-team-gm" :name "Team General Manager" :category "Sports Industry"
    :description "Lead all operations for a professional or collegiate sports team including roster, budget, and staff."
    :typical-majors ["Sports Management" "Business Administration" "Law" "Finance"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 80000 :max 5000000 :median 250000} :growth-outlook "Moderate"
    :required-dimensions {:leadership 1.0 :negotiation 0.9 :pressure-tolerance 0.8 :analytical 0.7}}

   {:id "career-sports-videographer" :name "Sports Videographer" :category "Sports Industry"
    :description "Produce compelling video content capturing athletic events, highlights, and behind-the-scenes stories."
    :typical-majors ["Film Production" "Digital Media" "Communications" "Sports Management"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 32000 :max 80000 :median 48000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :technical 0.8 :pressure-tolerance 0.6 :sports-connection 0.5}}

   ;; ============================================
   ;; BUSINESS & SALES (27)
   ;; ============================================
   {:id "career-sales-executive" :name "Corporate Sales Executive" :category "Business & Sales"
    :description "Channel your competitive drive into closing deals and building client relationships."
    :typical-majors ["Business Administration" "Marketing" "Communications" "Any"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 200000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:competitive 0.9 :communication 0.9 :negotiation 0.8 :income-priority 0.6}}

   {:id "career-entrepreneur" :name "Entrepreneur/Business Owner" :category "Business & Sales"
    :description "Turn your athletic discipline and risk tolerance into building and running your own business."
    :typical-majors ["Business Administration" "Any" "Entrepreneurship"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 0 :max 10000000 :median 70000} :growth-outlook "Variable"
    :required-dimensions {:entrepreneurial 1.0 :risk-tolerance 0.9 :leadership 0.8 :competitive 0.6 :stability -0.3}}

   {:id "career-management-consultant" :name "Management Consultant" :category "Business & Sales"
    :description "Solve complex business problems for organizations using strategic thinking and team experience."
    :typical-majors ["Business Administration" "Economics" "Engineering" "Any Quantitative Field"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 70000 :max 250000 :median 100000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :communication 0.8 :pressure-tolerance 0.8 :education-openness 0.6}}

   {:id "career-financial-advisor" :name "Financial Advisor" :category "Business & Sales"
    :description "Help individuals achieve their financial goals using planning and relationship-building skills."
    :typical-majors ["Finance" "Business Administration" "Economics" "Financial Planning"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 300000 :median 90000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :communication 0.8 :analytical 0.7 :income-priority 0.6}}

   {:id "career-investment-banker" :name "Investment Banker" :category "Business & Sales"
    :description "Advise companies on mergers, acquisitions, and capital raising in high-pressure financial environments."
    :typical-majors ["Finance" "Economics" "Business Administration" "Mathematics"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 85000 :max 500000 :median 150000} :growth-outlook "Good"
    :required-dimensions {:pressure-tolerance 1.0 :analytical 0.9 :income-priority 0.8 :competitive 0.8}}

   {:id "career-account-manager" :name "Account Manager" :category "Business & Sales"
    :description "Build and maintain long-term client relationships to drive business growth and retention."
    :typical-majors ["Business" "Marketing" "Communications" "Any"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 45000 :max 120000 :median 65000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :communication 0.8 :negotiation 0.6}}

   {:id "career-biz-dev" :name "Business Development Manager" :category "Business & Sales"
    :description "Identify and pursue new business opportunities, partnerships, and markets for growth."
    :typical-majors ["Business" "Marketing" "Communications" "Economics"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 150000 :median 82000} :growth-outlook "Good"
    :required-dimensions {:negotiation 0.9 :entrepreneurial 0.8 :communication 0.7 :competitive 0.7}}

   {:id "career-real-estate" :name "Real Estate Agent / Broker" :category "Business & Sales"
    :description "Help clients buy, sell, and invest in property using your networking and negotiation skills."
    :typical-majors ["Business" "Real Estate" "Finance" "Any"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 30000 :max 250000 :median 62000} :growth-outlook "Good"
    :required-dimensions {:negotiation 1.0 :people 0.9 :entrepreneurial 0.7 :income-priority 0.6}}

   {:id "career-supply-chain" :name "Supply Chain Manager" :category "Business & Sales"
    :description "Optimize the flow of goods from production to delivery, ensuring efficiency and cost control."
    :typical-majors ["Supply Chain Management" "Business" "Operations Management" "Engineering"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 130000 :median 80000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :leadership 0.7 :communication 0.6 :pressure-tolerance 0.5}}

   {:id "career-operations-manager" :name "Operations Manager" :category "Business & Sales"
    :description "Oversee daily business operations to ensure processes run smoothly and goals are met."
    :typical-majors ["Business Administration" "Operations Management" "Engineering" "Any"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 130000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:leadership 0.9 :analytical 0.8 :pressure-tolerance 0.7 :communication 0.6}}

   {:id "career-hr-manager" :name "Human Resources Manager" :category "Business & Sales"
    :description "Lead talent acquisition, employee development, and workplace culture initiatives."
    :typical-majors ["Human Resources" "Business Administration" "Psychology" "Communications"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 130000 :median 80000} :growth-outlook "Good"
    :required-dimensions {:people 1.0 :communication 0.9 :mentoring 0.7 :leadership 0.7}}

   {:id "career-actuary" :name "Actuary" :category "Business & Sales"
    :description "Use mathematics and statistics to assess financial risk for insurance and business planning."
    :typical-majors ["Actuarial Science" "Mathematics" "Statistics" "Finance"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 65000 :max 180000 :median 110000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 1.0 :technical 0.8 :education-openness 0.6 :stability 0.5}}

   {:id "career-insurance-underwriter" :name "Insurance Underwriter" :category "Business & Sales"
    :description "Evaluate insurance applications and determine coverage terms and pricing based on risk analysis."
    :typical-majors ["Finance" "Business" "Mathematics" "Economics"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 50000 :max 100000 :median 72000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :risk-tolerance 0.7 :communication 0.5 :stability 0.5}}

   {:id "career-venture-capitalist" :name "Venture Capitalist" :category "Business & Sales"
    :description "Invest in and advise high-growth startups, identifying the next big business opportunities."
    :typical-majors ["Finance" "Business" "Economics" "Engineering"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 100000 :max 1000000 :median 250000} :growth-outlook "Good"
    :required-dimensions {:risk-tolerance 1.0 :analytical 0.9 :entrepreneurial 0.8 :negotiation 0.7}}

   {:id "career-franchise-owner" :name "Franchise Owner" :category "Business & Sales"
    :description "Own and operate a franchise business, combining entrepreneurship with a proven business model."
    :typical-majors ["Business Administration" "Any" "Entrepreneurship" "Finance"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 40000 :max 500000 :median 80000} :growth-outlook "Good"
    :required-dimensions {:entrepreneurial 0.9 :leadership 0.9 :risk-tolerance 0.7 :people 0.6}}

   {:id "career-ma-analyst" :name "Mergers & Acquisitions Analyst" :category "Business & Sales"
    :description "Analyze and execute corporate mergers, acquisitions, and divestitures in fast-paced finance."
    :typical-majors ["Finance" "Economics" "Accounting" "Business Administration"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 75000 :max 250000 :median 110000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :pressure-tolerance 0.9 :competitive 0.7 :income-priority 0.6}}

   {:id "career-retail-manager" :name "Retail Manager" :category "Business & Sales"
    :description "Lead retail store operations, manage teams, and drive sales performance."
    :typical-majors ["Business" "Retail Management" "Marketing" "Any"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 35000 :max 80000 :median 50000} :growth-outlook "Moderate"
    :required-dimensions {:people 0.9 :leadership 0.8 :communication 0.7}}

   {:id "career-purchasing-manager" :name "Purchasing Manager" :category "Business & Sales"
    :description "Negotiate with suppliers and manage procurement strategies to optimize costs and quality."
    :typical-majors ["Business" "Supply Chain Management" "Finance" "Economics"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 120000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:negotiation 0.9 :analytical 0.8 :communication 0.6 :leadership 0.5}}

   {:id "career-tax-advisor" :name "Tax Advisor" :category "Business & Sales"
    :description "Help individuals and businesses navigate tax laws, minimize liabilities, and ensure compliance."
    :typical-majors ["Accounting" "Finance" "Business Administration" "Law"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 130000 :median 78000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :education-openness 0.6 :communication 0.6 :stability 0.5}}

   {:id "career-corporate-trainer" :name "Corporate Trainer" :category "Business & Sales"
    :description "Design and deliver training programs that develop employee skills and organizational performance."
    :typical-majors ["Education" "Business" "Human Resources" "Communications"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 45000 :max 100000 :median 65000} :growth-outlook "Good"
    :required-dimensions {:mentoring 0.9 :communication 0.9 :people 0.8 :creative 0.5}}

   {:id "career-risk-manager" :name "Risk Manager" :category "Business & Sales"
    :description "Identify, assess, and mitigate business risks to protect organizational assets and reputation."
    :typical-majors ["Finance" "Business" "Risk Management" "Economics"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 150000 :median 95000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :risk-tolerance 0.7 :leadership 0.6 :communication 0.5}}

   {:id "career-import-export" :name "Import/Export Specialist" :category "Business & Sales"
    :description "Manage international trade operations, customs compliance, and global supply chain logistics."
    :typical-majors ["International Business" "Supply Chain" "Business" "Economics"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 42000 :max 90000 :median 58000} :growth-outlook "Good"
    :required-dimensions {:communication 0.8 :analytical 0.7 :negotiation 0.7 :people 0.5}}

   {:id "career-revenue-analyst" :name "Revenue Analyst" :category "Business & Sales"
    :description "Analyze revenue streams and pricing strategies to maximize organizational financial performance."
    :typical-majors ["Finance" "Economics" "Business Analytics" "Accounting"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 110000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :technical 0.7 :communication 0.5}}

   {:id "career-brand-manager" :name "Brand Manager" :category "Business & Sales"
    :description "Develop and execute brand strategies that build market presence and customer loyalty."
    :typical-majors ["Marketing" "Business" "Communications" "Advertising"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 55000 :max 140000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :communication 0.8 :leadership 0.7 :analytical 0.6}}

   {:id "career-business-analyst" :name "Business Analyst" :category "Business & Sales"
    :description "Bridge the gap between business needs and technology solutions through requirements analysis."
    :typical-majors ["Business" "Information Systems" "Economics" "Computer Science"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 120000 :median 78000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 0.9 :communication 0.8 :technical 0.6 :people 0.5}}

   {:id "career-compliance-officer" :name "Compliance Officer" :category "Business & Sales"
    :description "Ensure organizations adhere to legal standards, regulations, and internal policies."
    :typical-majors ["Business" "Law" "Finance" "Public Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 130000 :median 78000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :communication 0.7 :stability 0.7 :leadership 0.5}}

   {:id "career-logistics-coordinator" :name "Logistics Coordinator" :category "Business & Sales"
    :description "Coordinate the movement of goods and materials through supply chains efficiently and on schedule."
    :typical-majors ["Supply Chain Management" "Business" "Operations Management" "Logistics"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 38000 :max 75000 :median 50000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.8 :pressure-tolerance 0.7 :communication 0.6 :people 0.5}}
   ;; ============================================
   ;; HEALTHCARE (27 — Optometrist removed)
   ;; ============================================
   {:id "career-physical-therapist" :name "Physical Therapist" :category "Healthcare"
    :description "Help patients regain mobility using your understanding of athletic movement and injury recovery."
    :typical-majors ["Physical Therapy" "Exercise Science" "Kinesiology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 70000 :max 110000 :median 90000} :growth-outlook "Excellent"
    :required-dimensions {:people 0.9 :physical 0.8 :education-openness 0.7 :social-impact 0.6}}

   {:id "career-sports-psychologist" :name "Sports Psychologist" :category "Healthcare"
    :description "Help athletes overcome mental barriers and optimize performance using psychological expertise."
    :typical-majors ["Psychology" "Sports Psychology" "Counseling"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 55000 :max 120000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:people 1.0 :communication 0.9 :sports-connection 0.8 :mentoring 0.7}}

   {:id "career-athletic-trainer" :name "Athletic Trainer" :category "Healthcare"
    :description "Protect and rehabilitate athletes using your firsthand knowledge of sports injuries and training."
    :typical-majors ["Athletic Training" "Exercise Science" "Kinesiology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 45000 :max 80000 :median 52000} :growth-outlook "Good"
    :required-dimensions {:sports-connection 1.0 :physical 0.8 :people 0.7 :pressure-tolerance 0.6}}

   {:id "career-registered-nurse" :name "Registered Nurse" :category "Healthcare"
    :description "Provide direct patient care in hospitals, clinics, and community settings with compassion and precision."
    :typical-majors ["Nursing" "Health Sciences" "Biology"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 60000 :max 110000 :median 80000} :growth-outlook "Excellent"
    :required-dimensions {:people 1.0 :pressure-tolerance 0.8 :communication 0.7 :stability 0.6}}

   {:id "career-physician" :name "Physician / Doctor (MD/DO)" :category "Healthcare"
    :description "Diagnose and treat patients across medical specialties with deep scientific knowledge and patient care."
    :typical-majors ["Pre-Med" "Biology" "Chemistry" "Biochemistry"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 200000 :max 500000 :median 300000} :growth-outlook "Good"
    :required-dimensions {:education-openness 1.0 :analytical 0.9 :pressure-tolerance 0.8 :people 0.7}}

   {:id "career-physician-assistant" :name "Physician Assistant" :category "Healthcare"
    :description "Practice medicine under physician supervision, examining patients and prescribing treatments."
    :typical-majors ["Pre-Med" "Biology" "Health Sciences" "Exercise Science"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 90000 :max 150000 :median 120000} :growth-outlook "Excellent"
    :required-dimensions {:people 0.9 :education-openness 0.9 :analytical 0.7 :communication 0.6}}

   {:id "career-nurse-practitioner" :name "Nurse Practitioner" :category "Healthcare"
    :description "Provide advanced nursing care including diagnosis, treatment, and prescribing with greater autonomy."
    :typical-majors ["Nursing" "Health Sciences" "Biology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 95000 :max 150000 :median 118000} :growth-outlook "Excellent"
    :required-dimensions {:people 0.9 :education-openness 0.8 :leadership 0.7 :communication 0.6}}

   {:id "career-dentist" :name "Dentist" :category "Healthcare"
    :description "Diagnose and treat oral health conditions while building long-term patient relationships."
    :typical-majors ["Pre-Dental" "Biology" "Chemistry" "Health Sciences"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 130000 :max 250000 :median 165000} :growth-outlook "Good"
    :required-dimensions {:education-openness 0.9 :technical 0.8 :people 0.7 :entrepreneurial 0.6}}

   {:id "career-pharmacist" :name "Pharmacist" :category "Healthcare"
    :description "Dispense medications, counsel patients, and ensure safe drug therapy management."
    :typical-majors ["Pharmacy" "Chemistry" "Biology" "Health Sciences"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 110000 :max 160000 :median 130000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :education-openness 0.9 :people 0.7 :stability 0.6}}

   {:id "career-occupational-therapist" :name "Occupational Therapist" :category "Healthcare"
    :description "Help patients develop or recover daily living and work skills after injury or illness."
    :typical-majors ["Occupational Therapy" "Health Sciences" "Psychology" "Kinesiology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 70000 :max 105000 :median 86000} :growth-outlook "Excellent"
    :required-dimensions {:people 0.9 :mentoring 0.8 :creative 0.7 :communication 0.6}}

   {:id "career-slp" :name "Speech-Language Pathologist" :category "Healthcare"
    :description "Assess and treat communication and swallowing disorders across all age groups."
    :typical-majors ["Speech-Language Pathology" "Communication Sciences" "Linguistics" "Psychology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 65000 :max 105000 :median 82000} :growth-outlook "Excellent"
    :required-dimensions {:communication 1.0 :people 0.9 :mentoring 0.7 :education-openness 0.6}}

   {:id "career-chiropractor" :name "Chiropractor" :category "Healthcare"
    :description "Diagnose and treat musculoskeletal conditions through spinal adjustments and holistic care."
    :typical-majors ["Pre-Chiropractic" "Biology" "Kinesiology" "Exercise Science"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 60000 :max 150000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:physical 0.8 :people 0.8 :entrepreneurial 0.7 :education-openness 0.6}}

   {:id "career-surgeon" :name "Surgeon" :category "Healthcare"
    :description "Perform surgical procedures requiring exceptional precision, focus, and composure under pressure."
    :typical-majors ["Pre-Med" "Biology" "Chemistry" "Biochemistry"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 300000 :max 700000 :median 420000} :growth-outlook "Good"
    :required-dimensions {:pressure-tolerance 1.0 :education-openness 1.0 :analytical 0.8 :leadership 0.6}}

   {:id "career-radiologist" :name "Radiologist" :category "Healthcare"
    :description "Interpret medical imaging to diagnose diseases and guide treatment decisions."
    :typical-majors ["Pre-Med" "Biology" "Physics" "Chemistry"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 300000 :max 550000 :median 400000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :education-openness 0.9 :technical 0.8}}

   {:id "career-clinical-psychologist" :name "Clinical Psychologist" :category "Healthcare"
    :description "Assess and treat mental health conditions through therapy, research, and psychological testing."
    :typical-majors ["Psychology" "Clinical Psychology" "Behavioral Science"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 65000 :max 130000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:people 1.0 :education-openness 0.9 :analytical 0.7 :communication 0.7}}

   {:id "career-mental-health-counselor" :name "Mental Health Counselor" :category "Healthcare"
    :description "Support individuals through emotional and psychological challenges with therapeutic techniques."
    :typical-majors ["Counseling" "Psychology" "Social Work" "Human Services"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 42000 :max 80000 :median 50000} :growth-outlook "Excellent"
    :required-dimensions {:people 1.0 :mentoring 0.9 :social-impact 0.7 :communication 0.6 :income-priority -0.3}}

   {:id "career-dietitian" :name "Dietitian / Nutritionist" :category "Healthcare"
    :description "Develop nutrition plans and educate clients on healthy eating habits for optimal wellness."
    :typical-majors ["Nutrition" "Dietetics" "Food Science" "Health Sciences"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 48000 :max 85000 :median 62000} :growth-outlook "Good"
    :required-dimensions {:people 0.8 :analytical 0.8 :mentoring 0.7 :communication 0.6}}

   {:id "career-respiratory-therapist" :name "Respiratory Therapist" :category "Healthcare"
    :description "Treat patients with breathing disorders and manage life-support equipment in critical care."
    :typical-majors ["Respiratory Therapy" "Health Sciences" "Biology"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 55000 :max 85000 :median 62000} :growth-outlook "Excellent"
    :required-dimensions {:pressure-tolerance 0.9 :technical 0.8 :people 0.7 :stability 0.5}}

   {:id "career-paramedic" :name "Paramedic / EMT" :category "Healthcare"
    :description "Provide emergency medical care and transport patients in high-pressure, life-saving situations."
    :typical-majors ["Emergency Medical Services" "Health Sciences" "Biology" "Any"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 32000 :max 65000 :median 40000} :growth-outlook "Good"
    :required-dimensions {:pressure-tolerance 1.0 :physical 0.8 :people 0.7 :risk-tolerance 0.6}}

   {:id "career-public-health" :name "Public Health Specialist" :category "Healthcare"
    :description "Protect and improve community health through education, policy, and disease prevention programs."
    :typical-majors ["Public Health" "Health Sciences" "Biology" "Epidemiology"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 50000 :max 100000 :median 68000} :growth-outlook "Good"
    :required-dimensions {:social-impact 1.0 :communication 0.8 :analytical 0.7 :people 0.6}}

   {:id "career-health-informatics" :name "Health Informatics Specialist" :category "Healthcare"
    :description "Manage healthcare data systems and technology to improve patient care and organizational efficiency."
    :typical-majors ["Health Informatics" "Information Systems" "Health Sciences" "Computer Science"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 60000 :max 120000 :median 82000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :analytical 0.8 :social-impact 0.6 :communication 0.5}}

   {:id "career-hospital-admin" :name "Hospital Administrator" :category "Healthcare"
    :description "Lead hospital operations managing staff, budgets, compliance, and quality of patient care."
    :typical-majors ["Health Administration" "Business Administration" "Public Health" "Public Administration"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 80000 :max 200000 :median 115000} :growth-outlook "Good"
    :required-dimensions {:leadership 1.0 :communication 0.8 :people 0.7 :analytical 0.6}}

   {:id "career-med-lab-tech" :name "Medical Laboratory Technician" :category "Healthcare"
    :description "Perform laboratory tests on blood, tissue, and other samples to help diagnose diseases."
    :typical-majors ["Medical Laboratory Science" "Biology" "Chemistry" "Health Sciences"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 45000 :max 75000 :median 55000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.8 :stability 0.6}}

   {:id "career-genetic-counselor" :name "Genetic Counselor" :category "Healthcare"
    :description "Guide patients through genetic testing and help them understand hereditary health risks."
    :typical-majors ["Genetic Counseling" "Biology" "Genetics" "Health Sciences"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 70000 :max 110000 :median 85000} :growth-outlook "Excellent"
    :required-dimensions {:communication 0.9 :people 0.9 :analytical 0.8 :education-openness 0.7}}

   {:id "career-epidemiologist" :name "Epidemiologist" :category "Healthcare"
    :description "Study disease patterns and causes to develop strategies for public health prevention."
    :typical-majors ["Epidemiology" "Public Health" "Biology" "Statistics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 60000 :max 120000 :median 78000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 1.0 :education-openness 0.8 :social-impact 0.6 :communication 0.5}}

   {:id "career-anesthesiologist" :name "Anesthesiologist" :category "Healthcare"
    :description "Administer anesthesia and manage patient pain during surgical procedures with critical precision."
    :typical-majors ["Pre-Med" "Biology" "Chemistry" "Biochemistry"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 350000 :max 500000 :median 400000} :growth-outlook "Good"
    :required-dimensions {:pressure-tolerance 1.0 :education-openness 0.9 :analytical 0.8 :technical 0.7}}

   {:id "career-biomedical-engineer" :name "Biomedical Engineer" :category "Healthcare"
    :description "Design medical devices and equipment that improve patient diagnosis, treatment, and quality of life."
    :typical-majors ["Biomedical Engineering" "Mechanical Engineering" "Electrical Engineering" "Biology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 65000 :max 140000 :median 95000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :analytical 0.9 :creative 0.7 :education-openness 0.6}}

   ;; ============================================
   ;; MEDIA & COMMUNICATIONS (19)
   ;; ============================================
   {:id "career-content-creator" :name "Content Creator/Influencer" :category "Media & Communications"
    :description "Build your personal brand and share your story to inspire and engage a growing audience."
    :typical-majors ["Communications" "Marketing" "Any"]
    :grad-school-recommended false :internship-importance 2
    :salary-range {:min 0 :max 1000000 :median 45000} :growth-outlook "Variable"
    :required-dimensions {:creative 1.0 :entrepreneurial 0.8 :communication 0.8 :risk-tolerance 0.7 :stability -0.3}}

   {:id "career-public-relations" :name "PR Specialist" :category "Media & Communications"
    :description "Manage public image and media relationships for organizations and high-profile individuals."
    :typical-majors ["Communications" "Public Relations" "Journalism" "Marketing"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 45000 :max 120000 :median 65000} :growth-outlook "Good"
    :required-dimensions {:communication 1.0 :people 0.8 :pressure-tolerance 0.7 :creative 0.5}}

   {:id "career-journalist" :name "Journalist / Reporter" :category "Media & Communications"
    :description "Investigate and report on news stories across beats with accuracy, speed, and integrity."
    :typical-majors ["Journalism" "Communications" "English" "Political Science"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 32000 :max 90000 :median 50000} :growth-outlook "Moderate"
    :required-dimensions {:communication 1.0 :analytical 0.7 :pressure-tolerance 0.7 :people 0.5}}

   {:id "career-podcast-producer" :name "Podcast Producer" :category "Media & Communications"
    :description "Create, produce, and distribute audio content that entertains and informs listeners."
    :typical-majors ["Communications" "Digital Media" "Journalism" "Any"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 35000 :max 100000 :median 55000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :communication 0.8 :technical 0.7 :entrepreneurial 0.6}}

   {:id "career-video-producer" :name "Video Producer / Director" :category "Media & Communications"
    :description "Lead the creative vision and production of video content for film, TV, or digital platforms."
    :typical-majors ["Film Production" "Communications" "Digital Media" "Visual Arts"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 40000 :max 150000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:creative 1.0 :leadership 0.8 :technical 0.7 :communication 0.6}}

   {:id "career-social-media-strategist" :name "Social Media Strategist" :category "Media & Communications"
    :description "Develop and execute social media campaigns that build brand awareness and audience engagement."
    :typical-majors ["Marketing" "Communications" "Digital Media" "Business"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 40000 :max 95000 :median 58000} :growth-outlook "Excellent"
    :required-dimensions {:creative 0.9 :communication 0.9 :analytical 0.6 :technical 0.5}}

   {:id "career-ad-creative-director" :name "Advertising Creative Director" :category "Media & Communications"
    :description "Lead creative teams in developing innovative advertising campaigns across all media channels."
    :typical-majors ["Advertising" "Marketing" "Graphic Design" "Communications"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 80000 :max 200000 :median 130000} :growth-outlook "Good"
    :required-dimensions {:creative 1.0 :leadership 0.9 :communication 0.8 :pressure-tolerance 0.6}}

   {:id "career-comms-director" :name "Communications Director" :category "Media & Communications"
    :description "Oversee all internal and external communications strategy for an organization."
    :typical-majors ["Communications" "Public Relations" "Journalism" "Business"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 65000 :max 160000 :median 100000} :growth-outlook "Good"
    :required-dimensions {:communication 1.0 :leadership 0.9 :people 0.7 :creative 0.5}}

   {:id "career-photojournalist" :name "Photojournalist" :category "Media & Communications"
    :description "Tell news stories through powerful photography that captures events as they unfold."
    :typical-majors ["Photography" "Journalism" "Communications" "Visual Arts"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 28000 :max 75000 :median 42000} :growth-outlook "Moderate"
    :required-dimensions {:creative 0.9 :pressure-tolerance 0.8 :physical 0.6 :risk-tolerance 0.5}}

   {:id "career-news-anchor" :name "Broadcast News Anchor" :category "Media & Communications"
    :description "Deliver news to audiences on television or digital broadcasts with poise and credibility."
    :typical-majors ["Broadcasting" "Journalism" "Communications" "Political Science"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 35000 :max 300000 :median 65000} :growth-outlook "Moderate"
    :required-dimensions {:communication 1.0 :pressure-tolerance 0.9 :people 0.6 :competitive 0.5}}

   {:id "career-documentary-filmmaker" :name "Documentary Filmmaker" :category "Media & Communications"
    :description "Research, produce, and direct documentary films that explore real-world stories and issues."
    :typical-majors ["Film Studies" "Communications" "Journalism" "Digital Media"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 30000 :max 120000 :median 55000} :growth-outlook "Moderate"
    :required-dimensions {:creative 1.0 :social-impact 0.7 :communication 0.7 :leadership 0.5}}

   {:id "career-audio-engineer" :name "Audio Engineer" :category "Media & Communications"
    :description "Record, mix, and master audio for music, film, broadcasts, and other media productions."
    :typical-majors ["Audio Engineering" "Music Production" "Electrical Engineering" "Communications"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 35000 :max 100000 :median 55000} :growth-outlook "Moderate"
    :required-dimensions {:technical 0.9 :creative 0.8 :analytical 0.6}}

   {:id "career-media-buyer" :name "Media Buyer / Planner" :category "Media & Communications"
    :description "Plan and purchase advertising space across media channels to maximize campaign reach and ROI."
    :typical-majors ["Marketing" "Advertising" "Communications" "Business"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 40000 :max 95000 :median 58000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.8 :negotiation 0.8 :communication 0.6 :people 0.5}}

   {:id "career-radio-host" :name "Radio Host" :category "Media & Communications"
    :description "Entertain and inform audiences through on-air radio programming and live broadcasts."
    :typical-majors ["Broadcasting" "Communications" "Journalism" "Any"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 28000 :max 100000 :median 45000} :growth-outlook "Moderate"
    :required-dimensions {:communication 1.0 :people 0.7 :pressure-tolerance 0.7 :creative 0.6}}

   {:id "career-scriptwriter" :name "Scriptwriter" :category "Media & Communications"
    :description "Write scripts for film, television, theater, and digital media productions."
    :typical-majors ["Screenwriting" "Creative Writing" "English" "Film Studies"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 30000 :max 200000 :median 65000} :growth-outlook "Moderate"
    :required-dimensions {:creative 1.0 :communication 0.9 :analytical 0.5 :stability -0.3}}

   {:id "career-brand-strategist" :name "Brand Strategist" :category "Media & Communications"
    :description "Define brand positioning, messaging, and identity strategy to differentiate in the marketplace."
    :typical-majors ["Marketing" "Business" "Communications" "Psychology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 140000 :median 80000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :analytical 0.8 :communication 0.8 :people 0.5}}

   {:id "career-public-affairs" :name "Public Affairs Specialist" :category "Media & Communications"
    :description "Manage government and public relations to shape policy and public perception for organizations."
    :typical-majors ["Political Science" "Communications" "Public Relations" "Public Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 48000 :max 110000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:communication 0.9 :social-impact 0.7 :people 0.7 :analytical 0.6}}

   {:id "career-event-planner" :name "Event Planner" :category "Media & Communications"
    :description "Organize and execute events from corporate conferences to large-scale public gatherings."
    :typical-majors ["Event Management" "Hospitality" "Communications" "Business"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 38000 :max 85000 :median 52000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :pressure-tolerance 0.8 :communication 0.7 :creative 0.6 :leadership 0.5}}

   {:id "career-speechwriter" :name "Speechwriter" :category "Media & Communications"
    :description "Craft persuasive speeches and talking points for executives, politicians, and public figures."
    :typical-majors ["English" "Communications" "Political Science" "Rhetoric"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 45000 :max 130000 :median 72000} :growth-outlook "Moderate"
    :required-dimensions {:communication 1.0 :creative 0.9 :analytical 0.7}}

   ;; ============================================
   ;; EDUCATION (12)
   ;; ============================================
   {:id "career-teacher" :name "Teacher/Professor" :category "Education"
    :description "Inspire and develop the next generation using coaching and mentorship skills honed as an athlete."
    :typical-majors ["Education" "Subject-Specific Field" "Curriculum Development"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 40000 :max 120000 :median 60000} :growth-outlook "Moderate"
    :required-dimensions {:mentoring 1.0 :communication 0.9 :people 0.8 :social-impact 0.7 :income-priority -0.3}}

   {:id "career-nonprofit-program-manager" :name "Nonprofit Program Manager" :category "Education"
    :description "Design and lead programs that make a difference in communities through team leadership and purpose."
    :typical-majors ["Nonprofit Management" "Social Work" "Public Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 45000 :max 85000 :median 60000} :growth-outlook "Good"
    :required-dimensions {:social-impact 1.0 :people 0.8 :leadership 0.7 :communication 0.6 :income-priority -0.3}}

   {:id "career-school-counselor" :name "School Counselor" :category "Education"
    :description "Guide students through academic, career, and personal development challenges."
    :typical-majors ["Counseling" "Psychology" "Education" "Social Work"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 45000 :max 80000 :median 60000} :growth-outlook "Good"
    :required-dimensions {:people 1.0 :mentoring 0.9 :communication 0.8 :social-impact 0.6}}

   {:id "career-school-principal" :name "School Principal / Administrator" :category "Education"
    :description "Lead educational institutions managing staff, curriculum, budgets, and school culture."
    :typical-majors ["Educational Leadership" "Education" "Business Administration" "Public Administration"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 75000 :max 150000 :median 100000} :growth-outlook "Good"
    :required-dimensions {:leadership 1.0 :people 0.8 :communication 0.7 :analytical 0.5}}

   {:id "career-curriculum-designer" :name "Curriculum Designer" :category "Education"
    :description "Create educational content, learning pathways, and assessment frameworks for schools and programs."
    :typical-majors ["Education" "Curriculum Development" "Instructional Design" "Subject-Specific Field"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 50000 :max 90000 :median 68000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :analytical 0.8 :education-openness 0.7 :communication 0.5}}

   {:id "career-special-ed-teacher" :name "Special Education Teacher" :category "Education"
    :description "Provide tailored instruction and support to students with diverse learning needs."
    :typical-majors ["Special Education" "Education" "Psychology" "Child Development"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 42000 :max 75000 :median 55000} :growth-outlook "Good"
    :required-dimensions {:mentoring 1.0 :people 0.9 :social-impact 0.8 :communication 0.6 :income-priority -0.3}}

   {:id "career-academic-advisor" :name "Academic Advisor" :category "Education"
    :description "Help students navigate academic programs, course selection, and degree planning."
    :typical-majors ["Education" "Counseling" "Higher Education" "Any"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 40000 :max 70000 :median 50000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :mentoring 0.9 :communication 0.7 :social-impact 0.5}}

   {:id "career-admissions-counselor" :name "Admissions Counselor" :category "Education"
    :description "Recruit and evaluate prospective students for colleges and universities."
    :typical-majors ["Education" "Communications" "Business" "Any"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 38000 :max 65000 :median 48000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :communication 0.8 :competitive 0.6 :analytical 0.5}}

   {:id "career-corporate-ld" :name "Corporate Learning & Development Specialist" :category "Education"
    :description "Design and deliver professional development programs that build employee capabilities."
    :typical-majors ["Education" "Human Resources" "Organizational Development" "Business"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 110000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:mentoring 0.9 :communication 0.8 :creative 0.7 :people 0.6}}

   {:id "career-education-policy" :name "Education Policy Analyst" :category "Education"
    :description "Research and analyze education policies to improve systems and outcomes at scale."
    :typical-majors ["Education Policy" "Public Policy" "Political Science" "Economics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 50000 :max 100000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :social-impact 0.8 :communication 0.7 :education-openness 0.6}}

   {:id "career-early-childhood-director" :name "Early Childhood Education Director" :category "Education"
    :description "Lead early childhood programs ensuring quality care and developmentally appropriate education."
    :typical-majors ["Early Childhood Education" "Education" "Child Development" "Psychology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 40000 :max 75000 :median 52000} :growth-outlook "Good"
    :required-dimensions {:mentoring 0.9 :leadership 0.8 :people 0.8 :social-impact 0.6}}

   {:id "career-instructional-designer" :name "Instructional Designer" :category "Education"
    :description "Design engaging learning experiences and educational materials using technology and pedagogy."
    :typical-majors ["Instructional Design" "Education" "Educational Technology" "Communications"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 55000 :max 100000 :median 72000} :growth-outlook "Excellent"
    :required-dimensions {:creative 0.9 :technical 0.8 :communication 0.7 :analytical 0.5}}
   ;; ============================================
   ;; TECHNOLOGY (25 — Product Designer removed)
   ;; ============================================
   {:id "career-product-manager" :name "Product Manager" :category "Technology"
    :description "Lead cross-functional teams to build products that customers love, managing stakeholders across disciplines."
    :typical-majors ["Business Administration" "Computer Science" "Engineering" "Marketing"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 80000 :max 200000 :median 120000} :growth-outlook "Excellent"
    :required-dimensions {:communication 0.9 :analytical 0.8 :leadership 0.7 :people 0.6 :technical 0.5}}

   {:id "career-software-engineer" :name "Software Engineer" :category "Technology"
    :description "Design, build, and maintain software systems that power modern applications and services."
    :typical-majors ["Computer Science" "Software Engineering" "Mathematics" "Electrical Engineering"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 75000 :max 250000 :median 125000} :growth-outlook "Excellent"
    :required-dimensions {:technical 1.0 :analytical 0.9 :creative 0.5}}

   {:id "career-data-scientist" :name "Data Scientist" :category "Technology"
    :description "Extract insights from large datasets using statistics, machine learning, and programming."
    :typical-majors ["Data Science" "Statistics" "Computer Science" "Mathematics"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 85000 :max 200000 :median 130000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 1.0 :technical 0.8 :education-openness 0.6 :communication 0.5}}

   {:id "career-ux-designer" :name "UX/UI Designer" :category "Technology"
    :description "Design intuitive, user-centered digital experiences for websites, apps, and software products."
    :typical-majors ["Design" "Human-Computer Interaction" "Psychology" "Computer Science"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 65000 :max 160000 :median 100000} :growth-outlook "Excellent"
    :required-dimensions {:creative 1.0 :people 0.8 :communication 0.6 :technical 0.5}}

   {:id "career-cybersecurity" :name "Cybersecurity Analyst" :category "Technology"
    :description "Protect organizations from cyber threats by monitoring, detecting, and responding to security incidents."
    :typical-majors ["Cybersecurity" "Computer Science" "Information Technology" "Criminal Justice"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 65000 :max 160000 :median 105000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :analytical 0.9 :pressure-tolerance 0.8}}

   {:id "career-cloud-architect" :name "Cloud Architect" :category "Technology"
    :description "Design and oversee cloud computing strategies and infrastructure for organizations."
    :typical-majors ["Computer Science" "Information Technology" "Engineering" "Cloud Computing"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 110000 :max 220000 :median 155000} :growth-outlook "Excellent"
    :required-dimensions {:technical 1.0 :analytical 0.8 :leadership 0.6 :communication 0.5}}

   {:id "career-devops" :name "DevOps Engineer" :category "Technology"
    :description "Bridge development and operations to automate software delivery and infrastructure management."
    :typical-majors ["Computer Science" "Information Technology" "Software Engineering" "Systems Engineering"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 80000 :max 180000 :median 120000} :growth-outlook "Excellent"
    :required-dimensions {:technical 1.0 :analytical 0.8 :pressure-tolerance 0.6}}

   {:id "career-ml-engineer" :name "Machine Learning Engineer" :category "Technology"
    :description "Build and deploy machine learning models that enable intelligent systems and automation."
    :typical-majors ["Computer Science" "Mathematics" "Statistics" "AI/Machine Learning"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 100000 :max 250000 :median 155000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :analytical 1.0 :education-openness 0.7 :creative 0.5}}

   {:id "career-fullstack-dev" :name "Full-Stack Developer" :category "Technology"
    :description "Build complete web applications handling both front-end interfaces and back-end systems."
    :typical-majors ["Computer Science" "Software Engineering" "Web Development" "Information Technology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 70000 :max 180000 :median 110000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :analytical 0.8 :creative 0.6}}

   {:id "career-mobile-dev" :name "Mobile App Developer" :category "Technology"
    :description "Design and build applications for iOS and Android mobile platforms."
    :typical-majors ["Computer Science" "Software Engineering" "Mobile Development" "Information Technology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 70000 :max 170000 :median 110000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :creative 0.8 :analytical 0.7}}

   {:id "career-it-pm" :name "IT Project Manager" :category "Technology"
    :description "Plan and execute technology projects on time and budget while coordinating cross-functional teams."
    :typical-majors ["Information Technology" "Business" "Computer Science" "Project Management"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 70000 :max 150000 :median 100000} :growth-outlook "Good"
    :required-dimensions {:leadership 0.9 :communication 0.8 :people 0.7 :pressure-tolerance 0.6 :technical 0.5}}

   {:id "career-dba" :name "Database Administrator" :category "Technology"
    :description "Design, implement, and maintain database systems ensuring performance, security, and availability."
    :typical-majors ["Computer Science" "Information Systems" "Database Administration" "Information Technology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 130000 :median 90000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :analytical 0.9 :stability 0.6}}

   {:id "career-qa-engineer" :name "QA / Test Engineer" :category "Technology"
    :description "Ensure software quality through testing strategies, automation, and bug detection processes."
    :typical-majors ["Computer Science" "Software Engineering" "Information Technology" "Mathematics"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 130000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.8 :stability 0.5}}

   {:id "career-sysadmin" :name "Systems Administrator" :category "Technology"
    :description "Manage and maintain IT infrastructure including servers, networks, and operating systems."
    :typical-majors ["Information Technology" "Computer Science" "Systems Administration" "Networking"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 50000 :max 110000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :pressure-tolerance 0.7 :analytical 0.6 :stability 0.5}}

   {:id "career-technical-writer" :name "Technical Writer" :category "Technology"
    :description "Create clear documentation, guides, and technical content for software and technology products."
    :typical-majors ["English" "Communications" "Computer Science" "Technical Writing"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 110000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:communication 1.0 :technical 0.7 :analytical 0.6}}

   {:id "career-scrum-master" :name "Scrum Master / Agile Coach" :category "Technology"
    :description "Facilitate agile development processes and coach teams to deliver software efficiently."
    :typical-majors ["Business" "Computer Science" "Project Management" "Any"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 70000 :max 150000 :median 100000} :growth-outlook "Good"
    :required-dimensions {:mentoring 0.9 :communication 0.8 :people 0.7 :leadership 0.6}}

   {:id "career-solutions-architect" :name "Solutions Architect" :category "Technology"
    :description "Design complex technology solutions that meet business requirements across systems and platforms."
    :typical-majors ["Computer Science" "Engineering" "Information Systems" "Business"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 100000 :max 200000 :median 140000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :communication 0.8 :analytical 0.7 :leadership 0.5}}

   {:id "career-data-engineer" :name "Data Engineer" :category "Technology"
    :description "Build and maintain data pipelines and infrastructure that enable analytics and machine learning."
    :typical-majors ["Computer Science" "Data Engineering" "Software Engineering" "Mathematics"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 80000 :max 180000 :median 120000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :analytical 0.9 :education-openness 0.5}}

   {:id "career-ai-researcher" :name "AI Research Scientist" :category "Technology"
    :description "Push the boundaries of artificial intelligence through research, experimentation, and publication."
    :typical-majors ["Computer Science" "Mathematics" "AI/Machine Learning" "Cognitive Science"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 120000 :max 350000 :median 180000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 1.0 :education-openness 0.9 :technical 0.8 :creative 0.6}}

   {:id "career-frontend-dev" :name "Front-End Developer" :category "Technology"
    :description "Build responsive, accessible user interfaces for web applications using modern frameworks."
    :typical-majors ["Computer Science" "Web Development" "Design" "Information Technology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 160000 :median 95000} :growth-outlook "Good"
    :required-dimensions {:technical 0.8 :creative 0.8 :analytical 0.6}}

   {:id "career-blockchain-dev" :name "Blockchain Developer" :category "Technology"
    :description "Build decentralized applications and smart contracts on blockchain platforms."
    :typical-majors ["Computer Science" "Cryptography" "Software Engineering" "Mathematics"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 80000 :max 200000 :median 130000} :growth-outlook "Good"
    :required-dimensions {:technical 1.0 :analytical 0.9 :risk-tolerance 0.6}}

   {:id "career-cto" :name "CTO / VP of Engineering" :category "Technology"
    :description "Lead technology strategy and engineering teams to build and scale products and infrastructure."
    :typical-majors ["Computer Science" "Engineering" "Business" "Information Systems"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 150000 :max 500000 :median 250000} :growth-outlook "Good"
    :required-dimensions {:leadership 1.0 :technical 0.9 :communication 0.7 :pressure-tolerance 0.6}}

   {:id "career-network-engineer" :name "Network Engineer" :category "Technology"
    :description "Design, implement, and manage computer networks that connect systems and enable communication."
    :typical-majors ["Computer Networking" "Information Technology" "Computer Science" "Electrical Engineering"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 130000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :analytical 0.8 :pressure-tolerance 0.5 :stability 0.5}}

   {:id "career-it-support-manager" :name "IT Support Manager" :category "Technology"
    :description "Lead IT support teams providing technical assistance and maintaining organizational technology systems."
    :typical-majors ["Information Technology" "Computer Science" "Business" "Any"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 55000 :max 110000 :median 78000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :leadership 0.8 :communication 0.7 :technical 0.6}}

   {:id "career-growth-hacker" :name "Growth Hacker / Growth Engineer" :category "Technology"
    :description "Drive user acquisition and product growth through data-driven experimentation and creative tactics."
    :typical-majors ["Marketing" "Computer Science" "Business" "Data Science"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 65000 :max 170000 :median 100000} :growth-outlook "Excellent"
    :required-dimensions {:entrepreneurial 0.9 :analytical 0.8 :creative 0.8 :competitive 0.6}}

   ;; ============================================
   ;; CREATIVE ARTS & DESIGN (4)
   ;; ============================================
   {:id "career-graphic-designer" :name "Graphic Designer" :category "Creative Arts & Design"
    :description "Create visual concepts using computer software or by hand to communicate ideas that inspire and inform consumers."
    :typical-majors ["Graphic Design" "Visual Arts" "Communications" "Fine Arts"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 38000 :max 85000 :median 55000} :growth-outlook "Moderate"
    :required-dimensions {:creative 1.0 :technical 0.7 :communication 0.6 :stability -0.3}}

   {:id "career-interior-designer" :name "Interior Designer" :category "Creative Arts & Design"
    :description "Plan and design functional, safe, and beautiful interior spaces for residential and commercial environments."
    :typical-majors ["Interior Design" "Architecture" "Fine Arts" "Environmental Design"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 40000 :max 90000 :median 60000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :people 0.8 :communication 0.6 :entrepreneurial 0.5}}

   {:id "career-fashion-designer" :name "Fashion Designer" :category "Creative Arts & Design"
    :description "Design clothing and accessories, following trends and creating original designs for the fashion industry."
    :typical-majors ["Fashion Design" "Textile Science" "Fine Arts" "Business"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 35000 :max 130000 :median 55000} :growth-outlook "Moderate"
    :required-dimensions {:creative 1.0 :entrepreneurial 0.7 :competitive 0.6 :risk-tolerance 0.6}}

   {:id "career-architect" :name "Architect" :category "Creative Arts & Design"
    :description "Design buildings and structures, balancing artistic vision with engineering principles and client needs."
    :typical-majors ["Architecture" "Environmental Design" "Civil Engineering" "Urban Planning"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 55000 :max 140000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :analytical 0.9 :technical 0.8 :education-openness 0.5}}

   ;; ============================================
   ;; LAW & PUBLIC POLICY (18)
   ;; ============================================
   {:id "career-attorney" :name "Attorney / Lawyer" :category "Law & Public Policy"
    :description "Advise and represent clients in legal matters, applying analytical thinking and persuasive communication."
    :typical-majors ["Political Science" "Pre-Law" "Criminal Justice" "English"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 65000 :max 250000 :median 130000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :communication 0.9 :competitive 0.8 :pressure-tolerance 0.6}}

   {:id "career-paralegal" :name "Paralegal" :category "Law & Public Policy"
    :description "Support attorneys by conducting legal research, drafting documents, and managing case files."
    :typical-majors ["Paralegal Studies" "Criminal Justice" "Political Science" "English"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 38000 :max 72000 :median 52000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.8 :communication 0.7 :stability 0.6 :people 0.5}}

   {:id "career-judge" :name "Judge" :category "Law & Public Policy"
    :description "Preside over legal proceedings, interpret the law, and make decisions on cases in courtrooms."
    :typical-majors ["Law" "Political Science" "Criminal Justice" "Public Administration"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 80000 :max 220000 :median 140000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 1.0 :leadership 0.9 :pressure-tolerance 0.8 :social-impact 0.6}}

   {:id "career-mediator" :name "Mediator / Arbitrator" :category "Law & Public Policy"
    :description "Facilitate negotiations and dispute resolution between parties outside of formal court proceedings."
    :typical-majors ["Law" "Conflict Resolution" "Psychology" "Business"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 45000 :max 130000 :median 66000} :growth-outlook "Good"
    :required-dimensions {:negotiation 1.0 :people 0.9 :communication 0.7}}

   {:id "career-lobbyist" :name "Lobbyist" :category "Law & Public Policy"
    :description "Advocate for specific legislation and policy positions on behalf of organizations or interest groups."
    :typical-majors ["Political Science" "Public Policy" "Law" "Communications"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 50000 :max 200000 :median 90000} :growth-outlook "Moderate"
    :required-dimensions {:negotiation 0.9 :communication 0.9 :people 0.7 :competitive 0.6}}

   {:id "career-policy-analyst" :name "Policy Analyst" :category "Law & Public Policy"
    :description "Research and analyze public policies, evaluate their impact, and develop recommendations for improvements."
    :typical-majors ["Public Policy" "Political Science" "Economics" "Statistics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 50000 :max 100000 :median 65000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :social-impact 0.7 :communication 0.6 :education-openness 0.6}}

   {:id "career-legislative-aide" :name "Legislative Aide" :category "Law & Public Policy"
    :description "Support elected officials by researching legislation, drafting communications, and managing constituent services."
    :typical-majors ["Political Science" "Public Administration" "Communications" "Law"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 35000 :max 65000 :median 45000} :growth-outlook "Moderate"
    :required-dimensions {:communication 0.9 :people 0.7 :analytical 0.6 :social-impact 0.5}}

   {:id "career-fbi-cia-agent" :name "FBI / CIA Agent" :category "Law & Public Policy"
    :description "Investigate federal crimes or gather intelligence to protect national security interests."
    :typical-majors ["Criminal Justice" "Political Science" "International Relations" "Computer Science"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 140000 :median 90000} :growth-outlook "Moderate"
    :required-dimensions {:pressure-tolerance 0.9 :analytical 0.9 :risk-tolerance 0.8 :physical 0.7 :competitive 0.6}}

   {:id "career-compliance-analyst" :name "Compliance Analyst" :category "Law & Public Policy"
    :description "Ensure organizations adhere to legal standards, industry regulations, and internal policies."
    :typical-majors ["Business Administration" "Law" "Finance" "Public Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 100000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :stability 0.7 :communication 0.5}}

   {:id "career-legal-consultant" :name "Legal Consultant" :category "Law & Public Policy"
    :description "Provide expert legal advice to businesses on regulatory compliance, risk management, and strategic decisions."
    :typical-majors ["Law" "Business Administration" "Finance" "Public Policy"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 70000 :max 200000 :median 110000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :communication 0.8 :entrepreneurial 0.7 :negotiation 0.6}}

   {:id "career-public-defender" :name "Public Defender" :category "Law & Public Policy"
    :description "Represent defendants who cannot afford private legal counsel in criminal court proceedings."
    :typical-majors ["Law" "Criminal Justice" "Political Science" "Sociology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 50000 :max 100000 :median 65000} :growth-outlook "Moderate"
    :required-dimensions {:social-impact 1.0 :communication 0.8 :pressure-tolerance 0.8 :analytical 0.6 :income-priority -0.3}}

   {:id "career-contracts-manager" :name "Contracts Manager" :category "Law & Public Policy"
    :description "Oversee contract negotiations, drafting, and administration to protect organizational interests."
    :typical-majors ["Business Administration" "Law" "Supply Chain Management" "Finance"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 120000 :median 82000} :growth-outlook "Good"
    :required-dimensions {:negotiation 0.9 :analytical 0.8 :communication 0.6}}

   {:id "career-patent-attorney" :name "Patent Attorney" :category "Law & Public Policy"
    :description "Specialize in intellectual property law, helping inventors and companies protect their innovations."
    :typical-majors ["Law" "Engineering" "Computer Science" "Biology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 90000 :max 250000 :median 160000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :analytical 0.9 :education-openness 0.7 :communication 0.6}}

   {:id "career-city-planner" :name "City Planner / Urban Planner" :category "Law & Public Policy"
    :description "Develop plans and programs for land use in communities, balancing growth with environmental and social needs."
    :typical-majors ["Urban Planning" "Public Administration" "Geography" "Environmental Science"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 50000 :max 100000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:social-impact 0.9 :analytical 0.8 :creative 0.6 :communication 0.5}}

   {:id "career-diplomat" :name "Diplomat / Foreign Service Officer" :category "Law & Public Policy"
    :description "Represent your country abroad, negotiate treaties, and promote international cooperation."
    :typical-majors ["International Relations" "Political Science" "Foreign Languages" "Economics"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 55000 :max 130000 :median 80000} :growth-outlook "Moderate"
    :required-dimensions {:communication 0.9 :negotiation 0.8 :people 0.7 :leadership 0.6 :risk-tolerance 0.5}}

   {:id "career-civil-rights-advocate" :name "Civil Rights Advocate" :category "Law & Public Policy"
    :description "Fight for equal rights and justice through legal action, policy advocacy, and community organizing."
    :typical-majors ["Law" "Political Science" "Sociology" "Social Work"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 40000 :max 100000 :median 58000} :growth-outlook "Good"
    :required-dimensions {:social-impact 1.0 :communication 0.8 :people 0.8 :leadership 0.6 :income-priority -0.3}}

   {:id "career-environmental-lawyer" :name "Environmental Lawyer" :category "Law & Public Policy"
    :description "Specialize in environmental regulations, representing clients in cases involving pollution, land use, and conservation."
    :typical-majors ["Law" "Environmental Science" "Political Science" "Biology"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 60000 :max 170000 :median 95000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :social-impact 0.8 :communication 0.7 :education-openness 0.6}}

   {:id "career-political-campaign-manager" :name "Political Campaign Manager" :category "Law & Public Policy"
    :description "Plan and execute political campaigns, managing strategy, communications, fundraising, and volunteer operations."
    :typical-majors ["Political Science" "Communications" "Marketing" "Public Administration"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 40000 :max 150000 :median 70000} :growth-outlook "Moderate"
    :required-dimensions {:leadership 0.9 :competitive 0.9 :pressure-tolerance 0.8 :communication 0.7 :risk-tolerance 0.6}}
   ;; ============================================
   ;; ENGINEERING (20)
   ;; ============================================
   {:id "career-civil-engineer" :name "Civil Engineer" :category "Engineering"
    :description "Design, build, and maintain infrastructure projects including roads, bridges, buildings, and water systems."
    :typical-majors ["Civil Engineering" "Structural Engineering" "Environmental Engineering" "Construction Management"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 130000 :median 88000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :analytical 0.9 :leadership 0.5}}

   {:id "career-mechanical-engineer" :name "Mechanical Engineer" :category "Engineering"
    :description "Design, develop, and test mechanical devices including engines, machines, and thermal systems."
    :typical-majors ["Mechanical Engineering" "Mechatronics" "Physics" "Materials Science"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 62000 :max 135000 :median 92000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :analytical 0.9 :creative 0.6}}

   {:id "career-electrical-engineer" :name "Electrical Engineer" :category "Engineering"
    :description "Design, develop, and test electrical equipment and systems from power generation to telecommunications."
    :typical-majors ["Electrical Engineering" "Computer Engineering" "Physics" "Electronics"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 65000 :max 140000 :median 95000} :growth-outlook "Good"
    :required-dimensions {:technical 1.0 :analytical 0.9 :education-openness 0.5}}

   {:id "career-chemical-engineer" :name "Chemical Engineer" :category "Engineering"
    :description "Apply chemistry, physics, and math to solve problems involving production of chemicals, fuel, and pharmaceuticals."
    :typical-majors ["Chemical Engineering" "Chemistry" "Biochemistry" "Materials Science"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 68000 :max 150000 :median 100000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 1.0 :technical 0.9 :education-openness 0.6}}

   {:id "career-aerospace-engineer" :name "Aerospace Engineer" :category "Engineering"
    :description "Design aircraft, spacecraft, satellites, and missile systems, pushing the boundaries of flight technology."
    :typical-majors ["Aerospace Engineering" "Mechanical Engineering" "Physics" "Mathematics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 72000 :max 160000 :median 110000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :technical 0.9 :education-openness 0.7 :creative 0.5}}

   {:id "career-environmental-engineer" :name "Environmental Engineer" :category "Engineering"
    :description "Develop solutions to environmental problems including waste treatment, pollution control, and sustainability."
    :typical-majors ["Environmental Engineering" "Civil Engineering" "Environmental Science" "Chemical Engineering"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 58000 :max 120000 :median 80000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 0.9 :technical 0.8 :social-impact 0.8 :education-openness 0.5}}

   {:id "career-structural-engineer" :name "Structural Engineer" :category "Engineering"
    :description "Analyze and design load-bearing structures ensuring buildings, bridges, and infrastructure can withstand stress."
    :typical-majors ["Civil Engineering" "Structural Engineering" "Architecture" "Mechanical Engineering"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 62000 :max 130000 :median 88000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :technical 0.9 :pressure-tolerance 0.6}}

   {:id "career-petroleum-engineer" :name "Petroleum Engineer" :category "Engineering"
    :description "Design methods for extracting oil and gas from deposits below the earth's surface."
    :typical-majors ["Petroleum Engineering" "Chemical Engineering" "Mechanical Engineering" "Geology"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 80000 :max 200000 :median 130000} :growth-outlook "Moderate"
    :required-dimensions {:technical 0.9 :analytical 0.8 :risk-tolerance 0.7 :income-priority 0.7}}

   {:id "career-industrial-engineer" :name "Industrial Engineer" :category "Engineering"
    :description "Optimize complex systems and processes to eliminate waste and improve efficiency in production."
    :typical-majors ["Industrial Engineering" "Systems Engineering" "Operations Research" "Mechanical Engineering"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 125000 :median 88000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.7 :leadership 0.6 :communication 0.5}}

   {:id "career-robotics-engineer" :name "Robotics Engineer" :category "Engineering"
    :description "Design, build, and program robots and automated systems for manufacturing, healthcare, and exploration."
    :typical-majors ["Robotics Engineering" "Mechanical Engineering" "Electrical Engineering" "Computer Science"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 70000 :max 150000 :median 100000} :growth-outlook "Excellent"
    :required-dimensions {:technical 1.0 :analytical 0.9 :creative 0.7 :education-openness 0.5}}

   {:id "career-nuclear-engineer" :name "Nuclear Engineer" :category "Engineering"
    :description "Research and develop nuclear energy processes and instrumentation for power generation and medical applications."
    :typical-majors ["Nuclear Engineering" "Physics" "Mechanical Engineering" "Chemical Engineering"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 75000 :max 155000 :median 105000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 1.0 :technical 0.9 :education-openness 0.8 :pressure-tolerance 0.7}}

   {:id "career-materials-scientist" :name "Materials Scientist" :category "Engineering"
    :description "Study and develop new materials with specific properties for use in products and manufacturing."
    :typical-majors ["Materials Science" "Chemical Engineering" "Physics" "Chemistry"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 60000 :max 130000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.9 :education-openness 0.8 :creative 0.5}}

   {:id "career-marine-engineer" :name "Marine Engineer" :category "Engineering"
    :description "Design, build, and maintain ships, boats, submarines, and offshore structures."
    :typical-majors ["Marine Engineering" "Naval Architecture" "Mechanical Engineering" "Ocean Engineering"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 65000 :max 135000 :median 92000} :growth-outlook "Moderate"
    :required-dimensions {:technical 0.9 :analytical 0.8 :physical 0.5}}

   {:id "career-agricultural-engineer" :name "Agricultural Engineer" :category "Engineering"
    :description "Apply engineering principles to agricultural production and processing, improving food systems."
    :typical-majors ["Agricultural Engineering" "Biological Engineering" "Mechanical Engineering" "Environmental Science"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 110000 :median 75000} :growth-outlook "Good"
    :required-dimensions {:technical 0.8 :analytical 0.8 :social-impact 0.6 :creative 0.5}}

   {:id "career-automotive-engineer" :name "Automotive Engineer" :category "Engineering"
    :description "Design and develop vehicles and their components, focusing on performance, safety, and efficiency."
    :typical-majors ["Mechanical Engineering" "Automotive Engineering" "Electrical Engineering" "Materials Science"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 65000 :max 140000 :median 90000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :analytical 0.8 :creative 0.7 :competitive 0.5}}

   {:id "career-mining-engineer" :name "Mining Engineer" :category "Engineering"
    :description "Plan and direct mining operations for safe and efficient extraction of minerals and metals."
    :typical-majors ["Mining Engineering" "Geological Engineering" "Civil Engineering" "Environmental Engineering"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 65000 :max 135000 :median 92000} :growth-outlook "Moderate"
    :required-dimensions {:technical 0.8 :analytical 0.8 :risk-tolerance 0.7 :physical 0.6 :leadership 0.5}}

   {:id "career-geotechnical-engineer" :name "Geotechnical Engineer" :category "Engineering"
    :description "Analyze soil, rock, and groundwater conditions to design foundations and earthwork structures."
    :typical-majors ["Civil Engineering" "Geological Engineering" "Geotechnical Engineering" "Geology"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 60000 :max 125000 :median 82000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.9 :education-openness 0.6}}

   {:id "career-fire-protection-engineer" :name "Fire Protection Engineer" :category "Engineering"
    :description "Design fire prevention and suppression systems for buildings and industrial facilities."
    :typical-majors ["Fire Protection Engineering" "Mechanical Engineering" "Civil Engineering" "Chemical Engineering"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 60000 :max 120000 :median 82000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.8 :social-impact 0.7 :communication 0.5}}

   {:id "career-acoustical-engineer" :name "Acoustical Engineer" :category "Engineering"
    :description "Design solutions for sound and vibration control in buildings, products, and environments."
    :typical-majors ["Mechanical Engineering" "Physics" "Electrical Engineering" "Architectural Engineering"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 58000 :max 120000 :median 78000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :technical 0.8 :creative 0.7 :education-openness 0.5}}

   {:id "career-renewable-energy-engineer" :name "Renewable Energy Engineer" :category "Engineering"
    :description "Design and develop clean energy systems including solar, wind, and hydroelectric power technologies."
    :typical-majors ["Electrical Engineering" "Mechanical Engineering" "Environmental Engineering" "Energy Engineering"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 65000 :max 140000 :median 90000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :analytical 0.8 :social-impact 0.8 :creative 0.5}}

   ;; ============================================
   ;; SCIENCE & RESEARCH (19 — Astronomer removed)
   ;; ============================================
   {:id "career-biologist" :name "Biologist" :category "Science & Research"
    :description "Study living organisms and their relationships to the environment through laboratory and field research."
    :typical-majors ["Biology" "Biochemistry" "Ecology" "Genetics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 45000 :max 110000 :median 68000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :education-openness 0.9 :technical 0.6 :income-priority -0.3}}

   {:id "career-chemist" :name "Chemist" :category "Science & Research"
    :description "Research and analyze chemical substances and processes to develop new products and materials."
    :typical-majors ["Chemistry" "Biochemistry" "Chemical Engineering" "Materials Science"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 48000 :max 115000 :median 72000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 1.0 :technical 0.8 :education-openness 0.7}}

   {:id "career-physicist" :name "Physicist" :category "Science & Research"
    :description "Study the fundamental principles governing matter, energy, space, and time through theoretical and experimental research."
    :typical-majors ["Physics" "Applied Physics" "Mathematics" "Engineering Physics"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 55000 :max 140000 :median 85000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 1.0 :education-openness 0.9 :technical 0.8 :creative 0.5}}

   {:id "career-marine-biologist" :name "Marine Biologist" :category "Science & Research"
    :description "Study ocean ecosystems, marine organisms, and their behaviors in saltwater environments."
    :typical-majors ["Marine Biology" "Biology" "Oceanography" "Environmental Science"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 40000 :max 90000 :median 55000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :education-openness 0.8 :physical 0.7 :social-impact 0.5 :income-priority -0.3}}

   {:id "career-geologist" :name "Geologist" :category "Science & Research"
    :description "Study the earth's structure, composition, and processes to locate natural resources and assess hazards."
    :typical-majors ["Geology" "Earth Science" "Geophysics" "Environmental Science"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 50000 :max 120000 :median 72000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.7 :physical 0.6 :education-openness 0.5}}

   {:id "career-meteorologist" :name "Meteorologist" :category "Science & Research"
    :description "Study atmospheric conditions to forecast weather patterns and climate trends."
    :typical-majors ["Meteorology" "Atmospheric Science" "Physics" "Mathematics"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 45000 :max 110000 :median 65000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :communication 0.7 :technical 0.7 :education-openness 0.6}}

   {:id "career-forensic-scientist" :name "Forensic Scientist" :category "Science & Research"
    :description "Apply scientific methods to analyze evidence from crime scenes and present findings in legal proceedings."
    :typical-majors ["Forensic Science" "Chemistry" "Biology" "Criminal Justice"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 45000 :max 95000 :median 62000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.7 :pressure-tolerance 0.7 :communication 0.5}}

   {:id "career-environmental-scientist" :name "Environmental Scientist" :category "Science & Research"
    :description "Research environmental problems and develop solutions to protect human health and natural resources."
    :typical-majors ["Environmental Science" "Biology" "Chemistry" "Ecology"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 48000 :max 100000 :median 65000} :growth-outlook "Good"
    :required-dimensions {:social-impact 0.9 :analytical 0.8 :education-openness 0.7 :communication 0.5}}

   {:id "career-microbiologist" :name "Microbiologist" :category "Science & Research"
    :description "Study microscopic organisms including bacteria, viruses, and fungi to advance medicine and environmental science."
    :typical-majors ["Microbiology" "Biology" "Biochemistry" "Molecular Biology"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 48000 :max 110000 :median 68000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.8 :education-openness 0.8}}

   {:id "career-neuroscientist" :name "Neuroscientist" :category "Science & Research"
    :description "Study the nervous system and brain to understand behavior, cognition, and neurological diseases."
    :typical-majors ["Neuroscience" "Biology" "Psychology" "Biomedical Engineering"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 55000 :max 130000 :median 80000} :growth-outlook "Excellent"
    :required-dimensions {:analytical 1.0 :education-openness 0.9 :technical 0.7 :creative 0.5}}

   {:id "career-zoologist" :name "Zoologist" :category "Science & Research"
    :description "Study animal behavior, genetics, and ecosystems to advance conservation and biological understanding."
    :typical-majors ["Zoology" "Biology" "Wildlife Biology" "Ecology"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 42000 :max 85000 :median 58000} :growth-outlook "Moderate"
    :required-dimensions {:education-openness 0.8 :analytical 0.8 :social-impact 0.6 :physical 0.5 :income-priority -0.3}}

   {:id "career-botanist" :name "Botanist" :category "Science & Research"
    :description "Study plant biology, ecology, and genetics to advance agricultural science and conservation efforts."
    :typical-majors ["Botany" "Plant Biology" "Biology" "Environmental Science"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 42000 :max 85000 :median 58000} :growth-outlook "Moderate"
    :required-dimensions {:education-openness 0.8 :analytical 0.8 :social-impact 0.6 :income-priority -0.3}}

   {:id "career-archaeologist" :name "Archaeologist" :category "Science & Research"
    :description "Excavate and analyze artifacts and structures to understand past human cultures and civilizations."
    :typical-majors ["Archaeology" "Anthropology" "History" "Classics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 40000 :max 80000 :median 55000} :growth-outlook "Moderate"
    :required-dimensions {:education-openness 0.9 :analytical 0.8 :physical 0.6 :creative 0.5 :income-priority -0.3}}

   {:id "career-oceanographer" :name "Oceanographer" :category "Science & Research"
    :description "Study the ocean's physical, chemical, and biological properties to understand marine systems."
    :typical-majors ["Oceanography" "Marine Science" "Earth Science" "Physics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 50000 :max 110000 :median 70000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :education-openness 0.8 :technical 0.7 :physical 0.5}}

   {:id "career-lab-research-technician" :name "Lab Research Technician" :category "Science & Research"
    :description "Conduct laboratory experiments, maintain equipment, and assist scientists with research projects."
    :typical-majors ["Biology" "Chemistry" "Biotechnology" "Biochemistry"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 35000 :max 65000 :median 45000} :growth-outlook "Good"
    :required-dimensions {:technical 0.8 :analytical 0.8 :stability 0.6}}

   {:id "career-ecologist" :name "Ecologist" :category "Science & Research"
    :description "Study the relationships between organisms and their environments to inform conservation strategies."
    :typical-majors ["Ecology" "Biology" "Environmental Science" "Natural Resources"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 45000 :max 95000 :median 62000} :growth-outlook "Good"
    :required-dimensions {:social-impact 0.9 :analytical 0.8 :education-openness 0.7 :physical 0.5 :income-priority -0.3}}

   {:id "career-conservation-scientist" :name "Conservation Scientist" :category "Science & Research"
    :description "Manage and protect natural resources, forests, and rangelands for sustainable use."
    :typical-majors ["Conservation Biology" "Environmental Science" "Forestry" "Natural Resources"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 45000 :max 90000 :median 60000} :growth-outlook "Good"
    :required-dimensions {:social-impact 1.0 :physical 0.7 :analytical 0.7 :communication 0.5 :income-priority -0.3}}

   {:id "career-food-scientist" :name "Food Scientist" :category "Science & Research"
    :description "Research food processing, preservation, and safety to improve the quality and nutritional value of food products."
    :typical-majors ["Food Science" "Chemistry" "Biology" "Nutrition"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 48000 :max 100000 :median 68000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :technical 0.7 :education-openness 0.6 :creative 0.5}}

   {:id "career-volcanologist" :name "Volcanologist" :category "Science & Research"
    :description "Study volcanic activity and eruptions to predict hazards and understand earth's geological processes."
    :typical-majors ["Geology" "Geophysics" "Earth Science" "Physics"]
    :grad-school-recommended true :internship-importance 3
    :salary-range {:min 50000 :max 110000 :median 70000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :risk-tolerance 0.8 :physical 0.7 :education-openness 0.6}}

   ;; ============================================
   ;; FINANCE & ACCOUNTING (19)
   ;; ============================================
   {:id "career-accountant" :name "Accountant (CPA)" :category "Finance & Accounting"
    :description "Prepare and examine financial records, ensuring accuracy and compliance with tax laws and regulations."
    :typical-majors ["Accounting" "Finance" "Business Administration" "Economics"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 50000 :max 110000 :median 73000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :stability 0.7 :technical 0.6}}

   {:id "career-financial-analyst" :name "Financial Analyst" :category "Finance & Accounting"
    :description "Evaluate financial data and market trends to guide business investment decisions and strategies."
    :typical-majors ["Finance" "Economics" "Accounting" "Mathematics"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 55000 :max 130000 :median 80000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :pressure-tolerance 0.7 :competitive 0.6 :communication 0.5}}

   {:id "career-portfolio-manager" :name "Portfolio Manager" :category "Finance & Accounting"
    :description "Make investment decisions and manage portfolios of securities to maximize returns for clients."
    :typical-majors ["Finance" "Economics" "Mathematics" "Business Administration"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 80000 :max 300000 :median 130000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :risk-tolerance 0.8 :pressure-tolerance 0.8 :competitive 0.7}}

   {:id "career-auditor" :name "Auditor" :category "Finance & Accounting"
    :description "Examine financial statements and records to ensure compliance with laws and organizational policies."
    :typical-majors ["Accounting" "Finance" "Business Administration" "Information Systems"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 105000 :median 72000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :stability 0.7 :communication 0.5}}

   {:id "career-budget-analyst" :name "Budget Analyst" :category "Finance & Accounting"
    :description "Help organizations plan their finances by preparing budget reports and monitoring spending."
    :typical-majors ["Finance" "Accounting" "Economics" "Public Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 95000 :median 68000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :communication 0.6 :stability 0.6}}

   {:id "career-loan-officer" :name "Loan Officer" :category "Finance & Accounting"
    :description "Evaluate and authorize loan applications for individuals and businesses."
    :typical-majors ["Finance" "Business Administration" "Economics" "Accounting"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 45000 :max 120000 :median 65000} :growth-outlook "Moderate"
    :required-dimensions {:people 0.8 :analytical 0.7 :communication 0.7 :negotiation 0.6}}

   {:id "career-credit-analyst" :name "Credit Analyst" :category "Finance & Accounting"
    :description "Assess creditworthiness of individuals and companies to determine lending risk."
    :typical-majors ["Finance" "Accounting" "Economics" "Business Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 48000 :max 95000 :median 65000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :risk-tolerance 0.6 :stability 0.5}}

   {:id "career-stockbroker" :name "Stockbroker" :category "Finance & Accounting"
    :description "Buy and sell securities on behalf of clients, providing investment advice and market analysis."
    :typical-majors ["Finance" "Economics" "Business Administration" "Mathematics"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 45000 :max 250000 :median 80000} :growth-outlook "Moderate"
    :required-dimensions {:competitive 1.0 :pressure-tolerance 0.9 :communication 0.8 :risk-tolerance 0.7 :income-priority 0.6}}

   {:id "career-economist" :name "Economist" :category "Finance & Accounting"
    :description "Research economic trends, develop forecasts, and advise organizations on economic policies and strategies."
    :typical-majors ["Economics" "Mathematics" "Statistics" "Public Policy"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 60000 :max 150000 :median 95000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :education-openness 0.9 :communication 0.6}}

   {:id "career-forensic-accountant" :name "Forensic Accountant" :category "Finance & Accounting"
    :description "Investigate financial fraud and irregularities, often working with law enforcement and legal teams."
    :typical-majors ["Accounting" "Finance" "Criminal Justice" "Information Systems"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 55000 :max 120000 :median 78000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :pressure-tolerance 0.7 :technical 0.6 :communication 0.5}}

   {:id "career-treasurer" :name "Treasurer" :category "Finance & Accounting"
    :description "Manage an organization's financial assets, investments, and cash flow to ensure fiscal health."
    :typical-majors ["Finance" "Accounting" "Business Administration" "Economics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 70000 :max 180000 :median 100000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :leadership 0.8 :risk-tolerance 0.6 :communication 0.5}}

   {:id "career-wealth-manager" :name "Wealth Manager" :category "Finance & Accounting"
    :description "Provide comprehensive financial planning and investment management for high-net-worth individuals."
    :typical-majors ["Finance" "Economics" "Business Administration" "Financial Planning"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 60000 :max 250000 :median 100000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :communication 0.9 :analytical 0.7 :income-priority 0.7 :negotiation 0.6}}

   {:id "career-quantitative-analyst" :name "Quantitative Analyst" :category "Finance & Accounting"
    :description "Develop complex mathematical models for financial trading and risk management systems."
    :typical-majors ["Mathematics" "Statistics" "Physics" "Computer Science"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 90000 :max 300000 :median 150000} :growth-outlook "Good"
    :required-dimensions {:analytical 1.0 :technical 0.9 :education-openness 0.8 :competitive 0.5}}

   {:id "career-hedge-fund-manager" :name "Hedge Fund Manager" :category "Finance & Accounting"
    :description "Manage pooled investment funds using aggressive strategies to generate returns for investors."
    :typical-majors ["Finance" "Economics" "Mathematics" "Business Administration"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 100000 :max 1000000 :median 200000} :growth-outlook "Moderate"
    :required-dimensions {:competitive 1.0 :risk-tolerance 0.9 :pressure-tolerance 0.9 :analytical 0.8 :income-priority 0.8}}

   {:id "career-financial-controller" :name "Financial Controller" :category "Finance & Accounting"
    :description "Oversee all accounting operations, financial reporting, and internal controls for an organization."
    :typical-majors ["Accounting" "Finance" "Business Administration" "Economics"]
    :grad-school-recommended true :internship-importance 4
    :salary-range {:min 80000 :max 170000 :median 110000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :leadership 0.8 :communication 0.6 :stability 0.5}}

   {:id "career-payroll-manager" :name "Payroll Manager" :category "Finance & Accounting"
    :description "Oversee payroll operations ensuring accurate and timely employee compensation and tax compliance."
    :typical-majors ["Accounting" "Business Administration" "Human Resources" "Finance"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 50000 :max 95000 :median 68000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.8 :stability 0.7 :technical 0.6 :leadership 0.5}}

   {:id "career-cost-estimator" :name "Cost Estimator" :category "Finance & Accounting"
    :description "Analyze project requirements to estimate time, materials, and labor costs for manufacturing and construction."
    :typical-majors ["Construction Management" "Engineering" "Finance" "Business Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 48000 :max 100000 :median 68000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.9 :technical 0.7 :communication 0.5}}

   {:id "career-bankruptcy-specialist" :name "Bankruptcy Specialist" :category "Finance & Accounting"
    :description "Guide individuals and businesses through bankruptcy proceedings and financial restructuring."
    :typical-majors ["Finance" "Accounting" "Law" "Business Administration"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 50000 :max 110000 :median 72000} :growth-outlook "Moderate"
    :required-dimensions {:analytical 0.8 :people 0.7 :negotiation 0.7 :communication 0.6}}

   {:id "career-private-equity-associate" :name "Private Equity Associate" :category "Finance & Accounting"
    :description "Evaluate and execute investments in private companies, focusing on value creation and growth."
    :typical-majors ["Finance" "Economics" "Business Administration" "Accounting"]
    :grad-school-recommended true :internship-importance 5
    :salary-range {:min 90000 :max 350000 :median 150000} :growth-outlook "Good"
    :required-dimensions {:analytical 0.9 :competitive 0.9 :pressure-tolerance 0.8 :income-priority 0.7}}

   ;; ============================================
   ;; HOSPITALITY & TOURISM (5)
   ;; ============================================
   {:id "career-hotel-general-manager" :name "Hotel General Manager" :category "Hospitality & Tourism"
    :description "Oversee all operations of a hotel or resort, managing staff, budgets, and guest satisfaction."
    :typical-majors ["Hospitality Management" "Business Administration" "Tourism Management" "Hotel Administration"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 55000 :max 150000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:leadership 0.9 :people 0.9 :communication 0.7 :pressure-tolerance 0.6}}

   {:id "career-restaurant-manager" :name "Restaurant Manager" :category "Hospitality & Tourism"
    :description "Manage daily restaurant operations including staffing, inventory, customer service, and financial performance."
    :typical-majors ["Hospitality Management" "Business Administration" "Culinary Arts" "Food Service Management"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 40000 :max 85000 :median 55000} :growth-outlook "Moderate"
    :required-dimensions {:leadership 0.9 :pressure-tolerance 0.8 :people 0.8 :communication 0.5}}

   {:id "career-wedding-planner" :name "Wedding Planner" :category "Hospitality & Tourism"
    :description "Coordinate all aspects of wedding events from venue selection to vendor management and day-of execution."
    :typical-majors ["Event Management" "Hospitality" "Business" "Communications"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 30000 :max 90000 :median 50000} :growth-outlook "Good"
    :required-dimensions {:creative 0.9 :people 0.9 :pressure-tolerance 0.8 :entrepreneurial 0.6}}

   {:id "career-cruise-director" :name "Cruise Director" :category "Hospitality & Tourism"
    :description "Manage entertainment, activities, and guest experience programs aboard cruise ships."
    :typical-majors ["Hospitality Management" "Recreation Management" "Communications" "Theater"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 40000 :max 85000 :median 55000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :communication 0.8 :creative 0.7 :leadership 0.6}}

   {:id "career-flight-attendant" :name "Flight Attendant" :category "Hospitality & Tourism"
    :description "Ensure passenger safety and comfort during flights while providing excellent customer service."
    :typical-majors ["Hospitality" "Communications" "Tourism" "Liberal Arts"]
    :grad-school-recommended false :internship-importance 2
    :salary-range {:min 30000 :max 80000 :median 45000} :growth-outlook "Good"
    :required-dimensions {:people 0.9 :communication 0.7 :pressure-tolerance 0.7 :physical 0.5}}

   ;; ============================================
   ;; TRADES & SKILLED LABOR (11)
   ;; ============================================
   {:id "career-electrician" :name "Electrician" :category "Trades & Skilled Labor"
    :description "Install, maintain, and repair electrical wiring, systems, and fixtures in buildings and structures."
    :typical-majors ["Electrical Technology" "Construction Management" "Applied Sciences" "Trade Apprenticeship"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 40000 :max 95000 :median 60000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :physical 0.7 :analytical 0.6 :stability 0.5}}

   {:id "career-plumber" :name "Plumber" :category "Trades & Skilled Labor"
    :description "Install and repair piping systems for water, gas, and drainage in residential and commercial buildings."
    :typical-majors ["Plumbing Technology" "Construction Management" "Applied Sciences" "Trade Apprenticeship"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 38000 :max 90000 :median 58000} :growth-outlook "Good"
    :required-dimensions {:technical 0.9 :physical 0.7 :entrepreneurial 0.6 :analytical 0.5}}

   {:id "career-hvac-technician" :name "HVAC Technician" :category "Trades & Skilled Labor"
    :description "Install, maintain, and repair heating, ventilation, air conditioning, and refrigeration systems."
    :typical-majors ["HVAC Technology" "Mechanical Technology" "Applied Sciences" "Trade Apprenticeship"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 38000 :max 85000 :median 55000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :physical 0.7 :analytical 0.6 :stability 0.6}}

   {:id "career-carpenter" :name "Carpenter" :category "Trades & Skilled Labor"
    :description "Build, install, and repair structures and fixtures made of wood and other materials."
    :typical-majors ["Carpentry" "Construction Management" "Applied Sciences" "Trade Apprenticeship"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 35000 :max 80000 :median 52000} :growth-outlook "Moderate"
    :required-dimensions {:physical 0.8 :technical 0.8 :creative 0.6 :stability 0.5}}

   {:id "career-welder" :name "Welder" :category "Trades & Skilled Labor"
    :description "Join metal parts together using various welding techniques for construction, manufacturing, and repair."
    :typical-majors ["Welding Technology" "Metal Fabrication" "Industrial Technology" "Trade Apprenticeship"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 35000 :max 80000 :median 48000} :growth-outlook "Moderate"
    :required-dimensions {:technical 0.9 :physical 0.8 :risk-tolerance 0.5 :stability 0.5}}

   {:id "career-auto-mechanic" :name "Auto Mechanic" :category "Trades & Skilled Labor"
    :description "Diagnose, maintain, and repair automobiles and light trucks using diagnostic equipment and hand tools."
    :typical-majors ["Automotive Technology" "Mechanical Technology" "Applied Sciences" "Trade Apprenticeship"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 32000 :max 75000 :median 46000} :growth-outlook "Moderate"
    :required-dimensions {:technical 0.9 :analytical 0.7 :physical 0.6 :entrepreneurial 0.5}}

   {:id "career-heavy-equipment-operator" :name "Heavy Equipment Operator" :category "Trades & Skilled Labor"
    :description "Operate large machinery such as bulldozers, cranes, and excavators for construction and mining projects."
    :typical-majors ["Heavy Equipment Operation" "Construction Management" "Applied Sciences" "Trade Certification"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 38000 :max 80000 :median 52000} :growth-outlook "Good"
    :required-dimensions {:physical 0.8 :technical 0.7 :pressure-tolerance 0.6 :risk-tolerance 0.5}}

   {:id "career-commercial-pilot" :name "Commercial Pilot" :category "Trades & Skilled Labor"
    :description "Fly aircraft for airlines, charter companies, or private clients, ensuring safe transport of passengers and cargo."
    :typical-majors ["Aviation" "Aeronautical Science" "Aviation Management" "Physics"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 60000 :max 200000 :median 110000} :growth-outlook "Good"
    :required-dimensions {:pressure-tolerance 0.9 :technical 0.9 :analytical 0.7 :leadership 0.5}}

   {:id "career-air-traffic-controller" :name "Air Traffic Controller" :category "Trades & Skilled Labor"
    :description "Direct aircraft movements on the ground and in the air, ensuring safe and efficient air traffic flow."
    :typical-majors ["Aviation Management" "Air Traffic Control" "Communications" "Physics"]
    :grad-school-recommended false :internship-importance 3
    :salary-range {:min 70000 :max 170000 :median 120000} :growth-outlook "Moderate"
    :required-dimensions {:pressure-tolerance 1.0 :analytical 0.9 :communication 0.7}}

   {:id "career-construction-manager" :name "Construction Manager" :category "Trades & Skilled Labor"
    :description "Plan, coordinate, and oversee construction projects from development to completion."
    :typical-majors ["Construction Management" "Civil Engineering" "Architecture" "Business Administration"]
    :grad-school-recommended false :internship-importance 5
    :salary-range {:min 55000 :max 140000 :median 85000} :growth-outlook "Good"
    :required-dimensions {:leadership 0.9 :pressure-tolerance 0.7 :analytical 0.7 :communication 0.6 :technical 0.5}}

   {:id "career-wind-turbine-technician" :name "Wind Turbine Technician" :category "Trades & Skilled Labor"
    :description "Install, inspect, maintain, and repair wind turbines and their components."
    :typical-majors ["Wind Energy Technology" "Electrical Technology" "Mechanical Technology" "Trade Certification"]
    :grad-school-recommended false :internship-importance 4
    :salary-range {:min 40000 :max 75000 :median 55000} :growth-outlook "Excellent"
    :required-dimensions {:technical 0.9 :physical 0.8 :risk-tolerance 0.7 :social-impact 0.5}}
])
