goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43080,p__43081){
var map__43082 = p__43080;
var map__43082__$1 = cljs.core.__destructure_map(map__43082);
var svc = map__43082__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43082__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43082__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43082__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43083 = p__43081;
var map__43083__$1 = cljs.core.__destructure_map(map__43083);
var msg = map__43083__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43083__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43083__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43083__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43083__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43086,p__43087){
var map__43088 = p__43086;
var map__43088__$1 = cljs.core.__destructure_map(map__43088);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43088__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43089 = p__43087;
var map__43089__$1 = cljs.core.__destructure_map(map__43089);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43089__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43098,p__43099){
var map__43101 = p__43098;
var map__43101__$1 = cljs.core.__destructure_map(map__43101);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43101__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43102 = p__43099;
var map__43102__$1 = cljs.core.__destructure_map(map__43102);
var msg = map__43102__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43102__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43106,tid){
var map__43107 = p__43106;
var map__43107__$1 = cljs.core.__destructure_map(map__43107);
var svc = map__43107__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43107__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43118 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43119 = null;
var count__43120 = (0);
var i__43121 = (0);
while(true){
if((i__43121 < count__43120)){
var vec__43135 = chunk__43119.cljs$core$IIndexed$_nth$arity$2(null,i__43121);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43135,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43135,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43283 = seq__43118;
var G__43284 = chunk__43119;
var G__43285 = count__43120;
var G__43286 = (i__43121 + (1));
seq__43118 = G__43283;
chunk__43119 = G__43284;
count__43120 = G__43285;
i__43121 = G__43286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43118);
if(temp__5804__auto__){
var seq__43118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43118__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43118__$1);
var G__43287 = cljs.core.chunk_rest(seq__43118__$1);
var G__43288 = c__5568__auto__;
var G__43289 = cljs.core.count(c__5568__auto__);
var G__43290 = (0);
seq__43118 = G__43287;
chunk__43119 = G__43288;
count__43120 = G__43289;
i__43121 = G__43290;
continue;
} else {
var vec__43140 = cljs.core.first(seq__43118__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43140,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43140,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43293 = cljs.core.next(seq__43118__$1);
var G__43294 = null;
var G__43295 = (0);
var G__43296 = (0);
seq__43118 = G__43293;
chunk__43119 = G__43294;
count__43120 = G__43295;
i__43121 = G__43296;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43109_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43109_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43110_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43110_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43112_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43112_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43113_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43113_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43147){
var map__43148 = p__43147;
var map__43148__$1 = cljs.core.__destructure_map(map__43148);
var svc = map__43148__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43148__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43148__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
