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

(defn changeble-row []
  [:tr
   [:td [i/fio-input]]
   [:td [i/oms-input]]
   [:td [i/gender-select]]
   [:td [i/birth-input]]
   [:td [i/address-input]]
   [:td [:button {:on-click #(validation-dispatcher)} "Save"]]
   [:td [:button {:on-click #(rf/dispatch [:patient-change-set])} "Discard"]]])

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
