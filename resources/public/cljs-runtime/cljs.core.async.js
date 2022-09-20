goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46190 = arguments.length;
switch (G__46190) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46198 = (function (f,blockable,meta46199){
this.f = f;
this.blockable = blockable;
this.meta46199 = meta46199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46200,meta46199__$1){
var self__ = this;
var _46200__$1 = this;
return (new cljs.core.async.t_cljs$core$async46198(self__.f,self__.blockable,meta46199__$1));
}));

(cljs.core.async.t_cljs$core$async46198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46200){
var self__ = this;
var _46200__$1 = this;
return self__.meta46199;
}));

(cljs.core.async.t_cljs$core$async46198.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46199","meta46199",1417207981,null)], null);
}));

(cljs.core.async.t_cljs$core$async46198.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46198");

(cljs.core.async.t_cljs$core$async46198.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46198");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46198.
 */
cljs.core.async.__GT_t_cljs$core$async46198 = (function cljs$core$async$__GT_t_cljs$core$async46198(f__$1,blockable__$1,meta46199){
return (new cljs.core.async.t_cljs$core$async46198(f__$1,blockable__$1,meta46199));
});

}

return (new cljs.core.async.t_cljs$core$async46198(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46238 = arguments.length;
switch (G__46238) {
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
var G__46248 = arguments.length;
switch (G__46248) {
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
var G__46260 = arguments.length;
switch (G__46260) {
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
var val_49791 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49791) : fn1.call(null,val_49791));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49791) : fn1.call(null,val_49791));
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
var G__46291 = arguments.length;
switch (G__46291) {
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
var n__5636__auto___49809 = n;
var x_49810 = (0);
while(true){
if((x_49810 < n__5636__auto___49809)){
(a[x_49810] = x_49810);

var G__49811 = (x_49810 + (1));
x_49810 = G__49811;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46312 = (function (flag,meta46313){
this.flag = flag;
this.meta46313 = meta46313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46314,meta46313__$1){
var self__ = this;
var _46314__$1 = this;
return (new cljs.core.async.t_cljs$core$async46312(self__.flag,meta46313__$1));
}));

(cljs.core.async.t_cljs$core$async46312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46314){
var self__ = this;
var _46314__$1 = this;
return self__.meta46313;
}));

(cljs.core.async.t_cljs$core$async46312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46313","meta46313",-244638644,null)], null);
}));

(cljs.core.async.t_cljs$core$async46312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46312");

(cljs.core.async.t_cljs$core$async46312.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46312.
 */
cljs.core.async.__GT_t_cljs$core$async46312 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46312(flag__$1,meta46313){
return (new cljs.core.async.t_cljs$core$async46312(flag__$1,meta46313));
});

}

return (new cljs.core.async.t_cljs$core$async46312(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46327 = (function (flag,cb,meta46328){
this.flag = flag;
this.cb = cb;
this.meta46328 = meta46328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46329,meta46328__$1){
var self__ = this;
var _46329__$1 = this;
return (new cljs.core.async.t_cljs$core$async46327(self__.flag,self__.cb,meta46328__$1));
}));

(cljs.core.async.t_cljs$core$async46327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46329){
var self__ = this;
var _46329__$1 = this;
return self__.meta46328;
}));

(cljs.core.async.t_cljs$core$async46327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46328","meta46328",1653832035,null)], null);
}));

(cljs.core.async.t_cljs$core$async46327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46327");

(cljs.core.async.t_cljs$core$async46327.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46327.
 */
cljs.core.async.__GT_t_cljs$core$async46327 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46327(flag__$1,cb__$1,meta46328){
return (new cljs.core.async.t_cljs$core$async46327(flag__$1,cb__$1,meta46328));
});

}

return (new cljs.core.async.t_cljs$core$async46327(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46350_SHARP_){
var G__46363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46350_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46363) : fret.call(null,G__46363));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46351_SHARP_){
var G__46365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46351_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46365) : fret.call(null,G__46365));
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
var G__49841 = (i + (1));
i = G__49841;
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
var len__5769__auto___49845 = arguments.length;
var i__5770__auto___49846 = (0);
while(true){
if((i__5770__auto___49846 < len__5769__auto___49845)){
args__5775__auto__.push((arguments[i__5770__auto___49846]));

var G__49847 = (i__5770__auto___49846 + (1));
i__5770__auto___49846 = G__49847;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46378){
var map__46379 = p__46378;
var map__46379__$1 = cljs.core.__destructure_map(map__46379);
var opts = map__46379__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46374){
var G__46376 = cljs.core.first(seq46374);
var seq46374__$1 = cljs.core.next(seq46374);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46376,seq46374__$1);
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
var G__46391 = arguments.length;
switch (G__46391) {
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
var c__30092__auto___49861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_46425){
var state_val_46426 = (state_46425[(1)]);
if((state_val_46426 === (7))){
var inst_46420 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
var statearr_46427_49862 = state_46425__$1;
(statearr_46427_49862[(2)] = inst_46420);

(statearr_46427_49862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (1))){
var state_46425__$1 = state_46425;
var statearr_46434_49863 = state_46425__$1;
(statearr_46434_49863[(2)] = null);

(statearr_46434_49863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (4))){
var inst_46403 = (state_46425[(7)]);
var inst_46403__$1 = (state_46425[(2)]);
var inst_46404 = (inst_46403__$1 == null);
var state_46425__$1 = (function (){var statearr_46439 = state_46425;
(statearr_46439[(7)] = inst_46403__$1);

return statearr_46439;
})();
if(cljs.core.truth_(inst_46404)){
var statearr_46440_49870 = state_46425__$1;
(statearr_46440_49870[(1)] = (5));

} else {
var statearr_46441_49874 = state_46425__$1;
(statearr_46441_49874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (13))){
var state_46425__$1 = state_46425;
var statearr_46445_49875 = state_46425__$1;
(statearr_46445_49875[(2)] = null);

(statearr_46445_49875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (6))){
var inst_46403 = (state_46425[(7)]);
var state_46425__$1 = state_46425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46425__$1,(11),to,inst_46403);
} else {
if((state_val_46426 === (3))){
var inst_46422 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46425__$1,inst_46422);
} else {
if((state_val_46426 === (12))){
var state_46425__$1 = state_46425;
var statearr_46447_49882 = state_46425__$1;
(statearr_46447_49882[(2)] = null);

(statearr_46447_49882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (2))){
var state_46425__$1 = state_46425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46425__$1,(4),from);
} else {
if((state_val_46426 === (11))){
var inst_46413 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
if(cljs.core.truth_(inst_46413)){
var statearr_46449_49885 = state_46425__$1;
(statearr_46449_49885[(1)] = (12));

} else {
var statearr_46450_49886 = state_46425__$1;
(statearr_46450_49886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (9))){
var state_46425__$1 = state_46425;
var statearr_46451_49888 = state_46425__$1;
(statearr_46451_49888[(2)] = null);

(statearr_46451_49888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (5))){
var state_46425__$1 = state_46425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46452_49889 = state_46425__$1;
(statearr_46452_49889[(1)] = (8));

} else {
var statearr_46457_49890 = state_46425__$1;
(statearr_46457_49890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (14))){
var inst_46418 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
var statearr_46462_49893 = state_46425__$1;
(statearr_46462_49893[(2)] = inst_46418);

(statearr_46462_49893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (10))){
var inst_46410 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
var statearr_46464_49895 = state_46425__$1;
(statearr_46464_49895[(2)] = inst_46410);

(statearr_46464_49895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (8))){
var inst_46407 = cljs.core.async.close_BANG_(to);
var state_46425__$1 = state_46425;
var statearr_46468_49899 = state_46425__$1;
(statearr_46468_49899[(2)] = inst_46407);

(statearr_46468_49899[(1)] = (10));


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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_46470 = [null,null,null,null,null,null,null,null];
(statearr_46470[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_46470[(1)] = (1));

return statearr_46470;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_46425){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46425);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e46472){var ex__29741__auto__ = e46472;
var statearr_46473_49902 = state_46425;
(statearr_46473_49902[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46425[(4)]))){
var statearr_46474_49903 = state_46425;
(statearr_46474_49903[(1)] = cljs.core.first((state_46425[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49905 = state_46425;
state_46425 = G__49905;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_46425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_46425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_46476 = f__30094__auto__();
(statearr_46476[(6)] = c__30092__auto___49861);

return statearr_46476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
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
var process__$1 = (function (p__46484){
var vec__46485 = p__46484;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46485,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46485,(1),null);
var job = vec__46485;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30092__auto___49925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_46498){
var state_val_46499 = (state_46498[(1)]);
if((state_val_46499 === (1))){
var state_46498__$1 = state_46498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46498__$1,(2),res,v);
} else {
if((state_val_46499 === (2))){
var inst_46495 = (state_46498[(2)]);
var inst_46496 = cljs.core.async.close_BANG_(res);
var state_46498__$1 = (function (){var statearr_46510 = state_46498;
(statearr_46510[(7)] = inst_46495);

return statearr_46510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46498__$1,inst_46496);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0 = (function (){
var statearr_46519 = [null,null,null,null,null,null,null,null];
(statearr_46519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__);

(statearr_46519[(1)] = (1));

return statearr_46519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1 = (function (state_46498){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46498);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e46527){var ex__29741__auto__ = e46527;
var statearr_46528_49928 = state_46498;
(statearr_46528_49928[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46498[(4)]))){
var statearr_46530_49929 = state_46498;
(statearr_46530_49929[(1)] = cljs.core.first((state_46498[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49930 = state_46498;
state_46498 = G__49930;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = function(state_46498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1.call(this,state_46498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_46531 = f__30094__auto__();
(statearr_46531[(6)] = c__30092__auto___49925);

return statearr_46531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46535){
var vec__46536 = p__46535;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46536,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46536,(1),null);
var job = vec__46536;
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
var n__5636__auto___49940 = n;
var __49941 = (0);
while(true){
if((__49941 < n__5636__auto___49940)){
var G__46553_49945 = type;
var G__46553_49946__$1 = (((G__46553_49945 instanceof cljs.core.Keyword))?G__46553_49945.fqn:null);
switch (G__46553_49946__$1) {
case "compute":
var c__30092__auto___49948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49941,c__30092__auto___49948,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async){
return (function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = ((function (__49941,c__30092__auto___49948,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async){
return (function (state_46578){
var state_val_46581 = (state_46578[(1)]);
if((state_val_46581 === (1))){
var state_46578__$1 = state_46578;
var statearr_46588_49951 = state_46578__$1;
(statearr_46588_49951[(2)] = null);

(statearr_46588_49951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (2))){
var state_46578__$1 = state_46578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46578__$1,(4),jobs);
} else {
if((state_val_46581 === (3))){
var inst_46576 = (state_46578[(2)]);
var state_46578__$1 = state_46578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46578__$1,inst_46576);
} else {
if((state_val_46581 === (4))){
var inst_46568 = (state_46578[(2)]);
var inst_46569 = process__$1(inst_46568);
var state_46578__$1 = state_46578;
if(cljs.core.truth_(inst_46569)){
var statearr_46592_49958 = state_46578__$1;
(statearr_46592_49958[(1)] = (5));

} else {
var statearr_46593_49960 = state_46578__$1;
(statearr_46593_49960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (5))){
var state_46578__$1 = state_46578;
var statearr_46594_49961 = state_46578__$1;
(statearr_46594_49961[(2)] = null);

(statearr_46594_49961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (6))){
var state_46578__$1 = state_46578;
var statearr_46597_49962 = state_46578__$1;
(statearr_46597_49962[(2)] = null);

(statearr_46597_49962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46581 === (7))){
var inst_46574 = (state_46578[(2)]);
var state_46578__$1 = state_46578;
var statearr_46598_49963 = state_46578__$1;
(statearr_46598_49963[(2)] = inst_46574);

(statearr_46598_49963[(1)] = (3));


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
});})(__49941,c__30092__auto___49948,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async))
;
return ((function (__49941,switch__29737__auto__,c__30092__auto___49948,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0 = (function (){
var statearr_46599 = [null,null,null,null,null,null,null];
(statearr_46599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__);

(statearr_46599[(1)] = (1));

return statearr_46599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1 = (function (state_46578){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46578);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e46600){var ex__29741__auto__ = e46600;
var statearr_46601_49970 = state_46578;
(statearr_46601_49970[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46578[(4)]))){
var statearr_46604_49971 = state_46578;
(statearr_46604_49971[(1)] = cljs.core.first((state_46578[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49972 = state_46578;
state_46578 = G__49972;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = function(state_46578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1.call(this,state_46578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__;
})()
;})(__49941,switch__29737__auto__,c__30092__auto___49948,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async))
})();
var state__30095__auto__ = (function (){var statearr_46618 = f__30094__auto__();
(statearr_46618[(6)] = c__30092__auto___49948);

return statearr_46618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
});})(__49941,c__30092__auto___49948,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async))
);


break;
case "async":
var c__30092__auto___49979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49941,c__30092__auto___49979,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async){
return (function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = ((function (__49941,c__30092__auto___49979,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async){
return (function (state_46651){
var state_val_46652 = (state_46651[(1)]);
if((state_val_46652 === (1))){
var state_46651__$1 = state_46651;
var statearr_46656_49983 = state_46651__$1;
(statearr_46656_49983[(2)] = null);

(statearr_46656_49983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46652 === (2))){
var state_46651__$1 = state_46651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46651__$1,(4),jobs);
} else {
if((state_val_46652 === (3))){
var inst_46649 = (state_46651[(2)]);
var state_46651__$1 = state_46651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46651__$1,inst_46649);
} else {
if((state_val_46652 === (4))){
var inst_46636 = (state_46651[(2)]);
var inst_46637 = async(inst_46636);
var state_46651__$1 = state_46651;
if(cljs.core.truth_(inst_46637)){
var statearr_46661_49984 = state_46651__$1;
(statearr_46661_49984[(1)] = (5));

} else {
var statearr_46664_49985 = state_46651__$1;
(statearr_46664_49985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46652 === (5))){
var state_46651__$1 = state_46651;
var statearr_46670_49986 = state_46651__$1;
(statearr_46670_49986[(2)] = null);

(statearr_46670_49986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46652 === (6))){
var state_46651__$1 = state_46651;
var statearr_46677_49988 = state_46651__$1;
(statearr_46677_49988[(2)] = null);

(statearr_46677_49988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46652 === (7))){
var inst_46647 = (state_46651[(2)]);
var state_46651__$1 = state_46651;
var statearr_46685_49996 = state_46651__$1;
(statearr_46685_49996[(2)] = inst_46647);

(statearr_46685_49996[(1)] = (3));


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
});})(__49941,c__30092__auto___49979,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async))
;
return ((function (__49941,switch__29737__auto__,c__30092__auto___49979,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0 = (function (){
var statearr_46686 = [null,null,null,null,null,null,null];
(statearr_46686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__);

(statearr_46686[(1)] = (1));

return statearr_46686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1 = (function (state_46651){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46651);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e46688){var ex__29741__auto__ = e46688;
var statearr_46693_50006 = state_46651;
(statearr_46693_50006[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46651[(4)]))){
var statearr_46699_50007 = state_46651;
(statearr_46699_50007[(1)] = cljs.core.first((state_46651[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50008 = state_46651;
state_46651 = G__50008;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = function(state_46651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1.call(this,state_46651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__;
})()
;})(__49941,switch__29737__auto__,c__30092__auto___49979,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async))
})();
var state__30095__auto__ = (function (){var statearr_46708 = f__30094__auto__();
(statearr_46708[(6)] = c__30092__auto___49979);

return statearr_46708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
});})(__49941,c__30092__auto___49979,G__46553_49945,G__46553_49946__$1,n__5636__auto___49940,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46553_49946__$1)].join('')));

}

var G__50009 = (__49941 + (1));
__49941 = G__50009;
continue;
} else {
}
break;
}

var c__30092__auto___50010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_46736){
var state_val_46737 = (state_46736[(1)]);
if((state_val_46737 === (7))){
var inst_46732 = (state_46736[(2)]);
var state_46736__$1 = state_46736;
var statearr_46743_50011 = state_46736__$1;
(statearr_46743_50011[(2)] = inst_46732);

(statearr_46743_50011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46737 === (1))){
var state_46736__$1 = state_46736;
var statearr_46744_50012 = state_46736__$1;
(statearr_46744_50012[(2)] = null);

(statearr_46744_50012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46737 === (4))){
var inst_46716 = (state_46736[(7)]);
var inst_46716__$1 = (state_46736[(2)]);
var inst_46717 = (inst_46716__$1 == null);
var state_46736__$1 = (function (){var statearr_46748 = state_46736;
(statearr_46748[(7)] = inst_46716__$1);

return statearr_46748;
})();
if(cljs.core.truth_(inst_46717)){
var statearr_46750_50014 = state_46736__$1;
(statearr_46750_50014[(1)] = (5));

} else {
var statearr_46751_50015 = state_46736__$1;
(statearr_46751_50015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46737 === (6))){
var inst_46721 = (state_46736[(8)]);
var inst_46716 = (state_46736[(7)]);
var inst_46721__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46724 = [inst_46716,inst_46721__$1];
var inst_46725 = (new cljs.core.PersistentVector(null,2,(5),inst_46722,inst_46724,null));
var state_46736__$1 = (function (){var statearr_46753 = state_46736;
(statearr_46753[(8)] = inst_46721__$1);

return statearr_46753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46736__$1,(8),jobs,inst_46725);
} else {
if((state_val_46737 === (3))){
var inst_46734 = (state_46736[(2)]);
var state_46736__$1 = state_46736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46736__$1,inst_46734);
} else {
if((state_val_46737 === (2))){
var state_46736__$1 = state_46736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46736__$1,(4),from);
} else {
if((state_val_46737 === (9))){
var inst_46729 = (state_46736[(2)]);
var state_46736__$1 = (function (){var statearr_46759 = state_46736;
(statearr_46759[(9)] = inst_46729);

return statearr_46759;
})();
var statearr_46760_50021 = state_46736__$1;
(statearr_46760_50021[(2)] = null);

(statearr_46760_50021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46737 === (5))){
var inst_46719 = cljs.core.async.close_BANG_(jobs);
var state_46736__$1 = state_46736;
var statearr_46761_50027 = state_46736__$1;
(statearr_46761_50027[(2)] = inst_46719);

(statearr_46761_50027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46737 === (8))){
var inst_46721 = (state_46736[(8)]);
var inst_46727 = (state_46736[(2)]);
var state_46736__$1 = (function (){var statearr_46762 = state_46736;
(statearr_46762[(10)] = inst_46727);

return statearr_46762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46736__$1,(9),results,inst_46721);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0 = (function (){
var statearr_46764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__);

(statearr_46764[(1)] = (1));

return statearr_46764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1 = (function (state_46736){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46736);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e46771){var ex__29741__auto__ = e46771;
var statearr_46772_50037 = state_46736;
(statearr_46772_50037[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46736[(4)]))){
var statearr_46778_50038 = state_46736;
(statearr_46778_50038[(1)] = cljs.core.first((state_46736[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50039 = state_46736;
state_46736 = G__50039;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = function(state_46736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1.call(this,state_46736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_46786 = f__30094__auto__();
(statearr_46786[(6)] = c__30092__auto___50010);

return statearr_46786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));


var c__30092__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_46826){
var state_val_46827 = (state_46826[(1)]);
if((state_val_46827 === (7))){
var inst_46822 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
var statearr_46833_50041 = state_46826__$1;
(statearr_46833_50041[(2)] = inst_46822);

(statearr_46833_50041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (20))){
var state_46826__$1 = state_46826;
var statearr_46834_50042 = state_46826__$1;
(statearr_46834_50042[(2)] = null);

(statearr_46834_50042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (1))){
var state_46826__$1 = state_46826;
var statearr_46835_50047 = state_46826__$1;
(statearr_46835_50047[(2)] = null);

(statearr_46835_50047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (4))){
var inst_46790 = (state_46826[(7)]);
var inst_46790__$1 = (state_46826[(2)]);
var inst_46791 = (inst_46790__$1 == null);
var state_46826__$1 = (function (){var statearr_46836 = state_46826;
(statearr_46836[(7)] = inst_46790__$1);

return statearr_46836;
})();
if(cljs.core.truth_(inst_46791)){
var statearr_46837_50050 = state_46826__$1;
(statearr_46837_50050[(1)] = (5));

} else {
var statearr_46838_50051 = state_46826__$1;
(statearr_46838_50051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (15))){
var inst_46804 = (state_46826[(8)]);
var state_46826__$1 = state_46826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46826__$1,(18),to,inst_46804);
} else {
if((state_val_46827 === (21))){
var inst_46817 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
var statearr_46841_50052 = state_46826__$1;
(statearr_46841_50052[(2)] = inst_46817);

(statearr_46841_50052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (13))){
var inst_46819 = (state_46826[(2)]);
var state_46826__$1 = (function (){var statearr_46843 = state_46826;
(statearr_46843[(9)] = inst_46819);

return statearr_46843;
})();
var statearr_46844_50058 = state_46826__$1;
(statearr_46844_50058[(2)] = null);

(statearr_46844_50058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (6))){
var inst_46790 = (state_46826[(7)]);
var state_46826__$1 = state_46826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46826__$1,(11),inst_46790);
} else {
if((state_val_46827 === (17))){
var inst_46812 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
if(cljs.core.truth_(inst_46812)){
var statearr_46846_50059 = state_46826__$1;
(statearr_46846_50059[(1)] = (19));

} else {
var statearr_46847_50060 = state_46826__$1;
(statearr_46847_50060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (3))){
var inst_46824 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46826__$1,inst_46824);
} else {
if((state_val_46827 === (12))){
var inst_46800 = (state_46826[(10)]);
var state_46826__$1 = state_46826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46826__$1,(14),inst_46800);
} else {
if((state_val_46827 === (2))){
var state_46826__$1 = state_46826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46826__$1,(4),results);
} else {
if((state_val_46827 === (19))){
var state_46826__$1 = state_46826;
var statearr_46849_50061 = state_46826__$1;
(statearr_46849_50061[(2)] = null);

(statearr_46849_50061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (11))){
var inst_46800 = (state_46826[(2)]);
var state_46826__$1 = (function (){var statearr_46850 = state_46826;
(statearr_46850[(10)] = inst_46800);

return statearr_46850;
})();
var statearr_46851_50062 = state_46826__$1;
(statearr_46851_50062[(2)] = null);

(statearr_46851_50062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (9))){
var state_46826__$1 = state_46826;
var statearr_46856_50063 = state_46826__$1;
(statearr_46856_50063[(2)] = null);

(statearr_46856_50063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (5))){
var state_46826__$1 = state_46826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46858_50064 = state_46826__$1;
(statearr_46858_50064[(1)] = (8));

} else {
var statearr_46859_50069 = state_46826__$1;
(statearr_46859_50069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (14))){
var inst_46806 = (state_46826[(11)]);
var inst_46804 = (state_46826[(8)]);
var inst_46804__$1 = (state_46826[(2)]);
var inst_46805 = (inst_46804__$1 == null);
var inst_46806__$1 = cljs.core.not(inst_46805);
var state_46826__$1 = (function (){var statearr_46861 = state_46826;
(statearr_46861[(11)] = inst_46806__$1);

(statearr_46861[(8)] = inst_46804__$1);

return statearr_46861;
})();
if(inst_46806__$1){
var statearr_46862_50073 = state_46826__$1;
(statearr_46862_50073[(1)] = (15));

} else {
var statearr_46867_50074 = state_46826__$1;
(statearr_46867_50074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (16))){
var inst_46806 = (state_46826[(11)]);
var state_46826__$1 = state_46826;
var statearr_46868_50076 = state_46826__$1;
(statearr_46868_50076[(2)] = inst_46806);

(statearr_46868_50076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (10))){
var inst_46797 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
var statearr_46869_50080 = state_46826__$1;
(statearr_46869_50080[(2)] = inst_46797);

(statearr_46869_50080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (18))){
var inst_46809 = (state_46826[(2)]);
var state_46826__$1 = state_46826;
var statearr_46871_50081 = state_46826__$1;
(statearr_46871_50081[(2)] = inst_46809);

(statearr_46871_50081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46827 === (8))){
var inst_46794 = cljs.core.async.close_BANG_(to);
var state_46826__$1 = state_46826;
var statearr_46875_50085 = state_46826__$1;
(statearr_46875_50085[(2)] = inst_46794);

(statearr_46875_50085[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0 = (function (){
var statearr_46876 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__);

(statearr_46876[(1)] = (1));

return statearr_46876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1 = (function (state_46826){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46826);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e46880){var ex__29741__auto__ = e46880;
var statearr_46881_50089 = state_46826;
(statearr_46881_50089[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46826[(4)]))){
var statearr_46882_50090 = state_46826;
(statearr_46882_50090[(1)] = cljs.core.first((state_46826[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50091 = state_46826;
state_46826 = G__50091;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__ = function(state_46826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1.call(this,state_46826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29738__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_46884 = f__30094__auto__();
(statearr_46884[(6)] = c__30092__auto__);

return statearr_46884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));

return c__30092__auto__;
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
var G__46887 = arguments.length;
switch (G__46887) {
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
var G__46890 = arguments.length;
switch (G__46890) {
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
var G__46894 = arguments.length;
switch (G__46894) {
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
var c__30092__auto___50134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_46920){
var state_val_46921 = (state_46920[(1)]);
if((state_val_46921 === (7))){
var inst_46916 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46926_50138 = state_46920__$1;
(statearr_46926_50138[(2)] = inst_46916);

(statearr_46926_50138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (1))){
var state_46920__$1 = state_46920;
var statearr_46927_50142 = state_46920__$1;
(statearr_46927_50142[(2)] = null);

(statearr_46927_50142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (4))){
var inst_46897 = (state_46920[(7)]);
var inst_46897__$1 = (state_46920[(2)]);
var inst_46898 = (inst_46897__$1 == null);
var state_46920__$1 = (function (){var statearr_46928 = state_46920;
(statearr_46928[(7)] = inst_46897__$1);

return statearr_46928;
})();
if(cljs.core.truth_(inst_46898)){
var statearr_46929_50143 = state_46920__$1;
(statearr_46929_50143[(1)] = (5));

} else {
var statearr_46930_50144 = state_46920__$1;
(statearr_46930_50144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (13))){
var state_46920__$1 = state_46920;
var statearr_46931_50145 = state_46920__$1;
(statearr_46931_50145[(2)] = null);

(statearr_46931_50145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (6))){
var inst_46897 = (state_46920[(7)]);
var inst_46903 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46897) : p.call(null,inst_46897));
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46903)){
var statearr_46932_50149 = state_46920__$1;
(statearr_46932_50149[(1)] = (9));

} else {
var statearr_46933_50150 = state_46920__$1;
(statearr_46933_50150[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (3))){
var inst_46918 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46920__$1,inst_46918);
} else {
if((state_val_46921 === (12))){
var state_46920__$1 = state_46920;
var statearr_46938_50151 = state_46920__$1;
(statearr_46938_50151[(2)] = null);

(statearr_46938_50151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (2))){
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46920__$1,(4),ch);
} else {
if((state_val_46921 === (11))){
var inst_46897 = (state_46920[(7)]);
var inst_46907 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46920__$1,(8),inst_46907,inst_46897);
} else {
if((state_val_46921 === (9))){
var state_46920__$1 = state_46920;
var statearr_46940_50156 = state_46920__$1;
(statearr_46940_50156[(2)] = tc);

(statearr_46940_50156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (5))){
var inst_46900 = cljs.core.async.close_BANG_(tc);
var inst_46901 = cljs.core.async.close_BANG_(fc);
var state_46920__$1 = (function (){var statearr_46941 = state_46920;
(statearr_46941[(8)] = inst_46900);

return statearr_46941;
})();
var statearr_46942_50157 = state_46920__$1;
(statearr_46942_50157[(2)] = inst_46901);

(statearr_46942_50157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (14))){
var inst_46914 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
var statearr_46944_50161 = state_46920__$1;
(statearr_46944_50161[(2)] = inst_46914);

(statearr_46944_50161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (10))){
var state_46920__$1 = state_46920;
var statearr_46946_50164 = state_46920__$1;
(statearr_46946_50164[(2)] = fc);

(statearr_46946_50164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46921 === (8))){
var inst_46909 = (state_46920[(2)]);
var state_46920__$1 = state_46920;
if(cljs.core.truth_(inst_46909)){
var statearr_46947_50165 = state_46920__$1;
(statearr_46947_50165[(1)] = (12));

} else {
var statearr_46948_50166 = state_46920__$1;
(statearr_46948_50166[(1)] = (13));

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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_46953 = [null,null,null,null,null,null,null,null,null];
(statearr_46953[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_46953[(1)] = (1));

return statearr_46953;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_46920){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46920);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e46954){var ex__29741__auto__ = e46954;
var statearr_46955_50167 = state_46920;
(statearr_46955_50167[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46920[(4)]))){
var statearr_46957_50168 = state_46920;
(statearr_46957_50168[(1)] = cljs.core.first((state_46920[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50169 = state_46920;
state_46920 = G__50169;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_46920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_46920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_46958 = f__30094__auto__();
(statearr_46958[(6)] = c__30092__auto___50134);

return statearr_46958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
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
var c__30092__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_46981){
var state_val_46982 = (state_46981[(1)]);
if((state_val_46982 === (7))){
var inst_46977 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_46984_50170 = state_46981__$1;
(statearr_46984_50170[(2)] = inst_46977);

(statearr_46984_50170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (1))){
var inst_46959 = init;
var inst_46960 = inst_46959;
var state_46981__$1 = (function (){var statearr_46985 = state_46981;
(statearr_46985[(7)] = inst_46960);

return statearr_46985;
})();
var statearr_46987_50172 = state_46981__$1;
(statearr_46987_50172[(2)] = null);

(statearr_46987_50172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (4))){
var inst_46963 = (state_46981[(8)]);
var inst_46963__$1 = (state_46981[(2)]);
var inst_46964 = (inst_46963__$1 == null);
var state_46981__$1 = (function (){var statearr_46988 = state_46981;
(statearr_46988[(8)] = inst_46963__$1);

return statearr_46988;
})();
if(cljs.core.truth_(inst_46964)){
var statearr_46989_50173 = state_46981__$1;
(statearr_46989_50173[(1)] = (5));

} else {
var statearr_46990_50174 = state_46981__$1;
(statearr_46990_50174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (6))){
var inst_46960 = (state_46981[(7)]);
var inst_46963 = (state_46981[(8)]);
var inst_46967 = (state_46981[(9)]);
var inst_46967__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46960,inst_46963) : f.call(null,inst_46960,inst_46963));
var inst_46968 = cljs.core.reduced_QMARK_(inst_46967__$1);
var state_46981__$1 = (function (){var statearr_46991 = state_46981;
(statearr_46991[(9)] = inst_46967__$1);

return statearr_46991;
})();
if(inst_46968){
var statearr_46992_50175 = state_46981__$1;
(statearr_46992_50175[(1)] = (8));

} else {
var statearr_46995_50176 = state_46981__$1;
(statearr_46995_50176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (3))){
var inst_46979 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46981__$1,inst_46979);
} else {
if((state_val_46982 === (2))){
var state_46981__$1 = state_46981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46981__$1,(4),ch);
} else {
if((state_val_46982 === (9))){
var inst_46967 = (state_46981[(9)]);
var inst_46960 = inst_46967;
var state_46981__$1 = (function (){var statearr_46999 = state_46981;
(statearr_46999[(7)] = inst_46960);

return statearr_46999;
})();
var statearr_47003_50177 = state_46981__$1;
(statearr_47003_50177[(2)] = null);

(statearr_47003_50177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (5))){
var inst_46960 = (state_46981[(7)]);
var state_46981__$1 = state_46981;
var statearr_47006_50178 = state_46981__$1;
(statearr_47006_50178[(2)] = inst_46960);

(statearr_47006_50178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (10))){
var inst_46975 = (state_46981[(2)]);
var state_46981__$1 = state_46981;
var statearr_47009_50179 = state_46981__$1;
(statearr_47009_50179[(2)] = inst_46975);

(statearr_47009_50179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46982 === (8))){
var inst_46967 = (state_46981[(9)]);
var inst_46970 = cljs.core.deref(inst_46967);
var state_46981__$1 = state_46981;
var statearr_47010_50180 = state_46981__$1;
(statearr_47010_50180[(2)] = inst_46970);

(statearr_47010_50180[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29738__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29738__auto____0 = (function (){
var statearr_47012 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47012[(0)] = cljs$core$async$reduce_$_state_machine__29738__auto__);

(statearr_47012[(1)] = (1));

return statearr_47012;
});
var cljs$core$async$reduce_$_state_machine__29738__auto____1 = (function (state_46981){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_46981);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e47013){var ex__29741__auto__ = e47013;
var statearr_47014_50181 = state_46981;
(statearr_47014_50181[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_46981[(4)]))){
var statearr_47015_50182 = state_46981;
(statearr_47015_50182[(1)] = cljs.core.first((state_46981[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50183 = state_46981;
state_46981 = G__50183;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29738__auto__ = function(state_46981){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29738__auto____1.call(this,state_46981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29738__auto____0;
cljs$core$async$reduce_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29738__auto____1;
return cljs$core$async$reduce_$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_47019 = f__30094__auto__();
(statearr_47019[(6)] = c__30092__auto__);

return statearr_47019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));

return c__30092__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30092__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_47033){
var state_val_47034 = (state_47033[(1)]);
if((state_val_47034 === (1))){
var inst_47028 = cljs.core.async.reduce(f__$1,init,ch);
var state_47033__$1 = state_47033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47033__$1,(2),inst_47028);
} else {
if((state_val_47034 === (2))){
var inst_47030 = (state_47033[(2)]);
var inst_47031 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47030) : f__$1.call(null,inst_47030));
var state_47033__$1 = state_47033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47033__$1,inst_47031);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29738__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29738__auto____0 = (function (){
var statearr_47041 = [null,null,null,null,null,null,null];
(statearr_47041[(0)] = cljs$core$async$transduce_$_state_machine__29738__auto__);

(statearr_47041[(1)] = (1));

return statearr_47041;
});
var cljs$core$async$transduce_$_state_machine__29738__auto____1 = (function (state_47033){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_47033);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e47042){var ex__29741__auto__ = e47042;
var statearr_47043_50184 = state_47033;
(statearr_47043_50184[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_47033[(4)]))){
var statearr_47044_50185 = state_47033;
(statearr_47044_50185[(1)] = cljs.core.first((state_47033[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50186 = state_47033;
state_47033 = G__50186;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29738__auto__ = function(state_47033){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29738__auto____1.call(this,state_47033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29738__auto____0;
cljs$core$async$transduce_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29738__auto____1;
return cljs$core$async$transduce_$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_47048 = f__30094__auto__();
(statearr_47048[(6)] = c__30092__auto__);

return statearr_47048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));

return c__30092__auto__;
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
var G__47050 = arguments.length;
switch (G__47050) {
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
var c__30092__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_47077){
var state_val_47078 = (state_47077[(1)]);
if((state_val_47078 === (7))){
var inst_47059 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
var statearr_47085_50194 = state_47077__$1;
(statearr_47085_50194[(2)] = inst_47059);

(statearr_47085_50194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (1))){
var inst_47053 = cljs.core.seq(coll);
var inst_47054 = inst_47053;
var state_47077__$1 = (function (){var statearr_47088 = state_47077;
(statearr_47088[(7)] = inst_47054);

return statearr_47088;
})();
var statearr_47089_50195 = state_47077__$1;
(statearr_47089_50195[(2)] = null);

(statearr_47089_50195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (4))){
var inst_47054 = (state_47077[(7)]);
var inst_47057 = cljs.core.first(inst_47054);
var state_47077__$1 = state_47077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47077__$1,(7),ch,inst_47057);
} else {
if((state_val_47078 === (13))){
var inst_47071 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
var statearr_47093_50197 = state_47077__$1;
(statearr_47093_50197[(2)] = inst_47071);

(statearr_47093_50197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (6))){
var inst_47062 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
if(cljs.core.truth_(inst_47062)){
var statearr_47095_50198 = state_47077__$1;
(statearr_47095_50198[(1)] = (8));

} else {
var statearr_47096_50199 = state_47077__$1;
(statearr_47096_50199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (3))){
var inst_47075 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47077__$1,inst_47075);
} else {
if((state_val_47078 === (12))){
var state_47077__$1 = state_47077;
var statearr_47097_50200 = state_47077__$1;
(statearr_47097_50200[(2)] = null);

(statearr_47097_50200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (2))){
var inst_47054 = (state_47077[(7)]);
var state_47077__$1 = state_47077;
if(cljs.core.truth_(inst_47054)){
var statearr_47104_50201 = state_47077__$1;
(statearr_47104_50201[(1)] = (4));

} else {
var statearr_47105_50202 = state_47077__$1;
(statearr_47105_50202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (11))){
var inst_47068 = cljs.core.async.close_BANG_(ch);
var state_47077__$1 = state_47077;
var statearr_47106_50203 = state_47077__$1;
(statearr_47106_50203[(2)] = inst_47068);

(statearr_47106_50203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (9))){
var state_47077__$1 = state_47077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47108_50204 = state_47077__$1;
(statearr_47108_50204[(1)] = (11));

} else {
var statearr_47109_50208 = state_47077__$1;
(statearr_47109_50208[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (5))){
var inst_47054 = (state_47077[(7)]);
var state_47077__$1 = state_47077;
var statearr_47110_50209 = state_47077__$1;
(statearr_47110_50209[(2)] = inst_47054);

(statearr_47110_50209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (10))){
var inst_47073 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
var statearr_47116_50210 = state_47077__$1;
(statearr_47116_50210[(2)] = inst_47073);

(statearr_47116_50210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (8))){
var inst_47054 = (state_47077[(7)]);
var inst_47064 = cljs.core.next(inst_47054);
var inst_47054__$1 = inst_47064;
var state_47077__$1 = (function (){var statearr_47118 = state_47077;
(statearr_47118[(7)] = inst_47054__$1);

return statearr_47118;
})();
var statearr_47119_50211 = state_47077__$1;
(statearr_47119_50211[(2)] = null);

(statearr_47119_50211[(1)] = (2));


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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_47120 = [null,null,null,null,null,null,null,null];
(statearr_47120[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_47120[(1)] = (1));

return statearr_47120;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_47077){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_47077);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e47123){var ex__29741__auto__ = e47123;
var statearr_47124_50212 = state_47077;
(statearr_47124_50212[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_47077[(4)]))){
var statearr_47126_50213 = state_47077;
(statearr_47126_50213[(1)] = cljs.core.first((state_47077[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50215 = state_47077;
state_47077 = G__50215;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_47077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_47077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_47127 = f__30094__auto__();
(statearr_47127[(6)] = c__30092__auto__);

return statearr_47127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));

return c__30092__auto__;
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
var G__47133 = arguments.length;
switch (G__47133) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_50237 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_50237(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50239 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_50239(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50246 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_50246(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50247 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_50247(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47165 = (function (ch,cs,meta47166){
this.ch = ch;
this.cs = cs;
this.meta47166 = meta47166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47167,meta47166__$1){
var self__ = this;
var _47167__$1 = this;
return (new cljs.core.async.t_cljs$core$async47165(self__.ch,self__.cs,meta47166__$1));
}));

(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47167){
var self__ = this;
var _47167__$1 = this;
return self__.meta47166;
}));

(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47165.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47166","meta47166",-533738676,null)], null);
}));

(cljs.core.async.t_cljs$core$async47165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47165");

(cljs.core.async.t_cljs$core$async47165.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47165.
 */
cljs.core.async.__GT_t_cljs$core$async47165 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47165(ch__$1,cs__$1,meta47166){
return (new cljs.core.async.t_cljs$core$async47165(ch__$1,cs__$1,meta47166));
});

}

return (new cljs.core.async.t_cljs$core$async47165(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30092__auto___50251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_47355){
var state_val_47357 = (state_47355[(1)]);
if((state_val_47357 === (7))){
var inst_47348 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47365_50255 = state_47355__$1;
(statearr_47365_50255[(2)] = inst_47348);

(statearr_47365_50255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (20))){
var inst_47236 = (state_47355[(7)]);
var inst_47252 = cljs.core.first(inst_47236);
var inst_47253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47252,(0),null);
var inst_47257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47252,(1),null);
var state_47355__$1 = (function (){var statearr_47370 = state_47355;
(statearr_47370[(8)] = inst_47253);

return statearr_47370;
})();
if(cljs.core.truth_(inst_47257)){
var statearr_47371_50256 = state_47355__$1;
(statearr_47371_50256[(1)] = (22));

} else {
var statearr_47372_50257 = state_47355__$1;
(statearr_47372_50257[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (27))){
var inst_47194 = (state_47355[(9)]);
var inst_47297 = (state_47355[(10)]);
var inst_47289 = (state_47355[(11)]);
var inst_47287 = (state_47355[(12)]);
var inst_47297__$1 = cljs.core._nth(inst_47287,inst_47289);
var inst_47298 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47297__$1,inst_47194,done);
var state_47355__$1 = (function (){var statearr_47379 = state_47355;
(statearr_47379[(10)] = inst_47297__$1);

return statearr_47379;
})();
if(cljs.core.truth_(inst_47298)){
var statearr_47380_50260 = state_47355__$1;
(statearr_47380_50260[(1)] = (30));

} else {
var statearr_47382_50261 = state_47355__$1;
(statearr_47382_50261[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (1))){
var state_47355__$1 = state_47355;
var statearr_47383_50264 = state_47355__$1;
(statearr_47383_50264[(2)] = null);

(statearr_47383_50264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (24))){
var inst_47236 = (state_47355[(7)]);
var inst_47262 = (state_47355[(2)]);
var inst_47263 = cljs.core.next(inst_47236);
var inst_47207 = inst_47263;
var inst_47208 = null;
var inst_47210 = (0);
var inst_47211 = (0);
var state_47355__$1 = (function (){var statearr_47412 = state_47355;
(statearr_47412[(13)] = inst_47262);

(statearr_47412[(14)] = inst_47210);

(statearr_47412[(15)] = inst_47211);

(statearr_47412[(16)] = inst_47208);

(statearr_47412[(17)] = inst_47207);

return statearr_47412;
})();
var statearr_47413_50269 = state_47355__$1;
(statearr_47413_50269[(2)] = null);

(statearr_47413_50269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (39))){
var state_47355__$1 = state_47355;
var statearr_47417_50274 = state_47355__$1;
(statearr_47417_50274[(2)] = null);

(statearr_47417_50274[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (4))){
var inst_47194 = (state_47355[(9)]);
var inst_47194__$1 = (state_47355[(2)]);
var inst_47196 = (inst_47194__$1 == null);
var state_47355__$1 = (function (){var statearr_47422 = state_47355;
(statearr_47422[(9)] = inst_47194__$1);

return statearr_47422;
})();
if(cljs.core.truth_(inst_47196)){
var statearr_47423_50279 = state_47355__$1;
(statearr_47423_50279[(1)] = (5));

} else {
var statearr_47424_50280 = state_47355__$1;
(statearr_47424_50280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (15))){
var inst_47210 = (state_47355[(14)]);
var inst_47211 = (state_47355[(15)]);
var inst_47208 = (state_47355[(16)]);
var inst_47207 = (state_47355[(17)]);
var inst_47229 = (state_47355[(2)]);
var inst_47233 = (inst_47211 + (1));
var tmp47414 = inst_47210;
var tmp47415 = inst_47208;
var tmp47416 = inst_47207;
var inst_47207__$1 = tmp47416;
var inst_47208__$1 = tmp47415;
var inst_47210__$1 = tmp47414;
var inst_47211__$1 = inst_47233;
var state_47355__$1 = (function (){var statearr_47431 = state_47355;
(statearr_47431[(14)] = inst_47210__$1);

(statearr_47431[(15)] = inst_47211__$1);

(statearr_47431[(16)] = inst_47208__$1);

(statearr_47431[(17)] = inst_47207__$1);

(statearr_47431[(18)] = inst_47229);

return statearr_47431;
})();
var statearr_47435_50293 = state_47355__$1;
(statearr_47435_50293[(2)] = null);

(statearr_47435_50293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (21))){
var inst_47266 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47439_50294 = state_47355__$1;
(statearr_47439_50294[(2)] = inst_47266);

(statearr_47439_50294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (31))){
var inst_47297 = (state_47355[(10)]);
var inst_47301 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47297);
var state_47355__$1 = state_47355;
var statearr_47441_50301 = state_47355__$1;
(statearr_47441_50301[(2)] = inst_47301);

(statearr_47441_50301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (32))){
var inst_47286 = (state_47355[(19)]);
var inst_47289 = (state_47355[(11)]);
var inst_47288 = (state_47355[(20)]);
var inst_47287 = (state_47355[(12)]);
var inst_47303 = (state_47355[(2)]);
var inst_47304 = (inst_47289 + (1));
var tmp47436 = inst_47286;
var tmp47437 = inst_47288;
var tmp47438 = inst_47287;
var inst_47286__$1 = tmp47436;
var inst_47287__$1 = tmp47438;
var inst_47288__$1 = tmp47437;
var inst_47289__$1 = inst_47304;
var state_47355__$1 = (function (){var statearr_47448 = state_47355;
(statearr_47448[(19)] = inst_47286__$1);

(statearr_47448[(21)] = inst_47303);

(statearr_47448[(11)] = inst_47289__$1);

(statearr_47448[(20)] = inst_47288__$1);

(statearr_47448[(12)] = inst_47287__$1);

return statearr_47448;
})();
var statearr_47451_50302 = state_47355__$1;
(statearr_47451_50302[(2)] = null);

(statearr_47451_50302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (40))){
var inst_47318 = (state_47355[(22)]);
var inst_47323 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47318);
var state_47355__$1 = state_47355;
var statearr_47456_50303 = state_47355__$1;
(statearr_47456_50303[(2)] = inst_47323);

(statearr_47456_50303[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (33))){
var inst_47307 = (state_47355[(23)]);
var inst_47309 = cljs.core.chunked_seq_QMARK_(inst_47307);
var state_47355__$1 = state_47355;
if(inst_47309){
var statearr_47461_50304 = state_47355__$1;
(statearr_47461_50304[(1)] = (36));

} else {
var statearr_47462_50305 = state_47355__$1;
(statearr_47462_50305[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (13))){
var inst_47223 = (state_47355[(24)]);
var inst_47226 = cljs.core.async.close_BANG_(inst_47223);
var state_47355__$1 = state_47355;
var statearr_47463_50306 = state_47355__$1;
(statearr_47463_50306[(2)] = inst_47226);

(statearr_47463_50306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (22))){
var inst_47253 = (state_47355[(8)]);
var inst_47259 = cljs.core.async.close_BANG_(inst_47253);
var state_47355__$1 = state_47355;
var statearr_47464_50307 = state_47355__$1;
(statearr_47464_50307[(2)] = inst_47259);

(statearr_47464_50307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (36))){
var inst_47307 = (state_47355[(23)]);
var inst_47312 = cljs.core.chunk_first(inst_47307);
var inst_47313 = cljs.core.chunk_rest(inst_47307);
var inst_47314 = cljs.core.count(inst_47312);
var inst_47286 = inst_47313;
var inst_47287 = inst_47312;
var inst_47288 = inst_47314;
var inst_47289 = (0);
var state_47355__$1 = (function (){var statearr_47466 = state_47355;
(statearr_47466[(19)] = inst_47286);

(statearr_47466[(11)] = inst_47289);

(statearr_47466[(20)] = inst_47288);

(statearr_47466[(12)] = inst_47287);

return statearr_47466;
})();
var statearr_47469_50308 = state_47355__$1;
(statearr_47469_50308[(2)] = null);

(statearr_47469_50308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (41))){
var inst_47307 = (state_47355[(23)]);
var inst_47325 = (state_47355[(2)]);
var inst_47327 = cljs.core.next(inst_47307);
var inst_47286 = inst_47327;
var inst_47287 = null;
var inst_47288 = (0);
var inst_47289 = (0);
var state_47355__$1 = (function (){var statearr_47476 = state_47355;
(statearr_47476[(25)] = inst_47325);

(statearr_47476[(19)] = inst_47286);

(statearr_47476[(11)] = inst_47289);

(statearr_47476[(20)] = inst_47288);

(statearr_47476[(12)] = inst_47287);

return statearr_47476;
})();
var statearr_47477_50309 = state_47355__$1;
(statearr_47477_50309[(2)] = null);

(statearr_47477_50309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (43))){
var state_47355__$1 = state_47355;
var statearr_47478_50310 = state_47355__$1;
(statearr_47478_50310[(2)] = null);

(statearr_47478_50310[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (29))){
var inst_47335 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47483_50313 = state_47355__$1;
(statearr_47483_50313[(2)] = inst_47335);

(statearr_47483_50313[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (44))){
var inst_47345 = (state_47355[(2)]);
var state_47355__$1 = (function (){var statearr_47488 = state_47355;
(statearr_47488[(26)] = inst_47345);

return statearr_47488;
})();
var statearr_47490_50314 = state_47355__$1;
(statearr_47490_50314[(2)] = null);

(statearr_47490_50314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (6))){
var inst_47276 = (state_47355[(27)]);
var inst_47275 = cljs.core.deref(cs);
var inst_47276__$1 = cljs.core.keys(inst_47275);
var inst_47277 = cljs.core.count(inst_47276__$1);
var inst_47278 = cljs.core.reset_BANG_(dctr,inst_47277);
var inst_47284 = cljs.core.seq(inst_47276__$1);
var inst_47286 = inst_47284;
var inst_47287 = null;
var inst_47288 = (0);
var inst_47289 = (0);
var state_47355__$1 = (function (){var statearr_47494 = state_47355;
(statearr_47494[(27)] = inst_47276__$1);

(statearr_47494[(19)] = inst_47286);

(statearr_47494[(11)] = inst_47289);

(statearr_47494[(28)] = inst_47278);

(statearr_47494[(20)] = inst_47288);

(statearr_47494[(12)] = inst_47287);

return statearr_47494;
})();
var statearr_47495_50319 = state_47355__$1;
(statearr_47495_50319[(2)] = null);

(statearr_47495_50319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (28))){
var inst_47286 = (state_47355[(19)]);
var inst_47307 = (state_47355[(23)]);
var inst_47307__$1 = cljs.core.seq(inst_47286);
var state_47355__$1 = (function (){var statearr_47502 = state_47355;
(statearr_47502[(23)] = inst_47307__$1);

return statearr_47502;
})();
if(inst_47307__$1){
var statearr_47503_50320 = state_47355__$1;
(statearr_47503_50320[(1)] = (33));

} else {
var statearr_47504_50321 = state_47355__$1;
(statearr_47504_50321[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (25))){
var inst_47289 = (state_47355[(11)]);
var inst_47288 = (state_47355[(20)]);
var inst_47292 = (inst_47289 < inst_47288);
var inst_47293 = inst_47292;
var state_47355__$1 = state_47355;
if(cljs.core.truth_(inst_47293)){
var statearr_47506_50322 = state_47355__$1;
(statearr_47506_50322[(1)] = (27));

} else {
var statearr_47511_50323 = state_47355__$1;
(statearr_47511_50323[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (34))){
var state_47355__$1 = state_47355;
var statearr_47513_50330 = state_47355__$1;
(statearr_47513_50330[(2)] = null);

(statearr_47513_50330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (17))){
var state_47355__$1 = state_47355;
var statearr_47514_50331 = state_47355__$1;
(statearr_47514_50331[(2)] = null);

(statearr_47514_50331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (3))){
var inst_47350 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47355__$1,inst_47350);
} else {
if((state_val_47357 === (12))){
var inst_47271 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47518_50332 = state_47355__$1;
(statearr_47518_50332[(2)] = inst_47271);

(statearr_47518_50332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (2))){
var state_47355__$1 = state_47355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47355__$1,(4),ch);
} else {
if((state_val_47357 === (23))){
var state_47355__$1 = state_47355;
var statearr_47526_50333 = state_47355__$1;
(statearr_47526_50333[(2)] = null);

(statearr_47526_50333[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (35))){
var inst_47333 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47534_50335 = state_47355__$1;
(statearr_47534_50335[(2)] = inst_47333);

(statearr_47534_50335[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (19))){
var inst_47236 = (state_47355[(7)]);
var inst_47244 = cljs.core.chunk_first(inst_47236);
var inst_47245 = cljs.core.chunk_rest(inst_47236);
var inst_47246 = cljs.core.count(inst_47244);
var inst_47207 = inst_47245;
var inst_47208 = inst_47244;
var inst_47210 = inst_47246;
var inst_47211 = (0);
var state_47355__$1 = (function (){var statearr_47537 = state_47355;
(statearr_47537[(14)] = inst_47210);

(statearr_47537[(15)] = inst_47211);

(statearr_47537[(16)] = inst_47208);

(statearr_47537[(17)] = inst_47207);

return statearr_47537;
})();
var statearr_47541_50336 = state_47355__$1;
(statearr_47541_50336[(2)] = null);

(statearr_47541_50336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (11))){
var inst_47207 = (state_47355[(17)]);
var inst_47236 = (state_47355[(7)]);
var inst_47236__$1 = cljs.core.seq(inst_47207);
var state_47355__$1 = (function (){var statearr_47543 = state_47355;
(statearr_47543[(7)] = inst_47236__$1);

return statearr_47543;
})();
if(inst_47236__$1){
var statearr_47546_50337 = state_47355__$1;
(statearr_47546_50337[(1)] = (16));

} else {
var statearr_47547_50338 = state_47355__$1;
(statearr_47547_50338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (9))){
var inst_47273 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47549_50339 = state_47355__$1;
(statearr_47549_50339[(2)] = inst_47273);

(statearr_47549_50339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (5))){
var inst_47204 = cljs.core.deref(cs);
var inst_47206 = cljs.core.seq(inst_47204);
var inst_47207 = inst_47206;
var inst_47208 = null;
var inst_47210 = (0);
var inst_47211 = (0);
var state_47355__$1 = (function (){var statearr_47551 = state_47355;
(statearr_47551[(14)] = inst_47210);

(statearr_47551[(15)] = inst_47211);

(statearr_47551[(16)] = inst_47208);

(statearr_47551[(17)] = inst_47207);

return statearr_47551;
})();
var statearr_47552_50340 = state_47355__$1;
(statearr_47552_50340[(2)] = null);

(statearr_47552_50340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (14))){
var state_47355__$1 = state_47355;
var statearr_47557_50341 = state_47355__$1;
(statearr_47557_50341[(2)] = null);

(statearr_47557_50341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (45))){
var inst_47342 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47560_50343 = state_47355__$1;
(statearr_47560_50343[(2)] = inst_47342);

(statearr_47560_50343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (26))){
var inst_47276 = (state_47355[(27)]);
var inst_47338 = (state_47355[(2)]);
var inst_47339 = cljs.core.seq(inst_47276);
var state_47355__$1 = (function (){var statearr_47563 = state_47355;
(statearr_47563[(29)] = inst_47338);

return statearr_47563;
})();
if(inst_47339){
var statearr_47570_50351 = state_47355__$1;
(statearr_47570_50351[(1)] = (42));

} else {
var statearr_47572_50352 = state_47355__$1;
(statearr_47572_50352[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (16))){
var inst_47236 = (state_47355[(7)]);
var inst_47241 = cljs.core.chunked_seq_QMARK_(inst_47236);
var state_47355__$1 = state_47355;
if(inst_47241){
var statearr_47582_50353 = state_47355__$1;
(statearr_47582_50353[(1)] = (19));

} else {
var statearr_47588_50354 = state_47355__$1;
(statearr_47588_50354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (38))){
var inst_47330 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47600_50363 = state_47355__$1;
(statearr_47600_50363[(2)] = inst_47330);

(statearr_47600_50363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (30))){
var state_47355__$1 = state_47355;
var statearr_47601_50364 = state_47355__$1;
(statearr_47601_50364[(2)] = null);

(statearr_47601_50364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (10))){
var inst_47211 = (state_47355[(15)]);
var inst_47208 = (state_47355[(16)]);
var inst_47219 = cljs.core._nth(inst_47208,inst_47211);
var inst_47223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47219,(0),null);
var inst_47224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47219,(1),null);
var state_47355__$1 = (function (){var statearr_47604 = state_47355;
(statearr_47604[(24)] = inst_47223);

return statearr_47604;
})();
if(cljs.core.truth_(inst_47224)){
var statearr_47605_50366 = state_47355__$1;
(statearr_47605_50366[(1)] = (13));

} else {
var statearr_47606_50367 = state_47355__$1;
(statearr_47606_50367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (18))){
var inst_47269 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47607_50375 = state_47355__$1;
(statearr_47607_50375[(2)] = inst_47269);

(statearr_47607_50375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (42))){
var state_47355__$1 = state_47355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47355__$1,(45),dchan);
} else {
if((state_val_47357 === (37))){
var inst_47194 = (state_47355[(9)]);
var inst_47318 = (state_47355[(22)]);
var inst_47307 = (state_47355[(23)]);
var inst_47318__$1 = cljs.core.first(inst_47307);
var inst_47319 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47318__$1,inst_47194,done);
var state_47355__$1 = (function (){var statearr_47610 = state_47355;
(statearr_47610[(22)] = inst_47318__$1);

return statearr_47610;
})();
if(cljs.core.truth_(inst_47319)){
var statearr_47611_50376 = state_47355__$1;
(statearr_47611_50376[(1)] = (39));

} else {
var statearr_47612_50377 = state_47355__$1;
(statearr_47612_50377[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47357 === (8))){
var inst_47210 = (state_47355[(14)]);
var inst_47211 = (state_47355[(15)]);
var inst_47213 = (inst_47211 < inst_47210);
var inst_47214 = inst_47213;
var state_47355__$1 = state_47355;
if(cljs.core.truth_(inst_47214)){
var statearr_47615_50378 = state_47355__$1;
(statearr_47615_50378[(1)] = (10));

} else {
var statearr_47616_50379 = state_47355__$1;
(statearr_47616_50379[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29738__auto__ = null;
var cljs$core$async$mult_$_state_machine__29738__auto____0 = (function (){
var statearr_47617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47617[(0)] = cljs$core$async$mult_$_state_machine__29738__auto__);

(statearr_47617[(1)] = (1));

return statearr_47617;
});
var cljs$core$async$mult_$_state_machine__29738__auto____1 = (function (state_47355){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_47355);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e47619){var ex__29741__auto__ = e47619;
var statearr_47621_50380 = state_47355;
(statearr_47621_50380[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_47355[(4)]))){
var statearr_47623_50381 = state_47355;
(statearr_47623_50381[(1)] = cljs.core.first((state_47355[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50388 = state_47355;
state_47355 = G__50388;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29738__auto__ = function(state_47355){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29738__auto____1.call(this,state_47355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29738__auto____0;
cljs$core$async$mult_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29738__auto____1;
return cljs$core$async$mult_$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_47624 = f__30094__auto__();
(statearr_47624[(6)] = c__30092__auto___50251);

return statearr_47624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
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
var G__47630 = arguments.length;
switch (G__47630) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_50395 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_50395(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50399 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_50399(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50403 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50403(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50408 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_50408(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50412 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50412(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50413 = arguments.length;
var i__5770__auto___50414 = (0);
while(true){
if((i__5770__auto___50414 < len__5769__auto___50413)){
args__5775__auto__.push((arguments[i__5770__auto___50414]));

var G__50415 = (i__5770__auto___50414 + (1));
i__5770__auto___50414 = G__50415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47671){
var map__47672 = p__47671;
var map__47672__$1 = cljs.core.__destructure_map(map__47672);
var opts = map__47672__$1;
var statearr_47673_50418 = state;
(statearr_47673_50418[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47681_50419 = state;
(statearr_47681_50419[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_47688_50420 = state;
(statearr_47688_50420[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47666){
var G__47667 = cljs.core.first(seq47666);
var seq47666__$1 = cljs.core.next(seq47666);
var G__47668 = cljs.core.first(seq47666__$1);
var seq47666__$2 = cljs.core.next(seq47666__$1);
var G__47669 = cljs.core.first(seq47666__$2);
var seq47666__$3 = cljs.core.next(seq47666__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47667,G__47668,G__47669,seq47666__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47697 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47698){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47698 = meta47698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47699,meta47698__$1){
var self__ = this;
var _47699__$1 = this;
return (new cljs.core.async.t_cljs$core$async47697(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47698__$1));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47699){
var self__ = this;
var _47699__$1 = this;
return self__.meta47698;
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47698","meta47698",456131440,null)], null);
}));

(cljs.core.async.t_cljs$core$async47697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47697");

(cljs.core.async.t_cljs$core$async47697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47697.
 */
cljs.core.async.__GT_t_cljs$core$async47697 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47698){
return (new cljs.core.async.t_cljs$core$async47697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47698));
});

}

return (new cljs.core.async.t_cljs$core$async47697(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30092__auto___50453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_47832){
var state_val_47834 = (state_47832[(1)]);
if((state_val_47834 === (7))){
var inst_47779 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47779)){
var statearr_47842_50454 = state_47832__$1;
(statearr_47842_50454[(1)] = (8));

} else {
var statearr_47845_50456 = state_47832__$1;
(statearr_47845_50456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (20))){
var inst_47770 = (state_47832[(7)]);
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47832__$1,(23),out,inst_47770);
} else {
if((state_val_47834 === (1))){
var inst_47730 = calc_state();
var inst_47731 = cljs.core.__destructure_map(inst_47730);
var inst_47732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47731,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47731,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47731,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47754 = inst_47730;
var state_47832__$1 = (function (){var statearr_47854 = state_47832;
(statearr_47854[(8)] = inst_47754);

(statearr_47854[(9)] = inst_47734);

(statearr_47854[(10)] = inst_47732);

(statearr_47854[(11)] = inst_47733);

return statearr_47854;
})();
var statearr_47859_50462 = state_47832__$1;
(statearr_47859_50462[(2)] = null);

(statearr_47859_50462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (24))){
var inst_47758 = (state_47832[(12)]);
var inst_47754 = inst_47758;
var state_47832__$1 = (function (){var statearr_47862 = state_47832;
(statearr_47862[(8)] = inst_47754);

return statearr_47862;
})();
var statearr_47864_50463 = state_47832__$1;
(statearr_47864_50463[(2)] = null);

(statearr_47864_50463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (4))){
var inst_47772 = (state_47832[(13)]);
var inst_47770 = (state_47832[(7)]);
var inst_47769 = (state_47832[(2)]);
var inst_47770__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47769,(0),null);
var inst_47771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47769,(1),null);
var inst_47772__$1 = (inst_47770__$1 == null);
var state_47832__$1 = (function (){var statearr_47868 = state_47832;
(statearr_47868[(13)] = inst_47772__$1);

(statearr_47868[(14)] = inst_47771);

(statearr_47868[(7)] = inst_47770__$1);

return statearr_47868;
})();
if(cljs.core.truth_(inst_47772__$1)){
var statearr_47870_50464 = state_47832__$1;
(statearr_47870_50464[(1)] = (5));

} else {
var statearr_47871_50465 = state_47832__$1;
(statearr_47871_50465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (15))){
var inst_47759 = (state_47832[(15)]);
var inst_47801 = (state_47832[(16)]);
var inst_47801__$1 = cljs.core.empty_QMARK_(inst_47759);
var state_47832__$1 = (function (){var statearr_47876 = state_47832;
(statearr_47876[(16)] = inst_47801__$1);

return statearr_47876;
})();
if(inst_47801__$1){
var statearr_47879_50466 = state_47832__$1;
(statearr_47879_50466[(1)] = (17));

} else {
var statearr_47882_50467 = state_47832__$1;
(statearr_47882_50467[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (21))){
var inst_47758 = (state_47832[(12)]);
var inst_47754 = inst_47758;
var state_47832__$1 = (function (){var statearr_47884 = state_47832;
(statearr_47884[(8)] = inst_47754);

return statearr_47884;
})();
var statearr_47887_50468 = state_47832__$1;
(statearr_47887_50468[(2)] = null);

(statearr_47887_50468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (13))){
var inst_47790 = (state_47832[(2)]);
var inst_47791 = calc_state();
var inst_47754 = inst_47791;
var state_47832__$1 = (function (){var statearr_47889 = state_47832;
(statearr_47889[(8)] = inst_47754);

(statearr_47889[(17)] = inst_47790);

return statearr_47889;
})();
var statearr_47890_50469 = state_47832__$1;
(statearr_47890_50469[(2)] = null);

(statearr_47890_50469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (22))){
var inst_47821 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47894_50470 = state_47832__$1;
(statearr_47894_50470[(2)] = inst_47821);

(statearr_47894_50470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (6))){
var inst_47771 = (state_47832[(14)]);
var inst_47776 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47771,change);
var state_47832__$1 = state_47832;
var statearr_47899_50472 = state_47832__$1;
(statearr_47899_50472[(2)] = inst_47776);

(statearr_47899_50472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (25))){
var state_47832__$1 = state_47832;
var statearr_47902_50474 = state_47832__$1;
(statearr_47902_50474[(2)] = null);

(statearr_47902_50474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (17))){
var inst_47761 = (state_47832[(18)]);
var inst_47771 = (state_47832[(14)]);
var inst_47803 = (inst_47761.cljs$core$IFn$_invoke$arity$1 ? inst_47761.cljs$core$IFn$_invoke$arity$1(inst_47771) : inst_47761.call(null,inst_47771));
var inst_47804 = cljs.core.not(inst_47803);
var state_47832__$1 = state_47832;
var statearr_47924_50476 = state_47832__$1;
(statearr_47924_50476[(2)] = inst_47804);

(statearr_47924_50476[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (3))){
var inst_47825 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47832__$1,inst_47825);
} else {
if((state_val_47834 === (12))){
var state_47832__$1 = state_47832;
var statearr_47930_50480 = state_47832__$1;
(statearr_47930_50480[(2)] = null);

(statearr_47930_50480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (2))){
var inst_47754 = (state_47832[(8)]);
var inst_47758 = (state_47832[(12)]);
var inst_47758__$1 = cljs.core.__destructure_map(inst_47754);
var inst_47759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47758__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47758__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47758__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47832__$1 = (function (){var statearr_47941 = state_47832;
(statearr_47941[(12)] = inst_47758__$1);

(statearr_47941[(15)] = inst_47759);

(statearr_47941[(18)] = inst_47761);

return statearr_47941;
})();
return cljs.core.async.ioc_alts_BANG_(state_47832__$1,(4),inst_47763);
} else {
if((state_val_47834 === (23))){
var inst_47812 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47812)){
var statearr_47944_50487 = state_47832__$1;
(statearr_47944_50487[(1)] = (24));

} else {
var statearr_47950_50488 = state_47832__$1;
(statearr_47950_50488[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (19))){
var inst_47807 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47954_50490 = state_47832__$1;
(statearr_47954_50490[(2)] = inst_47807);

(statearr_47954_50490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (11))){
var inst_47771 = (state_47832[(14)]);
var inst_47787 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47771);
var state_47832__$1 = state_47832;
var statearr_47961_50495 = state_47832__$1;
(statearr_47961_50495[(2)] = inst_47787);

(statearr_47961_50495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (9))){
var inst_47759 = (state_47832[(15)]);
var inst_47794 = (state_47832[(19)]);
var inst_47771 = (state_47832[(14)]);
var inst_47794__$1 = (inst_47759.cljs$core$IFn$_invoke$arity$1 ? inst_47759.cljs$core$IFn$_invoke$arity$1(inst_47771) : inst_47759.call(null,inst_47771));
var state_47832__$1 = (function (){var statearr_47963 = state_47832;
(statearr_47963[(19)] = inst_47794__$1);

return statearr_47963;
})();
if(cljs.core.truth_(inst_47794__$1)){
var statearr_47964_50496 = state_47832__$1;
(statearr_47964_50496[(1)] = (14));

} else {
var statearr_47966_50497 = state_47832__$1;
(statearr_47966_50497[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (5))){
var inst_47772 = (state_47832[(13)]);
var state_47832__$1 = state_47832;
var statearr_47967_50498 = state_47832__$1;
(statearr_47967_50498[(2)] = inst_47772);

(statearr_47967_50498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (14))){
var inst_47794 = (state_47832[(19)]);
var state_47832__$1 = state_47832;
var statearr_47971_50499 = state_47832__$1;
(statearr_47971_50499[(2)] = inst_47794);

(statearr_47971_50499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (26))){
var inst_47817 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47972_50500 = state_47832__$1;
(statearr_47972_50500[(2)] = inst_47817);

(statearr_47972_50500[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (16))){
var inst_47809 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47809)){
var statearr_47974_50501 = state_47832__$1;
(statearr_47974_50501[(1)] = (20));

} else {
var statearr_47975_50504 = state_47832__$1;
(statearr_47975_50504[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (10))){
var inst_47823 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47979_50505 = state_47832__$1;
(statearr_47979_50505[(2)] = inst_47823);

(statearr_47979_50505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (18))){
var inst_47801 = (state_47832[(16)]);
var state_47832__$1 = state_47832;
var statearr_47981_50506 = state_47832__$1;
(statearr_47981_50506[(2)] = inst_47801);

(statearr_47981_50506[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47834 === (8))){
var inst_47770 = (state_47832[(7)]);
var inst_47784 = (inst_47770 == null);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47784)){
var statearr_47983_50509 = state_47832__$1;
(statearr_47983_50509[(1)] = (11));

} else {
var statearr_47986_50510 = state_47832__$1;
(statearr_47986_50510[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29738__auto__ = null;
var cljs$core$async$mix_$_state_machine__29738__auto____0 = (function (){
var statearr_47991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47991[(0)] = cljs$core$async$mix_$_state_machine__29738__auto__);

(statearr_47991[(1)] = (1));

return statearr_47991;
});
var cljs$core$async$mix_$_state_machine__29738__auto____1 = (function (state_47832){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_47832);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e47993){var ex__29741__auto__ = e47993;
var statearr_47995_50514 = state_47832;
(statearr_47995_50514[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_47832[(4)]))){
var statearr_47996_50515 = state_47832;
(statearr_47996_50515[(1)] = cljs.core.first((state_47832[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50516 = state_47832;
state_47832 = G__50516;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29738__auto__ = function(state_47832){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29738__auto____1.call(this,state_47832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29738__auto____0;
cljs$core$async$mix_$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29738__auto____1;
return cljs$core$async$mix_$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_48003 = f__30094__auto__();
(statearr_48003[(6)] = c__30092__auto___50453);

return statearr_48003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_50524 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_50524(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50525 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_50525(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50528 = (function() {
var G__50529 = null;
var G__50529__1 = (function (p){
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
var G__50529__2 = (function (p,v){
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
G__50529 = function(p,v){
switch(arguments.length){
case 1:
return G__50529__1.call(this,p);
case 2:
return G__50529__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50529.cljs$core$IFn$_invoke$arity$1 = G__50529__1;
G__50529.cljs$core$IFn$_invoke$arity$2 = G__50529__2;
return G__50529;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48058 = arguments.length;
switch (G__48058) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50528(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50528(p,v);
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
var G__48082 = arguments.length;
switch (G__48082) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48073_SHARP_){
if(cljs.core.truth_((p1__48073_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48073_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48073_SHARP_.call(null,topic)))){
return p1__48073_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48073_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48097 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48098){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48098 = meta48098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48099,meta48098__$1){
var self__ = this;
var _48099__$1 = this;
return (new cljs.core.async.t_cljs$core$async48097(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48098__$1));
}));

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48099){
var self__ = this;
var _48099__$1 = this;
return self__.meta48098;
}));

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48098","meta48098",219666167,null)], null);
}));

(cljs.core.async.t_cljs$core$async48097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48097");

(cljs.core.async.t_cljs$core$async48097.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48097.
 */
cljs.core.async.__GT_t_cljs$core$async48097 = (function cljs$core$async$__GT_t_cljs$core$async48097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48098){
return (new cljs.core.async.t_cljs$core$async48097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48098));
});

}

return (new cljs.core.async.t_cljs$core$async48097(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30092__auto___50562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_48207){
var state_val_48208 = (state_48207[(1)]);
if((state_val_48208 === (7))){
var inst_48199 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
var statearr_48214_50570 = state_48207__$1;
(statearr_48214_50570[(2)] = inst_48199);

(statearr_48214_50570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (20))){
var state_48207__$1 = state_48207;
var statearr_48215_50575 = state_48207__$1;
(statearr_48215_50575[(2)] = null);

(statearr_48215_50575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (1))){
var state_48207__$1 = state_48207;
var statearr_48219_50577 = state_48207__$1;
(statearr_48219_50577[(2)] = null);

(statearr_48219_50577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (24))){
var inst_48182 = (state_48207[(7)]);
var inst_48191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48182);
var state_48207__$1 = state_48207;
var statearr_48220_50583 = state_48207__$1;
(statearr_48220_50583[(2)] = inst_48191);

(statearr_48220_50583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (4))){
var inst_48132 = (state_48207[(8)]);
var inst_48132__$1 = (state_48207[(2)]);
var inst_48133 = (inst_48132__$1 == null);
var state_48207__$1 = (function (){var statearr_48228 = state_48207;
(statearr_48228[(8)] = inst_48132__$1);

return statearr_48228;
})();
if(cljs.core.truth_(inst_48133)){
var statearr_48229_50588 = state_48207__$1;
(statearr_48229_50588[(1)] = (5));

} else {
var statearr_48231_50592 = state_48207__$1;
(statearr_48231_50592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (15))){
var inst_48176 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
var statearr_48232_50593 = state_48207__$1;
(statearr_48232_50593[(2)] = inst_48176);

(statearr_48232_50593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (21))){
var inst_48196 = (state_48207[(2)]);
var state_48207__$1 = (function (){var statearr_48233 = state_48207;
(statearr_48233[(9)] = inst_48196);

return statearr_48233;
})();
var statearr_48234_50594 = state_48207__$1;
(statearr_48234_50594[(2)] = null);

(statearr_48234_50594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (13))){
var inst_48158 = (state_48207[(10)]);
var inst_48160 = cljs.core.chunked_seq_QMARK_(inst_48158);
var state_48207__$1 = state_48207;
if(inst_48160){
var statearr_48239_50596 = state_48207__$1;
(statearr_48239_50596[(1)] = (16));

} else {
var statearr_48240_50600 = state_48207__$1;
(statearr_48240_50600[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (22))){
var inst_48188 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
if(cljs.core.truth_(inst_48188)){
var statearr_48244_50605 = state_48207__$1;
(statearr_48244_50605[(1)] = (23));

} else {
var statearr_48246_50606 = state_48207__$1;
(statearr_48246_50606[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (6))){
var inst_48132 = (state_48207[(8)]);
var inst_48184 = (state_48207[(11)]);
var inst_48182 = (state_48207[(7)]);
var inst_48182__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48132) : topic_fn.call(null,inst_48132));
var inst_48183 = cljs.core.deref(mults);
var inst_48184__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48183,inst_48182__$1);
var state_48207__$1 = (function (){var statearr_48248 = state_48207;
(statearr_48248[(11)] = inst_48184__$1);

(statearr_48248[(7)] = inst_48182__$1);

return statearr_48248;
})();
if(cljs.core.truth_(inst_48184__$1)){
var statearr_48251_50608 = state_48207__$1;
(statearr_48251_50608[(1)] = (19));

} else {
var statearr_48256_50609 = state_48207__$1;
(statearr_48256_50609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (25))){
var inst_48193 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
var statearr_48261_50614 = state_48207__$1;
(statearr_48261_50614[(2)] = inst_48193);

(statearr_48261_50614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (17))){
var inst_48158 = (state_48207[(10)]);
var inst_48167 = cljs.core.first(inst_48158);
var inst_48168 = cljs.core.async.muxch_STAR_(inst_48167);
var inst_48169 = cljs.core.async.close_BANG_(inst_48168);
var inst_48170 = cljs.core.next(inst_48158);
var inst_48142 = inst_48170;
var inst_48143 = null;
var inst_48144 = (0);
var inst_48145 = (0);
var state_48207__$1 = (function (){var statearr_48263 = state_48207;
(statearr_48263[(12)] = inst_48144);

(statearr_48263[(13)] = inst_48142);

(statearr_48263[(14)] = inst_48143);

(statearr_48263[(15)] = inst_48169);

(statearr_48263[(16)] = inst_48145);

return statearr_48263;
})();
var statearr_48265_50620 = state_48207__$1;
(statearr_48265_50620[(2)] = null);

(statearr_48265_50620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (3))){
var inst_48201 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48207__$1,inst_48201);
} else {
if((state_val_48208 === (12))){
var inst_48178 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
var statearr_48266_50622 = state_48207__$1;
(statearr_48266_50622[(2)] = inst_48178);

(statearr_48266_50622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (2))){
var state_48207__$1 = state_48207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48207__$1,(4),ch);
} else {
if((state_val_48208 === (23))){
var state_48207__$1 = state_48207;
var statearr_48267_50626 = state_48207__$1;
(statearr_48267_50626[(2)] = null);

(statearr_48267_50626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (19))){
var inst_48132 = (state_48207[(8)]);
var inst_48184 = (state_48207[(11)]);
var inst_48186 = cljs.core.async.muxch_STAR_(inst_48184);
var state_48207__$1 = state_48207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48207__$1,(22),inst_48186,inst_48132);
} else {
if((state_val_48208 === (11))){
var inst_48142 = (state_48207[(13)]);
var inst_48158 = (state_48207[(10)]);
var inst_48158__$1 = cljs.core.seq(inst_48142);
var state_48207__$1 = (function (){var statearr_48276 = state_48207;
(statearr_48276[(10)] = inst_48158__$1);

return statearr_48276;
})();
if(inst_48158__$1){
var statearr_48278_50633 = state_48207__$1;
(statearr_48278_50633[(1)] = (13));

} else {
var statearr_48283_50634 = state_48207__$1;
(statearr_48283_50634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (9))){
var inst_48180 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
var statearr_48287_50635 = state_48207__$1;
(statearr_48287_50635[(2)] = inst_48180);

(statearr_48287_50635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (5))){
var inst_48139 = cljs.core.deref(mults);
var inst_48140 = cljs.core.vals(inst_48139);
var inst_48141 = cljs.core.seq(inst_48140);
var inst_48142 = inst_48141;
var inst_48143 = null;
var inst_48144 = (0);
var inst_48145 = (0);
var state_48207__$1 = (function (){var statearr_48291 = state_48207;
(statearr_48291[(12)] = inst_48144);

(statearr_48291[(13)] = inst_48142);

(statearr_48291[(14)] = inst_48143);

(statearr_48291[(16)] = inst_48145);

return statearr_48291;
})();
var statearr_48293_50640 = state_48207__$1;
(statearr_48293_50640[(2)] = null);

(statearr_48293_50640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (14))){
var state_48207__$1 = state_48207;
var statearr_48297_50641 = state_48207__$1;
(statearr_48297_50641[(2)] = null);

(statearr_48297_50641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (16))){
var inst_48158 = (state_48207[(10)]);
var inst_48162 = cljs.core.chunk_first(inst_48158);
var inst_48163 = cljs.core.chunk_rest(inst_48158);
var inst_48164 = cljs.core.count(inst_48162);
var inst_48142 = inst_48163;
var inst_48143 = inst_48162;
var inst_48144 = inst_48164;
var inst_48145 = (0);
var state_48207__$1 = (function (){var statearr_48306 = state_48207;
(statearr_48306[(12)] = inst_48144);

(statearr_48306[(13)] = inst_48142);

(statearr_48306[(14)] = inst_48143);

(statearr_48306[(16)] = inst_48145);

return statearr_48306;
})();
var statearr_48307_50651 = state_48207__$1;
(statearr_48307_50651[(2)] = null);

(statearr_48307_50651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (10))){
var inst_48144 = (state_48207[(12)]);
var inst_48142 = (state_48207[(13)]);
var inst_48143 = (state_48207[(14)]);
var inst_48145 = (state_48207[(16)]);
var inst_48150 = cljs.core._nth(inst_48143,inst_48145);
var inst_48151 = cljs.core.async.muxch_STAR_(inst_48150);
var inst_48152 = cljs.core.async.close_BANG_(inst_48151);
var inst_48155 = (inst_48145 + (1));
var tmp48294 = inst_48144;
var tmp48295 = inst_48142;
var tmp48296 = inst_48143;
var inst_48142__$1 = tmp48295;
var inst_48143__$1 = tmp48296;
var inst_48144__$1 = tmp48294;
var inst_48145__$1 = inst_48155;
var state_48207__$1 = (function (){var statearr_48317 = state_48207;
(statearr_48317[(12)] = inst_48144__$1);

(statearr_48317[(17)] = inst_48152);

(statearr_48317[(13)] = inst_48142__$1);

(statearr_48317[(14)] = inst_48143__$1);

(statearr_48317[(16)] = inst_48145__$1);

return statearr_48317;
})();
var statearr_48321_50656 = state_48207__$1;
(statearr_48321_50656[(2)] = null);

(statearr_48321_50656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (18))){
var inst_48173 = (state_48207[(2)]);
var state_48207__$1 = state_48207;
var statearr_48324_50657 = state_48207__$1;
(statearr_48324_50657[(2)] = inst_48173);

(statearr_48324_50657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48208 === (8))){
var inst_48144 = (state_48207[(12)]);
var inst_48145 = (state_48207[(16)]);
var inst_48147 = (inst_48145 < inst_48144);
var inst_48148 = inst_48147;
var state_48207__$1 = state_48207;
if(cljs.core.truth_(inst_48148)){
var statearr_48329_50658 = state_48207__$1;
(statearr_48329_50658[(1)] = (10));

} else {
var statearr_48330_50659 = state_48207__$1;
(statearr_48330_50659[(1)] = (11));

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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_48332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48332[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_48332[(1)] = (1));

return statearr_48332;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_48207){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_48207);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e48334){var ex__29741__auto__ = e48334;
var statearr_48341_50660 = state_48207;
(statearr_48341_50660[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_48207[(4)]))){
var statearr_48344_50661 = state_48207;
(statearr_48344_50661[(1)] = cljs.core.first((state_48207[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50662 = state_48207;
state_48207 = G__50662;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_48207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_48207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_48350 = f__30094__auto__();
(statearr_48350[(6)] = c__30092__auto___50562);

return statearr_48350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
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
var G__48371 = arguments.length;
switch (G__48371) {
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
var G__48394 = arguments.length;
switch (G__48394) {
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
var G__48417 = arguments.length;
switch (G__48417) {
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
var c__30092__auto___50708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_48499){
var state_val_48501 = (state_48499[(1)]);
if((state_val_48501 === (7))){
var state_48499__$1 = state_48499;
var statearr_48510_50717 = state_48499__$1;
(statearr_48510_50717[(2)] = null);

(statearr_48510_50717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (1))){
var state_48499__$1 = state_48499;
var statearr_48512_50725 = state_48499__$1;
(statearr_48512_50725[(2)] = null);

(statearr_48512_50725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (4))){
var inst_48451 = (state_48499[(7)]);
var inst_48447 = (state_48499[(8)]);
var inst_48454 = (inst_48451 < inst_48447);
var state_48499__$1 = state_48499;
if(cljs.core.truth_(inst_48454)){
var statearr_48515_50735 = state_48499__$1;
(statearr_48515_50735[(1)] = (6));

} else {
var statearr_48518_50736 = state_48499__$1;
(statearr_48518_50736[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (15))){
var inst_48480 = (state_48499[(9)]);
var inst_48485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48480);
var state_48499__$1 = state_48499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48499__$1,(17),out,inst_48485);
} else {
if((state_val_48501 === (13))){
var inst_48480 = (state_48499[(9)]);
var inst_48480__$1 = (state_48499[(2)]);
var inst_48481 = cljs.core.some(cljs.core.nil_QMARK_,inst_48480__$1);
var state_48499__$1 = (function (){var statearr_48522 = state_48499;
(statearr_48522[(9)] = inst_48480__$1);

return statearr_48522;
})();
if(cljs.core.truth_(inst_48481)){
var statearr_48524_50749 = state_48499__$1;
(statearr_48524_50749[(1)] = (14));

} else {
var statearr_48526_50751 = state_48499__$1;
(statearr_48526_50751[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (6))){
var state_48499__$1 = state_48499;
var statearr_48530_50752 = state_48499__$1;
(statearr_48530_50752[(2)] = null);

(statearr_48530_50752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (17))){
var inst_48489 = (state_48499[(2)]);
var state_48499__$1 = (function (){var statearr_48533 = state_48499;
(statearr_48533[(10)] = inst_48489);

return statearr_48533;
})();
var statearr_48534_50758 = state_48499__$1;
(statearr_48534_50758[(2)] = null);

(statearr_48534_50758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (3))){
var inst_48496 = (state_48499[(2)]);
var state_48499__$1 = state_48499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48499__$1,inst_48496);
} else {
if((state_val_48501 === (12))){
var _ = (function (){var statearr_48536 = state_48499;
(statearr_48536[(4)] = cljs.core.rest((state_48499[(4)])));

return statearr_48536;
})();
var state_48499__$1 = state_48499;
var ex48531 = (state_48499__$1[(2)]);
var statearr_48537_50768 = state_48499__$1;
(statearr_48537_50768[(5)] = ex48531);


if((ex48531 instanceof Object)){
var statearr_48538_50769 = state_48499__$1;
(statearr_48538_50769[(1)] = (11));

(statearr_48538_50769[(5)] = null);

} else {
throw ex48531;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (2))){
var inst_48442 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48447 = cnt;
var inst_48451 = (0);
var state_48499__$1 = (function (){var statearr_48542 = state_48499;
(statearr_48542[(11)] = inst_48442);

(statearr_48542[(7)] = inst_48451);

(statearr_48542[(8)] = inst_48447);

return statearr_48542;
})();
var statearr_48543_50778 = state_48499__$1;
(statearr_48543_50778[(2)] = null);

(statearr_48543_50778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (11))){
var inst_48456 = (state_48499[(2)]);
var inst_48457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48499__$1 = (function (){var statearr_48546 = state_48499;
(statearr_48546[(12)] = inst_48456);

return statearr_48546;
})();
var statearr_48547_50786 = state_48499__$1;
(statearr_48547_50786[(2)] = inst_48457);

(statearr_48547_50786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (9))){
var inst_48451 = (state_48499[(7)]);
var _ = (function (){var statearr_48548 = state_48499;
(statearr_48548[(4)] = cljs.core.cons((12),(state_48499[(4)])));

return statearr_48548;
})();
var inst_48463 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48451) : chs__$1.call(null,inst_48451));
var inst_48464 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48451) : done.call(null,inst_48451));
var inst_48465 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48463,inst_48464);
var ___$1 = (function (){var statearr_48551 = state_48499;
(statearr_48551[(4)] = cljs.core.rest((state_48499[(4)])));

return statearr_48551;
})();
var state_48499__$1 = state_48499;
var statearr_48553_50788 = state_48499__$1;
(statearr_48553_50788[(2)] = inst_48465);

(statearr_48553_50788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (5))){
var inst_48475 = (state_48499[(2)]);
var state_48499__$1 = (function (){var statearr_48555 = state_48499;
(statearr_48555[(13)] = inst_48475);

return statearr_48555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48499__$1,(13),dchan);
} else {
if((state_val_48501 === (14))){
var inst_48483 = cljs.core.async.close_BANG_(out);
var state_48499__$1 = state_48499;
var statearr_48556_50795 = state_48499__$1;
(statearr_48556_50795[(2)] = inst_48483);

(statearr_48556_50795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (16))){
var inst_48494 = (state_48499[(2)]);
var state_48499__$1 = state_48499;
var statearr_48557_50800 = state_48499__$1;
(statearr_48557_50800[(2)] = inst_48494);

(statearr_48557_50800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (10))){
var inst_48451 = (state_48499[(7)]);
var inst_48468 = (state_48499[(2)]);
var inst_48469 = (inst_48451 + (1));
var inst_48451__$1 = inst_48469;
var state_48499__$1 = (function (){var statearr_48564 = state_48499;
(statearr_48564[(7)] = inst_48451__$1);

(statearr_48564[(14)] = inst_48468);

return statearr_48564;
})();
var statearr_48569_50806 = state_48499__$1;
(statearr_48569_50806[(2)] = null);

(statearr_48569_50806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48501 === (8))){
var inst_48473 = (state_48499[(2)]);
var state_48499__$1 = state_48499;
var statearr_48574_50807 = state_48499__$1;
(statearr_48574_50807[(2)] = inst_48473);

(statearr_48574_50807[(1)] = (5));


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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_48580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48580[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_48580[(1)] = (1));

return statearr_48580;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_48499){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_48499);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e48582){var ex__29741__auto__ = e48582;
var statearr_48583_50809 = state_48499;
(statearr_48583_50809[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_48499[(4)]))){
var statearr_48584_50811 = state_48499;
(statearr_48584_50811[(1)] = cljs.core.first((state_48499[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50813 = state_48499;
state_48499 = G__50813;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_48499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_48499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_48589 = f__30094__auto__();
(statearr_48589[(6)] = c__30092__auto___50708);

return statearr_48589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
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
var G__48603 = arguments.length;
switch (G__48603) {
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
var c__30092__auto___50818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_48641){
var state_val_48642 = (state_48641[(1)]);
if((state_val_48642 === (7))){
var inst_48620 = (state_48641[(7)]);
var inst_48619 = (state_48641[(8)]);
var inst_48619__$1 = (state_48641[(2)]);
var inst_48620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48619__$1,(0),null);
var inst_48621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48619__$1,(1),null);
var inst_48622 = (inst_48620__$1 == null);
var state_48641__$1 = (function (){var statearr_48643 = state_48641;
(statearr_48643[(7)] = inst_48620__$1);

(statearr_48643[(8)] = inst_48619__$1);

(statearr_48643[(9)] = inst_48621);

return statearr_48643;
})();
if(cljs.core.truth_(inst_48622)){
var statearr_48644_50825 = state_48641__$1;
(statearr_48644_50825[(1)] = (8));

} else {
var statearr_48646_50826 = state_48641__$1;
(statearr_48646_50826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (1))){
var inst_48607 = cljs.core.vec(chs);
var inst_48608 = inst_48607;
var state_48641__$1 = (function (){var statearr_48649 = state_48641;
(statearr_48649[(10)] = inst_48608);

return statearr_48649;
})();
var statearr_48651_50828 = state_48641__$1;
(statearr_48651_50828[(2)] = null);

(statearr_48651_50828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (4))){
var inst_48608 = (state_48641[(10)]);
var state_48641__$1 = state_48641;
return cljs.core.async.ioc_alts_BANG_(state_48641__$1,(7),inst_48608);
} else {
if((state_val_48642 === (6))){
var inst_48637 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48655_50829 = state_48641__$1;
(statearr_48655_50829[(2)] = inst_48637);

(statearr_48655_50829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (3))){
var inst_48639 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48641__$1,inst_48639);
} else {
if((state_val_48642 === (2))){
var inst_48608 = (state_48641[(10)]);
var inst_48611 = cljs.core.count(inst_48608);
var inst_48612 = (inst_48611 > (0));
var state_48641__$1 = state_48641;
if(cljs.core.truth_(inst_48612)){
var statearr_48659_50836 = state_48641__$1;
(statearr_48659_50836[(1)] = (4));

} else {
var statearr_48660_50838 = state_48641__$1;
(statearr_48660_50838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (11))){
var inst_48608 = (state_48641[(10)]);
var inst_48630 = (state_48641[(2)]);
var tmp48656 = inst_48608;
var inst_48608__$1 = tmp48656;
var state_48641__$1 = (function (){var statearr_48661 = state_48641;
(statearr_48661[(10)] = inst_48608__$1);

(statearr_48661[(11)] = inst_48630);

return statearr_48661;
})();
var statearr_48662_50840 = state_48641__$1;
(statearr_48662_50840[(2)] = null);

(statearr_48662_50840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (9))){
var inst_48620 = (state_48641[(7)]);
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48641__$1,(11),out,inst_48620);
} else {
if((state_val_48642 === (5))){
var inst_48635 = cljs.core.async.close_BANG_(out);
var state_48641__$1 = state_48641;
var statearr_48670_50841 = state_48641__$1;
(statearr_48670_50841[(2)] = inst_48635);

(statearr_48670_50841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (10))){
var inst_48633 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48671_50842 = state_48641__$1;
(statearr_48671_50842[(2)] = inst_48633);

(statearr_48671_50842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (8))){
var inst_48620 = (state_48641[(7)]);
var inst_48619 = (state_48641[(8)]);
var inst_48621 = (state_48641[(9)]);
var inst_48608 = (state_48641[(10)]);
var inst_48625 = (function (){var cs = inst_48608;
var vec__48614 = inst_48619;
var v = inst_48620;
var c = inst_48621;
return (function (p1__48590_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48590_SHARP_);
});
})();
var inst_48626 = cljs.core.filterv(inst_48625,inst_48608);
var inst_48608__$1 = inst_48626;
var state_48641__$1 = (function (){var statearr_48679 = state_48641;
(statearr_48679[(10)] = inst_48608__$1);

return statearr_48679;
})();
var statearr_48681_50846 = state_48641__$1;
(statearr_48681_50846[(2)] = null);

(statearr_48681_50846[(1)] = (2));


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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_48684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48684[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_48684[(1)] = (1));

return statearr_48684;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_48641){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_48641);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e48688){var ex__29741__auto__ = e48688;
var statearr_48689_50858 = state_48641;
(statearr_48689_50858[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_48641[(4)]))){
var statearr_48691_50860 = state_48641;
(statearr_48691_50860[(1)] = cljs.core.first((state_48641[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50862 = state_48641;
state_48641 = G__50862;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_48641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_48641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_48701 = f__30094__auto__();
(statearr_48701[(6)] = c__30092__auto___50818);

return statearr_48701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
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
var G__48722 = arguments.length;
switch (G__48722) {
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
var c__30092__auto___50872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_48766){
var state_val_48767 = (state_48766[(1)]);
if((state_val_48767 === (7))){
var inst_48744 = (state_48766[(7)]);
var inst_48744__$1 = (state_48766[(2)]);
var inst_48745 = (inst_48744__$1 == null);
var inst_48746 = cljs.core.not(inst_48745);
var state_48766__$1 = (function (){var statearr_48775 = state_48766;
(statearr_48775[(7)] = inst_48744__$1);

return statearr_48775;
})();
if(inst_48746){
var statearr_48782_50877 = state_48766__$1;
(statearr_48782_50877[(1)] = (8));

} else {
var statearr_48783_50878 = state_48766__$1;
(statearr_48783_50878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (1))){
var inst_48736 = (0);
var state_48766__$1 = (function (){var statearr_48784 = state_48766;
(statearr_48784[(8)] = inst_48736);

return statearr_48784;
})();
var statearr_48785_50879 = state_48766__$1;
(statearr_48785_50879[(2)] = null);

(statearr_48785_50879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (4))){
var state_48766__$1 = state_48766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48766__$1,(7),ch);
} else {
if((state_val_48767 === (6))){
var inst_48761 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
var statearr_48790_50880 = state_48766__$1;
(statearr_48790_50880[(2)] = inst_48761);

(statearr_48790_50880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (3))){
var inst_48763 = (state_48766[(2)]);
var inst_48764 = cljs.core.async.close_BANG_(out);
var state_48766__$1 = (function (){var statearr_48792 = state_48766;
(statearr_48792[(9)] = inst_48763);

return statearr_48792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48766__$1,inst_48764);
} else {
if((state_val_48767 === (2))){
var inst_48736 = (state_48766[(8)]);
var inst_48741 = (inst_48736 < n);
var state_48766__$1 = state_48766;
if(cljs.core.truth_(inst_48741)){
var statearr_48795_50883 = state_48766__$1;
(statearr_48795_50883[(1)] = (4));

} else {
var statearr_48796_50884 = state_48766__$1;
(statearr_48796_50884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (11))){
var inst_48736 = (state_48766[(8)]);
var inst_48752 = (state_48766[(2)]);
var inst_48754 = (inst_48736 + (1));
var inst_48736__$1 = inst_48754;
var state_48766__$1 = (function (){var statearr_48799 = state_48766;
(statearr_48799[(10)] = inst_48752);

(statearr_48799[(8)] = inst_48736__$1);

return statearr_48799;
})();
var statearr_48800_50887 = state_48766__$1;
(statearr_48800_50887[(2)] = null);

(statearr_48800_50887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (9))){
var state_48766__$1 = state_48766;
var statearr_48801_50888 = state_48766__$1;
(statearr_48801_50888[(2)] = null);

(statearr_48801_50888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (5))){
var state_48766__$1 = state_48766;
var statearr_48807_50889 = state_48766__$1;
(statearr_48807_50889[(2)] = null);

(statearr_48807_50889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (10))){
var inst_48758 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
var statearr_48810_50890 = state_48766__$1;
(statearr_48810_50890[(2)] = inst_48758);

(statearr_48810_50890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (8))){
var inst_48744 = (state_48766[(7)]);
var state_48766__$1 = state_48766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48766__$1,(11),out,inst_48744);
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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_48820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48820[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_48820[(1)] = (1));

return statearr_48820;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_48766){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_48766);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e48824){var ex__29741__auto__ = e48824;
var statearr_48826_50898 = state_48766;
(statearr_48826_50898[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_48766[(4)]))){
var statearr_48827_50900 = state_48766;
(statearr_48827_50900[(1)] = cljs.core.first((state_48766[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50901 = state_48766;
state_48766 = G__50901;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_48766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_48766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_48828 = f__30094__auto__();
(statearr_48828[(6)] = c__30092__auto___50872);

return statearr_48828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48835 = (function (f,ch,meta48836){
this.f = f;
this.ch = ch;
this.meta48836 = meta48836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48837,meta48836__$1){
var self__ = this;
var _48837__$1 = this;
return (new cljs.core.async.t_cljs$core$async48835(self__.f,self__.ch,meta48836__$1));
}));

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48837){
var self__ = this;
var _48837__$1 = this;
return self__.meta48836;
}));

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48851 = (function (f,ch,meta48836,_,fn1,meta48854){
this.f = f;
this.ch = ch;
this.meta48836 = meta48836;
this._ = _;
this.fn1 = fn1;
this.meta48854 = meta48854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48855,meta48854__$1){
var self__ = this;
var _48855__$1 = this;
return (new cljs.core.async.t_cljs$core$async48851(self__.f,self__.ch,self__.meta48836,self__._,self__.fn1,meta48854__$1));
}));

(cljs.core.async.t_cljs$core$async48851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48855){
var self__ = this;
var _48855__$1 = this;
return self__.meta48854;
}));

(cljs.core.async.t_cljs$core$async48851.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48832_SHARP_){
var G__48862 = (((p1__48832_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48832_SHARP_) : self__.f.call(null,p1__48832_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48862) : f1.call(null,G__48862));
});
}));

(cljs.core.async.t_cljs$core$async48851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48836","meta48836",333675500,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48835","cljs.core.async/t_cljs$core$async48835",-524968726,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48854","meta48854",1181076558,null)], null);
}));

(cljs.core.async.t_cljs$core$async48851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48851");

(cljs.core.async.t_cljs$core$async48851.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48851.
 */
cljs.core.async.__GT_t_cljs$core$async48851 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48851(f__$1,ch__$1,meta48836__$1,___$2,fn1__$1,meta48854){
return (new cljs.core.async.t_cljs$core$async48851(f__$1,ch__$1,meta48836__$1,___$2,fn1__$1,meta48854));
});

}

return (new cljs.core.async.t_cljs$core$async48851(self__.f,self__.ch,self__.meta48836,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48877 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48877) : self__.f.call(null,G__48877));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48836","meta48836",333675500,null)], null);
}));

(cljs.core.async.t_cljs$core$async48835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48835");

(cljs.core.async.t_cljs$core$async48835.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48835.
 */
cljs.core.async.__GT_t_cljs$core$async48835 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48835(f__$1,ch__$1,meta48836){
return (new cljs.core.async.t_cljs$core$async48835(f__$1,ch__$1,meta48836));
});

}

return (new cljs.core.async.t_cljs$core$async48835(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48901 = (function (f,ch,meta48902){
this.f = f;
this.ch = ch;
this.meta48902 = meta48902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48903,meta48902__$1){
var self__ = this;
var _48903__$1 = this;
return (new cljs.core.async.t_cljs$core$async48901(self__.f,self__.ch,meta48902__$1));
}));

(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48903){
var self__ = this;
var _48903__$1 = this;
return self__.meta48902;
}));

(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48902","meta48902",736624404,null)], null);
}));

(cljs.core.async.t_cljs$core$async48901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48901");

(cljs.core.async.t_cljs$core$async48901.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48901.
 */
cljs.core.async.__GT_t_cljs$core$async48901 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48901(f__$1,ch__$1,meta48902){
return (new cljs.core.async.t_cljs$core$async48901(f__$1,ch__$1,meta48902));
});

}

return (new cljs.core.async.t_cljs$core$async48901(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48930 = (function (p,ch,meta48931){
this.p = p;
this.ch = ch;
this.meta48931 = meta48931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48932,meta48931__$1){
var self__ = this;
var _48932__$1 = this;
return (new cljs.core.async.t_cljs$core$async48930(self__.p,self__.ch,meta48931__$1));
}));

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48932){
var self__ = this;
var _48932__$1 = this;
return self__.meta48931;
}));

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48931","meta48931",-153436613,null)], null);
}));

(cljs.core.async.t_cljs$core$async48930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48930");

(cljs.core.async.t_cljs$core$async48930.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48930.
 */
cljs.core.async.__GT_t_cljs$core$async48930 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48930(p__$1,ch__$1,meta48931){
return (new cljs.core.async.t_cljs$core$async48930(p__$1,ch__$1,meta48931));
});

}

return (new cljs.core.async.t_cljs$core$async48930(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48956 = arguments.length;
switch (G__48956) {
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
var c__30092__auto___51002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_48981){
var state_val_48982 = (state_48981[(1)]);
if((state_val_48982 === (7))){
var inst_48977 = (state_48981[(2)]);
var state_48981__$1 = state_48981;
var statearr_48986_51004 = state_48981__$1;
(statearr_48986_51004[(2)] = inst_48977);

(statearr_48986_51004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (1))){
var state_48981__$1 = state_48981;
var statearr_48988_51011 = state_48981__$1;
(statearr_48988_51011[(2)] = null);

(statearr_48988_51011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (4))){
var inst_48963 = (state_48981[(7)]);
var inst_48963__$1 = (state_48981[(2)]);
var inst_48964 = (inst_48963__$1 == null);
var state_48981__$1 = (function (){var statearr_48990 = state_48981;
(statearr_48990[(7)] = inst_48963__$1);

return statearr_48990;
})();
if(cljs.core.truth_(inst_48964)){
var statearr_48991_51019 = state_48981__$1;
(statearr_48991_51019[(1)] = (5));

} else {
var statearr_48992_51021 = state_48981__$1;
(statearr_48992_51021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (6))){
var inst_48963 = (state_48981[(7)]);
var inst_48968 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48963) : p.call(null,inst_48963));
var state_48981__$1 = state_48981;
if(cljs.core.truth_(inst_48968)){
var statearr_48993_51033 = state_48981__$1;
(statearr_48993_51033[(1)] = (8));

} else {
var statearr_48997_51034 = state_48981__$1;
(statearr_48997_51034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (3))){
var inst_48979 = (state_48981[(2)]);
var state_48981__$1 = state_48981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48981__$1,inst_48979);
} else {
if((state_val_48982 === (2))){
var state_48981__$1 = state_48981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48981__$1,(4),ch);
} else {
if((state_val_48982 === (11))){
var inst_48971 = (state_48981[(2)]);
var state_48981__$1 = state_48981;
var statearr_49002_51048 = state_48981__$1;
(statearr_49002_51048[(2)] = inst_48971);

(statearr_49002_51048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (9))){
var state_48981__$1 = state_48981;
var statearr_49005_51049 = state_48981__$1;
(statearr_49005_51049[(2)] = null);

(statearr_49005_51049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (5))){
var inst_48966 = cljs.core.async.close_BANG_(out);
var state_48981__$1 = state_48981;
var statearr_49006_51052 = state_48981__$1;
(statearr_49006_51052[(2)] = inst_48966);

(statearr_49006_51052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (10))){
var inst_48974 = (state_48981[(2)]);
var state_48981__$1 = (function (){var statearr_49010 = state_48981;
(statearr_49010[(8)] = inst_48974);

return statearr_49010;
})();
var statearr_49012_51053 = state_48981__$1;
(statearr_49012_51053[(2)] = null);

(statearr_49012_51053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48982 === (8))){
var inst_48963 = (state_48981[(7)]);
var state_48981__$1 = state_48981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48981__$1,(11),out,inst_48963);
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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_49014 = [null,null,null,null,null,null,null,null,null];
(statearr_49014[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_49014[(1)] = (1));

return statearr_49014;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_48981){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_48981);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e49015){var ex__29741__auto__ = e49015;
var statearr_49019_51070 = state_48981;
(statearr_49019_51070[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_48981[(4)]))){
var statearr_49020_51076 = state_48981;
(statearr_49020_51076[(1)] = cljs.core.first((state_48981[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51083 = state_48981;
state_48981 = G__51083;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_48981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_48981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_49026 = f__30094__auto__();
(statearr_49026[(6)] = c__30092__auto___51002);

return statearr_49026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49028 = arguments.length;
switch (G__49028) {
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
var c__30092__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_49116){
var state_val_49118 = (state_49116[(1)]);
if((state_val_49118 === (7))){
var inst_49111 = (state_49116[(2)]);
var state_49116__$1 = state_49116;
var statearr_49121_51114 = state_49116__$1;
(statearr_49121_51114[(2)] = inst_49111);

(statearr_49121_51114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (20))){
var inst_49076 = (state_49116[(7)]);
var inst_49091 = (state_49116[(2)]);
var inst_49093 = cljs.core.next(inst_49076);
var inst_49054 = inst_49093;
var inst_49055 = null;
var inst_49056 = (0);
var inst_49057 = (0);
var state_49116__$1 = (function (){var statearr_49123 = state_49116;
(statearr_49123[(8)] = inst_49056);

(statearr_49123[(9)] = inst_49054);

(statearr_49123[(10)] = inst_49091);

(statearr_49123[(11)] = inst_49057);

(statearr_49123[(12)] = inst_49055);

return statearr_49123;
})();
var statearr_49127_51127 = state_49116__$1;
(statearr_49127_51127[(2)] = null);

(statearr_49127_51127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (1))){
var state_49116__$1 = state_49116;
var statearr_49129_51136 = state_49116__$1;
(statearr_49129_51136[(2)] = null);

(statearr_49129_51136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (4))){
var inst_49043 = (state_49116[(13)]);
var inst_49043__$1 = (state_49116[(2)]);
var inst_49044 = (inst_49043__$1 == null);
var state_49116__$1 = (function (){var statearr_49131 = state_49116;
(statearr_49131[(13)] = inst_49043__$1);

return statearr_49131;
})();
if(cljs.core.truth_(inst_49044)){
var statearr_49135_51148 = state_49116__$1;
(statearr_49135_51148[(1)] = (5));

} else {
var statearr_49136_51149 = state_49116__$1;
(statearr_49136_51149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (15))){
var state_49116__$1 = state_49116;
var statearr_49151_51150 = state_49116__$1;
(statearr_49151_51150[(2)] = null);

(statearr_49151_51150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (21))){
var state_49116__$1 = state_49116;
var statearr_49158_51153 = state_49116__$1;
(statearr_49158_51153[(2)] = null);

(statearr_49158_51153[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (13))){
var inst_49056 = (state_49116[(8)]);
var inst_49054 = (state_49116[(9)]);
var inst_49057 = (state_49116[(11)]);
var inst_49055 = (state_49116[(12)]);
var inst_49066 = (state_49116[(2)]);
var inst_49069 = (inst_49057 + (1));
var tmp49140 = inst_49056;
var tmp49141 = inst_49054;
var tmp49142 = inst_49055;
var inst_49054__$1 = tmp49141;
var inst_49055__$1 = tmp49142;
var inst_49056__$1 = tmp49140;
var inst_49057__$1 = inst_49069;
var state_49116__$1 = (function (){var statearr_49166 = state_49116;
(statearr_49166[(8)] = inst_49056__$1);

(statearr_49166[(9)] = inst_49054__$1);

(statearr_49166[(14)] = inst_49066);

(statearr_49166[(11)] = inst_49057__$1);

(statearr_49166[(12)] = inst_49055__$1);

return statearr_49166;
})();
var statearr_49167_51159 = state_49116__$1;
(statearr_49167_51159[(2)] = null);

(statearr_49167_51159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (22))){
var state_49116__$1 = state_49116;
var statearr_49168_51161 = state_49116__$1;
(statearr_49168_51161[(2)] = null);

(statearr_49168_51161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (6))){
var inst_49043 = (state_49116[(13)]);
var inst_49052 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49043) : f.call(null,inst_49043));
var inst_49053 = cljs.core.seq(inst_49052);
var inst_49054 = inst_49053;
var inst_49055 = null;
var inst_49056 = (0);
var inst_49057 = (0);
var state_49116__$1 = (function (){var statearr_49184 = state_49116;
(statearr_49184[(8)] = inst_49056);

(statearr_49184[(9)] = inst_49054);

(statearr_49184[(11)] = inst_49057);

(statearr_49184[(12)] = inst_49055);

return statearr_49184;
})();
var statearr_49194_51167 = state_49116__$1;
(statearr_49194_51167[(2)] = null);

(statearr_49194_51167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (17))){
var inst_49076 = (state_49116[(7)]);
var inst_49083 = cljs.core.chunk_first(inst_49076);
var inst_49084 = cljs.core.chunk_rest(inst_49076);
var inst_49085 = cljs.core.count(inst_49083);
var inst_49054 = inst_49084;
var inst_49055 = inst_49083;
var inst_49056 = inst_49085;
var inst_49057 = (0);
var state_49116__$1 = (function (){var statearr_49201 = state_49116;
(statearr_49201[(8)] = inst_49056);

(statearr_49201[(9)] = inst_49054);

(statearr_49201[(11)] = inst_49057);

(statearr_49201[(12)] = inst_49055);

return statearr_49201;
})();
var statearr_49204_51175 = state_49116__$1;
(statearr_49204_51175[(2)] = null);

(statearr_49204_51175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (3))){
var inst_49113 = (state_49116[(2)]);
var state_49116__$1 = state_49116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49116__$1,inst_49113);
} else {
if((state_val_49118 === (12))){
var inst_49101 = (state_49116[(2)]);
var state_49116__$1 = state_49116;
var statearr_49207_51176 = state_49116__$1;
(statearr_49207_51176[(2)] = inst_49101);

(statearr_49207_51176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (2))){
var state_49116__$1 = state_49116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49116__$1,(4),in$);
} else {
if((state_val_49118 === (23))){
var inst_49109 = (state_49116[(2)]);
var state_49116__$1 = state_49116;
var statearr_49208_51180 = state_49116__$1;
(statearr_49208_51180[(2)] = inst_49109);

(statearr_49208_51180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (19))){
var inst_49096 = (state_49116[(2)]);
var state_49116__$1 = state_49116;
var statearr_49209_51183 = state_49116__$1;
(statearr_49209_51183[(2)] = inst_49096);

(statearr_49209_51183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (11))){
var inst_49054 = (state_49116[(9)]);
var inst_49076 = (state_49116[(7)]);
var inst_49076__$1 = cljs.core.seq(inst_49054);
var state_49116__$1 = (function (){var statearr_49210 = state_49116;
(statearr_49210[(7)] = inst_49076__$1);

return statearr_49210;
})();
if(inst_49076__$1){
var statearr_49214_51191 = state_49116__$1;
(statearr_49214_51191[(1)] = (14));

} else {
var statearr_49215_51192 = state_49116__$1;
(statearr_49215_51192[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (9))){
var inst_49103 = (state_49116[(2)]);
var inst_49104 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49116__$1 = (function (){var statearr_49218 = state_49116;
(statearr_49218[(15)] = inst_49103);

return statearr_49218;
})();
if(cljs.core.truth_(inst_49104)){
var statearr_49221_51194 = state_49116__$1;
(statearr_49221_51194[(1)] = (21));

} else {
var statearr_49222_51195 = state_49116__$1;
(statearr_49222_51195[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (5))){
var inst_49046 = cljs.core.async.close_BANG_(out);
var state_49116__$1 = state_49116;
var statearr_49223_51198 = state_49116__$1;
(statearr_49223_51198[(2)] = inst_49046);

(statearr_49223_51198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (14))){
var inst_49076 = (state_49116[(7)]);
var inst_49078 = cljs.core.chunked_seq_QMARK_(inst_49076);
var state_49116__$1 = state_49116;
if(inst_49078){
var statearr_49227_51200 = state_49116__$1;
(statearr_49227_51200[(1)] = (17));

} else {
var statearr_49228_51201 = state_49116__$1;
(statearr_49228_51201[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (16))){
var inst_49099 = (state_49116[(2)]);
var state_49116__$1 = state_49116;
var statearr_49229_51202 = state_49116__$1;
(statearr_49229_51202[(2)] = inst_49099);

(statearr_49229_51202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49118 === (10))){
var inst_49057 = (state_49116[(11)]);
var inst_49055 = (state_49116[(12)]);
var inst_49063 = cljs.core._nth(inst_49055,inst_49057);
var state_49116__$1 = state_49116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49116__$1,(13),out,inst_49063);
} else {
if((state_val_49118 === (18))){
var inst_49076 = (state_49116[(7)]);
var inst_49089 = cljs.core.first(inst_49076);
var state_49116__$1 = state_49116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49116__$1,(20),out,inst_49089);
} else {
if((state_val_49118 === (8))){
var inst_49056 = (state_49116[(8)]);
var inst_49057 = (state_49116[(11)]);
var inst_49059 = (inst_49057 < inst_49056);
var inst_49060 = inst_49059;
var state_49116__$1 = state_49116;
if(cljs.core.truth_(inst_49060)){
var statearr_49236_51210 = state_49116__$1;
(statearr_49236_51210[(1)] = (10));

} else {
var statearr_49237_51211 = state_49116__$1;
(statearr_49237_51211[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29738__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29738__auto____0 = (function (){
var statearr_49242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49242[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29738__auto__);

(statearr_49242[(1)] = (1));

return statearr_49242;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29738__auto____1 = (function (state_49116){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_49116);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e49254){var ex__29741__auto__ = e49254;
var statearr_49262_51213 = state_49116;
(statearr_49262_51213[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_49116[(4)]))){
var statearr_49278_51214 = state_49116;
(statearr_49278_51214[(1)] = cljs.core.first((state_49116[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51216 = state_49116;
state_49116 = G__51216;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29738__auto__ = function(state_49116){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29738__auto____1.call(this,state_49116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29738__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29738__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_49285 = f__30094__auto__();
(statearr_49285[(6)] = c__30092__auto__);

return statearr_49285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));

return c__30092__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49291 = arguments.length;
switch (G__49291) {
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
var G__49311 = arguments.length;
switch (G__49311) {
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
var G__49318 = arguments.length;
switch (G__49318) {
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
var c__30092__auto___51229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_49346){
var state_val_49347 = (state_49346[(1)]);
if((state_val_49347 === (7))){
var inst_49341 = (state_49346[(2)]);
var state_49346__$1 = state_49346;
var statearr_49351_51231 = state_49346__$1;
(statearr_49351_51231[(2)] = inst_49341);

(statearr_49351_51231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49347 === (1))){
var inst_49319 = null;
var state_49346__$1 = (function (){var statearr_49354 = state_49346;
(statearr_49354[(7)] = inst_49319);

return statearr_49354;
})();
var statearr_49355_51232 = state_49346__$1;
(statearr_49355_51232[(2)] = null);

(statearr_49355_51232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49347 === (4))){
var inst_49324 = (state_49346[(8)]);
var inst_49324__$1 = (state_49346[(2)]);
var inst_49327 = (inst_49324__$1 == null);
var inst_49328 = cljs.core.not(inst_49327);
var state_49346__$1 = (function (){var statearr_49358 = state_49346;
(statearr_49358[(8)] = inst_49324__$1);

return statearr_49358;
})();
if(inst_49328){
var statearr_49360_51236 = state_49346__$1;
(statearr_49360_51236[(1)] = (5));

} else {
var statearr_49361_51237 = state_49346__$1;
(statearr_49361_51237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49347 === (6))){
var state_49346__$1 = state_49346;
var statearr_49365_51238 = state_49346__$1;
(statearr_49365_51238[(2)] = null);

(statearr_49365_51238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49347 === (3))){
var inst_49343 = (state_49346[(2)]);
var inst_49344 = cljs.core.async.close_BANG_(out);
var state_49346__$1 = (function (){var statearr_49369 = state_49346;
(statearr_49369[(9)] = inst_49343);

return statearr_49369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49346__$1,inst_49344);
} else {
if((state_val_49347 === (2))){
var state_49346__$1 = state_49346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49346__$1,(4),ch);
} else {
if((state_val_49347 === (11))){
var inst_49324 = (state_49346[(8)]);
var inst_49335 = (state_49346[(2)]);
var inst_49319 = inst_49324;
var state_49346__$1 = (function (){var statearr_49373 = state_49346;
(statearr_49373[(7)] = inst_49319);

(statearr_49373[(10)] = inst_49335);

return statearr_49373;
})();
var statearr_49375_51249 = state_49346__$1;
(statearr_49375_51249[(2)] = null);

(statearr_49375_51249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49347 === (9))){
var inst_49324 = (state_49346[(8)]);
var state_49346__$1 = state_49346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49346__$1,(11),out,inst_49324);
} else {
if((state_val_49347 === (5))){
var inst_49319 = (state_49346[(7)]);
var inst_49324 = (state_49346[(8)]);
var inst_49330 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49324,inst_49319);
var state_49346__$1 = state_49346;
if(inst_49330){
var statearr_49381_51254 = state_49346__$1;
(statearr_49381_51254[(1)] = (8));

} else {
var statearr_49382_51255 = state_49346__$1;
(statearr_49382_51255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49347 === (10))){
var inst_49338 = (state_49346[(2)]);
var state_49346__$1 = state_49346;
var statearr_49389_51258 = state_49346__$1;
(statearr_49389_51258[(2)] = inst_49338);

(statearr_49389_51258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49347 === (8))){
var inst_49319 = (state_49346[(7)]);
var tmp49377 = inst_49319;
var inst_49319__$1 = tmp49377;
var state_49346__$1 = (function (){var statearr_49390 = state_49346;
(statearr_49390[(7)] = inst_49319__$1);

return statearr_49390;
})();
var statearr_49391_51271 = state_49346__$1;
(statearr_49391_51271[(2)] = null);

(statearr_49391_51271[(1)] = (2));


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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_49392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49392[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_49392[(1)] = (1));

return statearr_49392;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_49346){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_49346);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e49393){var ex__29741__auto__ = e49393;
var statearr_49394_51278 = state_49346;
(statearr_49394_51278[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_49346[(4)]))){
var statearr_49395_51281 = state_49346;
(statearr_49395_51281[(1)] = cljs.core.first((state_49346[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51282 = state_49346;
state_49346 = G__51282;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_49346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_49346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_49397 = f__30094__auto__();
(statearr_49397[(6)] = c__30092__auto___51229);

return statearr_49397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49403 = arguments.length;
switch (G__49403) {
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
var c__30092__auto___51287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_49461){
var state_val_49462 = (state_49461[(1)]);
if((state_val_49462 === (7))){
var inst_49451 = (state_49461[(2)]);
var state_49461__$1 = state_49461;
var statearr_49466_51297 = state_49461__$1;
(statearr_49466_51297[(2)] = inst_49451);

(statearr_49466_51297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (1))){
var inst_49411 = (new Array(n));
var inst_49412 = inst_49411;
var inst_49413 = (0);
var state_49461__$1 = (function (){var statearr_49474 = state_49461;
(statearr_49474[(7)] = inst_49413);

(statearr_49474[(8)] = inst_49412);

return statearr_49474;
})();
var statearr_49478_51298 = state_49461__$1;
(statearr_49478_51298[(2)] = null);

(statearr_49478_51298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (4))){
var inst_49420 = (state_49461[(9)]);
var inst_49420__$1 = (state_49461[(2)]);
var inst_49424 = (inst_49420__$1 == null);
var inst_49425 = cljs.core.not(inst_49424);
var state_49461__$1 = (function (){var statearr_49479 = state_49461;
(statearr_49479[(9)] = inst_49420__$1);

return statearr_49479;
})();
if(inst_49425){
var statearr_49481_51306 = state_49461__$1;
(statearr_49481_51306[(1)] = (5));

} else {
var statearr_49485_51311 = state_49461__$1;
(statearr_49485_51311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (15))){
var inst_49445 = (state_49461[(2)]);
var state_49461__$1 = state_49461;
var statearr_49497_51316 = state_49461__$1;
(statearr_49497_51316[(2)] = inst_49445);

(statearr_49497_51316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (13))){
var state_49461__$1 = state_49461;
var statearr_49501_51317 = state_49461__$1;
(statearr_49501_51317[(2)] = null);

(statearr_49501_51317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (6))){
var inst_49413 = (state_49461[(7)]);
var inst_49441 = (inst_49413 > (0));
var state_49461__$1 = state_49461;
if(cljs.core.truth_(inst_49441)){
var statearr_49512_51326 = state_49461__$1;
(statearr_49512_51326[(1)] = (12));

} else {
var statearr_49513_51327 = state_49461__$1;
(statearr_49513_51327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (3))){
var inst_49453 = (state_49461[(2)]);
var state_49461__$1 = state_49461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49461__$1,inst_49453);
} else {
if((state_val_49462 === (12))){
var inst_49412 = (state_49461[(8)]);
var inst_49443 = cljs.core.vec(inst_49412);
var state_49461__$1 = state_49461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49461__$1,(15),out,inst_49443);
} else {
if((state_val_49462 === (2))){
var state_49461__$1 = state_49461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49461__$1,(4),ch);
} else {
if((state_val_49462 === (11))){
var inst_49435 = (state_49461[(2)]);
var inst_49436 = (new Array(n));
var inst_49412 = inst_49436;
var inst_49413 = (0);
var state_49461__$1 = (function (){var statearr_49520 = state_49461;
(statearr_49520[(7)] = inst_49413);

(statearr_49520[(8)] = inst_49412);

(statearr_49520[(10)] = inst_49435);

return statearr_49520;
})();
var statearr_49521_51329 = state_49461__$1;
(statearr_49521_51329[(2)] = null);

(statearr_49521_51329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (9))){
var inst_49412 = (state_49461[(8)]);
var inst_49433 = cljs.core.vec(inst_49412);
var state_49461__$1 = state_49461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49461__$1,(11),out,inst_49433);
} else {
if((state_val_49462 === (5))){
var inst_49420 = (state_49461[(9)]);
var inst_49413 = (state_49461[(7)]);
var inst_49412 = (state_49461[(8)]);
var inst_49428 = (state_49461[(11)]);
var inst_49427 = (inst_49412[inst_49413] = inst_49420);
var inst_49428__$1 = (inst_49413 + (1));
var inst_49429 = (inst_49428__$1 < n);
var state_49461__$1 = (function (){var statearr_49524 = state_49461;
(statearr_49524[(12)] = inst_49427);

(statearr_49524[(11)] = inst_49428__$1);

return statearr_49524;
})();
if(cljs.core.truth_(inst_49429)){
var statearr_49525_51338 = state_49461__$1;
(statearr_49525_51338[(1)] = (8));

} else {
var statearr_49526_51343 = state_49461__$1;
(statearr_49526_51343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (14))){
var inst_49448 = (state_49461[(2)]);
var inst_49449 = cljs.core.async.close_BANG_(out);
var state_49461__$1 = (function (){var statearr_49532 = state_49461;
(statearr_49532[(13)] = inst_49448);

return statearr_49532;
})();
var statearr_49533_51344 = state_49461__$1;
(statearr_49533_51344[(2)] = inst_49449);

(statearr_49533_51344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (10))){
var inst_49439 = (state_49461[(2)]);
var state_49461__$1 = state_49461;
var statearr_49534_51349 = state_49461__$1;
(statearr_49534_51349[(2)] = inst_49439);

(statearr_49534_51349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49462 === (8))){
var inst_49412 = (state_49461[(8)]);
var inst_49428 = (state_49461[(11)]);
var tmp49528 = inst_49412;
var inst_49412__$1 = tmp49528;
var inst_49413 = inst_49428;
var state_49461__$1 = (function (){var statearr_49535 = state_49461;
(statearr_49535[(7)] = inst_49413);

(statearr_49535[(8)] = inst_49412__$1);

return statearr_49535;
})();
var statearr_49536_51350 = state_49461__$1;
(statearr_49536_51350[(2)] = null);

(statearr_49536_51350[(1)] = (2));


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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_49537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49537[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_49537[(1)] = (1));

return statearr_49537;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_49461){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_49461);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e49538){var ex__29741__auto__ = e49538;
var statearr_49539_51352 = state_49461;
(statearr_49539_51352[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_49461[(4)]))){
var statearr_49540_51353 = state_49461;
(statearr_49540_51353[(1)] = cljs.core.first((state_49461[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51354 = state_49461;
state_49461 = G__51354;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_49461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_49461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_49547 = f__30094__auto__();
(statearr_49547[(6)] = c__30092__auto___51287);

return statearr_49547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49549 = arguments.length;
switch (G__49549) {
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
var c__30092__auto___51356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30094__auto__ = (function (){var switch__29737__auto__ = (function (state_49641){
var state_val_49642 = (state_49641[(1)]);
if((state_val_49642 === (7))){
var inst_49625 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
var statearr_49644_51357 = state_49641__$1;
(statearr_49644_51357[(2)] = inst_49625);

(statearr_49644_51357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (1))){
var inst_49565 = [];
var inst_49576 = inst_49565;
var inst_49577 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49641__$1 = (function (){var statearr_49645 = state_49641;
(statearr_49645[(7)] = inst_49577);

(statearr_49645[(8)] = inst_49576);

return statearr_49645;
})();
var statearr_49646_51359 = state_49641__$1;
(statearr_49646_51359[(2)] = null);

(statearr_49646_51359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (4))){
var inst_49586 = (state_49641[(9)]);
var inst_49586__$1 = (state_49641[(2)]);
var inst_49587 = (inst_49586__$1 == null);
var inst_49588 = cljs.core.not(inst_49587);
var state_49641__$1 = (function (){var statearr_49647 = state_49641;
(statearr_49647[(9)] = inst_49586__$1);

return statearr_49647;
})();
if(inst_49588){
var statearr_49648_51360 = state_49641__$1;
(statearr_49648_51360[(1)] = (5));

} else {
var statearr_49649_51361 = state_49641__$1;
(statearr_49649_51361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (15))){
var inst_49576 = (state_49641[(8)]);
var inst_49616 = cljs.core.vec(inst_49576);
var state_49641__$1 = state_49641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49641__$1,(18),out,inst_49616);
} else {
if((state_val_49642 === (13))){
var inst_49611 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
var statearr_49650_51362 = state_49641__$1;
(statearr_49650_51362[(2)] = inst_49611);

(statearr_49650_51362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (6))){
var inst_49576 = (state_49641[(8)]);
var inst_49613 = inst_49576.length;
var inst_49614 = (inst_49613 > (0));
var state_49641__$1 = state_49641;
if(cljs.core.truth_(inst_49614)){
var statearr_49651_51363 = state_49641__$1;
(statearr_49651_51363[(1)] = (15));

} else {
var statearr_49652_51364 = state_49641__$1;
(statearr_49652_51364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (17))){
var inst_49622 = (state_49641[(2)]);
var inst_49623 = cljs.core.async.close_BANG_(out);
var state_49641__$1 = (function (){var statearr_49654 = state_49641;
(statearr_49654[(10)] = inst_49622);

return statearr_49654;
})();
var statearr_49655_51367 = state_49641__$1;
(statearr_49655_51367[(2)] = inst_49623);

(statearr_49655_51367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (3))){
var inst_49627 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49641__$1,inst_49627);
} else {
if((state_val_49642 === (12))){
var inst_49576 = (state_49641[(8)]);
var inst_49603 = cljs.core.vec(inst_49576);
var state_49641__$1 = state_49641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49641__$1,(14),out,inst_49603);
} else {
if((state_val_49642 === (2))){
var state_49641__$1 = state_49641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49641__$1,(4),ch);
} else {
if((state_val_49642 === (11))){
var inst_49590 = (state_49641[(11)]);
var inst_49576 = (state_49641[(8)]);
var inst_49586 = (state_49641[(9)]);
var inst_49598 = inst_49576.push(inst_49586);
var tmp49658 = inst_49576;
var inst_49576__$1 = tmp49658;
var inst_49577 = inst_49590;
var state_49641__$1 = (function (){var statearr_49667 = state_49641;
(statearr_49667[(7)] = inst_49577);

(statearr_49667[(8)] = inst_49576__$1);

(statearr_49667[(12)] = inst_49598);

return statearr_49667;
})();
var statearr_49668_51394 = state_49641__$1;
(statearr_49668_51394[(2)] = null);

(statearr_49668_51394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (9))){
var inst_49577 = (state_49641[(7)]);
var inst_49594 = cljs.core.keyword_identical_QMARK_(inst_49577,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49641__$1 = state_49641;
var statearr_49669_51401 = state_49641__$1;
(statearr_49669_51401[(2)] = inst_49594);

(statearr_49669_51401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (5))){
var inst_49590 = (state_49641[(11)]);
var inst_49577 = (state_49641[(7)]);
var inst_49591 = (state_49641[(13)]);
var inst_49586 = (state_49641[(9)]);
var inst_49590__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49586) : f.call(null,inst_49586));
var inst_49591__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49590__$1,inst_49577);
var state_49641__$1 = (function (){var statearr_49673 = state_49641;
(statearr_49673[(11)] = inst_49590__$1);

(statearr_49673[(13)] = inst_49591__$1);

return statearr_49673;
})();
if(inst_49591__$1){
var statearr_49674_51409 = state_49641__$1;
(statearr_49674_51409[(1)] = (8));

} else {
var statearr_49675_51410 = state_49641__$1;
(statearr_49675_51410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (14))){
var inst_49590 = (state_49641[(11)]);
var inst_49586 = (state_49641[(9)]);
var inst_49605 = (state_49641[(2)]);
var inst_49606 = [];
var inst_49608 = inst_49606.push(inst_49586);
var inst_49576 = inst_49606;
var inst_49577 = inst_49590;
var state_49641__$1 = (function (){var statearr_49676 = state_49641;
(statearr_49676[(7)] = inst_49577);

(statearr_49676[(8)] = inst_49576);

(statearr_49676[(14)] = inst_49605);

(statearr_49676[(15)] = inst_49608);

return statearr_49676;
})();
var statearr_49677_51411 = state_49641__$1;
(statearr_49677_51411[(2)] = null);

(statearr_49677_51411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (16))){
var state_49641__$1 = state_49641;
var statearr_49678_51413 = state_49641__$1;
(statearr_49678_51413[(2)] = null);

(statearr_49678_51413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (10))){
var inst_49596 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
if(cljs.core.truth_(inst_49596)){
var statearr_49679_51414 = state_49641__$1;
(statearr_49679_51414[(1)] = (11));

} else {
var statearr_49680_51415 = state_49641__$1;
(statearr_49680_51415[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (18))){
var inst_49618 = (state_49641[(2)]);
var state_49641__$1 = state_49641;
var statearr_49691_51416 = state_49641__$1;
(statearr_49691_51416[(2)] = inst_49618);

(statearr_49691_51416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49642 === (8))){
var inst_49591 = (state_49641[(13)]);
var state_49641__$1 = state_49641;
var statearr_49695_51417 = state_49641__$1;
(statearr_49695_51417[(2)] = inst_49591);

(statearr_49695_51417[(1)] = (10));


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
var cljs$core$async$state_machine__29738__auto__ = null;
var cljs$core$async$state_machine__29738__auto____0 = (function (){
var statearr_49703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49703[(0)] = cljs$core$async$state_machine__29738__auto__);

(statearr_49703[(1)] = (1));

return statearr_49703;
});
var cljs$core$async$state_machine__29738__auto____1 = (function (state_49641){
while(true){
var ret_value__29739__auto__ = (function (){try{while(true){
var result__29740__auto__ = switch__29737__auto__(state_49641);
if(cljs.core.keyword_identical_QMARK_(result__29740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29740__auto__;
}
break;
}
}catch (e49705){var ex__29741__auto__ = e49705;
var statearr_49706_51418 = state_49641;
(statearr_49706_51418[(2)] = ex__29741__auto__);


if(cljs.core.seq((state_49641[(4)]))){
var statearr_49707_51419 = state_49641;
(statearr_49707_51419[(1)] = cljs.core.first((state_49641[(4)])));

} else {
throw ex__29741__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51420 = state_49641;
state_49641 = G__51420;
continue;
} else {
return ret_value__29739__auto__;
}
break;
}
});
cljs$core$async$state_machine__29738__auto__ = function(state_49641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29738__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29738__auto____1.call(this,state_49641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29738__auto____0;
cljs$core$async$state_machine__29738__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29738__auto____1;
return cljs$core$async$state_machine__29738__auto__;
})()
})();
var state__30095__auto__ = (function (){var statearr_49708 = f__30094__auto__();
(statearr_49708[(6)] = c__30092__auto___51356);

return statearr_49708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30095__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
