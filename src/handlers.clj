(ns handlers
  (:require [compojure.core :refer [defroutes GET POST DELETE HEAD context]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [cheshire.core :as chesh]
            [db]
            [cheshire.generate :as chgen]))

(chgen/add-encoder java.time.LocalDate
             (fn [c jsonGenerator]
               (.writeString jsonGenerator (.toString c))))

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

(defn filter-handler [request]
  (if-let [filt (:json-params request)]
    {:status 200
     :body (chesh/generate-string (db/patients-get-fiter->db filt))}))

(defn delete-by-oms-handler [oms request]
  (let [body (db/patients-delete->db oms)]
  (if (empty? body)
    {:status 404}
    {:status 200
     :body body})))

(defn update-patient-handler [oms request]
  (if-let [patient (:json-params request)]
    (let [body (db/patients-update->db oms patient)]
      (if (empty? body)
        {:status 404}
        {:status 200
         :body (chesh/generate-string body)}))
    {:status 400}))

(defroutes routes
  (route/resources "/resources")
  (GET "/" request (root-handler request))
  (context "/patients" []
           (GET "/get-all" request (get-all-handler request))
           (POST "/create" request (create-new-handler request))
           (POST "/get-all-filter" request (filter-handler request))
           (context "/:oms" [oms]
                    (DELETE "/delete" request (delete-by-oms-handler oms request))
                    (POST "/update" request (update-patient-handler oms request)))))
