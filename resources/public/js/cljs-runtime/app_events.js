goog.provide('app_events');
app_events.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("patients","fio","patients/fio",412872813),"test",new cljs.core.Keyword("patients","oms","patients/oms",1712983590),null,new cljs.core.Keyword("patients","gender","patients/gender",383440175),null,new cljs.core.Keyword("patients","dob","patients/dob",1828103207),null,new cljs.core.Keyword("patients","address","patients/address",-343819592),null], null),new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"all-valid","all-valid",503264568),false,new cljs.core.Keyword(null,"fio-valid","fio-valid",-492713771),false,new cljs.core.Keyword(null,"gender-valid","gender-valid",515321601),false,new cljs.core.Keyword(null,"dob-valid","dob-valid",343350475),false,new cljs.core.Keyword(null,"address-valid","address-valid",-1890420302),false], null),new cljs.core.Keyword(null,"selected-patient","selected-patient",235217388),null,new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861),"http://localhost:8080/",new cljs.core.Keyword(null,"error","error",-978969032),null], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-patients","add-patients",-66194917),(function (p__41693,_){
var map__41694 = p__41693;
var map__41694__$1 = cljs.core.__destructure_map(map__41694);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41694__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/create"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950),(function (p__41695,_){
var map__41696 = p__41695;
var map__41696__$1 = cljs.core.__destructure_map(map__41696);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41696__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-patients","delete-patients",-1334337862),(function (p__41697,_){
var map__41698 = p__41697;
var map__41698__$1 = cljs.core.__destructure_map(map__41698);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41698__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-patients","update-patients",676789368),(function (p__41699,_){
var map__41700 = p__41699;
var map__41700__$1 = cljs.core.__destructure_map(map__41700);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41700__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
app_events.cljsfy_vec = (function app_events$cljsfy_vec(in$){
var out = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(in$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41701_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__41701_SHARP_,new cljs.core.Keyword("patients","dob","patients/dob",1828103207),(function (old){
return (new Date(old));
}));
}),out);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__41702){
var vec__41703 = p__41702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41703,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41703,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511),(function (db,p__41706){
var vec__41707 = p__41706;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41707,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41707,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(app_events.cljsfy_vec(response)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389),(function (db,p__41710){
var vec__41711 = p__41710;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002),(function (db,p__41714){
var vec__41715 = p__41714;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41715,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41715,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),app_events.cljsfy_vec(response));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-fio","new-patient-fio",-88994876),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","fio","patients/fio",412872813).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-fio-valid","new-patient-fio-valid",1284482880),(function (db,p__41718){
var vec__41719 = p__41718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41719,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41719,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-fio-update","new-patient-fio-update",809901397),(function (cofx,p__41722){
var vec__41723 = p__41722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41723,(0),null);
var fio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41723,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","fio","patients/fio",412872813)], null),(function (old){
return fio;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-validation","new-patient-fio-validation",-295777578),fio], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-oms","new-patient-oms",-1963337357),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-oms-valid","new-patient-oms-valid",-230801562),(function (db,p__41726){
var vec__41727 = p__41726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.Keyword(null,"oms-valid","oms-valid",1492868293)], null),(function (old){
return valid;
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"new-patient-oms-validation","new-patient-oms-validation",2035047883),(function (oms){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(oms))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),null], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patients-oms-valid","new-patients-oms-valid",916364255),false], null));
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-oms-update","new-patient-oms-update",311667071),(function (cofx,p__41730){
var vec__41731 = p__41730;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41731,(0),null);
var oms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41731,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","oms","patients/oms",1712983590)], null),(function (old){
return oms;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-validation","new-patient-oms-validation",2035047883),oms], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-gender","new-patient-gender",-1773554724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","gender","patients/gender",383440175).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-gender-valid","new-patient-gender-valid",1123157634),(function (db,p__41734){
var vec__41735 = p__41734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41735,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41735,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.Keyword(null,"gender-valid","gender-valid",515321601)], null),(function (old){
return valid;
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"new-patient-gender-validation","new-patient-gender-validation",-779778741),(function (gender){
if((!((gender == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),true], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),false], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-gender-update","new-patient-gender-update",-257826869),(function (cofx,p__41738){
var vec__41739 = p__41738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41739,(0),null);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41739,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","gender","patients/gender",383440175)], null),(function (old){
return gender;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender-validation","new-patient-gender-validation",-779778741),gender], null)], null)], null);
}));

//# sourceMappingURL=app_events.js.map
