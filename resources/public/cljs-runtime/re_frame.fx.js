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
var _STAR_current_trace_STAR__orig_val__25994 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25995 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25995);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___26211 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___26211)){
var new_db_26212 = temp__5804__auto___26211;
var fexpr__25996_26213 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25996_26213.cljs$core$IFn$_invoke$arity$1 ? fexpr__25996_26213.cljs$core$IFn$_invoke$arity$1(new_db_26212) : fexpr__25996_26213.call(null,new_db_26212));
} else {
}

var seq__26001 = cljs.core.seq(effects_without_db);
var chunk__26002 = null;
var count__26003 = (0);
var i__26004 = (0);
while(true){
if((i__26004 < count__26003)){
var vec__26015 = chunk__26002.cljs$core$IIndexed$_nth$arity$2(null,i__26004);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26015,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26015,(1),null);
var temp__5802__auto___26221 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26221)){
var effect_fn_26223 = temp__5802__auto___26221;
(effect_fn_26223.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26223.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26223.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26224 = seq__26001;
var G__26225 = chunk__26002;
var G__26226 = count__26003;
var G__26227 = (i__26004 + (1));
seq__26001 = G__26224;
chunk__26002 = G__26225;
count__26003 = G__26226;
i__26004 = G__26227;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26001);
if(temp__5804__auto__){
var seq__26001__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26001__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26001__$1);
var G__26232 = cljs.core.chunk_rest(seq__26001__$1);
var G__26233 = c__5568__auto__;
var G__26234 = cljs.core.count(c__5568__auto__);
var G__26235 = (0);
seq__26001 = G__26232;
chunk__26002 = G__26233;
count__26003 = G__26234;
i__26004 = G__26235;
continue;
} else {
var vec__26019 = cljs.core.first(seq__26001__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26019,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26019,(1),null);
var temp__5802__auto___26236 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26236)){
var effect_fn_26237 = temp__5802__auto___26236;
(effect_fn_26237.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26237.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26237.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26239 = cljs.core.next(seq__26001__$1);
var G__26240 = null;
var G__26241 = (0);
var G__26242 = (0);
seq__26001 = G__26239;
chunk__26002 = G__26240;
count__26003 = G__26241;
i__26004 = G__26242;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__25191__auto___26243 = re_frame.interop.now();
var duration__25192__auto___26244 = (end__25191__auto___26243 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25192__auto___26244,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__25191__auto___26243);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25994);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___26245 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___26245)){
var new_db_26246 = temp__5804__auto___26245;
var fexpr__26034_26247 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26034_26247.cljs$core$IFn$_invoke$arity$1 ? fexpr__26034_26247.cljs$core$IFn$_invoke$arity$1(new_db_26246) : fexpr__26034_26247.call(null,new_db_26246));
} else {
}

var seq__26035 = cljs.core.seq(effects_without_db);
var chunk__26036 = null;
var count__26037 = (0);
var i__26038 = (0);
while(true){
if((i__26038 < count__26037)){
var vec__26050 = chunk__26036.cljs$core$IIndexed$_nth$arity$2(null,i__26038);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26050,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26050,(1),null);
var temp__5802__auto___26251 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26251)){
var effect_fn_26252 = temp__5802__auto___26251;
(effect_fn_26252.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26252.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26252.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26253 = seq__26035;
var G__26254 = chunk__26036;
var G__26255 = count__26037;
var G__26256 = (i__26038 + (1));
seq__26035 = G__26253;
chunk__26036 = G__26254;
count__26037 = G__26255;
i__26038 = G__26256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26035);
if(temp__5804__auto__){
var seq__26035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26035__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26035__$1);
var G__26257 = cljs.core.chunk_rest(seq__26035__$1);
var G__26258 = c__5568__auto__;
var G__26259 = cljs.core.count(c__5568__auto__);
var G__26260 = (0);
seq__26035 = G__26257;
chunk__26036 = G__26258;
count__26037 = G__26259;
i__26038 = G__26260;
continue;
} else {
var vec__26056 = cljs.core.first(seq__26035__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26056,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26056,(1),null);
var temp__5802__auto___26261 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26261)){
var effect_fn_26262 = temp__5802__auto___26261;
(effect_fn_26262.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26262.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26262.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26266 = cljs.core.next(seq__26035__$1);
var G__26267 = null;
var G__26268 = (0);
var G__26269 = (0);
seq__26035 = G__26266;
chunk__26036 = G__26267;
count__26037 = G__26268;
i__26038 = G__26269;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26064){
var map__26066 = p__26064;
var map__26066__$1 = cljs.core.__destructure_map(map__26066);
var effect = map__26066__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26066__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26066__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26070 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26071 = null;
var count__26072 = (0);
var i__26073 = (0);
while(true){
if((i__26073 < count__26072)){
var effect = chunk__26071.cljs$core$IIndexed$_nth$arity$2(null,i__26073);
re_frame.fx.dispatch_later(effect);


var G__26273 = seq__26070;
var G__26274 = chunk__26071;
var G__26275 = count__26072;
var G__26276 = (i__26073 + (1));
seq__26070 = G__26273;
chunk__26071 = G__26274;
count__26072 = G__26275;
i__26073 = G__26276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26070);
if(temp__5804__auto__){
var seq__26070__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26070__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26070__$1);
var G__26277 = cljs.core.chunk_rest(seq__26070__$1);
var G__26278 = c__5568__auto__;
var G__26279 = cljs.core.count(c__5568__auto__);
var G__26280 = (0);
seq__26070 = G__26277;
chunk__26071 = G__26278;
count__26072 = G__26279;
i__26073 = G__26280;
continue;
} else {
var effect = cljs.core.first(seq__26070__$1);
re_frame.fx.dispatch_later(effect);


var G__26281 = cljs.core.next(seq__26070__$1);
var G__26282 = null;
var G__26283 = (0);
var G__26284 = (0);
seq__26070 = G__26281;
chunk__26071 = G__26282;
count__26072 = G__26283;
i__26073 = G__26284;
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
var seq__26087 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26088 = null;
var count__26089 = (0);
var i__26090 = (0);
while(true){
if((i__26090 < count__26089)){
var vec__26112 = chunk__26088.cljs$core$IIndexed$_nth$arity$2(null,i__26090);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26112,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___26295 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26295)){
var effect_fn_26296 = temp__5802__auto___26295;
(effect_fn_26296.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26296.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26296.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26298 = seq__26087;
var G__26299 = chunk__26088;
var G__26300 = count__26089;
var G__26301 = (i__26090 + (1));
seq__26087 = G__26298;
chunk__26088 = G__26299;
count__26089 = G__26300;
i__26090 = G__26301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26087);
if(temp__5804__auto__){
var seq__26087__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26087__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26087__$1);
var G__26306 = cljs.core.chunk_rest(seq__26087__$1);
var G__26307 = c__5568__auto__;
var G__26308 = cljs.core.count(c__5568__auto__);
var G__26309 = (0);
seq__26087 = G__26306;
chunk__26088 = G__26307;
count__26089 = G__26308;
i__26090 = G__26309;
continue;
} else {
var vec__26120 = cljs.core.first(seq__26087__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26120,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26120,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___26311 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26311)){
var effect_fn_26315 = temp__5802__auto___26311;
(effect_fn_26315.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26315.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26315.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26317 = cljs.core.next(seq__26087__$1);
var G__26318 = null;
var G__26319 = (0);
var G__26320 = (0);
seq__26087 = G__26317;
chunk__26088 = G__26318;
count__26089 = G__26319;
i__26090 = G__26320;
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
var seq__26130 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26131 = null;
var count__26132 = (0);
var i__26133 = (0);
while(true){
if((i__26133 < count__26132)){
var event = chunk__26131.cljs$core$IIndexed$_nth$arity$2(null,i__26133);
re_frame.router.dispatch(event);


var G__26323 = seq__26130;
var G__26324 = chunk__26131;
var G__26325 = count__26132;
var G__26326 = (i__26133 + (1));
seq__26130 = G__26323;
chunk__26131 = G__26324;
count__26132 = G__26325;
i__26133 = G__26326;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26130);
if(temp__5804__auto__){
var seq__26130__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26130__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26130__$1);
var G__26328 = cljs.core.chunk_rest(seq__26130__$1);
var G__26329 = c__5568__auto__;
var G__26330 = cljs.core.count(c__5568__auto__);
var G__26331 = (0);
seq__26130 = G__26328;
chunk__26131 = G__26329;
count__26132 = G__26330;
i__26133 = G__26331;
continue;
} else {
var event = cljs.core.first(seq__26130__$1);
re_frame.router.dispatch(event);


var G__26332 = cljs.core.next(seq__26130__$1);
var G__26333 = null;
var G__26334 = (0);
var G__26335 = (0);
seq__26130 = G__26332;
chunk__26131 = G__26333;
count__26132 = G__26334;
i__26133 = G__26335;
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
var seq__26166 = cljs.core.seq(value);
var chunk__26167 = null;
var count__26168 = (0);
var i__26169 = (0);
while(true){
if((i__26169 < count__26168)){
var event = chunk__26167.cljs$core$IIndexed$_nth$arity$2(null,i__26169);
clear_event(event);


var G__26336 = seq__26166;
var G__26337 = chunk__26167;
var G__26338 = count__26168;
var G__26339 = (i__26169 + (1));
seq__26166 = G__26336;
chunk__26167 = G__26337;
count__26168 = G__26338;
i__26169 = G__26339;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26166);
if(temp__5804__auto__){
var seq__26166__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26166__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26166__$1);
var G__26343 = cljs.core.chunk_rest(seq__26166__$1);
var G__26344 = c__5568__auto__;
var G__26345 = cljs.core.count(c__5568__auto__);
var G__26346 = (0);
seq__26166 = G__26343;
chunk__26167 = G__26344;
count__26168 = G__26345;
i__26169 = G__26346;
continue;
} else {
var event = cljs.core.first(seq__26166__$1);
clear_event(event);


var G__26347 = cljs.core.next(seq__26166__$1);
var G__26348 = null;
var G__26349 = (0);
var G__26350 = (0);
seq__26166 = G__26347;
chunk__26167 = G__26348;
count__26168 = G__26349;
i__26169 = G__26350;
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
