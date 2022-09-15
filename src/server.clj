(ns server
  (:require [org.httpkit.server :as http]
            [ring.middleware.content-type]
            [ring.middleware.json]
            [ring.middleware.head]
            [ring.middleware.params]
            [ring.middleware.keyword-params]
            [ring.middleware.params]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :as comp]
            [config :refer [cfg]]))

(defonce server (atom nil))

(defn root-handler [request]
  {:status 200
   :headers {"Content-type" "text/plain"}
   :body "Hi there!"})

(comp/defroutes routes
  (comp/GET "/" request (root-handler request)))

(defn app-naked [request]
  (routes request))

(defn app [request]
  (app-naked request))

(defn -main []
  (reset! server (http/run-server #'app {:port (cfg :server :port)})))

(defn -stop []
  (reset! server nil))

#_(-main) ;manual start
#_(-stop) ;manual stop
