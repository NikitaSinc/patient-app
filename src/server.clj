(ns server
  (:require [org.httpkit.server :as http]
            [ring.middleware.content-type]
            [ring.middleware.json]
            [ring.middleware.jwt]
            [ring.middleware.keyword-params]
            [ring.middleware.params]
            [config :refer [cfg]]
            [handlers :as h]))


(defonce server (atom nil))

(defn app-naked [request & args]
  (h/routes request))

(def app (->
           app-naked
           (ring.middleware.json/wrap-json-params {:key-fn keyword})
           ring.middleware.params/wrap-params
           ring.middleware.json/wrap-json-response
           ring.middleware.content-type/wrap-content-type
         ))

(defn -main []
  (reset! server (http/run-server #'app {:port (cfg :server :port)})))

(defn -stop []
  (reset! server nil))

#_(-main) ;manual start
#_(-stop) ;manual stop
