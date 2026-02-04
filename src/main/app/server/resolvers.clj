(ns app.server.resolvers
  "Pathom resolvers for data fetching"
  (:require [com.wsscode.pathom3.connect.operation :as pco]
            [app.server.db :as db]))

;; Question Category Resolvers
(pco/defresolver all-categories-resolver
  "Resolve all question categories"
  [_env _input]
  {::pco/output [{:categories/all
                  [:category/id
                   :category/name
                   :category/display-name
                   :category/description
                   :category/weight
                   :category/sort-order]}]}
  {:categories/all
   (mapv (fn [cat]
           {:category/id (:id cat)
            :category/name (:name cat)
            :category/display-name (:display-name cat)
            :category/description (:description cat)
            :category/weight (double (:weight cat))
            :category/sort-order (:sort-order cat)})
         (db/get-all-categories))})

(pco/defresolver category-by-id-resolver
  "Resolve a single category by ID"
  [_env {:category/keys [id]}]
  {::pco/input [:category/id]
   ::pco/output [:category/name
                 :category/display-name
                 :category/description
                 :category/weight
                 :category/sort-order]}
  (when-let [cat (db/get-category-by-id id)]
    {:category/name (:name cat)
     :category/display-name (:display-name cat)
     :category/description (:description cat)
     :category/weight (double (:weight cat))
     :category/sort-order (:sort-order cat)}))

;; Question Resolvers
(pco/defresolver all-questions-resolver
  "Resolve all active questions"
  [_env _input]
  {::pco/output [{:questions/all
                  [:question/id
                   :question/category-id
                   :question/text
                   :question/type
                   :question/options
                   :question/scoring-weights
                   :question/sort-order]}]}
  {:questions/all
   (mapv (fn [q]
           {:question/id (:id q)
            :question/category-id (:category-id q)
            :question/text (:question-text q)
            :question/type (:question-type q)
            :question/options (:options q)
            :question/scoring-weights (:scoring-weights q)
            :question/sort-order (:sort-order q)})
         (db/get-all-questions))})

(pco/defresolver questions-by-category-resolver
  "Resolve questions for a specific category"
  [_env {:category/keys [id]}]
  {::pco/input [:category/id]
   ::pco/output [{:category/questions
                  [:question/id
                   :question/text
                   :question/type
                   :question/options
                   :question/sort-order]}]}
  {:category/questions
   (mapv (fn [q]
           {:question/id (:id q)
            :question/text (:question-text q)
            :question/type (:question-type q)
            :question/options (:options q)
            :question/sort-order (:sort-order q)})
         (db/get-questions-by-category id))})

(pco/defresolver question-by-id-resolver
  "Resolve a single question by ID"
  [_env {:question/keys [id]}]
  {::pco/input [:question/id]
   ::pco/output [:question/category-id
                 :question/text
                 :question/type
                 :question/options
                 :question/scoring-weights
                 :question/sort-order]}
  (when-let [q (db/get-question-by-id id)]
    {:question/category-id (:category-id q)
     :question/text (:question-text q)
     :question/type (:question-type q)
     :question/options (:options q)
     :question/scoring-weights (:scoring-weights q)
     :question/sort-order (:sort-order q)}))

;; Career Path Resolvers
(pco/defresolver all-careers-resolver
  "Resolve all active career paths"
  [_env _input]
  {::pco/output [{:careers/all
                  [:career/id
                   :career/name
                   :career/category
                   :career/description
                   :career/typical-majors
                   :career/grad-school-recommended
                   :career/internship-importance
                   :career/salary-range
                   :career/growth-outlook]}]}
  {:careers/all
   (mapv (fn [c]
           {:career/id (:id c)
            :career/name (:name c)
            :career/category (:category c)
            :career/description (:description c)
            :career/typical-majors (:typical-majors c)
            :career/grad-school-recommended (:grad-school-recommended c)
            :career/internship-importance (:internship-importance c)
            :career/salary-range (:salary-range c)
            :career/growth-outlook (:growth-outlook c)})
         (db/get-all-careers))})

(pco/defresolver career-by-id-resolver
  "Resolve a single career path by ID"
  [_env {:career/keys [id]}]
  {::pco/input [:career/id]
   ::pco/output [:career/name
                 :career/category
                 :career/description
                 :career/typical-majors
                 :career/grad-school-recommended
                 :career/internship-importance
                 :career/salary-range
                 :career/growth-outlook
                 :career/required-dimensions]}
  (when-let [c (db/get-career-by-id id)]
    {:career/name (:name c)
     :career/category (:category c)
     :career/description (:description c)
     :career/typical-majors (:typical-majors c)
     :career/grad-school-recommended (:grad-school-recommended c)
     :career/internship-importance (:internship-importance c)
     :career/salary-range (:salary-range c)
     :career/growth-outlook (:growth-outlook c)
     :career/required-dimensions (:required-dimensions c)}))

;; Session Resolvers
(pco/defresolver session-by-id-resolver
  "Resolve a questionnaire session by ID"
  [_env {:session/keys [id]}]
  {::pco/input [:session/id]
   ::pco/output [:session/user-id
                 :session/current-question-index
                 :session/total-questions
                 :session/is-complete
                 :session/started-at]}
  (when-let [s (db/get-session id)]
    {:session/user-id (:user-id s)
     :session/current-question-index (:current-question-index s)
     :session/total-questions (:total-questions s)
     :session/is-complete (:is-complete s)
     :session/started-at (:started-at s)}))

(pco/defresolver session-responses-resolver
  "Resolve responses for a session"
  [_env {:session/keys [id]}]
  {::pco/input [:session/id]
   ::pco/output [{:session/responses
                  [:response/id
                   :response/question-id
                   :response/value]}]}
  {:session/responses
   (mapv (fn [r]
           {:response/id (:id r)
            :response/question-id (:question-id r)
            :response/value (:response-value r)})
         (db/get-responses-by-session id))})

;; Results Resolvers
(pco/defresolver results-by-session-resolver
  "Resolve results for a session"
  [_env {:session/keys [id]}]
  {::pco/input [:session/id]
   ::pco/output [:results/category-scores
                 :results/dimension-scores
                 :results/career-scores
                 :results/recommendations]}
  (when-let [r (db/get-results-by-session id)]
    {:results/category-scores (:category-scores r)
     :results/dimension-scores (:dimension-scores r)
     :results/career-scores (:career-scores r)
     :results/recommendations (:recommendations r)}))

;; Admin Config Resolvers
(pco/defresolver config-resolver
  "Resolve admin configuration"
  [_env _input]
  {::pco/output [{:config/all
                  [:config/key
                   :config/value]}]}
  {:config/all
   (mapv (fn [c]
           {:config/key (:config-key c)
            :config/value (:config-value c)})
         (db/get-all-config))})

(pco/defresolver scoring-weights-resolver
  "Resolve scoring weights configuration"
  [_env _input]
  {::pco/output [:config/scoring-weights]}
  (when-let [config (db/get-config "scoring_weights")]
    {:config/scoring-weights (:config-value config)}))

;; User Resolvers
(pco/defresolver user-by-id-resolver
  "Resolve a user by ID"
  [_env {:user/keys [id]}]
  {::pco/input [:user/id]
   ::pco/output [:user/email
                 :user/first-name
                 :user/last-name
                 :user/is-admin]}
  (when-let [u (db/get-user-by-id id)]
    {:user/email (:email u)
     :user/first-name (:first-name u)
     :user/last-name (:last-name u)
     :user/is-admin (:is-admin u)}))

(pco/defresolver user-results-resolver
  "Resolve all results for a user"
  [_env {:user/keys [id]}]
  {::pco/input [:user/id]
   ::pco/output [{:user/results
                  [:results/session-id
                   :results/recommendations
                   :results/created-at]}]}
  {:user/results
   (mapv (fn [r]
           {:results/session-id (:session-id r)
            :results/recommendations (:recommendations r)
            :results/created-at (:created-at r)})
         (db/get-results-by-user id))})

;; Analytics Resolvers
(pco/defresolver completion-stats-resolver
  "Resolve completion statistics"
  [_env _input]
  {::pco/output [:analytics/total-sessions
                 :analytics/completed-sessions
                 :analytics/completion-rate]}
  (let [stats (db/get-completion-stats)
        total (:total-sessions stats)
        completed (:completed-sessions stats)]
    {:analytics/total-sessions total
     :analytics/completed-sessions completed
     :analytics/completion-rate (if (pos? total)
                                  (double (/ completed total))
                                  0.0)}))

;; Export all resolvers
(def all-resolvers
  [all-categories-resolver
   category-by-id-resolver
   all-questions-resolver
   questions-by-category-resolver
   question-by-id-resolver
   all-careers-resolver
   career-by-id-resolver
   session-by-id-resolver
   session-responses-resolver
   results-by-session-resolver
   config-resolver
   scoring-weights-resolver
   user-by-id-resolver
   user-results-resolver
   completion-stats-resolver])
