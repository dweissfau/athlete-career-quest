goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30804 = (function (f,blockable,meta30805){
this.f = f;
this.blockable = blockable;
this.meta30805 = meta30805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30806,meta30805__$1){
var self__ = this;
var _30806__$1 = this;
return (new cljs.core.async.t_cljs$core$async30804(self__.f,self__.blockable,meta30805__$1));
}));

(cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30806){
var self__ = this;
var _30806__$1 = this;
return self__.meta30805;
}));

(cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30805","meta30805",1442163941,null)], null);
}));

(cljs.core.async.t_cljs$core$async30804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30804");

(cljs.core.async.t_cljs$core$async30804.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30804.
 */
cljs.core.async.__GT_t_cljs$core$async30804 = (function cljs$core$async$__GT_t_cljs$core$async30804(f,blockable,meta30805){
return (new cljs.core.async.t_cljs$core$async30804(f,blockable,meta30805));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30796 = arguments.length;
switch (G__30796) {
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
return (new cljs.core.async.t_cljs$core$async30804(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30845 = arguments.length;
switch (G__30845) {
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
var G__30862 = arguments.length;
switch (G__30862) {
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
var G__30901 = arguments.length;
switch (G__30901) {
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
var val_34880 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34880) : fn1.call(null,val_34880));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34880) : fn1.call(null,val_34880));
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
var G__30925 = arguments.length;
switch (G__30925) {
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
var n__5636__auto___34887 = n;
var x_34888 = (0);
while(true){
if((x_34888 < n__5636__auto___34887)){
(a[x_34888] = x_34888);

var G__34889 = (x_34888 + (1));
x_34888 = G__34889;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30949 = (function (flag,meta30950){
this.flag = flag;
this.meta30950 = meta30950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30951,meta30950__$1){
var self__ = this;
var _30951__$1 = this;
return (new cljs.core.async.t_cljs$core$async30949(self__.flag,meta30950__$1));
}));

(cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30951){
var self__ = this;
var _30951__$1 = this;
return self__.meta30950;
}));

(cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30950","meta30950",2077422788,null)], null);
}));

(cljs.core.async.t_cljs$core$async30949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30949");

(cljs.core.async.t_cljs$core$async30949.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30949.
 */
cljs.core.async.__GT_t_cljs$core$async30949 = (function cljs$core$async$__GT_t_cljs$core$async30949(flag,meta30950){
return (new cljs.core.async.t_cljs$core$async30949(flag,meta30950));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30949(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30981 = (function (flag,cb,meta30982){
this.flag = flag;
this.cb = cb;
this.meta30982 = meta30982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30983,meta30982__$1){
var self__ = this;
var _30983__$1 = this;
return (new cljs.core.async.t_cljs$core$async30981(self__.flag,self__.cb,meta30982__$1));
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30983){
var self__ = this;
var _30983__$1 = this;
return self__.meta30982;
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30982","meta30982",1989654816,null)], null);
}));

(cljs.core.async.t_cljs$core$async30981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30981");

(cljs.core.async.t_cljs$core$async30981.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30981.
 */
cljs.core.async.__GT_t_cljs$core$async30981 = (function cljs$core$async$__GT_t_cljs$core$async30981(flag,cb,meta30982){
return (new cljs.core.async.t_cljs$core$async30981(flag,cb,meta30982));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30981(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31011_SHARP_){
var G__31022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31011_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31022) : fret.call(null,G__31022));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31013_SHARP_){
var G__31023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31013_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31023) : fret.call(null,G__31023));
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
var G__34907 = (i + (1));
i = G__34907;
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
var len__5769__auto___34908 = arguments.length;
var i__5770__auto___34910 = (0);
while(true){
if((i__5770__auto___34910 < len__5769__auto___34908)){
args__5775__auto__.push((arguments[i__5770__auto___34910]));

var G__34912 = (i__5770__auto___34910 + (1));
i__5770__auto___34910 = G__34912;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31037){
var map__31040 = p__31037;
var map__31040__$1 = cljs.core.__destructure_map(map__31040);
var opts = map__31040__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31031){
var G__31032 = cljs.core.first(seq31031);
var seq31031__$1 = cljs.core.next(seq31031);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31032,seq31031__$1);
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
var G__31059 = arguments.length;
switch (G__31059) {
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
var c__30698__auto___34923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31110){
var state_val_31113 = (state_31110[(1)]);
if((state_val_31113 === (7))){
var inst_31102 = (state_31110[(2)]);
var state_31110__$1 = state_31110;
var statearr_31139_34924 = state_31110__$1;
(statearr_31139_34924[(2)] = inst_31102);

(statearr_31139_34924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (1))){
var state_31110__$1 = state_31110;
var statearr_31143_34926 = state_31110__$1;
(statearr_31143_34926[(2)] = null);

(statearr_31143_34926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (4))){
var inst_31081 = (state_31110[(7)]);
var inst_31081__$1 = (state_31110[(2)]);
var inst_31083 = (inst_31081__$1 == null);
var state_31110__$1 = (function (){var statearr_31150 = state_31110;
(statearr_31150[(7)] = inst_31081__$1);

return statearr_31150;
})();
if(cljs.core.truth_(inst_31083)){
var statearr_31153_34935 = state_31110__$1;
(statearr_31153_34935[(1)] = (5));

} else {
var statearr_31154_34936 = state_31110__$1;
(statearr_31154_34936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (13))){
var state_31110__$1 = state_31110;
var statearr_31164_34937 = state_31110__$1;
(statearr_31164_34937[(2)] = null);

(statearr_31164_34937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (6))){
var inst_31081 = (state_31110[(7)]);
var state_31110__$1 = state_31110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31110__$1,(11),to,inst_31081);
} else {
if((state_val_31113 === (3))){
var inst_31104 = (state_31110[(2)]);
var state_31110__$1 = state_31110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31110__$1,inst_31104);
} else {
if((state_val_31113 === (12))){
var state_31110__$1 = state_31110;
var statearr_31178_34940 = state_31110__$1;
(statearr_31178_34940[(2)] = null);

(statearr_31178_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (2))){
var state_31110__$1 = state_31110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31110__$1,(4),from);
} else {
if((state_val_31113 === (11))){
var inst_31095 = (state_31110[(2)]);
var state_31110__$1 = state_31110;
if(cljs.core.truth_(inst_31095)){
var statearr_31184_34941 = state_31110__$1;
(statearr_31184_34941[(1)] = (12));

} else {
var statearr_31187_34942 = state_31110__$1;
(statearr_31187_34942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (9))){
var state_31110__$1 = state_31110;
var statearr_31188_34943 = state_31110__$1;
(statearr_31188_34943[(2)] = null);

(statearr_31188_34943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (5))){
var state_31110__$1 = state_31110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31190_34944 = state_31110__$1;
(statearr_31190_34944[(1)] = (8));

} else {
var statearr_31194_34946 = state_31110__$1;
(statearr_31194_34946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (14))){
var inst_31100 = (state_31110[(2)]);
var state_31110__$1 = state_31110;
var statearr_31196_34947 = state_31110__$1;
(statearr_31196_34947[(2)] = inst_31100);

(statearr_31196_34947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (10))){
var inst_31092 = (state_31110[(2)]);
var state_31110__$1 = state_31110;
var statearr_31201_34948 = state_31110__$1;
(statearr_31201_34948[(2)] = inst_31092);

(statearr_31201_34948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31113 === (8))){
var inst_31088 = cljs.core.async.close_BANG_(to);
var state_31110__$1 = state_31110;
var statearr_31202_34949 = state_31110__$1;
(statearr_31202_34949[(2)] = inst_31088);

(statearr_31202_34949[(1)] = (10));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_31209 = [null,null,null,null,null,null,null,null];
(statearr_31209[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_31209[(1)] = (1));

return statearr_31209;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_31110){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31110);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31210){var ex__29477__auto__ = e31210;
var statearr_31211_34954 = state_31110;
(statearr_31211_34954[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31110[(4)]))){
var statearr_31212_34955 = state_31110;
(statearr_31212_34955[(1)] = cljs.core.first((state_31110[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34956 = state_31110;
state_31110 = G__34956;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_31110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_31110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31214 = f__30699__auto__();
(statearr_31214[(6)] = c__30698__auto___34923);

return statearr_31214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
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
var process__$1 = (function (p__31224){
var vec__31225 = p__31224;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(1),null);
var job = vec__31225;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30698__auto___34959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31236){
var state_val_31237 = (state_31236[(1)]);
if((state_val_31237 === (1))){
var state_31236__$1 = state_31236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31236__$1,(2),res,v);
} else {
if((state_val_31237 === (2))){
var inst_31233 = (state_31236[(2)]);
var inst_31234 = cljs.core.async.close_BANG_(res);
var state_31236__$1 = (function (){var statearr_31254 = state_31236;
(statearr_31254[(7)] = inst_31233);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31236__$1,inst_31234);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_31259 = [null,null,null,null,null,null,null,null];
(statearr_31259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_31259[(1)] = (1));

return statearr_31259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_31236){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31236);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31264){var ex__29477__auto__ = e31264;
var statearr_31265_34961 = state_31236;
(statearr_31265_34961[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31236[(4)]))){
var statearr_31266_34962 = state_31236;
(statearr_31266_34962[(1)] = cljs.core.first((state_31236[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34963 = state_31236;
state_31236 = G__34963;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_31236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_31236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31269 = f__30699__auto__();
(statearr_31269[(6)] = c__30698__auto___34959);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31272){
var vec__31274 = p__31272;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274,(1),null);
var job = vec__31274;
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
var n__5636__auto___34966 = n;
var __34967 = (0);
while(true){
if((__34967 < n__5636__auto___34966)){
var G__31289_34969 = type;
var G__31289_34970__$1 = (((G__31289_34969 instanceof cljs.core.Keyword))?G__31289_34969.fqn:null);
switch (G__31289_34970__$1) {
case "compute":
var c__30698__auto___34973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34967,c__30698__auto___34973,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async){
return (function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = ((function (__34967,c__30698__auto___34973,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async){
return (function (state_31307){
var state_val_31308 = (state_31307[(1)]);
if((state_val_31308 === (1))){
var state_31307__$1 = state_31307;
var statearr_31318_34976 = state_31307__$1;
(statearr_31318_34976[(2)] = null);

(statearr_31318_34976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (2))){
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31307__$1,(4),jobs);
} else {
if((state_val_31308 === (3))){
var inst_31304 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31307__$1,inst_31304);
} else {
if((state_val_31308 === (4))){
var inst_31293 = (state_31307[(2)]);
var inst_31297 = process__$1(inst_31293);
var state_31307__$1 = state_31307;
if(cljs.core.truth_(inst_31297)){
var statearr_31329_34977 = state_31307__$1;
(statearr_31329_34977[(1)] = (5));

} else {
var statearr_31331_34978 = state_31307__$1;
(statearr_31331_34978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (5))){
var state_31307__$1 = state_31307;
var statearr_31337_34983 = state_31307__$1;
(statearr_31337_34983[(2)] = null);

(statearr_31337_34983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (6))){
var state_31307__$1 = state_31307;
var statearr_31339_34988 = state_31307__$1;
(statearr_31339_34988[(2)] = null);

(statearr_31339_34988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (7))){
var inst_31302 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
var statearr_31341_34989 = state_31307__$1;
(statearr_31341_34989[(2)] = inst_31302);

(statearr_31341_34989[(1)] = (3));


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
});})(__34967,c__30698__auto___34973,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async))
;
return ((function (__34967,switch__29473__auto__,c__30698__auto___34973,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_31345 = [null,null,null,null,null,null,null];
(statearr_31345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_31345[(1)] = (1));

return statearr_31345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_31307){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31307);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31347){var ex__29477__auto__ = e31347;
var statearr_31351_34991 = state_31307;
(statearr_31351_34991[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31307[(4)]))){
var statearr_31352_34992 = state_31307;
(statearr_31352_34992[(1)] = cljs.core.first((state_31307[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34995 = state_31307;
state_31307 = G__34995;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_31307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_31307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
;})(__34967,switch__29473__auto__,c__30698__auto___34973,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async))
})();
var state__30700__auto__ = (function (){var statearr_31362 = f__30699__auto__();
(statearr_31362[(6)] = c__30698__auto___34973);

return statearr_31362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
});})(__34967,c__30698__auto___34973,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async))
);


break;
case "async":
var c__30698__auto___34997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34967,c__30698__auto___34997,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async){
return (function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = ((function (__34967,c__30698__auto___34997,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async){
return (function (state_31389){
var state_val_31390 = (state_31389[(1)]);
if((state_val_31390 === (1))){
var state_31389__$1 = state_31389;
var statearr_31396_35001 = state_31389__$1;
(statearr_31396_35001[(2)] = null);

(statearr_31396_35001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (2))){
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31389__$1,(4),jobs);
} else {
if((state_val_31390 === (3))){
var inst_31387 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31389__$1,inst_31387);
} else {
if((state_val_31390 === (4))){
var inst_31374 = (state_31389[(2)]);
var inst_31378 = async(inst_31374);
var state_31389__$1 = state_31389;
if(cljs.core.truth_(inst_31378)){
var statearr_31404_35002 = state_31389__$1;
(statearr_31404_35002[(1)] = (5));

} else {
var statearr_31405_35004 = state_31389__$1;
(statearr_31405_35004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (5))){
var state_31389__$1 = state_31389;
var statearr_31409_35005 = state_31389__$1;
(statearr_31409_35005[(2)] = null);

(statearr_31409_35005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (6))){
var state_31389__$1 = state_31389;
var statearr_31410_35006 = state_31389__$1;
(statearr_31410_35006[(2)] = null);

(statearr_31410_35006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31390 === (7))){
var inst_31385 = (state_31389[(2)]);
var state_31389__$1 = state_31389;
var statearr_31415_35007 = state_31389__$1;
(statearr_31415_35007[(2)] = inst_31385);

(statearr_31415_35007[(1)] = (3));


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
});})(__34967,c__30698__auto___34997,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async))
;
return ((function (__34967,switch__29473__auto__,c__30698__auto___34997,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_31417 = [null,null,null,null,null,null,null];
(statearr_31417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_31417[(1)] = (1));

return statearr_31417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_31389){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31389);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31418){var ex__29477__auto__ = e31418;
var statearr_31419_35010 = state_31389;
(statearr_31419_35010[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31389[(4)]))){
var statearr_31421_35013 = state_31389;
(statearr_31421_35013[(1)] = cljs.core.first((state_31389[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35014 = state_31389;
state_31389 = G__35014;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_31389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_31389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
;})(__34967,switch__29473__auto__,c__30698__auto___34997,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async))
})();
var state__30700__auto__ = (function (){var statearr_31425 = f__30699__auto__();
(statearr_31425[(6)] = c__30698__auto___34997);

return statearr_31425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
});})(__34967,c__30698__auto___34997,G__31289_34969,G__31289_34970__$1,n__5636__auto___34966,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31289_34970__$1)].join('')));

}

var G__35021 = (__34967 + (1));
__34967 = G__35021;
continue;
} else {
}
break;
}

var c__30698__auto___35022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31458){
var state_val_31459 = (state_31458[(1)]);
if((state_val_31459 === (7))){
var inst_31454 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31467_35025 = state_31458__$1;
(statearr_31467_35025[(2)] = inst_31454);

(statearr_31467_35025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (1))){
var state_31458__$1 = state_31458;
var statearr_31468_35027 = state_31458__$1;
(statearr_31468_35027[(2)] = null);

(statearr_31468_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (4))){
var inst_31436 = (state_31458[(7)]);
var inst_31436__$1 = (state_31458[(2)]);
var inst_31437 = (inst_31436__$1 == null);
var state_31458__$1 = (function (){var statearr_31471 = state_31458;
(statearr_31471[(7)] = inst_31436__$1);

return statearr_31471;
})();
if(cljs.core.truth_(inst_31437)){
var statearr_31472_35029 = state_31458__$1;
(statearr_31472_35029[(1)] = (5));

} else {
var statearr_31474_35030 = state_31458__$1;
(statearr_31474_35030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (6))){
var inst_31442 = (state_31458[(8)]);
var inst_31436 = (state_31458[(7)]);
var inst_31442__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31446 = [inst_31436,inst_31442__$1];
var inst_31447 = (new cljs.core.PersistentVector(null,2,(5),inst_31444,inst_31446,null));
var state_31458__$1 = (function (){var statearr_31476 = state_31458;
(statearr_31476[(8)] = inst_31442__$1);

return statearr_31476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31458__$1,(8),jobs,inst_31447);
} else {
if((state_val_31459 === (3))){
var inst_31456 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31458__$1,inst_31456);
} else {
if((state_val_31459 === (2))){
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31458__$1,(4),from);
} else {
if((state_val_31459 === (9))){
var inst_31451 = (state_31458[(2)]);
var state_31458__$1 = (function (){var statearr_31477 = state_31458;
(statearr_31477[(9)] = inst_31451);

return statearr_31477;
})();
var statearr_31478_35033 = state_31458__$1;
(statearr_31478_35033[(2)] = null);

(statearr_31478_35033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (5))){
var inst_31439 = cljs.core.async.close_BANG_(jobs);
var state_31458__$1 = state_31458;
var statearr_31479_35034 = state_31458__$1;
(statearr_31479_35034[(2)] = inst_31439);

(statearr_31479_35034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (8))){
var inst_31442 = (state_31458[(8)]);
var inst_31449 = (state_31458[(2)]);
var state_31458__$1 = (function (){var statearr_31483 = state_31458;
(statearr_31483[(10)] = inst_31449);

return statearr_31483;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31458__$1,(9),results,inst_31442);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_31484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_31484[(1)] = (1));

return statearr_31484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_31458){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31458);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31485){var ex__29477__auto__ = e31485;
var statearr_31486_35036 = state_31458;
(statearr_31486_35036[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31458[(4)]))){
var statearr_31488_35039 = state_31458;
(statearr_31488_35039[(1)] = cljs.core.first((state_31458[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35040 = state_31458;
state_31458 = G__35040;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_31458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_31458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31489 = f__30699__auto__();
(statearr_31489[(6)] = c__30698__auto___35022);

return statearr_31489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));


var c__30698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31533){
var state_val_31534 = (state_31533[(1)]);
if((state_val_31534 === (7))){
var inst_31529 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
var statearr_31539_35047 = state_31533__$1;
(statearr_31539_35047[(2)] = inst_31529);

(statearr_31539_35047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (20))){
var state_31533__$1 = state_31533;
var statearr_31540_35048 = state_31533__$1;
(statearr_31540_35048[(2)] = null);

(statearr_31540_35048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (1))){
var state_31533__$1 = state_31533;
var statearr_31541_35049 = state_31533__$1;
(statearr_31541_35049[(2)] = null);

(statearr_31541_35049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (4))){
var inst_31496 = (state_31533[(7)]);
var inst_31496__$1 = (state_31533[(2)]);
var inst_31499 = (inst_31496__$1 == null);
var state_31533__$1 = (function (){var statearr_31542 = state_31533;
(statearr_31542[(7)] = inst_31496__$1);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31499)){
var statearr_31545_35052 = state_31533__$1;
(statearr_31545_35052[(1)] = (5));

} else {
var statearr_31548_35053 = state_31533__$1;
(statearr_31548_35053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (15))){
var inst_31511 = (state_31533[(8)]);
var state_31533__$1 = state_31533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31533__$1,(18),to,inst_31511);
} else {
if((state_val_31534 === (21))){
var inst_31524 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
var statearr_31551_35057 = state_31533__$1;
(statearr_31551_35057[(2)] = inst_31524);

(statearr_31551_35057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (13))){
var inst_31526 = (state_31533[(2)]);
var state_31533__$1 = (function (){var statearr_31552 = state_31533;
(statearr_31552[(9)] = inst_31526);

return statearr_31552;
})();
var statearr_31553_35058 = state_31533__$1;
(statearr_31553_35058[(2)] = null);

(statearr_31553_35058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (6))){
var inst_31496 = (state_31533[(7)]);
var state_31533__$1 = state_31533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31533__$1,(11),inst_31496);
} else {
if((state_val_31534 === (17))){
var inst_31519 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
if(cljs.core.truth_(inst_31519)){
var statearr_31556_35059 = state_31533__$1;
(statearr_31556_35059[(1)] = (19));

} else {
var statearr_31557_35061 = state_31533__$1;
(statearr_31557_35061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (3))){
var inst_31531 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31533__$1,inst_31531);
} else {
if((state_val_31534 === (12))){
var inst_31508 = (state_31533[(10)]);
var state_31533__$1 = state_31533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31533__$1,(14),inst_31508);
} else {
if((state_val_31534 === (2))){
var state_31533__$1 = state_31533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31533__$1,(4),results);
} else {
if((state_val_31534 === (19))){
var state_31533__$1 = state_31533;
var statearr_31558_35067 = state_31533__$1;
(statearr_31558_35067[(2)] = null);

(statearr_31558_35067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (11))){
var inst_31508 = (state_31533[(2)]);
var state_31533__$1 = (function (){var statearr_31559 = state_31533;
(statearr_31559[(10)] = inst_31508);

return statearr_31559;
})();
var statearr_31560_35069 = state_31533__$1;
(statearr_31560_35069[(2)] = null);

(statearr_31560_35069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (9))){
var state_31533__$1 = state_31533;
var statearr_31562_35071 = state_31533__$1;
(statearr_31562_35071[(2)] = null);

(statearr_31562_35071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (5))){
var state_31533__$1 = state_31533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31567_35072 = state_31533__$1;
(statearr_31567_35072[(1)] = (8));

} else {
var statearr_31571_35073 = state_31533__$1;
(statearr_31571_35073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (14))){
var inst_31513 = (state_31533[(11)]);
var inst_31511 = (state_31533[(8)]);
var inst_31511__$1 = (state_31533[(2)]);
var inst_31512 = (inst_31511__$1 == null);
var inst_31513__$1 = cljs.core.not(inst_31512);
var state_31533__$1 = (function (){var statearr_31572 = state_31533;
(statearr_31572[(11)] = inst_31513__$1);

(statearr_31572[(8)] = inst_31511__$1);

return statearr_31572;
})();
if(inst_31513__$1){
var statearr_31573_35076 = state_31533__$1;
(statearr_31573_35076[(1)] = (15));

} else {
var statearr_31574_35078 = state_31533__$1;
(statearr_31574_35078[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (16))){
var inst_31513 = (state_31533[(11)]);
var state_31533__$1 = state_31533;
var statearr_31575_35081 = state_31533__$1;
(statearr_31575_35081[(2)] = inst_31513);

(statearr_31575_35081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (10))){
var inst_31505 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
var statearr_31583_35085 = state_31533__$1;
(statearr_31583_35085[(2)] = inst_31505);

(statearr_31583_35085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (18))){
var inst_31516 = (state_31533[(2)]);
var state_31533__$1 = state_31533;
var statearr_31584_35086 = state_31533__$1;
(statearr_31584_35086[(2)] = inst_31516);

(statearr_31584_35086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31534 === (8))){
var inst_31502 = cljs.core.async.close_BANG_(to);
var state_31533__$1 = state_31533;
var statearr_31586_35090 = state_31533__$1;
(statearr_31586_35090[(2)] = inst_31502);

(statearr_31586_35090[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_31595 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_31595[(1)] = (1));

return statearr_31595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_31533){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31533);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31596){var ex__29477__auto__ = e31596;
var statearr_31600_35093 = state_31533;
(statearr_31600_35093[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31533[(4)]))){
var statearr_31604_35094 = state_31533;
(statearr_31604_35094[(1)] = cljs.core.first((state_31533[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35097 = state_31533;
state_31533 = G__35097;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_31533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_31533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31605 = f__30699__auto__();
(statearr_31605[(6)] = c__30698__auto__);

return statearr_31605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));

return c__30698__auto__;
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
var G__31611 = arguments.length;
switch (G__31611) {
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
var G__31620 = arguments.length;
switch (G__31620) {
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
var G__31628 = arguments.length;
switch (G__31628) {
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
var c__30698__auto___35116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31663){
var state_val_31664 = (state_31663[(1)]);
if((state_val_31664 === (7))){
var inst_31657 = (state_31663[(2)]);
var state_31663__$1 = state_31663;
var statearr_31670_35119 = state_31663__$1;
(statearr_31670_35119[(2)] = inst_31657);

(statearr_31670_35119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (1))){
var state_31663__$1 = state_31663;
var statearr_31671_35121 = state_31663__$1;
(statearr_31671_35121[(2)] = null);

(statearr_31671_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (4))){
var inst_31637 = (state_31663[(7)]);
var inst_31637__$1 = (state_31663[(2)]);
var inst_31639 = (inst_31637__$1 == null);
var state_31663__$1 = (function (){var statearr_31672 = state_31663;
(statearr_31672[(7)] = inst_31637__$1);

return statearr_31672;
})();
if(cljs.core.truth_(inst_31639)){
var statearr_31674_35123 = state_31663__$1;
(statearr_31674_35123[(1)] = (5));

} else {
var statearr_31680_35124 = state_31663__$1;
(statearr_31680_35124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (13))){
var state_31663__$1 = state_31663;
var statearr_31681_35125 = state_31663__$1;
(statearr_31681_35125[(2)] = null);

(statearr_31681_35125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (6))){
var inst_31637 = (state_31663[(7)]);
var inst_31644 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31637) : p.call(null,inst_31637));
var state_31663__$1 = state_31663;
if(cljs.core.truth_(inst_31644)){
var statearr_31682_35130 = state_31663__$1;
(statearr_31682_35130[(1)] = (9));

} else {
var statearr_31683_35131 = state_31663__$1;
(statearr_31683_35131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (3))){
var inst_31660 = (state_31663[(2)]);
var state_31663__$1 = state_31663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31663__$1,inst_31660);
} else {
if((state_val_31664 === (12))){
var state_31663__$1 = state_31663;
var statearr_31687_35133 = state_31663__$1;
(statearr_31687_35133[(2)] = null);

(statearr_31687_35133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (2))){
var state_31663__$1 = state_31663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31663__$1,(4),ch);
} else {
if((state_val_31664 === (11))){
var inst_31637 = (state_31663[(7)]);
var inst_31648 = (state_31663[(2)]);
var state_31663__$1 = state_31663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31663__$1,(8),inst_31648,inst_31637);
} else {
if((state_val_31664 === (9))){
var state_31663__$1 = state_31663;
var statearr_31697_35134 = state_31663__$1;
(statearr_31697_35134[(2)] = tc);

(statearr_31697_35134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (5))){
var inst_31641 = cljs.core.async.close_BANG_(tc);
var inst_31642 = cljs.core.async.close_BANG_(fc);
var state_31663__$1 = (function (){var statearr_31706 = state_31663;
(statearr_31706[(8)] = inst_31641);

return statearr_31706;
})();
var statearr_31707_35141 = state_31663__$1;
(statearr_31707_35141[(2)] = inst_31642);

(statearr_31707_35141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (14))){
var inst_31655 = (state_31663[(2)]);
var state_31663__$1 = state_31663;
var statearr_31715_35144 = state_31663__$1;
(statearr_31715_35144[(2)] = inst_31655);

(statearr_31715_35144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (10))){
var state_31663__$1 = state_31663;
var statearr_31717_35145 = state_31663__$1;
(statearr_31717_35145[(2)] = fc);

(statearr_31717_35145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (8))){
var inst_31650 = (state_31663[(2)]);
var state_31663__$1 = state_31663;
if(cljs.core.truth_(inst_31650)){
var statearr_31719_35147 = state_31663__$1;
(statearr_31719_35147[(1)] = (12));

} else {
var statearr_31721_35148 = state_31663__$1;
(statearr_31721_35148[(1)] = (13));

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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_31723 = [null,null,null,null,null,null,null,null,null];
(statearr_31723[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_31723[(1)] = (1));

return statearr_31723;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_31663){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31663);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31728){var ex__29477__auto__ = e31728;
var statearr_31729_35151 = state_31663;
(statearr_31729_35151[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31663[(4)]))){
var statearr_31733_35152 = state_31663;
(statearr_31733_35152[(1)] = cljs.core.first((state_31663[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35156 = state_31663;
state_31663 = G__35156;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_31663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_31663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31737 = f__30699__auto__();
(statearr_31737[(6)] = c__30698__auto___35116);

return statearr_31737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
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
var c__30698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31773){
var state_val_31774 = (state_31773[(1)]);
if((state_val_31774 === (7))){
var inst_31766 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31776_35158 = state_31773__$1;
(statearr_31776_35158[(2)] = inst_31766);

(statearr_31776_35158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (1))){
var inst_31743 = init;
var inst_31744 = inst_31743;
var state_31773__$1 = (function (){var statearr_31777 = state_31773;
(statearr_31777[(7)] = inst_31744);

return statearr_31777;
})();
var statearr_31778_35159 = state_31773__$1;
(statearr_31778_35159[(2)] = null);

(statearr_31778_35159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (4))){
var inst_31750 = (state_31773[(8)]);
var inst_31750__$1 = (state_31773[(2)]);
var inst_31753 = (inst_31750__$1 == null);
var state_31773__$1 = (function (){var statearr_31791 = state_31773;
(statearr_31791[(8)] = inst_31750__$1);

return statearr_31791;
})();
if(cljs.core.truth_(inst_31753)){
var statearr_31796_35160 = state_31773__$1;
(statearr_31796_35160[(1)] = (5));

} else {
var statearr_31797_35161 = state_31773__$1;
(statearr_31797_35161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (6))){
var inst_31756 = (state_31773[(9)]);
var inst_31744 = (state_31773[(7)]);
var inst_31750 = (state_31773[(8)]);
var inst_31756__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31744,inst_31750) : f.call(null,inst_31744,inst_31750));
var inst_31757 = cljs.core.reduced_QMARK_(inst_31756__$1);
var state_31773__$1 = (function (){var statearr_31798 = state_31773;
(statearr_31798[(9)] = inst_31756__$1);

return statearr_31798;
})();
if(inst_31757){
var statearr_31799_35162 = state_31773__$1;
(statearr_31799_35162[(1)] = (8));

} else {
var statearr_31800_35163 = state_31773__$1;
(statearr_31800_35163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (3))){
var inst_31768 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31773__$1,inst_31768);
} else {
if((state_val_31774 === (2))){
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31773__$1,(4),ch);
} else {
if((state_val_31774 === (9))){
var inst_31756 = (state_31773[(9)]);
var inst_31744 = inst_31756;
var state_31773__$1 = (function (){var statearr_31801 = state_31773;
(statearr_31801[(7)] = inst_31744);

return statearr_31801;
})();
var statearr_31804_35167 = state_31773__$1;
(statearr_31804_35167[(2)] = null);

(statearr_31804_35167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (5))){
var inst_31744 = (state_31773[(7)]);
var state_31773__$1 = state_31773;
var statearr_31806_35168 = state_31773__$1;
(statearr_31806_35168[(2)] = inst_31744);

(statearr_31806_35168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (10))){
var inst_31764 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31807_35171 = state_31773__$1;
(statearr_31807_35171[(2)] = inst_31764);

(statearr_31807_35171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (8))){
var inst_31756 = (state_31773[(9)]);
var inst_31759 = cljs.core.deref(inst_31756);
var state_31773__$1 = state_31773;
var statearr_31812_35172 = state_31773__$1;
(statearr_31812_35172[(2)] = inst_31759);

(statearr_31812_35172[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29474__auto____0 = (function (){
var statearr_31813 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31813[(0)] = cljs$core$async$reduce_$_state_machine__29474__auto__);

(statearr_31813[(1)] = (1));

return statearr_31813;
});
var cljs$core$async$reduce_$_state_machine__29474__auto____1 = (function (state_31773){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31773);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31814){var ex__29477__auto__ = e31814;
var statearr_31815_35174 = state_31773;
(statearr_31815_35174[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31773[(4)]))){
var statearr_31818_35175 = state_31773;
(statearr_31818_35175[(1)] = cljs.core.first((state_31773[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35176 = state_31773;
state_31773 = G__35176;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29474__auto__ = function(state_31773){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29474__auto____1.call(this,state_31773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29474__auto____0;
cljs$core$async$reduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29474__auto____1;
return cljs$core$async$reduce_$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31843 = f__30699__auto__();
(statearr_31843[(6)] = c__30698__auto__);

return statearr_31843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));

return c__30698__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31854){
var state_val_31855 = (state_31854[(1)]);
if((state_val_31855 === (1))){
var inst_31846 = cljs.core.async.reduce(f__$1,init,ch);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31854__$1,(2),inst_31846);
} else {
if((state_val_31855 === (2))){
var inst_31848 = (state_31854[(2)]);
var inst_31849 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31848) : f__$1.call(null,inst_31848));
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31854__$1,inst_31849);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29474__auto____0 = (function (){
var statearr_31862 = [null,null,null,null,null,null,null];
(statearr_31862[(0)] = cljs$core$async$transduce_$_state_machine__29474__auto__);

(statearr_31862[(1)] = (1));

return statearr_31862;
});
var cljs$core$async$transduce_$_state_machine__29474__auto____1 = (function (state_31854){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31854);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31867){var ex__29477__auto__ = e31867;
var statearr_31868_35184 = state_31854;
(statearr_31868_35184[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31854[(4)]))){
var statearr_31871_35186 = state_31854;
(statearr_31871_35186[(1)] = cljs.core.first((state_31854[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35187 = state_31854;
state_31854 = G__35187;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29474__auto__ = function(state_31854){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29474__auto____1.call(this,state_31854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29474__auto____0;
cljs$core$async$transduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29474__auto____1;
return cljs$core$async$transduce_$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31873 = f__30699__auto__();
(statearr_31873[(6)] = c__30698__auto__);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));

return c__30698__auto__;
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
var G__31879 = arguments.length;
switch (G__31879) {
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
var c__30698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_31912){
var state_val_31913 = (state_31912[(1)]);
if((state_val_31913 === (7))){
var inst_31891 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31914_35190 = state_31912__$1;
(statearr_31914_35190[(2)] = inst_31891);

(statearr_31914_35190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (1))){
var inst_31883 = cljs.core.seq(coll);
var inst_31884 = inst_31883;
var state_31912__$1 = (function (){var statearr_31916 = state_31912;
(statearr_31916[(7)] = inst_31884);

return statearr_31916;
})();
var statearr_31917_35192 = state_31912__$1;
(statearr_31917_35192[(2)] = null);

(statearr_31917_35192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (4))){
var inst_31884 = (state_31912[(7)]);
var inst_31889 = cljs.core.first(inst_31884);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31912__$1,(7),ch,inst_31889);
} else {
if((state_val_31913 === (13))){
var inst_31906 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31921_35194 = state_31912__$1;
(statearr_31921_35194[(2)] = inst_31906);

(statearr_31921_35194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (6))){
var inst_31894 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
if(cljs.core.truth_(inst_31894)){
var statearr_31927_35196 = state_31912__$1;
(statearr_31927_35196[(1)] = (8));

} else {
var statearr_31929_35197 = state_31912__$1;
(statearr_31929_35197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (3))){
var inst_31910 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31912__$1,inst_31910);
} else {
if((state_val_31913 === (12))){
var state_31912__$1 = state_31912;
var statearr_31930_35198 = state_31912__$1;
(statearr_31930_35198[(2)] = null);

(statearr_31930_35198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (2))){
var inst_31884 = (state_31912[(7)]);
var state_31912__$1 = state_31912;
if(cljs.core.truth_(inst_31884)){
var statearr_31931_35199 = state_31912__$1;
(statearr_31931_35199[(1)] = (4));

} else {
var statearr_31932_35200 = state_31912__$1;
(statearr_31932_35200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (11))){
var inst_31902 = cljs.core.async.close_BANG_(ch);
var state_31912__$1 = state_31912;
var statearr_31933_35201 = state_31912__$1;
(statearr_31933_35201[(2)] = inst_31902);

(statearr_31933_35201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (9))){
var state_31912__$1 = state_31912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31934_35202 = state_31912__$1;
(statearr_31934_35202[(1)] = (11));

} else {
var statearr_31935_35203 = state_31912__$1;
(statearr_31935_35203[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (5))){
var inst_31884 = (state_31912[(7)]);
var state_31912__$1 = state_31912;
var statearr_31936_35211 = state_31912__$1;
(statearr_31936_35211[(2)] = inst_31884);

(statearr_31936_35211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (10))){
var inst_31908 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31937_35212 = state_31912__$1;
(statearr_31937_35212[(2)] = inst_31908);

(statearr_31937_35212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (8))){
var inst_31884 = (state_31912[(7)]);
var inst_31897 = cljs.core.next(inst_31884);
var inst_31884__$1 = inst_31897;
var state_31912__$1 = (function (){var statearr_31942 = state_31912;
(statearr_31942[(7)] = inst_31884__$1);

return statearr_31942;
})();
var statearr_31944_35213 = state_31912__$1;
(statearr_31944_35213[(2)] = null);

(statearr_31944_35213[(1)] = (2));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_31948 = [null,null,null,null,null,null,null,null];
(statearr_31948[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_31948[(1)] = (1));

return statearr_31948;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_31912){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31912);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31949){var ex__29477__auto__ = e31949;
var statearr_31950_35221 = state_31912;
(statearr_31950_35221[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31912[(4)]))){
var statearr_31951_35223 = state_31912;
(statearr_31951_35223[(1)] = cljs.core.first((state_31912[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35224 = state_31912;
state_31912 = G__35224;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_31912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_31912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_31952 = f__30699__auto__();
(statearr_31952[(6)] = c__30698__auto__);

return statearr_31952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));

return c__30698__auto__;
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
var G__31955 = arguments.length;
switch (G__31955) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35230 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35230(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35238 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35238(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35243 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35243(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35245 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35245(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31984 = (function (ch,cs,meta31985){
this.ch = ch;
this.cs = cs;
this.meta31985 = meta31985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31986,meta31985__$1){
var self__ = this;
var _31986__$1 = this;
return (new cljs.core.async.t_cljs$core$async31984(self__.ch,self__.cs,meta31985__$1));
}));

(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31986){
var self__ = this;
var _31986__$1 = this;
return self__.meta31985;
}));

(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31984.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31985","meta31985",168355269,null)], null);
}));

(cljs.core.async.t_cljs$core$async31984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31984");

(cljs.core.async.t_cljs$core$async31984.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31984.
 */
cljs.core.async.__GT_t_cljs$core$async31984 = (function cljs$core$async$__GT_t_cljs$core$async31984(ch,cs,meta31985){
return (new cljs.core.async.t_cljs$core$async31984(ch,cs,meta31985));
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
var m = (new cljs.core.async.t_cljs$core$async31984(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30698__auto___35255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_32159){
var state_val_32160 = (state_32159[(1)]);
if((state_val_32160 === (7))){
var inst_32155 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32162_35257 = state_32159__$1;
(statearr_32162_35257[(2)] = inst_32155);

(statearr_32162_35257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (20))){
var inst_32047 = (state_32159[(7)]);
var inst_32064 = cljs.core.first(inst_32047);
var inst_32065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32064,(0),null);
var inst_32066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32064,(1),null);
var state_32159__$1 = (function (){var statearr_32166 = state_32159;
(statearr_32166[(8)] = inst_32065);

return statearr_32166;
})();
if(cljs.core.truth_(inst_32066)){
var statearr_32167_35260 = state_32159__$1;
(statearr_32167_35260[(1)] = (22));

} else {
var statearr_32168_35261 = state_32159__$1;
(statearr_32168_35261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (27))){
var inst_32106 = (state_32159[(9)]);
var inst_32012 = (state_32159[(10)]);
var inst_32101 = (state_32159[(11)]);
var inst_32099 = (state_32159[(12)]);
var inst_32106__$1 = cljs.core._nth(inst_32099,inst_32101);
var inst_32107 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32106__$1,inst_32012,done);
var state_32159__$1 = (function (){var statearr_32169 = state_32159;
(statearr_32169[(9)] = inst_32106__$1);

return statearr_32169;
})();
if(cljs.core.truth_(inst_32107)){
var statearr_32170_35262 = state_32159__$1;
(statearr_32170_35262[(1)] = (30));

} else {
var statearr_32171_35264 = state_32159__$1;
(statearr_32171_35264[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (1))){
var state_32159__$1 = state_32159;
var statearr_32172_35265 = state_32159__$1;
(statearr_32172_35265[(2)] = null);

(statearr_32172_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (24))){
var inst_32047 = (state_32159[(7)]);
var inst_32073 = (state_32159[(2)]);
var inst_32074 = cljs.core.next(inst_32047);
var inst_32025 = inst_32074;
var inst_32026 = null;
var inst_32027 = (0);
var inst_32028 = (0);
var state_32159__$1 = (function (){var statearr_32173 = state_32159;
(statearr_32173[(13)] = inst_32027);

(statearr_32173[(14)] = inst_32025);

(statearr_32173[(15)] = inst_32028);

(statearr_32173[(16)] = inst_32026);

(statearr_32173[(17)] = inst_32073);

return statearr_32173;
})();
var statearr_32174_35267 = state_32159__$1;
(statearr_32174_35267[(2)] = null);

(statearr_32174_35267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (39))){
var state_32159__$1 = state_32159;
var statearr_32178_35269 = state_32159__$1;
(statearr_32178_35269[(2)] = null);

(statearr_32178_35269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (4))){
var inst_32012 = (state_32159[(10)]);
var inst_32012__$1 = (state_32159[(2)]);
var inst_32014 = (inst_32012__$1 == null);
var state_32159__$1 = (function (){var statearr_32180 = state_32159;
(statearr_32180[(10)] = inst_32012__$1);

return statearr_32180;
})();
if(cljs.core.truth_(inst_32014)){
var statearr_32181_35272 = state_32159__$1;
(statearr_32181_35272[(1)] = (5));

} else {
var statearr_32182_35275 = state_32159__$1;
(statearr_32182_35275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (15))){
var inst_32027 = (state_32159[(13)]);
var inst_32025 = (state_32159[(14)]);
var inst_32028 = (state_32159[(15)]);
var inst_32026 = (state_32159[(16)]);
var inst_32043 = (state_32159[(2)]);
var inst_32044 = (inst_32028 + (1));
var tmp32175 = inst_32027;
var tmp32176 = inst_32025;
var tmp32177 = inst_32026;
var inst_32025__$1 = tmp32176;
var inst_32026__$1 = tmp32177;
var inst_32027__$1 = tmp32175;
var inst_32028__$1 = inst_32044;
var state_32159__$1 = (function (){var statearr_32191 = state_32159;
(statearr_32191[(18)] = inst_32043);

(statearr_32191[(13)] = inst_32027__$1);

(statearr_32191[(14)] = inst_32025__$1);

(statearr_32191[(15)] = inst_32028__$1);

(statearr_32191[(16)] = inst_32026__$1);

return statearr_32191;
})();
var statearr_32196_35276 = state_32159__$1;
(statearr_32196_35276[(2)] = null);

(statearr_32196_35276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (21))){
var inst_32080 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32200_35277 = state_32159__$1;
(statearr_32200_35277[(2)] = inst_32080);

(statearr_32200_35277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (31))){
var inst_32106 = (state_32159[(9)]);
var inst_32110 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32106);
var state_32159__$1 = state_32159;
var statearr_32201_35278 = state_32159__$1;
(statearr_32201_35278[(2)] = inst_32110);

(statearr_32201_35278[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (32))){
var inst_32098 = (state_32159[(19)]);
var inst_32101 = (state_32159[(11)]);
var inst_32099 = (state_32159[(12)]);
var inst_32100 = (state_32159[(20)]);
var inst_32112 = (state_32159[(2)]);
var inst_32113 = (inst_32101 + (1));
var tmp32197 = inst_32098;
var tmp32198 = inst_32099;
var tmp32199 = inst_32100;
var inst_32098__$1 = tmp32197;
var inst_32099__$1 = tmp32198;
var inst_32100__$1 = tmp32199;
var inst_32101__$1 = inst_32113;
var state_32159__$1 = (function (){var statearr_32204 = state_32159;
(statearr_32204[(19)] = inst_32098__$1);

(statearr_32204[(11)] = inst_32101__$1);

(statearr_32204[(12)] = inst_32099__$1);

(statearr_32204[(20)] = inst_32100__$1);

(statearr_32204[(21)] = inst_32112);

return statearr_32204;
})();
var statearr_32205_35292 = state_32159__$1;
(statearr_32205_35292[(2)] = null);

(statearr_32205_35292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (40))){
var inst_32127 = (state_32159[(22)]);
var inst_32132 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32127);
var state_32159__$1 = state_32159;
var statearr_32207_35293 = state_32159__$1;
(statearr_32207_35293[(2)] = inst_32132);

(statearr_32207_35293[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (33))){
var inst_32116 = (state_32159[(23)]);
var inst_32119 = cljs.core.chunked_seq_QMARK_(inst_32116);
var state_32159__$1 = state_32159;
if(inst_32119){
var statearr_32208_35294 = state_32159__$1;
(statearr_32208_35294[(1)] = (36));

} else {
var statearr_32209_35295 = state_32159__$1;
(statearr_32209_35295[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (13))){
var inst_32037 = (state_32159[(24)]);
var inst_32040 = cljs.core.async.close_BANG_(inst_32037);
var state_32159__$1 = state_32159;
var statearr_32210_35296 = state_32159__$1;
(statearr_32210_35296[(2)] = inst_32040);

(statearr_32210_35296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (22))){
var inst_32065 = (state_32159[(8)]);
var inst_32070 = cljs.core.async.close_BANG_(inst_32065);
var state_32159__$1 = state_32159;
var statearr_32214_35302 = state_32159__$1;
(statearr_32214_35302[(2)] = inst_32070);

(statearr_32214_35302[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (36))){
var inst_32116 = (state_32159[(23)]);
var inst_32121 = cljs.core.chunk_first(inst_32116);
var inst_32123 = cljs.core.chunk_rest(inst_32116);
var inst_32124 = cljs.core.count(inst_32121);
var inst_32098 = inst_32123;
var inst_32099 = inst_32121;
var inst_32100 = inst_32124;
var inst_32101 = (0);
var state_32159__$1 = (function (){var statearr_32215 = state_32159;
(statearr_32215[(19)] = inst_32098);

(statearr_32215[(11)] = inst_32101);

(statearr_32215[(12)] = inst_32099);

(statearr_32215[(20)] = inst_32100);

return statearr_32215;
})();
var statearr_32219_35303 = state_32159__$1;
(statearr_32219_35303[(2)] = null);

(statearr_32219_35303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (41))){
var inst_32116 = (state_32159[(23)]);
var inst_32134 = (state_32159[(2)]);
var inst_32135 = cljs.core.next(inst_32116);
var inst_32098 = inst_32135;
var inst_32099 = null;
var inst_32100 = (0);
var inst_32101 = (0);
var state_32159__$1 = (function (){var statearr_32228 = state_32159;
(statearr_32228[(19)] = inst_32098);

(statearr_32228[(25)] = inst_32134);

(statearr_32228[(11)] = inst_32101);

(statearr_32228[(12)] = inst_32099);

(statearr_32228[(20)] = inst_32100);

return statearr_32228;
})();
var statearr_32231_35305 = state_32159__$1;
(statearr_32231_35305[(2)] = null);

(statearr_32231_35305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (43))){
var state_32159__$1 = state_32159;
var statearr_32232_35306 = state_32159__$1;
(statearr_32232_35306[(2)] = null);

(statearr_32232_35306[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (29))){
var inst_32143 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32235_35307 = state_32159__$1;
(statearr_32235_35307[(2)] = inst_32143);

(statearr_32235_35307[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (44))){
var inst_32152 = (state_32159[(2)]);
var state_32159__$1 = (function (){var statearr_32246 = state_32159;
(statearr_32246[(26)] = inst_32152);

return statearr_32246;
})();
var statearr_32249_35309 = state_32159__$1;
(statearr_32249_35309[(2)] = null);

(statearr_32249_35309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (6))){
var inst_32090 = (state_32159[(27)]);
var inst_32089 = cljs.core.deref(cs);
var inst_32090__$1 = cljs.core.keys(inst_32089);
var inst_32091 = cljs.core.count(inst_32090__$1);
var inst_32092 = cljs.core.reset_BANG_(dctr,inst_32091);
var inst_32097 = cljs.core.seq(inst_32090__$1);
var inst_32098 = inst_32097;
var inst_32099 = null;
var inst_32100 = (0);
var inst_32101 = (0);
var state_32159__$1 = (function (){var statearr_32259 = state_32159;
(statearr_32259[(19)] = inst_32098);

(statearr_32259[(11)] = inst_32101);

(statearr_32259[(12)] = inst_32099);

(statearr_32259[(20)] = inst_32100);

(statearr_32259[(27)] = inst_32090__$1);

(statearr_32259[(28)] = inst_32092);

return statearr_32259;
})();
var statearr_32270_35310 = state_32159__$1;
(statearr_32270_35310[(2)] = null);

(statearr_32270_35310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (28))){
var inst_32098 = (state_32159[(19)]);
var inst_32116 = (state_32159[(23)]);
var inst_32116__$1 = cljs.core.seq(inst_32098);
var state_32159__$1 = (function (){var statearr_32274 = state_32159;
(statearr_32274[(23)] = inst_32116__$1);

return statearr_32274;
})();
if(inst_32116__$1){
var statearr_32275_35311 = state_32159__$1;
(statearr_32275_35311[(1)] = (33));

} else {
var statearr_32276_35312 = state_32159__$1;
(statearr_32276_35312[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (25))){
var inst_32101 = (state_32159[(11)]);
var inst_32100 = (state_32159[(20)]);
var inst_32103 = (inst_32101 < inst_32100);
var inst_32104 = inst_32103;
var state_32159__$1 = state_32159;
if(cljs.core.truth_(inst_32104)){
var statearr_32284_35313 = state_32159__$1;
(statearr_32284_35313[(1)] = (27));

} else {
var statearr_32288_35314 = state_32159__$1;
(statearr_32288_35314[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (34))){
var state_32159__$1 = state_32159;
var statearr_32294_35315 = state_32159__$1;
(statearr_32294_35315[(2)] = null);

(statearr_32294_35315[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (17))){
var state_32159__$1 = state_32159;
var statearr_32304_35316 = state_32159__$1;
(statearr_32304_35316[(2)] = null);

(statearr_32304_35316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (3))){
var inst_32157 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32159__$1,inst_32157);
} else {
if((state_val_32160 === (12))){
var inst_32085 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32308_35318 = state_32159__$1;
(statearr_32308_35318[(2)] = inst_32085);

(statearr_32308_35318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (2))){
var state_32159__$1 = state_32159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32159__$1,(4),ch);
} else {
if((state_val_32160 === (23))){
var state_32159__$1 = state_32159;
var statearr_32312_35319 = state_32159__$1;
(statearr_32312_35319[(2)] = null);

(statearr_32312_35319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (35))){
var inst_32141 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32315_35320 = state_32159__$1;
(statearr_32315_35320[(2)] = inst_32141);

(statearr_32315_35320[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (19))){
var inst_32047 = (state_32159[(7)]);
var inst_32056 = cljs.core.chunk_first(inst_32047);
var inst_32057 = cljs.core.chunk_rest(inst_32047);
var inst_32058 = cljs.core.count(inst_32056);
var inst_32025 = inst_32057;
var inst_32026 = inst_32056;
var inst_32027 = inst_32058;
var inst_32028 = (0);
var state_32159__$1 = (function (){var statearr_32323 = state_32159;
(statearr_32323[(13)] = inst_32027);

(statearr_32323[(14)] = inst_32025);

(statearr_32323[(15)] = inst_32028);

(statearr_32323[(16)] = inst_32026);

return statearr_32323;
})();
var statearr_32325_35323 = state_32159__$1;
(statearr_32325_35323[(2)] = null);

(statearr_32325_35323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (11))){
var inst_32025 = (state_32159[(14)]);
var inst_32047 = (state_32159[(7)]);
var inst_32047__$1 = cljs.core.seq(inst_32025);
var state_32159__$1 = (function (){var statearr_32332 = state_32159;
(statearr_32332[(7)] = inst_32047__$1);

return statearr_32332;
})();
if(inst_32047__$1){
var statearr_32340_35324 = state_32159__$1;
(statearr_32340_35324[(1)] = (16));

} else {
var statearr_32341_35325 = state_32159__$1;
(statearr_32341_35325[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (9))){
var inst_32087 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32348_35326 = state_32159__$1;
(statearr_32348_35326[(2)] = inst_32087);

(statearr_32348_35326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (5))){
var inst_32023 = cljs.core.deref(cs);
var inst_32024 = cljs.core.seq(inst_32023);
var inst_32025 = inst_32024;
var inst_32026 = null;
var inst_32027 = (0);
var inst_32028 = (0);
var state_32159__$1 = (function (){var statearr_32357 = state_32159;
(statearr_32357[(13)] = inst_32027);

(statearr_32357[(14)] = inst_32025);

(statearr_32357[(15)] = inst_32028);

(statearr_32357[(16)] = inst_32026);

return statearr_32357;
})();
var statearr_32359_35327 = state_32159__$1;
(statearr_32359_35327[(2)] = null);

(statearr_32359_35327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (14))){
var state_32159__$1 = state_32159;
var statearr_32361_35328 = state_32159__$1;
(statearr_32361_35328[(2)] = null);

(statearr_32361_35328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (45))){
var inst_32149 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32366_35329 = state_32159__$1;
(statearr_32366_35329[(2)] = inst_32149);

(statearr_32366_35329[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (26))){
var inst_32090 = (state_32159[(27)]);
var inst_32145 = (state_32159[(2)]);
var inst_32146 = cljs.core.seq(inst_32090);
var state_32159__$1 = (function (){var statearr_32375 = state_32159;
(statearr_32375[(29)] = inst_32145);

return statearr_32375;
})();
if(inst_32146){
var statearr_32376_35330 = state_32159__$1;
(statearr_32376_35330[(1)] = (42));

} else {
var statearr_32383_35331 = state_32159__$1;
(statearr_32383_35331[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (16))){
var inst_32047 = (state_32159[(7)]);
var inst_32054 = cljs.core.chunked_seq_QMARK_(inst_32047);
var state_32159__$1 = state_32159;
if(inst_32054){
var statearr_32388_35332 = state_32159__$1;
(statearr_32388_35332[(1)] = (19));

} else {
var statearr_32392_35333 = state_32159__$1;
(statearr_32392_35333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (38))){
var inst_32138 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32394_35334 = state_32159__$1;
(statearr_32394_35334[(2)] = inst_32138);

(statearr_32394_35334[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (30))){
var state_32159__$1 = state_32159;
var statearr_32395_35335 = state_32159__$1;
(statearr_32395_35335[(2)] = null);

(statearr_32395_35335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (10))){
var inst_32028 = (state_32159[(15)]);
var inst_32026 = (state_32159[(16)]);
var inst_32036 = cljs.core._nth(inst_32026,inst_32028);
var inst_32037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32036,(0),null);
var inst_32038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32036,(1),null);
var state_32159__$1 = (function (){var statearr_32402 = state_32159;
(statearr_32402[(24)] = inst_32037);

return statearr_32402;
})();
if(cljs.core.truth_(inst_32038)){
var statearr_32403_35338 = state_32159__$1;
(statearr_32403_35338[(1)] = (13));

} else {
var statearr_32408_35339 = state_32159__$1;
(statearr_32408_35339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (18))){
var inst_32083 = (state_32159[(2)]);
var state_32159__$1 = state_32159;
var statearr_32410_35341 = state_32159__$1;
(statearr_32410_35341[(2)] = inst_32083);

(statearr_32410_35341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (42))){
var state_32159__$1 = state_32159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32159__$1,(45),dchan);
} else {
if((state_val_32160 === (37))){
var inst_32127 = (state_32159[(22)]);
var inst_32012 = (state_32159[(10)]);
var inst_32116 = (state_32159[(23)]);
var inst_32127__$1 = cljs.core.first(inst_32116);
var inst_32128 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32127__$1,inst_32012,done);
var state_32159__$1 = (function (){var statearr_32415 = state_32159;
(statearr_32415[(22)] = inst_32127__$1);

return statearr_32415;
})();
if(cljs.core.truth_(inst_32128)){
var statearr_32416_35343 = state_32159__$1;
(statearr_32416_35343[(1)] = (39));

} else {
var statearr_32419_35344 = state_32159__$1;
(statearr_32419_35344[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32160 === (8))){
var inst_32027 = (state_32159[(13)]);
var inst_32028 = (state_32159[(15)]);
var inst_32030 = (inst_32028 < inst_32027);
var inst_32031 = inst_32030;
var state_32159__$1 = state_32159;
if(cljs.core.truth_(inst_32031)){
var statearr_32421_35345 = state_32159__$1;
(statearr_32421_35345[(1)] = (10));

} else {
var statearr_32423_35346 = state_32159__$1;
(statearr_32423_35346[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29474__auto__ = null;
var cljs$core$async$mult_$_state_machine__29474__auto____0 = (function (){
var statearr_32432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32432[(0)] = cljs$core$async$mult_$_state_machine__29474__auto__);

(statearr_32432[(1)] = (1));

return statearr_32432;
});
var cljs$core$async$mult_$_state_machine__29474__auto____1 = (function (state_32159){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32159);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32436){var ex__29477__auto__ = e32436;
var statearr_32437_35350 = state_32159;
(statearr_32437_35350[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32159[(4)]))){
var statearr_32440_35351 = state_32159;
(statearr_32440_35351[(1)] = cljs.core.first((state_32159[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35354 = state_32159;
state_32159 = G__35354;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29474__auto__ = function(state_32159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29474__auto____1.call(this,state_32159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29474__auto____0;
cljs$core$async$mult_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29474__auto____1;
return cljs$core$async$mult_$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_32448 = f__30699__auto__();
(statearr_32448[(6)] = c__30698__auto___35255);

return statearr_32448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
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
var G__32455 = arguments.length;
switch (G__32455) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35358 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35358(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35371 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35371(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35372 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35372(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35383 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35383(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35387 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35387(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35392 = arguments.length;
var i__5770__auto___35393 = (0);
while(true){
if((i__5770__auto___35393 < len__5769__auto___35392)){
args__5775__auto__.push((arguments[i__5770__auto___35393]));

var G__35394 = (i__5770__auto___35393 + (1));
i__5770__auto___35393 = G__35394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32551){
var map__32552 = p__32551;
var map__32552__$1 = cljs.core.__destructure_map(map__32552);
var opts = map__32552__$1;
var statearr_32553_35395 = state;
(statearr_32553_35395[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32555_35396 = state;
(statearr_32555_35396[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32556_35399 = state;
(statearr_32556_35399[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32538){
var G__32539 = cljs.core.first(seq32538);
var seq32538__$1 = cljs.core.next(seq32538);
var G__32540 = cljs.core.first(seq32538__$1);
var seq32538__$2 = cljs.core.next(seq32538__$1);
var G__32541 = cljs.core.first(seq32538__$2);
var seq32538__$3 = cljs.core.next(seq32538__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32539,G__32540,G__32541,seq32538__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32597 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32598){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32598 = meta32598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32599,meta32598__$1){
var self__ = this;
var _32599__$1 = this;
return (new cljs.core.async.t_cljs$core$async32597(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32598__$1));
}));

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32599){
var self__ = this;
var _32599__$1 = this;
return self__.meta32598;
}));

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32597.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32598","meta32598",-62906054,null)], null);
}));

(cljs.core.async.t_cljs$core$async32597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32597");

(cljs.core.async.t_cljs$core$async32597.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32597.
 */
cljs.core.async.__GT_t_cljs$core$async32597 = (function cljs$core$async$__GT_t_cljs$core$async32597(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32598){
return (new cljs.core.async.t_cljs$core$async32597(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32598));
});


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
var m = (new cljs.core.async.t_cljs$core$async32597(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30698__auto___35425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_32699){
var state_val_32700 = (state_32699[(1)]);
if((state_val_32700 === (7))){
var inst_32652 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32652)){
var statearr_32710_35427 = state_32699__$1;
(statearr_32710_35427[(1)] = (8));

} else {
var statearr_32712_35428 = state_32699__$1;
(statearr_32712_35428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (20))){
var inst_32642 = (state_32699[(7)]);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32699__$1,(23),out,inst_32642);
} else {
if((state_val_32700 === (1))){
var inst_32621 = calc_state();
var inst_32624 = cljs.core.__destructure_map(inst_32621);
var inst_32626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32624,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32624,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32624,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32629 = inst_32621;
var state_32699__$1 = (function (){var statearr_32716 = state_32699;
(statearr_32716[(8)] = inst_32627);

(statearr_32716[(9)] = inst_32626);

(statearr_32716[(10)] = inst_32629);

(statearr_32716[(11)] = inst_32628);

return statearr_32716;
})();
var statearr_32724_35430 = state_32699__$1;
(statearr_32724_35430[(2)] = null);

(statearr_32724_35430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (24))){
var inst_32633 = (state_32699[(12)]);
var inst_32629 = inst_32633;
var state_32699__$1 = (function (){var statearr_32728 = state_32699;
(statearr_32728[(10)] = inst_32629);

return statearr_32728;
})();
var statearr_32735_35432 = state_32699__$1;
(statearr_32735_35432[(2)] = null);

(statearr_32735_35432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (4))){
var inst_32642 = (state_32699[(7)]);
var inst_32645 = (state_32699[(13)]);
var inst_32641 = (state_32699[(2)]);
var inst_32642__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32641,(0),null);
var inst_32643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32641,(1),null);
var inst_32645__$1 = (inst_32642__$1 == null);
var state_32699__$1 = (function (){var statearr_32736 = state_32699;
(statearr_32736[(7)] = inst_32642__$1);

(statearr_32736[(13)] = inst_32645__$1);

(statearr_32736[(14)] = inst_32643);

return statearr_32736;
})();
if(cljs.core.truth_(inst_32645__$1)){
var statearr_32739_35435 = state_32699__$1;
(statearr_32739_35435[(1)] = (5));

} else {
var statearr_32740_35436 = state_32699__$1;
(statearr_32740_35436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (15))){
var inst_32668 = (state_32699[(15)]);
var inst_32634 = (state_32699[(16)]);
var inst_32668__$1 = cljs.core.empty_QMARK_(inst_32634);
var state_32699__$1 = (function (){var statearr_32743 = state_32699;
(statearr_32743[(15)] = inst_32668__$1);

return statearr_32743;
})();
if(inst_32668__$1){
var statearr_32744_35437 = state_32699__$1;
(statearr_32744_35437[(1)] = (17));

} else {
var statearr_32746_35438 = state_32699__$1;
(statearr_32746_35438[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (21))){
var inst_32633 = (state_32699[(12)]);
var inst_32629 = inst_32633;
var state_32699__$1 = (function (){var statearr_32753 = state_32699;
(statearr_32753[(10)] = inst_32629);

return statearr_32753;
})();
var statearr_32758_35439 = state_32699__$1;
(statearr_32758_35439[(2)] = null);

(statearr_32758_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (13))){
var inst_32659 = (state_32699[(2)]);
var inst_32660 = calc_state();
var inst_32629 = inst_32660;
var state_32699__$1 = (function (){var statearr_32767 = state_32699;
(statearr_32767[(17)] = inst_32659);

(statearr_32767[(10)] = inst_32629);

return statearr_32767;
})();
var statearr_32769_35441 = state_32699__$1;
(statearr_32769_35441[(2)] = null);

(statearr_32769_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (22))){
var inst_32689 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32775_35442 = state_32699__$1;
(statearr_32775_35442[(2)] = inst_32689);

(statearr_32775_35442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (6))){
var inst_32643 = (state_32699[(14)]);
var inst_32650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32643,change);
var state_32699__$1 = state_32699;
var statearr_32781_35443 = state_32699__$1;
(statearr_32781_35443[(2)] = inst_32650);

(statearr_32781_35443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (25))){
var state_32699__$1 = state_32699;
var statearr_32786_35444 = state_32699__$1;
(statearr_32786_35444[(2)] = null);

(statearr_32786_35444[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (17))){
var inst_32635 = (state_32699[(18)]);
var inst_32643 = (state_32699[(14)]);
var inst_32671 = (inst_32635.cljs$core$IFn$_invoke$arity$1 ? inst_32635.cljs$core$IFn$_invoke$arity$1(inst_32643) : inst_32635.call(null,inst_32643));
var inst_32672 = cljs.core.not(inst_32671);
var state_32699__$1 = state_32699;
var statearr_32790_35445 = state_32699__$1;
(statearr_32790_35445[(2)] = inst_32672);

(statearr_32790_35445[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (3))){
var inst_32694 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32699__$1,inst_32694);
} else {
if((state_val_32700 === (12))){
var state_32699__$1 = state_32699;
var statearr_32803_35448 = state_32699__$1;
(statearr_32803_35448[(2)] = null);

(statearr_32803_35448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (2))){
var inst_32629 = (state_32699[(10)]);
var inst_32633 = (state_32699[(12)]);
var inst_32633__$1 = cljs.core.__destructure_map(inst_32629);
var inst_32634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32699__$1 = (function (){var statearr_32806 = state_32699;
(statearr_32806[(18)] = inst_32635);

(statearr_32806[(16)] = inst_32634);

(statearr_32806[(12)] = inst_32633__$1);

return statearr_32806;
})();
return cljs.core.async.ioc_alts_BANG_(state_32699__$1,(4),inst_32636);
} else {
if((state_val_32700 === (23))){
var inst_32680 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32680)){
var statearr_32811_35451 = state_32699__$1;
(statearr_32811_35451[(1)] = (24));

} else {
var statearr_32812_35452 = state_32699__$1;
(statearr_32812_35452[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (19))){
var inst_32675 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32819_35453 = state_32699__$1;
(statearr_32819_35453[(2)] = inst_32675);

(statearr_32819_35453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (11))){
var inst_32643 = (state_32699[(14)]);
var inst_32656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32643);
var state_32699__$1 = state_32699;
var statearr_32827_35454 = state_32699__$1;
(statearr_32827_35454[(2)] = inst_32656);

(statearr_32827_35454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (9))){
var inst_32663 = (state_32699[(19)]);
var inst_32634 = (state_32699[(16)]);
var inst_32643 = (state_32699[(14)]);
var inst_32663__$1 = (inst_32634.cljs$core$IFn$_invoke$arity$1 ? inst_32634.cljs$core$IFn$_invoke$arity$1(inst_32643) : inst_32634.call(null,inst_32643));
var state_32699__$1 = (function (){var statearr_32832 = state_32699;
(statearr_32832[(19)] = inst_32663__$1);

return statearr_32832;
})();
if(cljs.core.truth_(inst_32663__$1)){
var statearr_32833_35456 = state_32699__$1;
(statearr_32833_35456[(1)] = (14));

} else {
var statearr_32835_35461 = state_32699__$1;
(statearr_32835_35461[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (5))){
var inst_32645 = (state_32699[(13)]);
var state_32699__$1 = state_32699;
var statearr_32841_35462 = state_32699__$1;
(statearr_32841_35462[(2)] = inst_32645);

(statearr_32841_35462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (14))){
var inst_32663 = (state_32699[(19)]);
var state_32699__$1 = state_32699;
var statearr_32842_35463 = state_32699__$1;
(statearr_32842_35463[(2)] = inst_32663);

(statearr_32842_35463[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (26))){
var inst_32685 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32843_35466 = state_32699__$1;
(statearr_32843_35466[(2)] = inst_32685);

(statearr_32843_35466[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (16))){
var inst_32677 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32677)){
var statearr_32844_35469 = state_32699__$1;
(statearr_32844_35469[(1)] = (20));

} else {
var statearr_32847_35471 = state_32699__$1;
(statearr_32847_35471[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (10))){
var inst_32691 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32850_35476 = state_32699__$1;
(statearr_32850_35476[(2)] = inst_32691);

(statearr_32850_35476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (18))){
var inst_32668 = (state_32699[(15)]);
var state_32699__$1 = state_32699;
var statearr_32855_35477 = state_32699__$1;
(statearr_32855_35477[(2)] = inst_32668);

(statearr_32855_35477[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (8))){
var inst_32642 = (state_32699[(7)]);
var inst_32654 = (inst_32642 == null);
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32654)){
var statearr_32867_35479 = state_32699__$1;
(statearr_32867_35479[(1)] = (11));

} else {
var statearr_32868_35480 = state_32699__$1;
(statearr_32868_35480[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29474__auto__ = null;
var cljs$core$async$mix_$_state_machine__29474__auto____0 = (function (){
var statearr_32872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32872[(0)] = cljs$core$async$mix_$_state_machine__29474__auto__);

(statearr_32872[(1)] = (1));

return statearr_32872;
});
var cljs$core$async$mix_$_state_machine__29474__auto____1 = (function (state_32699){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32699);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32877){var ex__29477__auto__ = e32877;
var statearr_32878_35488 = state_32699;
(statearr_32878_35488[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32699[(4)]))){
var statearr_32879_35493 = state_32699;
(statearr_32879_35493[(1)] = cljs.core.first((state_32699[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35494 = state_32699;
state_32699 = G__35494;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29474__auto__ = function(state_32699){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29474__auto____1.call(this,state_32699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29474__auto____0;
cljs$core$async$mix_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29474__auto____1;
return cljs$core$async$mix_$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_32880 = f__30699__auto__();
(statearr_32880[(6)] = c__30698__auto___35425);

return statearr_32880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35499 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35499(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35511 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35511(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35512 = (function() {
var G__35513 = null;
var G__35513__1 = (function (p){
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
var G__35513__2 = (function (p,v){
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
G__35513 = function(p,v){
switch(arguments.length){
case 1:
return G__35513__1.call(this,p);
case 2:
return G__35513__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35513.cljs$core$IFn$_invoke$arity$1 = G__35513__1;
G__35513.cljs$core$IFn$_invoke$arity$2 = G__35513__2;
return G__35513;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32923 = arguments.length;
switch (G__32923) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35512(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35512(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32955 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32956){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32956 = meta32956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32957,meta32956__$1){
var self__ = this;
var _32957__$1 = this;
return (new cljs.core.async.t_cljs$core$async32955(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32956__$1));
}));

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32957){
var self__ = this;
var _32957__$1 = this;
return self__.meta32956;
}));

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32956","meta32956",-1974383156,null)], null);
}));

(cljs.core.async.t_cljs$core$async32955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32955");

(cljs.core.async.t_cljs$core$async32955.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32955.
 */
cljs.core.async.__GT_t_cljs$core$async32955 = (function cljs$core$async$__GT_t_cljs$core$async32955(ch,topic_fn,buf_fn,mults,ensure_mult,meta32956){
return (new cljs.core.async.t_cljs$core$async32955(ch,topic_fn,buf_fn,mults,ensure_mult,meta32956));
});


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
var G__32947 = arguments.length;
switch (G__32947) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32935_SHARP_){
if(cljs.core.truth_((p1__32935_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32935_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32935_SHARP_.call(null,topic)))){
return p1__32935_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32935_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32955(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30698__auto___35530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_33062){
var state_val_33063 = (state_33062[(1)]);
if((state_val_33063 === (7))){
var inst_33058 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33072_35533 = state_33062__$1;
(statearr_33072_35533[(2)] = inst_33058);

(statearr_33072_35533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (20))){
var state_33062__$1 = state_33062;
var statearr_33074_35535 = state_33062__$1;
(statearr_33074_35535[(2)] = null);

(statearr_33074_35535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (1))){
var state_33062__$1 = state_33062;
var statearr_33076_35538 = state_33062__$1;
(statearr_33076_35538[(2)] = null);

(statearr_33076_35538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (24))){
var inst_33040 = (state_33062[(7)]);
var inst_33050 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33040);
var state_33062__$1 = state_33062;
var statearr_33081_35541 = state_33062__$1;
(statearr_33081_35541[(2)] = inst_33050);

(statearr_33081_35541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (4))){
var inst_32982 = (state_33062[(8)]);
var inst_32982__$1 = (state_33062[(2)]);
var inst_32983 = (inst_32982__$1 == null);
var state_33062__$1 = (function (){var statearr_33086 = state_33062;
(statearr_33086[(8)] = inst_32982__$1);

return statearr_33086;
})();
if(cljs.core.truth_(inst_32983)){
var statearr_33089_35543 = state_33062__$1;
(statearr_33089_35543[(1)] = (5));

} else {
var statearr_33090_35544 = state_33062__$1;
(statearr_33090_35544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (15))){
var inst_33033 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33091_35545 = state_33062__$1;
(statearr_33091_35545[(2)] = inst_33033);

(statearr_33091_35545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (21))){
var inst_33055 = (state_33062[(2)]);
var state_33062__$1 = (function (){var statearr_33093 = state_33062;
(statearr_33093[(9)] = inst_33055);

return statearr_33093;
})();
var statearr_33095_35546 = state_33062__$1;
(statearr_33095_35546[(2)] = null);

(statearr_33095_35546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (13))){
var inst_33015 = (state_33062[(10)]);
var inst_33017 = cljs.core.chunked_seq_QMARK_(inst_33015);
var state_33062__$1 = state_33062;
if(inst_33017){
var statearr_33108_35547 = state_33062__$1;
(statearr_33108_35547[(1)] = (16));

} else {
var statearr_33109_35548 = state_33062__$1;
(statearr_33109_35548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (22))){
var inst_33047 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
if(cljs.core.truth_(inst_33047)){
var statearr_33111_35549 = state_33062__$1;
(statearr_33111_35549[(1)] = (23));

} else {
var statearr_33112_35550 = state_33062__$1;
(statearr_33112_35550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (6))){
var inst_32982 = (state_33062[(8)]);
var inst_33040 = (state_33062[(7)]);
var inst_33043 = (state_33062[(11)]);
var inst_33040__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32982) : topic_fn.call(null,inst_32982));
var inst_33042 = cljs.core.deref(mults);
var inst_33043__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33042,inst_33040__$1);
var state_33062__$1 = (function (){var statearr_33113 = state_33062;
(statearr_33113[(7)] = inst_33040__$1);

(statearr_33113[(11)] = inst_33043__$1);

return statearr_33113;
})();
if(cljs.core.truth_(inst_33043__$1)){
var statearr_33115_35556 = state_33062__$1;
(statearr_33115_35556[(1)] = (19));

} else {
var statearr_33117_35557 = state_33062__$1;
(statearr_33117_35557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (25))){
var inst_33052 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33131_35558 = state_33062__$1;
(statearr_33131_35558[(2)] = inst_33052);

(statearr_33131_35558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (17))){
var inst_33015 = (state_33062[(10)]);
var inst_33024 = cljs.core.first(inst_33015);
var inst_33025 = cljs.core.async.muxch_STAR_(inst_33024);
var inst_33026 = cljs.core.async.close_BANG_(inst_33025);
var inst_33027 = cljs.core.next(inst_33015);
var inst_32992 = inst_33027;
var inst_32993 = null;
var inst_32994 = (0);
var inst_32995 = (0);
var state_33062__$1 = (function (){var statearr_33138 = state_33062;
(statearr_33138[(12)] = inst_33026);

(statearr_33138[(13)] = inst_32995);

(statearr_33138[(14)] = inst_32993);

(statearr_33138[(15)] = inst_32992);

(statearr_33138[(16)] = inst_32994);

return statearr_33138;
})();
var statearr_33139_35563 = state_33062__$1;
(statearr_33139_35563[(2)] = null);

(statearr_33139_35563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (3))){
var inst_33060 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33062__$1,inst_33060);
} else {
if((state_val_33063 === (12))){
var inst_33036 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33141_35564 = state_33062__$1;
(statearr_33141_35564[(2)] = inst_33036);

(statearr_33141_35564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (2))){
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33062__$1,(4),ch);
} else {
if((state_val_33063 === (23))){
var state_33062__$1 = state_33062;
var statearr_33146_35568 = state_33062__$1;
(statearr_33146_35568[(2)] = null);

(statearr_33146_35568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (19))){
var inst_32982 = (state_33062[(8)]);
var inst_33043 = (state_33062[(11)]);
var inst_33045 = cljs.core.async.muxch_STAR_(inst_33043);
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33062__$1,(22),inst_33045,inst_32982);
} else {
if((state_val_33063 === (11))){
var inst_33015 = (state_33062[(10)]);
var inst_32992 = (state_33062[(15)]);
var inst_33015__$1 = cljs.core.seq(inst_32992);
var state_33062__$1 = (function (){var statearr_33157 = state_33062;
(statearr_33157[(10)] = inst_33015__$1);

return statearr_33157;
})();
if(inst_33015__$1){
var statearr_33159_35571 = state_33062__$1;
(statearr_33159_35571[(1)] = (13));

} else {
var statearr_33160_35572 = state_33062__$1;
(statearr_33160_35572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (9))){
var inst_33038 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33162_35573 = state_33062__$1;
(statearr_33162_35573[(2)] = inst_33038);

(statearr_33162_35573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (5))){
var inst_32989 = cljs.core.deref(mults);
var inst_32990 = cljs.core.vals(inst_32989);
var inst_32991 = cljs.core.seq(inst_32990);
var inst_32992 = inst_32991;
var inst_32993 = null;
var inst_32994 = (0);
var inst_32995 = (0);
var state_33062__$1 = (function (){var statearr_33176 = state_33062;
(statearr_33176[(13)] = inst_32995);

(statearr_33176[(14)] = inst_32993);

(statearr_33176[(15)] = inst_32992);

(statearr_33176[(16)] = inst_32994);

return statearr_33176;
})();
var statearr_33191_35574 = state_33062__$1;
(statearr_33191_35574[(2)] = null);

(statearr_33191_35574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (14))){
var state_33062__$1 = state_33062;
var statearr_33195_35576 = state_33062__$1;
(statearr_33195_35576[(2)] = null);

(statearr_33195_35576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (16))){
var inst_33015 = (state_33062[(10)]);
var inst_33019 = cljs.core.chunk_first(inst_33015);
var inst_33020 = cljs.core.chunk_rest(inst_33015);
var inst_33021 = cljs.core.count(inst_33019);
var inst_32992 = inst_33020;
var inst_32993 = inst_33019;
var inst_32994 = inst_33021;
var inst_32995 = (0);
var state_33062__$1 = (function (){var statearr_33200 = state_33062;
(statearr_33200[(13)] = inst_32995);

(statearr_33200[(14)] = inst_32993);

(statearr_33200[(15)] = inst_32992);

(statearr_33200[(16)] = inst_32994);

return statearr_33200;
})();
var statearr_33201_35583 = state_33062__$1;
(statearr_33201_35583[(2)] = null);

(statearr_33201_35583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (10))){
var inst_32995 = (state_33062[(13)]);
var inst_32993 = (state_33062[(14)]);
var inst_32992 = (state_33062[(15)]);
var inst_32994 = (state_33062[(16)]);
var inst_33009 = cljs.core._nth(inst_32993,inst_32995);
var inst_33010 = cljs.core.async.muxch_STAR_(inst_33009);
var inst_33011 = cljs.core.async.close_BANG_(inst_33010);
var inst_33012 = (inst_32995 + (1));
var tmp33192 = inst_32993;
var tmp33193 = inst_32992;
var tmp33194 = inst_32994;
var inst_32992__$1 = tmp33193;
var inst_32993__$1 = tmp33192;
var inst_32994__$1 = tmp33194;
var inst_32995__$1 = inst_33012;
var state_33062__$1 = (function (){var statearr_33209 = state_33062;
(statearr_33209[(13)] = inst_32995__$1);

(statearr_33209[(14)] = inst_32993__$1);

(statearr_33209[(15)] = inst_32992__$1);

(statearr_33209[(16)] = inst_32994__$1);

(statearr_33209[(17)] = inst_33011);

return statearr_33209;
})();
var statearr_33210_35586 = state_33062__$1;
(statearr_33210_35586[(2)] = null);

(statearr_33210_35586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (18))){
var inst_33030 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33212_35588 = state_33062__$1;
(statearr_33212_35588[(2)] = inst_33030);

(statearr_33212_35588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (8))){
var inst_32995 = (state_33062[(13)]);
var inst_32994 = (state_33062[(16)]);
var inst_33006 = (inst_32995 < inst_32994);
var inst_33007 = inst_33006;
var state_33062__$1 = state_33062;
if(cljs.core.truth_(inst_33007)){
var statearr_33216_35589 = state_33062__$1;
(statearr_33216_35589[(1)] = (10));

} else {
var statearr_33219_35590 = state_33062__$1;
(statearr_33219_35590[(1)] = (11));

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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_33062){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_33062);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e33231){var ex__29477__auto__ = e33231;
var statearr_33235_35594 = state_33062;
(statearr_33235_35594[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_33062[(4)]))){
var statearr_33242_35595 = state_33062;
(statearr_33242_35595[(1)] = cljs.core.first((state_33062[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35596 = state_33062;
state_33062 = G__35596;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_33062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_33062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_33251 = f__30699__auto__();
(statearr_33251[(6)] = c__30698__auto___35530);

return statearr_33251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
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
var G__33256 = arguments.length;
switch (G__33256) {
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
var G__33282 = arguments.length;
switch (G__33282) {
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
var G__33290 = arguments.length;
switch (G__33290) {
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
var c__30698__auto___35613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_33379){
var state_val_33380 = (state_33379[(1)]);
if((state_val_33380 === (7))){
var state_33379__$1 = state_33379;
var statearr_33393_35614 = state_33379__$1;
(statearr_33393_35614[(2)] = null);

(statearr_33393_35614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (1))){
var state_33379__$1 = state_33379;
var statearr_33395_35615 = state_33379__$1;
(statearr_33395_35615[(2)] = null);

(statearr_33395_35615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (4))){
var inst_33323 = (state_33379[(7)]);
var inst_33320 = (state_33379[(8)]);
var inst_33325 = (inst_33323 < inst_33320);
var state_33379__$1 = state_33379;
if(cljs.core.truth_(inst_33325)){
var statearr_33399_35616 = state_33379__$1;
(statearr_33399_35616[(1)] = (6));

} else {
var statearr_33400_35617 = state_33379__$1;
(statearr_33400_35617[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (15))){
var inst_33363 = (state_33379[(9)]);
var inst_33369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33363);
var state_33379__$1 = state_33379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33379__$1,(17),out,inst_33369);
} else {
if((state_val_33380 === (13))){
var inst_33363 = (state_33379[(9)]);
var inst_33363__$1 = (state_33379[(2)]);
var inst_33365 = cljs.core.some(cljs.core.nil_QMARK_,inst_33363__$1);
var state_33379__$1 = (function (){var statearr_33404 = state_33379;
(statearr_33404[(9)] = inst_33363__$1);

return statearr_33404;
})();
if(cljs.core.truth_(inst_33365)){
var statearr_33405_35618 = state_33379__$1;
(statearr_33405_35618[(1)] = (14));

} else {
var statearr_33406_35619 = state_33379__$1;
(statearr_33406_35619[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (6))){
var state_33379__$1 = state_33379;
var statearr_33410_35620 = state_33379__$1;
(statearr_33410_35620[(2)] = null);

(statearr_33410_35620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (17))){
var inst_33371 = (state_33379[(2)]);
var state_33379__$1 = (function (){var statearr_33426 = state_33379;
(statearr_33426[(10)] = inst_33371);

return statearr_33426;
})();
var statearr_33433_35621 = state_33379__$1;
(statearr_33433_35621[(2)] = null);

(statearr_33433_35621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (3))){
var inst_33376 = (state_33379[(2)]);
var state_33379__$1 = state_33379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33379__$1,inst_33376);
} else {
if((state_val_33380 === (12))){
var _ = (function (){var statearr_33437 = state_33379;
(statearr_33437[(4)] = cljs.core.rest((state_33379[(4)])));

return statearr_33437;
})();
var state_33379__$1 = state_33379;
var ex33421 = (state_33379__$1[(2)]);
var statearr_33438_35623 = state_33379__$1;
(statearr_33438_35623[(5)] = ex33421);


if((ex33421 instanceof Object)){
var statearr_33439_35624 = state_33379__$1;
(statearr_33439_35624[(1)] = (11));

(statearr_33439_35624[(5)] = null);

} else {
throw ex33421;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (2))){
var inst_33318 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33320 = cnt;
var inst_33323 = (0);
var state_33379__$1 = (function (){var statearr_33441 = state_33379;
(statearr_33441[(11)] = inst_33318);

(statearr_33441[(7)] = inst_33323);

(statearr_33441[(8)] = inst_33320);

return statearr_33441;
})();
var statearr_33451_35626 = state_33379__$1;
(statearr_33451_35626[(2)] = null);

(statearr_33451_35626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (11))){
var inst_33339 = (state_33379[(2)]);
var inst_33340 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33379__$1 = (function (){var statearr_33456 = state_33379;
(statearr_33456[(12)] = inst_33339);

return statearr_33456;
})();
var statearr_33457_35627 = state_33379__$1;
(statearr_33457_35627[(2)] = inst_33340);

(statearr_33457_35627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (9))){
var inst_33323 = (state_33379[(7)]);
var _ = (function (){var statearr_33458 = state_33379;
(statearr_33458[(4)] = cljs.core.cons((12),(state_33379[(4)])));

return statearr_33458;
})();
var inst_33346 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33323) : chs__$1.call(null,inst_33323));
var inst_33347 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33323) : done.call(null,inst_33323));
var inst_33348 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33346,inst_33347);
var ___$1 = (function (){var statearr_33460 = state_33379;
(statearr_33460[(4)] = cljs.core.rest((state_33379[(4)])));

return statearr_33460;
})();
var state_33379__$1 = state_33379;
var statearr_33465_35628 = state_33379__$1;
(statearr_33465_35628[(2)] = inst_33348);

(statearr_33465_35628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (5))){
var inst_33358 = (state_33379[(2)]);
var state_33379__$1 = (function (){var statearr_33469 = state_33379;
(statearr_33469[(13)] = inst_33358);

return statearr_33469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33379__$1,(13),dchan);
} else {
if((state_val_33380 === (14))){
var inst_33367 = cljs.core.async.close_BANG_(out);
var state_33379__$1 = state_33379;
var statearr_33472_35629 = state_33379__$1;
(statearr_33472_35629[(2)] = inst_33367);

(statearr_33472_35629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (16))){
var inst_33374 = (state_33379[(2)]);
var state_33379__$1 = state_33379;
var statearr_33474_35630 = state_33379__$1;
(statearr_33474_35630[(2)] = inst_33374);

(statearr_33474_35630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (10))){
var inst_33323 = (state_33379[(7)]);
var inst_33351 = (state_33379[(2)]);
var inst_33352 = (inst_33323 + (1));
var inst_33323__$1 = inst_33352;
var state_33379__$1 = (function (){var statearr_33475 = state_33379;
(statearr_33475[(14)] = inst_33351);

(statearr_33475[(7)] = inst_33323__$1);

return statearr_33475;
})();
var statearr_33479_35633 = state_33379__$1;
(statearr_33479_35633[(2)] = null);

(statearr_33479_35633[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33380 === (8))){
var inst_33356 = (state_33379[(2)]);
var state_33379__$1 = state_33379;
var statearr_33488_35634 = state_33379__$1;
(statearr_33488_35634[(2)] = inst_33356);

(statearr_33488_35634[(1)] = (5));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_33491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33491[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_33491[(1)] = (1));

return statearr_33491;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_33379){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_33379);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e33493){var ex__29477__auto__ = e33493;
var statearr_33500_35635 = state_33379;
(statearr_33500_35635[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_33379[(4)]))){
var statearr_33501_35636 = state_33379;
(statearr_33501_35636[(1)] = cljs.core.first((state_33379[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35637 = state_33379;
state_33379 = G__35637;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_33379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_33379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_33508 = f__30699__auto__();
(statearr_33508[(6)] = c__30698__auto___35613);

return statearr_33508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
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
var G__33512 = arguments.length;
switch (G__33512) {
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
var c__30698__auto___35642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_33553){
var state_val_33554 = (state_33553[(1)]);
if((state_val_33554 === (7))){
var inst_33526 = (state_33553[(7)]);
var inst_33525 = (state_33553[(8)]);
var inst_33525__$1 = (state_33553[(2)]);
var inst_33526__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33525__$1,(0),null);
var inst_33527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33525__$1,(1),null);
var inst_33528 = (inst_33526__$1 == null);
var state_33553__$1 = (function (){var statearr_33560 = state_33553;
(statearr_33560[(7)] = inst_33526__$1);

(statearr_33560[(8)] = inst_33525__$1);

(statearr_33560[(9)] = inst_33527);

return statearr_33560;
})();
if(cljs.core.truth_(inst_33528)){
var statearr_33561_35643 = state_33553__$1;
(statearr_33561_35643[(1)] = (8));

} else {
var statearr_33562_35644 = state_33553__$1;
(statearr_33562_35644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (1))){
var inst_33515 = cljs.core.vec(chs);
var inst_33516 = inst_33515;
var state_33553__$1 = (function (){var statearr_33570 = state_33553;
(statearr_33570[(10)] = inst_33516);

return statearr_33570;
})();
var statearr_33571_35645 = state_33553__$1;
(statearr_33571_35645[(2)] = null);

(statearr_33571_35645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (4))){
var inst_33516 = (state_33553[(10)]);
var state_33553__$1 = state_33553;
return cljs.core.async.ioc_alts_BANG_(state_33553__$1,(7),inst_33516);
} else {
if((state_val_33554 === (6))){
var inst_33544 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33576_35646 = state_33553__$1;
(statearr_33576_35646[(2)] = inst_33544);

(statearr_33576_35646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (3))){
var inst_33546 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33553__$1,inst_33546);
} else {
if((state_val_33554 === (2))){
var inst_33516 = (state_33553[(10)]);
var inst_33518 = cljs.core.count(inst_33516);
var inst_33519 = (inst_33518 > (0));
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33519)){
var statearr_33588_35648 = state_33553__$1;
(statearr_33588_35648[(1)] = (4));

} else {
var statearr_33594_35649 = state_33553__$1;
(statearr_33594_35649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (11))){
var inst_33516 = (state_33553[(10)]);
var inst_33537 = (state_33553[(2)]);
var tmp33578 = inst_33516;
var inst_33516__$1 = tmp33578;
var state_33553__$1 = (function (){var statearr_33595 = state_33553;
(statearr_33595[(11)] = inst_33537);

(statearr_33595[(10)] = inst_33516__$1);

return statearr_33595;
})();
var statearr_33596_35652 = state_33553__$1;
(statearr_33596_35652[(2)] = null);

(statearr_33596_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (9))){
var inst_33526 = (state_33553[(7)]);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33553__$1,(11),out,inst_33526);
} else {
if((state_val_33554 === (5))){
var inst_33542 = cljs.core.async.close_BANG_(out);
var state_33553__$1 = state_33553;
var statearr_33599_35654 = state_33553__$1;
(statearr_33599_35654[(2)] = inst_33542);

(statearr_33599_35654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (10))){
var inst_33540 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33600_35655 = state_33553__$1;
(statearr_33600_35655[(2)] = inst_33540);

(statearr_33600_35655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (8))){
var inst_33526 = (state_33553[(7)]);
var inst_33525 = (state_33553[(8)]);
var inst_33527 = (state_33553[(9)]);
var inst_33516 = (state_33553[(10)]);
var inst_33531 = (function (){var cs = inst_33516;
var vec__33521 = inst_33525;
var v = inst_33526;
var c = inst_33527;
return (function (p1__33509_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33509_SHARP_);
});
})();
var inst_33533 = cljs.core.filterv(inst_33531,inst_33516);
var inst_33516__$1 = inst_33533;
var state_33553__$1 = (function (){var statearr_33609 = state_33553;
(statearr_33609[(10)] = inst_33516__$1);

return statearr_33609;
})();
var statearr_33610_35660 = state_33553__$1;
(statearr_33610_35660[(2)] = null);

(statearr_33610_35660[(1)] = (2));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_33611 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33611[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_33611[(1)] = (1));

return statearr_33611;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_33553){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_33553);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e33612){var ex__29477__auto__ = e33612;
var statearr_33613_35663 = state_33553;
(statearr_33613_35663[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_33553[(4)]))){
var statearr_33614_35664 = state_33553;
(statearr_33614_35664[(1)] = cljs.core.first((state_33553[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35666 = state_33553;
state_33553 = G__35666;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_33553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_33553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_33615 = f__30699__auto__();
(statearr_33615[(6)] = c__30698__auto___35642);

return statearr_33615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
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
var G__33627 = arguments.length;
switch (G__33627) {
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
var c__30698__auto___35669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_33660){
var state_val_33661 = (state_33660[(1)]);
if((state_val_33661 === (7))){
var inst_33639 = (state_33660[(7)]);
var inst_33639__$1 = (state_33660[(2)]);
var inst_33640 = (inst_33639__$1 == null);
var inst_33641 = cljs.core.not(inst_33640);
var state_33660__$1 = (function (){var statearr_33665 = state_33660;
(statearr_33665[(7)] = inst_33639__$1);

return statearr_33665;
})();
if(inst_33641){
var statearr_33666_35670 = state_33660__$1;
(statearr_33666_35670[(1)] = (8));

} else {
var statearr_33667_35671 = state_33660__$1;
(statearr_33667_35671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (1))){
var inst_33631 = (0);
var state_33660__$1 = (function (){var statearr_33669 = state_33660;
(statearr_33669[(8)] = inst_33631);

return statearr_33669;
})();
var statearr_33671_35672 = state_33660__$1;
(statearr_33671_35672[(2)] = null);

(statearr_33671_35672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (4))){
var state_33660__$1 = state_33660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33660__$1,(7),ch);
} else {
if((state_val_33661 === (6))){
var inst_33652 = (state_33660[(2)]);
var state_33660__$1 = state_33660;
var statearr_33673_35677 = state_33660__$1;
(statearr_33673_35677[(2)] = inst_33652);

(statearr_33673_35677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (3))){
var inst_33654 = (state_33660[(2)]);
var inst_33655 = cljs.core.async.close_BANG_(out);
var state_33660__$1 = (function (){var statearr_33674 = state_33660;
(statearr_33674[(9)] = inst_33654);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33660__$1,inst_33655);
} else {
if((state_val_33661 === (2))){
var inst_33631 = (state_33660[(8)]);
var inst_33633 = (inst_33631 < n);
var state_33660__$1 = state_33660;
if(cljs.core.truth_(inst_33633)){
var statearr_33683_35678 = state_33660__$1;
(statearr_33683_35678[(1)] = (4));

} else {
var statearr_33684_35679 = state_33660__$1;
(statearr_33684_35679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (11))){
var inst_33631 = (state_33660[(8)]);
var inst_33644 = (state_33660[(2)]);
var inst_33645 = (inst_33631 + (1));
var inst_33631__$1 = inst_33645;
var state_33660__$1 = (function (){var statearr_33690 = state_33660;
(statearr_33690[(10)] = inst_33644);

(statearr_33690[(8)] = inst_33631__$1);

return statearr_33690;
})();
var statearr_33696_35681 = state_33660__$1;
(statearr_33696_35681[(2)] = null);

(statearr_33696_35681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (9))){
var state_33660__$1 = state_33660;
var statearr_33697_35683 = state_33660__$1;
(statearr_33697_35683[(2)] = null);

(statearr_33697_35683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (5))){
var state_33660__$1 = state_33660;
var statearr_33701_35684 = state_33660__$1;
(statearr_33701_35684[(2)] = null);

(statearr_33701_35684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (10))){
var inst_33649 = (state_33660[(2)]);
var state_33660__$1 = state_33660;
var statearr_33704_35685 = state_33660__$1;
(statearr_33704_35685[(2)] = inst_33649);

(statearr_33704_35685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33661 === (8))){
var inst_33639 = (state_33660[(7)]);
var state_33660__$1 = state_33660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33660__$1,(11),out,inst_33639);
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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_33705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33705[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_33705[(1)] = (1));

return statearr_33705;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_33660){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_33660);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e33706){var ex__29477__auto__ = e33706;
var statearr_33707_35688 = state_33660;
(statearr_33707_35688[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_33660[(4)]))){
var statearr_33708_35692 = state_33660;
(statearr_33708_35692[(1)] = cljs.core.first((state_33660[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35693 = state_33660;
state_33660 = G__35693;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_33660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_33660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_33709 = f__30699__auto__();
(statearr_33709[(6)] = c__30698__auto___35669);

return statearr_33709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33737 = (function (f,ch,meta33728,_,fn1,meta33738){
this.f = f;
this.ch = ch;
this.meta33728 = meta33728;
this._ = _;
this.fn1 = fn1;
this.meta33738 = meta33738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33739,meta33738__$1){
var self__ = this;
var _33739__$1 = this;
return (new cljs.core.async.t_cljs$core$async33737(self__.f,self__.ch,self__.meta33728,self__._,self__.fn1,meta33738__$1));
}));

(cljs.core.async.t_cljs$core$async33737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33739){
var self__ = this;
var _33739__$1 = this;
return self__.meta33738;
}));

(cljs.core.async.t_cljs$core$async33737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33714_SHARP_){
var G__33754 = (((p1__33714_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33714_SHARP_) : self__.f.call(null,p1__33714_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33754) : f1.call(null,G__33754));
});
}));

(cljs.core.async.t_cljs$core$async33737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33728","meta33728",-220358829,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33727","cljs.core.async/t_cljs$core$async33727",-62083078,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33738","meta33738",-628086672,null)], null);
}));

(cljs.core.async.t_cljs$core$async33737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33737");

(cljs.core.async.t_cljs$core$async33737.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33737.
 */
cljs.core.async.__GT_t_cljs$core$async33737 = (function cljs$core$async$__GT_t_cljs$core$async33737(f,ch,meta33728,_,fn1,meta33738){
return (new cljs.core.async.t_cljs$core$async33737(f,ch,meta33728,_,fn1,meta33738));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33727 = (function (f,ch,meta33728){
this.f = f;
this.ch = ch;
this.meta33728 = meta33728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33729,meta33728__$1){
var self__ = this;
var _33729__$1 = this;
return (new cljs.core.async.t_cljs$core$async33727(self__.f,self__.ch,meta33728__$1));
}));

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33729){
var self__ = this;
var _33729__$1 = this;
return self__.meta33728;
}));

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33737(self__.f,self__.ch,self__.meta33728,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33762 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33762) : self__.f.call(null,G__33762));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33728","meta33728",-220358829,null)], null);
}));

(cljs.core.async.t_cljs$core$async33727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33727");

(cljs.core.async.t_cljs$core$async33727.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33727.
 */
cljs.core.async.__GT_t_cljs$core$async33727 = (function cljs$core$async$__GT_t_cljs$core$async33727(f,ch,meta33728){
return (new cljs.core.async.t_cljs$core$async33727(f,ch,meta33728));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33727(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33770 = (function (f,ch,meta33771){
this.f = f;
this.ch = ch;
this.meta33771 = meta33771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33772,meta33771__$1){
var self__ = this;
var _33772__$1 = this;
return (new cljs.core.async.t_cljs$core$async33770(self__.f,self__.ch,meta33771__$1));
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33772){
var self__ = this;
var _33772__$1 = this;
return self__.meta33771;
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33771","meta33771",1800743439,null)], null);
}));

(cljs.core.async.t_cljs$core$async33770.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33770");

(cljs.core.async.t_cljs$core$async33770.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33770");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33770.
 */
cljs.core.async.__GT_t_cljs$core$async33770 = (function cljs$core$async$__GT_t_cljs$core$async33770(f,ch,meta33771){
return (new cljs.core.async.t_cljs$core$async33770(f,ch,meta33771));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33770(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33786 = (function (p,ch,meta33788){
this.p = p;
this.ch = ch;
this.meta33788 = meta33788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33790,meta33788__$1){
var self__ = this;
var _33790__$1 = this;
return (new cljs.core.async.t_cljs$core$async33786(self__.p,self__.ch,meta33788__$1));
}));

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33790){
var self__ = this;
var _33790__$1 = this;
return self__.meta33788;
}));

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33788","meta33788",-1060865590,null)], null);
}));

(cljs.core.async.t_cljs$core$async33786.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33786");

(cljs.core.async.t_cljs$core$async33786.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33786");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33786.
 */
cljs.core.async.__GT_t_cljs$core$async33786 = (function cljs$core$async$__GT_t_cljs$core$async33786(p,ch,meta33788){
return (new cljs.core.async.t_cljs$core$async33786(p,ch,meta33788));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33786(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33853 = arguments.length;
switch (G__33853) {
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
var c__30698__auto___35720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_33885){
var state_val_33887 = (state_33885[(1)]);
if((state_val_33887 === (7))){
var inst_33881 = (state_33885[(2)]);
var state_33885__$1 = state_33885;
var statearr_33895_35721 = state_33885__$1;
(statearr_33895_35721[(2)] = inst_33881);

(statearr_33895_35721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (1))){
var state_33885__$1 = state_33885;
var statearr_33896_35723 = state_33885__$1;
(statearr_33896_35723[(2)] = null);

(statearr_33896_35723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (4))){
var inst_33866 = (state_33885[(7)]);
var inst_33866__$1 = (state_33885[(2)]);
var inst_33867 = (inst_33866__$1 == null);
var state_33885__$1 = (function (){var statearr_33898 = state_33885;
(statearr_33898[(7)] = inst_33866__$1);

return statearr_33898;
})();
if(cljs.core.truth_(inst_33867)){
var statearr_33900_35724 = state_33885__$1;
(statearr_33900_35724[(1)] = (5));

} else {
var statearr_33901_35725 = state_33885__$1;
(statearr_33901_35725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (6))){
var inst_33866 = (state_33885[(7)]);
var inst_33872 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33866) : p.call(null,inst_33866));
var state_33885__$1 = state_33885;
if(cljs.core.truth_(inst_33872)){
var statearr_33903_35727 = state_33885__$1;
(statearr_33903_35727[(1)] = (8));

} else {
var statearr_33904_35728 = state_33885__$1;
(statearr_33904_35728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (3))){
var inst_33883 = (state_33885[(2)]);
var state_33885__$1 = state_33885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33885__$1,inst_33883);
} else {
if((state_val_33887 === (2))){
var state_33885__$1 = state_33885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33885__$1,(4),ch);
} else {
if((state_val_33887 === (11))){
var inst_33875 = (state_33885[(2)]);
var state_33885__$1 = state_33885;
var statearr_33912_35729 = state_33885__$1;
(statearr_33912_35729[(2)] = inst_33875);

(statearr_33912_35729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (9))){
var state_33885__$1 = state_33885;
var statearr_33914_35731 = state_33885__$1;
(statearr_33914_35731[(2)] = null);

(statearr_33914_35731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (5))){
var inst_33870 = cljs.core.async.close_BANG_(out);
var state_33885__$1 = state_33885;
var statearr_33916_35732 = state_33885__$1;
(statearr_33916_35732[(2)] = inst_33870);

(statearr_33916_35732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (10))){
var inst_33878 = (state_33885[(2)]);
var state_33885__$1 = (function (){var statearr_33917 = state_33885;
(statearr_33917[(8)] = inst_33878);

return statearr_33917;
})();
var statearr_33918_35734 = state_33885__$1;
(statearr_33918_35734[(2)] = null);

(statearr_33918_35734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (8))){
var inst_33866 = (state_33885[(7)]);
var state_33885__$1 = state_33885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33885__$1,(11),out,inst_33866);
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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_33922 = [null,null,null,null,null,null,null,null,null];
(statearr_33922[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_33922[(1)] = (1));

return statearr_33922;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_33885){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_33885);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e33923){var ex__29477__auto__ = e33923;
var statearr_33925_35737 = state_33885;
(statearr_33925_35737[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_33885[(4)]))){
var statearr_33930_35738 = state_33885;
(statearr_33930_35738[(1)] = cljs.core.first((state_33885[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35739 = state_33885;
state_33885 = G__35739;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_33885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_33885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_33938 = f__30699__auto__();
(statearr_33938[(6)] = c__30698__auto___35720);

return statearr_33938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33946 = arguments.length;
switch (G__33946) {
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
var c__30698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_34020){
var state_val_34021 = (state_34020[(1)]);
if((state_val_34021 === (7))){
var inst_34016 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34023_35745 = state_34020__$1;
(statearr_34023_35745[(2)] = inst_34016);

(statearr_34023_35745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (20))){
var inst_33986 = (state_34020[(7)]);
var inst_33997 = (state_34020[(2)]);
var inst_33998 = cljs.core.next(inst_33986);
var inst_33967 = inst_33998;
var inst_33968 = null;
var inst_33969 = (0);
var inst_33970 = (0);
var state_34020__$1 = (function (){var statearr_34024 = state_34020;
(statearr_34024[(8)] = inst_33997);

(statearr_34024[(9)] = inst_33967);

(statearr_34024[(10)] = inst_33970);

(statearr_34024[(11)] = inst_33969);

(statearr_34024[(12)] = inst_33968);

return statearr_34024;
})();
var statearr_34025_35747 = state_34020__$1;
(statearr_34025_35747[(2)] = null);

(statearr_34025_35747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (1))){
var state_34020__$1 = state_34020;
var statearr_34029_35748 = state_34020__$1;
(statearr_34029_35748[(2)] = null);

(statearr_34029_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (4))){
var inst_33955 = (state_34020[(13)]);
var inst_33955__$1 = (state_34020[(2)]);
var inst_33956 = (inst_33955__$1 == null);
var state_34020__$1 = (function (){var statearr_34030 = state_34020;
(statearr_34030[(13)] = inst_33955__$1);

return statearr_34030;
})();
if(cljs.core.truth_(inst_33956)){
var statearr_34032_35750 = state_34020__$1;
(statearr_34032_35750[(1)] = (5));

} else {
var statearr_34033_35751 = state_34020__$1;
(statearr_34033_35751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (15))){
var state_34020__$1 = state_34020;
var statearr_34037_35752 = state_34020__$1;
(statearr_34037_35752[(2)] = null);

(statearr_34037_35752[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (21))){
var state_34020__$1 = state_34020;
var statearr_34038_35753 = state_34020__$1;
(statearr_34038_35753[(2)] = null);

(statearr_34038_35753[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (13))){
var inst_33967 = (state_34020[(9)]);
var inst_33970 = (state_34020[(10)]);
var inst_33969 = (state_34020[(11)]);
var inst_33968 = (state_34020[(12)]);
var inst_33981 = (state_34020[(2)]);
var inst_33983 = (inst_33970 + (1));
var tmp34034 = inst_33967;
var tmp34035 = inst_33969;
var tmp34036 = inst_33968;
var inst_33967__$1 = tmp34034;
var inst_33968__$1 = tmp34036;
var inst_33969__$1 = tmp34035;
var inst_33970__$1 = inst_33983;
var state_34020__$1 = (function (){var statearr_34039 = state_34020;
(statearr_34039[(14)] = inst_33981);

(statearr_34039[(9)] = inst_33967__$1);

(statearr_34039[(10)] = inst_33970__$1);

(statearr_34039[(11)] = inst_33969__$1);

(statearr_34039[(12)] = inst_33968__$1);

return statearr_34039;
})();
var statearr_34040_35756 = state_34020__$1;
(statearr_34040_35756[(2)] = null);

(statearr_34040_35756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (22))){
var state_34020__$1 = state_34020;
var statearr_34042_35757 = state_34020__$1;
(statearr_34042_35757[(2)] = null);

(statearr_34042_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (6))){
var inst_33955 = (state_34020[(13)]);
var inst_33965 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33955) : f.call(null,inst_33955));
var inst_33966 = cljs.core.seq(inst_33965);
var inst_33967 = inst_33966;
var inst_33968 = null;
var inst_33969 = (0);
var inst_33970 = (0);
var state_34020__$1 = (function (){var statearr_34044 = state_34020;
(statearr_34044[(9)] = inst_33967);

(statearr_34044[(10)] = inst_33970);

(statearr_34044[(11)] = inst_33969);

(statearr_34044[(12)] = inst_33968);

return statearr_34044;
})();
var statearr_34045_35758 = state_34020__$1;
(statearr_34045_35758[(2)] = null);

(statearr_34045_35758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (17))){
var inst_33986 = (state_34020[(7)]);
var inst_33990 = cljs.core.chunk_first(inst_33986);
var inst_33991 = cljs.core.chunk_rest(inst_33986);
var inst_33992 = cljs.core.count(inst_33990);
var inst_33967 = inst_33991;
var inst_33968 = inst_33990;
var inst_33969 = inst_33992;
var inst_33970 = (0);
var state_34020__$1 = (function (){var statearr_34049 = state_34020;
(statearr_34049[(9)] = inst_33967);

(statearr_34049[(10)] = inst_33970);

(statearr_34049[(11)] = inst_33969);

(statearr_34049[(12)] = inst_33968);

return statearr_34049;
})();
var statearr_34050_35762 = state_34020__$1;
(statearr_34050_35762[(2)] = null);

(statearr_34050_35762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (3))){
var inst_34018 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34020__$1,inst_34018);
} else {
if((state_val_34021 === (12))){
var inst_34006 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34052_35763 = state_34020__$1;
(statearr_34052_35763[(2)] = inst_34006);

(statearr_34052_35763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (2))){
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34020__$1,(4),in$);
} else {
if((state_val_34021 === (23))){
var inst_34014 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34056_35764 = state_34020__$1;
(statearr_34056_35764[(2)] = inst_34014);

(statearr_34056_35764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (19))){
var inst_34001 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34063_35767 = state_34020__$1;
(statearr_34063_35767[(2)] = inst_34001);

(statearr_34063_35767[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (11))){
var inst_33986 = (state_34020[(7)]);
var inst_33967 = (state_34020[(9)]);
var inst_33986__$1 = cljs.core.seq(inst_33967);
var state_34020__$1 = (function (){var statearr_34064 = state_34020;
(statearr_34064[(7)] = inst_33986__$1);

return statearr_34064;
})();
if(inst_33986__$1){
var statearr_34066_35768 = state_34020__$1;
(statearr_34066_35768[(1)] = (14));

} else {
var statearr_34067_35769 = state_34020__$1;
(statearr_34067_35769[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (9))){
var inst_34008 = (state_34020[(2)]);
var inst_34009 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34020__$1 = (function (){var statearr_34068 = state_34020;
(statearr_34068[(15)] = inst_34008);

return statearr_34068;
})();
if(cljs.core.truth_(inst_34009)){
var statearr_34074_35770 = state_34020__$1;
(statearr_34074_35770[(1)] = (21));

} else {
var statearr_34075_35771 = state_34020__$1;
(statearr_34075_35771[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (5))){
var inst_33958 = cljs.core.async.close_BANG_(out);
var state_34020__$1 = state_34020;
var statearr_34076_35775 = state_34020__$1;
(statearr_34076_35775[(2)] = inst_33958);

(statearr_34076_35775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (14))){
var inst_33986 = (state_34020[(7)]);
var inst_33988 = cljs.core.chunked_seq_QMARK_(inst_33986);
var state_34020__$1 = state_34020;
if(inst_33988){
var statearr_34079_35776 = state_34020__$1;
(statearr_34079_35776[(1)] = (17));

} else {
var statearr_34080_35777 = state_34020__$1;
(statearr_34080_35777[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (16))){
var inst_34004 = (state_34020[(2)]);
var state_34020__$1 = state_34020;
var statearr_34085_35778 = state_34020__$1;
(statearr_34085_35778[(2)] = inst_34004);

(statearr_34085_35778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34021 === (10))){
var inst_33970 = (state_34020[(10)]);
var inst_33968 = (state_34020[(12)]);
var inst_33978 = cljs.core._nth(inst_33968,inst_33970);
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34020__$1,(13),out,inst_33978);
} else {
if((state_val_34021 === (18))){
var inst_33986 = (state_34020[(7)]);
var inst_33995 = cljs.core.first(inst_33986);
var state_34020__$1 = state_34020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34020__$1,(20),out,inst_33995);
} else {
if((state_val_34021 === (8))){
var inst_33970 = (state_34020[(10)]);
var inst_33969 = (state_34020[(11)]);
var inst_33973 = (inst_33970 < inst_33969);
var inst_33975 = inst_33973;
var state_34020__$1 = state_34020;
if(cljs.core.truth_(inst_33975)){
var statearr_34092_35781 = state_34020__$1;
(statearr_34092_35781[(1)] = (10));

} else {
var statearr_34095_35782 = state_34020__$1;
(statearr_34095_35782[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_34110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34110[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__);

(statearr_34110[(1)] = (1));

return statearr_34110;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____1 = (function (state_34020){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_34020);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e34120){var ex__29477__auto__ = e34120;
var statearr_34127_35786 = state_34020;
(statearr_34127_35786[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_34020[(4)]))){
var statearr_34134_35787 = state_34020;
(statearr_34134_35787[(1)] = cljs.core.first((state_34020[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35788 = state_34020;
state_34020 = G__35788;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__ = function(state_34020){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____1.call(this,state_34020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_34139 = f__30699__auto__();
(statearr_34139[(6)] = c__30698__auto__);

return statearr_34139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));

return c__30698__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34154 = arguments.length;
switch (G__34154) {
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
var G__34161 = arguments.length;
switch (G__34161) {
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
var G__34178 = arguments.length;
switch (G__34178) {
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
var c__30698__auto___35797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_34209){
var state_val_34210 = (state_34209[(1)]);
if((state_val_34210 === (7))){
var inst_34204 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34212_35800 = state_34209__$1;
(statearr_34212_35800[(2)] = inst_34204);

(statearr_34212_35800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (1))){
var inst_34186 = null;
var state_34209__$1 = (function (){var statearr_34213 = state_34209;
(statearr_34213[(7)] = inst_34186);

return statearr_34213;
})();
var statearr_34214_35801 = state_34209__$1;
(statearr_34214_35801[(2)] = null);

(statearr_34214_35801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (4))){
var inst_34189 = (state_34209[(8)]);
var inst_34189__$1 = (state_34209[(2)]);
var inst_34190 = (inst_34189__$1 == null);
var inst_34191 = cljs.core.not(inst_34190);
var state_34209__$1 = (function (){var statearr_34215 = state_34209;
(statearr_34215[(8)] = inst_34189__$1);

return statearr_34215;
})();
if(inst_34191){
var statearr_34216_35802 = state_34209__$1;
(statearr_34216_35802[(1)] = (5));

} else {
var statearr_34220_35803 = state_34209__$1;
(statearr_34220_35803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (6))){
var state_34209__$1 = state_34209;
var statearr_34221_35804 = state_34209__$1;
(statearr_34221_35804[(2)] = null);

(statearr_34221_35804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (3))){
var inst_34206 = (state_34209[(2)]);
var inst_34207 = cljs.core.async.close_BANG_(out);
var state_34209__$1 = (function (){var statearr_34222 = state_34209;
(statearr_34222[(9)] = inst_34206);

return statearr_34222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34209__$1,inst_34207);
} else {
if((state_val_34210 === (2))){
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34209__$1,(4),ch);
} else {
if((state_val_34210 === (11))){
var inst_34189 = (state_34209[(8)]);
var inst_34198 = (state_34209[(2)]);
var inst_34186 = inst_34189;
var state_34209__$1 = (function (){var statearr_34223 = state_34209;
(statearr_34223[(10)] = inst_34198);

(statearr_34223[(7)] = inst_34186);

return statearr_34223;
})();
var statearr_34224_35807 = state_34209__$1;
(statearr_34224_35807[(2)] = null);

(statearr_34224_35807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (9))){
var inst_34189 = (state_34209[(8)]);
var state_34209__$1 = state_34209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34209__$1,(11),out,inst_34189);
} else {
if((state_val_34210 === (5))){
var inst_34186 = (state_34209[(7)]);
var inst_34189 = (state_34209[(8)]);
var inst_34193 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34189,inst_34186);
var state_34209__$1 = state_34209;
if(inst_34193){
var statearr_34226_35808 = state_34209__$1;
(statearr_34226_35808[(1)] = (8));

} else {
var statearr_34227_35809 = state_34209__$1;
(statearr_34227_35809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (10))){
var inst_34201 = (state_34209[(2)]);
var state_34209__$1 = state_34209;
var statearr_34229_35810 = state_34209__$1;
(statearr_34229_35810[(2)] = inst_34201);

(statearr_34229_35810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34210 === (8))){
var inst_34186 = (state_34209[(7)]);
var tmp34225 = inst_34186;
var inst_34186__$1 = tmp34225;
var state_34209__$1 = (function (){var statearr_34230 = state_34209;
(statearr_34230[(7)] = inst_34186__$1);

return statearr_34230;
})();
var statearr_34231_35811 = state_34209__$1;
(statearr_34231_35811[(2)] = null);

(statearr_34231_35811[(1)] = (2));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_34232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_34209){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_34209);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e34233){var ex__29477__auto__ = e34233;
var statearr_34235_35812 = state_34209;
(statearr_34235_35812[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_34209[(4)]))){
var statearr_34237_35813 = state_34209;
(statearr_34237_35813[(1)] = cljs.core.first((state_34209[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35815 = state_34209;
state_34209 = G__35815;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_34209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_34209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_34238 = f__30699__auto__();
(statearr_34238[(6)] = c__30698__auto___35797);

return statearr_34238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34244 = arguments.length;
switch (G__34244) {
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
var c__30698__auto___35817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_34287){
var state_val_34291 = (state_34287[(1)]);
if((state_val_34291 === (7))){
var inst_34282 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34307_35819 = state_34287__$1;
(statearr_34307_35819[(2)] = inst_34282);

(statearr_34307_35819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (1))){
var inst_34248 = (new Array(n));
var inst_34249 = inst_34248;
var inst_34250 = (0);
var state_34287__$1 = (function (){var statearr_34308 = state_34287;
(statearr_34308[(7)] = inst_34250);

(statearr_34308[(8)] = inst_34249);

return statearr_34308;
})();
var statearr_34310_35820 = state_34287__$1;
(statearr_34310_35820[(2)] = null);

(statearr_34310_35820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (4))){
var inst_34253 = (state_34287[(9)]);
var inst_34253__$1 = (state_34287[(2)]);
var inst_34254 = (inst_34253__$1 == null);
var inst_34255 = cljs.core.not(inst_34254);
var state_34287__$1 = (function (){var statearr_34315 = state_34287;
(statearr_34315[(9)] = inst_34253__$1);

return statearr_34315;
})();
if(inst_34255){
var statearr_34320_35823 = state_34287__$1;
(statearr_34320_35823[(1)] = (5));

} else {
var statearr_34321_35824 = state_34287__$1;
(statearr_34321_35824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (15))){
var inst_34276 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34323_35825 = state_34287__$1;
(statearr_34323_35825[(2)] = inst_34276);

(statearr_34323_35825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (13))){
var state_34287__$1 = state_34287;
var statearr_34328_35826 = state_34287__$1;
(statearr_34328_35826[(2)] = null);

(statearr_34328_35826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (6))){
var inst_34250 = (state_34287[(7)]);
var inst_34272 = (inst_34250 > (0));
var state_34287__$1 = state_34287;
if(cljs.core.truth_(inst_34272)){
var statearr_34329_35827 = state_34287__$1;
(statearr_34329_35827[(1)] = (12));

} else {
var statearr_34331_35828 = state_34287__$1;
(statearr_34331_35828[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (3))){
var inst_34284 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34287__$1,inst_34284);
} else {
if((state_val_34291 === (12))){
var inst_34249 = (state_34287[(8)]);
var inst_34274 = cljs.core.vec(inst_34249);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34287__$1,(15),out,inst_34274);
} else {
if((state_val_34291 === (2))){
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34287__$1,(4),ch);
} else {
if((state_val_34291 === (11))){
var inst_34265 = (state_34287[(2)]);
var inst_34267 = (new Array(n));
var inst_34249 = inst_34267;
var inst_34250 = (0);
var state_34287__$1 = (function (){var statearr_34340 = state_34287;
(statearr_34340[(7)] = inst_34250);

(statearr_34340[(8)] = inst_34249);

(statearr_34340[(10)] = inst_34265);

return statearr_34340;
})();
var statearr_34345_35833 = state_34287__$1;
(statearr_34345_35833[(2)] = null);

(statearr_34345_35833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (9))){
var inst_34249 = (state_34287[(8)]);
var inst_34263 = cljs.core.vec(inst_34249);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34287__$1,(11),out,inst_34263);
} else {
if((state_val_34291 === (5))){
var inst_34250 = (state_34287[(7)]);
var inst_34249 = (state_34287[(8)]);
var inst_34253 = (state_34287[(9)]);
var inst_34258 = (state_34287[(11)]);
var inst_34257 = (inst_34249[inst_34250] = inst_34253);
var inst_34258__$1 = (inst_34250 + (1));
var inst_34259 = (inst_34258__$1 < n);
var state_34287__$1 = (function (){var statearr_34346 = state_34287;
(statearr_34346[(12)] = inst_34257);

(statearr_34346[(11)] = inst_34258__$1);

return statearr_34346;
})();
if(cljs.core.truth_(inst_34259)){
var statearr_34347_35836 = state_34287__$1;
(statearr_34347_35836[(1)] = (8));

} else {
var statearr_34348_35837 = state_34287__$1;
(statearr_34348_35837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (14))){
var inst_34279 = (state_34287[(2)]);
var inst_34280 = cljs.core.async.close_BANG_(out);
var state_34287__$1 = (function (){var statearr_34356 = state_34287;
(statearr_34356[(13)] = inst_34279);

return statearr_34356;
})();
var statearr_34362_35838 = state_34287__$1;
(statearr_34362_35838[(2)] = inst_34280);

(statearr_34362_35838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (10))){
var inst_34270 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34363_35839 = state_34287__$1;
(statearr_34363_35839[(2)] = inst_34270);

(statearr_34363_35839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34291 === (8))){
var inst_34249 = (state_34287[(8)]);
var inst_34258 = (state_34287[(11)]);
var tmp34355 = inst_34249;
var inst_34249__$1 = tmp34355;
var inst_34250 = inst_34258;
var state_34287__$1 = (function (){var statearr_34364 = state_34287;
(statearr_34364[(7)] = inst_34250);

(statearr_34364[(8)] = inst_34249__$1);

return statearr_34364;
})();
var statearr_34368_35842 = state_34287__$1;
(statearr_34368_35842[(2)] = null);

(statearr_34368_35842[(1)] = (2));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_34373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34373[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_34373[(1)] = (1));

return statearr_34373;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_34287){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_34287);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e34374){var ex__29477__auto__ = e34374;
var statearr_34375_35847 = state_34287;
(statearr_34375_35847[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_34287[(4)]))){
var statearr_34379_35849 = state_34287;
(statearr_34379_35849[(1)] = cljs.core.first((state_34287[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35850 = state_34287;
state_34287 = G__35850;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_34287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_34287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_34383 = f__30699__auto__();
(statearr_34383[(6)] = c__30698__auto___35817);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34390 = arguments.length;
switch (G__34390) {
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
var c__30698__auto___35857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_34449){
var state_val_34454 = (state_34449[(1)]);
if((state_val_34454 === (7))){
var inst_34444 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
var statearr_34473_35858 = state_34449__$1;
(statearr_34473_35858[(2)] = inst_34444);

(statearr_34473_35858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (1))){
var inst_34396 = [];
var inst_34397 = inst_34396;
var inst_34398 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34449__$1 = (function (){var statearr_34482 = state_34449;
(statearr_34482[(7)] = inst_34398);

(statearr_34482[(8)] = inst_34397);

return statearr_34482;
})();
var statearr_34486_35860 = state_34449__$1;
(statearr_34486_35860[(2)] = null);

(statearr_34486_35860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (4))){
var inst_34401 = (state_34449[(9)]);
var inst_34401__$1 = (state_34449[(2)]);
var inst_34403 = (inst_34401__$1 == null);
var inst_34404 = cljs.core.not(inst_34403);
var state_34449__$1 = (function (){var statearr_34489 = state_34449;
(statearr_34489[(9)] = inst_34401__$1);

return statearr_34489;
})();
if(inst_34404){
var statearr_34490_35862 = state_34449__$1;
(statearr_34490_35862[(1)] = (5));

} else {
var statearr_34491_35863 = state_34449__$1;
(statearr_34491_35863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (15))){
var inst_34397 = (state_34449[(8)]);
var inst_34436 = cljs.core.vec(inst_34397);
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34449__$1,(18),out,inst_34436);
} else {
if((state_val_34454 === (13))){
var inst_34431 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
var statearr_34510_35867 = state_34449__$1;
(statearr_34510_35867[(2)] = inst_34431);

(statearr_34510_35867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (6))){
var inst_34397 = (state_34449[(8)]);
var inst_34433 = inst_34397.length;
var inst_34434 = (inst_34433 > (0));
var state_34449__$1 = state_34449;
if(cljs.core.truth_(inst_34434)){
var statearr_34523_35870 = state_34449__$1;
(statearr_34523_35870[(1)] = (15));

} else {
var statearr_34529_35871 = state_34449__$1;
(statearr_34529_35871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (17))){
var inst_34441 = (state_34449[(2)]);
var inst_34442 = cljs.core.async.close_BANG_(out);
var state_34449__$1 = (function (){var statearr_34546 = state_34449;
(statearr_34546[(10)] = inst_34441);

return statearr_34546;
})();
var statearr_34548_35875 = state_34449__$1;
(statearr_34548_35875[(2)] = inst_34442);

(statearr_34548_35875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (3))){
var inst_34446 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34449__$1,inst_34446);
} else {
if((state_val_34454 === (12))){
var inst_34397 = (state_34449[(8)]);
var inst_34419 = cljs.core.vec(inst_34397);
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34449__$1,(14),out,inst_34419);
} else {
if((state_val_34454 === (2))){
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34449__$1,(4),ch);
} else {
if((state_val_34454 === (11))){
var inst_34407 = (state_34449[(11)]);
var inst_34401 = (state_34449[(9)]);
var inst_34397 = (state_34449[(8)]);
var inst_34416 = inst_34397.push(inst_34401);
var tmp34552 = inst_34397;
var inst_34397__$1 = tmp34552;
var inst_34398 = inst_34407;
var state_34449__$1 = (function (){var statearr_34565 = state_34449;
(statearr_34565[(7)] = inst_34398);

(statearr_34565[(8)] = inst_34397__$1);

(statearr_34565[(12)] = inst_34416);

return statearr_34565;
})();
var statearr_34570_35878 = state_34449__$1;
(statearr_34570_35878[(2)] = null);

(statearr_34570_35878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (9))){
var inst_34398 = (state_34449[(7)]);
var inst_34411 = cljs.core.keyword_identical_QMARK_(inst_34398,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34449__$1 = state_34449;
var statearr_34582_35881 = state_34449__$1;
(statearr_34582_35881[(2)] = inst_34411);

(statearr_34582_35881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (5))){
var inst_34398 = (state_34449[(7)]);
var inst_34407 = (state_34449[(11)]);
var inst_34408 = (state_34449[(13)]);
var inst_34401 = (state_34449[(9)]);
var inst_34407__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34401) : f.call(null,inst_34401));
var inst_34408__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34407__$1,inst_34398);
var state_34449__$1 = (function (){var statearr_34601 = state_34449;
(statearr_34601[(11)] = inst_34407__$1);

(statearr_34601[(13)] = inst_34408__$1);

return statearr_34601;
})();
if(inst_34408__$1){
var statearr_34607_35887 = state_34449__$1;
(statearr_34607_35887[(1)] = (8));

} else {
var statearr_34608_35889 = state_34449__$1;
(statearr_34608_35889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (14))){
var inst_34407 = (state_34449[(11)]);
var inst_34401 = (state_34449[(9)]);
var inst_34421 = (state_34449[(2)]);
var inst_34427 = [];
var inst_34428 = inst_34427.push(inst_34401);
var inst_34397 = inst_34427;
var inst_34398 = inst_34407;
var state_34449__$1 = (function (){var statearr_34613 = state_34449;
(statearr_34613[(7)] = inst_34398);

(statearr_34613[(14)] = inst_34421);

(statearr_34613[(15)] = inst_34428);

(statearr_34613[(8)] = inst_34397);

return statearr_34613;
})();
var statearr_34614_35893 = state_34449__$1;
(statearr_34614_35893[(2)] = null);

(statearr_34614_35893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (16))){
var state_34449__$1 = state_34449;
var statearr_34616_35894 = state_34449__$1;
(statearr_34616_35894[(2)] = null);

(statearr_34616_35894[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (10))){
var inst_34413 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
if(cljs.core.truth_(inst_34413)){
var statearr_34622_35895 = state_34449__$1;
(statearr_34622_35895[(1)] = (11));

} else {
var statearr_34623_35896 = state_34449__$1;
(statearr_34623_35896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (18))){
var inst_34438 = (state_34449[(2)]);
var state_34449__$1 = state_34449;
var statearr_34625_35900 = state_34449__$1;
(statearr_34625_35900[(2)] = inst_34438);

(statearr_34625_35900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34454 === (8))){
var inst_34408 = (state_34449[(13)]);
var state_34449__$1 = state_34449;
var statearr_34627_35901 = state_34449__$1;
(statearr_34627_35901[(2)] = inst_34408);

(statearr_34627_35901[(1)] = (10));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_34632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_34449){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_34449);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e34633){var ex__29477__auto__ = e34633;
var statearr_34634_35902 = state_34449;
(statearr_34634_35902[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_34449[(4)]))){
var statearr_34635_35903 = state_34449;
(statearr_34635_35903[(1)] = cljs.core.first((state_34449[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35904 = state_34449;
state_34449 = G__35904;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_34449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_34449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_34640 = f__30699__auto__();
(statearr_34640[(6)] = c__30698__auto___35857);

return statearr_34640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
