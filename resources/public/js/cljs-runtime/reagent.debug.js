goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__43486__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__43486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43491__i = 0, G__43491__a = new Array(arguments.length -  0);
while (G__43491__i < G__43491__a.length) {G__43491__a[G__43491__i] = arguments[G__43491__i + 0]; ++G__43491__i;}
  args = new cljs.core.IndexedSeq(G__43491__a,0,null);
} 
return G__43486__delegate.call(this,args);};
G__43486.cljs$lang$maxFixedArity = 0;
G__43486.cljs$lang$applyTo = (function (arglist__43492){
var args = cljs.core.seq(arglist__43492);
return G__43486__delegate(args);
});
G__43486.cljs$core$IFn$_invoke$arity$variadic = G__43486__delegate;
return G__43486;
})()
);

(o.error = (function() { 
var G__43493__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__43493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43494__i = 0, G__43494__a = new Array(arguments.length -  0);
while (G__43494__i < G__43494__a.length) {G__43494__a[G__43494__i] = arguments[G__43494__i + 0]; ++G__43494__i;}
  args = new cljs.core.IndexedSeq(G__43494__a,0,null);
} 
return G__43493__delegate.call(this,args);};
G__43493.cljs$lang$maxFixedArity = 0;
G__43493.cljs$lang$applyTo = (function (arglist__43496){
var args = cljs.core.seq(arglist__43496);
return G__43493__delegate(args);
});
G__43493.cljs$core$IFn$_invoke$arity$variadic = G__43493__delegate;
return G__43493;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
