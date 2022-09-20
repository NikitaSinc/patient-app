(ns app-events
  (:require       [day8.re-frame.http-fx]
                  [reagent.core :as r]
                  [re-frame.core :as rf]
                  [ajax.core :as ajax]))

(def app-state (r/atom {:patients []
                        :new-patient {:patients/fio "test"
                                      :patients/oms nil
                                      :patients/gender nil
                                      :patients/dob nil
                                      :patients/address nil}
                        :new-patient-is-valid {:all-valid false
                                               :fio-valid false
                                               :gender-valid false
                                               :dob-valid false
                                               :address-valid false}
                        :selected-patient nil
                        :beckend-uri "http://localhost:8080/"
                        :error nil}))

(rf/reg-event-fx
  :add-patients
  (fn [{db :db} _]
    {:http-xhrio {:method           :post
                  :uri              (str (:beckend-uri @app-state) "patients/create")
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-add-patients]
                  :on-failure       [:failure-http-response]}}))

(rf/reg-event-fx
  :get-patients
  (fn [{db :db} _]
    {:http-xhrio {:method           :get
                  :uri              (str (:beckend-uri @app-state) "patients/get-all")
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-get-patients]
                  :on-failure       [:failure-http-response]}}))

(rf/reg-event-fx
  :delete-patients
  (fn [{db :db} _]
    {:http-xhrio {:method           :get
                  :uri              (str (:beckend-uri @app-state) "patients/get-all")
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-get-patients]
                  :on-failure       [:failure-http-response]}}))

(rf/reg-event-fx
  :update-patients
  (fn [{db :db} _]
    {:http-xhrio {:method           :get
                  :uri              (str (:beckend-uri @app-state) "patients/get-all")
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-get-patients]
                  :on-failure       [:failure-http-response]}}))

(defn cljsfy-vec [in]
  (let [out (js->clj in :keywordize-keys true)]
    (mapv #(update % :patients/dob (fn [old] (js/Date. old))) out)))

(rf/reg-event-db
  :set-error
  (fn [db [_ error]]
    (assoc db :error error)))

(rf/reg-event-db
  :success-add-patients
  (fn [db [_ response]]
    (update db :patients (conj (cljsfy-vec response)))))

(rf/reg-event-db
  :failure-http-response
  (fn [db [_ response]]
    (assoc db :error response)))

(rf/reg-event-db
  :success-get-patients
  (fn [db [_ response]]
    (assoc db :patients (cljsfy-vec response))))
;-------------------------------------------------------------------------------main view events
(rf/reg-sub
  :patients
  (fn [db _]
    (:patients db)))

(rf/reg-sub
  :error
  (fn [db _]
    (:error db)))
;-------------------------------------------------------------------------------fio input events
(rf/reg-sub
  :new-patient
  (fn [db _]
    (:new-patient db)))

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
          (rf/dispatch [:new-patients-oms-valid false]))
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
