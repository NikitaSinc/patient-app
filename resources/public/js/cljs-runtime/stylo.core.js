goog.provide('stylo.core');
if((typeof stylo !== 'undefined') && (typeof stylo.core !== 'undefined') && (typeof stylo.core.styles !== 'undefined')){
} else {
stylo.core.styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof stylo !== 'undefined') && (typeof stylo.core !== 'undefined') && (typeof stylo.core.media_styles !== 'undefined')){
} else {
stylo.core.media_styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof stylo !== 'undefined') && (typeof stylo.core !== 'undefined') && (typeof stylo.core.media !== 'undefined')){
} else {
stylo.core.media = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),true], null),new cljs.core.Keyword(null,"smartphone","smartphone",-204168144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"415px"], null),new cljs.core.Keyword(null,"ereader","ereader",991688302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"481px"], null),new cljs.core.Keyword(null,"p-tablets","p-tablets",-809229293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"768px"], null),new cljs.core.Keyword(null,"l-tablets","l-tablets",46173935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1025px"], null),new cljs.core.Keyword(null,"desktop","desktop",1494219798),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"1200px"], null)], null));
}
stylo.core.garden_readable = (function stylo$core$garden_readable(media_rules){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47253){
var vec__47255 = p__47253;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47255,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47255,(1),null);
var r = vec__47255;
if(typeof f === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),cljs.core.second(s)], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,r);
}
}),cljs.core.PersistentVector.EMPTY,media_rules);
});
stylo.core.media_query = (function stylo$core$media_query(media_specs,class_name,rules){
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(media_specs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,stylo.core.garden_readable(stylo.rule.join_rules(rules))], null)], null)], 0));
});
stylo.core.defmediarules = (function stylo$core$defmediarules(media){
var seq__47270 = cljs.core.seq(media);
var chunk__47271 = null;
var count__47272 = (0);
var i__47273 = (0);
while(true){
if((i__47273 < count__47272)){
var vec__47286 = chunk__47271.cljs$core$IIndexed$_nth$arity$2(null,i__47273);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47286,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47286,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__47270,chunk__47271,count__47272,i__47273,vec__47286,k,v){
return (function() { 
var G__47395__delegate = function (_,rules){
return ((function (seq__47270,chunk__47271,count__47272,i__47273,vec__47286,k,v){
return (function (class_name){
return stylo.core.media_query(v,class_name,rules);
});
;})(seq__47270,chunk__47271,count__47272,i__47273,vec__47286,k,v))
};
var G__47395 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__47397__i = 0, G__47397__a = new Array(arguments.length -  1);
while (G__47397__i < G__47397__a.length) {G__47397__a[G__47397__i] = arguments[G__47397__i + 1]; ++G__47397__i;}
  rules = new cljs.core.IndexedSeq(G__47397__a,0,null);
} 
return G__47395__delegate.call(this,_,rules);};
G__47395.cljs$lang$maxFixedArity = 1;
G__47395.cljs$lang$applyTo = (function (arglist__47399){
var _ = cljs.core.first(arglist__47399);
var rules = cljs.core.rest(arglist__47399);
return G__47395__delegate(_,rules);
});
G__47395.cljs$core$IFn$_invoke$arity$variadic = G__47395__delegate;
return G__47395;
})()
;})(seq__47270,chunk__47271,count__47272,i__47273,vec__47286,k,v))
);


var G__47400 = seq__47270;
var G__47401 = chunk__47271;
var G__47402 = count__47272;
var G__47403 = (i__47273 + (1));
seq__47270 = G__47400;
chunk__47271 = G__47401;
count__47272 = G__47402;
i__47273 = G__47403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47270);
if(temp__5804__auto__){
var seq__47270__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47270__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47270__$1);
var G__47405 = cljs.core.chunk_rest(seq__47270__$1);
var G__47406 = c__5568__auto__;
var G__47407 = cljs.core.count(c__5568__auto__);
var G__47408 = (0);
seq__47270 = G__47405;
chunk__47271 = G__47406;
count__47272 = G__47407;
i__47273 = G__47408;
continue;
} else {
var vec__47292 = cljs.core.first(seq__47270__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47292,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__47270,chunk__47271,count__47272,i__47273,vec__47292,k,v,seq__47270__$1,temp__5804__auto__){
return (function() { 
var G__47409__delegate = function (_,rules){
return ((function (seq__47270,chunk__47271,count__47272,i__47273,vec__47292,k,v,seq__47270__$1,temp__5804__auto__){
return (function (class_name){
return stylo.core.media_query(v,class_name,rules);
});
;})(seq__47270,chunk__47271,count__47272,i__47273,vec__47292,k,v,seq__47270__$1,temp__5804__auto__))
};
var G__47409 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__47410__i = 0, G__47410__a = new Array(arguments.length -  1);
while (G__47410__i < G__47410__a.length) {G__47410__a[G__47410__i] = arguments[G__47410__i + 1]; ++G__47410__i;}
  rules = new cljs.core.IndexedSeq(G__47410__a,0,null);
} 
return G__47409__delegate.call(this,_,rules);};
G__47409.cljs$lang$maxFixedArity = 1;
G__47409.cljs$lang$applyTo = (function (arglist__47411){
var _ = cljs.core.first(arglist__47411);
var rules = cljs.core.rest(arglist__47411);
return G__47409__delegate(_,rules);
});
G__47409.cljs$core$IFn$_invoke$arity$variadic = G__47409__delegate;
return G__47409;
})()
;})(seq__47270,chunk__47271,count__47272,i__47273,vec__47292,k,v,seq__47270__$1,temp__5804__auto__))
);


var G__47412 = cljs.core.next(seq__47270__$1);
var G__47413 = null;
var G__47414 = (0);
var G__47415 = (0);
seq__47270 = G__47412;
chunk__47271 = G__47413;
count__47272 = G__47414;
i__47273 = G__47415;
continue;
}
} else {
return null;
}
}
break;
}
});
stylo.core.defmediarules(cljs.core.deref(stylo.core.media));
stylo.core.set_own_mediarules_BANG_ = (function stylo$core$set_own_mediarules_BANG_(rules){
cljs.core.reset_BANG_(stylo.core.media,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,stylo.core.media,rules);

stylo.core.defmediarules(cljs.core.deref(stylo.core.media));

return cljs.core.deref(stylo.core.media);
});
stylo.core.extend_media_rules_BANG_ = (function stylo$core$extend_media_rules_BANG_(rules){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,stylo.core.media,rules);

stylo.core.defmediarules(cljs.core.deref(stylo.core.media));

return cljs.core.deref(stylo.core.media);
});
stylo.core.media_rule_QMARK_ = (function stylo$core$media_rule_QMARK_(k){
if((k instanceof cljs.core.Keyword)){
return k.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(cljs.core.deref(stylo.core.media))));
} else {
return null;
}
});
stylo.core.create_located_classname = (function stylo$core$create_located_classname(env){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ns_name = temp__5804__auto__;
return stylo.util.format.cljs$core$IFn$_invoke$arity$variadic(".%s-%s-%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace(ns_name,/\./,"_"),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env)], 0));
} else {
return null;
}
});
stylo.core.create_hashed_classname = (function stylo$core$create_hashed_classname(rules){
return [".c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(rules))].join('');
});
stylo.core.create_classname = (function stylo$core$create_classname(env,rules){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = stylo.core.create_located_classname(env);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylo.core.create_hashed_classname(rules);
}
})());
});
stylo.core.divide_rules = (function stylo$core$divide_rules(rules){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,r){
if((r instanceof cljs.core.Keyword)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.conj,r);
} else {
if(cljs.core.truth_(stylo.core.media_rule_QMARK_(cljs.core.first(r)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"media-rules","media-rules",209246200),cljs.core.conj,r);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.conj,r);

}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"media-rules","media-rules",209246200),cljs.core.PersistentVector.EMPTY], null),rules);
});
stylo.core.inject_media_rules = (function stylo$core$inject_media_rules(class_name,garden_obj){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylo.core.media_styles,cljs.core.dissoc,class_name);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylo.core.media_styles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(garden_obj))], null),garden_obj);
});
stylo.core.create_media_rules = (function stylo$core$create_media_rules(class_name,media_rules){
if((!(cljs.core.empty_QMARK_(media_rules)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (g){
return stylo.core.inject_media_rules(class_name,g);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(class_name) : f.call(null,class_name));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,stylo.rule.rule),media_rules)));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylo.core.media_styles,cljs.core.dissoc,class_name);
}
});
stylo.core.rules_with_location = (function stylo$core$rules_with_location(env,rules){
return cljs.core.with_meta(stylo.rule.join_rules(rules),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env)], null)], null));
});
stylo.core.create_rules = (function stylo$core$create_rules(env,rules){
if(cljs.core.empty_QMARK_(rules)){
return null;
} else {
var class_name = stylo.core.create_classname(env,rules);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylo.core.styles,cljs.core.dissoc,class_name);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylo.core.styles,cljs.core.assoc,class_name,stylo.core.rules_with_location(env,rules));

return class_name;
}
});
stylo.core.return_classname = (function stylo$core$return_classname(classname){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname))));
});
stylo.core.c_fn = (function stylo$core$c_fn(env,rs){
var map__47331 = stylo.core.divide_rules(rs);
var map__47331__$1 = cljs.core.__destructure_map(map__47331);
var media_rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47331__$1,new cljs.core.Keyword(null,"media-rules","media-rules",209246200));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47331__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var class_name = (function (){var or__5045__auto__ = stylo.core.create_rules(env,rules);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylo.core.create_classname(env,media_rules);
}
})();
var _ = stylo.core.create_media_rules(class_name,media_rules);
return stylo.core.return_classname(class_name);
});
stylo.core.prettify = (function stylo$core$prettify(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,"\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,v);

}
}
}),cljs.core.PersistentVector.EMPTY,(function (p1__47339_SHARP_){
return clojure.string.replace(p1__47339_SHARP_,/\s{2,}/," ");
})((function (p1__47338_SHARP_){
return clojure.string.replace(p1__47338_SHARP_,/\n/,"");
})(s))));
});
stylo.core.css_media_styles = (function stylo$core$css_media_styles(var_args){
var G__47347 = arguments.length;
switch (G__47347) {
case 0:
return stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylo.core.media_styles));
}));

(stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1 = (function (media_styles){
return stylo.core.prettify(garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vals,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(media_styles)], 0))], 0)));
}));

(stylo.core.css_media_styles.cljs$lang$maxFixedArity = 1);

stylo.core.css_rules = (function stylo$core$css_rules(var_args){
var G__47349 = arguments.length;
switch (G__47349) {
case 0:
return stylo.core.css_rules.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylo.core.styles));
}));

(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stylo.tailwind.preflight.preflight,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__47351){
var vec__47352 = p__47351;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47352,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.meta),styles)))], 0));
}));

(stylo.core.css_rules.cljs$lang$maxFixedArity = 1);

stylo.core.get_styles = (function stylo$core$get_styles(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$0()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$0())].join('');
});
stylo.core.compile_styles = (function stylo$core$compile_styles(styles,media_styles){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1(styles)),stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1(media_styles)].join('');
});

//# sourceMappingURL=stylo.core.js.map
