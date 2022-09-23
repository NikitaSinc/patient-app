(ns handlers
  (:require [compojure.core :refer [defroutes GET POST DELETE HEAD context]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [cheshire.core :as chesh]
            [db]))

(defn root-handler [request]
  {:status 200
   :headers {"Content-type" "text/html"}
   :body (slurp (io/resource "index.html"))})

(defn get-all-handler [request]
  {:status 200
   :body (chesh/generate-string (db/patients-all->db))})

(defn create-new-handler [request]
  (if-let [patient (:json-params request)]
  {:status 200
   :body (chesh/generate-string (db/patients-add->db patient))}
  {:status 400}))

(defn filter-handler [request])
(defn search-handler [request])

(defn delete-by-oms-handler [oms request]
    {:status 200
     :body (db/patients-delete->db oms)})

(defn update-patient-handler [oms request]
  (if-let [patient (:json-params request)]
  {:status 200
   :body (chesh/generate-string (db/patients-update->db oms patient))}
  {:status 400}))


(defroutes routes
  (route/resources "/resources")
  (GET "/" request (root-handler request))
  (context "/patients" []
           (GET "/get-all" request (get-all-handler request))
           (POST "/create" request (create-new-handler request))
           (POST "/filter" request (filter-handler request))
           (POST "/search" request (search-handler request))
           (context "/:oms" [oms]
                    (DELETE "/delete" request (delete-by-oms-handler oms request))
                    (POST "/update" request (update-patient-handler oms request)))))
