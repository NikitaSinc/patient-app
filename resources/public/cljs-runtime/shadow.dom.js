goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51866 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51866(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51875 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51875(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49772 = coll;
var G__49773 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49772,G__49773) : shadow.dom.lazy_native_coll_seq.call(null,G__49772,G__49773));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49822 = arguments.length;
switch (G__49822) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49837 = arguments.length;
switch (G__49837) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49858 = arguments.length;
switch (G__49858) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49891 = arguments.length;
switch (G__49891) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49910 = arguments.length;
switch (G__49910) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49950 = arguments.length;
switch (G__49950) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49980){if((e49980 instanceof Object)){
var e = e49980;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49980;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50002 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50003 = null;
var count__50004 = (0);
var i__50005 = (0);
while(true){
if((i__50005 < count__50004)){
var el = chunk__50003.cljs$core$IIndexed$_nth$arity$2(null,i__50005);
var handler_51899__$1 = ((function (seq__50002,chunk__50003,count__50004,i__50005,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50002,chunk__50003,count__50004,i__50005,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51899__$1);


var G__51904 = seq__50002;
var G__51905 = chunk__50003;
var G__51906 = count__50004;
var G__51907 = (i__50005 + (1));
seq__50002 = G__51904;
chunk__50003 = G__51905;
count__50004 = G__51906;
i__50005 = G__51907;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50002);
if(temp__5804__auto__){
var seq__50002__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50002__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50002__$1);
var G__51913 = cljs.core.chunk_rest(seq__50002__$1);
var G__51914 = c__5568__auto__;
var G__51915 = cljs.core.count(c__5568__auto__);
var G__51916 = (0);
seq__50002 = G__51913;
chunk__50003 = G__51914;
count__50004 = G__51915;
i__50005 = G__51916;
continue;
} else {
var el = cljs.core.first(seq__50002__$1);
var handler_51917__$1 = ((function (seq__50002,chunk__50003,count__50004,i__50005,el,seq__50002__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50002,chunk__50003,count__50004,i__50005,el,seq__50002__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51917__$1);


var G__51919 = cljs.core.next(seq__50002__$1);
var G__51920 = null;
var G__51921 = (0);
var G__51922 = (0);
seq__50002 = G__51919;
chunk__50003 = G__51920;
count__50004 = G__51921;
i__50005 = G__51922;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50048 = arguments.length;
switch (G__50048) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50065 = cljs.core.seq(events);
var chunk__50066 = null;
var count__50067 = (0);
var i__50068 = (0);
while(true){
if((i__50068 < count__50067)){
var vec__50086 = chunk__50066.cljs$core$IIndexed$_nth$arity$2(null,i__50068);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50086,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51932 = seq__50065;
var G__51933 = chunk__50066;
var G__51934 = count__50067;
var G__51935 = (i__50068 + (1));
seq__50065 = G__51932;
chunk__50066 = G__51933;
count__50067 = G__51934;
i__50068 = G__51935;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50065);
if(temp__5804__auto__){
var seq__50065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50065__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50065__$1);
var G__51936 = cljs.core.chunk_rest(seq__50065__$1);
var G__51937 = c__5568__auto__;
var G__51938 = cljs.core.count(c__5568__auto__);
var G__51939 = (0);
seq__50065 = G__51936;
chunk__50066 = G__51937;
count__50067 = G__51938;
i__50068 = G__51939;
continue;
} else {
var vec__50100 = cljs.core.first(seq__50065__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50100,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51940 = cljs.core.next(seq__50065__$1);
var G__51941 = null;
var G__51942 = (0);
var G__51943 = (0);
seq__50065 = G__51940;
chunk__50066 = G__51941;
count__50067 = G__51942;
i__50068 = G__51943;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50122 = cljs.core.seq(styles);
var chunk__50123 = null;
var count__50124 = (0);
var i__50125 = (0);
while(true){
if((i__50125 < count__50124)){
var vec__50146 = chunk__50123.cljs$core$IIndexed$_nth$arity$2(null,i__50125);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50146,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50146,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51944 = seq__50122;
var G__51945 = chunk__50123;
var G__51946 = count__50124;
var G__51947 = (i__50125 + (1));
seq__50122 = G__51944;
chunk__50123 = G__51945;
count__50124 = G__51946;
i__50125 = G__51947;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50122);
if(temp__5804__auto__){
var seq__50122__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50122__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50122__$1);
var G__51948 = cljs.core.chunk_rest(seq__50122__$1);
var G__51949 = c__5568__auto__;
var G__51950 = cljs.core.count(c__5568__auto__);
var G__51951 = (0);
seq__50122 = G__51948;
chunk__50123 = G__51949;
count__50124 = G__51950;
i__50125 = G__51951;
continue;
} else {
var vec__50158 = cljs.core.first(seq__50122__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50158,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51952 = cljs.core.next(seq__50122__$1);
var G__51953 = null;
var G__51954 = (0);
var G__51955 = (0);
seq__50122 = G__51952;
chunk__50123 = G__51953;
count__50124 = G__51954;
i__50125 = G__51955;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50171_51956 = key;
var G__50171_51957__$1 = (((G__50171_51956 instanceof cljs.core.Keyword))?G__50171_51956.fqn:null);
switch (G__50171_51957__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51963 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_51963,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_51963,"aria-");
}
})())){
el.setAttribute(ks_51963,value);
} else {
(el[ks_51963] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50214){
var map__50216 = p__50214;
var map__50216__$1 = cljs.core.__destructure_map(map__50216);
var props = map__50216__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50216__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50233 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50233,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50233,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50233,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50238 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50238,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50238;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50245 = arguments.length;
switch (G__50245) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50249){
var vec__50252 = p__50249;
var seq__50253 = cljs.core.seq(vec__50252);
var first__50254 = cljs.core.first(seq__50253);
var seq__50253__$1 = cljs.core.next(seq__50253);
var nn = first__50254;
var first__50254__$1 = cljs.core.first(seq__50253__$1);
var seq__50253__$2 = cljs.core.next(seq__50253__$1);
var np = first__50254__$1;
var nc = seq__50253__$2;
var node = vec__50252;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50258 = nn;
var G__50259 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50258,G__50259) : create_fn.call(null,G__50258,G__50259));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50262 = nn;
var G__50263 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50262,G__50263) : create_fn.call(null,G__50262,G__50263));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50281 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50281,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50281,(1),null);
var seq__50289_51988 = cljs.core.seq(node_children);
var chunk__50290_51989 = null;
var count__50291_51990 = (0);
var i__50292_51991 = (0);
while(true){
if((i__50292_51991 < count__50291_51990)){
var child_struct_51992 = chunk__50290_51989.cljs$core$IIndexed$_nth$arity$2(null,i__50292_51991);
var children_51993 = shadow.dom.dom_node(child_struct_51992);
if(cljs.core.seq_QMARK_(children_51993)){
var seq__50345_51994 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51993));
var chunk__50347_51995 = null;
var count__50348_51996 = (0);
var i__50349_51997 = (0);
while(true){
if((i__50349_51997 < count__50348_51996)){
var child_52000 = chunk__50347_51995.cljs$core$IIndexed$_nth$arity$2(null,i__50349_51997);
if(cljs.core.truth_(child_52000)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52000);


var G__52003 = seq__50345_51994;
var G__52004 = chunk__50347_51995;
var G__52005 = count__50348_51996;
var G__52006 = (i__50349_51997 + (1));
seq__50345_51994 = G__52003;
chunk__50347_51995 = G__52004;
count__50348_51996 = G__52005;
i__50349_51997 = G__52006;
continue;
} else {
var G__52007 = seq__50345_51994;
var G__52008 = chunk__50347_51995;
var G__52009 = count__50348_51996;
var G__52010 = (i__50349_51997 + (1));
seq__50345_51994 = G__52007;
chunk__50347_51995 = G__52008;
count__50348_51996 = G__52009;
i__50349_51997 = G__52010;
continue;
}
} else {
var temp__5804__auto___52011 = cljs.core.seq(seq__50345_51994);
if(temp__5804__auto___52011){
var seq__50345_52012__$1 = temp__5804__auto___52011;
if(cljs.core.chunked_seq_QMARK_(seq__50345_52012__$1)){
var c__5568__auto___52013 = cljs.core.chunk_first(seq__50345_52012__$1);
var G__52014 = cljs.core.chunk_rest(seq__50345_52012__$1);
var G__52015 = c__5568__auto___52013;
var G__52016 = cljs.core.count(c__5568__auto___52013);
var G__52017 = (0);
seq__50345_51994 = G__52014;
chunk__50347_51995 = G__52015;
count__50348_51996 = G__52016;
i__50349_51997 = G__52017;
continue;
} else {
var child_52018 = cljs.core.first(seq__50345_52012__$1);
if(cljs.core.truth_(child_52018)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52018);


var G__52021 = cljs.core.next(seq__50345_52012__$1);
var G__52022 = null;
var G__52023 = (0);
var G__52024 = (0);
seq__50345_51994 = G__52021;
chunk__50347_51995 = G__52022;
count__50348_51996 = G__52023;
i__50349_51997 = G__52024;
continue;
} else {
var G__52025 = cljs.core.next(seq__50345_52012__$1);
var G__52026 = null;
var G__52027 = (0);
var G__52028 = (0);
seq__50345_51994 = G__52025;
chunk__50347_51995 = G__52026;
count__50348_51996 = G__52027;
i__50349_51997 = G__52028;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51993);
}


var G__52031 = seq__50289_51988;
var G__52032 = chunk__50290_51989;
var G__52033 = count__50291_51990;
var G__52034 = (i__50292_51991 + (1));
seq__50289_51988 = G__52031;
chunk__50290_51989 = G__52032;
count__50291_51990 = G__52033;
i__50292_51991 = G__52034;
continue;
} else {
var temp__5804__auto___52035 = cljs.core.seq(seq__50289_51988);
if(temp__5804__auto___52035){
var seq__50289_52036__$1 = temp__5804__auto___52035;
if(cljs.core.chunked_seq_QMARK_(seq__50289_52036__$1)){
var c__5568__auto___52037 = cljs.core.chunk_first(seq__50289_52036__$1);
var G__52038 = cljs.core.chunk_rest(seq__50289_52036__$1);
var G__52039 = c__5568__auto___52037;
var G__52040 = cljs.core.count(c__5568__auto___52037);
var G__52041 = (0);
seq__50289_51988 = G__52038;
chunk__50290_51989 = G__52039;
count__50291_51990 = G__52040;
i__50292_51991 = G__52041;
continue;
} else {
var child_struct_52043 = cljs.core.first(seq__50289_52036__$1);
var children_52044 = shadow.dom.dom_node(child_struct_52043);
if(cljs.core.seq_QMARK_(children_52044)){
var seq__50382_52045 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52044));
var chunk__50384_52046 = null;
var count__50385_52047 = (0);
var i__50386_52048 = (0);
while(true){
if((i__50386_52048 < count__50385_52047)){
var child_52050 = chunk__50384_52046.cljs$core$IIndexed$_nth$arity$2(null,i__50386_52048);
if(cljs.core.truth_(child_52050)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52050);


var G__52051 = seq__50382_52045;
var G__52052 = chunk__50384_52046;
var G__52053 = count__50385_52047;
var G__52054 = (i__50386_52048 + (1));
seq__50382_52045 = G__52051;
chunk__50384_52046 = G__52052;
count__50385_52047 = G__52053;
i__50386_52048 = G__52054;
continue;
} else {
var G__52056 = seq__50382_52045;
var G__52057 = chunk__50384_52046;
var G__52058 = count__50385_52047;
var G__52059 = (i__50386_52048 + (1));
seq__50382_52045 = G__52056;
chunk__50384_52046 = G__52057;
count__50385_52047 = G__52058;
i__50386_52048 = G__52059;
continue;
}
} else {
var temp__5804__auto___52060__$1 = cljs.core.seq(seq__50382_52045);
if(temp__5804__auto___52060__$1){
var seq__50382_52063__$1 = temp__5804__auto___52060__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50382_52063__$1)){
var c__5568__auto___52064 = cljs.core.chunk_first(seq__50382_52063__$1);
var G__52065 = cljs.core.chunk_rest(seq__50382_52063__$1);
var G__52066 = c__5568__auto___52064;
var G__52067 = cljs.core.count(c__5568__auto___52064);
var G__52068 = (0);
seq__50382_52045 = G__52065;
chunk__50384_52046 = G__52066;
count__50385_52047 = G__52067;
i__50386_52048 = G__52068;
continue;
} else {
var child_52069 = cljs.core.first(seq__50382_52063__$1);
if(cljs.core.truth_(child_52069)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52069);


var G__52070 = cljs.core.next(seq__50382_52063__$1);
var G__52071 = null;
var G__52072 = (0);
var G__52073 = (0);
seq__50382_52045 = G__52070;
chunk__50384_52046 = G__52071;
count__50385_52047 = G__52072;
i__50386_52048 = G__52073;
continue;
} else {
var G__52074 = cljs.core.next(seq__50382_52063__$1);
var G__52075 = null;
var G__52076 = (0);
var G__52077 = (0);
seq__50382_52045 = G__52074;
chunk__50384_52046 = G__52075;
count__50385_52047 = G__52076;
i__50386_52048 = G__52077;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52044);
}


var G__52078 = cljs.core.next(seq__50289_52036__$1);
var G__52079 = null;
var G__52080 = (0);
var G__52081 = (0);
seq__50289_51988 = G__52078;
chunk__50290_51989 = G__52079;
count__50291_51990 = G__52080;
i__50292_51991 = G__52081;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50425 = cljs.core.seq(node);
var chunk__50426 = null;
var count__50427 = (0);
var i__50428 = (0);
while(true){
if((i__50428 < count__50427)){
var n = chunk__50426.cljs$core$IIndexed$_nth$arity$2(null,i__50428);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52092 = seq__50425;
var G__52093 = chunk__50426;
var G__52094 = count__50427;
var G__52095 = (i__50428 + (1));
seq__50425 = G__52092;
chunk__50426 = G__52093;
count__50427 = G__52094;
i__50428 = G__52095;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50425);
if(temp__5804__auto__){
var seq__50425__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50425__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50425__$1);
var G__52096 = cljs.core.chunk_rest(seq__50425__$1);
var G__52097 = c__5568__auto__;
var G__52098 = cljs.core.count(c__5568__auto__);
var G__52099 = (0);
seq__50425 = G__52096;
chunk__50426 = G__52097;
count__50427 = G__52098;
i__50428 = G__52099;
continue;
} else {
var n = cljs.core.first(seq__50425__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52100 = cljs.core.next(seq__50425__$1);
var G__52101 = null;
var G__52102 = (0);
var G__52103 = (0);
seq__50425 = G__52100;
chunk__50426 = G__52101;
count__50427 = G__52102;
i__50428 = G__52103;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50438 = arguments.length;
switch (G__50438) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50457 = arguments.length;
switch (G__50457) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50475 = arguments.length;
switch (G__50475) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52126 = arguments.length;
var i__5770__auto___52127 = (0);
while(true){
if((i__5770__auto___52127 < len__5769__auto___52126)){
args__5775__auto__.push((arguments[i__5770__auto___52127]));

var G__52129 = (i__5770__auto___52127 + (1));
i__5770__auto___52127 = G__52129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50517_52133 = cljs.core.seq(nodes);
var chunk__50518_52134 = null;
var count__50519_52135 = (0);
var i__50520_52136 = (0);
while(true){
if((i__50520_52136 < count__50519_52135)){
var node_52137 = chunk__50518_52134.cljs$core$IIndexed$_nth$arity$2(null,i__50520_52136);
fragment.appendChild(shadow.dom._to_dom(node_52137));


var G__52138 = seq__50517_52133;
var G__52139 = chunk__50518_52134;
var G__52140 = count__50519_52135;
var G__52141 = (i__50520_52136 + (1));
seq__50517_52133 = G__52138;
chunk__50518_52134 = G__52139;
count__50519_52135 = G__52140;
i__50520_52136 = G__52141;
continue;
} else {
var temp__5804__auto___52142 = cljs.core.seq(seq__50517_52133);
if(temp__5804__auto___52142){
var seq__50517_52143__$1 = temp__5804__auto___52142;
if(cljs.core.chunked_seq_QMARK_(seq__50517_52143__$1)){
var c__5568__auto___52144 = cljs.core.chunk_first(seq__50517_52143__$1);
var G__52145 = cljs.core.chunk_rest(seq__50517_52143__$1);
var G__52146 = c__5568__auto___52144;
var G__52147 = cljs.core.count(c__5568__auto___52144);
var G__52148 = (0);
seq__50517_52133 = G__52145;
chunk__50518_52134 = G__52146;
count__50519_52135 = G__52147;
i__50520_52136 = G__52148;
continue;
} else {
var node_52154 = cljs.core.first(seq__50517_52143__$1);
fragment.appendChild(shadow.dom._to_dom(node_52154));


var G__52156 = cljs.core.next(seq__50517_52143__$1);
var G__52157 = null;
var G__52158 = (0);
var G__52159 = (0);
seq__50517_52133 = G__52156;
chunk__50518_52134 = G__52157;
count__50519_52135 = G__52158;
i__50520_52136 = G__52159;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50511){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50511));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50540_52160 = cljs.core.seq(scripts);
var chunk__50541_52161 = null;
var count__50542_52162 = (0);
var i__50543_52163 = (0);
while(true){
if((i__50543_52163 < count__50542_52162)){
var vec__50558_52164 = chunk__50541_52161.cljs$core$IIndexed$_nth$arity$2(null,i__50543_52163);
var script_tag_52165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50558_52164,(0),null);
var script_body_52166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50558_52164,(1),null);
eval(script_body_52166);


var G__52167 = seq__50540_52160;
var G__52168 = chunk__50541_52161;
var G__52169 = count__50542_52162;
var G__52170 = (i__50543_52163 + (1));
seq__50540_52160 = G__52167;
chunk__50541_52161 = G__52168;
count__50542_52162 = G__52169;
i__50543_52163 = G__52170;
continue;
} else {
var temp__5804__auto___52174 = cljs.core.seq(seq__50540_52160);
if(temp__5804__auto___52174){
var seq__50540_52177__$1 = temp__5804__auto___52174;
if(cljs.core.chunked_seq_QMARK_(seq__50540_52177__$1)){
var c__5568__auto___52178 = cljs.core.chunk_first(seq__50540_52177__$1);
var G__52180 = cljs.core.chunk_rest(seq__50540_52177__$1);
var G__52181 = c__5568__auto___52178;
var G__52182 = cljs.core.count(c__5568__auto___52178);
var G__52183 = (0);
seq__50540_52160 = G__52180;
chunk__50541_52161 = G__52181;
count__50542_52162 = G__52182;
i__50543_52163 = G__52183;
continue;
} else {
var vec__50567_52184 = cljs.core.first(seq__50540_52177__$1);
var script_tag_52185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567_52184,(0),null);
var script_body_52186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50567_52184,(1),null);
eval(script_body_52186);


var G__52187 = cljs.core.next(seq__50540_52177__$1);
var G__52188 = null;
var G__52189 = (0);
var G__52190 = (0);
seq__50540_52160 = G__52187;
chunk__50541_52161 = G__52188;
count__50542_52162 = G__52189;
i__50543_52163 = G__52190;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50582){
var vec__50584 = p__50582;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50584,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50621 = arguments.length;
switch (G__50621) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50668 = cljs.core.seq(style_keys);
var chunk__50669 = null;
var count__50670 = (0);
var i__50671 = (0);
while(true){
if((i__50671 < count__50670)){
var it = chunk__50669.cljs$core$IIndexed$_nth$arity$2(null,i__50671);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52199 = seq__50668;
var G__52200 = chunk__50669;
var G__52201 = count__50670;
var G__52202 = (i__50671 + (1));
seq__50668 = G__52199;
chunk__50669 = G__52200;
count__50670 = G__52201;
i__50671 = G__52202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50668);
if(temp__5804__auto__){
var seq__50668__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50668__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50668__$1);
var G__52203 = cljs.core.chunk_rest(seq__50668__$1);
var G__52204 = c__5568__auto__;
var G__52205 = cljs.core.count(c__5568__auto__);
var G__52206 = (0);
seq__50668 = G__52203;
chunk__50669 = G__52204;
count__50670 = G__52205;
i__50671 = G__52206;
continue;
} else {
var it = cljs.core.first(seq__50668__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52207 = cljs.core.next(seq__50668__$1);
var G__52208 = null;
var G__52209 = (0);
var G__52210 = (0);
seq__50668 = G__52207;
chunk__50669 = G__52208;
count__50670 = G__52209;
i__50671 = G__52210;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k50738,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__50784 = k50738;
var G__50784__$1 = (((G__50784 instanceof cljs.core.Keyword))?G__50784.fqn:null);
switch (G__50784__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50738,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__50794){
var vec__50796 = p__50794;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50796,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50796,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50737){
var self__ = this;
var G__50737__$1 = this;
return (new cljs.core.RecordIter((0),G__50737__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50739,other50740){
var self__ = this;
var this50739__$1 = this;
return (((!((other50740 == null)))) && ((((this50739__$1.constructor === other50740.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50739__$1.x,other50740.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50739__$1.y,other50740.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50739__$1.__extmap,other50740.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k50738){
var self__ = this;
var this__5350__auto____$1 = this;
var G__50861 = k50738;
var G__50861__$1 = (((G__50861 instanceof cljs.core.Keyword))?G__50861.fqn:null);
switch (G__50861__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50738);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__50737){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__50869 = cljs.core.keyword_identical_QMARK_;
var expr__50870 = k__5352__auto__;
if(cljs.core.truth_((pred__50869.cljs$core$IFn$_invoke$arity$2 ? pred__50869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50870) : pred__50869.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50870)))){
return (new shadow.dom.Coordinate(G__50737,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50869.cljs$core$IFn$_invoke$arity$2 ? pred__50869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50870) : pred__50869.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50870)))){
return (new shadow.dom.Coordinate(self__.x,G__50737,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__50737),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__50737){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50737,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50750){
var extmap__5385__auto__ = (function (){var G__50896 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50750,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50750)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50896);
} else {
return G__50896;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50750),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50750),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k50934,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__50980 = k50934;
var G__50980__$1 = (((G__50980 instanceof cljs.core.Keyword))?G__50980.fqn:null);
switch (G__50980__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50934,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__50995){
var vec__50996 = p__50995;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50933){
var self__ = this;
var G__50933__$1 = this;
return (new cljs.core.RecordIter((0),G__50933__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50935,other50936){
var self__ = this;
var this50935__$1 = this;
return (((!((other50936 == null)))) && ((((this50935__$1.constructor === other50936.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50935__$1.w,other50936.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50935__$1.h,other50936.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50935__$1.__extmap,other50936.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k50934){
var self__ = this;
var this__5350__auto____$1 = this;
var G__51119 = k50934;
var G__51119__$1 = (((G__51119 instanceof cljs.core.Keyword))?G__51119.fqn:null);
switch (G__51119__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50934);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__50933){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__51139 = cljs.core.keyword_identical_QMARK_;
var expr__51140 = k__5352__auto__;
if(cljs.core.truth_((pred__51139.cljs$core$IFn$_invoke$arity$2 ? pred__51139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51140) : pred__51139.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51140)))){
return (new shadow.dom.Size(G__50933,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51139.cljs$core$IFn$_invoke$arity$2 ? pred__51139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51140) : pred__51139.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51140)))){
return (new shadow.dom.Size(self__.w,G__50933,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__50933),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__50933){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50933,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50953){
var extmap__5385__auto__ = (function (){var G__51197 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50953,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50953)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51197);
} else {
return G__51197;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50953),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50953),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__52299 = (i + (1));
var G__52300 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52299;
ret = G__52300;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51256){
var vec__51259 = p__51256;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51259,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51377 = arguments.length;
switch (G__51377) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52305 = ps;
var G__52306 = (i + (1));
el__$1 = G__52305;
i = G__52306;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51509 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51509,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51512_52314 = cljs.core.seq(props);
var chunk__51513_52315 = null;
var count__51514_52316 = (0);
var i__51515_52317 = (0);
while(true){
if((i__51515_52317 < count__51514_52316)){
var vec__51527_52319 = chunk__51513_52315.cljs$core$IIndexed$_nth$arity$2(null,i__51515_52317);
var k_52320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51527_52319,(0),null);
var v_52321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51527_52319,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_52320);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52320),v_52321);


var G__52322 = seq__51512_52314;
var G__52323 = chunk__51513_52315;
var G__52324 = count__51514_52316;
var G__52325 = (i__51515_52317 + (1));
seq__51512_52314 = G__52322;
chunk__51513_52315 = G__52323;
count__51514_52316 = G__52324;
i__51515_52317 = G__52325;
continue;
} else {
var temp__5804__auto___52326 = cljs.core.seq(seq__51512_52314);
if(temp__5804__auto___52326){
var seq__51512_52327__$1 = temp__5804__auto___52326;
if(cljs.core.chunked_seq_QMARK_(seq__51512_52327__$1)){
var c__5568__auto___52329 = cljs.core.chunk_first(seq__51512_52327__$1);
var G__52330 = cljs.core.chunk_rest(seq__51512_52327__$1);
var G__52331 = c__5568__auto___52329;
var G__52332 = cljs.core.count(c__5568__auto___52329);
var G__52333 = (0);
seq__51512_52314 = G__52330;
chunk__51513_52315 = G__52331;
count__51514_52316 = G__52332;
i__51515_52317 = G__52333;
continue;
} else {
var vec__51536_52334 = cljs.core.first(seq__51512_52327__$1);
var k_52335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51536_52334,(0),null);
var v_52336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51536_52334,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_52335);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52335),v_52336);


var G__52337 = cljs.core.next(seq__51512_52327__$1);
var G__52338 = null;
var G__52339 = (0);
var G__52340 = (0);
seq__51512_52314 = G__52337;
chunk__51513_52315 = G__52338;
count__51514_52316 = G__52339;
i__51515_52317 = G__52340;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51573 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51573,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51573,(1),null);
var seq__51576_52342 = cljs.core.seq(node_children);
var chunk__51578_52343 = null;
var count__51579_52344 = (0);
var i__51580_52345 = (0);
while(true){
if((i__51580_52345 < count__51579_52344)){
var child_struct_52347 = chunk__51578_52343.cljs$core$IIndexed$_nth$arity$2(null,i__51580_52345);
if((!((child_struct_52347 == null)))){
if(typeof child_struct_52347 === 'string'){
var text_52348 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52348),child_struct_52347].join(''));
} else {
var children_52349 = shadow.dom.svg_node(child_struct_52347);
if(cljs.core.seq_QMARK_(children_52349)){
var seq__51628_52350 = cljs.core.seq(children_52349);
var chunk__51630_52351 = null;
var count__51631_52352 = (0);
var i__51632_52353 = (0);
while(true){
if((i__51632_52353 < count__51631_52352)){
var child_52354 = chunk__51630_52351.cljs$core$IIndexed$_nth$arity$2(null,i__51632_52353);
if(cljs.core.truth_(child_52354)){
node.appendChild(child_52354);


var G__52355 = seq__51628_52350;
var G__52356 = chunk__51630_52351;
var G__52357 = count__51631_52352;
var G__52358 = (i__51632_52353 + (1));
seq__51628_52350 = G__52355;
chunk__51630_52351 = G__52356;
count__51631_52352 = G__52357;
i__51632_52353 = G__52358;
continue;
} else {
var G__52359 = seq__51628_52350;
var G__52360 = chunk__51630_52351;
var G__52361 = count__51631_52352;
var G__52362 = (i__51632_52353 + (1));
seq__51628_52350 = G__52359;
chunk__51630_52351 = G__52360;
count__51631_52352 = G__52361;
i__51632_52353 = G__52362;
continue;
}
} else {
var temp__5804__auto___52363 = cljs.core.seq(seq__51628_52350);
if(temp__5804__auto___52363){
var seq__51628_52364__$1 = temp__5804__auto___52363;
if(cljs.core.chunked_seq_QMARK_(seq__51628_52364__$1)){
var c__5568__auto___52365 = cljs.core.chunk_first(seq__51628_52364__$1);
var G__52366 = cljs.core.chunk_rest(seq__51628_52364__$1);
var G__52367 = c__5568__auto___52365;
var G__52368 = cljs.core.count(c__5568__auto___52365);
var G__52369 = (0);
seq__51628_52350 = G__52366;
chunk__51630_52351 = G__52367;
count__51631_52352 = G__52368;
i__51632_52353 = G__52369;
continue;
} else {
var child_52376 = cljs.core.first(seq__51628_52364__$1);
if(cljs.core.truth_(child_52376)){
node.appendChild(child_52376);


var G__52377 = cljs.core.next(seq__51628_52364__$1);
var G__52378 = null;
var G__52379 = (0);
var G__52380 = (0);
seq__51628_52350 = G__52377;
chunk__51630_52351 = G__52378;
count__51631_52352 = G__52379;
i__51632_52353 = G__52380;
continue;
} else {
var G__52381 = cljs.core.next(seq__51628_52364__$1);
var G__52382 = null;
var G__52383 = (0);
var G__52384 = (0);
seq__51628_52350 = G__52381;
chunk__51630_52351 = G__52382;
count__51631_52352 = G__52383;
i__51632_52353 = G__52384;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52349);
}
}


var G__52385 = seq__51576_52342;
var G__52386 = chunk__51578_52343;
var G__52387 = count__51579_52344;
var G__52388 = (i__51580_52345 + (1));
seq__51576_52342 = G__52385;
chunk__51578_52343 = G__52386;
count__51579_52344 = G__52387;
i__51580_52345 = G__52388;
continue;
} else {
var G__52389 = seq__51576_52342;
var G__52390 = chunk__51578_52343;
var G__52391 = count__51579_52344;
var G__52392 = (i__51580_52345 + (1));
seq__51576_52342 = G__52389;
chunk__51578_52343 = G__52390;
count__51579_52344 = G__52391;
i__51580_52345 = G__52392;
continue;
}
} else {
var temp__5804__auto___52393 = cljs.core.seq(seq__51576_52342);
if(temp__5804__auto___52393){
var seq__51576_52394__$1 = temp__5804__auto___52393;
if(cljs.core.chunked_seq_QMARK_(seq__51576_52394__$1)){
var c__5568__auto___52398 = cljs.core.chunk_first(seq__51576_52394__$1);
var G__52399 = cljs.core.chunk_rest(seq__51576_52394__$1);
var G__52400 = c__5568__auto___52398;
var G__52401 = cljs.core.count(c__5568__auto___52398);
var G__52402 = (0);
seq__51576_52342 = G__52399;
chunk__51578_52343 = G__52400;
count__51579_52344 = G__52401;
i__51580_52345 = G__52402;
continue;
} else {
var child_struct_52403 = cljs.core.first(seq__51576_52394__$1);
if((!((child_struct_52403 == null)))){
if(typeof child_struct_52403 === 'string'){
var text_52404 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52404),child_struct_52403].join(''));
} else {
var children_52405 = shadow.dom.svg_node(child_struct_52403);
if(cljs.core.seq_QMARK_(children_52405)){
var seq__51655_52406 = cljs.core.seq(children_52405);
var chunk__51657_52407 = null;
var count__51658_52408 = (0);
var i__51659_52409 = (0);
while(true){
if((i__51659_52409 < count__51658_52408)){
var child_52410 = chunk__51657_52407.cljs$core$IIndexed$_nth$arity$2(null,i__51659_52409);
if(cljs.core.truth_(child_52410)){
node.appendChild(child_52410);


var G__52411 = seq__51655_52406;
var G__52412 = chunk__51657_52407;
var G__52413 = count__51658_52408;
var G__52414 = (i__51659_52409 + (1));
seq__51655_52406 = G__52411;
chunk__51657_52407 = G__52412;
count__51658_52408 = G__52413;
i__51659_52409 = G__52414;
continue;
} else {
var G__52415 = seq__51655_52406;
var G__52416 = chunk__51657_52407;
var G__52417 = count__51658_52408;
var G__52418 = (i__51659_52409 + (1));
seq__51655_52406 = G__52415;
chunk__51657_52407 = G__52416;
count__51658_52408 = G__52417;
i__51659_52409 = G__52418;
continue;
}
} else {
var temp__5804__auto___52419__$1 = cljs.core.seq(seq__51655_52406);
if(temp__5804__auto___52419__$1){
var seq__51655_52420__$1 = temp__5804__auto___52419__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51655_52420__$1)){
var c__5568__auto___52421 = cljs.core.chunk_first(seq__51655_52420__$1);
var G__52422 = cljs.core.chunk_rest(seq__51655_52420__$1);
var G__52423 = c__5568__auto___52421;
var G__52424 = cljs.core.count(c__5568__auto___52421);
var G__52425 = (0);
seq__51655_52406 = G__52422;
chunk__51657_52407 = G__52423;
count__51658_52408 = G__52424;
i__51659_52409 = G__52425;
continue;
} else {
var child_52427 = cljs.core.first(seq__51655_52420__$1);
if(cljs.core.truth_(child_52427)){
node.appendChild(child_52427);


var G__52428 = cljs.core.next(seq__51655_52420__$1);
var G__52429 = null;
var G__52430 = (0);
var G__52431 = (0);
seq__51655_52406 = G__52428;
chunk__51657_52407 = G__52429;
count__51658_52408 = G__52430;
i__51659_52409 = G__52431;
continue;
} else {
var G__52432 = cljs.core.next(seq__51655_52420__$1);
var G__52433 = null;
var G__52434 = (0);
var G__52435 = (0);
seq__51655_52406 = G__52432;
chunk__51657_52407 = G__52433;
count__51658_52408 = G__52434;
i__51659_52409 = G__52435;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52405);
}
}


var G__52436 = cljs.core.next(seq__51576_52394__$1);
var G__52437 = null;
var G__52438 = (0);
var G__52439 = (0);
seq__51576_52342 = G__52436;
chunk__51578_52343 = G__52437;
count__51579_52344 = G__52438;
i__51580_52345 = G__52439;
continue;
} else {
var G__52440 = cljs.core.next(seq__51576_52394__$1);
var G__52441 = null;
var G__52442 = (0);
var G__52443 = (0);
seq__51576_52342 = G__52440;
chunk__51578_52343 = G__52441;
count__51579_52344 = G__52442;
i__51580_52345 = G__52443;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52448 = arguments.length;
var i__5770__auto___52449 = (0);
while(true){
if((i__5770__auto___52449 < len__5769__auto___52448)){
args__5775__auto__.push((arguments[i__5770__auto___52449]));

var G__52450 = (i__5770__auto___52449 + (1));
i__5770__auto___52449 = G__52450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51687){
var G__51688 = cljs.core.first(seq51687);
var seq51687__$1 = cljs.core.next(seq51687);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51688,seq51687__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51733 = arguments.length;
switch (G__51733) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__30092__auto___52461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_51765){
var state_val_51766 = (state_51765[(1)]);
if((state_val_51766 === (1))){
var state_51765__$1 = state_51765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51765__$1,(2),once_or_cleanup);
} else {
if((state_val_51766 === (2))){
var inst_51762 = (state_51765[(2)]);
var inst_51763 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51765__$1 = (function (){var statearr_51769 = state_51765;
(statearr_51769[(7)] = inst_51762);

return statearr_51769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51765__$1,inst_51763);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29738__auto__ = null;
var shadow$dom$state_machine__29738__auto____0 = (function (){
var statearr_51773 = [null,null,null,null,null,null,null,null];
(statearr_51773[(0)] = shadow$dom$state_machine__29738__auto__);

(statearr_51773[(1)] = (1));

return statearr_51773;
});
var shadow$dom$state_machine__29738__auto____1 = (function (state_51765){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_51765);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e51774){var ex__29741__auto__ = e51774;
var statearr_51775_52469 = state_51765;
(statearr_51775_52469[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_51765[(4)]))){
var statearr_51776_52470 = state_51765;
(statearr_51776_52470[(1)] = cljs.core.first((state_51765[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52474 = state_51765;
state_51765 = G__52474;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
shadow$dom$state_machine__29738__auto__ = function(state_51765){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29738__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29738__auto____1.call(this,state_51765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29738__auto____0;
shadow$dom$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29738__auto____1;
return shadow$dom$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_51780 = f__30094__auto__();
(statearr_51780[(6)] = c__30092__auto___52461);

return statearr_51780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
