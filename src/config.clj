(ns config)

(def config
  {:cur :dev
   :dev {
         :db    {
                 :dbtype "postgresql"
                 :dbport 5432
                 :dbuser "postgres"
                 :dbname "patients"
                 :dbpassword "1111"
                 :dbhost "localhost"}
         :server{
                 :port 8080
                 :host "http://localhost:"}
         }
   :test {
         :db    {
                 :dbtype "postgresql"
                 :dbport 5432
                 :dbuser "postgres"
                 :dbname "patients_test"
                 :dbpassword "1111"
                 :dbhost "db_patients"
                 }
         :server{
                 :port 8081
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
