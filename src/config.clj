(ns config)

(def config
  {:cur :dev
   :dev {
         :db    {
                 :db_port 5432
                 :db_user "postgres"
                 :db_name "patients"
                 :db_password "1111"}
         :server{
                 :port 8080
                 :host "http://localhost:"}
         }
   })

(defn cfg [& args]
  (let [path (vec args)
        conf (get config (:cur config))
        result (get-in conf path nil)]
    (if (nil? result)
      (throw (ex-info "Config not found!" {:cause "Config"}))
      result)))
