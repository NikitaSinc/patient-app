(ns inputs
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [app-events]))

(defn fio-input []
  (let [fio (rf/subscribe [:new-patient-fio])]
  [:input {:value @fio
           :on-change #(rf/dispatch [:new-patient-fio-update (-> % .-target .-value)])}]))

(defn oms-input []
  (let [oms (rf/subscribe [:new-patient-oms])]
  [:input {:value @oms
           :on-change #(rf/dispatch [:new-patient-oms-update (-> % .-target .-value)])}]))

(defn gender-select []
  [:select {:default-value "male"
            :on-change #(rf/dispatch [:new-patient-gender-update (-> % .-target .-value)])}
   (for [g ["male" "female"]]
     ^{:key g}
     [:option {:value g} g])])

(defn birth-input []
  [:input {:type :date
           :on-change #(rf/dispatch [:new-patient-dob-update (-> % .-target .-value)]) }])

(defn address-input []
  (let [address (rf/subscribe [:new-patient-address])]
  [:input {:value @address
           :on-change #(rf/dispatch [:new-patient-address-update (-> % .-target .-value)])}]))
