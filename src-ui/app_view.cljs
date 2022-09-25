(ns app-view
  (:require
                  [re-frame.core :as rf]
                  [stylo.core :refer [c]]
                  [clojure.string :as s]
                  [app-events :as ev]
                  [inputs :as i]))

(defn compute-age [dob]
  (str (js/Math.abs (- (.getUTCFullYear (js/Date.)) (.getUTCFullYear dob)))))

(defn validation-dispatcher []
  (let [v (rf/subscribe [:new-patient-is-valid])
        patient (rf/subscribe [:new-patient])
        change (rf/subscribe [:patient-change])]
    (println @patient)
    (if (and
          (:oms-valid @v)
          (:fio-valid @v)
          (:gender-valid @v)
          (:address-valid @v)
          (:dob-valid @v))
      (if (nil? @change)
        (rf/dispatch [:add-patients @patient])
        (rf/dispatch [:update-patients @patient]))
      (rf/dispatch [:set-error "Not all fields are valid!"]))))

(defn on-search-change [value type]
  (if (= type "fio")
    (rf/dispatch [:search-fio-set value])
    (rf/dispatch [:search-oms-set value])))

(defn on-filter-change [value]
  (if (= value "none")
    (rf/dispatch [:filter-gender-set ""])
    (rf/dispatch [:filter-gender-set value])))

(defn search-get-val [from]
  (let [by (:by from)]
    (if (= by "fio")
      (:fio from)
      (:oms from))))

(defn error-message []
  (let [error (rf/subscribe [:error])]
  [:div
   (if (not (nil? @error))
     [:p @error])]))

(defn table-control []
  [:div {:class (c :flex)}
   (let [s (rf/subscribe [:search])]
   [:div
    [:input {:placeholder "Search..."
             :value (search-get-val @s)
             :on-change #(on-search-change (-> % .-target .-value) (:by @s))}]
    [:select {:value (:by @s)
             :on-change #(rf/dispatch [:search-set-by (-> % .-target .-value)])}
    (for [o ["fio" "oms"]]
      ^{:key o}
    [:option {:value o} o])]])
   (let [f (rf/subscribe [:filter])]
     [:div {:class (c :flex)}
      [:p "Gender filter:"]
      [:select {:value (:gender @f)
                :on-change #(on-filter-change (-> % .-target .-value))}
       (for [o ["male" "female" ""]]
         ^{:key o}
         [:option {:value o} (if (= o "")
                                         "none"
                                         o)])]])
   [:button {:on-click #(rf/dispatch [:clear-filter-search])} "Clear"]])

(defn changeble-row []
  [:tr
   [:td [i/fio-input]]
   [:td [i/oms-input]]
   [:td [i/gender-select]]
   [:td [i/birth-input]]
   [:td [i/address-input]]
   [:td [:button {:on-click #(validation-dispatcher)} "Save"]]
   [:td [:button {:on-click #(do (rf/dispatch [:patient-change-nil])
                                 (rf/dispatch [:clear-new-patient]))} "Discard"]]])

(defn table []
  [:div
   [:table {:class (c :table [:border 2] [:w 300]  :rounded)}
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
     (let [patients (rf/subscribe [:patients])
           change (rf/subscribe [:patient-change])]
       (doall
         (for [p @patients]
           ^{:key p}
           (doall (if (= @change (:patients/oms p))
             [changeble-row p]
             [:tr
              [:td (:patients/fio p)]
              [:td (:patients/oms p)]
              [:td (:patients/gender p)]
              [:td (compute-age (:patients/dob p))]
              [:td (:patients/address p)]
              [:td [:button {:on-click #(rf/dispatch [:patient-change-set p])}
                    "Change"]]
              [:td [:button
                    {:on-click #(rf/dispatch [:delete-patients (:patients/oms p)])}
                    "Delete"]]])))))
     (doall
       (if (nil? @(rf/subscribe [:patient-change]))
     [:tr
      [:td [i/fio-input]]
      [:td [i/oms-input]]
      [:td [i/gender-select]]
      [:td [i/birth-input]]
      [:td [i/address-input]]
      [:td [:button {:on-click #(validation-dispatcher)} "Add"]]]))]]])

(defn app []
  [:div {:class (c [:px 12])}
   [table-control]
   [table]
   [error-message]])
