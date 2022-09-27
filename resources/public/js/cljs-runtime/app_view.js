goog.provide('app_view');
app_view.compute_age = (function app_view$compute_age(dob){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(((new Date()).getUTCFullYear() - dob.getUTCFullYear())));
});
app_view.validation_dispatcher = (function app_view$validation_dispatcher(){
var v = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-is-valid","new-patient-is-valid",-1730167330)], null));
var patient = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient","new-patient",-2026726194)], null));
var change = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-change","patient-change",1272701270)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(patient)], 0));

if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"oms-valid","oms-valid",1492868293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"fio-valid","fio-valid",-492713771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v));
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = new cljs.core.Keyword(null,"gender-valid","gender-valid",515321601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v));
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = new cljs.core.Keyword(null,"address-valid","address-valid",-1890420302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v));
if(cljs.core.truth_(and__5043__auto____$3)){
return new cljs.core.Keyword(null,"dob-valid","dob-valid",343350475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v));
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
if((cljs.core.deref(change) == null)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-patients","add-patients",-66194917),cljs.core.deref(patient)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-patients","update-patients",676789368),cljs.core.deref(patient)], null));
}
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"Not all fields are valid!"], null));
}
});
app_view.on_search_change = (function app_view$on_search_change(value,type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"fio")){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-fio-set","search-fio-set",1030630343),value], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-oms-set","search-oms-set",1773692625),value], null));
}
});
app_view.on_filter_change = (function app_view$on_filter_change(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"none")){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-gender-set","filter-gender-set",-1068076442),""], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-gender-set","filter-gender-set",-1068076442),value], null));
}
});
app_view.search_get_val = (function app_view$search_get_val(from){
var by = new cljs.core.Keyword(null,"by","by",30600856).cljs$core$IFn$_invoke$arity$1(from);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(by,"fio")){
return new cljs.core.Keyword(null,"fio","fio",-1091144093).cljs$core$IFn$_invoke$arity$1(from);
} else {
return new cljs.core.Keyword(null,"oms","oms",670013468).cljs$core$IFn$_invoke$arity$1(from);
}
});
app_view.error_message = (function app_view$error_message(){
var error = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((cljs.core.deref(error) == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(error)], null):null)], null);
});
app_view.table_control = (function app_view$table_control(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-53-17","app-view-53-17",-1609839739)], null),(function (){var s = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-55-18","app-view-55-18",-1865285247)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search...",new cljs.core.Keyword(null,"value","value",305978217),app_view.search_get_val(cljs.core.deref(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38722_SHARP_){
return app_view.on_search_change(p1__38722_SHARP_.target.value,new cljs.core.Keyword(null,"by","by",30600856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-59-22","app-view-59-22",320839855),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"by","by",30600856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38723_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-set-by","search-set-by",-1621777730),p1__38723_SHARP_.target.value], null));
})], null),(function (){var iter__5523__auto__ = (function app_view$table_control_$_iter__38725(s__38726){
return (new cljs.core.LazySeq(null,(function (){
var s__38726__$1 = s__38726;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38726__$1);
if(temp__5804__auto__){
var s__38726__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38726__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38726__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38728 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38727 = (0);
while(true){
if((i__38727 < size__5522__auto__)){
var o = cljs.core._nth(c__5521__auto__,i__38727);
cljs.core.chunk_append(b__38728,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),o], null),o], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__38737 = (i__38727 + (1));
i__38727 = G__38737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38728),app_view$table_control_$_iter__38725(cljs.core.chunk_rest(s__38726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38728),null);
}
} else {
var o = cljs.core.first(s__38726__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),o], null),o], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),app_view$table_control_$_iter__38725(cljs.core.rest(s__38726__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fio","oms"], null));
})()], null)], null);
})(),(function (){var f = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-66-20","app-view-66-20",1907947861)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-67-19","app-view-67-19",922961132)], null),"Gender filter: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-68-24","app-view-68-24",-856093586),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(f)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38724_SHARP_){
return app_view.on_filter_change(p1__38724_SHARP_.target.value);
})], null),(function (){var iter__5523__auto__ = (function app_view$table_control_$_iter__38729(s__38730){
return (new cljs.core.LazySeq(null,(function (){
var s__38730__$1 = s__38730;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38730__$1);
if(temp__5804__auto__){
var s__38730__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38730__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38730__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38732 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38731 = (0);
while(true){
if((i__38731 < size__5522__auto__)){
var o = cljs.core._nth(c__5521__auto__,i__38731);
cljs.core.chunk_append(b__38732,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),o], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o,""))?"none":o)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__38738 = (i__38731 + (1));
i__38731 = G__38738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38732),app_view$table_control_$_iter__38729(cljs.core.chunk_rest(s__38730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38732),null);
}
} else {
var o = cljs.core.first(s__38730__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),o], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o,""))?"none":o)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),app_view$table_control_$_iter__38729(cljs.core.rest(s__38730__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["male","female",""], null));
})()], null)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-filter-search","clear-filter-search",-1082501825)], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-77-21","app-view-77-21",1066935263)], null),"Clear"], null)], null);
});
app_view.changeble_row = (function app_view$changeble_row(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.fio_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.oms_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.gender_select], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.birth_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.address_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app_view.validation_dispatcher();
})], null),"Save"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-change-nil","patient-change-nil",1692701174)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-new-patient","clear-new-patient",539770019)], null));
})], null),"Discard"], null)], null)], null);
});
app_view.table = (function app_view$table(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-92-20","app-view-92-20",-55073700)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"FIO"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"OMS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Gender"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Age"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Address"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-102-21","app-view-102-21",1721335939)], null),(function (){var patients = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patients","patients",134252075)], null));
var change = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-change","patient-change",1272701270)], null));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function app_view$table_$_iter__38733(s__38734){
return (new cljs.core.LazySeq(null,(function (){
var s__38734__$1 = s__38734;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38734__$1);
if(temp__5804__auto__){
var s__38734__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38734__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38734__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38736 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38735 = (0);
while(true){
if((i__38735 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__38735);
cljs.core.chunk_append(b__38736,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(change),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view.changeble_row,p], null):new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","fio","patients/fio",412872813).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","gender","patients/gender",383440175).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app_view.compute_age(new cljs.core.Keyword("patients","dob","patients/dob",1828103207).cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","address","patients/address",-343819592).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38735,p,c__5521__auto__,size__5522__auto__,b__38736,s__38734__$2,temp__5804__auto__,patients,change){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-change-set","patient-change-set",1746852871),p], null));
});})(i__38735,p,c__5521__auto__,size__5522__auto__,b__38736,s__38734__$2,temp__5804__auto__,patients,change))
], null),"Change"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38735,p,c__5521__auto__,size__5522__auto__,b__38736,s__38734__$2,temp__5804__auto__,patients,change){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-patients","delete-patients",-1334337862),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p)], null));
});})(i__38735,p,c__5521__auto__,size__5522__auto__,b__38736,s__38734__$2,temp__5804__auto__,patients,change))
], null),"Delete"], null)], null)], null))));

var G__38739 = (i__38735 + (1));
i__38735 = G__38739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38736),app_view$table_$_iter__38733(cljs.core.chunk_rest(s__38734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38736),null);
}
} else {
var p = cljs.core.first(s__38734__$2);
return cljs.core.cons(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(change),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view.changeble_row,p], null):new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","fio","patients/fio",412872813).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","gender","patients/gender",383440175).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app_view.compute_age(new cljs.core.Keyword("patients","dob","patients/dob",1828103207).cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword("patients","address","patients/address",-343819592).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__38734__$2,temp__5804__auto__,patients,change){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-change-set","patient-change-set",1746852871),p], null));
});})(p,s__38734__$2,temp__5804__auto__,patients,change))
], null),"Change"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__38734__$2,temp__5804__auto__,patients,change){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-patients","delete-patients",-1334337862),new cljs.core.Keyword("patients","oms","patients/oms",1712983590).cljs$core$IFn$_invoke$arity$1(p)], null));
});})(p,s__38734__$2,temp__5804__auto__,patients,change))
], null),"Delete"], null)], null)], null))),app_view$table_$_iter__38733(cljs.core.rest(s__38734__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(patients));
})());
})(),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((((cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-change","patient-change",1272701270)], null))) == null))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.fio_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.oms_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.gender_select], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.birth_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs.address_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app_view.validation_dispatcher();
})], null),"Add"], null)], null)], null):null))], null)], null)], null);
});
app_view.app = (function app_view$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-view-132-17","app-view-132-17",376275860)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view.table_control], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view.table], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view.error_message], null)], null);
});

//# sourceMappingURL=app_view.js.map
