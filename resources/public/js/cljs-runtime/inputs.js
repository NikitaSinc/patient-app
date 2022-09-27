goog.provide('inputs');
inputs.fio_input = (function inputs$fio_input(){
var fio = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio","new-patient-fio",-88994876)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"inputs-10-19","inputs-10-19",177063683),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(fio),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38499_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-fio-update","new-patient-fio-update",809901397),p1__38499_SHARP_.target.value], null));
})], null)], null);
});
inputs.oms_input = (function inputs$oms_input(){
var oms = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms","new-patient-oms",-1963337357)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"inputs-16-19","inputs-16-19",1929619257),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(oms),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38500_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-oms-update","new-patient-oms-update",311667071),p1__38500_SHARP_.target.value], null));
})], null)], null);
});
inputs.gender_select = (function inputs$gender_select(){
var gender = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender","new-patient-gender",-1773554724)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"inputs-22-20","inputs-22-20",-1004120791),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(gender),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38501_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-gender-update","new-patient-gender-update",-257826869),p1__38501_SHARP_.target.value], null));
})], null),(function (){var iter__5523__auto__ = (function inputs$gender_select_$_iter__38502(s__38503){
return (new cljs.core.LazySeq(null,(function (){
var s__38503__$1 = s__38503;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38503__$1);
if(temp__5804__auto__){
var s__38503__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38503__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38503__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38505 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38504 = (0);
while(true){
if((i__38504 < size__5522__auto__)){
var g = cljs.core._nth(c__5521__auto__,i__38504);
cljs.core.chunk_append(b__38505,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),g], null),g], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),g], null)));

var G__38508 = (i__38504 + (1));
i__38504 = G__38508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38505),inputs$gender_select_$_iter__38502(cljs.core.chunk_rest(s__38503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38505),null);
}
} else {
var g = cljs.core.first(s__38503__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),g], null),g], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),g], null)),inputs$gender_select_$_iter__38502(cljs.core.rest(s__38503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["male","female"], null));
})()], null);
});
inputs.birth_input = (function inputs$birth_input(){
var dob = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob","new-patient-dob",-1647940757)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"inputs-31-19","inputs-31-19",1328930941),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(dob),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38506_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-dob-update","new-patient-dob-update",74265302),p1__38506_SHARP_.target.value], null));
})], null)], null);
});
inputs.address_input = (function inputs$address_input(){
var address = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address","new-patient-address",2099580455)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"inputs-38-19","inputs-38-19",-240296857),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(address),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38507_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-patient-address-update","new-patient-address-update",-888463161),p1__38507_SHARP_.target.value], null));
})], null)], null);
});

//# sourceMappingURL=inputs.js.map
