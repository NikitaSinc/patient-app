goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51959,p__51960){
var map__51961 = p__51959;
var map__51961__$1 = cljs.core.__destructure_map(map__51961);
var svc = map__51961__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51961__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51961__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51961__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51962 = p__51960;
var map__51962__$1 = cljs.core.__destructure_map(map__51962);
var msg = map__51962__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51962__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51962__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51965,p__51966){
var map__51967 = p__51965;
var map__51967__$1 = cljs.core.__destructure_map(map__51967);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51967__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51968 = p__51966;
var map__51968__$1 = cljs.core.__destructure_map(map__51968);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51971,p__51972){
var map__51973 = p__51971;
var map__51973__$1 = cljs.core.__destructure_map(map__51973);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51974 = p__51972;
var map__51974__$1 = cljs.core.__destructure_map(map__51974);
var msg = map__51974__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51974__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51981,tid){
var map__51983 = p__51981;
var map__51983__$1 = cljs.core.__destructure_map(map__51983);
var svc = map__51983__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51983__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__52116 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__52117 = null;
var count__52118 = (0);
var i__52119 = (0);
while(true){
if((i__52119 < count__52118)){
var vec__52151 = chunk__52117.cljs$core$IIndexed$_nth$arity$2(null,i__52119);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52151,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52151,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52271 = seq__52116;
var G__52272 = chunk__52117;
var G__52273 = count__52118;
var G__52274 = (i__52119 + (1));
seq__52116 = G__52271;
chunk__52117 = G__52272;
count__52118 = G__52273;
i__52119 = G__52274;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52116);
if(temp__5804__auto__){
var seq__52116__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52116__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52116__$1);
var G__52276 = cljs.core.chunk_rest(seq__52116__$1);
var G__52277 = c__5568__auto__;
var G__52278 = cljs.core.count(c__5568__auto__);
var G__52279 = (0);
seq__52116 = G__52276;
chunk__52117 = G__52277;
count__52118 = G__52278;
i__52119 = G__52279;
continue;
} else {
var vec__52171 = cljs.core.first(seq__52116__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52171,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52171,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52285 = cljs.core.next(seq__52116__$1);
var G__52286 = null;
var G__52287 = (0);
var G__52288 = (0);
seq__52116 = G__52285;
chunk__52117 = G__52286;
count__52118 = G__52287;
i__52119 = G__52288;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51984_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51984_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51985_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51985_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51986_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51986_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51987_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51987_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__52192){
var map__52193 = p__52192;
var map__52193__$1 = cljs.core.__destructure_map(map__52193);
var svc = map__52193__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52193__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52193__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
