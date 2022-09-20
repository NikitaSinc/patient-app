goog.provide('stylo.util');
stylo.util.format = (function stylo$util$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46861 = arguments.length;
var i__5770__auto___46862 = (0);
while(true){
if((i__5770__auto___46862 < len__5769__auto___46861)){
args__5775__auto__.push((arguments[i__5770__auto___46862]));

var G__46863 = (i__5770__auto___46862 + (1));
i__5770__auto___46862 = G__46863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stylo.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stylo.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(stylo.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylo.util.format.cljs$lang$applyTo = (function (seq46809){
var G__46810 = cljs.core.first(seq46809);
var seq46809__$1 = cljs.core.next(seq46809);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46810,seq46809__$1);
}));

stylo.util.with_alpha = (function stylo$util$with_alpha(color,variable){
var temp__5802__auto__ = garden.color.hex__GT_rgb(color);
if(cljs.core.truth_(temp__5802__auto__)){
var map__46830 = temp__5802__auto__;
var map__46830__$1 = cljs.core.__destructure_map(map__46830);
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46830__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46830__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46830__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
return stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("rgba(%d,%d,%d,var(%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([red,green,blue,cljs.core.name(variable)], 0));
} else {
return color;
}
});
stylo.util.str_ratio_QMARK_ = (function stylo$util$str_ratio_QMARK_(s){
var and__5043__auto__ = typeof s === 'string';
if(and__5043__auto__){
return cljs.core.re_matches(/(-?\d+)\/(\d+)/,s);
} else {
return and__5043__auto__;
}
});
stylo.util.parse_str_ratio = (function stylo$util$parse_str_ratio(s){
var vec__46844 = cljs.core.re_matches(/(-?\d+)\/(\d+)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844,(2),null);
return (parseFloat(n) / parseFloat(d));
});
stylo.util.as_unit = (function stylo$util$as_unit(var_args){
var G__46850 = arguments.length;
switch (G__46850) {
case 1:
return stylo.util.as_unit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$1 = (function (v){
return stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"rem","rem",-976484757));
}));

(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2 = (function (v,preferred_unit){
if(garden.units.unit_QMARK_(v)){
return v;
} else {
if(cljs.core.truth_(stylo.util.str_ratio_QMARK_(v))){
return garden.units.percent(((100) * stylo.util.parse_str_ratio(v)));
} else {
if(typeof v === 'string'){
return v;
} else {
var G__46858 = preferred_unit;
var G__46858__$1 = (((G__46858 instanceof cljs.core.Keyword))?G__46858.fqn:null);
switch (G__46858__$1) {
case "ms":
return garden.units.ms(v);

break;
case "px":
return garden.units.px(v);

break;
case "deg":
return garden.units.deg(v);

break;
case "rem":
return garden.units.rem((v * 0.25));

break;
case "percent":
return garden.units.percent(v);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46858__$1)].join('')));

}

}
}
}
}));

(stylo.util.as_unit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=stylo.util.js.map
