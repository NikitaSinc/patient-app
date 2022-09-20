goog.provide('stylo.tailwind.border');
stylo.tailwind.border.rounded_size = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"none","none",1333468478),"0",new cljs.core.Keyword(null,"sm","sm",-1402575065),"0.125rem",new cljs.core.Keyword(null,"md","md",707286655),"0.375rem",new cljs.core.Keyword(null,"lg","lg",-80787836),"0.5rem",new cljs.core.Keyword(null,"xl","xl",-1689552936),"0.75rem",new cljs.core.Keyword(null,"full","full",436801220),"9999px"], null);
stylo.tailwind.border.rounded = (function stylo$tailwind$border$rounded(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47209 = arguments.length;
var i__5770__auto___47210 = (0);
while(true){
if((i__5770__auto___47210 < len__5769__auto___47209)){
args__5775__auto__.push((arguments[i__5770__auto___47210]));

var G__47211 = (i__5770__auto___47210 + (1));
i__5770__auto___47210 = G__47211;
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
(stylo.tailwind.border.rounded.cljs$lang$applyTo = (function (seq47178){
var G__47179 = cljs.core.first(seq47178);
var seq47178__$1 = cljs.core.next(seq47178);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47179,seq47178__$1);
}));

stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded","rounded",85415706),(function() {
var G__47214 = null;
var G__47214__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
var G__47214__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
G__47214 = function(_,x){
switch(arguments.length){
case 1:
return G__47214__1.call(this,_);
case 2:
return G__47214__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47214.cljs$core$IFn$_invoke$arity$1 = G__47214__1;
G__47214.cljs$core$IFn$_invoke$arity$2 = G__47214__2;
return G__47214;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-t","rounded-t",-2048541791),(function() {
var G__47215 = null;
var G__47215__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__47215__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__47215 = function(_,x){
switch(arguments.length){
case 1:
return G__47215__1.call(this,_);
case 2:
return G__47215__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47215.cljs$core$IFn$_invoke$arity$1 = G__47215__1;
G__47215.cljs$core$IFn$_invoke$arity$2 = G__47215__2;
return G__47215;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-r","rounded-r",-197111461),(function() {
var G__47217 = null;
var G__47217__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__47217__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__47217 = function(_,x){
switch(arguments.length){
case 1:
return G__47217__1.call(this,_);
case 2:
return G__47217__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47217.cljs$core$IFn$_invoke$arity$1 = G__47217__1;
G__47217.cljs$core$IFn$_invoke$arity$2 = G__47217__2;
return G__47217;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-b","rounded-b",-765352328),(function() {
var G__47222 = null;
var G__47222__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__47222__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__47222 = function(_,x){
switch(arguments.length){
case 1:
return G__47222__1.call(this,_);
case 2:
return G__47222__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47222.cljs$core$IFn$_invoke$arity$1 = G__47222__1;
G__47222.cljs$core$IFn$_invoke$arity$2 = G__47222__2;
return G__47222;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-l","rounded-l",1639486971),(function() {
var G__47223 = null;
var G__47223__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__47223__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__47223 = function(_,x){
switch(arguments.length){
case 1:
return G__47223__1.call(this,_);
case 2:
return G__47223__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47223.cljs$core$IFn$_invoke$arity$1 = G__47223__1;
G__47223.cljs$core$IFn$_invoke$arity$2 = G__47223__2;
return G__47223;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tl","rounded-tl",-649211256),(function() {
var G__47225 = null;
var G__47225__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
var G__47225__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
G__47225 = function(_,x){
switch(arguments.length){
case 1:
return G__47225__1.call(this,_);
case 2:
return G__47225__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47225.cljs$core$IFn$_invoke$arity$1 = G__47225__1;
G__47225.cljs$core$IFn$_invoke$arity$2 = G__47225__2;
return G__47225;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tr","rounded-tr",776020084),(function() {
var G__47226 = null;
var G__47226__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__47226__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__47226 = function(_,x){
switch(arguments.length){
case 1:
return G__47226__1.call(this,_);
case 2:
return G__47226__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47226.cljs$core$IFn$_invoke$arity$1 = G__47226__1;
G__47226.cljs$core$IFn$_invoke$arity$2 = G__47226__2;
return G__47226;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-br","rounded-br",1562597181),(function() {
var G__47227 = null;
var G__47227__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__47227__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__47227 = function(_,x){
switch(arguments.length){
case 1:
return G__47227__1.call(this,_);
case 2:
return G__47227__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47227.cljs$core$IFn$_invoke$arity$1 = G__47227__1;
G__47227.cljs$core$IFn$_invoke$arity$2 = G__47227__2;
return G__47227;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-bl","rounded-bl",1067689139),(function() {
var G__47228 = null;
var G__47228__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__47228__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__47228 = function(_,x){
switch(arguments.length){
case 1:
return G__47228__1.call(this,_);
case 2:
return G__47228__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47228.cljs$core$IFn$_invoke$arity$1 = G__47228__1;
G__47228.cljs$core$IFn$_invoke$arity$2 = G__47228__2;
return G__47228;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border","border",1444987323),(function() {
var G__47229 = null;
var G__47229__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border","border",1444987323),(1));
});
var G__47229__2 = (function() { 
var G__47230__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__47230 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__47231__i = 0, G__47231__a = new Array(arguments.length -  1);
while (G__47231__i < G__47231__a.length) {G__47231__a[G__47231__i] = arguments[G__47231__i + 1]; ++G__47231__i;}
  props = new cljs.core.IndexedSeq(G__47231__a,0,null);
} 
return G__47230__delegate.call(this,_,props);};
G__47230.cljs$lang$maxFixedArity = 1;
G__47230.cljs$lang$applyTo = (function (arglist__47232){
var _ = cljs.core.first(arglist__47232);
var props = cljs.core.rest(arglist__47232);
return G__47230__delegate(_,props);
});
G__47230.cljs$core$IFn$_invoke$arity$variadic = G__47230__delegate;
return G__47230;
})()
;
G__47229 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__47229__1.call(this,_);
default:
var G__47233 = null;
if (arguments.length > 1) {
var G__47234__i = 0, G__47234__a = new Array(arguments.length -  1);
while (G__47234__i < G__47234__a.length) {G__47234__a[G__47234__i] = arguments[G__47234__i + 1]; ++G__47234__i;}
G__47233 = new cljs.core.IndexedSeq(G__47234__a,0,null);
}
return G__47229__2.cljs$core$IFn$_invoke$arity$variadic(_, G__47233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47229.cljs$lang$maxFixedArity = 1;
G__47229.cljs$lang$applyTo = G__47229__2.cljs$lang$applyTo;
G__47229.cljs$core$IFn$_invoke$arity$1 = G__47229__1;
G__47229.cljs$core$IFn$_invoke$arity$variadic = G__47229__2.cljs$core$IFn$_invoke$arity$variadic;
return G__47229;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(function() {
var G__47235 = null;
var G__47235__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(1));
});
var G__47235__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__47235 = function(_,x){
switch(arguments.length){
case 1:
return G__47235__1.call(this,_);
case 2:
return G__47235__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47235.cljs$core$IFn$_invoke$arity$1 = G__47235__1;
G__47235.cljs$core$IFn$_invoke$arity$2 = G__47235__2;
return G__47235;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-r","border-r",1332650530),(function() {
var G__47236 = null;
var G__47236__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-r","border-r",1332650530),(1));
});
var G__47236__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__47236 = function(_,x){
switch(arguments.length){
case 1:
return G__47236__1.call(this,_);
case 2:
return G__47236__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47236.cljs$core$IFn$_invoke$arity$1 = G__47236__1;
G__47236.cljs$core$IFn$_invoke$arity$2 = G__47236__2;
return G__47236;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-b","border-b",-466456219),(function() {
var G__47237 = null;
var G__47237__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-b","border-b",-466456219),(1));
});
var G__47237__2 = (function() { 
var G__47238__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__47238 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__47239__i = 0, G__47239__a = new Array(arguments.length -  1);
while (G__47239__i < G__47239__a.length) {G__47239__a[G__47239__i] = arguments[G__47239__i + 1]; ++G__47239__i;}
  props = new cljs.core.IndexedSeq(G__47239__a,0,null);
} 
return G__47238__delegate.call(this,_,props);};
G__47238.cljs$lang$maxFixedArity = 1;
G__47238.cljs$lang$applyTo = (function (arglist__47240){
var _ = cljs.core.first(arglist__47240);
var props = cljs.core.rest(arglist__47240);
return G__47238__delegate(_,props);
});
G__47238.cljs$core$IFn$_invoke$arity$variadic = G__47238__delegate;
return G__47238;
})()
;
G__47237 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__47237__1.call(this,_);
default:
var G__47241 = null;
if (arguments.length > 1) {
var G__47242__i = 0, G__47242__a = new Array(arguments.length -  1);
while (G__47242__i < G__47242__a.length) {G__47242__a[G__47242__i] = arguments[G__47242__i + 1]; ++G__47242__i;}
G__47241 = new cljs.core.IndexedSeq(G__47242__a,0,null);
}
return G__47237__2.cljs$core$IFn$_invoke$arity$variadic(_, G__47241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47237.cljs$lang$maxFixedArity = 1;
G__47237.cljs$lang$applyTo = G__47237__2.cljs$lang$applyTo;
G__47237.cljs$core$IFn$_invoke$arity$1 = G__47237__1;
G__47237.cljs$core$IFn$_invoke$arity$variadic = G__47237__2.cljs$core$IFn$_invoke$arity$variadic;
return G__47237;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-l","border-l",653108124),(function() {
var G__47243 = null;
var G__47243__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-l","border-l",653108124),(1));
});
var G__47243__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__47243 = function(_,x){
switch(arguments.length){
case 1:
return G__47243__1.call(this,_);
case 2:
return G__47243__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47243.cljs$core$IFn$_invoke$arity$1 = G__47243__1;
G__47243.cljs$core$IFn$_invoke$arity$2 = G__47243__2;
return G__47243;
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
var G__47244 = null;
var G__47244__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(1));
});
var G__47244__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-x-reverse","--divide-x-reverse",149178366),(0),new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-x-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-x-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__47244 = function(_,x){
switch(arguments.length){
case 1:
return G__47244__1.call(this,_);
case 2:
return G__47244__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47244.cljs$core$IFn$_invoke$arity$1 = G__47244__1;
G__47244.cljs$core$IFn$_invoke$arity$2 = G__47244__2;
return G__47244;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(function() {
var G__47246 = null;
var G__47246__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(1));
});
var G__47246__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-y-reverse","--divide-y-reverse",1383963719),(0),new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-y-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-y-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__47246 = function(_,x){
switch(arguments.length){
case 1:
return G__47246__1.call(this,_);
case 2:
return G__47246__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47246.cljs$core$IFn$_invoke$arity$1 = G__47246__1;
G__47246.cljs$core$IFn$_invoke$arity$2 = G__47246__2;
return G__47246;
})()
);

//# sourceMappingURL=stylo.tailwind.border.js.map
