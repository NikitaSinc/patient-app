goog.provide('stylo.rule');
if((typeof stylo !== 'undefined') && (typeof stylo.rule !== 'undefined') && (typeof stylo.rule.rule !== 'undefined')){
} else {
stylo.rule.rule = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46312 = cljs.core.get_global_hierarchy;
return (fexpr__46312.cljs$core$IFn$_invoke$arity$0 ? fexpr__46312.cljs$core$IFn$_invoke$arity$0() : fexpr__46312.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("stylo.rule","rule"),(function() { 
var G__46477__delegate = function (k,_){
return k;
};
var G__46477 = function (k,var_args){
var _ = null;
if (arguments.length > 1) {
var G__46478__i = 0, G__46478__a = new Array(arguments.length -  1);
while (G__46478__i < G__46478__a.length) {G__46478__a[G__46478__i] = arguments[G__46478__i + 1]; ++G__46478__i;}
  _ = new cljs.core.IndexedSeq(G__46478__a,0,null);
} 
return G__46477__delegate.call(this,k,_);};
G__46477.cljs$lang$maxFixedArity = 1;
G__46477.cljs$lang$applyTo = (function (arglist__46479){
var k = cljs.core.first(arglist__46479);
var _ = cljs.core.rest(arglist__46479);
return G__46477__delegate(k,_);
});
G__46477.cljs$core$IFn$_invoke$arity$variadic = G__46477__delegate;
return G__46477;
})()
,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),(function() { 
var G__46480__delegate = function (k,types){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([types], 0))])], null)], null);
};
var G__46480 = function (k,var_args){
var types = null;
if (arguments.length > 1) {
var G__46485__i = 0, G__46485__a = new Array(arguments.length -  1);
while (G__46485__i < G__46485__a.length) {G__46485__a[G__46485__i] = arguments[G__46485__i + 1]; ++G__46485__i;}
  types = new cljs.core.IndexedSeq(G__46485__a,0,null);
} 
return G__46480__delegate.call(this,k,types);};
G__46480.cljs$lang$maxFixedArity = 1;
G__46480.cljs$lang$applyTo = (function (arglist__46486){
var k = cljs.core.first(arglist__46486);
var types = cljs.core.rest(arglist__46486);
return G__46480__delegate(k,types);
});
G__46480.cljs$core$IFn$_invoke$arity$variadic = G__46480__delegate;
return G__46480;
})()
);
stylo.rule.defrules = (function stylo$rule$defrules(var_args){
var G__46323 = arguments.length;
switch (G__46323) {
case 1:
return stylo.rule.defrules.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylo.rule.defrules.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.rule.defrules.cljs$core$IFn$_invoke$arity$1 = (function (rules){
var seq__46328 = cljs.core.seq(rules);
var chunk__46329 = null;
var count__46330 = (0);
var i__46331 = (0);
while(true){
if((i__46331 < count__46330)){
var vec__46350 = chunk__46329.cljs$core$IIndexed$_nth$arity$2(null,i__46331);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46350,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46328,chunk__46329,count__46330,i__46331,vec__46350,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__46328,chunk__46329,count__46330,i__46331,vec__46350,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46328,chunk__46329,count__46330,i__46331,vec__46350,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__46328,chunk__46329,count__46330,i__46331,vec__46350,k,v))
);
}


var G__46500 = seq__46328;
var G__46501 = chunk__46329;
var G__46502 = count__46330;
var G__46503 = (i__46331 + (1));
seq__46328 = G__46500;
chunk__46329 = G__46501;
count__46330 = G__46502;
i__46331 = G__46503;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46328);
if(temp__5804__auto__){
var seq__46328__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46328__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46328__$1);
var G__46508 = cljs.core.chunk_rest(seq__46328__$1);
var G__46509 = c__5568__auto__;
var G__46510 = cljs.core.count(c__5568__auto__);
var G__46511 = (0);
seq__46328 = G__46508;
chunk__46329 = G__46509;
count__46330 = G__46510;
i__46331 = G__46511;
continue;
} else {
var vec__46362 = cljs.core.first(seq__46328__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46362,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46328,chunk__46329,count__46330,i__46331,vec__46362,k,v,seq__46328__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__46328,chunk__46329,count__46330,i__46331,vec__46362,k,v,seq__46328__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46328,chunk__46329,count__46330,i__46331,vec__46362,k,v,seq__46328__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__46328,chunk__46329,count__46330,i__46331,vec__46362,k,v,seq__46328__$1,temp__5804__auto__))
);
}


var G__46532 = cljs.core.next(seq__46328__$1);
var G__46533 = null;
var G__46534 = (0);
var G__46535 = (0);
seq__46328 = G__46532;
chunk__46329 = G__46533;
count__46330 = G__46534;
i__46331 = G__46535;
continue;
}
} else {
return null;
}
}
break;
}
}));

(stylo.rule.defrules.cljs$core$IFn$_invoke$arity$2 = (function (rules,pseudo_element_key){
var seq__46365 = cljs.core.seq(rules);
var chunk__46366 = null;
var count__46367 = (0);
var i__46368 = (0);
while(true){
if((i__46368 < count__46367)){
var vec__46409 = chunk__46366.cljs$core$IIndexed$_nth$arity$2(null,i__46368);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46409,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46409,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46365,chunk__46366,count__46367,i__46368,vec__46409,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__46365,chunk__46366,count__46367,i__46368,vec__46409,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46365,chunk__46366,count__46367,i__46368,vec__46409,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__46365,chunk__46366,count__46367,i__46368,vec__46409,k,v))
);
}


var G__46544 = seq__46365;
var G__46545 = chunk__46366;
var G__46546 = count__46367;
var G__46547 = (i__46368 + (1));
seq__46365 = G__46544;
chunk__46366 = G__46545;
count__46367 = G__46546;
i__46368 = G__46547;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46365);
if(temp__5804__auto__){
var seq__46365__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46365__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46365__$1);
var G__46552 = cljs.core.chunk_rest(seq__46365__$1);
var G__46553 = c__5568__auto__;
var G__46554 = cljs.core.count(c__5568__auto__);
var G__46555 = (0);
seq__46365 = G__46552;
chunk__46366 = G__46553;
count__46367 = G__46554;
i__46368 = G__46555;
continue;
} else {
var vec__46418 = cljs.core.first(seq__46365__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46418,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46365,chunk__46366,count__46367,i__46368,vec__46418,k,v,seq__46365__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__46365,chunk__46366,count__46367,i__46368,vec__46418,k,v,seq__46365__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__46365,chunk__46366,count__46367,i__46368,vec__46418,k,v,seq__46365__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__46365,chunk__46366,count__46367,i__46368,vec__46418,k,v,seq__46365__$1,temp__5804__auto__))
);
}


var G__46565 = cljs.core.next(seq__46365__$1);
var G__46566 = null;
var G__46567 = (0);
var G__46568 = (0);
seq__46365 = G__46565;
chunk__46366 = G__46566;
count__46367 = G__46567;
i__46368 = G__46568;
continue;
}
} else {
return null;
}
}
break;
}
}));

(stylo.rule.defrules.cljs$lang$maxFixedArity = 2);

stylo.rule.merge_by_selector = (function stylo$rule$merge_by_selector(exps){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__46435){
var vec__46436 = p__46435;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46436,(0),null);
var exps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46436,(1),null);
var style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,exps__$1));
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46424_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__46424_SHARP_);
}),exps__$1));
var G__46442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null);
var G__46442__$1 = ((cljs.core.seq(style))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__46442,style):G__46442);
if(cljs.core.seq(children)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__46442__$1,children);
} else {
return G__46442__$1;
}
}),cljs.core.group_by(cljs.core.first,exps));
});
stylo.rule.join_rules = (function stylo$rule$join_rules(rules){
return stylo.rule.merge_by_selector(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46455_SHARP_){
if(((cljs.core.sequential_QMARK_(p1__46455_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,p1__46455_SHARP_)))){
return p1__46455_SHARP_;
} else {
if(cljs.core.sequential_QMARK_(p1__46455_SHARP_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(stylo.rule.rule,p1__46455_SHARP_);
} else {
if(cljs.core.map_QMARK_(p1__46455_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),p1__46455_SHARP_], null)], null);
} else {
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$1(p1__46455_SHARP_);

}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0)));
});

//# sourceMappingURL=stylo.rule.js.map
