(ns app (:require
                  ["react-dom/client" :refer [createRoot]]
                  [reagent.core :as r]
                  [reagent.dom :as rd]
                  [re-frame.core :as rf]
                  [app-view :as view]))


(defonce root (createRoot (js/document.getElementById "patients-app")))

(defn init []
  (.render root (r/as-element [view/app]))
  (rf/dispatch [:get-patients])
  (rf/dispatch [:init-default-db]))

(defn ^:dev/after-load re-render []
  (init))
