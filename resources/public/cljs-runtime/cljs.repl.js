goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50526){
var map__50527 = p__50526;
var map__50527__$1 = cljs.core.__destructure_map(map__50527);
var m = map__50527__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50527__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50527__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50531_51006 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50532_51007 = null;
var count__50533_51008 = (0);
var i__50534_51009 = (0);
while(true){
if((i__50534_51009 < count__50533_51008)){
var f_51012 = chunk__50532_51007.cljs$core$IIndexed$_nth$arity$2(null,i__50534_51009);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51012], 0));


var G__51013 = seq__50531_51006;
var G__51014 = chunk__50532_51007;
var G__51015 = count__50533_51008;
var G__51016 = (i__50534_51009 + (1));
seq__50531_51006 = G__51013;
chunk__50532_51007 = G__51014;
count__50533_51008 = G__51015;
i__50534_51009 = G__51016;
continue;
} else {
var temp__5804__auto___51018 = cljs.core.seq(seq__50531_51006);
if(temp__5804__auto___51018){
var seq__50531_51020__$1 = temp__5804__auto___51018;
if(cljs.core.chunked_seq_QMARK_(seq__50531_51020__$1)){
var c__5568__auto___51022 = cljs.core.chunk_first(seq__50531_51020__$1);
var G__51023 = cljs.core.chunk_rest(seq__50531_51020__$1);
var G__51024 = c__5568__auto___51022;
var G__51025 = cljs.core.count(c__5568__auto___51022);
var G__51026 = (0);
seq__50531_51006 = G__51023;
chunk__50532_51007 = G__51024;
count__50533_51008 = G__51025;
i__50534_51009 = G__51026;
continue;
} else {
var f_51032 = cljs.core.first(seq__50531_51020__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51032], 0));


var G__51037 = cljs.core.next(seq__50531_51020__$1);
var G__51038 = null;
var G__51039 = (0);
var G__51040 = (0);
seq__50531_51006 = G__51037;
chunk__50532_51007 = G__51038;
count__50533_51008 = G__51039;
i__50534_51009 = G__51040;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51043 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51043], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51043)))?cljs.core.second(arglists_51043):arglists_51043)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50571_51055 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50572_51056 = null;
var count__50573_51057 = (0);
var i__50574_51058 = (0);
while(true){
if((i__50574_51058 < count__50573_51057)){
var vec__50615_51060 = chunk__50572_51056.cljs$core$IIndexed$_nth$arity$2(null,i__50574_51058);
var name_51061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50615_51060,(0),null);
var map__50618_51062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50615_51060,(1),null);
var map__50618_51063__$1 = cljs.core.__destructure_map(map__50618_51062);
var doc_51064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618_51063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618_51063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51061], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51065], 0));

if(cljs.core.truth_(doc_51064)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51064], 0));
} else {
}


var G__51077 = seq__50571_51055;
var G__51078 = chunk__50572_51056;
var G__51079 = count__50573_51057;
var G__51080 = (i__50574_51058 + (1));
seq__50571_51055 = G__51077;
chunk__50572_51056 = G__51078;
count__50573_51057 = G__51079;
i__50574_51058 = G__51080;
continue;
} else {
var temp__5804__auto___51081 = cljs.core.seq(seq__50571_51055);
if(temp__5804__auto___51081){
var seq__50571_51082__$1 = temp__5804__auto___51081;
if(cljs.core.chunked_seq_QMARK_(seq__50571_51082__$1)){
var c__5568__auto___51084 = cljs.core.chunk_first(seq__50571_51082__$1);
var G__51086 = cljs.core.chunk_rest(seq__50571_51082__$1);
var G__51087 = c__5568__auto___51084;
var G__51088 = cljs.core.count(c__5568__auto___51084);
var G__51089 = (0);
seq__50571_51055 = G__51086;
chunk__50572_51056 = G__51087;
count__50573_51057 = G__51088;
i__50574_51058 = G__51089;
continue;
} else {
var vec__50629_51090 = cljs.core.first(seq__50571_51082__$1);
var name_51091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50629_51090,(0),null);
var map__50632_51092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50629_51090,(1),null);
var map__50632_51093__$1 = cljs.core.__destructure_map(map__50632_51092);
var doc_51094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50632_51093__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50632_51093__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51091], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51095], 0));

if(cljs.core.truth_(doc_51094)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51094], 0));
} else {
}


var G__51100 = cljs.core.next(seq__50571_51082__$1);
var G__51101 = null;
var G__51102 = (0);
var G__51103 = (0);
seq__50571_51055 = G__51100;
chunk__50572_51056 = G__51101;
count__50573_51057 = G__51102;
i__50574_51058 = G__51103;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50642 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50643 = null;
var count__50644 = (0);
var i__50645 = (0);
while(true){
if((i__50645 < count__50644)){
var role = chunk__50643.cljs$core$IIndexed$_nth$arity$2(null,i__50645);
var temp__5804__auto___51113__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___51113__$1)){
var spec_51116 = temp__5804__auto___51113__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51116)], 0));
} else {
}


var G__51120 = seq__50642;
var G__51121 = chunk__50643;
var G__51122 = count__50644;
var G__51123 = (i__50645 + (1));
seq__50642 = G__51120;
chunk__50643 = G__51121;
count__50644 = G__51122;
i__50645 = G__51123;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__50642);
if(temp__5804__auto____$1){
var seq__50642__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50642__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50642__$1);
var G__51128 = cljs.core.chunk_rest(seq__50642__$1);
var G__51129 = c__5568__auto__;
var G__51130 = cljs.core.count(c__5568__auto__);
var G__51131 = (0);
seq__50642 = G__51128;
chunk__50643 = G__51129;
count__50644 = G__51130;
i__50645 = G__51131;
continue;
} else {
var role = cljs.core.first(seq__50642__$1);
var temp__5804__auto___51135__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___51135__$2)){
var spec_51138 = temp__5804__auto___51135__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51138)], 0));
} else {
}


var G__51142 = cljs.core.next(seq__50642__$1);
var G__51143 = null;
var G__51144 = (0);
var G__51146 = (0);
seq__50642 = G__51142;
chunk__50643 = G__51143;
count__50644 = G__51144;
i__50645 = G__51146;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51157 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51158 = cljs.core.ex_cause(t);
via = G__51157;
t = G__51158;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50802 = datafied_throwable;
var map__50802__$1 = cljs.core.__destructure_map(map__50802);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50802__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50802__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50803 = cljs.core.last(via);
var map__50803__$1 = cljs.core.__destructure_map(map__50803);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50803__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50803__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50803__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50804 = data;
var map__50804__$1 = cljs.core.__destructure_map(map__50804);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50804__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50804__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50804__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50805 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50805__$1 = cljs.core.__destructure_map(map__50805);
var top_data = map__50805__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50805__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50812 = phase;
var G__50812__$1 = (((G__50812 instanceof cljs.core.Keyword))?G__50812.fqn:null);
switch (G__50812__$1) {
case "read-source":
var map__50815 = data;
var map__50815__$1 = cljs.core.__destructure_map(map__50815);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50815__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50817 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50817__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50817,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50817);
var G__50817__$2 = (cljs.core.truth_((function (){var fexpr__50820 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50820.cljs$core$IFn$_invoke$arity$1 ? fexpr__50820.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50820.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50817__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50817__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50817__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50817__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50824 = top_data;
var G__50824__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50824,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50824);
var G__50824__$2 = (cljs.core.truth_((function (){var fexpr__50827 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50827.cljs$core$IFn$_invoke$arity$1 ? fexpr__50827.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50827.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50824__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50824__$1);
var G__50824__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50824__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50824__$2);
var G__50824__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50824__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50824__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50824__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50824__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50830 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50830,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50830,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50830,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50830,(3),null);
var G__50839 = top_data;
var G__50839__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50839,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50839);
var G__50839__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50839__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50839__$1);
var G__50839__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50839__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50839__$2);
var G__50839__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50839__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50839__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50839__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50839__$4;
}

break;
case "execution":
var vec__50845 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50845,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50845,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50845,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50845,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50793_SHARP_){
var or__5045__auto__ = (p1__50793_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__50859 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50859.cljs$core$IFn$_invoke$arity$1 ? fexpr__50859.cljs$core$IFn$_invoke$arity$1(p1__50793_SHARP_) : fexpr__50859.call(null,p1__50793_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__50863 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50863__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50863,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50863);
var G__50863__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50863__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50863__$1);
var G__50863__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50863__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50863__$2);
var G__50863__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50863__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50863__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50863__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50863__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50812__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50885){
var map__50886 = p__50885;
var map__50886__$1 = cljs.core.__destructure_map(map__50886);
var triage_data = map__50886__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50886__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50902 = phase;
var G__50902__$1 = (((G__50902 instanceof cljs.core.Keyword))?G__50902.fqn:null);
switch (G__50902__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50907 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50908 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50909 = loc;
var G__50910 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50911_51250 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50912_51251 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50913_51252 = true;
var _STAR_print_fn_STAR__temp_val__50914_51253 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50913_51252);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50914_51253);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50881_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50881_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50912_51251);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50911_51250);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50907,G__50908,G__50909,G__50910) : format.call(null,G__50907,G__50908,G__50909,G__50910));

break;
case "macroexpansion":
var G__50921 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50923 = cause_type;
var G__50924 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50925 = loc;
var G__50926 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50921,G__50923,G__50924,G__50925,G__50926) : format.call(null,G__50921,G__50923,G__50924,G__50925,G__50926));

break;
case "compile-syntax-check":
var G__50928 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50929 = cause_type;
var G__50930 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50931 = loc;
var G__50932 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50928,G__50929,G__50930,G__50931,G__50932) : format.call(null,G__50928,G__50929,G__50930,G__50931,G__50932));

break;
case "compilation":
var G__50947 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50948 = cause_type;
var G__50949 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50950 = loc;
var G__50951 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50947,G__50948,G__50949,G__50950,G__50951) : format.call(null,G__50947,G__50948,G__50949,G__50950,G__50951));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50958 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50959 = symbol;
var G__50960 = loc;
var G__50961 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50967_51383 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50968_51384 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50969_51385 = true;
var _STAR_print_fn_STAR__temp_val__50970_51386 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50969_51385);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50970_51386);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50882_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50882_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50968_51384);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50967_51383);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50958,G__50959,G__50960,G__50961) : format.call(null,G__50958,G__50959,G__50960,G__50961));
} else {
var G__50981 = "Execution error%s at %s(%s).\n%s\n";
var G__50982 = cause_type;
var G__50983 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50984 = loc;
var G__50985 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50981,G__50982,G__50983,G__50984,G__50985) : format.call(null,G__50981,G__50982,G__50983,G__50984,G__50985));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50902__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
