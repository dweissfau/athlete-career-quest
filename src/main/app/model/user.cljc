(ns app.model.user
  "User model and specs"
  #?(:clj (:require [clojure.spec.alpha :as s])
     :cljs (:require [cljs.spec.alpha :as s])))

;; User attributes
(s/def :user/id uuid?)
(s/def :user/email (s/and string? #(re-matches #".+@.+\..+" %)))
(s/def :user/password-hash string?)
(s/def :user/first-name string?)
(s/def :user/last-name string?)
(s/def :user/is-admin boolean?)
(s/def :user/created-at inst?)
(s/def :user/updated-at inst?)

;; User entity
(s/def ::user
  (s/keys :req [:user/id :user/email]
          :opt [:user/password-hash
                :user/first-name
                :user/last-name
                :user/is-admin
                :user/created-at
                :user/updated-at]))

;; User creation input
(s/def ::create-user-input
  (s/keys :req-un [:user/email]
          :opt-un [:user/first-name :user/last-name]))

;; Helper functions
(defn full-name
  "Get user's full name"
  [{:user/keys [first-name last-name]}]
  (cond
    (and first-name last-name) (str first-name " " last-name)
    first-name first-name
    last-name last-name
    :else nil))

(defn admin?
  "Check if user is an admin"
  [{:user/keys [is-admin]}]
  (boolean is-admin))
