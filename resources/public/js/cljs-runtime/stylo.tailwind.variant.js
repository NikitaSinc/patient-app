goog.provide('stylo.tailwind.variant');
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),(function() { 
var G__46976__delegate = function (_,k,rules){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY], null),stylo.rule.join_rules(rules))], null);
};
var G__46976 = function (_,k,var_args){
var rules = null;
if (arguments.length > 2) {
var G__46977__i = 0, G__46977__a = new Array(arguments.length -  2);
while (G__46977__i < G__46977__a.length) {G__46977__a[G__46977__i] = arguments[G__46977__i + 2]; ++G__46977__i;}
  rules = new cljs.core.IndexedSeq(G__46977__a,0,null);
} 
return G__46976__delegate.call(this,_,k,rules);};
G__46976.cljs$lang$maxFixedArity = 2;
G__46976.cljs$lang$applyTo = (function (arglist__46978){
var _ = cljs.core.first(arglist__46978);
arglist__46978 = cljs.core.next(arglist__46978);
var k = cljs.core.first(arglist__46978);
var rules = cljs.core.rest(arglist__46978);
return G__46976__delegate(_,k,rules);
});
G__46976.cljs$core$IFn$_invoke$arity$variadic = G__46976__delegate;
return G__46976;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),(function() { 
var G__46979__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(odd)",rules);
};
var G__46979 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__46980__i = 0, G__46980__a = new Array(arguments.length -  1);
while (G__46980__i < G__46980__a.length) {G__46980__a[G__46980__i] = arguments[G__46980__i + 1]; ++G__46980__i;}
  rules = new cljs.core.IndexedSeq(G__46980__a,0,null);
} 
return G__46979__delegate.call(this,_,rules);};
G__46979.cljs$lang$maxFixedArity = 1;
G__46979.cljs$lang$applyTo = (function (arglist__46981){
var _ = cljs.core.first(arglist__46981);
var rules = cljs.core.rest(arglist__46981);
return G__46979__delegate(_,rules);
});
G__46979.cljs$core$IFn$_invoke$arity$variadic = G__46979__delegate;
return G__46979;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"even","even",-275845692),(function() { 
var G__46986__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(even)",rules);
};
var G__46986 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__46987__i = 0, G__46987__a = new Array(arguments.length -  1);
while (G__46987__i < G__46987__a.length) {G__46987__a[G__46987__i] = arguments[G__46987__i + 1]; ++G__46987__i;}
  rules = new cljs.core.IndexedSeq(G__46987__a,0,null);
} 
return G__46986__delegate.call(this,_,rules);};
G__46986.cljs$lang$maxFixedArity = 1;
G__46986.cljs$lang$applyTo = (function (arglist__46988){
var _ = cljs.core.first(arglist__46988);
var rules = cljs.core.rest(arglist__46988);
return G__46986__delegate(_,rules);
});
G__46986.cljs$core$IFn$_invoke$arity$variadic = G__46986__delegate;
return G__46986;
})()
);
stylo.tailwind.variant.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"any-link","any-link",-1005234634),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"defined","defined",-1805032318),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"first-child","first-child",2114099842),new cljs.core.Keyword(null,"first-of-type","first-of-type",-740219653),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"focus-visible","focus-visible",-135927717),new cljs.core.Keyword(null,"focus-within","focus-within",1637765153),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"in-range","in-range",1356571825),new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"last-child","last-child",1330670325),new cljs.core.Keyword(null,"last-of-type","last-of-type",-654078196),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"only-child","only-child",-1420502495),new cljs.core.Keyword(null,"only-of-type","only-of-type",693975143),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"out-of-range","out-of-range",692318589),new cljs.core.Keyword(null,"placeholder-shown","placeholder-shown",1752397014),new cljs.core.Keyword(null,"read-only","read-only",-191706886),new cljs.core.Keyword(null,"read-write","read-write",178022883),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"visited","visited",-1610853875)], true);
var seq__46951_46989 = cljs.core.seq(stylo.tailwind.variant.pseudo_classes);
var chunk__46952_46990 = null;
var count__46953_46991 = (0);
var i__46954_46992 = (0);
while(true){
if((i__46954_46992 < count__46953_46991)){
var c_46993 = chunk__46952_46990.cljs$core$IIndexed$_nth$arity$2(null,i__46954_46992);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_46993,((function (seq__46951_46989,chunk__46952_46990,count__46953_46991,i__46954_46992,c_46993){
return (function() { 
var G__46994__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_46993),rules);
};
var G__46994 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__46995__i = 0, G__46995__a = new Array(arguments.length -  1);
while (G__46995__i < G__46995__a.length) {G__46995__a[G__46995__i] = arguments[G__46995__i + 1]; ++G__46995__i;}
  rules = new cljs.core.IndexedSeq(G__46995__a,0,null);
} 
return G__46994__delegate.call(this,_,rules);};
G__46994.cljs$lang$maxFixedArity = 1;
G__46994.cljs$lang$applyTo = (function (arglist__46996){
var _ = cljs.core.first(arglist__46996);
var rules = cljs.core.rest(arglist__46996);
return G__46994__delegate(_,rules);
});
G__46994.cljs$core$IFn$_invoke$arity$variadic = G__46994__delegate;
return G__46994;
})()
;})(seq__46951_46989,chunk__46952_46990,count__46953_46991,i__46954_46992,c_46993))
);


var G__46997 = seq__46951_46989;
var G__46998 = chunk__46952_46990;
var G__46999 = count__46953_46991;
var G__47000 = (i__46954_46992 + (1));
seq__46951_46989 = G__46997;
chunk__46952_46990 = G__46998;
count__46953_46991 = G__46999;
i__46954_46992 = G__47000;
continue;
} else {
var temp__5804__auto___47001 = cljs.core.seq(seq__46951_46989);
if(temp__5804__auto___47001){
var seq__46951_47002__$1 = temp__5804__auto___47001;
if(cljs.core.chunked_seq_QMARK_(seq__46951_47002__$1)){
var c__5568__auto___47003 = cljs.core.chunk_first(seq__46951_47002__$1);
var G__47004 = cljs.core.chunk_rest(seq__46951_47002__$1);
var G__47005 = c__5568__auto___47003;
var G__47006 = cljs.core.count(c__5568__auto___47003);
var G__47007 = (0);
seq__46951_46989 = G__47004;
chunk__46952_46990 = G__47005;
count__46953_46991 = G__47006;
i__46954_46992 = G__47007;
continue;
} else {
var c_47008 = cljs.core.first(seq__46951_47002__$1);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_47008,((function (seq__46951_46989,chunk__46952_46990,count__46953_46991,i__46954_46992,c_47008,seq__46951_47002__$1,temp__5804__auto___47001){
return (function() { 
var G__47009__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_47008),rules);
};
var G__47009 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__47010__i = 0, G__47010__a = new Array(arguments.length -  1);
while (G__47010__i < G__47010__a.length) {G__47010__a[G__47010__i] = arguments[G__47010__i + 1]; ++G__47010__i;}
  rules = new cljs.core.IndexedSeq(G__47010__a,0,null);
} 
return G__47009__delegate.call(this,_,rules);};
G__47009.cljs$lang$maxFixedArity = 1;
G__47009.cljs$lang$applyTo = (function (arglist__47011){
var _ = cljs.core.first(arglist__47011);
var rules = cljs.core.rest(arglist__47011);
return G__47009__delegate(_,rules);
});
G__47009.cljs$core$IFn$_invoke$arity$variadic = G__47009__delegate;
return G__47009;
})()
;})(seq__46951_46989,chunk__46952_46990,count__46953_46991,i__46954_46992,c_47008,seq__46951_47002__$1,temp__5804__auto___47001))
);


var G__47012 = cljs.core.next(seq__46951_47002__$1);
var G__47013 = null;
var G__47014 = (0);
var G__47015 = (0);
seq__46951_46989 = G__47012;
chunk__46952_46990 = G__47013;
count__46953_46991 = G__47014;
i__46954_46992 = G__47015;
continue;
}
} else {
}
}
break;
}
stylo.tailwind.variant.pseudo_elements = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thumb","thumb",1718947232),new cljs.core.Keyword(null,"range-track","range-track",-1449711072),new cljs.core.Keyword(null,"first-line","first-line",285094849),new cljs.core.Keyword(null,"spelling-error","spelling-error",1665378434),new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"grammar-error","grammar-error",419933222),new cljs.core.Keyword(null,"reveal","reveal",-131374202),new cljs.core.Keyword(null,"range-progress","range-progress",-920777497),new cljs.core.Keyword(null,"check","check",1226308904),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"browse","browse",2070502601),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"slider-thumb","slider-thumb",155435340),new cljs.core.Keyword(null,"cue-region","cue-region",1087710702),new cljs.core.Keyword(null,"ticks-before","ticks-before",2078986128),new cljs.core.Keyword(null,"ticks-after","ticks-after",-211651342),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"slider-runnable-track","slider-runnable-track",1815502899),new cljs.core.Keyword(null,"range-thumb","range-thumb",1201269077),new cljs.core.Keyword(null,"fill-lower","fill-lower",1022026678),new cljs.core.Keyword(null,"first-letter","first-letter",1923006839),new cljs.core.Keyword(null,"cue","cue",1555624311),new cljs.core.Keyword(null,"fill-upper","fill-upper",-911013512),new cljs.core.Keyword(null,"progress-value","progress-value",1698126170),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"track","track",195787487)],["::-ms-thumb","::-moz-range-track","::first-line","::spelling-error",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["::-webkit-progress-bar",null,"::-moz-progress-bar",null], null), null),"::placeholder","::grammar-error","::-ms-reveal","::-moz-range-progress","::-ms-check","::marker","::-ms-browse","::-ms-fill","::-ms-value","::-webkit-slider-thumb","::cue-region","::-ms-ticks-before","::-ms-ticks-after","::after","::-webkit-slider-runnable-track","::-moz-range-thumb","::-ms-fill-lower","::first-letter","::cue","::-ms-fill-upper","::-webkit-progress-value","::selection","::backdrop","::before","::-ms-expand","::-ms-tooltip","::-ms-clear","::-ms-track"]);
var seq__46956_47016 = cljs.core.seq(stylo.tailwind.variant.pseudo_elements);
var chunk__46957_47017 = null;
var count__46958_47018 = (0);
var i__46959_47019 = (0);
while(true){
if((i__46959_47019 < count__46958_47018)){
var vec__46968_47020 = chunk__46957_47017.cljs$core$IIndexed$_nth$arity$2(null,i__46959_47019);
var k_47021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968_47020,(0),null);
var v_47022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968_47020,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_47021,((function (seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46968_47020,k_47021,v_47022){
return (function() { 
var G__47023__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46968_47020,k_47021,v_47022){
return (function (p1__46955_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__46955_SHARP_,rules);
});})(seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46968_47020,k_47021,v_47022))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_47022))?v_47022:cljs.core.PersistentHashSet.createAsIfByAssoc([v_47022]))], 0));
};
var G__47023 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__47024__i = 0, G__47024__a = new Array(arguments.length -  1);
while (G__47024__i < G__47024__a.length) {G__47024__a[G__47024__i] = arguments[G__47024__i + 1]; ++G__47024__i;}
  rules = new cljs.core.IndexedSeq(G__47024__a,0,null);
} 
return G__47023__delegate.call(this,_,rules);};
G__47023.cljs$lang$maxFixedArity = 1;
G__47023.cljs$lang$applyTo = (function (arglist__47025){
var _ = cljs.core.first(arglist__47025);
var rules = cljs.core.rest(arglist__47025);
return G__47023__delegate(_,rules);
});
G__47023.cljs$core$IFn$_invoke$arity$variadic = G__47023__delegate;
return G__47023;
})()
;})(seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46968_47020,k_47021,v_47022))
);


var G__47026 = seq__46956_47016;
var G__47027 = chunk__46957_47017;
var G__47028 = count__46958_47018;
var G__47029 = (i__46959_47019 + (1));
seq__46956_47016 = G__47026;
chunk__46957_47017 = G__47027;
count__46958_47018 = G__47028;
i__46959_47019 = G__47029;
continue;
} else {
var temp__5804__auto___47030 = cljs.core.seq(seq__46956_47016);
if(temp__5804__auto___47030){
var seq__46956_47031__$1 = temp__5804__auto___47030;
if(cljs.core.chunked_seq_QMARK_(seq__46956_47031__$1)){
var c__5568__auto___47032 = cljs.core.chunk_first(seq__46956_47031__$1);
var G__47033 = cljs.core.chunk_rest(seq__46956_47031__$1);
var G__47034 = c__5568__auto___47032;
var G__47035 = cljs.core.count(c__5568__auto___47032);
var G__47036 = (0);
seq__46956_47016 = G__47033;
chunk__46957_47017 = G__47034;
count__46958_47018 = G__47035;
i__46959_47019 = G__47036;
continue;
} else {
var vec__46971_47037 = cljs.core.first(seq__46956_47031__$1);
var k_47038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46971_47037,(0),null);
var v_47039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46971_47037,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_47038,((function (seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46971_47037,k_47038,v_47039,seq__46956_47031__$1,temp__5804__auto___47030){
return (function() { 
var G__47040__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46971_47037,k_47038,v_47039,seq__46956_47031__$1,temp__5804__auto___47030){
return (function (p1__46955_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__46955_SHARP_,rules);
});})(seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46971_47037,k_47038,v_47039,seq__46956_47031__$1,temp__5804__auto___47030))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_47039))?v_47039:cljs.core.PersistentHashSet.createAsIfByAssoc([v_47039]))], 0));
};
var G__47040 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__47041__i = 0, G__47041__a = new Array(arguments.length -  1);
while (G__47041__i < G__47041__a.length) {G__47041__a[G__47041__i] = arguments[G__47041__i + 1]; ++G__47041__i;}
  rules = new cljs.core.IndexedSeq(G__47041__a,0,null);
} 
return G__47040__delegate.call(this,_,rules);};
G__47040.cljs$lang$maxFixedArity = 1;
G__47040.cljs$lang$applyTo = (function (arglist__47042){
var _ = cljs.core.first(arglist__47042);
var rules = cljs.core.rest(arglist__47042);
return G__47040__delegate(_,rules);
});
G__47040.cljs$core$IFn$_invoke$arity$variadic = G__47040__delegate;
return G__47040;
})()
;})(seq__46956_47016,chunk__46957_47017,count__46958_47018,i__46959_47019,vec__46971_47037,k_47038,v_47039,seq__46956_47031__$1,temp__5804__auto___47030))
);


var G__47043 = cljs.core.next(seq__46956_47031__$1);
var G__47044 = null;
var G__47045 = (0);
var G__47046 = (0);
seq__46956_47016 = G__47043;
chunk__46957_47017 = G__47044;
count__46958_47018 = G__47045;
i__46959_47019 = G__47046;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=stylo.tailwind.variant.js.map
