goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__47306 = e.target.readyState;
var fexpr__47305 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__47305.cljs$core$IFn$_invoke$arity$1 ? fexpr__47305.cljs$core$IFn$_invoke$arity$1(G__47306) : fexpr__47305.call(null,G__47306));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__47315,handler){
var map__47316 = p__47315;
var map__47316__$1 = cljs.core.__destructure_map(map__47316);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47316__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47316__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47316__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47316__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47316__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47316__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47316__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__47313_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__47313_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___47357 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___47357)){
var response_type_47358 = temp__5804__auto___47357;
(this$__$1.responseType = cljs.core.name(response_type_47358));
} else {
}

var seq__47324_47359 = cljs.core.seq(headers);
var chunk__47325_47360 = null;
var count__47326_47361 = (0);
var i__47327_47362 = (0);
while(true){
if((i__47327_47362 < count__47326_47361)){
var vec__47335_47363 = chunk__47325_47360.cljs$core$IIndexed$_nth$arity$2(null,i__47327_47362);
var k_47364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47335_47363,(0),null);
var v_47365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47335_47363,(1),null);
this$__$1.setRequestHeader(k_47364,v_47365);


var G__47366 = seq__47324_47359;
var G__47367 = chunk__47325_47360;
var G__47368 = count__47326_47361;
var G__47369 = (i__47327_47362 + (1));
seq__47324_47359 = G__47366;
chunk__47325_47360 = G__47367;
count__47326_47361 = G__47368;
i__47327_47362 = G__47369;
continue;
} else {
var temp__5804__auto___47370 = cljs.core.seq(seq__47324_47359);
if(temp__5804__auto___47370){
var seq__47324_47371__$1 = temp__5804__auto___47370;
if(cljs.core.chunked_seq_QMARK_(seq__47324_47371__$1)){
var c__5568__auto___47372 = cljs.core.chunk_first(seq__47324_47371__$1);
var G__47373 = cljs.core.chunk_rest(seq__47324_47371__$1);
var G__47374 = c__5568__auto___47372;
var G__47375 = cljs.core.count(c__5568__auto___47372);
var G__47376 = (0);
seq__47324_47359 = G__47373;
chunk__47325_47360 = G__47374;
count__47326_47361 = G__47375;
i__47327_47362 = G__47376;
continue;
} else {
var vec__47340_47377 = cljs.core.first(seq__47324_47371__$1);
var k_47378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47340_47377,(0),null);
var v_47379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47340_47377,(1),null);
this$__$1.setRequestHeader(k_47378,v_47379);


var G__47381 = cljs.core.next(seq__47324_47371__$1);
var G__47382 = null;
var G__47383 = (0);
var G__47384 = (0);
seq__47324_47359 = G__47381;
chunk__47325_47360 = G__47382;
count__47326_47361 = G__47383;
i__47327_47362 = G__47384;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
