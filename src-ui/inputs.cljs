(ns inputs
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [app-events])
  (:require-macros [stylo.core :refer [c]]))

(defn fio-input []
  (let [fio (rf/subscribe [:new-patient-fio])]
  [:input {:class (c :w-full)
           :value @fio
           :on-change #(rf/dispatch [:new-patient-fio-update (-> % .-target .-value)])}]))

(defn oms-input []
  (let [oms (rf/subscribe [:new-patient-oms])]
  [:input {:class (c :w-full)
           :value @oms
           :on-change #(rf/dispatch [:new-patient-oms-update (-> % .-target .-value)])}]))

(defn gender-select []
  (let [gender (rf/subscribe [:new-patient-gender])]
  [:select {:class (c :w-full)
            :value @gender
            :on-change #(rf/dispatch [:new-patient-gender-update (-> % .-target .-value)])}
   (for [g ["male" "female"]]
     ^{:key g}
     [:option {:value g} g])]))

(defn birth-input []
  (let [dob (rf/subscribe [:new-patient-dob])]
  [:input {:class (c :w-full)
           :type :date
           :value @dob
           :on-change #(rf/dispatch [:new-patient-dob-update (-> % .-target .-value)]) }]))

(defn address-input []
  (let [address (rf/subscribe [:new-patient-address])]
  [:input {:class (c :w-full)
           :value @address
           :on-change #(rf/dispatch [:new-patient-address-update (-> % .-target .-value)])}]))
