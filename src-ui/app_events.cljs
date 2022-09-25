(ns app-events
  (:require       [day8.re-frame.http-fx]
                  [reagent.core :as r]
                  [re-frame.core :as rf]
                  [ajax.core :as ajax]))

(def app-state {:patients []
     :patient-change nil
     :search {
              :by "fio"
              :oms ""
              :fio ""
              }
     :filter {
              :gender ""
              }
     :new-patient {:patients/fio nil
                   :patients/oms nil
                   :patients/gender "male"
                   :patients/dob nil
                   :patients/address nil}
     :new-patient-is-valid {:oms-valid false
                            :fio-valid false
                            :gender-valid true
                            :dob-valid false
                            :address-valid false}
     :selected-patient nil
     :beckend-uri "http://localhost:8080/"
     :error nil})

(rf/reg-event-db
  :init-default-db
  (fn [_ _]
    app-state))

;----------------------------------------------------------------------------http events
(rf/reg-event-fx
  :add-patients
  (fn [{db :db} [_ val]]
    {:http-xhrio {:method           :post
                  :uri              (str (:beckend-uri db) "patients/create")
                  :params           val
                  :format           (ajax/json-request-format)
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-add-patients]
                  :on-failure       [:failure-http-response]}
     :fx [[:dispatch [:clear-new-patient]]
          [:dispatch [:clear-validation]]]}))

(rf/reg-event-fx
  :get-patients
  (fn [{db :db} _]
    {:http-xhrio {:method           :get
                  :uri              (str (:beckend-uri db) "patients/get-all")
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-get-patients]
                  :on-failure       [:failure-http-response]}}))

(rf/reg-event-fx
  :delete-patients
  (fn [{db :db} [_ val]]
    {:http-xhrio {:method           :delete
                  :uri              (str (:beckend-uri db) "patients/"val"/delete")
                  :format           (ajax/json-request-format)
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-delete-patients]
                  :on-failure       [:failure-http-response]}}))

(rf/reg-event-fx
  :update-patients
  (fn [{db :db} [_ val]]
    {:http-xhrio {:method           :post
                  :uri              (str (:beckend-uri db) "patients/"(:patient-change db)"/update")
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :format           (ajax/json-request-format)
                  :params           val
                  :on-success       [:success-update-patients]
                  :on-failure       [:failure-http-response]}
     :fx [[:dispatch [:clear-new-patient]]
          [:dispatch [:patient-change-nil]]
          [:dispatch [:clear-validation]]]}))

(rf/reg-event-fx
  :filter-patients
  (fn [{db :db} _]
    {:http-xhrio {:method           :post
                  :uri              (str (:beckend-uri db) "patients/get-all-filter")
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :format           (ajax/json-request-format)
                  :params           {:oms (:oms (:search db))
                                     :fio (:fio (:search db))
                                     :gender (:gender (:filter db))}
                  :on-success       [:success-get-patients]
                  :on-failure       [:failure-http-response]}}))

(defn cljsfy-vec [in]
  (let [out (js->clj in :keywordize-keys true)]
    (mapv #(update % :patients/dob (fn [old] (js/Date. old))) out)))

(defn cljsfy [in]
(first (js->clj in :keywordize-keys true)))

(defn cljsfy-single-patient [in]
(update (cljsfy in) :patients/dob (fn [old] (js/Date. old))))

(rf/reg-event-db
  :clear-validation
  (fn [db [_ _]]
    (assoc db :new-patient-is-valid {:oms-valid false
                                     :fio-valid false
                                     :gender-valid true
                                     :dob-valid false
                                     :address-valid false})))

(rf/reg-event-db
  :set-error
  (fn [db [_ error]]
    (assoc db :error error)))

(rf/reg-event-db
  :success-add-patients
  (fn [db [_ response]]
    (update db :patients conj (cljsfy-single-patient response))))

(rf/reg-event-db
  :clear-new-patient
  (fn [db [_ response]]
    (assoc db :new-patient {:patients/fio nil
                            :patients/oms nil
                            :patients/gender "male"
                            :patients/dob nil
                            :patients/address nil})))

(rf/reg-event-db
  :success-delete-patients
  (fn [db [_ response]]
  (update db :patients (fn [old]
                           (vec (remove
                             #(=
                                (:patients/oms %)
                                (:patients/oms (cljsfy response))) old))))))

(rf/reg-event-db
  :success-update-patients
  (fn [db [_ response]]
    (let [resp (cljsfy-single-patient response)]
    (update db :patients (fn [old]
                           (mapv #(if (= (:patients/oms resp) (:patients/oms %))
                                        resp
                                        %) old))))))

(rf/reg-event-db
  :failure-http-response
  (fn [db [_ response]]
    (assoc db :error (str response))))

(rf/reg-event-db
  :success-get-patients
  (fn [db [_ response]]
    (assoc db :patients (cljsfy-vec response))))

;-------------------------------------------------------------------------------search and filter events
(rf/reg-sub
  :search
  (fn [db _]
    (:search db)))

(rf/reg-sub
  :filter
  (fn [db _]
    (:filter db)))

(rf/reg-event-db
  :clear-filter
  (fn [db _]
    (assoc db :filter (:filter app-state))))

(rf/reg-event-db
  :clear-search
  (fn [db _]
    (assoc db :search (:search app-state))))

(rf/reg-event-fx
  :clear-filter-search
  (fn [cofx _]
     {:fx [[:dispatch [:clear-filter]]
           [:dispatch [:clear-search]]
           [:dispatch [:get-patients]]]}))

(rf/reg-event-fx
  :filter-gender-set
  (fn [cofx [_ val]]
    {:db (update-in (:db cofx) [:filter :gender] (fn [old] val))
     :fx [[:dispatch [:filter-patients]]]}))

(rf/reg-event-fx
  :search-oms-set
 (fn [cofx [_ val]]
  {:db (update-in (:db cofx) [:search :oms] (fn [old] val))
   :fx [[:dispatch [:filter-patients]]]}))

(rf/reg-event-fx
  :search-fio-set
 (fn [cofx [_ val]]
  {:db (update-in (:db cofx) [:search :fio] (fn [old] val))
   :fx [[:dispatch [:filter-patients]]]}))

(rf/reg-event-db
  :search-set-by
  (fn [db [_ by]]
    (update-in db [:search :by] (fn [old] by))))
;-------------------------------------------------------------------------------main view events
(rf/reg-sub
  :patient-change
  (fn [db _]
    (:patient-change db)))

(rf/reg-event-db
  :patient-change-nil
  (fn [db _]
    (assoc db :patient-change nil)))

(rf/reg-event-fx
  :patient-change-set
  (fn [cofx [_ patient]]
    {:db (assoc (:db cofx) :patient-change (:patients/oms patient))
     :fx [[:dispatch [:new-patient-fio-update (.trim (:patients/fio patient))]]
          [:dispatch [:new-patient-oms-update (.trim (:patients/oms patient))]]
          [:dispatch [:new-patient-gender-update (:patients/gender patient)]]
          [:dispatch [:new-patient-address-update (.trim (:patients/address patient))]]
          [:dispatch [:new-patient-dob-update (:patients/dob patient)]]]}))

(rf/reg-sub
  :patients
  (fn [db _]
    (:patients db)))

(rf/reg-sub
  :error
  (fn [db _]
    (:error db)))

(rf/reg-sub
  :new-patient
  (fn [db _]
    (:new-patient db)))

(rf/reg-sub
  :new-patient-is-valid
  (fn [db _]
    (:new-patient-is-valid db)))

;-------------------------------------------------------------------------------fio input events
(rf/reg-sub
  :new-patient-fio
  (fn [_ _]
    (rf/subscribe [:new-patient]))
  (fn [patient _]
    (:patients/fio patient)))

(rf/reg-event-db
  :new-patient-fio-valid
  (fn [db [_ valid]]
    (update-in db [:new-patient-is-valid :fio-valid] (fn [old] valid))))

(rf/reg-fx
  :new-patient-fio-validation
  (fn [fio]
    (if (= 0 (count fio))
      (do (rf/dispatch [:set-error nil])
          (rf/dispatch [:new-patient-fio-valid false]))
      (if (> (count fio) 200)
        (rf/dispatch [:set-error "To many characters in field FIO"])
        (if-let [valid (re-matches #"[а-яА-ЯA-Za-z \-\(\)]+" fio)]
          (do (rf/dispatch [:new-patient-fio-valid true])
              (rf/dispatch [:set-error nil]))
          (do (rf/dispatch [:new-patient-fio-valid false])
              (rf/dispatch [:set-error "Unacceptable chracters in field FIO"])))))))

(rf/reg-event-fx
  :new-patient-fio-update
  (fn [cofx [_ fio]]
     {:db (update-in (:db cofx) [:new-patient :patients/fio] (fn [old] fio))
      :fx [[:new-patient-fio-validation fio]]}))

;-------------------------------------------------------------------------------oms input events
(rf/reg-sub
  :new-patient-oms
  (fn [_]
    (rf/subscribe [:new-patient]))
  (fn [patient _]
    (:patients/oms patient)))

(rf/reg-event-db
  :new-patient-oms-valid
  (fn [db [_ valid]]
    (update-in db [:new-patient-is-valid :oms-valid] (fn [old] valid))))

(rf/reg-fx
  :new-patient-oms-validation
  (fn [oms]
    (if (= 0 (count oms))
      (do (rf/dispatch [:set-error nil])
          (rf/dispatch [:new-patient-oms-valid false]))
      (if (> (count oms) 16)
        (rf/dispatch [:set-error "To many characters in field OMS"])
        (if-let [valid (re-matches #"[0-9]+" oms)]
          (do (rf/dispatch [:new-patient-oms-valid true])
              (rf/dispatch [:set-error nil]))
          (do (rf/dispatch [:new-patient-oms-valid false])
              (rf/dispatch [:set-error "Unacceptable chracters in field OMS"])))))))

(rf/reg-event-fx
  :new-patient-oms-update
  (fn [cofx [_ oms]]
     {:db (update-in (:db cofx) [:new-patient :patients/oms] (fn [old] oms))
      :fx [[:new-patient-oms-validation oms]]}))

;------------------------------------------------------------------------------gender input events
(rf/reg-sub
  :new-patient-gender
  (fn [_]
    (rf/subscribe [:new-patient]))
  (fn [patient _]
    (:patients/gender patient)))

(rf/reg-event-db
  :new-patient-gender-valid
  (fn [db [_ valid]]
    (update-in db [:new-patient-is-valid :gender-valid] (fn [old] valid))))

(rf/reg-fx
  :new-patient-gender-validation
  (fn [gender]
    (if (not (nil? gender))
      (rf/dispatch [:new-patient-gender-valid true])
      (rf/dispatch [:new-patient-gender-valid false]))))

(rf/reg-event-fx
  :new-patient-gender-update
  (fn [cofx [_ gender]]
     {:db (update-in (:db cofx) [:new-patient :patients/gender] (fn [old] gender))
      :fx [[:new-patient-gender-validation gender]]}))

;--------------------------------------------------------------------------------dob input events
(rf/reg-sub
  :new-patient-dob
  (fn [_]
    (rf/subscribe [:new-patient]))
  (fn [patient _]
    (:patients/dob patient)))

(rf/reg-event-db
  :new-patient-dob-valid
  (fn [db [_ valid]]
    (update-in db [:new-patient-is-valid :dob-valid] (fn [old] valid))))

(rf/reg-fx
  :new-patient-dob-validation
  (fn [dob]
    (if (nil? dob)
      (do (rf/dispatch [:new-patient-dob-valid false])
          (rf/dispatch [:set-error nil]))
      (if (<= (js/Date. dob) (js/Date.))
      (do (rf/dispatch [:new-patient-dob-valid true])
          (rf/dispatch [:set-error nil]))
      (do (rf/dispatch [:new-patient-dob-valid false])
          (rf/dispatch [:set-error "Go back to the future!"]))))))

(rf/reg-event-fx
  :new-patient-dob-update
  (fn [cofx [_ dob]]
     {:db (update-in (:db cofx) [:new-patient :patients/dob] (fn [old] dob))
      :fx [[:new-patient-dob-validation dob]]}))

;--------------------------------------------------------------------------------address input events
(rf/reg-sub
  :new-patient-address
  (fn [_]
    (rf/subscribe [:new-patient]))
  (fn [patient _]
    (:patients/address patient)))

(rf/reg-event-db
  :new-patient-address-valid
  (fn [db [_ valid]]
    (update-in db [:new-patient-is-valid :address-valid] (fn [old] valid))))

(rf/reg-fx
  :new-patient-address-validation
  (fn [address]
    (if (= 0 (count address))
      (do (rf/dispatch [:set-error nil])
          (rf/dispatch [:new-patient-address-valid false]))
      (if (> (count address) 200)
        (rf/dispatch [:set-error "To many characters in field Address"])
        (if-let [valid (re-matches #"[a-zA-Zа-яА-Я0-9 \-\.]+" address)]
          (do (rf/dispatch [:new-patient-address-valid true])
              (rf/dispatch [:set-error nil]))
          (do (rf/dispatch [:new-patient-address-valid false])
              (rf/dispatch [:set-error "Unacceptable chracters in field Address"])))))))

(rf/reg-event-fx
  :new-patient-address-update
  (fn [cofx [_ address]]
     {:db (update-in (:db cofx) [:new-patient :patients/address] (fn [old] address))
      :fx [[:new-patient-address-validation address]]}))
