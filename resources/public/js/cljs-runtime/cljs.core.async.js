goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37191 = arguments.length;
switch (G__37191) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37196 = (function (f,blockable,meta37197){
this.f = f;
this.blockable = blockable;
this.meta37197 = meta37197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37198,meta37197__$1){
var self__ = this;
var _37198__$1 = this;
return (new cljs.core.async.t_cljs$core$async37196(self__.f,self__.blockable,meta37197__$1));
}));

(cljs.core.async.t_cljs$core$async37196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37198){
var self__ = this;
var _37198__$1 = this;
return self__.meta37197;
}));

(cljs.core.async.t_cljs$core$async37196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37197","meta37197",-1315223843,null)], null);
}));

(cljs.core.async.t_cljs$core$async37196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37196");

(cljs.core.async.t_cljs$core$async37196.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37196.
 */
cljs.core.async.__GT_t_cljs$core$async37196 = (function cljs$core$async$__GT_t_cljs$core$async37196(f__$1,blockable__$1,meta37197){
return (new cljs.core.async.t_cljs$core$async37196(f__$1,blockable__$1,meta37197));
});

}

return (new cljs.core.async.t_cljs$core$async37196(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37221 = arguments.length;
switch (G__37221) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37235 = arguments.length;
switch (G__37235) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37242 = arguments.length;
switch (G__37242) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40865 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40865) : fn1.call(null,val_40865));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40865) : fn1.call(null,val_40865));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37260 = arguments.length;
switch (G__37260) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___40875 = n;
var x_40876 = (0);
while(true){
if((x_40876 < n__5636__auto___40875)){
(a[x_40876] = x_40876);

var G__40879 = (x_40876 + (1));
x_40876 = G__40879;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37279 = (function (flag,meta37280){
this.flag = flag;
this.meta37280 = meta37280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37281,meta37280__$1){
var self__ = this;
var _37281__$1 = this;
return (new cljs.core.async.t_cljs$core$async37279(self__.flag,meta37280__$1));
}));

(cljs.core.async.t_cljs$core$async37279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37281){
var self__ = this;
var _37281__$1 = this;
return self__.meta37280;
}));

(cljs.core.async.t_cljs$core$async37279.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37280","meta37280",-1526641139,null)], null);
}));

(cljs.core.async.t_cljs$core$async37279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37279");

(cljs.core.async.t_cljs$core$async37279.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37279.
 */
cljs.core.async.__GT_t_cljs$core$async37279 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37279(flag__$1,meta37280){
return (new cljs.core.async.t_cljs$core$async37279(flag__$1,meta37280));
});

}

return (new cljs.core.async.t_cljs$core$async37279(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37304 = (function (flag,cb,meta37305){
this.flag = flag;
this.cb = cb;
this.meta37305 = meta37305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37306,meta37305__$1){
var self__ = this;
var _37306__$1 = this;
return (new cljs.core.async.t_cljs$core$async37304(self__.flag,self__.cb,meta37305__$1));
}));

(cljs.core.async.t_cljs$core$async37304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37306){
var self__ = this;
var _37306__$1 = this;
return self__.meta37305;
}));

(cljs.core.async.t_cljs$core$async37304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37305","meta37305",1197926372,null)], null);
}));

(cljs.core.async.t_cljs$core$async37304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37304");

(cljs.core.async.t_cljs$core$async37304.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37304.
 */
cljs.core.async.__GT_t_cljs$core$async37304 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37304(flag__$1,cb__$1,meta37305){
return (new cljs.core.async.t_cljs$core$async37304(flag__$1,cb__$1,meta37305));
});

}

return (new cljs.core.async.t_cljs$core$async37304(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37332_SHARP_){
var G__37348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37332_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37348) : fret.call(null,G__37348));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37333_SHARP_){
var G__37354 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37333_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37354) : fret.call(null,G__37354));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40918 = (i + (1));
i = G__40918;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40919 = arguments.length;
var i__5770__auto___40920 = (0);
while(true){
if((i__5770__auto___40920 < len__5769__auto___40919)){
args__5775__auto__.push((arguments[i__5770__auto___40920]));

var G__40921 = (i__5770__auto___40920 + (1));
i__5770__auto___40920 = G__40921;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37379){
var map__37380 = p__37379;
var map__37380__$1 = cljs.core.__destructure_map(map__37380);
var opts = map__37380__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37368){
var G__37369 = cljs.core.first(seq37368);
var seq37368__$1 = cljs.core.next(seq37368);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37369,seq37368__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37416 = arguments.length;
switch (G__37416) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37108__auto___40932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_37489){
var state_val_37490 = (state_37489[(1)]);
if((state_val_37490 === (7))){
var inst_37484 = (state_37489[(2)]);
var state_37489__$1 = state_37489;
var statearr_37499_40934 = state_37489__$1;
(statearr_37499_40934[(2)] = inst_37484);

(statearr_37499_40934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (1))){
var state_37489__$1 = state_37489;
var statearr_37500_40935 = state_37489__$1;
(statearr_37500_40935[(2)] = null);

(statearr_37500_40935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (4))){
var inst_37456 = (state_37489[(7)]);
var inst_37456__$1 = (state_37489[(2)]);
var inst_37465 = (inst_37456__$1 == null);
var state_37489__$1 = (function (){var statearr_37505 = state_37489;
(statearr_37505[(7)] = inst_37456__$1);

return statearr_37505;
})();
if(cljs.core.truth_(inst_37465)){
var statearr_37506_40938 = state_37489__$1;
(statearr_37506_40938[(1)] = (5));

} else {
var statearr_37508_40939 = state_37489__$1;
(statearr_37508_40939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (13))){
var state_37489__$1 = state_37489;
var statearr_37510_40940 = state_37489__$1;
(statearr_37510_40940[(2)] = null);

(statearr_37510_40940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (6))){
var inst_37456 = (state_37489[(7)]);
var state_37489__$1 = state_37489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37489__$1,(11),to,inst_37456);
} else {
if((state_val_37490 === (3))){
var inst_37486 = (state_37489[(2)]);
var state_37489__$1 = state_37489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37489__$1,inst_37486);
} else {
if((state_val_37490 === (12))){
var state_37489__$1 = state_37489;
var statearr_37520_40942 = state_37489__$1;
(statearr_37520_40942[(2)] = null);

(statearr_37520_40942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (2))){
var state_37489__$1 = state_37489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37489__$1,(4),from);
} else {
if((state_val_37490 === (11))){
var inst_37477 = (state_37489[(2)]);
var state_37489__$1 = state_37489;
if(cljs.core.truth_(inst_37477)){
var statearr_37526_40943 = state_37489__$1;
(statearr_37526_40943[(1)] = (12));

} else {
var statearr_37529_40944 = state_37489__$1;
(statearr_37529_40944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (9))){
var state_37489__$1 = state_37489;
var statearr_37538_40945 = state_37489__$1;
(statearr_37538_40945[(2)] = null);

(statearr_37538_40945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (5))){
var state_37489__$1 = state_37489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37539_40946 = state_37489__$1;
(statearr_37539_40946[(1)] = (8));

} else {
var statearr_37540_40947 = state_37489__$1;
(statearr_37540_40947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (14))){
var inst_37482 = (state_37489[(2)]);
var state_37489__$1 = state_37489;
var statearr_37549_40948 = state_37489__$1;
(statearr_37549_40948[(2)] = inst_37482);

(statearr_37549_40948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (10))){
var inst_37474 = (state_37489[(2)]);
var state_37489__$1 = state_37489;
var statearr_37556_40949 = state_37489__$1;
(statearr_37556_40949[(2)] = inst_37474);

(statearr_37556_40949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37490 === (8))){
var inst_37470 = cljs.core.async.close_BANG_(to);
var state_37489__$1 = state_37489;
var statearr_37561_40951 = state_37489__$1;
(statearr_37561_40951[(2)] = inst_37470);

(statearr_37561_40951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_37564 = [null,null,null,null,null,null,null,null];
(statearr_37564[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_37564[(1)] = (1));

return statearr_37564;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_37489){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_37489);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e37569){var ex__36511__auto__ = e37569;
var statearr_37571_40955 = state_37489;
(statearr_37571_40955[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_37489[(4)]))){
var statearr_37575_40956 = state_37489;
(statearr_37575_40956[(1)] = cljs.core.first((state_37489[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40958 = state_37489;
state_37489 = G__40958;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_37489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_37489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_37579 = f__37109__auto__();
(statearr_37579[(6)] = c__37108__auto___40932);

return statearr_37579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__37591){
var vec__37593 = p__37591;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37593,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37593,(1),null);
var job = vec__37593;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37108__auto___40960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_37602){
var state_val_37603 = (state_37602[(1)]);
if((state_val_37603 === (1))){
var state_37602__$1 = state_37602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37602__$1,(2),res,v);
} else {
if((state_val_37603 === (2))){
var inst_37599 = (state_37602[(2)]);
var inst_37600 = cljs.core.async.close_BANG_(res);
var state_37602__$1 = (function (){var statearr_37618 = state_37602;
(statearr_37618[(7)] = inst_37599);

return statearr_37618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37602__$1,inst_37600);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0 = (function (){
var statearr_37624 = [null,null,null,null,null,null,null,null];
(statearr_37624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__);

(statearr_37624[(1)] = (1));

return statearr_37624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1 = (function (state_37602){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_37602);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e37627){var ex__36511__auto__ = e37627;
var statearr_37628_40961 = state_37602;
(statearr_37628_40961[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_37602[(4)]))){
var statearr_37629_40962 = state_37602;
(statearr_37629_40962[(1)] = cljs.core.first((state_37602[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40963 = state_37602;
state_37602 = G__40963;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = function(state_37602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1.call(this,state_37602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_37631 = f__37109__auto__();
(statearr_37631[(6)] = c__37108__auto___40960);

return statearr_37631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37636){
var vec__37637 = p__37636;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37637,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37637,(1),null);
var job = vec__37637;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___40965 = n;
var __40966 = (0);
while(true){
if((__40966 < n__5636__auto___40965)){
var G__37643_40976 = type;
var G__37643_40977__$1 = (((G__37643_40976 instanceof cljs.core.Keyword))?G__37643_40976.fqn:null);
switch (G__37643_40977__$1) {
case "compute":
var c__37108__auto___40979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40966,c__37108__auto___40979,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async){
return (function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = ((function (__40966,c__37108__auto___40979,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async){
return (function (state_37657){
var state_val_37658 = (state_37657[(1)]);
if((state_val_37658 === (1))){
var state_37657__$1 = state_37657;
var statearr_37664_40980 = state_37657__$1;
(statearr_37664_40980[(2)] = null);

(statearr_37664_40980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (2))){
var state_37657__$1 = state_37657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37657__$1,(4),jobs);
} else {
if((state_val_37658 === (3))){
var inst_37655 = (state_37657[(2)]);
var state_37657__$1 = state_37657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37657__$1,inst_37655);
} else {
if((state_val_37658 === (4))){
var inst_37647 = (state_37657[(2)]);
var inst_37648 = process__$1(inst_37647);
var state_37657__$1 = state_37657;
if(cljs.core.truth_(inst_37648)){
var statearr_37665_40983 = state_37657__$1;
(statearr_37665_40983[(1)] = (5));

} else {
var statearr_37668_40984 = state_37657__$1;
(statearr_37668_40984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (5))){
var state_37657__$1 = state_37657;
var statearr_37675_40986 = state_37657__$1;
(statearr_37675_40986[(2)] = null);

(statearr_37675_40986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (6))){
var state_37657__$1 = state_37657;
var statearr_37677_40988 = state_37657__$1;
(statearr_37677_40988[(2)] = null);

(statearr_37677_40988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37658 === (7))){
var inst_37653 = (state_37657[(2)]);
var state_37657__$1 = state_37657;
var statearr_37680_40991 = state_37657__$1;
(statearr_37680_40991[(2)] = inst_37653);

(statearr_37680_40991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40966,c__37108__auto___40979,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async))
;
return ((function (__40966,switch__36507__auto__,c__37108__auto___40979,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0 = (function (){
var statearr_37683 = [null,null,null,null,null,null,null];
(statearr_37683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__);

(statearr_37683[(1)] = (1));

return statearr_37683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1 = (function (state_37657){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_37657);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e37684){var ex__36511__auto__ = e37684;
var statearr_37685_40995 = state_37657;
(statearr_37685_40995[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_37657[(4)]))){
var statearr_37692_40996 = state_37657;
(statearr_37692_40996[(1)] = cljs.core.first((state_37657[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40997 = state_37657;
state_37657 = G__40997;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = function(state_37657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1.call(this,state_37657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__;
})()
;})(__40966,switch__36507__auto__,c__37108__auto___40979,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async))
})();
var state__37110__auto__ = (function (){var statearr_37707 = f__37109__auto__();
(statearr_37707[(6)] = c__37108__auto___40979);

return statearr_37707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
});})(__40966,c__37108__auto___40979,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async))
);


break;
case "async":
var c__37108__auto___40998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40966,c__37108__auto___40998,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async){
return (function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = ((function (__40966,c__37108__auto___40998,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async){
return (function (state_37727){
var state_val_37728 = (state_37727[(1)]);
if((state_val_37728 === (1))){
var state_37727__$1 = state_37727;
var statearr_37736_41000 = state_37727__$1;
(statearr_37736_41000[(2)] = null);

(statearr_37736_41000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (2))){
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37727__$1,(4),jobs);
} else {
if((state_val_37728 === (3))){
var inst_37725 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37727__$1,inst_37725);
} else {
if((state_val_37728 === (4))){
var inst_37714 = (state_37727[(2)]);
var inst_37715 = async(inst_37714);
var state_37727__$1 = state_37727;
if(cljs.core.truth_(inst_37715)){
var statearr_37737_41005 = state_37727__$1;
(statearr_37737_41005[(1)] = (5));

} else {
var statearr_37738_41006 = state_37727__$1;
(statearr_37738_41006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (5))){
var state_37727__$1 = state_37727;
var statearr_37740_41008 = state_37727__$1;
(statearr_37740_41008[(2)] = null);

(statearr_37740_41008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (6))){
var state_37727__$1 = state_37727;
var statearr_37742_41009 = state_37727__$1;
(statearr_37742_41009[(2)] = null);

(statearr_37742_41009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (7))){
var inst_37720 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37747_41010 = state_37727__$1;
(statearr_37747_41010[(2)] = inst_37720);

(statearr_37747_41010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40966,c__37108__auto___40998,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async))
;
return ((function (__40966,switch__36507__auto__,c__37108__auto___40998,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0 = (function (){
var statearr_37748 = [null,null,null,null,null,null,null];
(statearr_37748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__);

(statearr_37748[(1)] = (1));

return statearr_37748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1 = (function (state_37727){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_37727);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e37750){var ex__36511__auto__ = e37750;
var statearr_37751_41012 = state_37727;
(statearr_37751_41012[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_37727[(4)]))){
var statearr_37754_41013 = state_37727;
(statearr_37754_41013[(1)] = cljs.core.first((state_37727[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41016 = state_37727;
state_37727 = G__41016;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = function(state_37727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1.call(this,state_37727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__;
})()
;})(__40966,switch__36507__auto__,c__37108__auto___40998,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async))
})();
var state__37110__auto__ = (function (){var statearr_37759 = f__37109__auto__();
(statearr_37759[(6)] = c__37108__auto___40998);

return statearr_37759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
});})(__40966,c__37108__auto___40998,G__37643_40976,G__37643_40977__$1,n__5636__auto___40965,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37643_40977__$1)].join('')));

}

var G__41019 = (__40966 + (1));
__40966 = G__41019;
continue;
} else {
}
break;
}

var c__37108__auto___41021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_37792){
var state_val_37793 = (state_37792[(1)]);
if((state_val_37793 === (7))){
var inst_37788 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37795_41023 = state_37792__$1;
(statearr_37795_41023[(2)] = inst_37788);

(statearr_37795_41023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (1))){
var state_37792__$1 = state_37792;
var statearr_37796_41024 = state_37792__$1;
(statearr_37796_41024[(2)] = null);

(statearr_37796_41024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (4))){
var inst_37768 = (state_37792[(7)]);
var inst_37768__$1 = (state_37792[(2)]);
var inst_37769 = (inst_37768__$1 == null);
var state_37792__$1 = (function (){var statearr_37797 = state_37792;
(statearr_37797[(7)] = inst_37768__$1);

return statearr_37797;
})();
if(cljs.core.truth_(inst_37769)){
var statearr_37801_41027 = state_37792__$1;
(statearr_37801_41027[(1)] = (5));

} else {
var statearr_37802_41028 = state_37792__$1;
(statearr_37802_41028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (6))){
var inst_37773 = (state_37792[(8)]);
var inst_37768 = (state_37792[(7)]);
var inst_37773__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37780 = [inst_37768,inst_37773__$1];
var inst_37781 = (new cljs.core.PersistentVector(null,2,(5),inst_37778,inst_37780,null));
var state_37792__$1 = (function (){var statearr_37816 = state_37792;
(statearr_37816[(8)] = inst_37773__$1);

return statearr_37816;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37792__$1,(8),jobs,inst_37781);
} else {
if((state_val_37793 === (3))){
var inst_37790 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37792__$1,inst_37790);
} else {
if((state_val_37793 === (2))){
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37792__$1,(4),from);
} else {
if((state_val_37793 === (9))){
var inst_37785 = (state_37792[(2)]);
var state_37792__$1 = (function (){var statearr_37834 = state_37792;
(statearr_37834[(9)] = inst_37785);

return statearr_37834;
})();
var statearr_37836_41031 = state_37792__$1;
(statearr_37836_41031[(2)] = null);

(statearr_37836_41031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (5))){
var inst_37771 = cljs.core.async.close_BANG_(jobs);
var state_37792__$1 = state_37792;
var statearr_37837_41034 = state_37792__$1;
(statearr_37837_41034[(2)] = inst_37771);

(statearr_37837_41034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (8))){
var inst_37773 = (state_37792[(8)]);
var inst_37783 = (state_37792[(2)]);
var state_37792__$1 = (function (){var statearr_37839 = state_37792;
(statearr_37839[(10)] = inst_37783);

return statearr_37839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37792__$1,(9),results,inst_37773);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0 = (function (){
var statearr_37840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__);

(statearr_37840[(1)] = (1));

return statearr_37840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1 = (function (state_37792){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_37792);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e37844){var ex__36511__auto__ = e37844;
var statearr_37845_41040 = state_37792;
(statearr_37845_41040[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_37792[(4)]))){
var statearr_37847_41041 = state_37792;
(statearr_37847_41041[(1)] = cljs.core.first((state_37792[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41043 = state_37792;
state_37792 = G__41043;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = function(state_37792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1.call(this,state_37792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_37851 = f__37109__auto__();
(statearr_37851[(6)] = c__37108__auto___41021);

return statearr_37851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


var c__37108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_37901){
var state_val_37902 = (state_37901[(1)]);
if((state_val_37902 === (7))){
var inst_37895 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
var statearr_37927_41046 = state_37901__$1;
(statearr_37927_41046[(2)] = inst_37895);

(statearr_37927_41046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (20))){
var state_37901__$1 = state_37901;
var statearr_37928_41047 = state_37901__$1;
(statearr_37928_41047[(2)] = null);

(statearr_37928_41047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (1))){
var state_37901__$1 = state_37901;
var statearr_37929_41050 = state_37901__$1;
(statearr_37929_41050[(2)] = null);

(statearr_37929_41050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (4))){
var inst_37857 = (state_37901[(7)]);
var inst_37857__$1 = (state_37901[(2)]);
var inst_37858 = (inst_37857__$1 == null);
var state_37901__$1 = (function (){var statearr_37933 = state_37901;
(statearr_37933[(7)] = inst_37857__$1);

return statearr_37933;
})();
if(cljs.core.truth_(inst_37858)){
var statearr_37940_41053 = state_37901__$1;
(statearr_37940_41053[(1)] = (5));

} else {
var statearr_37942_41054 = state_37901__$1;
(statearr_37942_41054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (15))){
var inst_37871 = (state_37901[(8)]);
var state_37901__$1 = state_37901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37901__$1,(18),to,inst_37871);
} else {
if((state_val_37902 === (21))){
var inst_37884 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
var statearr_37960_41055 = state_37901__$1;
(statearr_37960_41055[(2)] = inst_37884);

(statearr_37960_41055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (13))){
var inst_37886 = (state_37901[(2)]);
var state_37901__$1 = (function (){var statearr_37962 = state_37901;
(statearr_37962[(9)] = inst_37886);

return statearr_37962;
})();
var statearr_37963_41065 = state_37901__$1;
(statearr_37963_41065[(2)] = null);

(statearr_37963_41065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (6))){
var inst_37857 = (state_37901[(7)]);
var state_37901__$1 = state_37901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37901__$1,(11),inst_37857);
} else {
if((state_val_37902 === (17))){
var inst_37879 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
if(cljs.core.truth_(inst_37879)){
var statearr_37981_41068 = state_37901__$1;
(statearr_37981_41068[(1)] = (19));

} else {
var statearr_37992_41069 = state_37901__$1;
(statearr_37992_41069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (3))){
var inst_37897 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37901__$1,inst_37897);
} else {
if((state_val_37902 === (12))){
var inst_37868 = (state_37901[(10)]);
var state_37901__$1 = state_37901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37901__$1,(14),inst_37868);
} else {
if((state_val_37902 === (2))){
var state_37901__$1 = state_37901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37901__$1,(4),results);
} else {
if((state_val_37902 === (19))){
var state_37901__$1 = state_37901;
var statearr_37999_41074 = state_37901__$1;
(statearr_37999_41074[(2)] = null);

(statearr_37999_41074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (11))){
var inst_37868 = (state_37901[(2)]);
var state_37901__$1 = (function (){var statearr_38001 = state_37901;
(statearr_38001[(10)] = inst_37868);

return statearr_38001;
})();
var statearr_38002_41075 = state_37901__$1;
(statearr_38002_41075[(2)] = null);

(statearr_38002_41075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (9))){
var state_37901__$1 = state_37901;
var statearr_38003_41076 = state_37901__$1;
(statearr_38003_41076[(2)] = null);

(statearr_38003_41076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (5))){
var state_37901__$1 = state_37901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38004_41077 = state_37901__$1;
(statearr_38004_41077[(1)] = (8));

} else {
var statearr_38007_41078 = state_37901__$1;
(statearr_38007_41078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (14))){
var inst_37871 = (state_37901[(8)]);
var inst_37873 = (state_37901[(11)]);
var inst_37871__$1 = (state_37901[(2)]);
var inst_37872 = (inst_37871__$1 == null);
var inst_37873__$1 = cljs.core.not(inst_37872);
var state_37901__$1 = (function (){var statearr_38010 = state_37901;
(statearr_38010[(8)] = inst_37871__$1);

(statearr_38010[(11)] = inst_37873__$1);

return statearr_38010;
})();
if(inst_37873__$1){
var statearr_38012_41095 = state_37901__$1;
(statearr_38012_41095[(1)] = (15));

} else {
var statearr_38013_41096 = state_37901__$1;
(statearr_38013_41096[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (16))){
var inst_37873 = (state_37901[(11)]);
var state_37901__$1 = state_37901;
var statearr_38016_41098 = state_37901__$1;
(statearr_38016_41098[(2)] = inst_37873);

(statearr_38016_41098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (10))){
var inst_37865 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
var statearr_38017_41099 = state_37901__$1;
(statearr_38017_41099[(2)] = inst_37865);

(statearr_38017_41099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (18))){
var inst_37876 = (state_37901[(2)]);
var state_37901__$1 = state_37901;
var statearr_38019_41100 = state_37901__$1;
(statearr_38019_41100[(2)] = inst_37876);

(statearr_38019_41100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37902 === (8))){
var inst_37862 = cljs.core.async.close_BANG_(to);
var state_37901__$1 = state_37901;
var statearr_38021_41105 = state_37901__$1;
(statearr_38021_41105[(2)] = inst_37862);

(statearr_38021_41105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0 = (function (){
var statearr_38032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__);

(statearr_38032[(1)] = (1));

return statearr_38032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1 = (function (state_37901){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_37901);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e38037){var ex__36511__auto__ = e38037;
var statearr_38041_41106 = state_37901;
(statearr_38041_41106[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_37901[(4)]))){
var statearr_38043_41107 = state_37901;
(statearr_38043_41107[(1)] = cljs.core.first((state_37901[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41115 = state_37901;
state_37901 = G__41115;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__ = function(state_37901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1.call(this,state_37901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_38046 = f__37109__auto__();
(statearr_38046[(6)] = c__37108__auto__);

return statearr_38046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));

return c__37108__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38050 = arguments.length;
switch (G__38050) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38061 = arguments.length;
switch (G__38061) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38077 = arguments.length;
switch (G__38077) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37108__auto___41145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_38108){
var state_val_38109 = (state_38108[(1)]);
if((state_val_38109 === (7))){
var inst_38104 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
var statearr_38114_41151 = state_38108__$1;
(statearr_38114_41151[(2)] = inst_38104);

(statearr_38114_41151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (1))){
var state_38108__$1 = state_38108;
var statearr_38115_41156 = state_38108__$1;
(statearr_38115_41156[(2)] = null);

(statearr_38115_41156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (4))){
var inst_38083 = (state_38108[(7)]);
var inst_38083__$1 = (state_38108[(2)]);
var inst_38084 = (inst_38083__$1 == null);
var state_38108__$1 = (function (){var statearr_38118 = state_38108;
(statearr_38118[(7)] = inst_38083__$1);

return statearr_38118;
})();
if(cljs.core.truth_(inst_38084)){
var statearr_38120_41161 = state_38108__$1;
(statearr_38120_41161[(1)] = (5));

} else {
var statearr_38121_41162 = state_38108__$1;
(statearr_38121_41162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (13))){
var state_38108__$1 = state_38108;
var statearr_38126_41167 = state_38108__$1;
(statearr_38126_41167[(2)] = null);

(statearr_38126_41167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (6))){
var inst_38083 = (state_38108[(7)]);
var inst_38091 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38083) : p.call(null,inst_38083));
var state_38108__$1 = state_38108;
if(cljs.core.truth_(inst_38091)){
var statearr_38128_41169 = state_38108__$1;
(statearr_38128_41169[(1)] = (9));

} else {
var statearr_38129_41170 = state_38108__$1;
(statearr_38129_41170[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (3))){
var inst_38106 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38108__$1,inst_38106);
} else {
if((state_val_38109 === (12))){
var state_38108__$1 = state_38108;
var statearr_38131_41175 = state_38108__$1;
(statearr_38131_41175[(2)] = null);

(statearr_38131_41175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (2))){
var state_38108__$1 = state_38108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38108__$1,(4),ch);
} else {
if((state_val_38109 === (11))){
var inst_38083 = (state_38108[(7)]);
var inst_38095 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38108__$1,(8),inst_38095,inst_38083);
} else {
if((state_val_38109 === (9))){
var state_38108__$1 = state_38108;
var statearr_38140_41179 = state_38108__$1;
(statearr_38140_41179[(2)] = tc);

(statearr_38140_41179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (5))){
var inst_38087 = cljs.core.async.close_BANG_(tc);
var inst_38089 = cljs.core.async.close_BANG_(fc);
var state_38108__$1 = (function (){var statearr_38144 = state_38108;
(statearr_38144[(8)] = inst_38087);

return statearr_38144;
})();
var statearr_38145_41183 = state_38108__$1;
(statearr_38145_41183[(2)] = inst_38089);

(statearr_38145_41183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (14))){
var inst_38102 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
var statearr_38148_41185 = state_38108__$1;
(statearr_38148_41185[(2)] = inst_38102);

(statearr_38148_41185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (10))){
var state_38108__$1 = state_38108;
var statearr_38150_41189 = state_38108__$1;
(statearr_38150_41189[(2)] = fc);

(statearr_38150_41189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38109 === (8))){
var inst_38097 = (state_38108[(2)]);
var state_38108__$1 = state_38108;
if(cljs.core.truth_(inst_38097)){
var statearr_38153_41193 = state_38108__$1;
(statearr_38153_41193[(1)] = (12));

} else {
var statearr_38155_41194 = state_38108__$1;
(statearr_38155_41194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_38156 = [null,null,null,null,null,null,null,null,null];
(statearr_38156[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_38156[(1)] = (1));

return statearr_38156;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_38108){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_38108);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e38158){var ex__36511__auto__ = e38158;
var statearr_38159_41195 = state_38108;
(statearr_38159_41195[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_38108[(4)]))){
var statearr_38160_41196 = state_38108;
(statearr_38160_41196[(1)] = cljs.core.first((state_38108[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41198 = state_38108;
state_38108 = G__41198;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_38108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_38108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_38163 = f__37109__auto__();
(statearr_38163[(6)] = c__37108__auto___41145);

return statearr_38163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_38191){
var state_val_38192 = (state_38191[(1)]);
if((state_val_38192 === (7))){
var inst_38186 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
var statearr_38199_41206 = state_38191__$1;
(statearr_38199_41206[(2)] = inst_38186);

(statearr_38199_41206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (1))){
var inst_38168 = init;
var inst_38169 = inst_38168;
var state_38191__$1 = (function (){var statearr_38201 = state_38191;
(statearr_38201[(7)] = inst_38169);

return statearr_38201;
})();
var statearr_38202_41209 = state_38191__$1;
(statearr_38202_41209[(2)] = null);

(statearr_38202_41209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (4))){
var inst_38172 = (state_38191[(8)]);
var inst_38172__$1 = (state_38191[(2)]);
var inst_38173 = (inst_38172__$1 == null);
var state_38191__$1 = (function (){var statearr_38205 = state_38191;
(statearr_38205[(8)] = inst_38172__$1);

return statearr_38205;
})();
if(cljs.core.truth_(inst_38173)){
var statearr_38207_41211 = state_38191__$1;
(statearr_38207_41211[(1)] = (5));

} else {
var statearr_38208_41212 = state_38191__$1;
(statearr_38208_41212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (6))){
var inst_38177 = (state_38191[(9)]);
var inst_38172 = (state_38191[(8)]);
var inst_38169 = (state_38191[(7)]);
var inst_38177__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38169,inst_38172) : f.call(null,inst_38169,inst_38172));
var inst_38178 = cljs.core.reduced_QMARK_(inst_38177__$1);
var state_38191__$1 = (function (){var statearr_38210 = state_38191;
(statearr_38210[(9)] = inst_38177__$1);

return statearr_38210;
})();
if(inst_38178){
var statearr_38211_41221 = state_38191__$1;
(statearr_38211_41221[(1)] = (8));

} else {
var statearr_38212_41222 = state_38191__$1;
(statearr_38212_41222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (3))){
var inst_38188 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38191__$1,inst_38188);
} else {
if((state_val_38192 === (2))){
var state_38191__$1 = state_38191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38191__$1,(4),ch);
} else {
if((state_val_38192 === (9))){
var inst_38177 = (state_38191[(9)]);
var inst_38169 = inst_38177;
var state_38191__$1 = (function (){var statearr_38213 = state_38191;
(statearr_38213[(7)] = inst_38169);

return statearr_38213;
})();
var statearr_38214_41225 = state_38191__$1;
(statearr_38214_41225[(2)] = null);

(statearr_38214_41225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (5))){
var inst_38169 = (state_38191[(7)]);
var state_38191__$1 = state_38191;
var statearr_38215_41226 = state_38191__$1;
(statearr_38215_41226[(2)] = inst_38169);

(statearr_38215_41226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (10))){
var inst_38184 = (state_38191[(2)]);
var state_38191__$1 = state_38191;
var statearr_38216_41228 = state_38191__$1;
(statearr_38216_41228[(2)] = inst_38184);

(statearr_38216_41228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38192 === (8))){
var inst_38177 = (state_38191[(9)]);
var inst_38180 = cljs.core.deref(inst_38177);
var state_38191__$1 = state_38191;
var statearr_38221_41229 = state_38191__$1;
(statearr_38221_41229[(2)] = inst_38180);

(statearr_38221_41229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36508__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36508__auto____0 = (function (){
var statearr_38222 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38222[(0)] = cljs$core$async$reduce_$_state_machine__36508__auto__);

(statearr_38222[(1)] = (1));

return statearr_38222;
});
var cljs$core$async$reduce_$_state_machine__36508__auto____1 = (function (state_38191){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_38191);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e38224){var ex__36511__auto__ = e38224;
var statearr_38225_41230 = state_38191;
(statearr_38225_41230[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_38191[(4)]))){
var statearr_38226_41231 = state_38191;
(statearr_38226_41231[(1)] = cljs.core.first((state_38191[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41232 = state_38191;
state_38191 = G__41232;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36508__auto__ = function(state_38191){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36508__auto____1.call(this,state_38191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36508__auto____0;
cljs$core$async$reduce_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36508__auto____1;
return cljs$core$async$reduce_$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_38235 = f__37109__auto__();
(statearr_38235[(6)] = c__37108__auto__);

return statearr_38235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));

return c__37108__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_38245){
var state_val_38246 = (state_38245[(1)]);
if((state_val_38246 === (1))){
var inst_38237 = cljs.core.async.reduce(f__$1,init,ch);
var state_38245__$1 = state_38245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38245__$1,(2),inst_38237);
} else {
if((state_val_38246 === (2))){
var inst_38239 = (state_38245[(2)]);
var inst_38240 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38239) : f__$1.call(null,inst_38239));
var state_38245__$1 = state_38245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38245__$1,inst_38240);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36508__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36508__auto____0 = (function (){
var statearr_38248 = [null,null,null,null,null,null,null];
(statearr_38248[(0)] = cljs$core$async$transduce_$_state_machine__36508__auto__);

(statearr_38248[(1)] = (1));

return statearr_38248;
});
var cljs$core$async$transduce_$_state_machine__36508__auto____1 = (function (state_38245){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_38245);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e38249){var ex__36511__auto__ = e38249;
var statearr_38250_41250 = state_38245;
(statearr_38250_41250[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_38245[(4)]))){
var statearr_38254_41251 = state_38245;
(statearr_38254_41251[(1)] = cljs.core.first((state_38245[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41252 = state_38245;
state_38245 = G__41252;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36508__auto__ = function(state_38245){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36508__auto____1.call(this,state_38245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36508__auto____0;
cljs$core$async$transduce_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36508__auto____1;
return cljs$core$async$transduce_$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_38255 = f__37109__auto__();
(statearr_38255[(6)] = c__37108__auto__);

return statearr_38255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));

return c__37108__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__38264 = arguments.length;
switch (G__38264) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_38296){
var state_val_38297 = (state_38296[(1)]);
if((state_val_38297 === (7))){
var inst_38278 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38305_41261 = state_38296__$1;
(statearr_38305_41261[(2)] = inst_38278);

(statearr_38305_41261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (1))){
var inst_38272 = cljs.core.seq(coll);
var inst_38273 = inst_38272;
var state_38296__$1 = (function (){var statearr_38306 = state_38296;
(statearr_38306[(7)] = inst_38273);

return statearr_38306;
})();
var statearr_38307_41266 = state_38296__$1;
(statearr_38307_41266[(2)] = null);

(statearr_38307_41266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (4))){
var inst_38273 = (state_38296[(7)]);
var inst_38276 = cljs.core.first(inst_38273);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38296__$1,(7),ch,inst_38276);
} else {
if((state_val_38297 === (13))){
var inst_38290 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38309_41267 = state_38296__$1;
(statearr_38309_41267[(2)] = inst_38290);

(statearr_38309_41267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (6))){
var inst_38281 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
if(cljs.core.truth_(inst_38281)){
var statearr_38311_41269 = state_38296__$1;
(statearr_38311_41269[(1)] = (8));

} else {
var statearr_38312_41271 = state_38296__$1;
(statearr_38312_41271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (3))){
var inst_38294 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38296__$1,inst_38294);
} else {
if((state_val_38297 === (12))){
var state_38296__$1 = state_38296;
var statearr_38314_41273 = state_38296__$1;
(statearr_38314_41273[(2)] = null);

(statearr_38314_41273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (2))){
var inst_38273 = (state_38296[(7)]);
var state_38296__$1 = state_38296;
if(cljs.core.truth_(inst_38273)){
var statearr_38327_41274 = state_38296__$1;
(statearr_38327_41274[(1)] = (4));

} else {
var statearr_38328_41275 = state_38296__$1;
(statearr_38328_41275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (11))){
var inst_38287 = cljs.core.async.close_BANG_(ch);
var state_38296__$1 = state_38296;
var statearr_38329_41278 = state_38296__$1;
(statearr_38329_41278[(2)] = inst_38287);

(statearr_38329_41278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (9))){
var state_38296__$1 = state_38296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38331_41280 = state_38296__$1;
(statearr_38331_41280[(1)] = (11));

} else {
var statearr_38332_41281 = state_38296__$1;
(statearr_38332_41281[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (5))){
var inst_38273 = (state_38296[(7)]);
var state_38296__$1 = state_38296;
var statearr_38333_41282 = state_38296__$1;
(statearr_38333_41282[(2)] = inst_38273);

(statearr_38333_41282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (10))){
var inst_38292 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38335_41283 = state_38296__$1;
(statearr_38335_41283[(2)] = inst_38292);

(statearr_38335_41283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (8))){
var inst_38273 = (state_38296[(7)]);
var inst_38283 = cljs.core.next(inst_38273);
var inst_38273__$1 = inst_38283;
var state_38296__$1 = (function (){var statearr_38336 = state_38296;
(statearr_38336[(7)] = inst_38273__$1);

return statearr_38336;
})();
var statearr_38337_41290 = state_38296__$1;
(statearr_38337_41290[(2)] = null);

(statearr_38337_41290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_38338 = [null,null,null,null,null,null,null,null];
(statearr_38338[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_38338[(1)] = (1));

return statearr_38338;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_38296){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_38296);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e38342){var ex__36511__auto__ = e38342;
var statearr_38343_41295 = state_38296;
(statearr_38343_41295[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_38296[(4)]))){
var statearr_38345_41296 = state_38296;
(statearr_38345_41296[(1)] = cljs.core.first((state_38296[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41298 = state_38296;
state_38296 = G__41298;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_38296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_38296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_38347 = f__37109__auto__();
(statearr_38347[(6)] = c__37108__auto__);

return statearr_38347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));

return c__37108__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38354 = arguments.length;
switch (G__38354) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_41317 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_41317(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41327 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_41327(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41362 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_41362(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41366 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_41366(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38383 = (function (ch,cs,meta38384){
this.ch = ch;
this.cs = cs;
this.meta38384 = meta38384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38385,meta38384__$1){
var self__ = this;
var _38385__$1 = this;
return (new cljs.core.async.t_cljs$core$async38383(self__.ch,self__.cs,meta38384__$1));
}));

(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38385){
var self__ = this;
var _38385__$1 = this;
return self__.meta38384;
}));

(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38383.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38384","meta38384",810731834,null)], null);
}));

(cljs.core.async.t_cljs$core$async38383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38383");

(cljs.core.async.t_cljs$core$async38383.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38383.
 */
cljs.core.async.__GT_t_cljs$core$async38383 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38383(ch__$1,cs__$1,meta38384){
return (new cljs.core.async.t_cljs$core$async38383(ch__$1,cs__$1,meta38384));
});

}

return (new cljs.core.async.t_cljs$core$async38383(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37108__auto___41408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_38554){
var state_val_38555 = (state_38554[(1)]);
if((state_val_38555 === (7))){
var inst_38549 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38559_41413 = state_38554__$1;
(statearr_38559_41413[(2)] = inst_38549);

(statearr_38559_41413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (20))){
var inst_38443 = (state_38554[(7)]);
var inst_38456 = cljs.core.first(inst_38443);
var inst_38457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38456,(0),null);
var inst_38458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38456,(1),null);
var state_38554__$1 = (function (){var statearr_38560 = state_38554;
(statearr_38560[(8)] = inst_38457);

return statearr_38560;
})();
if(cljs.core.truth_(inst_38458)){
var statearr_38561_41414 = state_38554__$1;
(statearr_38561_41414[(1)] = (22));

} else {
var statearr_38562_41415 = state_38554__$1;
(statearr_38562_41415[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (27))){
var inst_38494 = (state_38554[(9)]);
var inst_38487 = (state_38554[(10)]);
var inst_38489 = (state_38554[(11)]);
var inst_38411 = (state_38554[(12)]);
var inst_38494__$1 = cljs.core._nth(inst_38487,inst_38489);
var inst_38495 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38494__$1,inst_38411,done);
var state_38554__$1 = (function (){var statearr_38563 = state_38554;
(statearr_38563[(9)] = inst_38494__$1);

return statearr_38563;
})();
if(cljs.core.truth_(inst_38495)){
var statearr_38565_41419 = state_38554__$1;
(statearr_38565_41419[(1)] = (30));

} else {
var statearr_38566_41420 = state_38554__$1;
(statearr_38566_41420[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (1))){
var state_38554__$1 = state_38554;
var statearr_38567_41421 = state_38554__$1;
(statearr_38567_41421[(2)] = null);

(statearr_38567_41421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (24))){
var inst_38443 = (state_38554[(7)]);
var inst_38463 = (state_38554[(2)]);
var inst_38465 = cljs.core.next(inst_38443);
var inst_38420 = inst_38465;
var inst_38421 = null;
var inst_38422 = (0);
var inst_38423 = (0);
var state_38554__$1 = (function (){var statearr_38568 = state_38554;
(statearr_38568[(13)] = inst_38421);

(statearr_38568[(14)] = inst_38422);

(statearr_38568[(15)] = inst_38420);

(statearr_38568[(16)] = inst_38463);

(statearr_38568[(17)] = inst_38423);

return statearr_38568;
})();
var statearr_38569_41430 = state_38554__$1;
(statearr_38569_41430[(2)] = null);

(statearr_38569_41430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (39))){
var state_38554__$1 = state_38554;
var statearr_38577_41431 = state_38554__$1;
(statearr_38577_41431[(2)] = null);

(statearr_38577_41431[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (4))){
var inst_38411 = (state_38554[(12)]);
var inst_38411__$1 = (state_38554[(2)]);
var inst_38412 = (inst_38411__$1 == null);
var state_38554__$1 = (function (){var statearr_38579 = state_38554;
(statearr_38579[(12)] = inst_38411__$1);

return statearr_38579;
})();
if(cljs.core.truth_(inst_38412)){
var statearr_38580_41437 = state_38554__$1;
(statearr_38580_41437[(1)] = (5));

} else {
var statearr_38581_41438 = state_38554__$1;
(statearr_38581_41438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (15))){
var inst_38421 = (state_38554[(13)]);
var inst_38422 = (state_38554[(14)]);
var inst_38420 = (state_38554[(15)]);
var inst_38423 = (state_38554[(17)]);
var inst_38439 = (state_38554[(2)]);
var inst_38440 = (inst_38423 + (1));
var tmp38574 = inst_38421;
var tmp38575 = inst_38422;
var tmp38576 = inst_38420;
var inst_38420__$1 = tmp38576;
var inst_38421__$1 = tmp38574;
var inst_38422__$1 = tmp38575;
var inst_38423__$1 = inst_38440;
var state_38554__$1 = (function (){var statearr_38585 = state_38554;
(statearr_38585[(13)] = inst_38421__$1);

(statearr_38585[(14)] = inst_38422__$1);

(statearr_38585[(18)] = inst_38439);

(statearr_38585[(15)] = inst_38420__$1);

(statearr_38585[(17)] = inst_38423__$1);

return statearr_38585;
})();
var statearr_38586_41442 = state_38554__$1;
(statearr_38586_41442[(2)] = null);

(statearr_38586_41442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (21))){
var inst_38468 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38590_41443 = state_38554__$1;
(statearr_38590_41443[(2)] = inst_38468);

(statearr_38590_41443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (31))){
var inst_38494 = (state_38554[(9)]);
var inst_38501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38494);
var state_38554__$1 = state_38554;
var statearr_38591_41444 = state_38554__$1;
(statearr_38591_41444[(2)] = inst_38501);

(statearr_38591_41444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (32))){
var inst_38487 = (state_38554[(10)]);
var inst_38488 = (state_38554[(19)]);
var inst_38486 = (state_38554[(20)]);
var inst_38489 = (state_38554[(11)]);
var inst_38503 = (state_38554[(2)]);
var inst_38504 = (inst_38489 + (1));
var tmp38587 = inst_38487;
var tmp38588 = inst_38488;
var tmp38589 = inst_38486;
var inst_38486__$1 = tmp38589;
var inst_38487__$1 = tmp38587;
var inst_38488__$1 = tmp38588;
var inst_38489__$1 = inst_38504;
var state_38554__$1 = (function (){var statearr_38593 = state_38554;
(statearr_38593[(10)] = inst_38487__$1);

(statearr_38593[(21)] = inst_38503);

(statearr_38593[(19)] = inst_38488__$1);

(statearr_38593[(20)] = inst_38486__$1);

(statearr_38593[(11)] = inst_38489__$1);

return statearr_38593;
})();
var statearr_38596_41448 = state_38554__$1;
(statearr_38596_41448[(2)] = null);

(statearr_38596_41448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (40))){
var inst_38522 = (state_38554[(22)]);
var inst_38526 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38522);
var state_38554__$1 = state_38554;
var statearr_38597_41449 = state_38554__$1;
(statearr_38597_41449[(2)] = inst_38526);

(statearr_38597_41449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (33))){
var inst_38507 = (state_38554[(23)]);
var inst_38509 = cljs.core.chunked_seq_QMARK_(inst_38507);
var state_38554__$1 = state_38554;
if(inst_38509){
var statearr_38601_41450 = state_38554__$1;
(statearr_38601_41450[(1)] = (36));

} else {
var statearr_38602_41451 = state_38554__$1;
(statearr_38602_41451[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (13))){
var inst_38433 = (state_38554[(24)]);
var inst_38436 = cljs.core.async.close_BANG_(inst_38433);
var state_38554__$1 = state_38554;
var statearr_38603_41457 = state_38554__$1;
(statearr_38603_41457[(2)] = inst_38436);

(statearr_38603_41457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (22))){
var inst_38457 = (state_38554[(8)]);
var inst_38460 = cljs.core.async.close_BANG_(inst_38457);
var state_38554__$1 = state_38554;
var statearr_38604_41458 = state_38554__$1;
(statearr_38604_41458[(2)] = inst_38460);

(statearr_38604_41458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (36))){
var inst_38507 = (state_38554[(23)]);
var inst_38514 = cljs.core.chunk_first(inst_38507);
var inst_38518 = cljs.core.chunk_rest(inst_38507);
var inst_38519 = cljs.core.count(inst_38514);
var inst_38486 = inst_38518;
var inst_38487 = inst_38514;
var inst_38488 = inst_38519;
var inst_38489 = (0);
var state_38554__$1 = (function (){var statearr_38606 = state_38554;
(statearr_38606[(10)] = inst_38487);

(statearr_38606[(19)] = inst_38488);

(statearr_38606[(20)] = inst_38486);

(statearr_38606[(11)] = inst_38489);

return statearr_38606;
})();
var statearr_38607_41462 = state_38554__$1;
(statearr_38607_41462[(2)] = null);

(statearr_38607_41462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (41))){
var inst_38507 = (state_38554[(23)]);
var inst_38528 = (state_38554[(2)]);
var inst_38529 = cljs.core.next(inst_38507);
var inst_38486 = inst_38529;
var inst_38487 = null;
var inst_38488 = (0);
var inst_38489 = (0);
var state_38554__$1 = (function (){var statearr_38608 = state_38554;
(statearr_38608[(10)] = inst_38487);

(statearr_38608[(19)] = inst_38488);

(statearr_38608[(20)] = inst_38486);

(statearr_38608[(11)] = inst_38489);

(statearr_38608[(25)] = inst_38528);

return statearr_38608;
})();
var statearr_38612_41463 = state_38554__$1;
(statearr_38612_41463[(2)] = null);

(statearr_38612_41463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (43))){
var state_38554__$1 = state_38554;
var statearr_38615_41464 = state_38554__$1;
(statearr_38615_41464[(2)] = null);

(statearr_38615_41464[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (29))){
var inst_38537 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38616_41467 = state_38554__$1;
(statearr_38616_41467[(2)] = inst_38537);

(statearr_38616_41467[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (44))){
var inst_38546 = (state_38554[(2)]);
var state_38554__$1 = (function (){var statearr_38617 = state_38554;
(statearr_38617[(26)] = inst_38546);

return statearr_38617;
})();
var statearr_38620_41468 = state_38554__$1;
(statearr_38620_41468[(2)] = null);

(statearr_38620_41468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (6))){
var inst_38478 = (state_38554[(27)]);
var inst_38477 = cljs.core.deref(cs);
var inst_38478__$1 = cljs.core.keys(inst_38477);
var inst_38479 = cljs.core.count(inst_38478__$1);
var inst_38480 = cljs.core.reset_BANG_(dctr,inst_38479);
var inst_38485 = cljs.core.seq(inst_38478__$1);
var inst_38486 = inst_38485;
var inst_38487 = null;
var inst_38488 = (0);
var inst_38489 = (0);
var state_38554__$1 = (function (){var statearr_38627 = state_38554;
(statearr_38627[(10)] = inst_38487);

(statearr_38627[(19)] = inst_38488);

(statearr_38627[(20)] = inst_38486);

(statearr_38627[(11)] = inst_38489);

(statearr_38627[(28)] = inst_38480);

(statearr_38627[(27)] = inst_38478__$1);

return statearr_38627;
})();
var statearr_38628_41473 = state_38554__$1;
(statearr_38628_41473[(2)] = null);

(statearr_38628_41473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (28))){
var inst_38507 = (state_38554[(23)]);
var inst_38486 = (state_38554[(20)]);
var inst_38507__$1 = cljs.core.seq(inst_38486);
var state_38554__$1 = (function (){var statearr_38629 = state_38554;
(statearr_38629[(23)] = inst_38507__$1);

return statearr_38629;
})();
if(inst_38507__$1){
var statearr_38632_41477 = state_38554__$1;
(statearr_38632_41477[(1)] = (33));

} else {
var statearr_38633_41478 = state_38554__$1;
(statearr_38633_41478[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (25))){
var inst_38488 = (state_38554[(19)]);
var inst_38489 = (state_38554[(11)]);
var inst_38491 = (inst_38489 < inst_38488);
var inst_38492 = inst_38491;
var state_38554__$1 = state_38554;
if(cljs.core.truth_(inst_38492)){
var statearr_38634_41479 = state_38554__$1;
(statearr_38634_41479[(1)] = (27));

} else {
var statearr_38635_41480 = state_38554__$1;
(statearr_38635_41480[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (34))){
var state_38554__$1 = state_38554;
var statearr_38636_41481 = state_38554__$1;
(statearr_38636_41481[(2)] = null);

(statearr_38636_41481[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (17))){
var state_38554__$1 = state_38554;
var statearr_38637_41486 = state_38554__$1;
(statearr_38637_41486[(2)] = null);

(statearr_38637_41486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (3))){
var inst_38551 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38554__$1,inst_38551);
} else {
if((state_val_38555 === (12))){
var inst_38473 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38639_41492 = state_38554__$1;
(statearr_38639_41492[(2)] = inst_38473);

(statearr_38639_41492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (2))){
var state_38554__$1 = state_38554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38554__$1,(4),ch);
} else {
if((state_val_38555 === (23))){
var state_38554__$1 = state_38554;
var statearr_38640_41496 = state_38554__$1;
(statearr_38640_41496[(2)] = null);

(statearr_38640_41496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (35))){
var inst_38535 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38641_41497 = state_38554__$1;
(statearr_38641_41497[(2)] = inst_38535);

(statearr_38641_41497[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (19))){
var inst_38443 = (state_38554[(7)]);
var inst_38447 = cljs.core.chunk_first(inst_38443);
var inst_38448 = cljs.core.chunk_rest(inst_38443);
var inst_38449 = cljs.core.count(inst_38447);
var inst_38420 = inst_38448;
var inst_38421 = inst_38447;
var inst_38422 = inst_38449;
var inst_38423 = (0);
var state_38554__$1 = (function (){var statearr_38642 = state_38554;
(statearr_38642[(13)] = inst_38421);

(statearr_38642[(14)] = inst_38422);

(statearr_38642[(15)] = inst_38420);

(statearr_38642[(17)] = inst_38423);

return statearr_38642;
})();
var statearr_38645_41502 = state_38554__$1;
(statearr_38645_41502[(2)] = null);

(statearr_38645_41502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (11))){
var inst_38443 = (state_38554[(7)]);
var inst_38420 = (state_38554[(15)]);
var inst_38443__$1 = cljs.core.seq(inst_38420);
var state_38554__$1 = (function (){var statearr_38646 = state_38554;
(statearr_38646[(7)] = inst_38443__$1);

return statearr_38646;
})();
if(inst_38443__$1){
var statearr_38648_41504 = state_38554__$1;
(statearr_38648_41504[(1)] = (16));

} else {
var statearr_38649_41508 = state_38554__$1;
(statearr_38649_41508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (9))){
var inst_38475 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38650_41509 = state_38554__$1;
(statearr_38650_41509[(2)] = inst_38475);

(statearr_38650_41509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (5))){
var inst_38418 = cljs.core.deref(cs);
var inst_38419 = cljs.core.seq(inst_38418);
var inst_38420 = inst_38419;
var inst_38421 = null;
var inst_38422 = (0);
var inst_38423 = (0);
var state_38554__$1 = (function (){var statearr_38654 = state_38554;
(statearr_38654[(13)] = inst_38421);

(statearr_38654[(14)] = inst_38422);

(statearr_38654[(15)] = inst_38420);

(statearr_38654[(17)] = inst_38423);

return statearr_38654;
})();
var statearr_38655_41511 = state_38554__$1;
(statearr_38655_41511[(2)] = null);

(statearr_38655_41511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (14))){
var state_38554__$1 = state_38554;
var statearr_38656_41515 = state_38554__$1;
(statearr_38656_41515[(2)] = null);

(statearr_38656_41515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (45))){
var inst_38543 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38658_41517 = state_38554__$1;
(statearr_38658_41517[(2)] = inst_38543);

(statearr_38658_41517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (26))){
var inst_38478 = (state_38554[(27)]);
var inst_38539 = (state_38554[(2)]);
var inst_38540 = cljs.core.seq(inst_38478);
var state_38554__$1 = (function (){var statearr_38663 = state_38554;
(statearr_38663[(29)] = inst_38539);

return statearr_38663;
})();
if(inst_38540){
var statearr_38665_41519 = state_38554__$1;
(statearr_38665_41519[(1)] = (42));

} else {
var statearr_38667_41520 = state_38554__$1;
(statearr_38667_41520[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (16))){
var inst_38443 = (state_38554[(7)]);
var inst_38445 = cljs.core.chunked_seq_QMARK_(inst_38443);
var state_38554__$1 = state_38554;
if(inst_38445){
var statearr_38668_41521 = state_38554__$1;
(statearr_38668_41521[(1)] = (19));

} else {
var statearr_38669_41522 = state_38554__$1;
(statearr_38669_41522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (38))){
var inst_38532 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38670_41523 = state_38554__$1;
(statearr_38670_41523[(2)] = inst_38532);

(statearr_38670_41523[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (30))){
var state_38554__$1 = state_38554;
var statearr_38671_41524 = state_38554__$1;
(statearr_38671_41524[(2)] = null);

(statearr_38671_41524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (10))){
var inst_38421 = (state_38554[(13)]);
var inst_38423 = (state_38554[(17)]);
var inst_38432 = cljs.core._nth(inst_38421,inst_38423);
var inst_38433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38432,(0),null);
var inst_38434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38432,(1),null);
var state_38554__$1 = (function (){var statearr_38672 = state_38554;
(statearr_38672[(24)] = inst_38433);

return statearr_38672;
})();
if(cljs.core.truth_(inst_38434)){
var statearr_38673_41529 = state_38554__$1;
(statearr_38673_41529[(1)] = (13));

} else {
var statearr_38677_41530 = state_38554__$1;
(statearr_38677_41530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (18))){
var inst_38471 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38690_41531 = state_38554__$1;
(statearr_38690_41531[(2)] = inst_38471);

(statearr_38690_41531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (42))){
var state_38554__$1 = state_38554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38554__$1,(45),dchan);
} else {
if((state_val_38555 === (37))){
var inst_38507 = (state_38554[(23)]);
var inst_38522 = (state_38554[(22)]);
var inst_38411 = (state_38554[(12)]);
var inst_38522__$1 = cljs.core.first(inst_38507);
var inst_38523 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38522__$1,inst_38411,done);
var state_38554__$1 = (function (){var statearr_38710 = state_38554;
(statearr_38710[(22)] = inst_38522__$1);

return statearr_38710;
})();
if(cljs.core.truth_(inst_38523)){
var statearr_38711_41537 = state_38554__$1;
(statearr_38711_41537[(1)] = (39));

} else {
var statearr_38712_41538 = state_38554__$1;
(statearr_38712_41538[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (8))){
var inst_38422 = (state_38554[(14)]);
var inst_38423 = (state_38554[(17)]);
var inst_38425 = (inst_38423 < inst_38422);
var inst_38426 = inst_38425;
var state_38554__$1 = state_38554;
if(cljs.core.truth_(inst_38426)){
var statearr_38721_41542 = state_38554__$1;
(statearr_38721_41542[(1)] = (10));

} else {
var statearr_38725_41543 = state_38554__$1;
(statearr_38725_41543[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36508__auto__ = null;
var cljs$core$async$mult_$_state_machine__36508__auto____0 = (function (){
var statearr_38726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38726[(0)] = cljs$core$async$mult_$_state_machine__36508__auto__);

(statearr_38726[(1)] = (1));

return statearr_38726;
});
var cljs$core$async$mult_$_state_machine__36508__auto____1 = (function (state_38554){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_38554);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e38728){var ex__36511__auto__ = e38728;
var statearr_38729_41548 = state_38554;
(statearr_38729_41548[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_38554[(4)]))){
var statearr_38730_41549 = state_38554;
(statearr_38730_41549[(1)] = cljs.core.first((state_38554[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41550 = state_38554;
state_38554 = G__41550;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36508__auto__ = function(state_38554){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36508__auto____1.call(this,state_38554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36508__auto____0;
cljs$core$async$mult_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36508__auto____1;
return cljs$core$async$mult_$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_38732 = f__37109__auto__();
(statearr_38732[(6)] = c__37108__auto___41408);

return statearr_38732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38735 = arguments.length;
switch (G__38735) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_41565 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_41565(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41566 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_41566(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41567 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41567(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41571 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_41571(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41573 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41573(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41584 = arguments.length;
var i__5770__auto___41585 = (0);
while(true){
if((i__5770__auto___41585 < len__5769__auto___41584)){
args__5775__auto__.push((arguments[i__5770__auto___41585]));

var G__41586 = (i__5770__auto___41585 + (1));
i__5770__auto___41585 = G__41586;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38763){
var map__38764 = p__38763;
var map__38764__$1 = cljs.core.__destructure_map(map__38764);
var opts = map__38764__$1;
var statearr_38765_41587 = state;
(statearr_38765_41587[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38766_41588 = state;
(statearr_38766_41588[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_38769_41592 = state;
(statearr_38769_41592[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38750){
var G__38751 = cljs.core.first(seq38750);
var seq38750__$1 = cljs.core.next(seq38750);
var G__38752 = cljs.core.first(seq38750__$1);
var seq38750__$2 = cljs.core.next(seq38750__$1);
var G__38753 = cljs.core.first(seq38750__$2);
var seq38750__$3 = cljs.core.next(seq38750__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38751,G__38752,G__38753,seq38750__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38776 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38777){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38777 = meta38777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38778,meta38777__$1){
var self__ = this;
var _38778__$1 = this;
return (new cljs.core.async.t_cljs$core$async38776(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38777__$1));
}));

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38778){
var self__ = this;
var _38778__$1 = this;
return self__.meta38777;
}));

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38776.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38777","meta38777",-1381476272,null)], null);
}));

(cljs.core.async.t_cljs$core$async38776.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38776");

(cljs.core.async.t_cljs$core$async38776.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38776");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38776.
 */
cljs.core.async.__GT_t_cljs$core$async38776 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38776(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38777){
return (new cljs.core.async.t_cljs$core$async38776(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38777));
});

}

return (new cljs.core.async.t_cljs$core$async38776(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37108__auto___41618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_38878){
var state_val_38879 = (state_38878[(1)]);
if((state_val_38879 === (7))){
var inst_38828 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
if(cljs.core.truth_(inst_38828)){
var statearr_38880_41626 = state_38878__$1;
(statearr_38880_41626[(1)] = (8));

} else {
var statearr_38882_41631 = state_38878__$1;
(statearr_38882_41631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (20))){
var inst_38821 = (state_38878[(7)]);
var state_38878__$1 = state_38878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38878__$1,(23),out,inst_38821);
} else {
if((state_val_38879 === (1))){
var inst_38801 = calc_state();
var inst_38804 = cljs.core.__destructure_map(inst_38801);
var inst_38805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38804,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38804,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38804,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38809 = inst_38801;
var state_38878__$1 = (function (){var statearr_38887 = state_38878;
(statearr_38887[(8)] = inst_38806);

(statearr_38887[(9)] = inst_38805);

(statearr_38887[(10)] = inst_38808);

(statearr_38887[(11)] = inst_38809);

return statearr_38887;
})();
var statearr_38890_41637 = state_38878__$1;
(statearr_38890_41637[(2)] = null);

(statearr_38890_41637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (24))){
var inst_38812 = (state_38878[(12)]);
var inst_38809 = inst_38812;
var state_38878__$1 = (function (){var statearr_38892 = state_38878;
(statearr_38892[(11)] = inst_38809);

return statearr_38892;
})();
var statearr_38895_41639 = state_38878__$1;
(statearr_38895_41639[(2)] = null);

(statearr_38895_41639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (4))){
var inst_38821 = (state_38878[(7)]);
var inst_38823 = (state_38878[(13)]);
var inst_38820 = (state_38878[(2)]);
var inst_38821__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38820,(0),null);
var inst_38822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38820,(1),null);
var inst_38823__$1 = (inst_38821__$1 == null);
var state_38878__$1 = (function (){var statearr_38905 = state_38878;
(statearr_38905[(14)] = inst_38822);

(statearr_38905[(7)] = inst_38821__$1);

(statearr_38905[(13)] = inst_38823__$1);

return statearr_38905;
})();
if(cljs.core.truth_(inst_38823__$1)){
var statearr_38906_41640 = state_38878__$1;
(statearr_38906_41640[(1)] = (5));

} else {
var statearr_38907_41641 = state_38878__$1;
(statearr_38907_41641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (15))){
var inst_38813 = (state_38878[(15)]);
var inst_38845 = (state_38878[(16)]);
var inst_38845__$1 = cljs.core.empty_QMARK_(inst_38813);
var state_38878__$1 = (function (){var statearr_38912 = state_38878;
(statearr_38912[(16)] = inst_38845__$1);

return statearr_38912;
})();
if(inst_38845__$1){
var statearr_38914_41642 = state_38878__$1;
(statearr_38914_41642[(1)] = (17));

} else {
var statearr_38915_41643 = state_38878__$1;
(statearr_38915_41643[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (21))){
var inst_38812 = (state_38878[(12)]);
var inst_38809 = inst_38812;
var state_38878__$1 = (function (){var statearr_38917 = state_38878;
(statearr_38917[(11)] = inst_38809);

return statearr_38917;
})();
var statearr_38918_41644 = state_38878__$1;
(statearr_38918_41644[(2)] = null);

(statearr_38918_41644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (13))){
var inst_38838 = (state_38878[(2)]);
var inst_38839 = calc_state();
var inst_38809 = inst_38839;
var state_38878__$1 = (function (){var statearr_38923 = state_38878;
(statearr_38923[(11)] = inst_38809);

(statearr_38923[(17)] = inst_38838);

return statearr_38923;
})();
var statearr_38925_41646 = state_38878__$1;
(statearr_38925_41646[(2)] = null);

(statearr_38925_41646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (22))){
var inst_38872 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
var statearr_38932_41649 = state_38878__$1;
(statearr_38932_41649[(2)] = inst_38872);

(statearr_38932_41649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (6))){
var inst_38822 = (state_38878[(14)]);
var inst_38826 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38822,change);
var state_38878__$1 = state_38878;
var statearr_38936_41650 = state_38878__$1;
(statearr_38936_41650[(2)] = inst_38826);

(statearr_38936_41650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (25))){
var state_38878__$1 = state_38878;
var statearr_38940_41651 = state_38878__$1;
(statearr_38940_41651[(2)] = null);

(statearr_38940_41651[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (17))){
var inst_38822 = (state_38878[(14)]);
var inst_38814 = (state_38878[(18)]);
var inst_38851 = (inst_38814.cljs$core$IFn$_invoke$arity$1 ? inst_38814.cljs$core$IFn$_invoke$arity$1(inst_38822) : inst_38814.call(null,inst_38822));
var inst_38852 = cljs.core.not(inst_38851);
var state_38878__$1 = state_38878;
var statearr_38947_41654 = state_38878__$1;
(statearr_38947_41654[(2)] = inst_38852);

(statearr_38947_41654[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (3))){
var inst_38876 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38878__$1,inst_38876);
} else {
if((state_val_38879 === (12))){
var state_38878__$1 = state_38878;
var statearr_38992_41657 = state_38878__$1;
(statearr_38992_41657[(2)] = null);

(statearr_38992_41657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (2))){
var inst_38809 = (state_38878[(11)]);
var inst_38812 = (state_38878[(12)]);
var inst_38812__$1 = cljs.core.__destructure_map(inst_38809);
var inst_38813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38812__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38812__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38812__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38878__$1 = (function (){var statearr_38997 = state_38878;
(statearr_38997[(15)] = inst_38813);

(statearr_38997[(18)] = inst_38814);

(statearr_38997[(12)] = inst_38812__$1);

return statearr_38997;
})();
return cljs.core.async.ioc_alts_BANG_(state_38878__$1,(4),inst_38815);
} else {
if((state_val_38879 === (23))){
var inst_38863 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
if(cljs.core.truth_(inst_38863)){
var statearr_39001_41659 = state_38878__$1;
(statearr_39001_41659[(1)] = (24));

} else {
var statearr_39002_41660 = state_38878__$1;
(statearr_39002_41660[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (19))){
var inst_38855 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
var statearr_39004_41661 = state_38878__$1;
(statearr_39004_41661[(2)] = inst_38855);

(statearr_39004_41661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (11))){
var inst_38822 = (state_38878[(14)]);
var inst_38835 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38822);
var state_38878__$1 = state_38878;
var statearr_39008_41662 = state_38878__$1;
(statearr_39008_41662[(2)] = inst_38835);

(statearr_39008_41662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (9))){
var inst_38813 = (state_38878[(15)]);
var inst_38822 = (state_38878[(14)]);
var inst_38842 = (state_38878[(19)]);
var inst_38842__$1 = (inst_38813.cljs$core$IFn$_invoke$arity$1 ? inst_38813.cljs$core$IFn$_invoke$arity$1(inst_38822) : inst_38813.call(null,inst_38822));
var state_38878__$1 = (function (){var statearr_39013 = state_38878;
(statearr_39013[(19)] = inst_38842__$1);

return statearr_39013;
})();
if(cljs.core.truth_(inst_38842__$1)){
var statearr_39014_41664 = state_38878__$1;
(statearr_39014_41664[(1)] = (14));

} else {
var statearr_39017_41665 = state_38878__$1;
(statearr_39017_41665[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (5))){
var inst_38823 = (state_38878[(13)]);
var state_38878__$1 = state_38878;
var statearr_39019_41666 = state_38878__$1;
(statearr_39019_41666[(2)] = inst_38823);

(statearr_39019_41666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (14))){
var inst_38842 = (state_38878[(19)]);
var state_38878__$1 = state_38878;
var statearr_39022_41671 = state_38878__$1;
(statearr_39022_41671[(2)] = inst_38842);

(statearr_39022_41671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (26))){
var inst_38868 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
var statearr_39026_41672 = state_38878__$1;
(statearr_39026_41672[(2)] = inst_38868);

(statearr_39026_41672[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (16))){
var inst_38860 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
if(cljs.core.truth_(inst_38860)){
var statearr_39028_41673 = state_38878__$1;
(statearr_39028_41673[(1)] = (20));

} else {
var statearr_39029_41674 = state_38878__$1;
(statearr_39029_41674[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (10))){
var inst_38874 = (state_38878[(2)]);
var state_38878__$1 = state_38878;
var statearr_39032_41677 = state_38878__$1;
(statearr_39032_41677[(2)] = inst_38874);

(statearr_39032_41677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (18))){
var inst_38845 = (state_38878[(16)]);
var state_38878__$1 = state_38878;
var statearr_39034_41678 = state_38878__$1;
(statearr_39034_41678[(2)] = inst_38845);

(statearr_39034_41678[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38879 === (8))){
var inst_38821 = (state_38878[(7)]);
var inst_38832 = (inst_38821 == null);
var state_38878__$1 = state_38878;
if(cljs.core.truth_(inst_38832)){
var statearr_39043_41679 = state_38878__$1;
(statearr_39043_41679[(1)] = (11));

} else {
var statearr_39046_41680 = state_38878__$1;
(statearr_39046_41680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36508__auto__ = null;
var cljs$core$async$mix_$_state_machine__36508__auto____0 = (function (){
var statearr_39065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39065[(0)] = cljs$core$async$mix_$_state_machine__36508__auto__);

(statearr_39065[(1)] = (1));

return statearr_39065;
});
var cljs$core$async$mix_$_state_machine__36508__auto____1 = (function (state_38878){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_38878);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e39069){var ex__36511__auto__ = e39069;
var statearr_39071_41685 = state_38878;
(statearr_39071_41685[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_38878[(4)]))){
var statearr_39072_41686 = state_38878;
(statearr_39072_41686[(1)] = cljs.core.first((state_38878[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41687 = state_38878;
state_38878 = G__41687;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36508__auto__ = function(state_38878){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36508__auto____1.call(this,state_38878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36508__auto____0;
cljs$core$async$mix_$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36508__auto____1;
return cljs$core$async$mix_$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_39076 = f__37109__auto__();
(statearr_39076[(6)] = c__37108__auto___41618);

return statearr_39076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41698 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41698(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41704 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41704(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41712 = (function() {
var G__41713 = null;
var G__41713__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__41713__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__41713 = function(p,v){
switch(arguments.length){
case 1:
return G__41713__1.call(this,p);
case 2:
return G__41713__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41713.cljs$core$IFn$_invoke$arity$1 = G__41713__1;
G__41713.cljs$core$IFn$_invoke$arity$2 = G__41713__2;
return G__41713;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39150 = arguments.length;
switch (G__39150) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41712(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41712(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39186 = arguments.length;
switch (G__39186) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39174_SHARP_){
if(cljs.core.truth_((p1__39174_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39174_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39174_SHARP_.call(null,topic)))){
return p1__39174_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39174_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39209 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39210){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39210 = meta39210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39211,meta39210__$1){
var self__ = this;
var _39211__$1 = this;
return (new cljs.core.async.t_cljs$core$async39209(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39210__$1));
}));

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39211){
var self__ = this;
var _39211__$1 = this;
return self__.meta39210;
}));

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39209.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39210","meta39210",1053429125,null)], null);
}));

(cljs.core.async.t_cljs$core$async39209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39209");

(cljs.core.async.t_cljs$core$async39209.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39209.
 */
cljs.core.async.__GT_t_cljs$core$async39209 = (function cljs$core$async$__GT_t_cljs$core$async39209(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39210){
return (new cljs.core.async.t_cljs$core$async39209(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39210));
});

}

return (new cljs.core.async.t_cljs$core$async39209(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37108__auto___41767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_39350){
var state_val_39351 = (state_39350[(1)]);
if((state_val_39351 === (7))){
var inst_39342 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39353_41768 = state_39350__$1;
(statearr_39353_41768[(2)] = inst_39342);

(statearr_39353_41768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (20))){
var state_39350__$1 = state_39350;
var statearr_39354_41769 = state_39350__$1;
(statearr_39354_41769[(2)] = null);

(statearr_39354_41769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (1))){
var state_39350__$1 = state_39350;
var statearr_39362_41771 = state_39350__$1;
(statearr_39362_41771[(2)] = null);

(statearr_39362_41771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (24))){
var inst_39314 = (state_39350[(7)]);
var inst_39334 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39314);
var state_39350__$1 = state_39350;
var statearr_39364_41774 = state_39350__$1;
(statearr_39364_41774[(2)] = inst_39334);

(statearr_39364_41774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (4))){
var inst_39249 = (state_39350[(8)]);
var inst_39249__$1 = (state_39350[(2)]);
var inst_39250 = (inst_39249__$1 == null);
var state_39350__$1 = (function (){var statearr_39368 = state_39350;
(statearr_39368[(8)] = inst_39249__$1);

return statearr_39368;
})();
if(cljs.core.truth_(inst_39250)){
var statearr_39370_41779 = state_39350__$1;
(statearr_39370_41779[(1)] = (5));

} else {
var statearr_39371_41780 = state_39350__$1;
(statearr_39371_41780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (15))){
var inst_39306 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39375_41781 = state_39350__$1;
(statearr_39375_41781[(2)] = inst_39306);

(statearr_39375_41781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (21))){
var inst_39339 = (state_39350[(2)]);
var state_39350__$1 = (function (){var statearr_39377 = state_39350;
(statearr_39377[(9)] = inst_39339);

return statearr_39377;
})();
var statearr_39378_41782 = state_39350__$1;
(statearr_39378_41782[(2)] = null);

(statearr_39378_41782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (13))){
var inst_39283 = (state_39350[(10)]);
var inst_39287 = cljs.core.chunked_seq_QMARK_(inst_39283);
var state_39350__$1 = state_39350;
if(inst_39287){
var statearr_39379_41783 = state_39350__$1;
(statearr_39379_41783[(1)] = (16));

} else {
var statearr_39383_41784 = state_39350__$1;
(statearr_39383_41784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (22))){
var inst_39327 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
if(cljs.core.truth_(inst_39327)){
var statearr_39389_41785 = state_39350__$1;
(statearr_39389_41785[(1)] = (23));

} else {
var statearr_39390_41786 = state_39350__$1;
(statearr_39390_41786[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (6))){
var inst_39321 = (state_39350[(11)]);
var inst_39314 = (state_39350[(7)]);
var inst_39249 = (state_39350[(8)]);
var inst_39314__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39249) : topic_fn.call(null,inst_39249));
var inst_39320 = cljs.core.deref(mults);
var inst_39321__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39320,inst_39314__$1);
var state_39350__$1 = (function (){var statearr_39392 = state_39350;
(statearr_39392[(11)] = inst_39321__$1);

(statearr_39392[(7)] = inst_39314__$1);

return statearr_39392;
})();
if(cljs.core.truth_(inst_39321__$1)){
var statearr_39394_41788 = state_39350__$1;
(statearr_39394_41788[(1)] = (19));

} else {
var statearr_39395_41789 = state_39350__$1;
(statearr_39395_41789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (25))){
var inst_39336 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39396_41790 = state_39350__$1;
(statearr_39396_41790[(2)] = inst_39336);

(statearr_39396_41790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (17))){
var inst_39283 = (state_39350[(10)]);
var inst_39297 = cljs.core.first(inst_39283);
var inst_39298 = cljs.core.async.muxch_STAR_(inst_39297);
var inst_39299 = cljs.core.async.close_BANG_(inst_39298);
var inst_39300 = cljs.core.next(inst_39283);
var inst_39261 = inst_39300;
var inst_39262 = null;
var inst_39263 = (0);
var inst_39264 = (0);
var state_39350__$1 = (function (){var statearr_39401 = state_39350;
(statearr_39401[(12)] = inst_39263);

(statearr_39401[(13)] = inst_39264);

(statearr_39401[(14)] = inst_39299);

(statearr_39401[(15)] = inst_39262);

(statearr_39401[(16)] = inst_39261);

return statearr_39401;
})();
var statearr_39404_41792 = state_39350__$1;
(statearr_39404_41792[(2)] = null);

(statearr_39404_41792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (3))){
var inst_39344 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39350__$1,inst_39344);
} else {
if((state_val_39351 === (12))){
var inst_39308 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39412_41799 = state_39350__$1;
(statearr_39412_41799[(2)] = inst_39308);

(statearr_39412_41799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (2))){
var state_39350__$1 = state_39350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39350__$1,(4),ch);
} else {
if((state_val_39351 === (23))){
var state_39350__$1 = state_39350;
var statearr_39415_41801 = state_39350__$1;
(statearr_39415_41801[(2)] = null);

(statearr_39415_41801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (19))){
var inst_39321 = (state_39350[(11)]);
var inst_39249 = (state_39350[(8)]);
var inst_39325 = cljs.core.async.muxch_STAR_(inst_39321);
var state_39350__$1 = state_39350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39350__$1,(22),inst_39325,inst_39249);
} else {
if((state_val_39351 === (11))){
var inst_39283 = (state_39350[(10)]);
var inst_39261 = (state_39350[(16)]);
var inst_39283__$1 = cljs.core.seq(inst_39261);
var state_39350__$1 = (function (){var statearr_39420 = state_39350;
(statearr_39420[(10)] = inst_39283__$1);

return statearr_39420;
})();
if(inst_39283__$1){
var statearr_39421_41805 = state_39350__$1;
(statearr_39421_41805[(1)] = (13));

} else {
var statearr_39422_41807 = state_39350__$1;
(statearr_39422_41807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (9))){
var inst_39310 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39423_41808 = state_39350__$1;
(statearr_39423_41808[(2)] = inst_39310);

(statearr_39423_41808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (5))){
var inst_39257 = cljs.core.deref(mults);
var inst_39258 = cljs.core.vals(inst_39257);
var inst_39259 = cljs.core.seq(inst_39258);
var inst_39261 = inst_39259;
var inst_39262 = null;
var inst_39263 = (0);
var inst_39264 = (0);
var state_39350__$1 = (function (){var statearr_39433 = state_39350;
(statearr_39433[(12)] = inst_39263);

(statearr_39433[(13)] = inst_39264);

(statearr_39433[(15)] = inst_39262);

(statearr_39433[(16)] = inst_39261);

return statearr_39433;
})();
var statearr_39434_41810 = state_39350__$1;
(statearr_39434_41810[(2)] = null);

(statearr_39434_41810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (14))){
var state_39350__$1 = state_39350;
var statearr_39444_41811 = state_39350__$1;
(statearr_39444_41811[(2)] = null);

(statearr_39444_41811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (16))){
var inst_39283 = (state_39350[(10)]);
var inst_39292 = cljs.core.chunk_first(inst_39283);
var inst_39293 = cljs.core.chunk_rest(inst_39283);
var inst_39294 = cljs.core.count(inst_39292);
var inst_39261 = inst_39293;
var inst_39262 = inst_39292;
var inst_39263 = inst_39294;
var inst_39264 = (0);
var state_39350__$1 = (function (){var statearr_39446 = state_39350;
(statearr_39446[(12)] = inst_39263);

(statearr_39446[(13)] = inst_39264);

(statearr_39446[(15)] = inst_39262);

(statearr_39446[(16)] = inst_39261);

return statearr_39446;
})();
var statearr_39447_41812 = state_39350__$1;
(statearr_39447_41812[(2)] = null);

(statearr_39447_41812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (10))){
var inst_39263 = (state_39350[(12)]);
var inst_39264 = (state_39350[(13)]);
var inst_39262 = (state_39350[(15)]);
var inst_39261 = (state_39350[(16)]);
var inst_39271 = cljs.core._nth(inst_39262,inst_39264);
var inst_39276 = cljs.core.async.muxch_STAR_(inst_39271);
var inst_39277 = cljs.core.async.close_BANG_(inst_39276);
var inst_39279 = (inst_39264 + (1));
var tmp39440 = inst_39263;
var tmp39441 = inst_39262;
var tmp39442 = inst_39261;
var inst_39261__$1 = tmp39442;
var inst_39262__$1 = tmp39441;
var inst_39263__$1 = tmp39440;
var inst_39264__$1 = inst_39279;
var state_39350__$1 = (function (){var statearr_39448 = state_39350;
(statearr_39448[(12)] = inst_39263__$1);

(statearr_39448[(13)] = inst_39264__$1);

(statearr_39448[(17)] = inst_39277);

(statearr_39448[(15)] = inst_39262__$1);

(statearr_39448[(16)] = inst_39261__$1);

return statearr_39448;
})();
var statearr_39459_41817 = state_39350__$1;
(statearr_39459_41817[(2)] = null);

(statearr_39459_41817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (18))){
var inst_39303 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39463_41818 = state_39350__$1;
(statearr_39463_41818[(2)] = inst_39303);

(statearr_39463_41818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (8))){
var inst_39263 = (state_39350[(12)]);
var inst_39264 = (state_39350[(13)]);
var inst_39268 = (inst_39264 < inst_39263);
var inst_39269 = inst_39268;
var state_39350__$1 = state_39350;
if(cljs.core.truth_(inst_39269)){
var statearr_39469_41823 = state_39350__$1;
(statearr_39469_41823[(1)] = (10));

} else {
var statearr_39470_41825 = state_39350__$1;
(statearr_39470_41825[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_39475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39475[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_39475[(1)] = (1));

return statearr_39475;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_39350){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_39350);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e39483){var ex__36511__auto__ = e39483;
var statearr_39484_41832 = state_39350;
(statearr_39484_41832[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_39350[(4)]))){
var statearr_39489_41834 = state_39350;
(statearr_39489_41834[(1)] = cljs.core.first((state_39350[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41835 = state_39350;
state_39350 = G__41835;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_39350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_39350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_39497 = f__37109__auto__();
(statearr_39497[(6)] = c__37108__auto___41767);

return statearr_39497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39506 = arguments.length;
switch (G__39506) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39528 = arguments.length;
switch (G__39528) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39547 = arguments.length;
switch (G__39547) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__37108__auto___41854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_39606){
var state_val_39607 = (state_39606[(1)]);
if((state_val_39607 === (7))){
var state_39606__$1 = state_39606;
var statearr_39613_41855 = state_39606__$1;
(statearr_39613_41855[(2)] = null);

(statearr_39613_41855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (1))){
var state_39606__$1 = state_39606;
var statearr_39614_41856 = state_39606__$1;
(statearr_39614_41856[(2)] = null);

(statearr_39614_41856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (4))){
var inst_39556 = (state_39606[(7)]);
var inst_39555 = (state_39606[(8)]);
var inst_39558 = (inst_39556 < inst_39555);
var state_39606__$1 = state_39606;
if(cljs.core.truth_(inst_39558)){
var statearr_39615_41858 = state_39606__$1;
(statearr_39615_41858[(1)] = (6));

} else {
var statearr_39616_41859 = state_39606__$1;
(statearr_39616_41859[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (15))){
var inst_39582 = (state_39606[(9)]);
var inst_39587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39582);
var state_39606__$1 = state_39606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39606__$1,(17),out,inst_39587);
} else {
if((state_val_39607 === (13))){
var inst_39582 = (state_39606[(9)]);
var inst_39582__$1 = (state_39606[(2)]);
var inst_39583 = cljs.core.some(cljs.core.nil_QMARK_,inst_39582__$1);
var state_39606__$1 = (function (){var statearr_39617 = state_39606;
(statearr_39617[(9)] = inst_39582__$1);

return statearr_39617;
})();
if(cljs.core.truth_(inst_39583)){
var statearr_39618_41861 = state_39606__$1;
(statearr_39618_41861[(1)] = (14));

} else {
var statearr_39619_41862 = state_39606__$1;
(statearr_39619_41862[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (6))){
var state_39606__$1 = state_39606;
var statearr_39624_41864 = state_39606__$1;
(statearr_39624_41864[(2)] = null);

(statearr_39624_41864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (17))){
var inst_39589 = (state_39606[(2)]);
var state_39606__$1 = (function (){var statearr_39632 = state_39606;
(statearr_39632[(10)] = inst_39589);

return statearr_39632;
})();
var statearr_39633_41866 = state_39606__$1;
(statearr_39633_41866[(2)] = null);

(statearr_39633_41866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (3))){
var inst_39603 = (state_39606[(2)]);
var state_39606__$1 = state_39606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39606__$1,inst_39603);
} else {
if((state_val_39607 === (12))){
var _ = (function (){var statearr_39639 = state_39606;
(statearr_39639[(4)] = cljs.core.rest((state_39606[(4)])));

return statearr_39639;
})();
var state_39606__$1 = state_39606;
var ex39631 = (state_39606__$1[(2)]);
var statearr_39641_41867 = state_39606__$1;
(statearr_39641_41867[(5)] = ex39631);


if((ex39631 instanceof Object)){
var statearr_39642_41868 = state_39606__$1;
(statearr_39642_41868[(1)] = (11));

(statearr_39642_41868[(5)] = null);

} else {
throw ex39631;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (2))){
var inst_39554 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39555 = cnt;
var inst_39556 = (0);
var state_39606__$1 = (function (){var statearr_39644 = state_39606;
(statearr_39644[(7)] = inst_39556);

(statearr_39644[(8)] = inst_39555);

(statearr_39644[(11)] = inst_39554);

return statearr_39644;
})();
var statearr_39650_41870 = state_39606__$1;
(statearr_39650_41870[(2)] = null);

(statearr_39650_41870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (11))){
var inst_39561 = (state_39606[(2)]);
var inst_39562 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39606__$1 = (function (){var statearr_39651 = state_39606;
(statearr_39651[(12)] = inst_39561);

return statearr_39651;
})();
var statearr_39657_41875 = state_39606__$1;
(statearr_39657_41875[(2)] = inst_39562);

(statearr_39657_41875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (9))){
var inst_39556 = (state_39606[(7)]);
var _ = (function (){var statearr_39658 = state_39606;
(statearr_39658[(4)] = cljs.core.cons((12),(state_39606[(4)])));

return statearr_39658;
})();
var inst_39568 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39556) : chs__$1.call(null,inst_39556));
var inst_39569 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39556) : done.call(null,inst_39556));
var inst_39570 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39568,inst_39569);
var ___$1 = (function (){var statearr_39659 = state_39606;
(statearr_39659[(4)] = cljs.core.rest((state_39606[(4)])));

return statearr_39659;
})();
var state_39606__$1 = state_39606;
var statearr_39660_41876 = state_39606__$1;
(statearr_39660_41876[(2)] = inst_39570);

(statearr_39660_41876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (5))){
var inst_39580 = (state_39606[(2)]);
var state_39606__$1 = (function (){var statearr_39662 = state_39606;
(statearr_39662[(13)] = inst_39580);

return statearr_39662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39606__$1,(13),dchan);
} else {
if((state_val_39607 === (14))){
var inst_39585 = cljs.core.async.close_BANG_(out);
var state_39606__$1 = state_39606;
var statearr_39664_41881 = state_39606__$1;
(statearr_39664_41881[(2)] = inst_39585);

(statearr_39664_41881[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (16))){
var inst_39601 = (state_39606[(2)]);
var state_39606__$1 = state_39606;
var statearr_39670_41882 = state_39606__$1;
(statearr_39670_41882[(2)] = inst_39601);

(statearr_39670_41882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (10))){
var inst_39556 = (state_39606[(7)]);
var inst_39573 = (state_39606[(2)]);
var inst_39574 = (inst_39556 + (1));
var inst_39556__$1 = inst_39574;
var state_39606__$1 = (function (){var statearr_39672 = state_39606;
(statearr_39672[(7)] = inst_39556__$1);

(statearr_39672[(14)] = inst_39573);

return statearr_39672;
})();
var statearr_39677_41883 = state_39606__$1;
(statearr_39677_41883[(2)] = null);

(statearr_39677_41883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39607 === (8))){
var inst_39578 = (state_39606[(2)]);
var state_39606__$1 = state_39606;
var statearr_39681_41884 = state_39606__$1;
(statearr_39681_41884[(2)] = inst_39578);

(statearr_39681_41884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_39683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39683[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_39683[(1)] = (1));

return statearr_39683;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_39606){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_39606);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e39685){var ex__36511__auto__ = e39685;
var statearr_39686_41885 = state_39606;
(statearr_39686_41885[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_39606[(4)]))){
var statearr_39690_41886 = state_39606;
(statearr_39690_41886[(1)] = cljs.core.first((state_39606[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41887 = state_39606;
state_39606 = G__41887;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_39606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_39606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_39693 = f__37109__auto__();
(statearr_39693[(6)] = c__37108__auto___41854);

return statearr_39693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39696 = arguments.length;
switch (G__39696) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37108__auto___41894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_39738){
var state_val_39739 = (state_39738[(1)]);
if((state_val_39739 === (7))){
var inst_39714 = (state_39738[(7)]);
var inst_39713 = (state_39738[(8)]);
var inst_39713__$1 = (state_39738[(2)]);
var inst_39714__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39713__$1,(0),null);
var inst_39715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39713__$1,(1),null);
var inst_39716 = (inst_39714__$1 == null);
var state_39738__$1 = (function (){var statearr_39745 = state_39738;
(statearr_39745[(7)] = inst_39714__$1);

(statearr_39745[(8)] = inst_39713__$1);

(statearr_39745[(9)] = inst_39715);

return statearr_39745;
})();
if(cljs.core.truth_(inst_39716)){
var statearr_39749_41897 = state_39738__$1;
(statearr_39749_41897[(1)] = (8));

} else {
var statearr_39750_41898 = state_39738__$1;
(statearr_39750_41898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39739 === (1))){
var inst_39701 = cljs.core.vec(chs);
var inst_39702 = inst_39701;
var state_39738__$1 = (function (){var statearr_39751 = state_39738;
(statearr_39751[(10)] = inst_39702);

return statearr_39751;
})();
var statearr_39752_41899 = state_39738__$1;
(statearr_39752_41899[(2)] = null);

(statearr_39752_41899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39739 === (4))){
var inst_39702 = (state_39738[(10)]);
var state_39738__$1 = state_39738;
return cljs.core.async.ioc_alts_BANG_(state_39738__$1,(7),inst_39702);
} else {
if((state_val_39739 === (6))){
var inst_39734 = (state_39738[(2)]);
var state_39738__$1 = state_39738;
var statearr_39763_41900 = state_39738__$1;
(statearr_39763_41900[(2)] = inst_39734);

(statearr_39763_41900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39739 === (3))){
var inst_39736 = (state_39738[(2)]);
var state_39738__$1 = state_39738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39738__$1,inst_39736);
} else {
if((state_val_39739 === (2))){
var inst_39702 = (state_39738[(10)]);
var inst_39706 = cljs.core.count(inst_39702);
var inst_39707 = (inst_39706 > (0));
var state_39738__$1 = state_39738;
if(cljs.core.truth_(inst_39707)){
var statearr_39774_41901 = state_39738__$1;
(statearr_39774_41901[(1)] = (4));

} else {
var statearr_39775_41902 = state_39738__$1;
(statearr_39775_41902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39739 === (11))){
var inst_39702 = (state_39738[(10)]);
var inst_39727 = (state_39738[(2)]);
var tmp39764 = inst_39702;
var inst_39702__$1 = tmp39764;
var state_39738__$1 = (function (){var statearr_39778 = state_39738;
(statearr_39778[(11)] = inst_39727);

(statearr_39778[(10)] = inst_39702__$1);

return statearr_39778;
})();
var statearr_39779_41908 = state_39738__$1;
(statearr_39779_41908[(2)] = null);

(statearr_39779_41908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39739 === (9))){
var inst_39714 = (state_39738[(7)]);
var state_39738__$1 = state_39738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39738__$1,(11),out,inst_39714);
} else {
if((state_val_39739 === (5))){
var inst_39732 = cljs.core.async.close_BANG_(out);
var state_39738__$1 = state_39738;
var statearr_39783_41911 = state_39738__$1;
(statearr_39783_41911[(2)] = inst_39732);

(statearr_39783_41911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39739 === (10))){
var inst_39730 = (state_39738[(2)]);
var state_39738__$1 = state_39738;
var statearr_39784_41912 = state_39738__$1;
(statearr_39784_41912[(2)] = inst_39730);

(statearr_39784_41912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39739 === (8))){
var inst_39714 = (state_39738[(7)]);
var inst_39713 = (state_39738[(8)]);
var inst_39715 = (state_39738[(9)]);
var inst_39702 = (state_39738[(10)]);
var inst_39721 = (function (){var cs = inst_39702;
var vec__39709 = inst_39713;
var v = inst_39714;
var c = inst_39715;
return (function (p1__39694_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39694_SHARP_);
});
})();
var inst_39723 = cljs.core.filterv(inst_39721,inst_39702);
var inst_39702__$1 = inst_39723;
var state_39738__$1 = (function (){var statearr_39785 = state_39738;
(statearr_39785[(10)] = inst_39702__$1);

return statearr_39785;
})();
var statearr_39786_41919 = state_39738__$1;
(statearr_39786_41919[(2)] = null);

(statearr_39786_41919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_39788 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39788[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_39788[(1)] = (1));

return statearr_39788;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_39738){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_39738);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e39791){var ex__36511__auto__ = e39791;
var statearr_39798_41922 = state_39738;
(statearr_39798_41922[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_39738[(4)]))){
var statearr_39807_41923 = state_39738;
(statearr_39807_41923[(1)] = cljs.core.first((state_39738[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41929 = state_39738;
state_39738 = G__41929;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_39738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_39738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_39814 = f__37109__auto__();
(statearr_39814[(6)] = c__37108__auto___41894);

return statearr_39814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39820 = arguments.length;
switch (G__39820) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37108__auto___41942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_39860){
var state_val_39861 = (state_39860[(1)]);
if((state_val_39861 === (7))){
var inst_39833 = (state_39860[(7)]);
var inst_39833__$1 = (state_39860[(2)]);
var inst_39838 = (inst_39833__$1 == null);
var inst_39839 = cljs.core.not(inst_39838);
var state_39860__$1 = (function (){var statearr_39865 = state_39860;
(statearr_39865[(7)] = inst_39833__$1);

return statearr_39865;
})();
if(inst_39839){
var statearr_39866_41949 = state_39860__$1;
(statearr_39866_41949[(1)] = (8));

} else {
var statearr_39867_41950 = state_39860__$1;
(statearr_39867_41950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (1))){
var inst_39828 = (0);
var state_39860__$1 = (function (){var statearr_39871 = state_39860;
(statearr_39871[(8)] = inst_39828);

return statearr_39871;
})();
var statearr_39876_41951 = state_39860__$1;
(statearr_39876_41951[(2)] = null);

(statearr_39876_41951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (4))){
var state_39860__$1 = state_39860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39860__$1,(7),ch);
} else {
if((state_val_39861 === (6))){
var inst_39853 = (state_39860[(2)]);
var state_39860__$1 = state_39860;
var statearr_39877_41958 = state_39860__$1;
(statearr_39877_41958[(2)] = inst_39853);

(statearr_39877_41958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (3))){
var inst_39855 = (state_39860[(2)]);
var inst_39856 = cljs.core.async.close_BANG_(out);
var state_39860__$1 = (function (){var statearr_39878 = state_39860;
(statearr_39878[(9)] = inst_39855);

return statearr_39878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39860__$1,inst_39856);
} else {
if((state_val_39861 === (2))){
var inst_39828 = (state_39860[(8)]);
var inst_39830 = (inst_39828 < n);
var state_39860__$1 = state_39860;
if(cljs.core.truth_(inst_39830)){
var statearr_39882_41966 = state_39860__$1;
(statearr_39882_41966[(1)] = (4));

} else {
var statearr_39883_41967 = state_39860__$1;
(statearr_39883_41967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (11))){
var inst_39828 = (state_39860[(8)]);
var inst_39842 = (state_39860[(2)]);
var inst_39846 = (inst_39828 + (1));
var inst_39828__$1 = inst_39846;
var state_39860__$1 = (function (){var statearr_39884 = state_39860;
(statearr_39884[(8)] = inst_39828__$1);

(statearr_39884[(10)] = inst_39842);

return statearr_39884;
})();
var statearr_39888_41968 = state_39860__$1;
(statearr_39888_41968[(2)] = null);

(statearr_39888_41968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (9))){
var state_39860__$1 = state_39860;
var statearr_39890_41977 = state_39860__$1;
(statearr_39890_41977[(2)] = null);

(statearr_39890_41977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (5))){
var state_39860__$1 = state_39860;
var statearr_39891_41978 = state_39860__$1;
(statearr_39891_41978[(2)] = null);

(statearr_39891_41978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (10))){
var inst_39850 = (state_39860[(2)]);
var state_39860__$1 = state_39860;
var statearr_39896_41979 = state_39860__$1;
(statearr_39896_41979[(2)] = inst_39850);

(statearr_39896_41979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39861 === (8))){
var inst_39833 = (state_39860[(7)]);
var state_39860__$1 = state_39860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39860__$1,(11),out,inst_39833);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_39901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39901[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_39901[(1)] = (1));

return statearr_39901;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_39860){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_39860);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e39902){var ex__36511__auto__ = e39902;
var statearr_39903_41985 = state_39860;
(statearr_39903_41985[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_39860[(4)]))){
var statearr_39904_41986 = state_39860;
(statearr_39904_41986[(1)] = cljs.core.first((state_39860[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41987 = state_39860;
state_39860 = G__41987;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_39860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_39860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_39910 = f__37109__auto__();
(statearr_39910[(6)] = c__37108__auto___41942);

return statearr_39910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39917 = (function (f,ch,meta39918){
this.f = f;
this.ch = ch;
this.meta39918 = meta39918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39919,meta39918__$1){
var self__ = this;
var _39919__$1 = this;
return (new cljs.core.async.t_cljs$core$async39917(self__.f,self__.ch,meta39918__$1));
}));

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39919){
var self__ = this;
var _39919__$1 = this;
return self__.meta39918;
}));

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39928 = (function (f,ch,meta39918,_,fn1,meta39929){
this.f = f;
this.ch = ch;
this.meta39918 = meta39918;
this._ = _;
this.fn1 = fn1;
this.meta39929 = meta39929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39930,meta39929__$1){
var self__ = this;
var _39930__$1 = this;
return (new cljs.core.async.t_cljs$core$async39928(self__.f,self__.ch,self__.meta39918,self__._,self__.fn1,meta39929__$1));
}));

(cljs.core.async.t_cljs$core$async39928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39930){
var self__ = this;
var _39930__$1 = this;
return self__.meta39929;
}));

(cljs.core.async.t_cljs$core$async39928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39912_SHARP_){
var G__39935 = (((p1__39912_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39912_SHARP_) : self__.f.call(null,p1__39912_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39935) : f1.call(null,G__39935));
});
}));

(cljs.core.async.t_cljs$core$async39928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39918","meta39918",1233787673,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39917","cljs.core.async/t_cljs$core$async39917",-1437355924,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39929","meta39929",333449246,null)], null);
}));

(cljs.core.async.t_cljs$core$async39928.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39928");

(cljs.core.async.t_cljs$core$async39928.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39928");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39928.
 */
cljs.core.async.__GT_t_cljs$core$async39928 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39928(f__$1,ch__$1,meta39918__$1,___$2,fn1__$1,meta39929){
return (new cljs.core.async.t_cljs$core$async39928(f__$1,ch__$1,meta39918__$1,___$2,fn1__$1,meta39929));
});

}

return (new cljs.core.async.t_cljs$core$async39928(self__.f,self__.ch,self__.meta39918,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39936 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39936) : self__.f.call(null,G__39936));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39918","meta39918",1233787673,null)], null);
}));

(cljs.core.async.t_cljs$core$async39917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39917");

(cljs.core.async.t_cljs$core$async39917.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39917.
 */
cljs.core.async.__GT_t_cljs$core$async39917 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39917(f__$1,ch__$1,meta39918){
return (new cljs.core.async.t_cljs$core$async39917(f__$1,ch__$1,meta39918));
});

}

return (new cljs.core.async.t_cljs$core$async39917(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39938 = (function (f,ch,meta39939){
this.f = f;
this.ch = ch;
this.meta39939 = meta39939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39940,meta39939__$1){
var self__ = this;
var _39940__$1 = this;
return (new cljs.core.async.t_cljs$core$async39938(self__.f,self__.ch,meta39939__$1));
}));

(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39940){
var self__ = this;
var _39940__$1 = this;
return self__.meta39939;
}));

(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39939","meta39939",-1495967526,null)], null);
}));

(cljs.core.async.t_cljs$core$async39938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39938");

(cljs.core.async.t_cljs$core$async39938.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39938.
 */
cljs.core.async.__GT_t_cljs$core$async39938 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39938(f__$1,ch__$1,meta39939){
return (new cljs.core.async.t_cljs$core$async39938(f__$1,ch__$1,meta39939));
});

}

return (new cljs.core.async.t_cljs$core$async39938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39950 = (function (p,ch,meta39951){
this.p = p;
this.ch = ch;
this.meta39951 = meta39951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39952,meta39951__$1){
var self__ = this;
var _39952__$1 = this;
return (new cljs.core.async.t_cljs$core$async39950(self__.p,self__.ch,meta39951__$1));
}));

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39952){
var self__ = this;
var _39952__$1 = this;
return self__.meta39951;
}));

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39951","meta39951",-1914601146,null)], null);
}));

(cljs.core.async.t_cljs$core$async39950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39950");

(cljs.core.async.t_cljs$core$async39950.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39950.
 */
cljs.core.async.__GT_t_cljs$core$async39950 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39950(p__$1,ch__$1,meta39951){
return (new cljs.core.async.t_cljs$core$async39950(p__$1,ch__$1,meta39951));
});

}

return (new cljs.core.async.t_cljs$core$async39950(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39974 = arguments.length;
switch (G__39974) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37108__auto___42084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_40013){
var state_val_40014 = (state_40013[(1)]);
if((state_val_40014 === (7))){
var inst_40009 = (state_40013[(2)]);
var state_40013__$1 = state_40013;
var statearr_40019_42085 = state_40013__$1;
(statearr_40019_42085[(2)] = inst_40009);

(statearr_40019_42085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (1))){
var state_40013__$1 = state_40013;
var statearr_40020_42095 = state_40013__$1;
(statearr_40020_42095[(2)] = null);

(statearr_40020_42095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (4))){
var inst_39991 = (state_40013[(7)]);
var inst_39991__$1 = (state_40013[(2)]);
var inst_39994 = (inst_39991__$1 == null);
var state_40013__$1 = (function (){var statearr_40024 = state_40013;
(statearr_40024[(7)] = inst_39991__$1);

return statearr_40024;
})();
if(cljs.core.truth_(inst_39994)){
var statearr_40025_42108 = state_40013__$1;
(statearr_40025_42108[(1)] = (5));

} else {
var statearr_40028_42110 = state_40013__$1;
(statearr_40028_42110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (6))){
var inst_39991 = (state_40013[(7)]);
var inst_39999 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39991) : p.call(null,inst_39991));
var state_40013__$1 = state_40013;
if(cljs.core.truth_(inst_39999)){
var statearr_40030_42128 = state_40013__$1;
(statearr_40030_42128[(1)] = (8));

} else {
var statearr_40031_42130 = state_40013__$1;
(statearr_40031_42130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (3))){
var inst_40011 = (state_40013[(2)]);
var state_40013__$1 = state_40013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40013__$1,inst_40011);
} else {
if((state_val_40014 === (2))){
var state_40013__$1 = state_40013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40013__$1,(4),ch);
} else {
if((state_val_40014 === (11))){
var inst_40003 = (state_40013[(2)]);
var state_40013__$1 = state_40013;
var statearr_40035_42145 = state_40013__$1;
(statearr_40035_42145[(2)] = inst_40003);

(statearr_40035_42145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (9))){
var state_40013__$1 = state_40013;
var statearr_40039_42146 = state_40013__$1;
(statearr_40039_42146[(2)] = null);

(statearr_40039_42146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (5))){
var inst_39996 = cljs.core.async.close_BANG_(out);
var state_40013__$1 = state_40013;
var statearr_40042_42154 = state_40013__$1;
(statearr_40042_42154[(2)] = inst_39996);

(statearr_40042_42154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (10))){
var inst_40006 = (state_40013[(2)]);
var state_40013__$1 = (function (){var statearr_40045 = state_40013;
(statearr_40045[(8)] = inst_40006);

return statearr_40045;
})();
var statearr_40048_42163 = state_40013__$1;
(statearr_40048_42163[(2)] = null);

(statearr_40048_42163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40014 === (8))){
var inst_39991 = (state_40013[(7)]);
var state_40013__$1 = state_40013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40013__$1,(11),out,inst_39991);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_40051 = [null,null,null,null,null,null,null,null,null];
(statearr_40051[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_40051[(1)] = (1));

return statearr_40051;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_40013){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_40013);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e40056){var ex__36511__auto__ = e40056;
var statearr_40057_42182 = state_40013;
(statearr_40057_42182[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_40013[(4)]))){
var statearr_40058_42184 = state_40013;
(statearr_40058_42184[(1)] = cljs.core.first((state_40013[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42195 = state_40013;
state_40013 = G__42195;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_40013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_40013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_40062 = f__37109__auto__();
(statearr_40062[(6)] = c__37108__auto___42084);

return statearr_40062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40069 = arguments.length;
switch (G__40069) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_40148){
var state_val_40149 = (state_40148[(1)]);
if((state_val_40149 === (7))){
var inst_40140 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40157_42213 = state_40148__$1;
(statearr_40157_42213[(2)] = inst_40140);

(statearr_40157_42213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (20))){
var inst_40103 = (state_40148[(7)]);
var inst_40117 = (state_40148[(2)]);
var inst_40121 = cljs.core.next(inst_40103);
var inst_40089 = inst_40121;
var inst_40090 = null;
var inst_40091 = (0);
var inst_40092 = (0);
var state_40148__$1 = (function (){var statearr_40158 = state_40148;
(statearr_40158[(8)] = inst_40090);

(statearr_40158[(9)] = inst_40092);

(statearr_40158[(10)] = inst_40091);

(statearr_40158[(11)] = inst_40089);

(statearr_40158[(12)] = inst_40117);

return statearr_40158;
})();
var statearr_40161_42220 = state_40148__$1;
(statearr_40161_42220[(2)] = null);

(statearr_40161_42220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (1))){
var state_40148__$1 = state_40148;
var statearr_40162_42222 = state_40148__$1;
(statearr_40162_42222[(2)] = null);

(statearr_40162_42222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (4))){
var inst_40076 = (state_40148[(13)]);
var inst_40076__$1 = (state_40148[(2)]);
var inst_40078 = (inst_40076__$1 == null);
var state_40148__$1 = (function (){var statearr_40164 = state_40148;
(statearr_40164[(13)] = inst_40076__$1);

return statearr_40164;
})();
if(cljs.core.truth_(inst_40078)){
var statearr_40167_42227 = state_40148__$1;
(statearr_40167_42227[(1)] = (5));

} else {
var statearr_40168_42230 = state_40148__$1;
(statearr_40168_42230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (15))){
var state_40148__$1 = state_40148;
var statearr_40178_42231 = state_40148__$1;
(statearr_40178_42231[(2)] = null);

(statearr_40178_42231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (21))){
var state_40148__$1 = state_40148;
var statearr_40179_42233 = state_40148__$1;
(statearr_40179_42233[(2)] = null);

(statearr_40179_42233[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (13))){
var inst_40090 = (state_40148[(8)]);
var inst_40092 = (state_40148[(9)]);
var inst_40091 = (state_40148[(10)]);
var inst_40089 = (state_40148[(11)]);
var inst_40099 = (state_40148[(2)]);
var inst_40100 = (inst_40092 + (1));
var tmp40175 = inst_40090;
var tmp40176 = inst_40091;
var tmp40177 = inst_40089;
var inst_40089__$1 = tmp40177;
var inst_40090__$1 = tmp40175;
var inst_40091__$1 = tmp40176;
var inst_40092__$1 = inst_40100;
var state_40148__$1 = (function (){var statearr_40181 = state_40148;
(statearr_40181[(8)] = inst_40090__$1);

(statearr_40181[(9)] = inst_40092__$1);

(statearr_40181[(10)] = inst_40091__$1);

(statearr_40181[(11)] = inst_40089__$1);

(statearr_40181[(14)] = inst_40099);

return statearr_40181;
})();
var statearr_40182_42237 = state_40148__$1;
(statearr_40182_42237[(2)] = null);

(statearr_40182_42237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (22))){
var state_40148__$1 = state_40148;
var statearr_40183_42238 = state_40148__$1;
(statearr_40183_42238[(2)] = null);

(statearr_40183_42238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (6))){
var inst_40076 = (state_40148[(13)]);
var inst_40087 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40076) : f.call(null,inst_40076));
var inst_40088 = cljs.core.seq(inst_40087);
var inst_40089 = inst_40088;
var inst_40090 = null;
var inst_40091 = (0);
var inst_40092 = (0);
var state_40148__$1 = (function (){var statearr_40184 = state_40148;
(statearr_40184[(8)] = inst_40090);

(statearr_40184[(9)] = inst_40092);

(statearr_40184[(10)] = inst_40091);

(statearr_40184[(11)] = inst_40089);

return statearr_40184;
})();
var statearr_40185_42245 = state_40148__$1;
(statearr_40185_42245[(2)] = null);

(statearr_40185_42245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (17))){
var inst_40103 = (state_40148[(7)]);
var inst_40107 = cljs.core.chunk_first(inst_40103);
var inst_40109 = cljs.core.chunk_rest(inst_40103);
var inst_40110 = cljs.core.count(inst_40107);
var inst_40089 = inst_40109;
var inst_40090 = inst_40107;
var inst_40091 = inst_40110;
var inst_40092 = (0);
var state_40148__$1 = (function (){var statearr_40188 = state_40148;
(statearr_40188[(8)] = inst_40090);

(statearr_40188[(9)] = inst_40092);

(statearr_40188[(10)] = inst_40091);

(statearr_40188[(11)] = inst_40089);

return statearr_40188;
})();
var statearr_40190_42252 = state_40148__$1;
(statearr_40190_42252[(2)] = null);

(statearr_40190_42252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (3))){
var inst_40142 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40148__$1,inst_40142);
} else {
if((state_val_40149 === (12))){
var inst_40130 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40191_42255 = state_40148__$1;
(statearr_40191_42255[(2)] = inst_40130);

(statearr_40191_42255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (2))){
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40148__$1,(4),in$);
} else {
if((state_val_40149 === (23))){
var inst_40138 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40195_42257 = state_40148__$1;
(statearr_40195_42257[(2)] = inst_40138);

(statearr_40195_42257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (19))){
var inst_40125 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40205_42258 = state_40148__$1;
(statearr_40205_42258[(2)] = inst_40125);

(statearr_40205_42258[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (11))){
var inst_40089 = (state_40148[(11)]);
var inst_40103 = (state_40148[(7)]);
var inst_40103__$1 = cljs.core.seq(inst_40089);
var state_40148__$1 = (function (){var statearr_40208 = state_40148;
(statearr_40208[(7)] = inst_40103__$1);

return statearr_40208;
})();
if(inst_40103__$1){
var statearr_40209_42266 = state_40148__$1;
(statearr_40209_42266[(1)] = (14));

} else {
var statearr_40212_42267 = state_40148__$1;
(statearr_40212_42267[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (9))){
var inst_40132 = (state_40148[(2)]);
var inst_40133 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40148__$1 = (function (){var statearr_40215 = state_40148;
(statearr_40215[(15)] = inst_40132);

return statearr_40215;
})();
if(cljs.core.truth_(inst_40133)){
var statearr_40216_42273 = state_40148__$1;
(statearr_40216_42273[(1)] = (21));

} else {
var statearr_40217_42274 = state_40148__$1;
(statearr_40217_42274[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (5))){
var inst_40080 = cljs.core.async.close_BANG_(out);
var state_40148__$1 = state_40148;
var statearr_40222_42275 = state_40148__$1;
(statearr_40222_42275[(2)] = inst_40080);

(statearr_40222_42275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (14))){
var inst_40103 = (state_40148[(7)]);
var inst_40105 = cljs.core.chunked_seq_QMARK_(inst_40103);
var state_40148__$1 = state_40148;
if(inst_40105){
var statearr_40225_42278 = state_40148__$1;
(statearr_40225_42278[(1)] = (17));

} else {
var statearr_40228_42282 = state_40148__$1;
(statearr_40228_42282[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (16))){
var inst_40128 = (state_40148[(2)]);
var state_40148__$1 = state_40148;
var statearr_40230_42283 = state_40148__$1;
(statearr_40230_42283[(2)] = inst_40128);

(statearr_40230_42283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40149 === (10))){
var inst_40090 = (state_40148[(8)]);
var inst_40092 = (state_40148[(9)]);
var inst_40097 = cljs.core._nth(inst_40090,inst_40092);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40148__$1,(13),out,inst_40097);
} else {
if((state_val_40149 === (18))){
var inst_40103 = (state_40148[(7)]);
var inst_40113 = cljs.core.first(inst_40103);
var state_40148__$1 = state_40148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40148__$1,(20),out,inst_40113);
} else {
if((state_val_40149 === (8))){
var inst_40092 = (state_40148[(9)]);
var inst_40091 = (state_40148[(10)]);
var inst_40094 = (inst_40092 < inst_40091);
var inst_40095 = inst_40094;
var state_40148__$1 = state_40148;
if(cljs.core.truth_(inst_40095)){
var statearr_40244_42290 = state_40148__$1;
(statearr_40244_42290[(1)] = (10));

} else {
var statearr_40245_42292 = state_40148__$1;
(statearr_40245_42292[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36508__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36508__auto____0 = (function (){
var statearr_40252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40252[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36508__auto__);

(statearr_40252[(1)] = (1));

return statearr_40252;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36508__auto____1 = (function (state_40148){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_40148);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e40256){var ex__36511__auto__ = e40256;
var statearr_40258_42296 = state_40148;
(statearr_40258_42296[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_40148[(4)]))){
var statearr_40260_42298 = state_40148;
(statearr_40260_42298[(1)] = cljs.core.first((state_40148[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42305 = state_40148;
state_40148 = G__42305;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36508__auto__ = function(state_40148){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36508__auto____1.call(this,state_40148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36508__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36508__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_40264 = f__37109__auto__();
(statearr_40264[(6)] = c__37108__auto__);

return statearr_40264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));

return c__37108__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40273 = arguments.length;
switch (G__40273) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40287 = arguments.length;
switch (G__40287) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40303 = arguments.length;
switch (G__40303) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37108__auto___42336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_40336){
var state_val_40337 = (state_40336[(1)]);
if((state_val_40337 === (7))){
var inst_40331 = (state_40336[(2)]);
var state_40336__$1 = state_40336;
var statearr_40342_42337 = state_40336__$1;
(statearr_40342_42337[(2)] = inst_40331);

(statearr_40342_42337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (1))){
var inst_40311 = null;
var state_40336__$1 = (function (){var statearr_40343 = state_40336;
(statearr_40343[(7)] = inst_40311);

return statearr_40343;
})();
var statearr_40344_42341 = state_40336__$1;
(statearr_40344_42341[(2)] = null);

(statearr_40344_42341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (4))){
var inst_40314 = (state_40336[(8)]);
var inst_40314__$1 = (state_40336[(2)]);
var inst_40316 = (inst_40314__$1 == null);
var inst_40317 = cljs.core.not(inst_40316);
var state_40336__$1 = (function (){var statearr_40348 = state_40336;
(statearr_40348[(8)] = inst_40314__$1);

return statearr_40348;
})();
if(inst_40317){
var statearr_40349_42349 = state_40336__$1;
(statearr_40349_42349[(1)] = (5));

} else {
var statearr_40350_42350 = state_40336__$1;
(statearr_40350_42350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (6))){
var state_40336__$1 = state_40336;
var statearr_40354_42352 = state_40336__$1;
(statearr_40354_42352[(2)] = null);

(statearr_40354_42352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (3))){
var inst_40333 = (state_40336[(2)]);
var inst_40334 = cljs.core.async.close_BANG_(out);
var state_40336__$1 = (function (){var statearr_40364 = state_40336;
(statearr_40364[(9)] = inst_40333);

return statearr_40364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40336__$1,inst_40334);
} else {
if((state_val_40337 === (2))){
var state_40336__$1 = state_40336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40336__$1,(4),ch);
} else {
if((state_val_40337 === (11))){
var inst_40314 = (state_40336[(8)]);
var inst_40325 = (state_40336[(2)]);
var inst_40311 = inst_40314;
var state_40336__$1 = (function (){var statearr_40373 = state_40336;
(statearr_40373[(7)] = inst_40311);

(statearr_40373[(10)] = inst_40325);

return statearr_40373;
})();
var statearr_40374_42356 = state_40336__$1;
(statearr_40374_42356[(2)] = null);

(statearr_40374_42356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (9))){
var inst_40314 = (state_40336[(8)]);
var state_40336__$1 = state_40336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40336__$1,(11),out,inst_40314);
} else {
if((state_val_40337 === (5))){
var inst_40311 = (state_40336[(7)]);
var inst_40314 = (state_40336[(8)]);
var inst_40320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40314,inst_40311);
var state_40336__$1 = state_40336;
if(inst_40320){
var statearr_40387_42359 = state_40336__$1;
(statearr_40387_42359[(1)] = (8));

} else {
var statearr_40388_42360 = state_40336__$1;
(statearr_40388_42360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (10))){
var inst_40328 = (state_40336[(2)]);
var state_40336__$1 = state_40336;
var statearr_40389_42361 = state_40336__$1;
(statearr_40389_42361[(2)] = inst_40328);

(statearr_40389_42361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40337 === (8))){
var inst_40311 = (state_40336[(7)]);
var tmp40385 = inst_40311;
var inst_40311__$1 = tmp40385;
var state_40336__$1 = (function (){var statearr_40393 = state_40336;
(statearr_40393[(7)] = inst_40311__$1);

return statearr_40393;
})();
var statearr_40402_42367 = state_40336__$1;
(statearr_40402_42367[(2)] = null);

(statearr_40402_42367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_40413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40413[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_40413[(1)] = (1));

return statearr_40413;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_40336){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_40336);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e40424){var ex__36511__auto__ = e40424;
var statearr_40428_42372 = state_40336;
(statearr_40428_42372[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_40336[(4)]))){
var statearr_40429_42375 = state_40336;
(statearr_40429_42375[(1)] = cljs.core.first((state_40336[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42376 = state_40336;
state_40336 = G__42376;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_40336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_40336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_40438 = f__37109__auto__();
(statearr_40438[(6)] = c__37108__auto___42336);

return statearr_40438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40452 = arguments.length;
switch (G__40452) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37108__auto___42380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_40522){
var state_val_40523 = (state_40522[(1)]);
if((state_val_40523 === (7))){
var inst_40518 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
var statearr_40524_42382 = state_40522__$1;
(statearr_40524_42382[(2)] = inst_40518);

(statearr_40524_42382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (1))){
var inst_40478 = (new Array(n));
var inst_40479 = inst_40478;
var inst_40480 = (0);
var state_40522__$1 = (function (){var statearr_40527 = state_40522;
(statearr_40527[(7)] = inst_40479);

(statearr_40527[(8)] = inst_40480);

return statearr_40527;
})();
var statearr_40528_42383 = state_40522__$1;
(statearr_40528_42383[(2)] = null);

(statearr_40528_42383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (4))){
var inst_40487 = (state_40522[(9)]);
var inst_40487__$1 = (state_40522[(2)]);
var inst_40488 = (inst_40487__$1 == null);
var inst_40489 = cljs.core.not(inst_40488);
var state_40522__$1 = (function (){var statearr_40529 = state_40522;
(statearr_40529[(9)] = inst_40487__$1);

return statearr_40529;
})();
if(inst_40489){
var statearr_40530_42384 = state_40522__$1;
(statearr_40530_42384[(1)] = (5));

} else {
var statearr_40531_42385 = state_40522__$1;
(statearr_40531_42385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (15))){
var inst_40512 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
var statearr_40532_42386 = state_40522__$1;
(statearr_40532_42386[(2)] = inst_40512);

(statearr_40532_42386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (13))){
var state_40522__$1 = state_40522;
var statearr_40535_42387 = state_40522__$1;
(statearr_40535_42387[(2)] = null);

(statearr_40535_42387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (6))){
var inst_40480 = (state_40522[(8)]);
var inst_40508 = (inst_40480 > (0));
var state_40522__$1 = state_40522;
if(cljs.core.truth_(inst_40508)){
var statearr_40538_42388 = state_40522__$1;
(statearr_40538_42388[(1)] = (12));

} else {
var statearr_40541_42389 = state_40522__$1;
(statearr_40541_42389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (3))){
var inst_40520 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40522__$1,inst_40520);
} else {
if((state_val_40523 === (12))){
var inst_40479 = (state_40522[(7)]);
var inst_40510 = cljs.core.vec(inst_40479);
var state_40522__$1 = state_40522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40522__$1,(15),out,inst_40510);
} else {
if((state_val_40523 === (2))){
var state_40522__$1 = state_40522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40522__$1,(4),ch);
} else {
if((state_val_40523 === (11))){
var inst_40499 = (state_40522[(2)]);
var inst_40503 = (new Array(n));
var inst_40479 = inst_40503;
var inst_40480 = (0);
var state_40522__$1 = (function (){var statearr_40547 = state_40522;
(statearr_40547[(10)] = inst_40499);

(statearr_40547[(7)] = inst_40479);

(statearr_40547[(8)] = inst_40480);

return statearr_40547;
})();
var statearr_40548_42390 = state_40522__$1;
(statearr_40548_42390[(2)] = null);

(statearr_40548_42390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (9))){
var inst_40479 = (state_40522[(7)]);
var inst_40497 = cljs.core.vec(inst_40479);
var state_40522__$1 = state_40522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40522__$1,(11),out,inst_40497);
} else {
if((state_val_40523 === (5))){
var inst_40479 = (state_40522[(7)]);
var inst_40480 = (state_40522[(8)]);
var inst_40487 = (state_40522[(9)]);
var inst_40492 = (state_40522[(11)]);
var inst_40491 = (inst_40479[inst_40480] = inst_40487);
var inst_40492__$1 = (inst_40480 + (1));
var inst_40493 = (inst_40492__$1 < n);
var state_40522__$1 = (function (){var statearr_40562 = state_40522;
(statearr_40562[(12)] = inst_40491);

(statearr_40562[(11)] = inst_40492__$1);

return statearr_40562;
})();
if(cljs.core.truth_(inst_40493)){
var statearr_40571_42396 = state_40522__$1;
(statearr_40571_42396[(1)] = (8));

} else {
var statearr_40572_42397 = state_40522__$1;
(statearr_40572_42397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (14))){
var inst_40515 = (state_40522[(2)]);
var inst_40516 = cljs.core.async.close_BANG_(out);
var state_40522__$1 = (function (){var statearr_40574 = state_40522;
(statearr_40574[(13)] = inst_40515);

return statearr_40574;
})();
var statearr_40575_42398 = state_40522__$1;
(statearr_40575_42398[(2)] = inst_40516);

(statearr_40575_42398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (10))){
var inst_40506 = (state_40522[(2)]);
var state_40522__$1 = state_40522;
var statearr_40576_42399 = state_40522__$1;
(statearr_40576_42399[(2)] = inst_40506);

(statearr_40576_42399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40523 === (8))){
var inst_40479 = (state_40522[(7)]);
var inst_40492 = (state_40522[(11)]);
var tmp40573 = inst_40479;
var inst_40479__$1 = tmp40573;
var inst_40480 = inst_40492;
var state_40522__$1 = (function (){var statearr_40577 = state_40522;
(statearr_40577[(7)] = inst_40479__$1);

(statearr_40577[(8)] = inst_40480);

return statearr_40577;
})();
var statearr_40578_42402 = state_40522__$1;
(statearr_40578_42402[(2)] = null);

(statearr_40578_42402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_40588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40588[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_40588[(1)] = (1));

return statearr_40588;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_40522){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_40522);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e40593){var ex__36511__auto__ = e40593;
var statearr_40594_42409 = state_40522;
(statearr_40594_42409[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_40522[(4)]))){
var statearr_40596_42410 = state_40522;
(statearr_40596_42410[(1)] = cljs.core.first((state_40522[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42412 = state_40522;
state_40522 = G__42412;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_40522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_40522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_40599 = f__37109__auto__();
(statearr_40599[(6)] = c__37108__auto___42380);

return statearr_40599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40612 = arguments.length;
switch (G__40612) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37108__auto___42420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37109__auto__ = (function (){var switch__36507__auto__ = (function (state_40660){
var state_val_40663 = (state_40660[(1)]);
if((state_val_40663 === (7))){
var inst_40656 = (state_40660[(2)]);
var state_40660__$1 = state_40660;
var statearr_40682_42426 = state_40660__$1;
(statearr_40682_42426[(2)] = inst_40656);

(statearr_40682_42426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (1))){
var inst_40616 = [];
var inst_40617 = inst_40616;
var inst_40618 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40660__$1 = (function (){var statearr_40683 = state_40660;
(statearr_40683[(7)] = inst_40617);

(statearr_40683[(8)] = inst_40618);

return statearr_40683;
})();
var statearr_40685_42431 = state_40660__$1;
(statearr_40685_42431[(2)] = null);

(statearr_40685_42431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (4))){
var inst_40621 = (state_40660[(9)]);
var inst_40621__$1 = (state_40660[(2)]);
var inst_40622 = (inst_40621__$1 == null);
var inst_40623 = cljs.core.not(inst_40622);
var state_40660__$1 = (function (){var statearr_40688 = state_40660;
(statearr_40688[(9)] = inst_40621__$1);

return statearr_40688;
})();
if(inst_40623){
var statearr_40689_42435 = state_40660__$1;
(statearr_40689_42435[(1)] = (5));

} else {
var statearr_40692_42436 = state_40660__$1;
(statearr_40692_42436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (15))){
var inst_40617 = (state_40660[(7)]);
var inst_40648 = cljs.core.vec(inst_40617);
var state_40660__$1 = state_40660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40660__$1,(18),out,inst_40648);
} else {
if((state_val_40663 === (13))){
var inst_40643 = (state_40660[(2)]);
var state_40660__$1 = state_40660;
var statearr_40698_42437 = state_40660__$1;
(statearr_40698_42437[(2)] = inst_40643);

(statearr_40698_42437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (6))){
var inst_40617 = (state_40660[(7)]);
var inst_40645 = inst_40617.length;
var inst_40646 = (inst_40645 > (0));
var state_40660__$1 = state_40660;
if(cljs.core.truth_(inst_40646)){
var statearr_40703_42439 = state_40660__$1;
(statearr_40703_42439[(1)] = (15));

} else {
var statearr_40705_42440 = state_40660__$1;
(statearr_40705_42440[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (17))){
var inst_40653 = (state_40660[(2)]);
var inst_40654 = cljs.core.async.close_BANG_(out);
var state_40660__$1 = (function (){var statearr_40712 = state_40660;
(statearr_40712[(10)] = inst_40653);

return statearr_40712;
})();
var statearr_40713_42441 = state_40660__$1;
(statearr_40713_42441[(2)] = inst_40654);

(statearr_40713_42441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (3))){
var inst_40658 = (state_40660[(2)]);
var state_40660__$1 = state_40660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40660__$1,inst_40658);
} else {
if((state_val_40663 === (12))){
var inst_40617 = (state_40660[(7)]);
var inst_40636 = cljs.core.vec(inst_40617);
var state_40660__$1 = state_40660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40660__$1,(14),out,inst_40636);
} else {
if((state_val_40663 === (2))){
var state_40660__$1 = state_40660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40660__$1,(4),ch);
} else {
if((state_val_40663 === (11))){
var inst_40617 = (state_40660[(7)]);
var inst_40621 = (state_40660[(9)]);
var inst_40625 = (state_40660[(11)]);
var inst_40633 = inst_40617.push(inst_40621);
var tmp40717 = inst_40617;
var inst_40617__$1 = tmp40717;
var inst_40618 = inst_40625;
var state_40660__$1 = (function (){var statearr_40724 = state_40660;
(statearr_40724[(7)] = inst_40617__$1);

(statearr_40724[(12)] = inst_40633);

(statearr_40724[(8)] = inst_40618);

return statearr_40724;
})();
var statearr_40728_42443 = state_40660__$1;
(statearr_40728_42443[(2)] = null);

(statearr_40728_42443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (9))){
var inst_40618 = (state_40660[(8)]);
var inst_40629 = cljs.core.keyword_identical_QMARK_(inst_40618,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_40660__$1 = state_40660;
var statearr_40732_42444 = state_40660__$1;
(statearr_40732_42444[(2)] = inst_40629);

(statearr_40732_42444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (5))){
var inst_40621 = (state_40660[(9)]);
var inst_40625 = (state_40660[(11)]);
var inst_40618 = (state_40660[(8)]);
var inst_40626 = (state_40660[(13)]);
var inst_40625__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40621) : f.call(null,inst_40621));
var inst_40626__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40625__$1,inst_40618);
var state_40660__$1 = (function (){var statearr_40743 = state_40660;
(statearr_40743[(11)] = inst_40625__$1);

(statearr_40743[(13)] = inst_40626__$1);

return statearr_40743;
})();
if(inst_40626__$1){
var statearr_40749_42445 = state_40660__$1;
(statearr_40749_42445[(1)] = (8));

} else {
var statearr_40751_42446 = state_40660__$1;
(statearr_40751_42446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (14))){
var inst_40621 = (state_40660[(9)]);
var inst_40625 = (state_40660[(11)]);
var inst_40638 = (state_40660[(2)]);
var inst_40639 = [];
var inst_40640 = inst_40639.push(inst_40621);
var inst_40617 = inst_40639;
var inst_40618 = inst_40625;
var state_40660__$1 = (function (){var statearr_40760 = state_40660;
(statearr_40760[(14)] = inst_40640);

(statearr_40760[(7)] = inst_40617);

(statearr_40760[(15)] = inst_40638);

(statearr_40760[(8)] = inst_40618);

return statearr_40760;
})();
var statearr_40761_42447 = state_40660__$1;
(statearr_40761_42447[(2)] = null);

(statearr_40761_42447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (16))){
var state_40660__$1 = state_40660;
var statearr_40762_42448 = state_40660__$1;
(statearr_40762_42448[(2)] = null);

(statearr_40762_42448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (10))){
var inst_40631 = (state_40660[(2)]);
var state_40660__$1 = state_40660;
if(cljs.core.truth_(inst_40631)){
var statearr_40763_42449 = state_40660__$1;
(statearr_40763_42449[(1)] = (11));

} else {
var statearr_40764_42450 = state_40660__$1;
(statearr_40764_42450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (18))){
var inst_40650 = (state_40660[(2)]);
var state_40660__$1 = state_40660;
var statearr_40766_42452 = state_40660__$1;
(statearr_40766_42452[(2)] = inst_40650);

(statearr_40766_42452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40663 === (8))){
var inst_40626 = (state_40660[(13)]);
var state_40660__$1 = state_40660;
var statearr_40770_42457 = state_40660__$1;
(statearr_40770_42457[(2)] = inst_40626);

(statearr_40770_42457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36508__auto__ = null;
var cljs$core$async$state_machine__36508__auto____0 = (function (){
var statearr_40771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40771[(0)] = cljs$core$async$state_machine__36508__auto__);

(statearr_40771[(1)] = (1));

return statearr_40771;
});
var cljs$core$async$state_machine__36508__auto____1 = (function (state_40660){
while(true){
var ret_value__36509__auto__ = (function (){try{while(true){
var result__36510__auto__ = switch__36507__auto__(state_40660);
if(cljs.core.keyword_identical_QMARK_(result__36510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36510__auto__;
}
break;
}
}catch (e40772){var ex__36511__auto__ = e40772;
var statearr_40773_42460 = state_40660;
(statearr_40773_42460[(2)] = ex__36511__auto__);


if(cljs.core.seq((state_40660[(4)]))){
var statearr_40774_42461 = state_40660;
(statearr_40774_42461[(1)] = cljs.core.first((state_40660[(4)])));

} else {
throw ex__36511__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42462 = state_40660;
state_40660 = G__42462;
continue;
} else {
return ret_value__36509__auto__;
}
break;
}
});
cljs$core$async$state_machine__36508__auto__ = function(state_40660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36508__auto____1.call(this,state_40660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36508__auto____0;
cljs$core$async$state_machine__36508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36508__auto____1;
return cljs$core$async$state_machine__36508__auto__;
})()
})();
var state__37110__auto__ = (function (){var statearr_40775 = f__37109__auto__();
(statearr_40775[(6)] = c__37108__auto___42420);

return statearr_40775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37110__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
