goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__53568){
var map__53569 = p__53568;
var map__53569__$1 = cljs.core.__destructure_map(map__53569);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53569__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53569__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53569__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53569__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__53574_53691 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__53575_53692 = null;
var count__53576_53693 = (0);
var i__53577_53694 = (0);
while(true){
if((i__53577_53694 < count__53576_53693)){
var vec__53609_53695 = chunk__53575_53692.cljs$core$IIndexed$_nth$arity$2(null,i__53577_53694);
var k_53696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53609_53695,(0),null);
var cb_53697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53609_53695,(1),null);
try{var G__53625_53698 = cljs.core.deref(re_frame.trace.traces);
(cb_53697.cljs$core$IFn$_invoke$arity$1 ? cb_53697.cljs$core$IFn$_invoke$arity$1(G__53625_53698) : cb_53697.call(null,G__53625_53698));
}catch (e53618){var e_53699 = e53618;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53696,"while storing",cljs.core.deref(re_frame.trace.traces),e_53699], 0));
}

var G__53700 = seq__53574_53691;
var G__53701 = chunk__53575_53692;
var G__53702 = count__53576_53693;
var G__53703 = (i__53577_53694 + (1));
seq__53574_53691 = G__53700;
chunk__53575_53692 = G__53701;
count__53576_53693 = G__53702;
i__53577_53694 = G__53703;
continue;
} else {
var temp__5804__auto___53704 = cljs.core.seq(seq__53574_53691);
if(temp__5804__auto___53704){
var seq__53574_53705__$1 = temp__5804__auto___53704;
if(cljs.core.chunked_seq_QMARK_(seq__53574_53705__$1)){
var c__5568__auto___53706 = cljs.core.chunk_first(seq__53574_53705__$1);
var G__53707 = cljs.core.chunk_rest(seq__53574_53705__$1);
var G__53708 = c__5568__auto___53706;
var G__53709 = cljs.core.count(c__5568__auto___53706);
var G__53710 = (0);
seq__53574_53691 = G__53707;
chunk__53575_53692 = G__53708;
count__53576_53693 = G__53709;
i__53577_53694 = G__53710;
continue;
} else {
var vec__53666_53711 = cljs.core.first(seq__53574_53705__$1);
var k_53712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53666_53711,(0),null);
var cb_53713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53666_53711,(1),null);
try{var G__53672_53714 = cljs.core.deref(re_frame.trace.traces);
(cb_53713.cljs$core$IFn$_invoke$arity$1 ? cb_53713.cljs$core$IFn$_invoke$arity$1(G__53672_53714) : cb_53713.call(null,G__53672_53714));
}catch (e53670){var e_53715 = e53670;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53712,"while storing",cljs.core.deref(re_frame.trace.traces),e_53715], 0));
}

var G__53716 = cljs.core.next(seq__53574_53705__$1);
var G__53717 = null;
var G__53718 = (0);
var G__53719 = (0);
seq__53574_53691 = G__53716;
chunk__53575_53692 = G__53717;
count__53576_53693 = G__53718;
i__53577_53694 = G__53719;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
