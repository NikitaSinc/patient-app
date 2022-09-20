goog.provide('app_events');
app_events.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("patients","fio","patients/fio",412872813),"test",new cljs.core.Keyword("patients","oms","patients/oms",1712983590),null,new cljs.core.Keyword("patients","gender","patients/gender",383440175),null,new cljs.core.Keyword("patients","dob","patients/dob",1828103207),null,new cljs.core.Keyword("patients","address","patients/address",-343819592),null], null),new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"all-valid","all-valid",503264568),false,new cljs.core.Keyword(null,"fio-valid","fio-valid",-492713771),false,new cljs.core.Keyword(null,"gender-valid","gender-valid",515321601),false,new cljs.core.Keyword(null,"dob-valid","dob-valid",343350475),false,new cljs.core.Keyword(null,"address-valid","address-valid",-1890420302),false], null),new cljs.core.Keyword(null,"selected-patient","selected-patient",235217388),null,new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861),"http://localhost:8080/",new cljs.core.Keyword(null,"error","error",-978969032),null], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-patients","add-patients",-66194917),(function (p__43591,_){
var map__43592 = p__43591;
var map__43592__$1 = cljs.core.__destructure_map(map__43592);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43592__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/create"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950),(function (p__43593,_){
var map__43594 = p__43593;
var map__43594__$1 = cljs.core.__destructure_map(map__43594);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-patients","delete-patients",-1334337862),(function (p__43595,_){
var map__43596 = p__43595;
var map__43596__$1 = cljs.core.__destructure_map(map__43596);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43596__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-patients","update-patients",676789368),(function (p__43597,_){
var map__43598 = p__43597;
var map__43598__$1 = cljs.core.__destructure_map(map__43598);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43598__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
app_events.cljsfy_vec = (function app_events$cljsfy_vec(in$){
var out = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(in$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43599_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__43599_SHARP_,new cljs.core.Keyword("patients","dob","patients/dob",1828103207),(function (old){
return (new Date(old));
}));
}),out);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__43600){
var vec__43601 = p__43600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43601,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43601,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511),(function (db,p__43604){
var vec__43605 = p__43604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43605,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43605,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(app_events.cljsfy_vec(response)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389),(function (db,p__43608){
var vec__43609 = p__43608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43609,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43609,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002),(function (db,p__43612){
var vec__43613 = p__43612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43613,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43613,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),app_events.cljsfy_vec(response));
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-fio","new-patient-fio",-88994876),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","fio","patients/fio",412872813).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-fio-valid","new-patient-fio-valid",1284482880),(function (db,p__43616){
var vec__43617 = p__43616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-fio-update","new-patient-fio-update",809901397),(function (cofx,p__43620){
var vec__43621 = p__43620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621,(0),null);
var fio = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","fio","patients/fio",412872813)], null),(function (old){
return fio;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-validation","new-patient-fio-validation",-295777578),fio], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-oms","new-patient-oms",-1963337357),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-oms-valid","new-patient-oms-valid",-230801562),(function (db,p__43624){
var vec__43625 = p__43624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43625,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43625,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-oms-update","new-patient-oms-update",311667071),(function (cofx,p__43628){
var vec__43629 = p__43628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43629,(0),null);
var oms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43629,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","oms","patients/oms",1712983590)], null),(function (old){
return oms;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-validation","new-patient-oms-validation",2035047883),oms], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-gender-valid","new-patient-gender-valid",1123157634),(function (db,p__43632){
var vec__43633 = p__43632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-gender-update","new-patient-gender-update",-257826869),(function (cofx,p__43636){
var vec__43637 = p__43636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43637,(0),null);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43637,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","gender","patients/gender",383440175)], null),(function (old){
return gender;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender-validation","new-patient-gender-validation",-779778741),gender], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-dob-valid","new-patient-dob-valid",-1659925714),(function (db,p__43640){
var vec__43641 = p__43640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43641,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43641,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-dob-update","new-patient-dob-update",74265302),(function (cofx,p__43644){
var vec__43645 = p__43644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43645,(0),null);
var dob = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43645,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","dob","patients/dob",1828103207)], null),(function (old){
return dob;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob-validation","new-patient-dob-validation",1920624550),dob], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-patient-address","new-patient-address",2099580455),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
}),(function (patient,_){
return new cljs.core.Keyword("patients","address","patients/address",-343819592).cljs$core$IFn$_invoke$arity$1(patient);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-address-valid","new-patient-address-valid",-95942502),(function (db,p__43648){
var vec__43649 = p__43648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(0),null);
var valid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43649,(1),null);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-patient-address-update","new-patient-address-update",-888463161),(function (cofx,p__43652){
var vec__43653 = p__43652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43653,(0),null);
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43653,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194),new cljs.core.Keyword("patients","address","patients/address",-343819592)], null),(function (old){
return address;
})),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address-validation","new-patient-address-validation",456318185),address], null)], null)], null);
}));

//# sourceMappingURL=app_events.js.map
