goog.provide('app_events');
app_events.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selected-patient","selected-patient",235217388),null,new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861),"http://localhost:8080/",new cljs.core.Keyword(null,"http-error","http-error",-1040049553),null], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-patients","add-patients",-66194917),(function (p__55065,_){
var map__55066 = p__55065;
var map__55066__$1 = cljs.core.__destructure_map(map__55066);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55066__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/create"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950),(function (p__55070,_){
var map__55071 = p__55070;
var map__55071__$1 = cljs.core.__destructure_map(map__55071);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55071__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950),(function (p__55072,_){
var map__55073 = p__55072;
var map__55073__$1 = cljs.core.__destructure_map(map__55073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55073__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950),(function (p__55077,_){
var map__55078 = p__55077;
var map__55078__$1 = cljs.core.__destructure_map(map__55078);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55078__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"beckend-uri","beckend-uri",-2122108861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_events.app_state))),"patients/get-all"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389)], null)], null)], null);
}));
app_events.cljsfy_vec = (function app_events$cljsfy_vec(in$){
var out = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(in$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55079_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__55079_SHARP_,new cljs.core.Keyword("patients","dob","patients/dob",1828103207),(function (old){
return (new Date(old));
}));
}),out);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-add-patients","success-add-patients",345775511),(function (db,p__55080){
var vec__55081 = p__55080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55081,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55081,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),cljs.core.conj.cljs$core$IFn$_invoke$arity$1(app_events.cljsfy_vec(response)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-http-response","failure-http-response",784546389),(function (db,p__55084){
var vec__55085 = p__55084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55085,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55085,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get-patients","success-get-patients",1728708002),(function (db,p__55088){
var vec__55090 = p__55088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55090,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55090,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"patients","patients",134252075),app_events.cljsfy_vec(response));
}));

//# sourceMappingURL=app_events.js.map
