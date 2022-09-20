goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46770 = arguments.length;
var i__5770__auto___46771 = (0);
while(true){
if((i__5770__auto___46771 < len__5769__auto___46770)){
args__5775__auto__.push((arguments[i__5770__auto___46771]));

var G__46772 = (i__5770__auto___46771 + (1));
i__5770__auto___46771 = G__46772;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__46774__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__46774 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__46775__i = 0, G__46775__a = new Array(arguments.length -  0);
while (G__46775__i < G__46775__a.length) {G__46775__a[G__46775__i] = arguments[G__46775__i + 0]; ++G__46775__i;}
  children = new cljs.core.IndexedSeq(G__46775__a,0,null);
} 
return G__46774__delegate.call(this,children);};
G__46774.cljs$lang$maxFixedArity = 0;
G__46774.cljs$lang$applyTo = (function (arglist__46776){
var children = cljs.core.seq(arglist__46776);
return G__46774__delegate(children);
});
G__46774.cljs$core$IFn$_invoke$arity$variadic = G__46774__delegate;
return G__46774;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq46717){
var G__46719 = cljs.core.first(seq46717);
var seq46717__$1 = cljs.core.next(seq46717);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46719,seq46717__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__46777__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__46777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46778__i = 0, G__46778__a = new Array(arguments.length -  0);
while (G__46778__i < G__46778__a.length) {G__46778__a[G__46778__i] = arguments[G__46778__i + 0]; ++G__46778__i;}
  args = new cljs.core.IndexedSeq(G__46778__a,0,null);
} 
return G__46777__delegate.call(this,args);};
G__46777.cljs$lang$maxFixedArity = 0;
G__46777.cljs$lang$applyTo = (function (arglist__46779){
var args = cljs.core.seq(arglist__46779);
return G__46777__delegate(args);
});
G__46777.cljs$core$IFn$_invoke$arity$variadic = G__46777__delegate;
return G__46777;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46780 = arguments.length;
var i__5770__auto___46781 = (0);
while(true){
if((i__5770__auto___46781 < len__5769__auto___46780)){
args__5775__auto__.push((arguments[i__5770__auto___46781]));

var G__46782 = (i__5770__auto___46781 + (1));
i__5770__auto___46781 = G__46782;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq46724){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46724));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__46733 = arguments.length;
switch (G__46733) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___46790 = arguments.length;
var i__5770__auto___46791 = (0);
while(true){
if((i__5770__auto___46791 < len__5769__auto___46790)){
args_arr__5794__auto__.push((arguments[i__5770__auto___46791]));

var G__46792 = (i__5770__auto___46791 + (1));
i__5770__auto___46791 = G__46792;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq46730){
var G__46732 = cljs.core.first(seq46730);
var seq46730__$1 = cljs.core.next(seq46730);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46732,seq46730__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46794 = arguments.length;
var i__5770__auto___46795 = (0);
while(true){
if((i__5770__auto___46795 < len__5769__auto___46794)){
args__5775__auto__.push((arguments[i__5770__auto___46795]));

var G__46796 = (i__5770__auto___46795 + (1));
i__5770__auto___46795 = G__46796;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq46739){
var G__46740 = cljs.core.first(seq46739);
var seq46739__$1 = cljs.core.next(seq46739);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46740,seq46739__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46797 = arguments.length;
var i__5770__auto___46798 = (0);
while(true){
if((i__5770__auto___46798 < len__5769__auto___46797)){
args__5775__auto__.push((arguments[i__5770__auto___46798]));

var G__46799 = (i__5770__auto___46798 + (1));
i__5770__auto___46798 = G__46799;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq46754){
var G__46755 = cljs.core.first(seq46754);
var seq46754__$1 = cljs.core.next(seq46754);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46755,seq46754__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46800 = arguments.length;
var i__5770__auto___46801 = (0);
while(true){
if((i__5770__auto___46801 < len__5769__auto___46800)){
args__5775__auto__.push((arguments[i__5770__auto___46801]));

var G__46802 = (i__5770__auto___46801 + (1));
i__5770__auto___46801 = G__46802;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq46761){
var G__46762 = cljs.core.first(seq46761);
var seq46761__$1 = cljs.core.next(seq46761);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46762,seq46761__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
