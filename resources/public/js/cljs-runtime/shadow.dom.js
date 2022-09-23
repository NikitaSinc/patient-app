goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42754 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_42754(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42757 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_42757(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40981 = coll;
var G__40982 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40981,G__40982) : shadow.dom.lazy_native_coll_seq.call(null,G__40981,G__40982));
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
var G__41044 = arguments.length;
switch (G__41044) {
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
var G__41066 = arguments.length;
switch (G__41066) {
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
var G__41097 = arguments.length;
switch (G__41097) {
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
var G__41118 = arguments.length;
switch (G__41118) {
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
var G__41171 = arguments.length;
switch (G__41171) {
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
var G__41210 = arguments.length;
switch (G__41210) {
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
}catch (e41233){if((e41233 instanceof Object)){
var e = e41233;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41233;

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
var seq__41257 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41258 = null;
var count__41259 = (0);
var i__41260 = (0);
while(true){
if((i__41260 < count__41259)){
var el = chunk__41258.cljs$core$IIndexed$_nth$arity$2(null,i__41260);
var handler_42784__$1 = ((function (seq__41257,chunk__41258,count__41259,i__41260,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41257,chunk__41258,count__41259,i__41260,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42784__$1);


var G__42785 = seq__41257;
var G__42786 = chunk__41258;
var G__42787 = count__41259;
var G__42788 = (i__41260 + (1));
seq__41257 = G__42785;
chunk__41258 = G__42786;
count__41259 = G__42787;
i__41260 = G__42788;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41257);
if(temp__5804__auto__){
var seq__41257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41257__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41257__$1);
var G__42789 = cljs.core.chunk_rest(seq__41257__$1);
var G__42790 = c__5568__auto__;
var G__42791 = cljs.core.count(c__5568__auto__);
var G__42792 = (0);
seq__41257 = G__42789;
chunk__41258 = G__42790;
count__41259 = G__42791;
i__41260 = G__42792;
continue;
} else {
var el = cljs.core.first(seq__41257__$1);
var handler_42793__$1 = ((function (seq__41257,chunk__41258,count__41259,i__41260,el,seq__41257__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41257,chunk__41258,count__41259,i__41260,el,seq__41257__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42793__$1);


var G__42794 = cljs.core.next(seq__41257__$1);
var G__42795 = null;
var G__42796 = (0);
var G__42797 = (0);
seq__41257 = G__42794;
chunk__41258 = G__42795;
count__41259 = G__42796;
i__41260 = G__42797;
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
var G__41297 = arguments.length;
switch (G__41297) {
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
var seq__41358 = cljs.core.seq(events);
var chunk__41359 = null;
var count__41360 = (0);
var i__41361 = (0);
while(true){
if((i__41361 < count__41360)){
var vec__41381 = chunk__41359.cljs$core$IIndexed$_nth$arity$2(null,i__41361);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41381,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42803 = seq__41358;
var G__42804 = chunk__41359;
var G__42805 = count__41360;
var G__42806 = (i__41361 + (1));
seq__41358 = G__42803;
chunk__41359 = G__42804;
count__41360 = G__42805;
i__41361 = G__42806;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41358);
if(temp__5804__auto__){
var seq__41358__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41358__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41358__$1);
var G__42808 = cljs.core.chunk_rest(seq__41358__$1);
var G__42809 = c__5568__auto__;
var G__42810 = cljs.core.count(c__5568__auto__);
var G__42811 = (0);
seq__41358 = G__42808;
chunk__41359 = G__42809;
count__41360 = G__42810;
i__41361 = G__42811;
continue;
} else {
var vec__41399 = cljs.core.first(seq__41358__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41399,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42812 = cljs.core.next(seq__41358__$1);
var G__42813 = null;
var G__42814 = (0);
var G__42815 = (0);
seq__41358 = G__42812;
chunk__41359 = G__42813;
count__41360 = G__42814;
i__41361 = G__42815;
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
var seq__41404 = cljs.core.seq(styles);
var chunk__41405 = null;
var count__41406 = (0);
var i__41407 = (0);
while(true){
if((i__41407 < count__41406)){
var vec__41427 = chunk__41405.cljs$core$IIndexed$_nth$arity$2(null,i__41407);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41427,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42816 = seq__41404;
var G__42817 = chunk__41405;
var G__42818 = count__41406;
var G__42819 = (i__41407 + (1));
seq__41404 = G__42816;
chunk__41405 = G__42817;
count__41406 = G__42818;
i__41407 = G__42819;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41404);
if(temp__5804__auto__){
var seq__41404__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41404__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41404__$1);
var G__42820 = cljs.core.chunk_rest(seq__41404__$1);
var G__42821 = c__5568__auto__;
var G__42822 = cljs.core.count(c__5568__auto__);
var G__42823 = (0);
seq__41404 = G__42820;
chunk__41405 = G__42821;
count__41406 = G__42822;
i__41407 = G__42823;
continue;
} else {
var vec__41439 = cljs.core.first(seq__41404__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41439,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42824 = cljs.core.next(seq__41404__$1);
var G__42825 = null;
var G__42826 = (0);
var G__42827 = (0);
seq__41404 = G__42824;
chunk__41405 = G__42825;
count__41406 = G__42826;
i__41407 = G__42827;
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
var G__41446_42828 = key;
var G__41446_42829__$1 = (((G__41446_42828 instanceof cljs.core.Keyword))?G__41446_42828.fqn:null);
switch (G__41446_42829__$1) {
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
var ks_42831 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_42831,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_42831,"aria-");
}
})())){
el.setAttribute(ks_42831,value);
} else {
(el[ks_42831] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41498){
var map__41503 = p__41498;
var map__41503__$1 = cljs.core.__destructure_map(map__41503);
var props = map__41503__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41503__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41505 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41510 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41510,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41510;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41518 = arguments.length;
switch (G__41518) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41536){
var vec__41539 = p__41536;
var seq__41540 = cljs.core.seq(vec__41539);
var first__41541 = cljs.core.first(seq__41540);
var seq__41540__$1 = cljs.core.next(seq__41540);
var nn = first__41541;
var first__41541__$1 = cljs.core.first(seq__41540__$1);
var seq__41540__$2 = cljs.core.next(seq__41540__$1);
var np = first__41541__$1;
var nc = seq__41540__$2;
var node = vec__41539;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41544 = nn;
var G__41545 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41544,G__41545) : create_fn.call(null,G__41544,G__41545));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41546 = nn;
var G__41547 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41546,G__41547) : create_fn.call(null,G__41546,G__41547));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41551 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(1),null);
var seq__41555_42845 = cljs.core.seq(node_children);
var chunk__41556_42846 = null;
var count__41557_42847 = (0);
var i__41558_42848 = (0);
while(true){
if((i__41558_42848 < count__41557_42847)){
var child_struct_42849 = chunk__41556_42846.cljs$core$IIndexed$_nth$arity$2(null,i__41558_42848);
var children_42850 = shadow.dom.dom_node(child_struct_42849);
if(cljs.core.seq_QMARK_(children_42850)){
var seq__41594_42851 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42850));
var chunk__41596_42852 = null;
var count__41597_42853 = (0);
var i__41598_42854 = (0);
while(true){
if((i__41598_42854 < count__41597_42853)){
var child_42855 = chunk__41596_42852.cljs$core$IIndexed$_nth$arity$2(null,i__41598_42854);
if(cljs.core.truth_(child_42855)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42855);


var G__42856 = seq__41594_42851;
var G__42857 = chunk__41596_42852;
var G__42858 = count__41597_42853;
var G__42859 = (i__41598_42854 + (1));
seq__41594_42851 = G__42856;
chunk__41596_42852 = G__42857;
count__41597_42853 = G__42858;
i__41598_42854 = G__42859;
continue;
} else {
var G__42860 = seq__41594_42851;
var G__42861 = chunk__41596_42852;
var G__42862 = count__41597_42853;
var G__42863 = (i__41598_42854 + (1));
seq__41594_42851 = G__42860;
chunk__41596_42852 = G__42861;
count__41597_42853 = G__42862;
i__41598_42854 = G__42863;
continue;
}
} else {
var temp__5804__auto___42864 = cljs.core.seq(seq__41594_42851);
if(temp__5804__auto___42864){
var seq__41594_42866__$1 = temp__5804__auto___42864;
if(cljs.core.chunked_seq_QMARK_(seq__41594_42866__$1)){
var c__5568__auto___42867 = cljs.core.chunk_first(seq__41594_42866__$1);
var G__42868 = cljs.core.chunk_rest(seq__41594_42866__$1);
var G__42869 = c__5568__auto___42867;
var G__42870 = cljs.core.count(c__5568__auto___42867);
var G__42871 = (0);
seq__41594_42851 = G__42868;
chunk__41596_42852 = G__42869;
count__41597_42853 = G__42870;
i__41598_42854 = G__42871;
continue;
} else {
var child_42873 = cljs.core.first(seq__41594_42866__$1);
if(cljs.core.truth_(child_42873)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42873);


var G__42874 = cljs.core.next(seq__41594_42866__$1);
var G__42875 = null;
var G__42876 = (0);
var G__42877 = (0);
seq__41594_42851 = G__42874;
chunk__41596_42852 = G__42875;
count__41597_42853 = G__42876;
i__41598_42854 = G__42877;
continue;
} else {
var G__42878 = cljs.core.next(seq__41594_42866__$1);
var G__42879 = null;
var G__42880 = (0);
var G__42881 = (0);
seq__41594_42851 = G__42878;
chunk__41596_42852 = G__42879;
count__41597_42853 = G__42880;
i__41598_42854 = G__42881;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42850);
}


var G__42882 = seq__41555_42845;
var G__42883 = chunk__41556_42846;
var G__42884 = count__41557_42847;
var G__42885 = (i__41558_42848 + (1));
seq__41555_42845 = G__42882;
chunk__41556_42846 = G__42883;
count__41557_42847 = G__42884;
i__41558_42848 = G__42885;
continue;
} else {
var temp__5804__auto___42886 = cljs.core.seq(seq__41555_42845);
if(temp__5804__auto___42886){
var seq__41555_42887__$1 = temp__5804__auto___42886;
if(cljs.core.chunked_seq_QMARK_(seq__41555_42887__$1)){
var c__5568__auto___42888 = cljs.core.chunk_first(seq__41555_42887__$1);
var G__42889 = cljs.core.chunk_rest(seq__41555_42887__$1);
var G__42890 = c__5568__auto___42888;
var G__42891 = cljs.core.count(c__5568__auto___42888);
var G__42892 = (0);
seq__41555_42845 = G__42889;
chunk__41556_42846 = G__42890;
count__41557_42847 = G__42891;
i__41558_42848 = G__42892;
continue;
} else {
var child_struct_42893 = cljs.core.first(seq__41555_42887__$1);
var children_42894 = shadow.dom.dom_node(child_struct_42893);
if(cljs.core.seq_QMARK_(children_42894)){
var seq__41619_42895 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42894));
var chunk__41621_42896 = null;
var count__41622_42897 = (0);
var i__41623_42898 = (0);
while(true){
if((i__41623_42898 < count__41622_42897)){
var child_42899 = chunk__41621_42896.cljs$core$IIndexed$_nth$arity$2(null,i__41623_42898);
if(cljs.core.truth_(child_42899)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42899);


var G__42900 = seq__41619_42895;
var G__42901 = chunk__41621_42896;
var G__42902 = count__41622_42897;
var G__42903 = (i__41623_42898 + (1));
seq__41619_42895 = G__42900;
chunk__41621_42896 = G__42901;
count__41622_42897 = G__42902;
i__41623_42898 = G__42903;
continue;
} else {
var G__42904 = seq__41619_42895;
var G__42905 = chunk__41621_42896;
var G__42906 = count__41622_42897;
var G__42907 = (i__41623_42898 + (1));
seq__41619_42895 = G__42904;
chunk__41621_42896 = G__42905;
count__41622_42897 = G__42906;
i__41623_42898 = G__42907;
continue;
}
} else {
var temp__5804__auto___42908__$1 = cljs.core.seq(seq__41619_42895);
if(temp__5804__auto___42908__$1){
var seq__41619_42909__$1 = temp__5804__auto___42908__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41619_42909__$1)){
var c__5568__auto___42912 = cljs.core.chunk_first(seq__41619_42909__$1);
var G__42913 = cljs.core.chunk_rest(seq__41619_42909__$1);
var G__42914 = c__5568__auto___42912;
var G__42915 = cljs.core.count(c__5568__auto___42912);
var G__42916 = (0);
seq__41619_42895 = G__42913;
chunk__41621_42896 = G__42914;
count__41622_42897 = G__42915;
i__41623_42898 = G__42916;
continue;
} else {
var child_42918 = cljs.core.first(seq__41619_42909__$1);
if(cljs.core.truth_(child_42918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42918);


var G__42919 = cljs.core.next(seq__41619_42909__$1);
var G__42920 = null;
var G__42921 = (0);
var G__42922 = (0);
seq__41619_42895 = G__42919;
chunk__41621_42896 = G__42920;
count__41622_42897 = G__42921;
i__41623_42898 = G__42922;
continue;
} else {
var G__42923 = cljs.core.next(seq__41619_42909__$1);
var G__42924 = null;
var G__42925 = (0);
var G__42926 = (0);
seq__41619_42895 = G__42923;
chunk__41621_42896 = G__42924;
count__41622_42897 = G__42925;
i__41623_42898 = G__42926;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42894);
}


var G__42927 = cljs.core.next(seq__41555_42887__$1);
var G__42928 = null;
var G__42929 = (0);
var G__42930 = (0);
seq__41555_42845 = G__42927;
chunk__41556_42846 = G__42928;
count__41557_42847 = G__42929;
i__41558_42848 = G__42930;
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
var seq__41667 = cljs.core.seq(node);
var chunk__41668 = null;
var count__41669 = (0);
var i__41670 = (0);
while(true){
if((i__41670 < count__41669)){
var n = chunk__41668.cljs$core$IIndexed$_nth$arity$2(null,i__41670);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42937 = seq__41667;
var G__42938 = chunk__41668;
var G__42939 = count__41669;
var G__42940 = (i__41670 + (1));
seq__41667 = G__42937;
chunk__41668 = G__42938;
count__41669 = G__42939;
i__41670 = G__42940;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41667);
if(temp__5804__auto__){
var seq__41667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41667__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41667__$1);
var G__42943 = cljs.core.chunk_rest(seq__41667__$1);
var G__42944 = c__5568__auto__;
var G__42945 = cljs.core.count(c__5568__auto__);
var G__42946 = (0);
seq__41667 = G__42943;
chunk__41668 = G__42944;
count__41669 = G__42945;
i__41670 = G__42946;
continue;
} else {
var n = cljs.core.first(seq__41667__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42947 = cljs.core.next(seq__41667__$1);
var G__42948 = null;
var G__42949 = (0);
var G__42950 = (0);
seq__41667 = G__42947;
chunk__41668 = G__42948;
count__41669 = G__42949;
i__41670 = G__42950;
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
var G__41702 = arguments.length;
switch (G__41702) {
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
var G__41714 = arguments.length;
switch (G__41714) {
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
var G__41754 = arguments.length;
switch (G__41754) {
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
var len__5769__auto___42964 = arguments.length;
var i__5770__auto___42965 = (0);
while(true){
if((i__5770__auto___42965 < len__5769__auto___42964)){
args__5775__auto__.push((arguments[i__5770__auto___42965]));

var G__42968 = (i__5770__auto___42965 + (1));
i__5770__auto___42965 = G__42968;
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
var seq__41793_42971 = cljs.core.seq(nodes);
var chunk__41794_42972 = null;
var count__41795_42973 = (0);
var i__41796_42974 = (0);
while(true){
if((i__41796_42974 < count__41795_42973)){
var node_42975 = chunk__41794_42972.cljs$core$IIndexed$_nth$arity$2(null,i__41796_42974);
fragment.appendChild(shadow.dom._to_dom(node_42975));


var G__42976 = seq__41793_42971;
var G__42977 = chunk__41794_42972;
var G__42978 = count__41795_42973;
var G__42979 = (i__41796_42974 + (1));
seq__41793_42971 = G__42976;
chunk__41794_42972 = G__42977;
count__41795_42973 = G__42978;
i__41796_42974 = G__42979;
continue;
} else {
var temp__5804__auto___42980 = cljs.core.seq(seq__41793_42971);
if(temp__5804__auto___42980){
var seq__41793_42981__$1 = temp__5804__auto___42980;
if(cljs.core.chunked_seq_QMARK_(seq__41793_42981__$1)){
var c__5568__auto___42982 = cljs.core.chunk_first(seq__41793_42981__$1);
var G__42984 = cljs.core.chunk_rest(seq__41793_42981__$1);
var G__42985 = c__5568__auto___42982;
var G__42986 = cljs.core.count(c__5568__auto___42982);
var G__42987 = (0);
seq__41793_42971 = G__42984;
chunk__41794_42972 = G__42985;
count__41795_42973 = G__42986;
i__41796_42974 = G__42987;
continue;
} else {
var node_42990 = cljs.core.first(seq__41793_42981__$1);
fragment.appendChild(shadow.dom._to_dom(node_42990));


var G__42991 = cljs.core.next(seq__41793_42981__$1);
var G__42992 = null;
var G__42993 = (0);
var G__42994 = (0);
seq__41793_42971 = G__42991;
chunk__41794_42972 = G__42992;
count__41795_42973 = G__42993;
i__41796_42974 = G__42994;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41787){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41787));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41813_42995 = cljs.core.seq(scripts);
var chunk__41814_42996 = null;
var count__41815_42997 = (0);
var i__41816_42998 = (0);
while(true){
if((i__41816_42998 < count__41815_42997)){
var vec__41837_42999 = chunk__41814_42996.cljs$core$IIndexed$_nth$arity$2(null,i__41816_42998);
var script_tag_43000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41837_42999,(0),null);
var script_body_43001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41837_42999,(1),null);
eval(script_body_43001);


var G__43002 = seq__41813_42995;
var G__43003 = chunk__41814_42996;
var G__43004 = count__41815_42997;
var G__43005 = (i__41816_42998 + (1));
seq__41813_42995 = G__43002;
chunk__41814_42996 = G__43003;
count__41815_42997 = G__43004;
i__41816_42998 = G__43005;
continue;
} else {
var temp__5804__auto___43006 = cljs.core.seq(seq__41813_42995);
if(temp__5804__auto___43006){
var seq__41813_43007__$1 = temp__5804__auto___43006;
if(cljs.core.chunked_seq_QMARK_(seq__41813_43007__$1)){
var c__5568__auto___43008 = cljs.core.chunk_first(seq__41813_43007__$1);
var G__43009 = cljs.core.chunk_rest(seq__41813_43007__$1);
var G__43010 = c__5568__auto___43008;
var G__43011 = cljs.core.count(c__5568__auto___43008);
var G__43012 = (0);
seq__41813_42995 = G__43009;
chunk__41814_42996 = G__43010;
count__41815_42997 = G__43011;
i__41816_42998 = G__43012;
continue;
} else {
var vec__41842_43013 = cljs.core.first(seq__41813_43007__$1);
var script_tag_43014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41842_43013,(0),null);
var script_body_43015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41842_43013,(1),null);
eval(script_body_43015);


var G__43019 = cljs.core.next(seq__41813_43007__$1);
var G__43020 = null;
var G__43021 = (0);
var G__43022 = (0);
seq__41813_42995 = G__43019;
chunk__41814_42996 = G__43020;
count__41815_42997 = G__43021;
i__41816_42998 = G__43022;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41846){
var vec__41847 = p__41846;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41847,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41847,(1),null);
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
var G__41863 = arguments.length;
switch (G__41863) {
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
var seq__41889 = cljs.core.seq(style_keys);
var chunk__41890 = null;
var count__41891 = (0);
var i__41892 = (0);
while(true){
if((i__41892 < count__41891)){
var it = chunk__41890.cljs$core$IIndexed$_nth$arity$2(null,i__41892);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43033 = seq__41889;
var G__43034 = chunk__41890;
var G__43035 = count__41891;
var G__43036 = (i__41892 + (1));
seq__41889 = G__43033;
chunk__41890 = G__43034;
count__41891 = G__43035;
i__41892 = G__43036;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41889);
if(temp__5804__auto__){
var seq__41889__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41889__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41889__$1);
var G__43037 = cljs.core.chunk_rest(seq__41889__$1);
var G__43038 = c__5568__auto__;
var G__43039 = cljs.core.count(c__5568__auto__);
var G__43040 = (0);
seq__41889 = G__43037;
chunk__41890 = G__43038;
count__41891 = G__43039;
i__41892 = G__43040;
continue;
} else {
var it = cljs.core.first(seq__41889__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43041 = cljs.core.next(seq__41889__$1);
var G__43042 = null;
var G__43043 = (0);
var G__43044 = (0);
seq__41889 = G__43041;
chunk__41890 = G__43042;
count__41891 = G__43043;
i__41892 = G__43044;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k41904,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__41924 = k41904;
var G__41924__$1 = (((G__41924 instanceof cljs.core.Keyword))?G__41924.fqn:null);
switch (G__41924__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41904,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__41936){
var vec__41938 = p__41936;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41938,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41938,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41903){
var self__ = this;
var G__41903__$1 = this;
return (new cljs.core.RecordIter((0),G__41903__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41905,other41906){
var self__ = this;
var this41905__$1 = this;
return (((!((other41906 == null)))) && ((((this41905__$1.constructor === other41906.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41905__$1.x,other41906.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41905__$1.y,other41906.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41905__$1.__extmap,other41906.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k41904){
var self__ = this;
var this__5350__auto____$1 = this;
var G__41999 = k41904;
var G__41999__$1 = (((G__41999 instanceof cljs.core.Keyword))?G__41999.fqn:null);
switch (G__41999__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41904);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__41903){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42002 = cljs.core.keyword_identical_QMARK_;
var expr__42003 = k__5352__auto__;
if(cljs.core.truth_((pred__42002.cljs$core$IFn$_invoke$arity$2 ? pred__42002.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42003) : pred__42002.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42003)))){
return (new shadow.dom.Coordinate(G__41903,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42002.cljs$core$IFn$_invoke$arity$2 ? pred__42002.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42003) : pred__42002.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42003)))){
return (new shadow.dom.Coordinate(self__.x,G__41903,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__41903),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__41903){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41903,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41909){
var extmap__5385__auto__ = (function (){var G__42045 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41909,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41909)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42045);
} else {
return G__42045;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41909),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41909),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42112,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42181 = k42112;
var G__42181__$1 = (((G__42181 instanceof cljs.core.Keyword))?G__42181.fqn:null);
switch (G__42181__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42112,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42204){
var vec__42206 = p__42204;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42206,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42206,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42111){
var self__ = this;
var G__42111__$1 = this;
return (new cljs.core.RecordIter((0),G__42111__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42113,other42114){
var self__ = this;
var this42113__$1 = this;
return (((!((other42114 == null)))) && ((((this42113__$1.constructor === other42114.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42113__$1.w,other42114.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42113__$1.h,other42114.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42113__$1.__extmap,other42114.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42112){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42272 = k42112;
var G__42272__$1 = (((G__42272 instanceof cljs.core.Keyword))?G__42272.fqn:null);
switch (G__42272__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42112);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42111){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42279 = cljs.core.keyword_identical_QMARK_;
var expr__42280 = k__5352__auto__;
if(cljs.core.truth_((pred__42279.cljs$core$IFn$_invoke$arity$2 ? pred__42279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42280) : pred__42279.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42280)))){
return (new shadow.dom.Size(G__42111,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42279.cljs$core$IFn$_invoke$arity$2 ? pred__42279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42280) : pred__42279.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42280)))){
return (new shadow.dom.Size(self__.w,G__42111,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42111),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42111){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42111,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42144){
var extmap__5385__auto__ = (function (){var G__42328 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42144,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42144)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42328);
} else {
return G__42328;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42144),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42144),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__43138 = (i + (1));
var G__43139 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43138;
ret = G__43139;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42400){
var vec__42401 = p__42400;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42401,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__42421 = arguments.length;
switch (G__42421) {
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
var G__43149 = ps;
var G__43150 = (i + (1));
el__$1 = G__43149;
i = G__43150;
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
var vec__42484 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42484,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42484,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42484,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__42497_43154 = cljs.core.seq(props);
var chunk__42498_43155 = null;
var count__42499_43156 = (0);
var i__42500_43157 = (0);
while(true){
if((i__42500_43157 < count__42499_43156)){
var vec__42518_43158 = chunk__42498_43155.cljs$core$IIndexed$_nth$arity$2(null,i__42500_43157);
var k_43159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518_43158,(0),null);
var v_43160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518_43158,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_43159);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43159),v_43160);


var G__43161 = seq__42497_43154;
var G__43162 = chunk__42498_43155;
var G__43163 = count__42499_43156;
var G__43164 = (i__42500_43157 + (1));
seq__42497_43154 = G__43161;
chunk__42498_43155 = G__43162;
count__42499_43156 = G__43163;
i__42500_43157 = G__43164;
continue;
} else {
var temp__5804__auto___43165 = cljs.core.seq(seq__42497_43154);
if(temp__5804__auto___43165){
var seq__42497_43166__$1 = temp__5804__auto___43165;
if(cljs.core.chunked_seq_QMARK_(seq__42497_43166__$1)){
var c__5568__auto___43167 = cljs.core.chunk_first(seq__42497_43166__$1);
var G__43168 = cljs.core.chunk_rest(seq__42497_43166__$1);
var G__43169 = c__5568__auto___43167;
var G__43170 = cljs.core.count(c__5568__auto___43167);
var G__43171 = (0);
seq__42497_43154 = G__43168;
chunk__42498_43155 = G__43169;
count__42499_43156 = G__43170;
i__42500_43157 = G__43171;
continue;
} else {
var vec__42522_43172 = cljs.core.first(seq__42497_43166__$1);
var k_43173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42522_43172,(0),null);
var v_43174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42522_43172,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_43173);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43173),v_43174);


var G__43176 = cljs.core.next(seq__42497_43166__$1);
var G__43177 = null;
var G__43178 = (0);
var G__43179 = (0);
seq__42497_43154 = G__43176;
chunk__42498_43155 = G__43177;
count__42499_43156 = G__43178;
i__42500_43157 = G__43179;
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
var vec__42572 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42572,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42572,(1),null);
var seq__42587_43180 = cljs.core.seq(node_children);
var chunk__42589_43181 = null;
var count__42590_43182 = (0);
var i__42591_43183 = (0);
while(true){
if((i__42591_43183 < count__42590_43182)){
var child_struct_43186 = chunk__42589_43181.cljs$core$IIndexed$_nth$arity$2(null,i__42591_43183);
if((!((child_struct_43186 == null)))){
if(typeof child_struct_43186 === 'string'){
var text_43187 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43187),child_struct_43186].join(''));
} else {
var children_43188 = shadow.dom.svg_node(child_struct_43186);
if(cljs.core.seq_QMARK_(children_43188)){
var seq__42647_43192 = cljs.core.seq(children_43188);
var chunk__42649_43193 = null;
var count__42650_43194 = (0);
var i__42651_43195 = (0);
while(true){
if((i__42651_43195 < count__42650_43194)){
var child_43196 = chunk__42649_43193.cljs$core$IIndexed$_nth$arity$2(null,i__42651_43195);
if(cljs.core.truth_(child_43196)){
node.appendChild(child_43196);


var G__43197 = seq__42647_43192;
var G__43198 = chunk__42649_43193;
var G__43199 = count__42650_43194;
var G__43200 = (i__42651_43195 + (1));
seq__42647_43192 = G__43197;
chunk__42649_43193 = G__43198;
count__42650_43194 = G__43199;
i__42651_43195 = G__43200;
continue;
} else {
var G__43201 = seq__42647_43192;
var G__43202 = chunk__42649_43193;
var G__43203 = count__42650_43194;
var G__43204 = (i__42651_43195 + (1));
seq__42647_43192 = G__43201;
chunk__42649_43193 = G__43202;
count__42650_43194 = G__43203;
i__42651_43195 = G__43204;
continue;
}
} else {
var temp__5804__auto___43205 = cljs.core.seq(seq__42647_43192);
if(temp__5804__auto___43205){
var seq__42647_43206__$1 = temp__5804__auto___43205;
if(cljs.core.chunked_seq_QMARK_(seq__42647_43206__$1)){
var c__5568__auto___43207 = cljs.core.chunk_first(seq__42647_43206__$1);
var G__43208 = cljs.core.chunk_rest(seq__42647_43206__$1);
var G__43209 = c__5568__auto___43207;
var G__43210 = cljs.core.count(c__5568__auto___43207);
var G__43211 = (0);
seq__42647_43192 = G__43208;
chunk__42649_43193 = G__43209;
count__42650_43194 = G__43210;
i__42651_43195 = G__43211;
continue;
} else {
var child_43212 = cljs.core.first(seq__42647_43206__$1);
if(cljs.core.truth_(child_43212)){
node.appendChild(child_43212);


var G__43213 = cljs.core.next(seq__42647_43206__$1);
var G__43214 = null;
var G__43215 = (0);
var G__43216 = (0);
seq__42647_43192 = G__43213;
chunk__42649_43193 = G__43214;
count__42650_43194 = G__43215;
i__42651_43195 = G__43216;
continue;
} else {
var G__43217 = cljs.core.next(seq__42647_43206__$1);
var G__43218 = null;
var G__43219 = (0);
var G__43220 = (0);
seq__42647_43192 = G__43217;
chunk__42649_43193 = G__43218;
count__42650_43194 = G__43219;
i__42651_43195 = G__43220;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43188);
}
}


var G__43221 = seq__42587_43180;
var G__43222 = chunk__42589_43181;
var G__43223 = count__42590_43182;
var G__43224 = (i__42591_43183 + (1));
seq__42587_43180 = G__43221;
chunk__42589_43181 = G__43222;
count__42590_43182 = G__43223;
i__42591_43183 = G__43224;
continue;
} else {
var G__43225 = seq__42587_43180;
var G__43226 = chunk__42589_43181;
var G__43227 = count__42590_43182;
var G__43228 = (i__42591_43183 + (1));
seq__42587_43180 = G__43225;
chunk__42589_43181 = G__43226;
count__42590_43182 = G__43227;
i__42591_43183 = G__43228;
continue;
}
} else {
var temp__5804__auto___43229 = cljs.core.seq(seq__42587_43180);
if(temp__5804__auto___43229){
var seq__42587_43230__$1 = temp__5804__auto___43229;
if(cljs.core.chunked_seq_QMARK_(seq__42587_43230__$1)){
var c__5568__auto___43231 = cljs.core.chunk_first(seq__42587_43230__$1);
var G__43232 = cljs.core.chunk_rest(seq__42587_43230__$1);
var G__43233 = c__5568__auto___43231;
var G__43234 = cljs.core.count(c__5568__auto___43231);
var G__43235 = (0);
seq__42587_43180 = G__43232;
chunk__42589_43181 = G__43233;
count__42590_43182 = G__43234;
i__42591_43183 = G__43235;
continue;
} else {
var child_struct_43236 = cljs.core.first(seq__42587_43230__$1);
if((!((child_struct_43236 == null)))){
if(typeof child_struct_43236 === 'string'){
var text_43237 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43237),child_struct_43236].join(''));
} else {
var children_43238 = shadow.dom.svg_node(child_struct_43236);
if(cljs.core.seq_QMARK_(children_43238)){
var seq__42685_43240 = cljs.core.seq(children_43238);
var chunk__42687_43241 = null;
var count__42688_43242 = (0);
var i__42689_43243 = (0);
while(true){
if((i__42689_43243 < count__42688_43242)){
var child_43244 = chunk__42687_43241.cljs$core$IIndexed$_nth$arity$2(null,i__42689_43243);
if(cljs.core.truth_(child_43244)){
node.appendChild(child_43244);


var G__43245 = seq__42685_43240;
var G__43246 = chunk__42687_43241;
var G__43247 = count__42688_43242;
var G__43248 = (i__42689_43243 + (1));
seq__42685_43240 = G__43245;
chunk__42687_43241 = G__43246;
count__42688_43242 = G__43247;
i__42689_43243 = G__43248;
continue;
} else {
var G__43249 = seq__42685_43240;
var G__43250 = chunk__42687_43241;
var G__43251 = count__42688_43242;
var G__43252 = (i__42689_43243 + (1));
seq__42685_43240 = G__43249;
chunk__42687_43241 = G__43250;
count__42688_43242 = G__43251;
i__42689_43243 = G__43252;
continue;
}
} else {
var temp__5804__auto___43253__$1 = cljs.core.seq(seq__42685_43240);
if(temp__5804__auto___43253__$1){
var seq__42685_43254__$1 = temp__5804__auto___43253__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42685_43254__$1)){
var c__5568__auto___43255 = cljs.core.chunk_first(seq__42685_43254__$1);
var G__43256 = cljs.core.chunk_rest(seq__42685_43254__$1);
var G__43257 = c__5568__auto___43255;
var G__43258 = cljs.core.count(c__5568__auto___43255);
var G__43259 = (0);
seq__42685_43240 = G__43256;
chunk__42687_43241 = G__43257;
count__42688_43242 = G__43258;
i__42689_43243 = G__43259;
continue;
} else {
var child_43260 = cljs.core.first(seq__42685_43254__$1);
if(cljs.core.truth_(child_43260)){
node.appendChild(child_43260);


var G__43261 = cljs.core.next(seq__42685_43254__$1);
var G__43262 = null;
var G__43263 = (0);
var G__43264 = (0);
seq__42685_43240 = G__43261;
chunk__42687_43241 = G__43262;
count__42688_43242 = G__43263;
i__42689_43243 = G__43264;
continue;
} else {
var G__43265 = cljs.core.next(seq__42685_43254__$1);
var G__43266 = null;
var G__43267 = (0);
var G__43268 = (0);
seq__42685_43240 = G__43265;
chunk__42687_43241 = G__43266;
count__42688_43242 = G__43267;
i__42689_43243 = G__43268;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43238);
}
}


var G__43269 = cljs.core.next(seq__42587_43230__$1);
var G__43270 = null;
var G__43271 = (0);
var G__43272 = (0);
seq__42587_43180 = G__43269;
chunk__42589_43181 = G__43270;
count__42590_43182 = G__43271;
i__42591_43183 = G__43272;
continue;
} else {
var G__43273 = cljs.core.next(seq__42587_43230__$1);
var G__43274 = null;
var G__43275 = (0);
var G__43276 = (0);
seq__42587_43180 = G__43273;
chunk__42589_43181 = G__43274;
count__42590_43182 = G__43275;
i__42591_43183 = G__43276;
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
var len__5769__auto___43278 = arguments.length;
var i__5770__auto___43279 = (0);
while(true){
if((i__5770__auto___43279 < len__5769__auto___43278)){
args__5775__auto__.push((arguments[i__5770__auto___43279]));

var G__43280 = (i__5770__auto___43279 + (1));
i__5770__auto___43279 = G__43280;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42707){
var G__42708 = cljs.core.first(seq42707);
var seq42707__$1 = cljs.core.next(seq42707);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42708,seq42707__$1);
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
var G__42710 = arguments.length;
switch (G__42710) {
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
var c__37108__auto___43282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_42720){
var state_val_42721 = (state_42720[(1)]);
if((state_val_42721 === (1))){
var state_42720__$1 = state_42720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42720__$1,(2),once_or_cleanup);
} else {
if((state_val_42721 === (2))){
var inst_42717 = (state_42720[(2)]);
var inst_42718 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42720__$1 = (function (){var statearr_42722 = state_42720;
(statearr_42722[(7)] = inst_42717);

return statearr_42722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42720__$1,inst_42718);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36508__auto__ = null;
var shadow$dom$state_machine__36508__auto____0 = (function (){
var statearr_42723 = [null,null,null,null,null,null,null,null];
(statearr_42723[(0)] = shadow$dom$state_machine__36508__auto__);

(statearr_42723[(1)] = (1));

return statearr_42723;
});
var shadow$dom$state_machine__36508__auto____1 = (function (state_42720){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_42720);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e42724){var ex__36511__auto__ = e42724;
var statearr_42725_43291 = state_42720;
(statearr_42725_43291[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_42720[(4)]))){
var statearr_42726_43292 = state_42720;
(statearr_42726_43292[(1)] = cljs.core.first((state_42720[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43297 = state_42720;
state_42720 = G__43297;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
shadow$dom$state_machine__36508__auto__ = function(state_42720){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36508__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36508__auto____1.call(this,state_42720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36508__auto____0;
shadow$dom$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36508__auto____1;
return shadow$dom$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_42727 = f__37109__auto__();
(statearr_42727[(6)] = c__37108__auto___43282);

return statearr_42727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
