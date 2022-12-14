goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__50789,res){
var map__50791 = p__50789;
var map__50791__$1 = cljs.core.__destructure_map(map__50791);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50791__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50791__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__50799 = res;
var G__50799__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50799,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__50799);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50799__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__50799__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__50810 = arguments.length;
switch (G__50810) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__50821,msg,handlers,timeout_after_ms){
var map__50822 = p__50821;
var map__50822__$1 = cljs.core.__destructure_map(map__50822);
var runtime = map__50822__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50822__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51288 = arguments.length;
var i__5770__auto___51289 = (0);
while(true){
if((i__5770__auto___51289 < len__5769__auto___51288)){
args__5775__auto__.push((arguments[i__5770__auto___51289]));

var G__51296 = (i__5770__auto___51289 + (1));
i__5770__auto___51289 = G__51296;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__50843,ev,args){
var map__50844 = p__50843;
var map__50844__$1 = cljs.core.__destructure_map(map__50844);
var runtime = map__50844__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__50849 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__50852 = null;
var count__50853 = (0);
var i__50854 = (0);
while(true){
if((i__50854 < count__50853)){
var ext = chunk__50852.cljs$core$IIndexed$_nth$arity$2(null,i__50854);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__51300 = seq__50849;
var G__51301 = chunk__50852;
var G__51302 = count__50853;
var G__51303 = (i__50854 + (1));
seq__50849 = G__51300;
chunk__50852 = G__51301;
count__50853 = G__51302;
i__50854 = G__51303;
continue;
} else {
var G__51307 = seq__50849;
var G__51308 = chunk__50852;
var G__51309 = count__50853;
var G__51310 = (i__50854 + (1));
seq__50849 = G__51307;
chunk__50852 = G__51308;
count__50853 = G__51309;
i__50854 = G__51310;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50849);
if(temp__5804__auto__){
var seq__50849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50849__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50849__$1);
var G__51312 = cljs.core.chunk_rest(seq__50849__$1);
var G__51313 = c__5568__auto__;
var G__51314 = cljs.core.count(c__5568__auto__);
var G__51315 = (0);
seq__50849 = G__51312;
chunk__50852 = G__51313;
count__50853 = G__51314;
i__50854 = G__51315;
continue;
} else {
var ext = cljs.core.first(seq__50849__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__51318 = cljs.core.next(seq__50849__$1);
var G__51319 = null;
var G__51320 = (0);
var G__51321 = (0);
seq__50849 = G__51318;
chunk__50852 = G__51319;
count__50853 = G__51320;
i__50854 = G__51321;
continue;
} else {
var G__51322 = cljs.core.next(seq__50849__$1);
var G__51323 = null;
var G__51324 = (0);
var G__51325 = (0);
seq__50849 = G__51322;
chunk__50852 = G__51323;
count__50853 = G__51324;
i__50854 = G__51325;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq50833){
var G__50834 = cljs.core.first(seq50833);
var seq50833__$1 = cljs.core.next(seq50833);
var G__50835 = cljs.core.first(seq50833__$1);
var seq50833__$2 = cljs.core.next(seq50833__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50834,G__50835,seq50833__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__50893,p__50894){
var map__50897 = p__50893;
var map__50897__$1 = cljs.core.__destructure_map(map__50897);
var runtime = map__50897__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__50899 = p__50894;
var map__50899__$1 = cljs.core.__destructure_map(map__50899);
var msg = map__50899__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50899__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__50905 = cljs.core.deref(state_ref);
var map__50905__$1 = cljs.core.__destructure_map(map__50905);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50905__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50905__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__50915){
var map__50916 = p__50915;
var map__50916__$1 = cljs.core.__destructure_map(map__50916);
var runtime = map__50916__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50916__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__50945,msg){
var map__50952 = p__50945;
var map__50952__$1 = cljs.core.__destructure_map(map__50952);
var runtime = map__50952__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50952__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__50991,key,p__50992){
var map__50993 = p__50991;
var map__50993__$1 = cljs.core.__destructure_map(map__50993);
var state = map__50993__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50993__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__50994 = p__50992;
var map__50994__$1 = cljs.core.__destructure_map(map__50994);
var spec = map__50994__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50994__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__51005,key,spec){
var map__51010 = p__51005;
var map__51010__$1 = cljs.core.__destructure_map(map__51010);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51010__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__51027_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__51027_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__51028_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__51028_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__51029_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__51029_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__51030_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__51030_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__51031_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__51031_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__51110,key){
var map__51111 = p__51110;
var map__51111__$1 = cljs.core.__destructure_map(map__51111);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51111__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__51151,msg){
var map__51152 = p__51151;
var map__51152__$1 = cljs.core.__destructure_map(map__51152);
var runtime = map__51152__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51152__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__51169,p__51170){
var map__51173 = p__51169;
var map__51173__$1 = cljs.core.__destructure_map(map__51173);
var runtime = map__51173__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51173__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51174 = p__51170;
var map__51174__$1 = cljs.core.__destructure_map(map__51174);
var msg = map__51174__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51174__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__51203 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51205 = null;
var count__51206 = (0);
var i__51207 = (0);
while(true){
if((i__51207 < count__51206)){
var map__51221 = chunk__51205.cljs$core$IIndexed$_nth$arity$2(null,i__51207);
var map__51221__$1 = cljs.core.__destructure_map(map__51221);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51221__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__51373 = seq__51203;
var G__51374 = chunk__51205;
var G__51375 = count__51206;
var G__51376 = (i__51207 + (1));
seq__51203 = G__51373;
chunk__51205 = G__51374;
count__51206 = G__51375;
i__51207 = G__51376;
continue;
} else {
var G__51378 = seq__51203;
var G__51379 = chunk__51205;
var G__51380 = count__51206;
var G__51381 = (i__51207 + (1));
seq__51203 = G__51378;
chunk__51205 = G__51379;
count__51206 = G__51380;
i__51207 = G__51381;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51203);
if(temp__5804__auto__){
var seq__51203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51203__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51203__$1);
var G__51387 = cljs.core.chunk_rest(seq__51203__$1);
var G__51388 = c__5568__auto__;
var G__51389 = cljs.core.count(c__5568__auto__);
var G__51390 = (0);
seq__51203 = G__51387;
chunk__51205 = G__51388;
count__51206 = G__51389;
i__51207 = G__51390;
continue;
} else {
var map__51233 = cljs.core.first(seq__51203__$1);
var map__51233__$1 = cljs.core.__destructure_map(map__51233);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51233__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__51397 = cljs.core.next(seq__51203__$1);
var G__51398 = null;
var G__51399 = (0);
var G__51400 = (0);
seq__51203 = G__51397;
chunk__51205 = G__51398;
count__51206 = G__51399;
i__51207 = G__51400;
continue;
} else {
var G__51402 = cljs.core.next(seq__51203__$1);
var G__51403 = null;
var G__51404 = (0);
var G__51405 = (0);
seq__51203 = G__51402;
chunk__51205 = G__51403;
count__51206 = G__51404;
i__51207 = G__51405;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
