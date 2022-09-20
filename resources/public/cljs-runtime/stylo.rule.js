goog.provide('stylo.rule');
if((typeof stylo !== 'undefined') && (typeof stylo.rule !== 'undefined') && (typeof stylo.rule.rule !== 'undefined')){
} else {
stylo.rule.rule = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26667 = cljs.core.get_global_hierarchy;
return (fexpr__26667.cljs$core$IFn$_invoke$arity$0 ? fexpr__26667.cljs$core$IFn$_invoke$arity$0() : fexpr__26667.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("stylo.rule","rule"),(function() { 
var G__26802__delegate = function (k,_){
return k;
};
var G__26802 = function (k,var_args){
var _ = null;
if (arguments.length > 1) {
var G__26803__i = 0, G__26803__a = new Array(arguments.length -  1);
while (G__26803__i < G__26803__a.length) {G__26803__a[G__26803__i] = arguments[G__26803__i + 1]; ++G__26803__i;}
  _ = new cljs.core.IndexedSeq(G__26803__a,0,null);
} 
return G__26802__delegate.call(this,k,_);};
G__26802.cljs$lang$maxFixedArity = 1;
G__26802.cljs$lang$applyTo = (function (arglist__26804){
var k = cljs.core.first(arglist__26804);
var _ = cljs.core.rest(arglist__26804);
return G__26802__delegate(k,_);
});
G__26802.cljs$core$IFn$_invoke$arity$variadic = G__26802__delegate;
return G__26802;
})()
,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),(function() { 
var G__26805__delegate = function (k,types){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([types], 0))])], null)], null);
};
var G__26805 = function (k,var_args){
var types = null;
if (arguments.length > 1) {
var G__26806__i = 0, G__26806__a = new Array(arguments.length -  1);
while (G__26806__i < G__26806__a.length) {G__26806__a[G__26806__i] = arguments[G__26806__i + 1]; ++G__26806__i;}
  types = new cljs.core.IndexedSeq(G__26806__a,0,null);
} 
return G__26805__delegate.call(this,k,types);};
G__26805.cljs$lang$maxFixedArity = 1;
G__26805.cljs$lang$applyTo = (function (arglist__26807){
var k = cljs.core.first(arglist__26807);
var types = cljs.core.rest(arglist__26807);
return G__26805__delegate(k,types);
});
G__26805.cljs$core$IFn$_invoke$arity$variadic = G__26805__delegate;
return G__26805;
})()
);
stylo.rule.defrules = (function stylo$rule$defrules(var_args){
var G__26674 = arguments.length;
switch (G__26674) {
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
var seq__26689 = cljs.core.seq(rules);
var chunk__26690 = null;
var count__26691 = (0);
var i__26692 = (0);
while(true){
if((i__26692 < count__26691)){
var vec__26747 = chunk__26690.cljs$core$IIndexed$_nth$arity$2(null,i__26692);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26747,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26689,chunk__26690,count__26691,i__26692,vec__26747,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__26689,chunk__26690,count__26691,i__26692,vec__26747,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26689,chunk__26690,count__26691,i__26692,vec__26747,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__26689,chunk__26690,count__26691,i__26692,vec__26747,k,v))
);
}


var G__26815 = seq__26689;
var G__26816 = chunk__26690;
var G__26817 = count__26691;
var G__26818 = (i__26692 + (1));
seq__26689 = G__26815;
chunk__26690 = G__26816;
count__26691 = G__26817;
i__26692 = G__26818;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26689);
if(temp__5804__auto__){
var seq__26689__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26689__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26689__$1);
var G__26819 = cljs.core.chunk_rest(seq__26689__$1);
var G__26820 = c__5568__auto__;
var G__26821 = cljs.core.count(c__5568__auto__);
var G__26822 = (0);
seq__26689 = G__26819;
chunk__26690 = G__26820;
count__26691 = G__26821;
i__26692 = G__26822;
continue;
} else {
var vec__26759 = cljs.core.first(seq__26689__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26759,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26759,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26689,chunk__26690,count__26691,i__26692,vec__26759,k,v,seq__26689__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__26689,chunk__26690,count__26691,i__26692,vec__26759,k,v,seq__26689__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26689,chunk__26690,count__26691,i__26692,vec__26759,k,v,seq__26689__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__26689,chunk__26690,count__26691,i__26692,vec__26759,k,v,seq__26689__$1,temp__5804__auto__))
);
}


var G__26823 = cljs.core.next(seq__26689__$1);
var G__26824 = null;
var G__26825 = (0);
var G__26826 = (0);
seq__26689 = G__26823;
chunk__26690 = G__26824;
count__26691 = G__26825;
i__26692 = G__26826;
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
var seq__26762 = cljs.core.seq(rules);
var chunk__26763 = null;
var count__26764 = (0);
var i__26765 = (0);
while(true){
if((i__26765 < count__26764)){
var vec__26772 = chunk__26763.cljs$core$IIndexed$_nth$arity$2(null,i__26765);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26772,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26762,chunk__26763,count__26764,i__26765,vec__26772,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__26762,chunk__26763,count__26764,i__26765,vec__26772,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26762,chunk__26763,count__26764,i__26765,vec__26772,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__26762,chunk__26763,count__26764,i__26765,vec__26772,k,v))
);
}


var G__26827 = seq__26762;
var G__26828 = chunk__26763;
var G__26829 = count__26764;
var G__26830 = (i__26765 + (1));
seq__26762 = G__26827;
chunk__26763 = G__26828;
count__26764 = G__26829;
i__26765 = G__26830;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26762);
if(temp__5804__auto__){
var seq__26762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26762__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26762__$1);
var G__26831 = cljs.core.chunk_rest(seq__26762__$1);
var G__26832 = c__5568__auto__;
var G__26833 = cljs.core.count(c__5568__auto__);
var G__26834 = (0);
seq__26762 = G__26831;
chunk__26763 = G__26832;
count__26764 = G__26833;
i__26765 = G__26834;
continue;
} else {
var vec__26775 = cljs.core.first(seq__26762__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26775,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26775,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26762,chunk__26763,count__26764,i__26765,vec__26775,k,v,seq__26762__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__26762,chunk__26763,count__26764,i__26765,vec__26775,k,v,seq__26762__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__26762,chunk__26763,count__26764,i__26765,vec__26775,k,v,seq__26762__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__26762,chunk__26763,count__26764,i__26765,vec__26775,k,v,seq__26762__$1,temp__5804__auto__))
);
}


var G__26836 = cljs.core.next(seq__26762__$1);
var G__26837 = null;
var G__26838 = (0);
var G__26839 = (0);
seq__26762 = G__26836;
chunk__26763 = G__26837;
count__26764 = G__26838;
i__26765 = G__26839;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__26782){
var vec__26783 = p__26782;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(0),null);
var exps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26783,(1),null);
var style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,exps__$1));
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26781_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__26781_SHARP_);
}),exps__$1));
var G__26788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null);
var G__26788__$1 = ((cljs.core.seq(style))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26788,style):G__26788);
if(cljs.core.seq(children)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__26788__$1,children);
} else {
return G__26788__$1;
}
}),cljs.core.group_by(cljs.core.first,exps));
});
stylo.rule.join_rules = (function stylo$rule$join_rules(rules){
return stylo.rule.merge_by_selector(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26789_SHARP_){
if(((cljs.core.sequential_QMARK_(p1__26789_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,p1__26789_SHARP_)))){
return p1__26789_SHARP_;
} else {
if(cljs.core.sequential_QMARK_(p1__26789_SHARP_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(stylo.rule.rule,p1__26789_SHARP_);
} else {
if(cljs.core.map_QMARK_(p1__26789_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),p1__26789_SHARP_], null)], null);
} else {
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$1(p1__26789_SHARP_);

}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0)));
});

//# sourceMappingURL=stylo.rule.js.map
