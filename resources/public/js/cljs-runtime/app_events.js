goog.provide('app_events');
app_events.app_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861),new cljs.core.Keyword(null,"patients","patients",134252075),new cljs.core.Keyword(null,"selected-patient","selected-patient",235217388),new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"patient-change","patient-change",1272701270),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330)],["http://localhost:8080/",cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("patients","fio","patients/fio",412872813),null,new cljs.core.Keyword("patients","oms","patients/oms",1712983590),null,new cljs.core.Keyword("patients","gender","patients/gender",383440175),"male",new cljs.core.Keyword("patients","dob","patients/dob",1828103207),null,new cljs.core.Keyword("patients","address","patients/address",-343819592),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"by","by",30600856),"fio",new cljs.core.Keyword(null,"oms","oms",670013468),"",new cljs.core.Keyword(null,"fio","fio",-1091144093),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gender","gender",-733930727),""], null),null,null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"oms-valid","oms-valid",1492868293),false,new cljs.core.Keyword(null,"fio-valid","fio-valid",-492713771),false,new cljs.core.Keyword(null,"gender-valid","gender-valid",515321601),true,new cljs.core.Keyword(null,"dob-valid","dob-valid",343350475),false,new cljs.core.Keyword(null,"address-valid","address-valid",-1890420302),false], null)]);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-default-db","init-default-db",1789356987),(function (_,___$1){
return app_events.app_state;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-patients","add-patients",-66194917),(function (p__43282,p__43283){
var map__43284 = p__43282;
var map__43284__$1 = cljs.core.__destructure_map(map__43284);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43285 = p__43283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43285,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43285,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(db)),"patients/create"].join(''),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-new-patient","clear-new-patient",539770019)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-validation","clear-validation",650601195)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950),(function (p__43288,_){
var map__43289 = p__43288;
var map__43289__$1 = cljs.core.__destructure_map(map__43289);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(db)),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-patients","delete-patients",-1334337862),(function (p__43290,p__43291){
var map__43292 = p__43290;
var map__43292__$1 = cljs.core.__destructure_map(map__43292);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43292__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43293 = p__43291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43293,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43293,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(db)),"patients/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val),"/delete"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-delete-patients","success-delete-patients",1932235359)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-patients","update-patients",676789368),(function (p__43296,p__43297){
var map__43298 = p__43296;
var map__43298__$1 = cljs.core.__destructure_map(map__43298);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43298__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43299 = p__43297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43299,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43299,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(db)),"patients/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"patient-change","patient-change",1272701270).cljs$core$IFn$_invoke$arity$1(db)),"/update"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-update-patients","success-update-patients",-302876619)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-new-patient","clear-new-patient",539770019)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-change-nil","patient-change-nil",1692701174)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-validation","clear-validation",650601195)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filter-patients","filter-patients",215116346),(function (p__43302,_){
var map__43303 = p__43302;
var map__43303__$1 = cljs.core.__destructure_map(map__43303);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43303__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(db)),"patients/get-all-filter"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"oms","oms",670013468),new cljs.core.Keyword(null,"oms","oms",670013468).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"fio","fio",-1091144093),new cljs.core.Keyword(null,"fio","fio",-1091144093).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"gender","gender",-733930727),new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
app_events.cljsfy_vec = (function app_events$cljsfy_vec(in$){
var out = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(in$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43304_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__43304_SHARP_,new cljs.core.Keyword("patients","dob","patients/dob",1828103207),(function (old){
return (new Date(old));
}));
}),out);
});
app_events.cljsfy = (function app_events$cljsfy(in$){
return cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(in$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
app_events.cljsfy_single_patient = (function app_events$cljsfy_single_patient(in$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(app_events.cljsfy(in$),new cljs.core.Keyword("patients","dob","patients/dob",1828103207),(function (old){
return (new Date(old));
}));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-validation","clear-validation",650601195),(function (db,p__43305){
var vec__43306 = p__43305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43306,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43306,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"oms-valid","oms-valid",1492868293),false,new cljs.core.Keyword(null,"fio-valid","fio-valid",-492713771),false,new cljs.core.Keyword(null,"gender-valid","gender-valid",515321601),true,new cljs.core.Keyword(null,"dob-valid","dob-valid",343350475),false,new cljs.core.Keyword(null,"address-valid","address-valid",-1890420302),false], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__43309){
var vec__43310 = p__43309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43310,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43310,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511),(function (db,p__43313){
var vec__43314 = p__43313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43314,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43314,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.conj,app_events.cljsfy_single_patient(response));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-new-patient","clear-new-patient",539770019),(function (db,p__43317){
var vec__43318 = p__43317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("patients","fio","patients/fio",412872813),null,new cljs.core.Keyword("patients","oms","patients/oms",1712983590),null,new cljs.core.Keyword("patients","gender","patients/gender",383440175),"male",new cljs.core.Keyword("patients","dob","patients/dob",1828103207),null,new cljs.core.Keyword("patients","address","patients/address",-343819592),null], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-delete-patients","success-delete-patients",1932235359),(function (db,p__43322){
var vec__43323 = p__43322;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43323,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43323,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),(function (old){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43321_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p1__43321_SHARP_),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(app_events.cljsfy(response)));
}),old));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-update-patients","success-update-patients",-302876619),(function (db,p__43327){
var vec__43328 = p__43327;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43328,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43328,(1),null);
var resp = app_events.cljsfy_single_patient(response);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),(function (old){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43326_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p1__43326_SHARP_))){
return resp;
} else {
return p1__43326_SHARP_;
}
}),old);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389),(function (db,p__43331){
var vec__43332 = p__43331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43332,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002),(function (db,p__43335){
var vec__43336 = p__43335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43336,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),app_events.cljsfy_vec(response));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"search","search",1564939822),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-filter","clear-filter",-447106109),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(app_events.app_state));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-search","clear-search",-434958780),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(app_events.app_state));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-filter-search","clear-filter-search",-1082501825),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-filter","clear-filter",-447106109)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-search","clear-search",-434958780)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filter-gender-set","filter-gender-set",-1068076442),(function (cofx,p__43339){
var vec__43340 = p__43339;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43340,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43340,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"gender","gender",-733930727)], null),(function (old){
return val;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-patients","filter-patients",215116346)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search-oms-set","search-oms-set",1773692625),(function (cofx,p__43343){
var vec__43344 = p__43343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43344,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"oms","oms",670013468)], null),(function (old){
return val;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-patients","filter-patients",215116346)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search-fio-set","search-fio-set",1030630343),(function (cofx,p__43347){
var vec__43348 = p__43347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43348,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43348,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"fio","fio",-1091144093)], null),(function (old){
return val;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-patients","filter-patients",215116346)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search-set-by","search-set-by",-1621777730),(function (db,p__43351){
var vec__43352 = p__43351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43352,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43352,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"by","by",30600856)], null),(function (old){
return by;
}));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"patient-change","patient-change",1272701270),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"patient-change","patient-change",1272701270).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"patient-change-nil","patient-change-nil",1692701174),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patient-change","patient-change",1272701270),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"patient-change-set","patient-change-set",1746852871),(function (cofx,p__43355){
var vec__43356 = p__43355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43356,(0),null);
var patient = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43356,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"patient-change","patient-change",1272701270),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(patient)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-update","new-patient-fio-update",809901397),new cljs.core.Keyword("patients","fio","patients/fio",412872813).cljs$core$IFn$_invoke$arity$1(patient).trim()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-update","new-patient-oms-update",311667071),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(patient).trim()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender-update","new-patient-gender-update",-257826869),new cljs.core.Keyword("patients","gender","patients/gender",383440175).cljs$core$IFn$_invoke$arity$1(patient)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address-update","new-patient-address-update",-888463161),new cljs.core.Keyword("patients","address","patients/address",-343819592).cljs$core$IFn$_invoke$arity$1(patient).trim()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob-update","new-patient-dob-update",74265302),new cljs.core.Keyword("patients","dob","patients/dob",1828103207).cljs$core$IFn$_invoke$arity$1(patient)], null)], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"patients","patients",134252075).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-fio","new-patient-fio",-88994876),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","fio","patients/fio",412872813).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-fio-valid","new-patient-fio-valid",1284482880),(function (db,p__43359){
var vec__43360 = p__43359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43360,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.Keyword(null,"fio-valid","fio-valid",-492713771)], null),(function (old){
return valid;
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"new-patient-fio-validation","new-patient-fio-validation",-295777578),(function (fio){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(fio))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-valid","new-patient-fio-valid",1284482880),false], null));
} else {
if((cljs.core.count(fio) > (200))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"To many characters in field FIO"], null));
} else {
var temp__5802__auto__ = cljs.core.re_matches(/[а-яА-ЯA-Za-z \-\(\)]+/,fio);
if(cljs.core.truth_(temp__5802__auto__)){
var valid = temp__5802__auto__;
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-valid","new-patient-fio-valid",1284482880),true], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-valid","new-patient-fio-valid",1284482880),false], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"Unacceptable chracters in field FIO"], null));
}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-fio-update","new-patient-fio-update",809901397),(function (cofx,p__43363){
var vec__43364 = p__43363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43364,(0),null);
var fio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43364,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","fio","patients/fio",412872813)], null),(function (old){
return fio;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-validation","new-patient-fio-validation",-295777578),fio], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-oms","new-patient-oms",-1963337357),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-oms-valid","new-patient-oms-valid",-230801562),(function (db,p__43367){
var vec__43368 = p__43367;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43368,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43368,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.Keyword(null,"oms-valid","oms-valid",1492868293)], null),(function (old){
return valid;
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"new-patient-oms-validation","new-patient-oms-validation",2035047883),(function (oms){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(oms))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-valid","new-patient-oms-valid",-230801562),false], null));
} else {
if((cljs.core.count(oms) > (16))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"To many characters in field OMS"], null));
} else {
var temp__5802__auto__ = cljs.core.re_matches(/[0-9]+/,oms);
if(cljs.core.truth_(temp__5802__auto__)){
var valid = temp__5802__auto__;
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-valid","new-patient-oms-valid",-230801562),true], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-valid","new-patient-oms-valid",-230801562),false], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"Unacceptable chracters in field OMS"], null));
}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-oms-update","new-patient-oms-update",311667071),(function (cofx,p__43371){
var vec__43372 = p__43371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43372,(0),null);
var oms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43372,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","oms","patients/oms",1712983590)], null),(function (old){
return oms;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-validation","new-patient-oms-validation",2035047883),oms], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-gender","new-patient-gender",-1773554724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","gender","patients/gender",383440175).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-gender-valid","new-patient-gender-valid",1123157634),(function (db,p__43375){
var vec__43376 = p__43375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43376,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43376,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.Keyword(null,"gender-valid","gender-valid",515321601)], null),(function (old){
return valid;
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"new-patient-gender-validation","new-patient-gender-validation",-779778741),(function (gender){
if((!((gender == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender-valid","new-patient-gender-valid",1123157634),true], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender-valid","new-patient-gender-valid",1123157634),false], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-gender-update","new-patient-gender-update",-257826869),(function (cofx,p__43379){
var vec__43380 = p__43379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43380,(0),null);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43380,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","gender","patients/gender",383440175)], null),(function (old){
return gender;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender-validation","new-patient-gender-validation",-779778741),gender], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-dob","new-patient-dob",-1647940757),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","dob","patients/dob",1828103207).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-dob-valid","new-patient-dob-valid",-1659925714),(function (db,p__43383){
var vec__43384 = p__43383;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.Keyword(null,"dob-valid","dob-valid",343350475)], null),(function (old){
return valid;
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"new-patient-dob-validation","new-patient-dob-validation",1920624550),(function (dob){
if((dob == null)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob-valid","new-patient-dob-valid",-1659925714),false], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));
} else {
if(((new Date(dob)) <= (new Date()))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob-valid","new-patient-dob-valid",-1659925714),true], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob-valid","new-patient-dob-valid",-1659925714),false], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"Go back to the future!"], null));
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-dob-update","new-patient-dob-update",74265302),(function (cofx,p__43387){
var vec__43388 = p__43387;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43388,(0),null);
var dob = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43388,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","dob","patients/dob",1828103207)], null),(function (old){
return dob;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob-validation","new-patient-dob-validation",1920624550),dob], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-address","new-patient-address",2099580455),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","address","patients/address",-343819592).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-address-valid","new-patient-address-valid",-95942502),(function (db,p__43391){
var vec__43392 = p__43391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43392,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43392,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.Keyword(null,"address-valid","address-valid",-1890420302)], null),(function (old){
return valid;
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"new-patient-address-validation","new-patient-address-validation",456318185),(function (address){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(address))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address-valid","new-patient-address-valid",-95942502),false], null));
} else {
if((cljs.core.count(address) > (200))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"To many characters in field Address"], null));
} else {
var temp__5802__auto__ = cljs.core.re_matches(/[a-zA-Zа-яА-Я0-9 \-\.]+/,address);
if(cljs.core.truth_(temp__5802__auto__)){
var valid = temp__5802__auto__;
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address-valid","new-patient-address-valid",-95942502),true], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address-valid","new-patient-address-valid",-95942502),false], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"Unacceptable chracters in field Address"], null));
}
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-address-update","new-patient-address-update",-888463161),(function (cofx,p__43395){
var vec__43396 = p__43395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43396,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43396,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","address","patients/address",-343819592)], null),(function (old){
return address;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address-validation","new-patient-address-validation",456318185),address], null)], null)], null);
}));

//# sourceMappingURL=app_events.js.map
