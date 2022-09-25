(ns db
  (:require [dsql.pg :as dsql]
            [next.jdbc :as jdbc]
            [next.jdbc.date-time]
            [config :refer [cfg]]
            [clj-time.core :as t]
            [clj-time.local]
            [clojure.string :as str]))

(next.jdbc.date-time/read-as-local)

(defn db-source []
  (jdbc/get-datasource {:dbtype (cfg :db :dbtype)
                        :dbname (cfg :db :dbname)
                        :port (cfg :db :dbport)
                        :host (cfg :db :dbhost)
                        }))

(defn trim-all [in]
  (if (map? in)
    (update-vals in (fn [old] (if (string? old) (str/trim old))))
    (mapv #(update-vals % (fn [old] (if (string? old) (str/trim old)))) in)))

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
             :returning :*}))))
#_(patients-add->db {:oms "5" :fio "asdaf" :gender "male" :dob "02/03/1990"  :address "asdaq"})

(defn patients-delete->db [oms]
  (->db (dsql/format
          {
           :ql/type :pg/delete
           :from :patients
           :where ^:pg/op[:= :oms oms]
           :returning :oms})))
#_(patients-delete->db "1")

(defn patients-update->db [oms-old patient]
 (let [{:keys [oms fio gender dob address]} patient]
   (->db (dsql/format
           {
            :ql/type :pg/update
            :update :patients
            :set {:oms oms :fio fio :gender gender :dob [:pg/cast dob :date] :address address}
            :where [:= :oms oms-old]
            :returning :*
            }))))
#_(patients-update->db "0897" {:oms "3" :fio "victor" :gender "male" :dob (java.time.OffsetDateTime/parse "1990-02-02") :address "asdaq"})

(defn patients-get-fiter->db [filt]
  (let [{:keys [oms fio gender]} filt]
    (->db (dsql/format
          {
           :ql/type :pg/select
           :select :*
           :from :patients
           :where [:and
                   [:ilike :oms (str "%" oms "%")]
                   [:ilike :fio (str "%" fio "%")]
                   (if (not (= gender ""))[:= :gender gender])
                   ]
           }))))
