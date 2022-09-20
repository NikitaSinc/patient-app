(ns server
  (:require [org.httpkit.server :as http]
            [ring.middleware.content-type]
            [ring.middleware.json]
            [ring.middleware.jwt]
            [ring.middleware.cookies]
            [config :refer [cfg]]
            [handlers :as h]))


(defonce server (atom nil))

(defn app-naked [request & args]
  (h/routes request))

(def app (->
           app-naked
           (ring.middleware.json/wrap-json-body {:key-fn keyword})
           ring.middleware.json/wrap-json-response
           (ring.middleware.content-type/wrap-content-type )
           ring.middleware.cookies/wrap-cookies
         ))

(defn -main []
  (reset! server (http/run-server #'app {:port (cfg :server :port)})))

(defn -stop []
  (reset! server nil))

#_(-main) ;manual start
#_(-stop) ;manual stop
