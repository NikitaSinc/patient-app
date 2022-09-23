goog.provide('garden.core');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47193 = arguments.length;
var i__5770__auto___47194 = (0);
while(true){
if((i__5770__auto___47194 < len__5769__auto___47193)){
args__5775__auto__.push((arguments[i__5770__auto___47194]));

var G__47195 = (i__5770__auto___47194 + (1));
i__5770__auto___47194 = G__47195;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
}));

(garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.css.cljs$lang$applyTo = (function (seq47180){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47180));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47196 = arguments.length;
var i__5770__auto___47197 = (0);
while(true){
if((i__5770__auto___47197 < len__5769__auto___47196)){
args__5775__auto__.push((arguments[i__5770__auto___47197]));

var G__47198 = (i__5770__auto___47197 + (1));
i__5770__auto___47197 = G__47198;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
}));

(garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.style.cljs$lang$applyTo = (function (seq47182){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47182));
}));


//# sourceMappingURL=garden.core.js.map
