goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44668 = arguments.length;
var i__5770__auto___44669 = (0);
while(true){
if((i__5770__auto___44669 < len__5769__auto___44668)){
args__5775__auto__.push((arguments[i__5770__auto___44669]));

var G__44670 = (i__5770__auto___44669 + (1));
i__5770__auto___44669 = G__44670;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44219){
var G__44220 = cljs.core.first(seq44219);
var seq44219__$1 = cljs.core.next(seq44219);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44220,seq44219__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44224 = cljs.core.seq(sources);
var chunk__44225 = null;
var count__44226 = (0);
var i__44227 = (0);
while(true){
if((i__44227 < count__44226)){
var map__44238 = chunk__44225.cljs$core$IIndexed$_nth$arity$2(null,i__44227);
var map__44238__$1 = cljs.core.__destructure_map(map__44238);
var src = map__44238__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44238__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44238__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44238__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44239){var e_44671 = e44239;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44671);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44671.message)].join('')));
}

var G__44672 = seq__44224;
var G__44673 = chunk__44225;
var G__44674 = count__44226;
var G__44675 = (i__44227 + (1));
seq__44224 = G__44672;
chunk__44225 = G__44673;
count__44226 = G__44674;
i__44227 = G__44675;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44224);
if(temp__5804__auto__){
var seq__44224__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44224__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44224__$1);
var G__44676 = cljs.core.chunk_rest(seq__44224__$1);
var G__44677 = c__5568__auto__;
var G__44678 = cljs.core.count(c__5568__auto__);
var G__44679 = (0);
seq__44224 = G__44676;
chunk__44225 = G__44677;
count__44226 = G__44678;
i__44227 = G__44679;
continue;
} else {
var map__44241 = cljs.core.first(seq__44224__$1);
var map__44241__$1 = cljs.core.__destructure_map(map__44241);
var src = map__44241__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44242){var e_44680 = e44242;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44680);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44680.message)].join('')));
}

var G__44681 = cljs.core.next(seq__44224__$1);
var G__44682 = null;
var G__44683 = (0);
var G__44684 = (0);
seq__44224 = G__44681;
chunk__44225 = G__44682;
count__44226 = G__44683;
i__44227 = G__44684;
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
var seq__44249 = cljs.core.seq(js_requires);
var chunk__44250 = null;
var count__44251 = (0);
var i__44252 = (0);
while(true){
if((i__44252 < count__44251)){
var js_ns = chunk__44250.cljs$core$IIndexed$_nth$arity$2(null,i__44252);
var require_str_44685 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44685);


var G__44686 = seq__44249;
var G__44687 = chunk__44250;
var G__44688 = count__44251;
var G__44689 = (i__44252 + (1));
seq__44249 = G__44686;
chunk__44250 = G__44687;
count__44251 = G__44688;
i__44252 = G__44689;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44249);
if(temp__5804__auto__){
var seq__44249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44249__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44249__$1);
var G__44690 = cljs.core.chunk_rest(seq__44249__$1);
var G__44691 = c__5568__auto__;
var G__44692 = cljs.core.count(c__5568__auto__);
var G__44693 = (0);
seq__44249 = G__44690;
chunk__44250 = G__44691;
count__44251 = G__44692;
i__44252 = G__44693;
continue;
} else {
var js_ns = cljs.core.first(seq__44249__$1);
var require_str_44694 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44694);


var G__44695 = cljs.core.next(seq__44249__$1);
var G__44696 = null;
var G__44697 = (0);
var G__44698 = (0);
seq__44249 = G__44695;
chunk__44250 = G__44696;
count__44251 = G__44697;
i__44252 = G__44698;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44256){
var map__44257 = p__44256;
var map__44257__$1 = cljs.core.__destructure_map(map__44257);
var msg = map__44257__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44257__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44257__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44258(s__44259){
return (new cljs.core.LazySeq(null,(function (){
var s__44259__$1 = s__44259;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44259__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__44267 = cljs.core.first(xs__6360__auto__);
var map__44267__$1 = cljs.core.__destructure_map(map__44267);
var src = map__44267__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44267__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44267__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__44259__$1,map__44267,map__44267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44257,map__44257__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44258_$_iter__44260(s__44261){
return (new cljs.core.LazySeq(null,((function (s__44259__$1,map__44267,map__44267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44257,map__44257__$1,msg,info,reload_info){
return (function (){
var s__44261__$1 = s__44261;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__44261__$1);
if(temp__5804__auto____$1){
var s__44261__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44261__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44261__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44263 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44262 = (0);
while(true){
if((i__44262 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__44262);
cljs.core.chunk_append(b__44263,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44699 = (i__44262 + (1));
i__44262 = G__44699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44263),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44258_$_iter__44260(cljs.core.chunk_rest(s__44261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44263),null);
}
} else {
var warning = cljs.core.first(s__44261__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44258_$_iter__44260(cljs.core.rest(s__44261__$2)));
}
} else {
return null;
}
break;
}
});})(s__44259__$1,map__44267,map__44267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44257,map__44257__$1,msg,info,reload_info))
,null,null));
});})(s__44259__$1,map__44267,map__44267__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44257,map__44257__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44258(cljs.core.rest(s__44259__$1)));
} else {
var G__44700 = cljs.core.rest(s__44259__$1);
s__44259__$1 = G__44700;
continue;
}
} else {
var G__44701 = cljs.core.rest(s__44259__$1);
s__44259__$1 = G__44701;
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
var seq__44273_44702 = cljs.core.seq(warnings);
var chunk__44274_44703 = null;
var count__44275_44704 = (0);
var i__44276_44705 = (0);
while(true){
if((i__44276_44705 < count__44275_44704)){
var map__44281_44706 = chunk__44274_44703.cljs$core$IIndexed$_nth$arity$2(null,i__44276_44705);
var map__44281_44707__$1 = cljs.core.__destructure_map(map__44281_44706);
var w_44708 = map__44281_44707__$1;
var msg_44709__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281_44707__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281_44707__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281_44707__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281_44707__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44712)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44710),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44711),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44709__$1)].join(''));


var G__44713 = seq__44273_44702;
var G__44714 = chunk__44274_44703;
var G__44715 = count__44275_44704;
var G__44716 = (i__44276_44705 + (1));
seq__44273_44702 = G__44713;
chunk__44274_44703 = G__44714;
count__44275_44704 = G__44715;
i__44276_44705 = G__44716;
continue;
} else {
var temp__5804__auto___44717 = cljs.core.seq(seq__44273_44702);
if(temp__5804__auto___44717){
var seq__44273_44719__$1 = temp__5804__auto___44717;
if(cljs.core.chunked_seq_QMARK_(seq__44273_44719__$1)){
var c__5568__auto___44720 = cljs.core.chunk_first(seq__44273_44719__$1);
var G__44721 = cljs.core.chunk_rest(seq__44273_44719__$1);
var G__44722 = c__5568__auto___44720;
var G__44723 = cljs.core.count(c__5568__auto___44720);
var G__44724 = (0);
seq__44273_44702 = G__44721;
chunk__44274_44703 = G__44722;
count__44275_44704 = G__44723;
i__44276_44705 = G__44724;
continue;
} else {
var map__44282_44725 = cljs.core.first(seq__44273_44719__$1);
var map__44282_44726__$1 = cljs.core.__destructure_map(map__44282_44725);
var w_44727 = map__44282_44726__$1;
var msg_44728__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44282_44726__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44282_44726__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44282_44726__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44282_44726__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44731)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44729),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44730),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44728__$1)].join(''));


var G__44732 = cljs.core.next(seq__44273_44719__$1);
var G__44733 = null;
var G__44734 = (0);
var G__44735 = (0);
seq__44273_44702 = G__44732;
chunk__44274_44703 = G__44733;
count__44275_44704 = G__44734;
i__44276_44705 = G__44735;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44255_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44255_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44283){
var map__44284 = p__44283;
var map__44284__$1 = cljs.core.__destructure_map(map__44284);
var msg = map__44284__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44284__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44284__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__44285 = cljs.core.seq(updates);
var chunk__44287 = null;
var count__44288 = (0);
var i__44289 = (0);
while(true){
if((i__44289 < count__44288)){
var path = chunk__44287.cljs$core$IIndexed$_nth$arity$2(null,i__44289);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44505_44739 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44509_44740 = null;
var count__44510_44741 = (0);
var i__44511_44742 = (0);
while(true){
if((i__44511_44742 < count__44510_44741)){
var node_44743 = chunk__44509_44740.cljs$core$IIndexed$_nth$arity$2(null,i__44511_44742);
if(cljs.core.not(node_44743.shadow$old)){
var path_match_44744 = shadow.cljs.devtools.client.browser.match_paths(node_44743.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44744)){
var new_link_44745 = (function (){var G__44544 = node_44743.cloneNode(true);
G__44544.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44744),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44544;
})();
(node_44743.shadow$old = true);

(new_link_44745.onload = ((function (seq__44505_44739,chunk__44509_44740,count__44510_44741,i__44511_44742,seq__44285,chunk__44287,count__44288,i__44289,new_link_44745,path_match_44744,node_44743,path,map__44284,map__44284__$1,msg,updates,reload_info){
return (function (e){
var seq__44545_44746 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44547_44747 = null;
var count__44548_44748 = (0);
var i__44549_44749 = (0);
while(true){
if((i__44549_44749 < count__44548_44748)){
var map__44553_44750 = chunk__44547_44747.cljs$core$IIndexed$_nth$arity$2(null,i__44549_44749);
var map__44553_44751__$1 = cljs.core.__destructure_map(map__44553_44750);
var task_44752 = map__44553_44751__$1;
var fn_str_44753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44553_44751__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44553_44751__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44755 = goog.getObjectByName(fn_str_44753,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44754)].join(''));

(fn_obj_44755.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44755.cljs$core$IFn$_invoke$arity$2(path,new_link_44745) : fn_obj_44755.call(null,path,new_link_44745));


var G__44756 = seq__44545_44746;
var G__44757 = chunk__44547_44747;
var G__44758 = count__44548_44748;
var G__44759 = (i__44549_44749 + (1));
seq__44545_44746 = G__44756;
chunk__44547_44747 = G__44757;
count__44548_44748 = G__44758;
i__44549_44749 = G__44759;
continue;
} else {
var temp__5804__auto___44760 = cljs.core.seq(seq__44545_44746);
if(temp__5804__auto___44760){
var seq__44545_44761__$1 = temp__5804__auto___44760;
if(cljs.core.chunked_seq_QMARK_(seq__44545_44761__$1)){
var c__5568__auto___44762 = cljs.core.chunk_first(seq__44545_44761__$1);
var G__44763 = cljs.core.chunk_rest(seq__44545_44761__$1);
var G__44764 = c__5568__auto___44762;
var G__44765 = cljs.core.count(c__5568__auto___44762);
var G__44766 = (0);
seq__44545_44746 = G__44763;
chunk__44547_44747 = G__44764;
count__44548_44748 = G__44765;
i__44549_44749 = G__44766;
continue;
} else {
var map__44554_44767 = cljs.core.first(seq__44545_44761__$1);
var map__44554_44768__$1 = cljs.core.__destructure_map(map__44554_44767);
var task_44769 = map__44554_44768__$1;
var fn_str_44770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44554_44768__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44554_44768__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44772 = goog.getObjectByName(fn_str_44770,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44771)].join(''));

(fn_obj_44772.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44772.cljs$core$IFn$_invoke$arity$2(path,new_link_44745) : fn_obj_44772.call(null,path,new_link_44745));


var G__44774 = cljs.core.next(seq__44545_44761__$1);
var G__44775 = null;
var G__44776 = (0);
var G__44777 = (0);
seq__44545_44746 = G__44774;
chunk__44547_44747 = G__44775;
count__44548_44748 = G__44776;
i__44549_44749 = G__44777;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44743);
});})(seq__44505_44739,chunk__44509_44740,count__44510_44741,i__44511_44742,seq__44285,chunk__44287,count__44288,i__44289,new_link_44745,path_match_44744,node_44743,path,map__44284,map__44284__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44744], 0));

goog.dom.insertSiblingAfter(new_link_44745,node_44743);


var G__44778 = seq__44505_44739;
var G__44779 = chunk__44509_44740;
var G__44780 = count__44510_44741;
var G__44781 = (i__44511_44742 + (1));
seq__44505_44739 = G__44778;
chunk__44509_44740 = G__44779;
count__44510_44741 = G__44780;
i__44511_44742 = G__44781;
continue;
} else {
var G__44782 = seq__44505_44739;
var G__44783 = chunk__44509_44740;
var G__44784 = count__44510_44741;
var G__44785 = (i__44511_44742 + (1));
seq__44505_44739 = G__44782;
chunk__44509_44740 = G__44783;
count__44510_44741 = G__44784;
i__44511_44742 = G__44785;
continue;
}
} else {
var G__44786 = seq__44505_44739;
var G__44787 = chunk__44509_44740;
var G__44788 = count__44510_44741;
var G__44789 = (i__44511_44742 + (1));
seq__44505_44739 = G__44786;
chunk__44509_44740 = G__44787;
count__44510_44741 = G__44788;
i__44511_44742 = G__44789;
continue;
}
} else {
var temp__5804__auto___44790 = cljs.core.seq(seq__44505_44739);
if(temp__5804__auto___44790){
var seq__44505_44791__$1 = temp__5804__auto___44790;
if(cljs.core.chunked_seq_QMARK_(seq__44505_44791__$1)){
var c__5568__auto___44792 = cljs.core.chunk_first(seq__44505_44791__$1);
var G__44793 = cljs.core.chunk_rest(seq__44505_44791__$1);
var G__44794 = c__5568__auto___44792;
var G__44795 = cljs.core.count(c__5568__auto___44792);
var G__44796 = (0);
seq__44505_44739 = G__44793;
chunk__44509_44740 = G__44794;
count__44510_44741 = G__44795;
i__44511_44742 = G__44796;
continue;
} else {
var node_44797 = cljs.core.first(seq__44505_44791__$1);
if(cljs.core.not(node_44797.shadow$old)){
var path_match_44798 = shadow.cljs.devtools.client.browser.match_paths(node_44797.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44798)){
var new_link_44799 = (function (){var G__44561 = node_44797.cloneNode(true);
G__44561.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44798),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44561;
})();
(node_44797.shadow$old = true);

(new_link_44799.onload = ((function (seq__44505_44739,chunk__44509_44740,count__44510_44741,i__44511_44742,seq__44285,chunk__44287,count__44288,i__44289,new_link_44799,path_match_44798,node_44797,seq__44505_44791__$1,temp__5804__auto___44790,path,map__44284,map__44284__$1,msg,updates,reload_info){
return (function (e){
var seq__44562_44800 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44564_44801 = null;
var count__44565_44802 = (0);
var i__44566_44803 = (0);
while(true){
if((i__44566_44803 < count__44565_44802)){
var map__44573_44804 = chunk__44564_44801.cljs$core$IIndexed$_nth$arity$2(null,i__44566_44803);
var map__44573_44805__$1 = cljs.core.__destructure_map(map__44573_44804);
var task_44806 = map__44573_44805__$1;
var fn_str_44807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44573_44805__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44573_44805__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44809 = goog.getObjectByName(fn_str_44807,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44808)].join(''));

(fn_obj_44809.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44809.cljs$core$IFn$_invoke$arity$2(path,new_link_44799) : fn_obj_44809.call(null,path,new_link_44799));


var G__44810 = seq__44562_44800;
var G__44811 = chunk__44564_44801;
var G__44812 = count__44565_44802;
var G__44813 = (i__44566_44803 + (1));
seq__44562_44800 = G__44810;
chunk__44564_44801 = G__44811;
count__44565_44802 = G__44812;
i__44566_44803 = G__44813;
continue;
} else {
var temp__5804__auto___44814__$1 = cljs.core.seq(seq__44562_44800);
if(temp__5804__auto___44814__$1){
var seq__44562_44815__$1 = temp__5804__auto___44814__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44562_44815__$1)){
var c__5568__auto___44816 = cljs.core.chunk_first(seq__44562_44815__$1);
var G__44817 = cljs.core.chunk_rest(seq__44562_44815__$1);
var G__44818 = c__5568__auto___44816;
var G__44819 = cljs.core.count(c__5568__auto___44816);
var G__44820 = (0);
seq__44562_44800 = G__44817;
chunk__44564_44801 = G__44818;
count__44565_44802 = G__44819;
i__44566_44803 = G__44820;
continue;
} else {
var map__44575_44821 = cljs.core.first(seq__44562_44815__$1);
var map__44575_44822__$1 = cljs.core.__destructure_map(map__44575_44821);
var task_44823 = map__44575_44822__$1;
var fn_str_44824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44575_44822__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44575_44822__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44826 = goog.getObjectByName(fn_str_44824,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44825)].join(''));

(fn_obj_44826.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44826.cljs$core$IFn$_invoke$arity$2(path,new_link_44799) : fn_obj_44826.call(null,path,new_link_44799));


var G__44828 = cljs.core.next(seq__44562_44815__$1);
var G__44829 = null;
var G__44830 = (0);
var G__44831 = (0);
seq__44562_44800 = G__44828;
chunk__44564_44801 = G__44829;
count__44565_44802 = G__44830;
i__44566_44803 = G__44831;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44797);
});})(seq__44505_44739,chunk__44509_44740,count__44510_44741,i__44511_44742,seq__44285,chunk__44287,count__44288,i__44289,new_link_44799,path_match_44798,node_44797,seq__44505_44791__$1,temp__5804__auto___44790,path,map__44284,map__44284__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44798], 0));

goog.dom.insertSiblingAfter(new_link_44799,node_44797);


var G__44832 = cljs.core.next(seq__44505_44791__$1);
var G__44833 = null;
var G__44834 = (0);
var G__44835 = (0);
seq__44505_44739 = G__44832;
chunk__44509_44740 = G__44833;
count__44510_44741 = G__44834;
i__44511_44742 = G__44835;
continue;
} else {
var G__44836 = cljs.core.next(seq__44505_44791__$1);
var G__44837 = null;
var G__44838 = (0);
var G__44839 = (0);
seq__44505_44739 = G__44836;
chunk__44509_44740 = G__44837;
count__44510_44741 = G__44838;
i__44511_44742 = G__44839;
continue;
}
} else {
var G__44840 = cljs.core.next(seq__44505_44791__$1);
var G__44841 = null;
var G__44842 = (0);
var G__44843 = (0);
seq__44505_44739 = G__44840;
chunk__44509_44740 = G__44841;
count__44510_44741 = G__44842;
i__44511_44742 = G__44843;
continue;
}
}
} else {
}
}
break;
}


var G__44844 = seq__44285;
var G__44845 = chunk__44287;
var G__44846 = count__44288;
var G__44847 = (i__44289 + (1));
seq__44285 = G__44844;
chunk__44287 = G__44845;
count__44288 = G__44846;
i__44289 = G__44847;
continue;
} else {
var G__44848 = seq__44285;
var G__44849 = chunk__44287;
var G__44850 = count__44288;
var G__44851 = (i__44289 + (1));
seq__44285 = G__44848;
chunk__44287 = G__44849;
count__44288 = G__44850;
i__44289 = G__44851;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44285);
if(temp__5804__auto__){
var seq__44285__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44285__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44285__$1);
var G__44852 = cljs.core.chunk_rest(seq__44285__$1);
var G__44853 = c__5568__auto__;
var G__44854 = cljs.core.count(c__5568__auto__);
var G__44855 = (0);
seq__44285 = G__44852;
chunk__44287 = G__44853;
count__44288 = G__44854;
i__44289 = G__44855;
continue;
} else {
var path = cljs.core.first(seq__44285__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44578_44856 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44582_44857 = null;
var count__44583_44858 = (0);
var i__44584_44859 = (0);
while(true){
if((i__44584_44859 < count__44583_44858)){
var node_44860 = chunk__44582_44857.cljs$core$IIndexed$_nth$arity$2(null,i__44584_44859);
if(cljs.core.not(node_44860.shadow$old)){
var path_match_44861 = shadow.cljs.devtools.client.browser.match_paths(node_44860.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44861)){
var new_link_44862 = (function (){var G__44618 = node_44860.cloneNode(true);
G__44618.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44861),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44618;
})();
(node_44860.shadow$old = true);

(new_link_44862.onload = ((function (seq__44578_44856,chunk__44582_44857,count__44583_44858,i__44584_44859,seq__44285,chunk__44287,count__44288,i__44289,new_link_44862,path_match_44861,node_44860,path,seq__44285__$1,temp__5804__auto__,map__44284,map__44284__$1,msg,updates,reload_info){
return (function (e){
var seq__44619_44863 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44621_44864 = null;
var count__44622_44865 = (0);
var i__44623_44866 = (0);
while(true){
if((i__44623_44866 < count__44622_44865)){
var map__44627_44868 = chunk__44621_44864.cljs$core$IIndexed$_nth$arity$2(null,i__44623_44866);
var map__44627_44869__$1 = cljs.core.__destructure_map(map__44627_44868);
var task_44870 = map__44627_44869__$1;
var fn_str_44871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44627_44869__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44627_44869__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44873 = goog.getObjectByName(fn_str_44871,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44872)].join(''));

(fn_obj_44873.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44873.cljs$core$IFn$_invoke$arity$2(path,new_link_44862) : fn_obj_44873.call(null,path,new_link_44862));


var G__44874 = seq__44619_44863;
var G__44875 = chunk__44621_44864;
var G__44876 = count__44622_44865;
var G__44877 = (i__44623_44866 + (1));
seq__44619_44863 = G__44874;
chunk__44621_44864 = G__44875;
count__44622_44865 = G__44876;
i__44623_44866 = G__44877;
continue;
} else {
var temp__5804__auto___44878__$1 = cljs.core.seq(seq__44619_44863);
if(temp__5804__auto___44878__$1){
var seq__44619_44879__$1 = temp__5804__auto___44878__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44619_44879__$1)){
var c__5568__auto___44880 = cljs.core.chunk_first(seq__44619_44879__$1);
var G__44881 = cljs.core.chunk_rest(seq__44619_44879__$1);
var G__44882 = c__5568__auto___44880;
var G__44883 = cljs.core.count(c__5568__auto___44880);
var G__44884 = (0);
seq__44619_44863 = G__44881;
chunk__44621_44864 = G__44882;
count__44622_44865 = G__44883;
i__44623_44866 = G__44884;
continue;
} else {
var map__44628_44885 = cljs.core.first(seq__44619_44879__$1);
var map__44628_44886__$1 = cljs.core.__destructure_map(map__44628_44885);
var task_44887 = map__44628_44886__$1;
var fn_str_44888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44628_44886__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44628_44886__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44890 = goog.getObjectByName(fn_str_44888,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44889)].join(''));

(fn_obj_44890.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44890.cljs$core$IFn$_invoke$arity$2(path,new_link_44862) : fn_obj_44890.call(null,path,new_link_44862));


var G__44891 = cljs.core.next(seq__44619_44879__$1);
var G__44892 = null;
var G__44893 = (0);
var G__44894 = (0);
seq__44619_44863 = G__44891;
chunk__44621_44864 = G__44892;
count__44622_44865 = G__44893;
i__44623_44866 = G__44894;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44860);
});})(seq__44578_44856,chunk__44582_44857,count__44583_44858,i__44584_44859,seq__44285,chunk__44287,count__44288,i__44289,new_link_44862,path_match_44861,node_44860,path,seq__44285__$1,temp__5804__auto__,map__44284,map__44284__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44861], 0));

goog.dom.insertSiblingAfter(new_link_44862,node_44860);


var G__44895 = seq__44578_44856;
var G__44896 = chunk__44582_44857;
var G__44897 = count__44583_44858;
var G__44898 = (i__44584_44859 + (1));
seq__44578_44856 = G__44895;
chunk__44582_44857 = G__44896;
count__44583_44858 = G__44897;
i__44584_44859 = G__44898;
continue;
} else {
var G__44899 = seq__44578_44856;
var G__44900 = chunk__44582_44857;
var G__44901 = count__44583_44858;
var G__44902 = (i__44584_44859 + (1));
seq__44578_44856 = G__44899;
chunk__44582_44857 = G__44900;
count__44583_44858 = G__44901;
i__44584_44859 = G__44902;
continue;
}
} else {
var G__44903 = seq__44578_44856;
var G__44904 = chunk__44582_44857;
var G__44905 = count__44583_44858;
var G__44906 = (i__44584_44859 + (1));
seq__44578_44856 = G__44903;
chunk__44582_44857 = G__44904;
count__44583_44858 = G__44905;
i__44584_44859 = G__44906;
continue;
}
} else {
var temp__5804__auto___44907__$1 = cljs.core.seq(seq__44578_44856);
if(temp__5804__auto___44907__$1){
var seq__44578_44908__$1 = temp__5804__auto___44907__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44578_44908__$1)){
var c__5568__auto___44912 = cljs.core.chunk_first(seq__44578_44908__$1);
var G__44913 = cljs.core.chunk_rest(seq__44578_44908__$1);
var G__44914 = c__5568__auto___44912;
var G__44915 = cljs.core.count(c__5568__auto___44912);
var G__44916 = (0);
seq__44578_44856 = G__44913;
chunk__44582_44857 = G__44914;
count__44583_44858 = G__44915;
i__44584_44859 = G__44916;
continue;
} else {
var node_44917 = cljs.core.first(seq__44578_44908__$1);
if(cljs.core.not(node_44917.shadow$old)){
var path_match_44918 = shadow.cljs.devtools.client.browser.match_paths(node_44917.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44918)){
var new_link_44919 = (function (){var G__44629 = node_44917.cloneNode(true);
G__44629.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44918),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44629;
})();
(node_44917.shadow$old = true);

(new_link_44919.onload = ((function (seq__44578_44856,chunk__44582_44857,count__44583_44858,i__44584_44859,seq__44285,chunk__44287,count__44288,i__44289,new_link_44919,path_match_44918,node_44917,seq__44578_44908__$1,temp__5804__auto___44907__$1,path,seq__44285__$1,temp__5804__auto__,map__44284,map__44284__$1,msg,updates,reload_info){
return (function (e){
var seq__44630_44920 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44632_44921 = null;
var count__44633_44922 = (0);
var i__44634_44923 = (0);
while(true){
if((i__44634_44923 < count__44633_44922)){
var map__44638_44924 = chunk__44632_44921.cljs$core$IIndexed$_nth$arity$2(null,i__44634_44923);
var map__44638_44925__$1 = cljs.core.__destructure_map(map__44638_44924);
var task_44926 = map__44638_44925__$1;
var fn_str_44927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44638_44925__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44638_44925__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44929 = goog.getObjectByName(fn_str_44927,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44928)].join(''));

(fn_obj_44929.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44929.cljs$core$IFn$_invoke$arity$2(path,new_link_44919) : fn_obj_44929.call(null,path,new_link_44919));


var G__44930 = seq__44630_44920;
var G__44931 = chunk__44632_44921;
var G__44932 = count__44633_44922;
var G__44933 = (i__44634_44923 + (1));
seq__44630_44920 = G__44930;
chunk__44632_44921 = G__44931;
count__44633_44922 = G__44932;
i__44634_44923 = G__44933;
continue;
} else {
var temp__5804__auto___44934__$2 = cljs.core.seq(seq__44630_44920);
if(temp__5804__auto___44934__$2){
var seq__44630_44935__$1 = temp__5804__auto___44934__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44630_44935__$1)){
var c__5568__auto___44936 = cljs.core.chunk_first(seq__44630_44935__$1);
var G__44937 = cljs.core.chunk_rest(seq__44630_44935__$1);
var G__44938 = c__5568__auto___44936;
var G__44939 = cljs.core.count(c__5568__auto___44936);
var G__44940 = (0);
seq__44630_44920 = G__44937;
chunk__44632_44921 = G__44938;
count__44633_44922 = G__44939;
i__44634_44923 = G__44940;
continue;
} else {
var map__44639_44941 = cljs.core.first(seq__44630_44935__$1);
var map__44639_44942__$1 = cljs.core.__destructure_map(map__44639_44941);
var task_44943 = map__44639_44942__$1;
var fn_str_44944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44639_44942__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44639_44942__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44946 = goog.getObjectByName(fn_str_44944,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44945)].join(''));

(fn_obj_44946.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44946.cljs$core$IFn$_invoke$arity$2(path,new_link_44919) : fn_obj_44946.call(null,path,new_link_44919));


var G__44947 = cljs.core.next(seq__44630_44935__$1);
var G__44948 = null;
var G__44949 = (0);
var G__44950 = (0);
seq__44630_44920 = G__44947;
chunk__44632_44921 = G__44948;
count__44633_44922 = G__44949;
i__44634_44923 = G__44950;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44917);
});})(seq__44578_44856,chunk__44582_44857,count__44583_44858,i__44584_44859,seq__44285,chunk__44287,count__44288,i__44289,new_link_44919,path_match_44918,node_44917,seq__44578_44908__$1,temp__5804__auto___44907__$1,path,seq__44285__$1,temp__5804__auto__,map__44284,map__44284__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44918], 0));

goog.dom.insertSiblingAfter(new_link_44919,node_44917);


var G__44951 = cljs.core.next(seq__44578_44908__$1);
var G__44952 = null;
var G__44953 = (0);
var G__44954 = (0);
seq__44578_44856 = G__44951;
chunk__44582_44857 = G__44952;
count__44583_44858 = G__44953;
i__44584_44859 = G__44954;
continue;
} else {
var G__44955 = cljs.core.next(seq__44578_44908__$1);
var G__44956 = null;
var G__44957 = (0);
var G__44958 = (0);
seq__44578_44856 = G__44955;
chunk__44582_44857 = G__44956;
count__44583_44858 = G__44957;
i__44584_44859 = G__44958;
continue;
}
} else {
var G__44959 = cljs.core.next(seq__44578_44908__$1);
var G__44960 = null;
var G__44961 = (0);
var G__44962 = (0);
seq__44578_44856 = G__44959;
chunk__44582_44857 = G__44960;
count__44583_44858 = G__44961;
i__44584_44859 = G__44962;
continue;
}
}
} else {
}
}
break;
}


var G__44963 = cljs.core.next(seq__44285__$1);
var G__44964 = null;
var G__44965 = (0);
var G__44966 = (0);
seq__44285 = G__44963;
chunk__44287 = G__44964;
count__44288 = G__44965;
i__44289 = G__44966;
continue;
} else {
var G__44967 = cljs.core.next(seq__44285__$1);
var G__44968 = null;
var G__44969 = (0);
var G__44970 = (0);
seq__44285 = G__44967;
chunk__44287 = G__44968;
count__44288 = G__44969;
i__44289 = G__44970;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__44641){
var map__44642 = p__44641;
var map__44642__$1 = cljs.core.__destructure_map(map__44642);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44642__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__44644){
var map__44645 = p__44644;
var map__44645__$1 = cljs.core.__destructure_map(map__44645);
var _ = map__44645__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44645__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44646,done,error){
var map__44647 = p__44646;
var map__44647__$1 = cljs.core.__destructure_map(map__44647);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44647__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44649,done,error){
var map__44650 = p__44649;
var map__44650__$1 = cljs.core.__destructure_map(map__44650);
var msg = map__44650__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44650__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44650__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44650__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44651){
var map__44652 = p__44651;
var map__44652__$1 = cljs.core.__destructure_map(map__44652);
var src = map__44652__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44652__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44654 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44654) : done.call(null,G__44654));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44655){
var map__44656 = p__44655;
var map__44656__$1 = cljs.core.__destructure_map(map__44656);
var msg__$1 = map__44656__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44656__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44657){var ex = e44657;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44659){
var map__44660 = p__44659;
var map__44660__$1 = cljs.core.__destructure_map(map__44660);
var env = map__44660__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44660__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44664){
var map__44665 = p__44664;
var map__44665__$1 = cljs.core.__destructure_map(map__44665);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44665__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44665__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__44666){
var map__44667 = p__44666;
var map__44667__$1 = cljs.core.__destructure_map(map__44667);
var svc = map__44667__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44667__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
