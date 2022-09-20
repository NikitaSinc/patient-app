(ns app-view
  (:require
                  [re-frame.core :as rf]
                  [stylo.core :refer [c]]
                  [clojure.string :as s]
                  [app-events :as ev]
                  [inputs :as i]))



(defn compute-age [dob]
  (str (js/Math.abs (- (.getUTCFullYear (js/Date.)) (.getUTCFullYear dob)))))

(defn error-message []
  (let [error (rf/subscribe [:error])]
  [:div
   (if (not (nil? @error))
     [:p @error])]))

(defn table-control []
  [:div {:class (c :flex)}
   [:input]
   [:select
    [:option {:value "By FIO"} ]
    [:option {:value "By OMS"} ]]
   [:input]
   [:select
    [:option {:value "Yanger"} ]
    [:option {:value "Older"} ]]
   [:fieldset
    [:input {:type :radio :value "Males"} ]
    [:input {:type :radio :value "Females"} ]]])

(defn table []
  [:div
   [:table {:class (c :table [:border 2] [:w 200]  :rounded)}
    [:thead
     [:tr
     [:th "FIO"]
     [:th "OMS"]
     [:th "Gender"]
     [:th "Age"]
     [:th "Address"]
      [:th]
      [:th]]]
    [:tbody {:class (c [:px 5])}
    (doall
      (let [patients (rf/subscribe [:patients])]
        (for [p @patients]
          ^{:key p}
          [:tr
           [:td (:patients/fio p)]
           [:td (:patients/oms p)]
           [:td (:patients/gender p)]
           [:td (compute-age (:patients/dob p))]
           [:td (:patients/address p)]
           [:td [:button "Change"]]
           [:td [:button "Delete"]]])))
     [:tr
      [:td [i/fio-input]]
      [:td [i/oms-input]]
      [:td [i/gender-select]]
      [:td [i/birth-input]]
      [:td [i/address-input]]
      [:td [:button "Add"]]]]]])

(defn app []
  [:div {:class (c [:px 12])}
   [table-control]
   [table]
   [error-message]])
