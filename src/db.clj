(ns db
  (:require [dsql.pg :as dsql]
            [next.jdbc :as jdbc]
            [config :refer [cfg]]
            [clj-time.core :as time]))

(defn db-source []
  (jdbc/get-datasource {:dbtype (cfg :db :dbtype)
                        :dbname (cfg :db :dbname)
                        :port (cfg :db :dbport)
                        :host (cfg :db :dbhost)
                        :reWriteBatchedInserts true
                        }))

(defn prepared->db [query]
  (with-open [conn (jdbc/get-connection (db-source) (cfg :db :dbuser) (cfg :db :dbpassword))
              ps (jdbc/prepare [])]))

(defn ->db [query]
  (with-open [conn (jdbc/get-connection (db-source) (cfg :db :dbuser) (cfg :db :dbpassword))]
    (jdbc/execute! conn query)))

(defn patients-all->db []
  (->db (dsql/format
          {
           :ql/type :pg/select
           :select :*
           :from :patients
           })))

(defn patients-add->db [patient]
  (let [{:keys [oms fio gender dob address]} patient]
    (->db (dsql/format
            {
             :ql/type :pg/insert
             :into :patients
             :value {:oms oms :fio fio :gender gender :dob [:pg/cast dob :date] :address address}
             :reterning :*}))))
#_(patients-add->db {:oms "1" :fio "asdaf" :gender "male" :dob (java.sql.Date/parse "1999-12-12") :address "asdaq"})

(defn patients-delete->db [oms]
  (->db (dsql/format
          {
           :ql/type :pg/delete
           :from :patients
           :where ^:pg/op[:= :oms oms]})))
#_(patients-delete->db "1")

(defn patients-update->db [oms-old patient]
 (let [{:keys [oms fio gender dob address]} patient]
   (->db (dsql/format
           {
            :ql/type :pg/update
            :update :patients
            :set {:oms oms :fio fio :gender gender :dob [:pg/cast dob :date] :address address}
            :where ^:pg/op[:= :oms oms-old]
            :returning :*
            }))))
#_(patients-update->db {:oms_old "1" :oms "3" :fio "victor" :gender "male" :dob (format-sql-date->string (java.time.LocalDate/parse "1999-12-12")) :address "asdaq"})
