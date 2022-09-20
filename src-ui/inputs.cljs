(ns inputs
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [app-events]))

(defn fio-input []
  (let [fio (rf/subscribe [:new-patient-fio])]
    (println @fio)
  [:input {:value @fio :on-change #(rf/dispatch [:new-patient-fio-update (-> % .-target .-value)])}]))

(defn oms-input []
  (let [oms (rf/subscribe [:new-patient-oms])]
    (println @oms)
  [:input {:value @oms :on-change #(rf/dispatch [:new-patient-oms-update (-> % .-target .-value)])}]))


(defn gender-select []
  [:select
   [:option {:value "male" }]
   [:option {:value "female"}]])

(defn birth-input []
  [:input {:type :date}])

(defn address-input []
  [:input])

