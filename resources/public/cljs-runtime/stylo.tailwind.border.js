goog.provide('stylo.tailwind.border');
stylo.tailwind.border.rounded_size = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"none","none",1333468478),"0",new cljs.core.Keyword(null,"sm","sm",-1402575065),"0.125rem",new cljs.core.Keyword(null,"md","md",707286655),"0.375rem",new cljs.core.Keyword(null,"lg","lg",-80787836),"0.5rem",new cljs.core.Keyword(null,"xl","xl",-1689552936),"0.75rem",new cljs.core.Keyword(null,"full","full",436801220),"9999px"], null);
stylo.tailwind.border.rounded = (function stylo$tailwind$border$rounded(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55016 = arguments.length;
var i__5770__auto___55017 = (0);
while(true){
if((i__5770__auto___55017 < len__5769__auto___55016)){
args__5775__auto__.push((arguments[i__5770__auto___55017]));

var G__55018 = (i__5770__auto___55017 + (1));
i__5770__auto___55017 = G__55018;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic = (function (x,keys){
var x__$1 = (((x == null))?"0.25rem":((cljs.core.int_QMARK_(x))?stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)):(stylo.tailwind.border.rounded_size.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.border.rounded_size.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.border.rounded_size.call(null,x))
));
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x__$1));
}));

(stylo.tailwind.border.rounded.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylo.tailwind.border.rounded.cljs$lang$applyTo = (function (seq54691){
var G__54692 = cljs.core.first(seq54691);
var seq54691__$1 = cljs.core.next(seq54691);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54692,seq54691__$1);
}));

stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded","rounded",85415706),(function() {
var G__55021 = null;
var G__55021__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
var G__55021__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
G__55021 = function(_,x){
switch(arguments.length){
case 1:
return G__55021__1.call(this,_);
case 2:
return G__55021__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55021.cljs$core$IFn$_invoke$arity$1 = G__55021__1;
G__55021.cljs$core$IFn$_invoke$arity$2 = G__55021__2;
return G__55021;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-t","rounded-t",-2048541791),(function() {
var G__55022 = null;
var G__55022__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__55022__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__55022 = function(_,x){
switch(arguments.length){
case 1:
return G__55022__1.call(this,_);
case 2:
return G__55022__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55022.cljs$core$IFn$_invoke$arity$1 = G__55022__1;
G__55022.cljs$core$IFn$_invoke$arity$2 = G__55022__2;
return G__55022;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-r","rounded-r",-197111461),(function() {
var G__55023 = null;
var G__55023__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__55023__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__55023 = function(_,x){
switch(arguments.length){
case 1:
return G__55023__1.call(this,_);
case 2:
return G__55023__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55023.cljs$core$IFn$_invoke$arity$1 = G__55023__1;
G__55023.cljs$core$IFn$_invoke$arity$2 = G__55023__2;
return G__55023;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-b","rounded-b",-765352328),(function() {
var G__55024 = null;
var G__55024__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__55024__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__55024 = function(_,x){
switch(arguments.length){
case 1:
return G__55024__1.call(this,_);
case 2:
return G__55024__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55024.cljs$core$IFn$_invoke$arity$1 = G__55024__1;
G__55024.cljs$core$IFn$_invoke$arity$2 = G__55024__2;
return G__55024;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-l","rounded-l",1639486971),(function() {
var G__55025 = null;
var G__55025__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__55025__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__55025 = function(_,x){
switch(arguments.length){
case 1:
return G__55025__1.call(this,_);
case 2:
return G__55025__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55025.cljs$core$IFn$_invoke$arity$1 = G__55025__1;
G__55025.cljs$core$IFn$_invoke$arity$2 = G__55025__2;
return G__55025;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tl","rounded-tl",-649211256),(function() {
var G__55026 = null;
var G__55026__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
var G__55026__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
G__55026 = function(_,x){
switch(arguments.length){
case 1:
return G__55026__1.call(this,_);
case 2:
return G__55026__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55026.cljs$core$IFn$_invoke$arity$1 = G__55026__1;
G__55026.cljs$core$IFn$_invoke$arity$2 = G__55026__2;
return G__55026;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tr","rounded-tr",776020084),(function() {
var G__55027 = null;
var G__55027__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__55027__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__55027 = function(_,x){
switch(arguments.length){
case 1:
return G__55027__1.call(this,_);
case 2:
return G__55027__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55027.cljs$core$IFn$_invoke$arity$1 = G__55027__1;
G__55027.cljs$core$IFn$_invoke$arity$2 = G__55027__2;
return G__55027;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-br","rounded-br",1562597181),(function() {
var G__55030 = null;
var G__55030__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__55030__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__55030 = function(_,x){
switch(arguments.length){
case 1:
return G__55030__1.call(this,_);
case 2:
return G__55030__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55030.cljs$core$IFn$_invoke$arity$1 = G__55030__1;
G__55030.cljs$core$IFn$_invoke$arity$2 = G__55030__2;
return G__55030;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-bl","rounded-bl",1067689139),(function() {
var G__55031 = null;
var G__55031__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__55031__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__55031 = function(_,x){
switch(arguments.length){
case 1:
return G__55031__1.call(this,_);
case 2:
return G__55031__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55031.cljs$core$IFn$_invoke$arity$1 = G__55031__1;
G__55031.cljs$core$IFn$_invoke$arity$2 = G__55031__2;
return G__55031;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border","border",1444987323),(function() {
var G__55032 = null;
var G__55032__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border","border",1444987323),(1));
});
var G__55032__2 = (function() { 
var G__55033__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__55033 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__55034__i = 0, G__55034__a = new Array(arguments.length -  1);
while (G__55034__i < G__55034__a.length) {G__55034__a[G__55034__i] = arguments[G__55034__i + 1]; ++G__55034__i;}
  props = new cljs.core.IndexedSeq(G__55034__a,0,null);
} 
return G__55033__delegate.call(this,_,props);};
G__55033.cljs$lang$maxFixedArity = 1;
G__55033.cljs$lang$applyTo = (function (arglist__55035){
var _ = cljs.core.first(arglist__55035);
var props = cljs.core.rest(arglist__55035);
return G__55033__delegate(_,props);
});
G__55033.cljs$core$IFn$_invoke$arity$variadic = G__55033__delegate;
return G__55033;
})()
;
G__55032 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__55032__1.call(this,_);
default:
var G__55036 = null;
if (arguments.length > 1) {
var G__55037__i = 0, G__55037__a = new Array(arguments.length -  1);
while (G__55037__i < G__55037__a.length) {G__55037__a[G__55037__i] = arguments[G__55037__i + 1]; ++G__55037__i;}
G__55036 = new cljs.core.IndexedSeq(G__55037__a,0,null);
}
return G__55032__2.cljs$core$IFn$_invoke$arity$variadic(_, G__55036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55032.cljs$lang$maxFixedArity = 1;
G__55032.cljs$lang$applyTo = G__55032__2.cljs$lang$applyTo;
G__55032.cljs$core$IFn$_invoke$arity$1 = G__55032__1;
G__55032.cljs$core$IFn$_invoke$arity$variadic = G__55032__2.cljs$core$IFn$_invoke$arity$variadic;
return G__55032;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(function() {
var G__55038 = null;
var G__55038__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(1));
});
var G__55038__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__55038 = function(_,x){
switch(arguments.length){
case 1:
return G__55038__1.call(this,_);
case 2:
return G__55038__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55038.cljs$core$IFn$_invoke$arity$1 = G__55038__1;
G__55038.cljs$core$IFn$_invoke$arity$2 = G__55038__2;
return G__55038;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-r","border-r",1332650530),(function() {
var G__55040 = null;
var G__55040__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-r","border-r",1332650530),(1));
});
var G__55040__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__55040 = function(_,x){
switch(arguments.length){
case 1:
return G__55040__1.call(this,_);
case 2:
return G__55040__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55040.cljs$core$IFn$_invoke$arity$1 = G__55040__1;
G__55040.cljs$core$IFn$_invoke$arity$2 = G__55040__2;
return G__55040;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-b","border-b",-466456219),(function() {
var G__55044 = null;
var G__55044__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-b","border-b",-466456219),(1));
});
var G__55044__2 = (function() { 
var G__55045__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__55045 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__55046__i = 0, G__55046__a = new Array(arguments.length -  1);
while (G__55046__i < G__55046__a.length) {G__55046__a[G__55046__i] = arguments[G__55046__i + 1]; ++G__55046__i;}
  props = new cljs.core.IndexedSeq(G__55046__a,0,null);
} 
return G__55045__delegate.call(this,_,props);};
G__55045.cljs$lang$maxFixedArity = 1;
G__55045.cljs$lang$applyTo = (function (arglist__55047){
var _ = cljs.core.first(arglist__55047);
var props = cljs.core.rest(arglist__55047);
return G__55045__delegate(_,props);
});
G__55045.cljs$core$IFn$_invoke$arity$variadic = G__55045__delegate;
return G__55045;
})()
;
G__55044 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__55044__1.call(this,_);
default:
var G__55048 = null;
if (arguments.length > 1) {
var G__55049__i = 0, G__55049__a = new Array(arguments.length -  1);
while (G__55049__i < G__55049__a.length) {G__55049__a[G__55049__i] = arguments[G__55049__i + 1]; ++G__55049__i;}
G__55048 = new cljs.core.IndexedSeq(G__55049__a,0,null);
}
return G__55044__2.cljs$core$IFn$_invoke$arity$variadic(_, G__55048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55044.cljs$lang$maxFixedArity = 1;
G__55044.cljs$lang$applyTo = G__55044__2.cljs$lang$applyTo;
G__55044.cljs$core$IFn$_invoke$arity$1 = G__55044__1;
G__55044.cljs$core$IFn$_invoke$arity$variadic = G__55044__2.cljs$core$IFn$_invoke$arity$variadic;
return G__55044;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-l","border-l",653108124),(function() {
var G__55050 = null;
var G__55050__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-l","border-l",653108124),(1));
});
var G__55050__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__55050 = function(_,x){
switch(arguments.length){
case 1:
return G__55050__1.call(this,_);
case 2:
return G__55050__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55050.cljs$core$IFn$_invoke$arity$1 = G__55050__1;
G__55050.cljs$core$IFn$_invoke$arity$2 = G__55050__2;
return G__55050;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-opacity","border-opacity",-1046826610),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"percent","percent",2031453817))], null)], null)], null);
}));
stylo.tailwind.border.border_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-solid","border-solid",-1844392314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid"], null),new cljs.core.Keyword(null,"border-dashed","border-dashed",-1823201978),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dashed"], null),new cljs.core.Keyword(null,"border-dotted","border-dotted",-2061093096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dotted"], null),new cljs.core.Keyword(null,"border-double","border-double",500673849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"double"], null),new cljs.core.Keyword(null,"border-none","border-none",1383902613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none"], null)], null);
stylo.rule.defrules.cljs$core$IFn$_invoke$arity$1(stylo.tailwind.border.border_style);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide","divide",2108946657),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810)),new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810),(1)], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-opacity","divide-opacity",1994371723),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"percent","percent",2031453817))], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(function() {
var G__55058 = null;
var G__55058__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(1));
});
var G__55058__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-x-reverse","--divide-x-reverse",149178366),(0),new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-x-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-x-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__55058 = function(_,x){
switch(arguments.length){
case 1:
return G__55058__1.call(this,_);
case 2:
return G__55058__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55058.cljs$core$IFn$_invoke$arity$1 = G__55058__1;
G__55058.cljs$core$IFn$_invoke$arity$2 = G__55058__2;
return G__55058;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(function() {
var G__55061 = null;
var G__55061__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(1));
});
var G__55061__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-y-reverse","--divide-y-reverse",1383963719),(0),new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-y-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-y-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__55061 = function(_,x){
switch(arguments.length){
case 1:
return G__55061__1.call(this,_);
case 2:
return G__55061__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55061.cljs$core$IFn$_invoke$arity$1 = G__55061__1;
G__55061.cljs$core$IFn$_invoke$arity$2 = G__55061__2;
return G__55061;
})()
);

//# sourceMappingURL=stylo.tailwind.border.js.map
