goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54693 = arguments.length;
var i__5770__auto___54694 = (0);
while(true){
if((i__5770__auto___54694 < len__5769__auto___54693)){
args__5775__auto__.push((arguments[i__5770__auto___54694]));

var G__54695 = (i__5770__auto___54694 + (1));
i__5770__auto___54694 = G__54695;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53973){
var G__53975 = cljs.core.first(seq53973);
var seq53973__$1 = cljs.core.next(seq53973);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53975,seq53973__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53984 = cljs.core.seq(sources);
var chunk__53985 = null;
var count__53986 = (0);
var i__53987 = (0);
while(true){
if((i__53987 < count__53986)){
var map__54000 = chunk__53985.cljs$core$IIndexed$_nth$arity$2(null,i__53987);
var map__54000__$1 = cljs.core.__destructure_map(map__54000);
var src = map__54000__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54004){var e_54696 = e54004;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54696);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54696.message)].join('')));
}

var G__54697 = seq__53984;
var G__54698 = chunk__53985;
var G__54699 = count__53986;
var G__54700 = (i__53987 + (1));
seq__53984 = G__54697;
chunk__53985 = G__54698;
count__53986 = G__54699;
i__53987 = G__54700;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53984);
if(temp__5804__auto__){
var seq__53984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53984__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53984__$1);
var G__54701 = cljs.core.chunk_rest(seq__53984__$1);
var G__54702 = c__5568__auto__;
var G__54703 = cljs.core.count(c__5568__auto__);
var G__54704 = (0);
seq__53984 = G__54701;
chunk__53985 = G__54702;
count__53986 = G__54703;
i__53987 = G__54704;
continue;
} else {
var map__54009 = cljs.core.first(seq__53984__$1);
var map__54009__$1 = cljs.core.__destructure_map(map__54009);
var src = map__54009__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54009__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54009__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54009__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54009__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54014){var e_54705 = e54014;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54705);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54705.message)].join('')));
}

var G__54706 = cljs.core.next(seq__53984__$1);
var G__54707 = null;
var G__54708 = (0);
var G__54709 = (0);
seq__53984 = G__54706;
chunk__53985 = G__54707;
count__53986 = G__54708;
i__53987 = G__54709;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__54016 = cljs.core.seq(js_requires);
var chunk__54017 = null;
var count__54018 = (0);
var i__54019 = (0);
while(true){
if((i__54019 < count__54018)){
var js_ns = chunk__54017.cljs$core$IIndexed$_nth$arity$2(null,i__54019);
var require_str_54710 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54710);


var G__54711 = seq__54016;
var G__54712 = chunk__54017;
var G__54713 = count__54018;
var G__54714 = (i__54019 + (1));
seq__54016 = G__54711;
chunk__54017 = G__54712;
count__54018 = G__54713;
i__54019 = G__54714;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54016);
if(temp__5804__auto__){
var seq__54016__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54016__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54016__$1);
var G__54715 = cljs.core.chunk_rest(seq__54016__$1);
var G__54716 = c__5568__auto__;
var G__54717 = cljs.core.count(c__5568__auto__);
var G__54718 = (0);
seq__54016 = G__54715;
chunk__54017 = G__54716;
count__54018 = G__54717;
i__54019 = G__54718;
continue;
} else {
var js_ns = cljs.core.first(seq__54016__$1);
var require_str_54719 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54719);


var G__54720 = cljs.core.next(seq__54016__$1);
var G__54721 = null;
var G__54722 = (0);
var G__54723 = (0);
seq__54016 = G__54720;
chunk__54017 = G__54721;
count__54018 = G__54722;
i__54019 = G__54723;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54025){
var map__54026 = p__54025;
var map__54026__$1 = cljs.core.__destructure_map(map__54026);
var msg = map__54026__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54026__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54026__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54028(s__54029){
return (new cljs.core.LazySeq(null,(function (){
var s__54029__$1 = s__54029;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__54029__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__54038 = cljs.core.first(xs__6360__auto__);
var map__54038__$1 = cljs.core.__destructure_map(map__54038);
var src = map__54038__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54038__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54038__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__54029__$1,map__54038,map__54038__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54026,map__54026__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54028_$_iter__54030(s__54031){
return (new cljs.core.LazySeq(null,((function (s__54029__$1,map__54038,map__54038__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54026,map__54026__$1,msg,info,reload_info){
return (function (){
var s__54031__$1 = s__54031;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__54031__$1);
if(temp__5804__auto____$1){
var s__54031__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54031__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__54031__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__54033 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__54032 = (0);
while(true){
if((i__54032 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__54032);
cljs.core.chunk_append(b__54033,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54729 = (i__54032 + (1));
i__54032 = G__54729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54033),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54028_$_iter__54030(cljs.core.chunk_rest(s__54031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54033),null);
}
} else {
var warning = cljs.core.first(s__54031__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54028_$_iter__54030(cljs.core.rest(s__54031__$2)));
}
} else {
return null;
}
break;
}
});})(s__54029__$1,map__54038,map__54038__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54026,map__54026__$1,msg,info,reload_info))
,null,null));
});})(s__54029__$1,map__54038,map__54038__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54026,map__54026__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54028(cljs.core.rest(s__54029__$1)));
} else {
var G__54733 = cljs.core.rest(s__54029__$1);
s__54029__$1 = G__54733;
continue;
}
} else {
var G__54734 = cljs.core.rest(s__54029__$1);
s__54029__$1 = G__54734;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__54046_54736 = cljs.core.seq(warnings);
var chunk__54047_54737 = null;
var count__54048_54738 = (0);
var i__54049_54739 = (0);
while(true){
if((i__54049_54739 < count__54048_54738)){
var map__54062_54740 = chunk__54047_54737.cljs$core$IIndexed$_nth$arity$2(null,i__54049_54739);
var map__54062_54741__$1 = cljs.core.__destructure_map(map__54062_54740);
var w_54742 = map__54062_54741__$1;
var msg_54743__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54062_54741__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54062_54741__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54062_54741__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54062_54741__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54746)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54744),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54745),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54743__$1)].join(''));


var G__54749 = seq__54046_54736;
var G__54750 = chunk__54047_54737;
var G__54751 = count__54048_54738;
var G__54752 = (i__54049_54739 + (1));
seq__54046_54736 = G__54749;
chunk__54047_54737 = G__54750;
count__54048_54738 = G__54751;
i__54049_54739 = G__54752;
continue;
} else {
var temp__5804__auto___54753 = cljs.core.seq(seq__54046_54736);
if(temp__5804__auto___54753){
var seq__54046_54754__$1 = temp__5804__auto___54753;
if(cljs.core.chunked_seq_QMARK_(seq__54046_54754__$1)){
var c__5568__auto___54755 = cljs.core.chunk_first(seq__54046_54754__$1);
var G__54756 = cljs.core.chunk_rest(seq__54046_54754__$1);
var G__54757 = c__5568__auto___54755;
var G__54758 = cljs.core.count(c__5568__auto___54755);
var G__54759 = (0);
seq__54046_54736 = G__54756;
chunk__54047_54737 = G__54757;
count__54048_54738 = G__54758;
i__54049_54739 = G__54759;
continue;
} else {
var map__54065_54760 = cljs.core.first(seq__54046_54754__$1);
var map__54065_54761__$1 = cljs.core.__destructure_map(map__54065_54760);
var w_54762 = map__54065_54761__$1;
var msg_54763__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065_54761__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065_54761__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065_54761__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54065_54761__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54766)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54764),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54765),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54763__$1)].join(''));


var G__54768 = cljs.core.next(seq__54046_54754__$1);
var G__54769 = null;
var G__54770 = (0);
var G__54771 = (0);
seq__54046_54736 = G__54768;
chunk__54047_54737 = G__54769;
count__54048_54738 = G__54770;
i__54049_54739 = G__54771;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54024_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54024_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54077){
var map__54078 = p__54077;
var map__54078__$1 = cljs.core.__destructure_map(map__54078);
var msg = map__54078__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__54080 = cljs.core.seq(updates);
var chunk__54082 = null;
var count__54083 = (0);
var i__54084 = (0);
while(true){
if((i__54084 < count__54083)){
var path = chunk__54082.cljs$core$IIndexed$_nth$arity$2(null,i__54084);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54374_54774 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54378_54775 = null;
var count__54379_54776 = (0);
var i__54380_54777 = (0);
while(true){
if((i__54380_54777 < count__54379_54776)){
var node_54780 = chunk__54378_54775.cljs$core$IIndexed$_nth$arity$2(null,i__54380_54777);
if(cljs.core.not(node_54780.shadow$old)){
var path_match_54781 = shadow.cljs.devtools.client.browser.match_paths(node_54780.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54781)){
var new_link_54782 = (function (){var G__54480 = node_54780.cloneNode(true);
G__54480.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54781),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54480;
})();
(node_54780.shadow$old = true);

(new_link_54782.onload = ((function (seq__54374_54774,chunk__54378_54775,count__54379_54776,i__54380_54777,seq__54080,chunk__54082,count__54083,i__54084,new_link_54782,path_match_54781,node_54780,path,map__54078,map__54078__$1,msg,updates,reload_info){
return (function (e){
var seq__54481_54783 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54483_54784 = null;
var count__54484_54785 = (0);
var i__54485_54786 = (0);
while(true){
if((i__54485_54786 < count__54484_54785)){
var map__54496_54788 = chunk__54483_54784.cljs$core$IIndexed$_nth$arity$2(null,i__54485_54786);
var map__54496_54789__$1 = cljs.core.__destructure_map(map__54496_54788);
var task_54790 = map__54496_54789__$1;
var fn_str_54791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54496_54789__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54496_54789__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54793 = goog.getObjectByName(fn_str_54791,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54792)].join(''));

(fn_obj_54793.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54793.cljs$core$IFn$_invoke$arity$2(path,new_link_54782) : fn_obj_54793.call(null,path,new_link_54782));


var G__54794 = seq__54481_54783;
var G__54795 = chunk__54483_54784;
var G__54796 = count__54484_54785;
var G__54797 = (i__54485_54786 + (1));
seq__54481_54783 = G__54794;
chunk__54483_54784 = G__54795;
count__54484_54785 = G__54796;
i__54485_54786 = G__54797;
continue;
} else {
var temp__5804__auto___54798 = cljs.core.seq(seq__54481_54783);
if(temp__5804__auto___54798){
var seq__54481_54799__$1 = temp__5804__auto___54798;
if(cljs.core.chunked_seq_QMARK_(seq__54481_54799__$1)){
var c__5568__auto___54800 = cljs.core.chunk_first(seq__54481_54799__$1);
var G__54801 = cljs.core.chunk_rest(seq__54481_54799__$1);
var G__54802 = c__5568__auto___54800;
var G__54803 = cljs.core.count(c__5568__auto___54800);
var G__54804 = (0);
seq__54481_54783 = G__54801;
chunk__54483_54784 = G__54802;
count__54484_54785 = G__54803;
i__54485_54786 = G__54804;
continue;
} else {
var map__54497_54805 = cljs.core.first(seq__54481_54799__$1);
var map__54497_54806__$1 = cljs.core.__destructure_map(map__54497_54805);
var task_54807 = map__54497_54806__$1;
var fn_str_54808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54497_54806__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54497_54806__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54810 = goog.getObjectByName(fn_str_54808,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54809)].join(''));

(fn_obj_54810.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54810.cljs$core$IFn$_invoke$arity$2(path,new_link_54782) : fn_obj_54810.call(null,path,new_link_54782));


var G__54813 = cljs.core.next(seq__54481_54799__$1);
var G__54814 = null;
var G__54815 = (0);
var G__54816 = (0);
seq__54481_54783 = G__54813;
chunk__54483_54784 = G__54814;
count__54484_54785 = G__54815;
i__54485_54786 = G__54816;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54780);
});})(seq__54374_54774,chunk__54378_54775,count__54379_54776,i__54380_54777,seq__54080,chunk__54082,count__54083,i__54084,new_link_54782,path_match_54781,node_54780,path,map__54078,map__54078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54781], 0));

goog.dom.insertSiblingAfter(new_link_54782,node_54780);


var G__54817 = seq__54374_54774;
var G__54818 = chunk__54378_54775;
var G__54819 = count__54379_54776;
var G__54820 = (i__54380_54777 + (1));
seq__54374_54774 = G__54817;
chunk__54378_54775 = G__54818;
count__54379_54776 = G__54819;
i__54380_54777 = G__54820;
continue;
} else {
var G__54821 = seq__54374_54774;
var G__54822 = chunk__54378_54775;
var G__54823 = count__54379_54776;
var G__54824 = (i__54380_54777 + (1));
seq__54374_54774 = G__54821;
chunk__54378_54775 = G__54822;
count__54379_54776 = G__54823;
i__54380_54777 = G__54824;
continue;
}
} else {
var G__54825 = seq__54374_54774;
var G__54826 = chunk__54378_54775;
var G__54827 = count__54379_54776;
var G__54828 = (i__54380_54777 + (1));
seq__54374_54774 = G__54825;
chunk__54378_54775 = G__54826;
count__54379_54776 = G__54827;
i__54380_54777 = G__54828;
continue;
}
} else {
var temp__5804__auto___54829 = cljs.core.seq(seq__54374_54774);
if(temp__5804__auto___54829){
var seq__54374_54830__$1 = temp__5804__auto___54829;
if(cljs.core.chunked_seq_QMARK_(seq__54374_54830__$1)){
var c__5568__auto___54831 = cljs.core.chunk_first(seq__54374_54830__$1);
var G__54832 = cljs.core.chunk_rest(seq__54374_54830__$1);
var G__54833 = c__5568__auto___54831;
var G__54834 = cljs.core.count(c__5568__auto___54831);
var G__54835 = (0);
seq__54374_54774 = G__54832;
chunk__54378_54775 = G__54833;
count__54379_54776 = G__54834;
i__54380_54777 = G__54835;
continue;
} else {
var node_54836 = cljs.core.first(seq__54374_54830__$1);
if(cljs.core.not(node_54836.shadow$old)){
var path_match_54837 = shadow.cljs.devtools.client.browser.match_paths(node_54836.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54837)){
var new_link_54838 = (function (){var G__54505 = node_54836.cloneNode(true);
G__54505.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54837),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54505;
})();
(node_54836.shadow$old = true);

(new_link_54838.onload = ((function (seq__54374_54774,chunk__54378_54775,count__54379_54776,i__54380_54777,seq__54080,chunk__54082,count__54083,i__54084,new_link_54838,path_match_54837,node_54836,seq__54374_54830__$1,temp__5804__auto___54829,path,map__54078,map__54078__$1,msg,updates,reload_info){
return (function (e){
var seq__54506_54839 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54508_54840 = null;
var count__54509_54841 = (0);
var i__54510_54842 = (0);
while(true){
if((i__54510_54842 < count__54509_54841)){
var map__54515_54843 = chunk__54508_54840.cljs$core$IIndexed$_nth$arity$2(null,i__54510_54842);
var map__54515_54844__$1 = cljs.core.__destructure_map(map__54515_54843);
var task_54845 = map__54515_54844__$1;
var fn_str_54846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54515_54844__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54515_54844__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54848 = goog.getObjectByName(fn_str_54846,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54847)].join(''));

(fn_obj_54848.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54848.cljs$core$IFn$_invoke$arity$2(path,new_link_54838) : fn_obj_54848.call(null,path,new_link_54838));


var G__54849 = seq__54506_54839;
var G__54850 = chunk__54508_54840;
var G__54851 = count__54509_54841;
var G__54852 = (i__54510_54842 + (1));
seq__54506_54839 = G__54849;
chunk__54508_54840 = G__54850;
count__54509_54841 = G__54851;
i__54510_54842 = G__54852;
continue;
} else {
var temp__5804__auto___54853__$1 = cljs.core.seq(seq__54506_54839);
if(temp__5804__auto___54853__$1){
var seq__54506_54854__$1 = temp__5804__auto___54853__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54506_54854__$1)){
var c__5568__auto___54855 = cljs.core.chunk_first(seq__54506_54854__$1);
var G__54856 = cljs.core.chunk_rest(seq__54506_54854__$1);
var G__54857 = c__5568__auto___54855;
var G__54858 = cljs.core.count(c__5568__auto___54855);
var G__54859 = (0);
seq__54506_54839 = G__54856;
chunk__54508_54840 = G__54857;
count__54509_54841 = G__54858;
i__54510_54842 = G__54859;
continue;
} else {
var map__54517_54860 = cljs.core.first(seq__54506_54854__$1);
var map__54517_54861__$1 = cljs.core.__destructure_map(map__54517_54860);
var task_54862 = map__54517_54861__$1;
var fn_str_54863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517_54861__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517_54861__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54865 = goog.getObjectByName(fn_str_54863,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54864)].join(''));

(fn_obj_54865.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54865.cljs$core$IFn$_invoke$arity$2(path,new_link_54838) : fn_obj_54865.call(null,path,new_link_54838));


var G__54866 = cljs.core.next(seq__54506_54854__$1);
var G__54867 = null;
var G__54868 = (0);
var G__54869 = (0);
seq__54506_54839 = G__54866;
chunk__54508_54840 = G__54867;
count__54509_54841 = G__54868;
i__54510_54842 = G__54869;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54836);
});})(seq__54374_54774,chunk__54378_54775,count__54379_54776,i__54380_54777,seq__54080,chunk__54082,count__54083,i__54084,new_link_54838,path_match_54837,node_54836,seq__54374_54830__$1,temp__5804__auto___54829,path,map__54078,map__54078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54837], 0));

goog.dom.insertSiblingAfter(new_link_54838,node_54836);


var G__54870 = cljs.core.next(seq__54374_54830__$1);
var G__54871 = null;
var G__54872 = (0);
var G__54873 = (0);
seq__54374_54774 = G__54870;
chunk__54378_54775 = G__54871;
count__54379_54776 = G__54872;
i__54380_54777 = G__54873;
continue;
} else {
var G__54874 = cljs.core.next(seq__54374_54830__$1);
var G__54875 = null;
var G__54876 = (0);
var G__54877 = (0);
seq__54374_54774 = G__54874;
chunk__54378_54775 = G__54875;
count__54379_54776 = G__54876;
i__54380_54777 = G__54877;
continue;
}
} else {
var G__54878 = cljs.core.next(seq__54374_54830__$1);
var G__54879 = null;
var G__54880 = (0);
var G__54881 = (0);
seq__54374_54774 = G__54878;
chunk__54378_54775 = G__54879;
count__54379_54776 = G__54880;
i__54380_54777 = G__54881;
continue;
}
}
} else {
}
}
break;
}


var G__54882 = seq__54080;
var G__54883 = chunk__54082;
var G__54884 = count__54083;
var G__54885 = (i__54084 + (1));
seq__54080 = G__54882;
chunk__54082 = G__54883;
count__54083 = G__54884;
i__54084 = G__54885;
continue;
} else {
var G__54886 = seq__54080;
var G__54887 = chunk__54082;
var G__54888 = count__54083;
var G__54889 = (i__54084 + (1));
seq__54080 = G__54886;
chunk__54082 = G__54887;
count__54083 = G__54888;
i__54084 = G__54889;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54080);
if(temp__5804__auto__){
var seq__54080__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54080__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54080__$1);
var G__54890 = cljs.core.chunk_rest(seq__54080__$1);
var G__54891 = c__5568__auto__;
var G__54892 = cljs.core.count(c__5568__auto__);
var G__54893 = (0);
seq__54080 = G__54890;
chunk__54082 = G__54891;
count__54083 = G__54892;
i__54084 = G__54893;
continue;
} else {
var path = cljs.core.first(seq__54080__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54522_54894 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54526_54895 = null;
var count__54527_54896 = (0);
var i__54528_54897 = (0);
while(true){
if((i__54528_54897 < count__54527_54896)){
var node_54898 = chunk__54526_54895.cljs$core$IIndexed$_nth$arity$2(null,i__54528_54897);
if(cljs.core.not(node_54898.shadow$old)){
var path_match_54899 = shadow.cljs.devtools.client.browser.match_paths(node_54898.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54899)){
var new_link_54900 = (function (){var G__54577 = node_54898.cloneNode(true);
G__54577.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54899),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54577;
})();
(node_54898.shadow$old = true);

(new_link_54900.onload = ((function (seq__54522_54894,chunk__54526_54895,count__54527_54896,i__54528_54897,seq__54080,chunk__54082,count__54083,i__54084,new_link_54900,path_match_54899,node_54898,path,seq__54080__$1,temp__5804__auto__,map__54078,map__54078__$1,msg,updates,reload_info){
return (function (e){
var seq__54578_54901 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54580_54902 = null;
var count__54581_54903 = (0);
var i__54582_54904 = (0);
while(true){
if((i__54582_54904 < count__54581_54903)){
var map__54588_54905 = chunk__54580_54902.cljs$core$IIndexed$_nth$arity$2(null,i__54582_54904);
var map__54588_54906__$1 = cljs.core.__destructure_map(map__54588_54905);
var task_54907 = map__54588_54906__$1;
var fn_str_54908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588_54906__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588_54906__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54910 = goog.getObjectByName(fn_str_54908,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54909)].join(''));

(fn_obj_54910.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54910.cljs$core$IFn$_invoke$arity$2(path,new_link_54900) : fn_obj_54910.call(null,path,new_link_54900));


var G__54911 = seq__54578_54901;
var G__54912 = chunk__54580_54902;
var G__54913 = count__54581_54903;
var G__54914 = (i__54582_54904 + (1));
seq__54578_54901 = G__54911;
chunk__54580_54902 = G__54912;
count__54581_54903 = G__54913;
i__54582_54904 = G__54914;
continue;
} else {
var temp__5804__auto___54915__$1 = cljs.core.seq(seq__54578_54901);
if(temp__5804__auto___54915__$1){
var seq__54578_54916__$1 = temp__5804__auto___54915__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54578_54916__$1)){
var c__5568__auto___54917 = cljs.core.chunk_first(seq__54578_54916__$1);
var G__54918 = cljs.core.chunk_rest(seq__54578_54916__$1);
var G__54919 = c__5568__auto___54917;
var G__54920 = cljs.core.count(c__5568__auto___54917);
var G__54921 = (0);
seq__54578_54901 = G__54918;
chunk__54580_54902 = G__54919;
count__54581_54903 = G__54920;
i__54582_54904 = G__54921;
continue;
} else {
var map__54589_54922 = cljs.core.first(seq__54578_54916__$1);
var map__54589_54923__$1 = cljs.core.__destructure_map(map__54589_54922);
var task_54924 = map__54589_54923__$1;
var fn_str_54925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589_54923__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589_54923__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54927 = goog.getObjectByName(fn_str_54925,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54926)].join(''));

(fn_obj_54927.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54927.cljs$core$IFn$_invoke$arity$2(path,new_link_54900) : fn_obj_54927.call(null,path,new_link_54900));


var G__54928 = cljs.core.next(seq__54578_54916__$1);
var G__54929 = null;
var G__54930 = (0);
var G__54931 = (0);
seq__54578_54901 = G__54928;
chunk__54580_54902 = G__54929;
count__54581_54903 = G__54930;
i__54582_54904 = G__54931;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54898);
});})(seq__54522_54894,chunk__54526_54895,count__54527_54896,i__54528_54897,seq__54080,chunk__54082,count__54083,i__54084,new_link_54900,path_match_54899,node_54898,path,seq__54080__$1,temp__5804__auto__,map__54078,map__54078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54899], 0));

goog.dom.insertSiblingAfter(new_link_54900,node_54898);


var G__54932 = seq__54522_54894;
var G__54933 = chunk__54526_54895;
var G__54934 = count__54527_54896;
var G__54935 = (i__54528_54897 + (1));
seq__54522_54894 = G__54932;
chunk__54526_54895 = G__54933;
count__54527_54896 = G__54934;
i__54528_54897 = G__54935;
continue;
} else {
var G__54936 = seq__54522_54894;
var G__54937 = chunk__54526_54895;
var G__54938 = count__54527_54896;
var G__54939 = (i__54528_54897 + (1));
seq__54522_54894 = G__54936;
chunk__54526_54895 = G__54937;
count__54527_54896 = G__54938;
i__54528_54897 = G__54939;
continue;
}
} else {
var G__54940 = seq__54522_54894;
var G__54941 = chunk__54526_54895;
var G__54942 = count__54527_54896;
var G__54943 = (i__54528_54897 + (1));
seq__54522_54894 = G__54940;
chunk__54526_54895 = G__54941;
count__54527_54896 = G__54942;
i__54528_54897 = G__54943;
continue;
}
} else {
var temp__5804__auto___54944__$1 = cljs.core.seq(seq__54522_54894);
if(temp__5804__auto___54944__$1){
var seq__54522_54945__$1 = temp__5804__auto___54944__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54522_54945__$1)){
var c__5568__auto___54946 = cljs.core.chunk_first(seq__54522_54945__$1);
var G__54947 = cljs.core.chunk_rest(seq__54522_54945__$1);
var G__54948 = c__5568__auto___54946;
var G__54949 = cljs.core.count(c__5568__auto___54946);
var G__54950 = (0);
seq__54522_54894 = G__54947;
chunk__54526_54895 = G__54948;
count__54527_54896 = G__54949;
i__54528_54897 = G__54950;
continue;
} else {
var node_54951 = cljs.core.first(seq__54522_54945__$1);
if(cljs.core.not(node_54951.shadow$old)){
var path_match_54952 = shadow.cljs.devtools.client.browser.match_paths(node_54951.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54952)){
var new_link_54953 = (function (){var G__54592 = node_54951.cloneNode(true);
G__54592.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54952),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54592;
})();
(node_54951.shadow$old = true);

(new_link_54953.onload = ((function (seq__54522_54894,chunk__54526_54895,count__54527_54896,i__54528_54897,seq__54080,chunk__54082,count__54083,i__54084,new_link_54953,path_match_54952,node_54951,seq__54522_54945__$1,temp__5804__auto___54944__$1,path,seq__54080__$1,temp__5804__auto__,map__54078,map__54078__$1,msg,updates,reload_info){
return (function (e){
var seq__54594_54954 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54596_54955 = null;
var count__54597_54956 = (0);
var i__54598_54957 = (0);
while(true){
if((i__54598_54957 < count__54597_54956)){
var map__54608_54958 = chunk__54596_54955.cljs$core$IIndexed$_nth$arity$2(null,i__54598_54957);
var map__54608_54959__$1 = cljs.core.__destructure_map(map__54608_54958);
var task_54960 = map__54608_54959__$1;
var fn_str_54961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54608_54959__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54608_54959__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54963 = goog.getObjectByName(fn_str_54961,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54962)].join(''));

(fn_obj_54963.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54963.cljs$core$IFn$_invoke$arity$2(path,new_link_54953) : fn_obj_54963.call(null,path,new_link_54953));


var G__54964 = seq__54594_54954;
var G__54965 = chunk__54596_54955;
var G__54966 = count__54597_54956;
var G__54967 = (i__54598_54957 + (1));
seq__54594_54954 = G__54964;
chunk__54596_54955 = G__54965;
count__54597_54956 = G__54966;
i__54598_54957 = G__54967;
continue;
} else {
var temp__5804__auto___54968__$2 = cljs.core.seq(seq__54594_54954);
if(temp__5804__auto___54968__$2){
var seq__54594_54969__$1 = temp__5804__auto___54968__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54594_54969__$1)){
var c__5568__auto___54970 = cljs.core.chunk_first(seq__54594_54969__$1);
var G__54971 = cljs.core.chunk_rest(seq__54594_54969__$1);
var G__54972 = c__5568__auto___54970;
var G__54973 = cljs.core.count(c__5568__auto___54970);
var G__54974 = (0);
seq__54594_54954 = G__54971;
chunk__54596_54955 = G__54972;
count__54597_54956 = G__54973;
i__54598_54957 = G__54974;
continue;
} else {
var map__54611_54975 = cljs.core.first(seq__54594_54969__$1);
var map__54611_54976__$1 = cljs.core.__destructure_map(map__54611_54975);
var task_54977 = map__54611_54976__$1;
var fn_str_54978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611_54976__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611_54976__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54980 = goog.getObjectByName(fn_str_54978,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54979)].join(''));

(fn_obj_54980.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54980.cljs$core$IFn$_invoke$arity$2(path,new_link_54953) : fn_obj_54980.call(null,path,new_link_54953));


var G__54981 = cljs.core.next(seq__54594_54969__$1);
var G__54982 = null;
var G__54983 = (0);
var G__54984 = (0);
seq__54594_54954 = G__54981;
chunk__54596_54955 = G__54982;
count__54597_54956 = G__54983;
i__54598_54957 = G__54984;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54951);
});})(seq__54522_54894,chunk__54526_54895,count__54527_54896,i__54528_54897,seq__54080,chunk__54082,count__54083,i__54084,new_link_54953,path_match_54952,node_54951,seq__54522_54945__$1,temp__5804__auto___54944__$1,path,seq__54080__$1,temp__5804__auto__,map__54078,map__54078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54952], 0));

goog.dom.insertSiblingAfter(new_link_54953,node_54951);


var G__54985 = cljs.core.next(seq__54522_54945__$1);
var G__54986 = null;
var G__54987 = (0);
var G__54988 = (0);
seq__54522_54894 = G__54985;
chunk__54526_54895 = G__54986;
count__54527_54896 = G__54987;
i__54528_54897 = G__54988;
continue;
} else {
var G__54989 = cljs.core.next(seq__54522_54945__$1);
var G__54990 = null;
var G__54991 = (0);
var G__54992 = (0);
seq__54522_54894 = G__54989;
chunk__54526_54895 = G__54990;
count__54527_54896 = G__54991;
i__54528_54897 = G__54992;
continue;
}
} else {
var G__54993 = cljs.core.next(seq__54522_54945__$1);
var G__54994 = null;
var G__54995 = (0);
var G__54996 = (0);
seq__54522_54894 = G__54993;
chunk__54526_54895 = G__54994;
count__54527_54896 = G__54995;
i__54528_54897 = G__54996;
continue;
}
}
} else {
}
}
break;
}


var G__54997 = cljs.core.next(seq__54080__$1);
var G__54998 = null;
var G__54999 = (0);
var G__55000 = (0);
seq__54080 = G__54997;
chunk__54082 = G__54998;
count__54083 = G__54999;
i__54084 = G__55000;
continue;
} else {
var G__55001 = cljs.core.next(seq__54080__$1);
var G__55002 = null;
var G__55003 = (0);
var G__55004 = (0);
seq__54080 = G__55001;
chunk__54082 = G__55002;
count__54083 = G__55003;
i__54084 = G__55004;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54623){
var map__54624 = p__54623;
var map__54624__$1 = cljs.core.__destructure_map(map__54624);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54643){
var map__54644 = p__54643;
var map__54644__$1 = cljs.core.__destructure_map(map__54644);
var _ = map__54644__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54644__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54645,done,error){
var map__54646 = p__54645;
var map__54646__$1 = cljs.core.__destructure_map(map__54646);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54646__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54647,done,error){
var map__54648 = p__54647;
var map__54648__$1 = cljs.core.__destructure_map(map__54648);
var msg = map__54648__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54648__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54649){
var map__54650 = p__54649;
var map__54650__$1 = cljs.core.__destructure_map(map__54650);
var src = map__54650__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54650__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54651 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54651) : done.call(null,G__54651));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54652){
var map__54653 = p__54652;
var map__54653__$1 = cljs.core.__destructure_map(map__54653);
var msg__$1 = map__54653__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54653__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54654){var ex = e54654;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54655){
var map__54656 = p__54655;
var map__54656__$1 = cljs.core.__destructure_map(map__54656);
var env = map__54656__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54656__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54687){
var map__54688 = p__54687;
var map__54688__$1 = cljs.core.__destructure_map(map__54688);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54688__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54688__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__54689){
var map__54690 = p__54689;
var map__54690__$1 = cljs.core.__destructure_map(map__54690);
var svc = map__54690__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54690__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
