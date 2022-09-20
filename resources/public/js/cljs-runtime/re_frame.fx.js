goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46154 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46155 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46155);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___46421 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___46421)){
var new_db_46422 = temp__5804__auto___46421;
var fexpr__46159_46423 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46159_46423.cljs$core$IFn$_invoke$arity$1 ? fexpr__46159_46423.cljs$core$IFn$_invoke$arity$1(new_db_46422) : fexpr__46159_46423.call(null,new_db_46422));
} else {
}

var seq__46160 = cljs.core.seq(effects_without_db);
var chunk__46161 = null;
var count__46162 = (0);
var i__46163 = (0);
while(true){
if((i__46163 < count__46162)){
var vec__46181 = chunk__46161.cljs$core$IIndexed$_nth$arity$2(null,i__46163);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46181,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46181,(1),null);
var temp__5802__auto___46425 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___46425)){
var effect_fn_46426 = temp__5802__auto___46425;
(effect_fn_46426.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46426.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46426.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46427 = seq__46160;
var G__46428 = chunk__46161;
var G__46429 = count__46162;
var G__46430 = (i__46163 + (1));
seq__46160 = G__46427;
chunk__46161 = G__46428;
count__46162 = G__46429;
i__46163 = G__46430;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46160);
if(temp__5804__auto__){
var seq__46160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46160__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46160__$1);
var G__46431 = cljs.core.chunk_rest(seq__46160__$1);
var G__46432 = c__5568__auto__;
var G__46433 = cljs.core.count(c__5568__auto__);
var G__46434 = (0);
seq__46160 = G__46431;
chunk__46161 = G__46432;
count__46162 = G__46433;
i__46163 = G__46434;
continue;
} else {
var vec__46201 = cljs.core.first(seq__46160__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(1),null);
var temp__5802__auto___46439 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___46439)){
var effect_fn_46440 = temp__5802__auto___46439;
(effect_fn_46440.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46440.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46440.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46444 = cljs.core.next(seq__46160__$1);
var G__46445 = null;
var G__46446 = (0);
var G__46447 = (0);
seq__46160 = G__46444;
chunk__46161 = G__46445;
count__46162 = G__46446;
i__46163 = G__46447;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45633__auto___46450 = re_frame.interop.now();
var duration__45634__auto___46451 = (end__45633__auto___46450 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45634__auto___46451,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45633__auto___46450);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46154);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___46456 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___46456)){
var new_db_46457 = temp__5804__auto___46456;
var fexpr__46227_46458 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46227_46458.cljs$core$IFn$_invoke$arity$1 ? fexpr__46227_46458.cljs$core$IFn$_invoke$arity$1(new_db_46457) : fexpr__46227_46458.call(null,new_db_46457));
} else {
}

var seq__46229 = cljs.core.seq(effects_without_db);
var chunk__46230 = null;
var count__46231 = (0);
var i__46232 = (0);
while(true){
if((i__46232 < count__46231)){
var vec__46251 = chunk__46230.cljs$core$IIndexed$_nth$arity$2(null,i__46232);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46251,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46251,(1),null);
var temp__5802__auto___46459 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___46459)){
var effect_fn_46460 = temp__5802__auto___46459;
(effect_fn_46460.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46460.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46460.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46461 = seq__46229;
var G__46462 = chunk__46230;
var G__46463 = count__46231;
var G__46464 = (i__46232 + (1));
seq__46229 = G__46461;
chunk__46230 = G__46462;
count__46231 = G__46463;
i__46232 = G__46464;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46229);
if(temp__5804__auto__){
var seq__46229__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46229__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46229__$1);
var G__46467 = cljs.core.chunk_rest(seq__46229__$1);
var G__46468 = c__5568__auto__;
var G__46469 = cljs.core.count(c__5568__auto__);
var G__46470 = (0);
seq__46229 = G__46467;
chunk__46230 = G__46468;
count__46231 = G__46469;
i__46232 = G__46470;
continue;
} else {
var vec__46269 = cljs.core.first(seq__46229__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46269,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46269,(1),null);
var temp__5802__auto___46471 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___46471)){
var effect_fn_46472 = temp__5802__auto___46471;
(effect_fn_46472.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46472.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46472.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46473 = cljs.core.next(seq__46229__$1);
var G__46474 = null;
var G__46475 = (0);
var G__46476 = (0);
seq__46229 = G__46473;
chunk__46230 = G__46474;
count__46231 = G__46475;
i__46232 = G__46476;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__46279){
var map__46281 = p__46279;
var map__46281__$1 = cljs.core.__destructure_map(map__46281);
var effect = map__46281__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__46287 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46288 = null;
var count__46289 = (0);
var i__46290 = (0);
while(true){
if((i__46290 < count__46289)){
var effect = chunk__46288.cljs$core$IIndexed$_nth$arity$2(null,i__46290);
re_frame.fx.dispatch_later(effect);


var G__46481 = seq__46287;
var G__46482 = chunk__46288;
var G__46483 = count__46289;
var G__46484 = (i__46290 + (1));
seq__46287 = G__46481;
chunk__46288 = G__46482;
count__46289 = G__46483;
i__46290 = G__46484;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46287);
if(temp__5804__auto__){
var seq__46287__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46287__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46287__$1);
var G__46488 = cljs.core.chunk_rest(seq__46287__$1);
var G__46489 = c__5568__auto__;
var G__46490 = cljs.core.count(c__5568__auto__);
var G__46491 = (0);
seq__46287 = G__46488;
chunk__46288 = G__46489;
count__46289 = G__46490;
i__46290 = G__46491;
continue;
} else {
var effect = cljs.core.first(seq__46287__$1);
re_frame.fx.dispatch_later(effect);


var G__46493 = cljs.core.next(seq__46287__$1);
var G__46494 = null;
var G__46495 = (0);
var G__46496 = (0);
seq__46287 = G__46493;
chunk__46288 = G__46494;
count__46289 = G__46495;
i__46290 = G__46496;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__46300 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__46301 = null;
var count__46302 = (0);
var i__46303 = (0);
while(true){
if((i__46303 < count__46302)){
var vec__46314 = chunk__46301.cljs$core$IIndexed$_nth$arity$2(null,i__46303);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46314,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46314,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___46498 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___46498)){
var effect_fn_46499 = temp__5802__auto___46498;
(effect_fn_46499.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46499.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46499.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46504 = seq__46300;
var G__46505 = chunk__46301;
var G__46506 = count__46302;
var G__46507 = (i__46303 + (1));
seq__46300 = G__46504;
chunk__46301 = G__46505;
count__46302 = G__46506;
i__46303 = G__46507;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46300);
if(temp__5804__auto__){
var seq__46300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46300__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46300__$1);
var G__46512 = cljs.core.chunk_rest(seq__46300__$1);
var G__46513 = c__5568__auto__;
var G__46514 = cljs.core.count(c__5568__auto__);
var G__46515 = (0);
seq__46300 = G__46512;
chunk__46301 = G__46513;
count__46302 = G__46514;
i__46303 = G__46515;
continue;
} else {
var vec__46333 = cljs.core.first(seq__46300__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___46519 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___46519)){
var effect_fn_46520 = temp__5802__auto___46519;
(effect_fn_46520.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46520.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46520.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46522 = cljs.core.next(seq__46300__$1);
var G__46523 = null;
var G__46524 = (0);
var G__46525 = (0);
seq__46300 = G__46522;
chunk__46301 = G__46523;
count__46302 = G__46524;
i__46303 = G__46525;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46344 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46345 = null;
var count__46346 = (0);
var i__46347 = (0);
while(true){
if((i__46347 < count__46346)){
var event = chunk__46345.cljs$core$IIndexed$_nth$arity$2(null,i__46347);
re_frame.router.dispatch(event);


var G__46528 = seq__46344;
var G__46529 = chunk__46345;
var G__46530 = count__46346;
var G__46531 = (i__46347 + (1));
seq__46344 = G__46528;
chunk__46345 = G__46529;
count__46346 = G__46530;
i__46347 = G__46531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46344);
if(temp__5804__auto__){
var seq__46344__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46344__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46344__$1);
var G__46536 = cljs.core.chunk_rest(seq__46344__$1);
var G__46537 = c__5568__auto__;
var G__46538 = cljs.core.count(c__5568__auto__);
var G__46539 = (0);
seq__46344 = G__46536;
chunk__46345 = G__46537;
count__46346 = G__46538;
i__46347 = G__46539;
continue;
} else {
var event = cljs.core.first(seq__46344__$1);
re_frame.router.dispatch(event);


var G__46540 = cljs.core.next(seq__46344__$1);
var G__46541 = null;
var G__46542 = (0);
var G__46543 = (0);
seq__46344 = G__46540;
chunk__46345 = G__46541;
count__46346 = G__46542;
i__46347 = G__46543;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46369 = cljs.core.seq(value);
var chunk__46370 = null;
var count__46371 = (0);
var i__46372 = (0);
while(true){
if((i__46372 < count__46371)){
var event = chunk__46370.cljs$core$IIndexed$_nth$arity$2(null,i__46372);
clear_event(event);


var G__46548 = seq__46369;
var G__46549 = chunk__46370;
var G__46550 = count__46371;
var G__46551 = (i__46372 + (1));
seq__46369 = G__46548;
chunk__46370 = G__46549;
count__46371 = G__46550;
i__46372 = G__46551;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46369);
if(temp__5804__auto__){
var seq__46369__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46369__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46369__$1);
var G__46556 = cljs.core.chunk_rest(seq__46369__$1);
var G__46557 = c__5568__auto__;
var G__46558 = cljs.core.count(c__5568__auto__);
var G__46559 = (0);
seq__46369 = G__46556;
chunk__46370 = G__46557;
count__46371 = G__46558;
i__46372 = G__46559;
continue;
} else {
var event = cljs.core.first(seq__46369__$1);
clear_event(event);


var G__46561 = cljs.core.next(seq__46369__$1);
var G__46562 = null;
var G__46563 = (0);
var G__46564 = (0);
seq__46369 = G__46561;
chunk__46370 = G__46562;
count__46371 = G__46563;
i__46372 = G__46564;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
