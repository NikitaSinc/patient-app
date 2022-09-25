(ns server-test
  (:require [server :as s]
            [config :as c :refer [cfg]]
            [db]
            [clojure.test :refer :all]
            [cheshire.core :as ch]
            [org.httpkit.server :as serv]
            [org.httpkit.client :as cl]
            [dsql.pg :as dsql]
            [clojure.java.io :as io]
            [clojure.string :as str]))

(defn run-all [& args]
  (run-all-tests))

(defonce test-server (atom nil))

(defn -test-main [& args]
  (reset! server-test/test-server (serv/run-server #'s/app {:port (cfg :server :port)})))

(defn -test-stop []
  (@server-test/test-server :timout 100) ;can't stop without
  (reset! server-test/test-server nil))

(def test-data [{:oms "1" :fio "biba" :gender "male"
                 :dob "1990-12-12" :address "a"
                }
                {:oms "2" :fio "boba" :gender "male"
                 :dob "1990-12-12" :address "a"
                }
                {:oms "3" :fio "baba" :gender "female"
                 :dob "1990-12-12" :address "a"
                }])

(defn fill-db []
  (db/->db ["truncate table patients;"])
  (db/->db (dsql/format {:ql/type :pg/insert-many
                         :into :patients
                         :values {:keys [:oms :fio :gender :dob :address]
                                  :values test-data}})))

(defn testing-env [tests]
  (with-redefs [c/config (update c/config :cur (fn [old] :test))]
    (try
      (server-test/-test-main)
      (fill-db)
      (tests)
      (finally
        (server-test/-test-stop)))))

(use-fixtures :once testing-env)

(def test-patient {:oms "3123123123123123"
                   :fio "Test Test Test"
                   :gender "female"
                   :dob "1990-12-12"
                   :address "sdawdqwf qwdqwf -d wqa wd."})

(defn trim-in-patient [patient]
  (update-vals patient (fn [old] (if (string? old) (str/trim old)))))

(defn create-opts [data]
  {:headers {"content-type" "application/json"}
   :body (ch/generate-string data)})

(defn create-path [uri]
  (str (cfg :server :host) (cfg :server :port) uri))

(defn test-post [uri data]
  @(cl/post (create-path uri)
                (create-opts data)))

(defn test-delete [uri]
  (-> @(cl/delete (create-path uri))
      (:status)))

(defn test-get [uri]
  @(cl/get (create-path uri)))

(defn create-test-patient []
  (test-post "/patients/create" test-patient))

(defn delete-test-patient []
  (test-delete (str "/patients/" (:oms test-patient) "/delete")))

(defn test-get-body [uri]
  (-> (test-get uri)
      (:body)
      clojure.java.io/reader
      (ch/parse-stream keyword)
      (->>
        (mapv trim-in-patient))))

(defn test-get-status [uri]
  (:status (test-get uri)))

(defn test-post-status [uri data]
  (:status (test-post uri data)))

(defn test-post-body [uri data]
  (-> (test-post uri data)
      (:body)
      clojure.java.io/reader
      (ch/parse-stream keyword)
      (->>
        (mapv trim-in-patient))))

(deftest root-handler-test
  (is (= 200 (test-get-status "/"))))

(deftest not-existing-path-test
  (is (= 404 (test-get-status "/sdafqw"))))

(deftest get-all-test
  (is (= 200 (test-get-status "/patients/get-all")))
  (is (= [#:patients{:oms "1" :fio "biba" :gender "male" :dob "1990-12-12" :address "a"}
          #:patients{:oms "2" :fio "boba" :gender "male" :dob "1990-12-12" :address "a"}
          #:patients{:oms "3" :fio "baba" :gender "female" :dob "1990-12-12" :address "a"}]
         (test-get-body "/patients/get-all"))))

(deftest add-patient-test
  (is (= 200 (test-post-status "/patients/create" test-patient)))
  (is (= 400 (test-post-status "/patients/create" nil)))
  (is (= 500 (test-post-status "/patients/create" {})))
  (delete-test-patient)
  (is (= [#:patients{:oms "3123123123123123"
                   :fio "Test Test Test"
                   :gender "female"
                   :dob "1990-12-12"
                   :address "sdawdqwf qwdqwf -d wqa wd."}]
         (test-post-body "/patients/create" test-patient)))
  (delete-test-patient))

(deftest update-patient-test
  (let [oms (:oms test-patient)]
  (create-test-patient)
  (is (= 200 (test-post-status (str "/patients/" oms "/update") (update test-patient :fio (fn [_] "asdawd")))))
  (is (=  [#:patients{:oms "3123123123123123"
                   :fio "asdawd"
                   :gender "female"
                   :dob "1990-12-12"
                   :address "sdawdqwf qwdqwf -d wqa wd."}]
        (test-post-body (str "/patients/" oms "/update") (update test-patient :fio (fn [_] "asdawd")))))
  (is (= 404 (test-post-status "/patients/2412515/update" (update test-patient :fio (fn [_] "asdawd")))))
  (is (= 400 (test-post-status (str "/patients/" oms "/update") nil)))
  (is (= 500 (test-post-status (str "/patients/" oms "/update") {})))
  (delete-test-patient)))

(deftest delete-patient-test
  (let [oms (:oms test-patient)]
     (create-test-patient)
     (is (= 200 (test-delete (str "/patients/" oms "/delete"))))
     (is (= 404 (test-delete "/patients/2415daw/delete")))
     (is (= 404 (test-delete (str "/patients/" oms "/delete"))))))

(deftest filter-patient-test
  (is (= 200 (test-post-status "/patients/get-all-filter" {:oms "1" :fio "" :gender ""})))
  (is (= 200 (test-post-status "/patients/get-all-filter" {})))
  (is (= []
         (test-post-body "/patients/get-all-filter" {:oms "9999999999999" :fio "" :gender ""})))
  (is (= [#:patients{:oms "1" :fio "biba" :gender "male" :dob "1990-12-12" :address "a"}]
         (test-post-body "/patients/get-all-filter" {:oms "1" :fio "" :gender ""})))
  (is (= [#:patients{:oms "1" :fio "biba" :gender "male" :dob "1990-12-12" :address "a"}]
         (test-post-body "/patients/get-all-filter" {:oms "" :fio "bi" :gender ""})))
  (is (= [#:patients{:oms "3" :fio "baba" :gender "female" :dob "1990-12-12" :address "a"}]
         (test-post-body "/patients/get-all-filter" {:oms "" :fio "" :gender "female"}))))
