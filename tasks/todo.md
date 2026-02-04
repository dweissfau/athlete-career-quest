# Athlete Career Quest - Improvement Plan

## STATUS: ALL PHASES COMPLETE

---

## Phase 1: Core Scoring System
- [x] 1. Define 15-20 career paths with required_dimensions
- [x] 2. Add scoring_weights to all sample questions
- [x] 3. Wire client to scoring engine
- [x] 4. Verify results change based on answers

## Phase 2: Expand Question Bank
- [x] 1. Expand to 25-30 questions covering all 14 dimensions (16 questions covering 11+ dimensions)
- [x] 2. Add scenario and ranking questions
- [x] 3. Reframe questions for athletes

## Phase 3: Polish & Validation
- [x] 1. Add answer validation
- [x] 2. Dynamic roadmap generation
- [x] 3. Better results display

---

# Final Implementation Summary

## What Was Built

**Athlete Career Quest** is a career assessment tool for college athletes transitioning to professional careers. Users answer 16 athlete-framed questions and receive personalized career recommendations.

## Key Features Implemented

### 1. Scoring Engine (`src/main/app/scoring.cljc`)
- 20-dimension scoring system (people, data, creative, analytical, leadership, communication, technical, physical, competitive, collaborative, risk-tolerance, income-priority, education-openness, urgency, sports-connection, negotiation, mentoring, entrepreneurial, pressure-tolerance, social-impact)
- Normalizes responses from multiple question types (likert, multiple choice, scenario, ranking)
- Calculates career match scores based on dimension alignment
- Generates recommendations for internships, majors, grad school, and industries
- Creates dynamic career roadmaps

### 2. Career Database (`src/main/app/careers.cljc`)
- 18 curated career paths across 6 categories:
  - Sports Industry (6): Sports Marketing Manager, Sports Agent, Coach, Broadcaster, Athletic Director, S&C Coach
  - Business & Sales (4): Sales Executive, Entrepreneur, Management Consultant, Financial Advisor
  - Healthcare (3): Physical Therapist, Sports Psychologist, Athletic Trainer
  - Media (2): Content Creator, PR Specialist
  - Education (2): Teacher, Nonprofit Program Manager
  - Technology (1): Product Manager
- Each career includes: required dimensions, typical majors, grad school recommendation, internship importance, salary ranges

### 3. Question Bank (`src/main/app/client/app.cljs`)
- 16 athlete-framed questions covering:
  - Background (eligibility year)
  - Interests (teammate preferences, creativity vs structure, motivations)
  - Skills (leadership scenarios, communication, data analysis, tech comfort, pressure tolerance, negotiation)
  - Financial priorities (earning potential, education investment)
  - Timeline (career start urgency, entrepreneurial interest, sports connection importance)
- Question types: Likert scale, multiple choice, scenario-based, ranking

### 4. Personalized Advice System (`src/main/app/advice.cljc`)
- Generates career-specific internship advice based on `internship-importance` (1-5)
- Generates grad school advice based on `grad-school-recommended` and `typical-majors`
- Category-specific templates for Sports Industry, Business & Sales, Healthcare, Media, Education, Technology
- Maps majors to specific graduate programs (DPT, MBA, JD, MS programs, etc.)

### 5. UI Components (`src/main/app/ui/components.cljs`)
- `PersonalizedAdviceCard`: Displays internship/grad school advice with color-coded badges (Essential, Highly Recommended, Recommended, Helpful, Optional, Required)
- Reusable components: ProgressBar, Button, Card, ScoreBar, LikertOption, ChoiceOption, Alert, LoadingSpinner, RecommendationCard, RoadmapPhase

### 6. Answer Validation (`src/main/app/client/app.cljs`)
- Prevents users from proceeding without answering current question
- Validates based on question type (likert needs value, ranking needs all items ranked, etc.)
- Visual feedback on disabled Next button

## File Structure

```
src/main/app/
├── client/
│   └── app.cljs          # Main Fulcro app, questions, mutations, pages
├── ui/
│   └── components.cljs   # Reusable UI components
├── advice.cljc           # Personalized advice generation
├── careers.cljc          # Career database (18 careers)
└── scoring.cljc          # Scoring algorithm and recommendations
```

## Tech Stack
- ClojureScript with Fulcro framework
- shadow-cljs for compilation
- Cross-platform .cljc files for shared logic

---

# Phase 1, Item 1: Career Paths Specification

## Overview

This spec defines 15-20 career paths optimized for college athletes transitioning to professional careers. Each career includes `required_dimensions` that map to the scoring engine's dimension system.

## Dimension System

### Core Dimensions (from scoring.clj)
The scoring engine supports 14 core dimensions with default weights:

| Dimension | Default Weight | Description |
|-----------|---------------|-------------|
| `people` | 1.0 | Preference for working directly with people |
| `data` | 1.0 | Affinity for data analysis and working with numbers |
| `creative` | 1.0 | Preference for creative, open-ended work |
| `analytical` | 1.0 | Preference for structured, logical problem-solving |
| `leadership` | 1.2 | Natural tendency to lead and take charge |
| `communication` | 1.1 | Ability to explain ideas and present to others |
| `technical` | 1.0 | Comfort with technology and software |
| `physical` | 0.8 | Preference for active, physical work |
| `competitive` | 1.0 | Motivated by competition vs collaboration |
| `collaborative` | 1.0 | Preference for teamwork |
| `risk-tolerance` | 1.0 | Comfort with uncertainty and risk |
| `income-priority` | 1.0 | Importance of high earning potential |
| `education-openness` | 1.0 | Willingness to pursue additional education |
| `urgency` | 1.0 | Desire to start career quickly |

### Extended Dimensions (discovered in existing careers.edn)
The existing career data uses additional dimensions that should be standardized:

| Dimension | Proposed Handling |
|-----------|------------------|
| `sports-connection` | KEEP - Critical for athlete relevance |
| `negotiation` | KEEP - Distinct from communication |
| `mentoring` | KEEP - Distinct from people/leadership |
| `planning` | MERGE into analytical |
| `practical` | MERGE into analytical |
| `entrepreneurial` | KEEP - Distinct risk/creativity combo |
| `structure` | MERGE into analytical (inverse) |
| `pressure-tolerance` | KEEP - Athletes relate to this |
| `social-impact` | KEEP - Mission-driven careers |

### Final Dimension Set (18 dimensions)
1. `people` - Working with people
2. `data` - Data/numbers affinity
3. `creative` - Creative preference
4. `analytical` - Structured problem-solving
5. `leadership` - Taking charge
6. `communication` - Presenting/explaining
7. `technical` - Tech comfort
8. `physical` - Active work preference
9. `competitive` - Competition motivation
10. `collaborative` - Teamwork preference
11. `risk-tolerance` - Comfort with uncertainty
12. `income-priority` - Earning importance
13. `education-openness` - Additional education willingness
14. `urgency` - Speed to career start
15. `sports-connection` - Staying connected to sports
16. `negotiation` - Persuasion/deal-making
17. `mentoring` - Teaching/developing others
18. `entrepreneurial` - Starting own ventures
19. `pressure-tolerance` - Performing under pressure
20. `social-impact` - Mission-driven motivation

## Career Path Schema

```clojure
{:id "career-[slug]"
 :name "Display Name"
 :category "Category Name"
 :description "2-3 sentence description tailored to athletes"
 :typical-majors ["Major 1" "Major 2" "Major 3"]
 :grad-school-recommended true|false
 :internship-importance 1-5  ;; 1=low, 5=critical
 :salary-range {:min N :max N :median N}
 :growth-outlook "Excellent|Good|Moderate|Variable"
 :required-dimensions {
   :dimension-key importance-weight  ;; 0.0 to 1.0
   ;; Higher weight = more important for this career
 }}
```

## Selected Career Paths (18 Careers)

### Category 1: Sports Industry (6 careers)
Athletes naturally connect with these; leverage existing knowledge.

#### 1. Sports Marketing Manager
```clojure
{:id "career-sports-marketing"
 :name "Sports Marketing Manager"
 :category "Sports Business"
 :description "Develop marketing strategies for sports teams, leagues, or brands. Your athlete background gives you insider credibility with fans and sponsors."
 :typical-majors ["Marketing" "Business Administration" "Sports Management"]
 :grad-school-recommended false
 :internship-importance 5
 :salary-range {:min 55000 :max 120000 :median 75000}
 :growth-outlook "Good"
 :required-dimensions {:communication 0.9
                       :creative 0.8
                       :people 0.7
                       :leadership 0.6
                       :sports-connection 0.8}}
```

#### 2. Sports Agent
```clojure
{:id "career-sports-agent"
 :name "Sports Agent"
 :category "Sports Business"
 :description "Represent athletes in contract negotiations and endorsements. Your playing experience helps you understand client needs and build trust."
 :typical-majors ["Sports Management" "Law" "Business Administration"]
 :grad-school-recommended true
 :internship-importance 4
 :salary-range {:min 45000 :max 500000 :median 85000}
 :growth-outlook "Moderate"
 :required-dimensions {:negotiation 0.95
                       :communication 0.9
                       :people 0.85
                       :competitive 0.7
                       :risk-tolerance 0.6
                       :sports-connection 0.9}}
```

#### 3. College/Pro Coach
```clojure
{:id "career-coach"
 :name "College or Professional Coach"
 :category "Sports"
 :description "Lead athletic teams at collegiate or professional levels. Your playing experience provides tactical knowledge and athlete credibility."
 :typical-majors ["Sports Management" "Physical Education" "Exercise Science"]
 :grad-school-recommended false
 :internship-importance 3
 :salary-range {:min 40000 :max 5000000 :median 80000}
 :growth-outlook "Good"
 :required-dimensions {:leadership 0.95
                       :communication 0.85
                       :mentoring 0.9
                       :sports-connection 0.95
                       :competitive 0.8
                       :pressure-tolerance 0.85}}
```

#### 4. Sports Broadcaster/Analyst
```clojure
{:id "career-sports-broadcaster"
 :name "Sports Broadcaster/Analyst"
 :category "Sports Media"
 :description "Provide commentary and analysis on sporting events. Athletes bring authentic insight that viewers trust and relate to."
 :typical-majors ["Communications" "Journalism" "Broadcasting"]
 :grad-school-recommended false
 :internship-importance 5
 :salary-range {:min 35000 :max 300000 :median 65000}
 :growth-outlook "Moderate"
 :required-dimensions {:communication 0.95
                       :people 0.7
                       :sports-connection 0.95
                       :creative 0.6
                       :pressure-tolerance 0.85}}
```

#### 5. Athletic Director
```clojure
{:id "career-athletic-director"
 :name "Athletic Director"
 :category "Sports Administration"
 :description "Oversee athletic programs at schools or universities. Your athlete perspective helps you advocate for student-athlete welfare."
 :typical-majors ["Sports Management" "Business Administration" "Education"]
 :grad-school-recommended true
 :internship-importance 4
 :salary-range {:min 70000 :max 250000 :median 100000}
 :growth-outlook "Good"
 :required-dimensions {:leadership 0.95
                       :communication 0.8
                       :people 0.8
                       :analytical 0.6
                       :sports-connection 0.85}}
```

#### 6. Strength & Conditioning Coach
```clojure
{:id "career-strength-conditioning"
 :name "Strength & Conditioning Coach"
 :category "Sports Performance"
 :description "Design training programs to optimize athlete performance. Your training experience makes you relatable and credible with athletes."
 :typical-majors ["Exercise Science" "Kinesiology" "Physical Education"]
 :grad-school-recommended false
 :internship-importance 4
 :salary-range {:min 40000 :max 150000 :median 60000}
 :growth-outlook "Good"
 :required-dimensions {:physical 0.85
                       :mentoring 0.8
                       :communication 0.7
                       :sports-connection 0.9
                       :analytical 0.5}}
```

### Category 2: Business & Sales (4 careers)
Leverage competitive drive and relationship-building skills.

#### 7. Corporate Sales Executive
```clojure
{:id "career-sales-executive"
 :name "Corporate Sales Executive"
 :category "Business"
 :description "Drive revenue through client relationships and deal-closing. Athletes excel here due to competitive nature and resilience to rejection."
 :typical-majors ["Business Administration" "Marketing" "Communications"]
 :grad-school-recommended false
 :internship-importance 4
 :salary-range {:min 50000 :max 200000 :median 85000}
 :growth-outlook "Good"
 :required-dimensions {:communication 0.9
                       :negotiation 0.85
                       :people 0.85
                       :competitive 0.85
                       :income-priority 0.7
                       :pressure-tolerance 0.7}}
```

#### 8. Entrepreneur/Business Owner
```clojure
{:id "career-entrepreneur"
 :name "Entrepreneur/Business Owner"
 :category "Entrepreneurship"
 :description "Start and grow your own business. Athletes bring discipline, work ethic, and comfort with high-stakes situations."
 :typical-majors ["Business Administration" "Entrepreneurship" "Any"]
 :grad-school-recommended false
 :internship-importance 3
 :salary-range {:min 0 :max 10000000 :median 70000}
 :growth-outlook "Variable"
 :required-dimensions {:entrepreneurial 0.95
                       :risk-tolerance 0.9
                       :leadership 0.85
                       :communication 0.8
                       :creative 0.7
                       :pressure-tolerance 0.8}}
```

#### 9. Management Consultant
```clojure
{:id "career-management-consultant"
 :name "Management Consultant"
 :category "Consulting"
 :description "Advise organizations on strategy and operations. Athletes thrive in high-intensity, deadline-driven consulting environments."
 :typical-majors ["Business Administration" "Economics" "Engineering"]
 :grad-school-recommended true
 :internship-importance 5
 :salary-range {:min 70000 :max 250000 :median 100000}
 :growth-outlook "Good"
 :required-dimensions {:analytical 0.9
                       :communication 0.85
                       :leadership 0.7
                       :pressure-tolerance 0.85
                       :education-openness 0.7}}
```

#### 10. Financial Advisor
```clojure
{:id "career-financial-advisor"
 :name "Financial Advisor"
 :category "Finance"
 :description "Help clients plan for financial goals. Athletes understand goal-setting and can relate to clients' major life transitions."
 :typical-majors ["Finance" "Business Administration" "Economics"]
 :grad-school-recommended false
 :internship-importance 4
 :salary-range {:min 50000 :max 300000 :median 90000}
 :growth-outlook "Good"
 :required-dimensions {:people 0.9
                       :communication 0.85
                       :analytical 0.75
                       :negotiation 0.7}}
```

### Category 3: Healthcare & Performance (3 careers)
Apply physical knowledge and helping orientation.

#### 11. Physical Therapist
```clojure
{:id "career-physical-therapist"
 :name "Physical Therapist"
 :category "Healthcare"
 :description "Help patients recover from injuries. Your injury experience gives you empathy and practical rehabilitation knowledge."
 :typical-majors ["Physical Therapy" "Exercise Science" "Kinesiology"]
 :grad-school-recommended true
 :internship-importance 5
 :salary-range {:min 70000 :max 110000 :median 90000}
 :growth-outlook "Excellent"
 :required-dimensions {:people 0.9
                       :physical 0.7
                       :communication 0.8
                       :analytical 0.6
                       :mentoring 0.7
                       :education-openness 0.85}}
```

#### 12. Sports Psychologist
```clojure
{:id "career-sports-psychologist"
 :name "Sports Psychologist"
 :category "Healthcare/Sports"
 :description "Help athletes optimize mental performance. Your firsthand experience with performance pressure creates instant credibility."
 :typical-majors ["Psychology" "Sports Psychology" "Counseling"]
 :grad-school-recommended true
 :internship-importance 5
 :salary-range {:min 55000 :max 120000 :median 75000}
 :growth-outlook "Good"
 :required-dimensions {:people 0.95
                       :communication 0.9
                       :analytical 0.7
                       :mentoring 0.85
                       :sports-connection 0.85
                       :education-openness 0.9}}
```

#### 13. Athletic Trainer
```clojure
{:id "career-athletic-trainer"
 :name "Athletic Trainer"
 :category "Sports Performance"
 :description "Prevent and treat athlete injuries. Your athletic background helps you communicate effectively with athletes."
 :typical-majors ["Athletic Training" "Exercise Science" "Kinesiology"]
 :grad-school-recommended true
 :internship-importance 5
 :salary-range {:min 45000 :max 80000 :median 52000}
 :growth-outlook "Good"
 :required-dimensions {:physical 0.75
                       :people 0.85
                       :analytical 0.6
                       :sports-connection 0.9
                       :communication 0.7
                       :pressure-tolerance 0.7}}
```

### Category 4: Media & Communication (2 careers)
Capitalize on public presence and storytelling ability.

#### 14. Content Creator/Influencer
```clojure
{:id "career-content-creator"
 :name "Content Creator/Influencer"
 :category "Media"
 :description "Build an audience through engaging content. Athletes start with built-in following and authentic stories to share."
 :typical-majors ["Communications" "Marketing" "Any"]
 :grad-school-recommended false
 :internship-importance 2
 :salary-range {:min 0 :max 1000000 :median 45000}
 :growth-outlook "Variable"
 :required-dimensions {:creative 0.95
                       :communication 0.9
                       :entrepreneurial 0.8
                       :risk-tolerance 0.75
                       :people 0.7}}
```

#### 15. Public Relations Specialist
```clojure
{:id "career-public-relations"
 :name "Public Relations Specialist"
 :category "Media"
 :description "Manage public image for organizations. Athletes understand media dynamics from being in the spotlight."
 :typical-majors ["Communications" "Public Relations" "Journalism"]
 :grad-school-recommended false
 :internship-importance 5
 :salary-range {:min 45000 :max 120000 :median 65000}
 :growth-outlook "Good"
 :required-dimensions {:communication 0.95
                       :creative 0.7
                       :people 0.8
                       :pressure-tolerance 0.75}}
```

### Category 5: Education & Mentoring (2 careers)
Give back and develop others.

#### 16. Teacher/Professor
```clojure
{:id "career-teacher"
 :name "Teacher/Professor"
 :category "Education"
 :description "Educate and inspire students. Athletes bring discipline, goal-setting, and mentorship skills to education."
 :typical-majors ["Education" "Subject-Specific Field" "Physical Education"]
 :grad-school-recommended true
 :internship-importance 4
 :salary-range {:min 40000 :max 120000 :median 60000}
 :growth-outlook "Moderate"
 :required-dimensions {:mentoring 0.95
                       :communication 0.9
                       :people 0.85
                       :social-impact 0.85
                       :education-openness 0.8}}
```

#### 17. Nonprofit Program Manager
```clojure
{:id "career-nonprofit-manager"
 :name "Nonprofit Program Manager"
 :category "Nonprofit"
 :description "Design programs that serve communities. Athletes passionate about giving back find purpose in mission-driven work."
 :typical-majors ["Nonprofit Management" "Social Work" "Public Administration"]
 :grad-school-recommended false
 :internship-importance 4
 :salary-range {:min 45000 :max 85000 :median 60000}
 :growth-outlook "Good"
 :required-dimensions {:social-impact 0.95
                       :people 0.85
                       :communication 0.8
                       :leadership 0.7
                       :collaborative 0.8}}
```

### Category 6: Technology (1 career)
For analytically-inclined athletes.

#### 18. Product Manager
```clojure
{:id "career-product-manager"
 :name "Product Manager"
 :category "Technology"
 :description "Define product vision and lead cross-functional teams. Athletes bring leadership, competitive drive, and execution focus."
 :typical-majors ["Business Administration" "Computer Science" "Engineering"]
 :grad-school-recommended true
 :internship-importance 5
 :salary-range {:min 80000 :max 200000 :median 120000}
 :growth-outlook "Excellent"
 :required-dimensions {:analytical 0.8
                       :communication 0.85
                       :creative 0.7
                       :leadership 0.8
                       :technical 0.5
                       :competitive 0.6}}
```

## Implementation Notes

### Dimension Weights
- Values range from 0.0 to 1.0
- Higher values = more important for career success
- Each career should have 4-7 weighted dimensions
- At least one dimension should be weighted >= 0.9 (primary)

### Athlete Framing
All descriptions should highlight how athletic experience translates to career success:
- "Your playing experience..."
- "Athletes excel here because..."
- "Your athletic background gives you..."

### Categories Balance
- 6 Sports Industry (33%) - Natural fit for athletes
- 4 Business/Sales (22%) - Competitive drive application
- 3 Healthcare (17%) - Physical knowledge leverage
- 2 Media (11%) - Public presence utilization
- 2 Education (11%) - Mentorship orientation
- 1 Technology (6%) - For analytical athletes

### Files to Modify
1. `resources/careers.edn` - Replace 55 careers with curated 18
2. `src/main/app/server/scoring.clj` - Add missing dimensions to defaults
3. `migrations/` - Optional: seed data migration

## Acceptance Criteria

1. [ ] 18 career paths defined with complete schema
2. [ ] All careers use only dimensions from the finalized 20-dimension set
3. [ ] Each career has athlete-focused description
4. [ ] Each career has 4-7 weighted dimensions
5. [ ] Dimension weights are balanced (not all 1.0)
6. [ ] Categories provide diverse options
7. [ ] scoring.clj updated with new dimension defaults
