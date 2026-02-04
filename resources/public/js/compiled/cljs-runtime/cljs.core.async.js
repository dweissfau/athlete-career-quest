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
cljs.core.async.t_cljs$core$async12196 = (function (f,blockable,meta12197){
this.f = f;
this.blockable = blockable;
this.meta12197 = meta12197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12198,meta12197__$1){
var self__ = this;
var _12198__$1 = this;
return (new cljs.core.async.t_cljs$core$async12196(self__.f,self__.blockable,meta12197__$1));
}));

(cljs.core.async.t_cljs$core$async12196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12198){
var self__ = this;
var _12198__$1 = this;
return self__.meta12197;
}));

(cljs.core.async.t_cljs$core$async12196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12197","meta12197",1349267611,null)], null);
}));

(cljs.core.async.t_cljs$core$async12196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12196");

(cljs.core.async.t_cljs$core$async12196.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12196.
 */
cljs.core.async.__GT_t_cljs$core$async12196 = (function cljs$core$async$__GT_t_cljs$core$async12196(f,blockable,meta12197){
return (new cljs.core.async.t_cljs$core$async12196(f,blockable,meta12197));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12193 = arguments.length;
switch (G__12193) {
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
return (new cljs.core.async.t_cljs$core$async12196(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12223 = arguments.length;
switch (G__12223) {
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
var G__12277 = arguments.length;
switch (G__12277) {
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
var G__12288 = arguments.length;
switch (G__12288) {
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
var val_15450 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15450) : fn1.call(null,val_15450));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15450) : fn1.call(null,val_15450));
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
var G__12305 = arguments.length;
switch (G__12305) {
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
var n__5593__auto___15452 = n;
var x_15453 = (0);
while(true){
if((x_15453 < n__5593__auto___15452)){
(a[x_15453] = x_15453);

var G__15454 = (x_15453 + (1));
x_15453 = G__15454;
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
cljs.core.async.t_cljs$core$async12317 = (function (flag,meta12318){
this.flag = flag;
this.meta12318 = meta12318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12319,meta12318__$1){
var self__ = this;
var _12319__$1 = this;
return (new cljs.core.async.t_cljs$core$async12317(self__.flag,meta12318__$1));
}));

(cljs.core.async.t_cljs$core$async12317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12319){
var self__ = this;
var _12319__$1 = this;
return self__.meta12318;
}));

(cljs.core.async.t_cljs$core$async12317.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12318","meta12318",1659190556,null)], null);
}));

(cljs.core.async.t_cljs$core$async12317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12317");

(cljs.core.async.t_cljs$core$async12317.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12317.
 */
cljs.core.async.__GT_t_cljs$core$async12317 = (function cljs$core$async$__GT_t_cljs$core$async12317(flag,meta12318){
return (new cljs.core.async.t_cljs$core$async12317(flag,meta12318));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async12317(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12342 = (function (flag,cb,meta12343){
this.flag = flag;
this.cb = cb;
this.meta12343 = meta12343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12344,meta12343__$1){
var self__ = this;
var _12344__$1 = this;
return (new cljs.core.async.t_cljs$core$async12342(self__.flag,self__.cb,meta12343__$1));
}));

(cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12344){
var self__ = this;
var _12344__$1 = this;
return self__.meta12343;
}));

(cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12343","meta12343",1758048643,null)], null);
}));

(cljs.core.async.t_cljs$core$async12342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12342");

(cljs.core.async.t_cljs$core$async12342.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12342.
 */
cljs.core.async.__GT_t_cljs$core$async12342 = (function cljs$core$async$__GT_t_cljs$core$async12342(flag,cb,meta12343){
return (new cljs.core.async.t_cljs$core$async12342(flag,cb,meta12343));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async12342(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12359_SHARP_){
var G__12366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12359_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12366) : fret.call(null,G__12366));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12360_SHARP_){
var G__12367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12360_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12367) : fret.call(null,G__12367));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15472 = (i + (1));
i = G__15472;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___15476 = arguments.length;
var i__5727__auto___15477 = (0);
while(true){
if((i__5727__auto___15477 < len__5726__auto___15476)){
args__5732__auto__.push((arguments[i__5727__auto___15477]));

var G__15478 = (i__5727__auto___15477 + (1));
i__5727__auto___15477 = G__15478;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12385){
var map__12386 = p__12385;
var map__12386__$1 = cljs.core.__destructure_map(map__12386);
var opts = map__12386__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12379){
var G__12380 = cljs.core.first(seq12379);
var seq12379__$1 = cljs.core.next(seq12379);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12380,seq12379__$1);
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
var G__12403 = arguments.length;
switch (G__12403) {
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
var c__11984__auto___15483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_12443){
var state_val_12451 = (state_12443[(1)]);
if((state_val_12451 === (7))){
var inst_12434 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12469_15484 = state_12443__$1;
(statearr_12469_15484[(2)] = inst_12434);

(statearr_12469_15484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (1))){
var state_12443__$1 = state_12443;
var statearr_12470_15485 = state_12443__$1;
(statearr_12470_15485[(2)] = null);

(statearr_12470_15485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (4))){
var inst_12414 = (state_12443[(7)]);
var inst_12414__$1 = (state_12443[(2)]);
var inst_12415 = (inst_12414__$1 == null);
var state_12443__$1 = (function (){var statearr_12477 = state_12443;
(statearr_12477[(7)] = inst_12414__$1);

return statearr_12477;
})();
if(cljs.core.truth_(inst_12415)){
var statearr_12478_15486 = state_12443__$1;
(statearr_12478_15486[(1)] = (5));

} else {
var statearr_12480_15487 = state_12443__$1;
(statearr_12480_15487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (13))){
var state_12443__$1 = state_12443;
var statearr_12483_15488 = state_12443__$1;
(statearr_12483_15488[(2)] = null);

(statearr_12483_15488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (6))){
var inst_12414 = (state_12443[(7)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12443__$1,(11),to,inst_12414);
} else {
if((state_val_12451 === (3))){
var inst_12437 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12443__$1,inst_12437);
} else {
if((state_val_12451 === (12))){
var state_12443__$1 = state_12443;
var statearr_12486_15489 = state_12443__$1;
(statearr_12486_15489[(2)] = null);

(statearr_12486_15489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (2))){
var state_12443__$1 = state_12443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12443__$1,(4),from);
} else {
if((state_val_12451 === (11))){
var inst_12425 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
if(cljs.core.truth_(inst_12425)){
var statearr_12491_15490 = state_12443__$1;
(statearr_12491_15490[(1)] = (12));

} else {
var statearr_12493_15491 = state_12443__$1;
(statearr_12493_15491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (9))){
var state_12443__$1 = state_12443;
var statearr_12496_15492 = state_12443__$1;
(statearr_12496_15492[(2)] = null);

(statearr_12496_15492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (5))){
var state_12443__$1 = state_12443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12497_15493 = state_12443__$1;
(statearr_12497_15493[(1)] = (8));

} else {
var statearr_12498_15494 = state_12443__$1;
(statearr_12498_15494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (14))){
var inst_12432 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12500_15495 = state_12443__$1;
(statearr_12500_15495[(2)] = inst_12432);

(statearr_12500_15495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (10))){
var inst_12422 = (state_12443[(2)]);
var state_12443__$1 = state_12443;
var statearr_12504_15496 = state_12443__$1;
(statearr_12504_15496[(2)] = inst_12422);

(statearr_12504_15496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12451 === (8))){
var inst_12419 = cljs.core.async.close_BANG_(to);
var state_12443__$1 = state_12443;
var statearr_12506_15497 = state_12443__$1;
(statearr_12506_15497[(2)] = inst_12419);

(statearr_12506_15497[(1)] = (10));


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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_12515 = [null,null,null,null,null,null,null,null];
(statearr_12515[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_12515[(1)] = (1));

return statearr_12515;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_12443){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_12443);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e12516){var ex__11270__auto__ = e12516;
var statearr_12517_15500 = state_12443;
(statearr_12517_15500[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_12443[(4)]))){
var statearr_12521_15501 = state_12443;
(statearr_12521_15501[(1)] = cljs.core.first((state_12443[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15505 = state_12443;
state_12443 = G__15505;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_12443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_12443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_12522 = f__11985__auto__();
(statearr_12522[(6)] = c__11984__auto___15483);

return statearr_12522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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
var process__$1 = (function (p__12538){
var vec__12540 = p__12538;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(1),null);
var job = vec__12540;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11984__auto___15509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_12555){
var state_val_12556 = (state_12555[(1)]);
if((state_val_12556 === (1))){
var state_12555__$1 = state_12555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12555__$1,(2),res,v);
} else {
if((state_val_12556 === (2))){
var inst_12550 = (state_12555[(2)]);
var inst_12552 = cljs.core.async.close_BANG_(res);
var state_12555__$1 = (function (){var statearr_12563 = state_12555;
(statearr_12563[(7)] = inst_12550);

return statearr_12563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12555__$1,inst_12552);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0 = (function (){
var statearr_12571 = [null,null,null,null,null,null,null,null];
(statearr_12571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__);

(statearr_12571[(1)] = (1));

return statearr_12571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1 = (function (state_12555){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_12555);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e12572){var ex__11270__auto__ = e12572;
var statearr_12573_15510 = state_12555;
(statearr_12573_15510[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_12555[(4)]))){
var statearr_12576_15511 = state_12555;
(statearr_12576_15511[(1)] = cljs.core.first((state_12555[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15512 = state_12555;
state_12555 = G__15512;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = function(state_12555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1.call(this,state_12555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_12580 = f__11985__auto__();
(statearr_12580[(6)] = c__11984__auto___15509);

return statearr_12580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12583){
var vec__12584 = p__12583;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12584,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12584,(1),null);
var job = vec__12584;
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
var n__5593__auto___15514 = n;
var __15515 = (0);
while(true){
if((__15515 < n__5593__auto___15514)){
var G__12590_15518 = type;
var G__12590_15519__$1 = (((G__12590_15518 instanceof cljs.core.Keyword))?G__12590_15518.fqn:null);
switch (G__12590_15519__$1) {
case "compute":
var c__11984__auto___15521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15515,c__11984__auto___15521,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async){
return (function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = ((function (__15515,c__11984__auto___15521,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async){
return (function (state_12608){
var state_val_12609 = (state_12608[(1)]);
if((state_val_12609 === (1))){
var state_12608__$1 = state_12608;
var statearr_12614_15522 = state_12608__$1;
(statearr_12614_15522[(2)] = null);

(statearr_12614_15522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (2))){
var state_12608__$1 = state_12608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12608__$1,(4),jobs);
} else {
if((state_val_12609 === (3))){
var inst_12605 = (state_12608[(2)]);
var state_12608__$1 = state_12608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12608__$1,inst_12605);
} else {
if((state_val_12609 === (4))){
var inst_12597 = (state_12608[(2)]);
var inst_12598 = process__$1(inst_12597);
var state_12608__$1 = state_12608;
if(cljs.core.truth_(inst_12598)){
var statearr_12618_15524 = state_12608__$1;
(statearr_12618_15524[(1)] = (5));

} else {
var statearr_12619_15525 = state_12608__$1;
(statearr_12619_15525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (5))){
var state_12608__$1 = state_12608;
var statearr_12622_15526 = state_12608__$1;
(statearr_12622_15526[(2)] = null);

(statearr_12622_15526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (6))){
var state_12608__$1 = state_12608;
var statearr_12623_15528 = state_12608__$1;
(statearr_12623_15528[(2)] = null);

(statearr_12623_15528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12609 === (7))){
var inst_12603 = (state_12608[(2)]);
var state_12608__$1 = state_12608;
var statearr_12624_15530 = state_12608__$1;
(statearr_12624_15530[(2)] = inst_12603);

(statearr_12624_15530[(1)] = (3));


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
});})(__15515,c__11984__auto___15521,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async))
;
return ((function (__15515,switch__11266__auto__,c__11984__auto___15521,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0 = (function (){
var statearr_12625 = [null,null,null,null,null,null,null];
(statearr_12625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__);

(statearr_12625[(1)] = (1));

return statearr_12625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1 = (function (state_12608){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_12608);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e12628){var ex__11270__auto__ = e12628;
var statearr_12629_15531 = state_12608;
(statearr_12629_15531[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_12608[(4)]))){
var statearr_12631_15532 = state_12608;
(statearr_12631_15532[(1)] = cljs.core.first((state_12608[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15533 = state_12608;
state_12608 = G__15533;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = function(state_12608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1.call(this,state_12608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__;
})()
;})(__15515,switch__11266__auto__,c__11984__auto___15521,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async))
})();
var state__11986__auto__ = (function (){var statearr_12633 = f__11985__auto__();
(statearr_12633[(6)] = c__11984__auto___15521);

return statearr_12633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
});})(__15515,c__11984__auto___15521,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async))
);


break;
case "async":
var c__11984__auto___15534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15515,c__11984__auto___15534,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async){
return (function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = ((function (__15515,c__11984__auto___15534,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async){
return (function (state_12660){
var state_val_12661 = (state_12660[(1)]);
if((state_val_12661 === (1))){
var state_12660__$1 = state_12660;
var statearr_12665_15535 = state_12660__$1;
(statearr_12665_15535[(2)] = null);

(statearr_12665_15535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (2))){
var state_12660__$1 = state_12660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12660__$1,(4),jobs);
} else {
if((state_val_12661 === (3))){
var inst_12651 = (state_12660[(2)]);
var state_12660__$1 = state_12660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12660__$1,inst_12651);
} else {
if((state_val_12661 === (4))){
var inst_12640 = (state_12660[(2)]);
var inst_12644 = async(inst_12640);
var state_12660__$1 = state_12660;
if(cljs.core.truth_(inst_12644)){
var statearr_12668_15542 = state_12660__$1;
(statearr_12668_15542[(1)] = (5));

} else {
var statearr_12669_15543 = state_12660__$1;
(statearr_12669_15543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (5))){
var state_12660__$1 = state_12660;
var statearr_12671_15544 = state_12660__$1;
(statearr_12671_15544[(2)] = null);

(statearr_12671_15544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (6))){
var state_12660__$1 = state_12660;
var statearr_12673_15552 = state_12660__$1;
(statearr_12673_15552[(2)] = null);

(statearr_12673_15552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12661 === (7))){
var inst_12649 = (state_12660[(2)]);
var state_12660__$1 = state_12660;
var statearr_12674_15553 = state_12660__$1;
(statearr_12674_15553[(2)] = inst_12649);

(statearr_12674_15553[(1)] = (3));


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
});})(__15515,c__11984__auto___15534,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async))
;
return ((function (__15515,switch__11266__auto__,c__11984__auto___15534,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0 = (function (){
var statearr_12687 = [null,null,null,null,null,null,null];
(statearr_12687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__);

(statearr_12687[(1)] = (1));

return statearr_12687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1 = (function (state_12660){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_12660);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e12692){var ex__11270__auto__ = e12692;
var statearr_12694_15557 = state_12660;
(statearr_12694_15557[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_12660[(4)]))){
var statearr_12698_15559 = state_12660;
(statearr_12698_15559[(1)] = cljs.core.first((state_12660[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15560 = state_12660;
state_12660 = G__15560;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = function(state_12660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1.call(this,state_12660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__;
})()
;})(__15515,switch__11266__auto__,c__11984__auto___15534,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async))
})();
var state__11986__auto__ = (function (){var statearr_12700 = f__11985__auto__();
(statearr_12700[(6)] = c__11984__auto___15534);

return statearr_12700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
});})(__15515,c__11984__auto___15534,G__12590_15518,G__12590_15519__$1,n__5593__auto___15514,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12590_15519__$1)].join('')));

}

var G__15562 = (__15515 + (1));
__15515 = G__15562;
continue;
} else {
}
break;
}

var c__11984__auto___15563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_12735){
var state_val_12736 = (state_12735[(1)]);
if((state_val_12736 === (7))){
var inst_12731 = (state_12735[(2)]);
var state_12735__$1 = state_12735;
var statearr_12740_15564 = state_12735__$1;
(statearr_12740_15564[(2)] = inst_12731);

(statearr_12740_15564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12736 === (1))){
var state_12735__$1 = state_12735;
var statearr_12741_15565 = state_12735__$1;
(statearr_12741_15565[(2)] = null);

(statearr_12741_15565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12736 === (4))){
var inst_12709 = (state_12735[(7)]);
var inst_12709__$1 = (state_12735[(2)]);
var inst_12710 = (inst_12709__$1 == null);
var state_12735__$1 = (function (){var statearr_12742 = state_12735;
(statearr_12742[(7)] = inst_12709__$1);

return statearr_12742;
})();
if(cljs.core.truth_(inst_12710)){
var statearr_12743_15566 = state_12735__$1;
(statearr_12743_15566[(1)] = (5));

} else {
var statearr_12744_15567 = state_12735__$1;
(statearr_12744_15567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12736 === (6))){
var inst_12709 = (state_12735[(7)]);
var inst_12716 = (state_12735[(8)]);
var inst_12716__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12723 = [inst_12709,inst_12716__$1];
var inst_12724 = (new cljs.core.PersistentVector(null,2,(5),inst_12722,inst_12723,null));
var state_12735__$1 = (function (){var statearr_12749 = state_12735;
(statearr_12749[(8)] = inst_12716__$1);

return statearr_12749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12735__$1,(8),jobs,inst_12724);
} else {
if((state_val_12736 === (3))){
var inst_12733 = (state_12735[(2)]);
var state_12735__$1 = state_12735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12735__$1,inst_12733);
} else {
if((state_val_12736 === (2))){
var state_12735__$1 = state_12735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12735__$1,(4),from);
} else {
if((state_val_12736 === (9))){
var inst_12728 = (state_12735[(2)]);
var state_12735__$1 = (function (){var statearr_12760 = state_12735;
(statearr_12760[(9)] = inst_12728);

return statearr_12760;
})();
var statearr_12761_15570 = state_12735__$1;
(statearr_12761_15570[(2)] = null);

(statearr_12761_15570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12736 === (5))){
var inst_12714 = cljs.core.async.close_BANG_(jobs);
var state_12735__$1 = state_12735;
var statearr_12763_15571 = state_12735__$1;
(statearr_12763_15571[(2)] = inst_12714);

(statearr_12763_15571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12736 === (8))){
var inst_12716 = (state_12735[(8)]);
var inst_12726 = (state_12735[(2)]);
var state_12735__$1 = (function (){var statearr_12765 = state_12735;
(statearr_12765[(10)] = inst_12726);

return statearr_12765;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12735__$1,(9),results,inst_12716);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0 = (function (){
var statearr_12766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__);

(statearr_12766[(1)] = (1));

return statearr_12766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1 = (function (state_12735){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_12735);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e12767){var ex__11270__auto__ = e12767;
var statearr_12768_15572 = state_12735;
(statearr_12768_15572[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_12735[(4)]))){
var statearr_12770_15573 = state_12735;
(statearr_12770_15573[(1)] = cljs.core.first((state_12735[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15574 = state_12735;
state_12735 = G__15574;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = function(state_12735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1.call(this,state_12735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_12773 = f__11985__auto__();
(statearr_12773[(6)] = c__11984__auto___15563);

return statearr_12773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));


var c__11984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_12813){
var state_val_12814 = (state_12813[(1)]);
if((state_val_12814 === (7))){
var inst_12809 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12815_15576 = state_12813__$1;
(statearr_12815_15576[(2)] = inst_12809);

(statearr_12815_15576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (20))){
var state_12813__$1 = state_12813;
var statearr_12817_15578 = state_12813__$1;
(statearr_12817_15578[(2)] = null);

(statearr_12817_15578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (1))){
var state_12813__$1 = state_12813;
var statearr_12820_15580 = state_12813__$1;
(statearr_12820_15580[(2)] = null);

(statearr_12820_15580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (4))){
var inst_12777 = (state_12813[(7)]);
var inst_12777__$1 = (state_12813[(2)]);
var inst_12778 = (inst_12777__$1 == null);
var state_12813__$1 = (function (){var statearr_12824 = state_12813;
(statearr_12824[(7)] = inst_12777__$1);

return statearr_12824;
})();
if(cljs.core.truth_(inst_12778)){
var statearr_12826_15583 = state_12813__$1;
(statearr_12826_15583[(1)] = (5));

} else {
var statearr_12827_15584 = state_12813__$1;
(statearr_12827_15584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (15))){
var inst_12791 = (state_12813[(8)]);
var state_12813__$1 = state_12813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12813__$1,(18),to,inst_12791);
} else {
if((state_val_12814 === (21))){
var inst_12804 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12830_15591 = state_12813__$1;
(statearr_12830_15591[(2)] = inst_12804);

(statearr_12830_15591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (13))){
var inst_12806 = (state_12813[(2)]);
var state_12813__$1 = (function (){var statearr_12835 = state_12813;
(statearr_12835[(9)] = inst_12806);

return statearr_12835;
})();
var statearr_12836_15593 = state_12813__$1;
(statearr_12836_15593[(2)] = null);

(statearr_12836_15593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (6))){
var inst_12777 = (state_12813[(7)]);
var state_12813__$1 = state_12813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12813__$1,(11),inst_12777);
} else {
if((state_val_12814 === (17))){
var inst_12799 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
if(cljs.core.truth_(inst_12799)){
var statearr_12841_15594 = state_12813__$1;
(statearr_12841_15594[(1)] = (19));

} else {
var statearr_12842_15595 = state_12813__$1;
(statearr_12842_15595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (3))){
var inst_12811 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12813__$1,inst_12811);
} else {
if((state_val_12814 === (12))){
var inst_12788 = (state_12813[(10)]);
var state_12813__$1 = state_12813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12813__$1,(14),inst_12788);
} else {
if((state_val_12814 === (2))){
var state_12813__$1 = state_12813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12813__$1,(4),results);
} else {
if((state_val_12814 === (19))){
var state_12813__$1 = state_12813;
var statearr_12850_15599 = state_12813__$1;
(statearr_12850_15599[(2)] = null);

(statearr_12850_15599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (11))){
var inst_12788 = (state_12813[(2)]);
var state_12813__$1 = (function (){var statearr_12853 = state_12813;
(statearr_12853[(10)] = inst_12788);

return statearr_12853;
})();
var statearr_12854_15600 = state_12813__$1;
(statearr_12854_15600[(2)] = null);

(statearr_12854_15600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (9))){
var state_12813__$1 = state_12813;
var statearr_12855_15601 = state_12813__$1;
(statearr_12855_15601[(2)] = null);

(statearr_12855_15601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (5))){
var state_12813__$1 = state_12813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12856_15602 = state_12813__$1;
(statearr_12856_15602[(1)] = (8));

} else {
var statearr_12859_15603 = state_12813__$1;
(statearr_12859_15603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (14))){
var inst_12793 = (state_12813[(11)]);
var inst_12791 = (state_12813[(8)]);
var inst_12791__$1 = (state_12813[(2)]);
var inst_12792 = (inst_12791__$1 == null);
var inst_12793__$1 = cljs.core.not(inst_12792);
var state_12813__$1 = (function (){var statearr_12861 = state_12813;
(statearr_12861[(11)] = inst_12793__$1);

(statearr_12861[(8)] = inst_12791__$1);

return statearr_12861;
})();
if(inst_12793__$1){
var statearr_12863_15605 = state_12813__$1;
(statearr_12863_15605[(1)] = (15));

} else {
var statearr_12864_15608 = state_12813__$1;
(statearr_12864_15608[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (16))){
var inst_12793 = (state_12813[(11)]);
var state_12813__$1 = state_12813;
var statearr_12865_15609 = state_12813__$1;
(statearr_12865_15609[(2)] = inst_12793);

(statearr_12865_15609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (10))){
var inst_12785 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12870_15610 = state_12813__$1;
(statearr_12870_15610[(2)] = inst_12785);

(statearr_12870_15610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (18))){
var inst_12796 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12873_15611 = state_12813__$1;
(statearr_12873_15611[(2)] = inst_12796);

(statearr_12873_15611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (8))){
var inst_12782 = cljs.core.async.close_BANG_(to);
var state_12813__$1 = state_12813;
var statearr_12874_15615 = state_12813__$1;
(statearr_12874_15615[(2)] = inst_12782);

(statearr_12874_15615[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0 = (function (){
var statearr_12878 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__);

(statearr_12878[(1)] = (1));

return statearr_12878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1 = (function (state_12813){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_12813);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e12879){var ex__11270__auto__ = e12879;
var statearr_12880_15617 = state_12813;
(statearr_12880_15617[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_12813[(4)]))){
var statearr_12882_15618 = state_12813;
(statearr_12882_15618[(1)] = cljs.core.first((state_12813[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15619 = state_12813;
state_12813 = G__15619;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__ = function(state_12813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1.call(this,state_12813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_12886 = f__11985__auto__();
(statearr_12886[(6)] = c__11984__auto__);

return statearr_12886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));

return c__11984__auto__;
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
var G__12892 = arguments.length;
switch (G__12892) {
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
var G__12906 = arguments.length;
switch (G__12906) {
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
var G__12923 = arguments.length;
switch (G__12923) {
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
var c__11984__auto___15632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_12966){
var state_val_12967 = (state_12966[(1)]);
if((state_val_12967 === (7))){
var inst_12962 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12970_15633 = state_12966__$1;
(statearr_12970_15633[(2)] = inst_12962);

(statearr_12970_15633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (1))){
var state_12966__$1 = state_12966;
var statearr_12972_15634 = state_12966__$1;
(statearr_12972_15634[(2)] = null);

(statearr_12972_15634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (4))){
var inst_12942 = (state_12966[(7)]);
var inst_12942__$1 = (state_12966[(2)]);
var inst_12944 = (inst_12942__$1 == null);
var state_12966__$1 = (function (){var statearr_12975 = state_12966;
(statearr_12975[(7)] = inst_12942__$1);

return statearr_12975;
})();
if(cljs.core.truth_(inst_12944)){
var statearr_12976_15638 = state_12966__$1;
(statearr_12976_15638[(1)] = (5));

} else {
var statearr_12979_15639 = state_12966__$1;
(statearr_12979_15639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (13))){
var state_12966__$1 = state_12966;
var statearr_12980_15640 = state_12966__$1;
(statearr_12980_15640[(2)] = null);

(statearr_12980_15640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (6))){
var inst_12942 = (state_12966[(7)]);
var inst_12949 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12942) : p.call(null,inst_12942));
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12949)){
var statearr_12982_15641 = state_12966__$1;
(statearr_12982_15641[(1)] = (9));

} else {
var statearr_12983_15643 = state_12966__$1;
(statearr_12983_15643[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (3))){
var inst_12964 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12966__$1,inst_12964);
} else {
if((state_val_12967 === (12))){
var state_12966__$1 = state_12966;
var statearr_12992_15644 = state_12966__$1;
(statearr_12992_15644[(2)] = null);

(statearr_12992_15644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (2))){
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12966__$1,(4),ch);
} else {
if((state_val_12967 === (11))){
var inst_12942 = (state_12966[(7)]);
var inst_12953 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12966__$1,(8),inst_12953,inst_12942);
} else {
if((state_val_12967 === (9))){
var state_12966__$1 = state_12966;
var statearr_12995_15646 = state_12966__$1;
(statearr_12995_15646[(2)] = tc);

(statearr_12995_15646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (5))){
var inst_12946 = cljs.core.async.close_BANG_(tc);
var inst_12947 = cljs.core.async.close_BANG_(fc);
var state_12966__$1 = (function (){var statearr_13000 = state_12966;
(statearr_13000[(8)] = inst_12946);

return statearr_13000;
})();
var statearr_13003_15647 = state_12966__$1;
(statearr_13003_15647[(2)] = inst_12947);

(statearr_13003_15647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (14))){
var inst_12960 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_13005_15649 = state_12966__$1;
(statearr_13005_15649[(2)] = inst_12960);

(statearr_13005_15649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (10))){
var state_12966__$1 = state_12966;
var statearr_13006_15657 = state_12966__$1;
(statearr_13006_15657[(2)] = fc);

(statearr_13006_15657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12967 === (8))){
var inst_12955 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12955)){
var statearr_13009_15659 = state_12966__$1;
(statearr_13009_15659[(1)] = (12));

} else {
var statearr_13011_15660 = state_12966__$1;
(statearr_13011_15660[(1)] = (13));

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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_13017 = [null,null,null,null,null,null,null,null,null];
(statearr_13017[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_13017[(1)] = (1));

return statearr_13017;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_12966){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_12966);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e13018){var ex__11270__auto__ = e13018;
var statearr_13021_15661 = state_12966;
(statearr_13021_15661[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_12966[(4)]))){
var statearr_13024_15662 = state_12966;
(statearr_13024_15662[(1)] = cljs.core.first((state_12966[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15663 = state_12966;
state_12966 = G__15663;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_12966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_12966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_13032 = f__11985__auto__();
(statearr_13032[(6)] = c__11984__auto___15632);

return statearr_13032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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
var c__11984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_13083){
var state_val_13084 = (state_13083[(1)]);
if((state_val_13084 === (7))){
var inst_13076 = (state_13083[(2)]);
var state_13083__$1 = state_13083;
var statearr_13087_15665 = state_13083__$1;
(statearr_13087_15665[(2)] = inst_13076);

(statearr_13087_15665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (1))){
var inst_13054 = init;
var inst_13055 = inst_13054;
var state_13083__$1 = (function (){var statearr_13090 = state_13083;
(statearr_13090[(7)] = inst_13055);

return statearr_13090;
})();
var statearr_13092_15667 = state_13083__$1;
(statearr_13092_15667[(2)] = null);

(statearr_13092_15667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (4))){
var inst_13060 = (state_13083[(8)]);
var inst_13060__$1 = (state_13083[(2)]);
var inst_13061 = (inst_13060__$1 == null);
var state_13083__$1 = (function (){var statearr_13096 = state_13083;
(statearr_13096[(8)] = inst_13060__$1);

return statearr_13096;
})();
if(cljs.core.truth_(inst_13061)){
var statearr_13097_15668 = state_13083__$1;
(statearr_13097_15668[(1)] = (5));

} else {
var statearr_13098_15669 = state_13083__$1;
(statearr_13098_15669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (6))){
var inst_13060 = (state_13083[(8)]);
var inst_13066 = (state_13083[(9)]);
var inst_13055 = (state_13083[(7)]);
var inst_13066__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13055,inst_13060) : f.call(null,inst_13055,inst_13060));
var inst_13067 = cljs.core.reduced_QMARK_(inst_13066__$1);
var state_13083__$1 = (function (){var statearr_13102 = state_13083;
(statearr_13102[(9)] = inst_13066__$1);

return statearr_13102;
})();
if(inst_13067){
var statearr_13104_15671 = state_13083__$1;
(statearr_13104_15671[(1)] = (8));

} else {
var statearr_13105_15672 = state_13083__$1;
(statearr_13105_15672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (3))){
var inst_13078 = (state_13083[(2)]);
var state_13083__$1 = state_13083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13083__$1,inst_13078);
} else {
if((state_val_13084 === (2))){
var state_13083__$1 = state_13083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13083__$1,(4),ch);
} else {
if((state_val_13084 === (9))){
var inst_13066 = (state_13083[(9)]);
var inst_13055 = inst_13066;
var state_13083__$1 = (function (){var statearr_13115 = state_13083;
(statearr_13115[(7)] = inst_13055);

return statearr_13115;
})();
var statearr_13116_15674 = state_13083__$1;
(statearr_13116_15674[(2)] = null);

(statearr_13116_15674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (5))){
var inst_13055 = (state_13083[(7)]);
var state_13083__$1 = state_13083;
var statearr_13118_15675 = state_13083__$1;
(statearr_13118_15675[(2)] = inst_13055);

(statearr_13118_15675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (10))){
var inst_13074 = (state_13083[(2)]);
var state_13083__$1 = state_13083;
var statearr_13119_15677 = state_13083__$1;
(statearr_13119_15677[(2)] = inst_13074);

(statearr_13119_15677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13084 === (8))){
var inst_13066 = (state_13083[(9)]);
var inst_13070 = cljs.core.deref(inst_13066);
var state_13083__$1 = state_13083;
var statearr_13121_15681 = state_13083__$1;
(statearr_13121_15681[(2)] = inst_13070);

(statearr_13121_15681[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11267__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11267__auto____0 = (function (){
var statearr_13124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13124[(0)] = cljs$core$async$reduce_$_state_machine__11267__auto__);

(statearr_13124[(1)] = (1));

return statearr_13124;
});
var cljs$core$async$reduce_$_state_machine__11267__auto____1 = (function (state_13083){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_13083);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e13130){var ex__11270__auto__ = e13130;
var statearr_13133_15683 = state_13083;
(statearr_13133_15683[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_13083[(4)]))){
var statearr_13135_15684 = state_13083;
(statearr_13135_15684[(1)] = cljs.core.first((state_13083[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15685 = state_13083;
state_13083 = G__15685;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11267__auto__ = function(state_13083){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11267__auto____1.call(this,state_13083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11267__auto____0;
cljs$core$async$reduce_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11267__auto____1;
return cljs$core$async$reduce_$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_13141 = f__11985__auto__();
(statearr_13141[(6)] = c__11984__auto__);

return statearr_13141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));

return c__11984__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_13165){
var state_val_13166 = (state_13165[(1)]);
if((state_val_13166 === (1))){
var inst_13156 = cljs.core.async.reduce(f__$1,init,ch);
var state_13165__$1 = state_13165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13165__$1,(2),inst_13156);
} else {
if((state_val_13166 === (2))){
var inst_13160 = (state_13165[(2)]);
var inst_13161 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13160) : f__$1.call(null,inst_13160));
var state_13165__$1 = state_13165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13165__$1,inst_13161);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11267__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11267__auto____0 = (function (){
var statearr_13175 = [null,null,null,null,null,null,null];
(statearr_13175[(0)] = cljs$core$async$transduce_$_state_machine__11267__auto__);

(statearr_13175[(1)] = (1));

return statearr_13175;
});
var cljs$core$async$transduce_$_state_machine__11267__auto____1 = (function (state_13165){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_13165);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e13178){var ex__11270__auto__ = e13178;
var statearr_13180_15695 = state_13165;
(statearr_13180_15695[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_13165[(4)]))){
var statearr_13182_15696 = state_13165;
(statearr_13182_15696[(1)] = cljs.core.first((state_13165[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15698 = state_13165;
state_13165 = G__15698;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11267__auto__ = function(state_13165){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11267__auto____1.call(this,state_13165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11267__auto____0;
cljs$core$async$transduce_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11267__auto____1;
return cljs$core$async$transduce_$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_13188 = f__11985__auto__();
(statearr_13188[(6)] = c__11984__auto__);

return statearr_13188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));

return c__11984__auto__;
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
var G__13194 = arguments.length;
switch (G__13194) {
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
var c__11984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_13239){
var state_val_13240 = (state_13239[(1)]);
if((state_val_13240 === (7))){
var inst_13221 = (state_13239[(2)]);
var state_13239__$1 = state_13239;
var statearr_13244_15700 = state_13239__$1;
(statearr_13244_15700[(2)] = inst_13221);

(statearr_13244_15700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (1))){
var inst_13202 = cljs.core.seq(coll);
var inst_13205 = inst_13202;
var state_13239__$1 = (function (){var statearr_13246 = state_13239;
(statearr_13246[(7)] = inst_13205);

return statearr_13246;
})();
var statearr_13247_15701 = state_13239__$1;
(statearr_13247_15701[(2)] = null);

(statearr_13247_15701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (4))){
var inst_13205 = (state_13239[(7)]);
var inst_13219 = cljs.core.first(inst_13205);
var state_13239__$1 = state_13239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13239__$1,(7),ch,inst_13219);
} else {
if((state_val_13240 === (13))){
var inst_13233 = (state_13239[(2)]);
var state_13239__$1 = state_13239;
var statearr_13262_15703 = state_13239__$1;
(statearr_13262_15703[(2)] = inst_13233);

(statearr_13262_15703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (6))){
var inst_13224 = (state_13239[(2)]);
var state_13239__$1 = state_13239;
if(cljs.core.truth_(inst_13224)){
var statearr_13265_15704 = state_13239__$1;
(statearr_13265_15704[(1)] = (8));

} else {
var statearr_13266_15705 = state_13239__$1;
(statearr_13266_15705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (3))){
var inst_13237 = (state_13239[(2)]);
var state_13239__$1 = state_13239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13239__$1,inst_13237);
} else {
if((state_val_13240 === (12))){
var state_13239__$1 = state_13239;
var statearr_13269_15706 = state_13239__$1;
(statearr_13269_15706[(2)] = null);

(statearr_13269_15706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (2))){
var inst_13205 = (state_13239[(7)]);
var state_13239__$1 = state_13239;
if(cljs.core.truth_(inst_13205)){
var statearr_13276_15711 = state_13239__$1;
(statearr_13276_15711[(1)] = (4));

} else {
var statearr_13277_15712 = state_13239__$1;
(statearr_13277_15712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (11))){
var inst_13230 = cljs.core.async.close_BANG_(ch);
var state_13239__$1 = state_13239;
var statearr_13284_15713 = state_13239__$1;
(statearr_13284_15713[(2)] = inst_13230);

(statearr_13284_15713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (9))){
var state_13239__$1 = state_13239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13288_15714 = state_13239__$1;
(statearr_13288_15714[(1)] = (11));

} else {
var statearr_13289_15715 = state_13239__$1;
(statearr_13289_15715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (5))){
var inst_13205 = (state_13239[(7)]);
var state_13239__$1 = state_13239;
var statearr_13291_15717 = state_13239__$1;
(statearr_13291_15717[(2)] = inst_13205);

(statearr_13291_15717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (10))){
var inst_13235 = (state_13239[(2)]);
var state_13239__$1 = state_13239;
var statearr_13292_15718 = state_13239__$1;
(statearr_13292_15718[(2)] = inst_13235);

(statearr_13292_15718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13240 === (8))){
var inst_13205 = (state_13239[(7)]);
var inst_13226 = cljs.core.next(inst_13205);
var inst_13205__$1 = inst_13226;
var state_13239__$1 = (function (){var statearr_13299 = state_13239;
(statearr_13299[(7)] = inst_13205__$1);

return statearr_13299;
})();
var statearr_13301_15719 = state_13239__$1;
(statearr_13301_15719[(2)] = null);

(statearr_13301_15719[(1)] = (2));


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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_13306 = [null,null,null,null,null,null,null,null];
(statearr_13306[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_13306[(1)] = (1));

return statearr_13306;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_13239){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_13239);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e13307){var ex__11270__auto__ = e13307;
var statearr_13308_15721 = state_13239;
(statearr_13308_15721[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_13239[(4)]))){
var statearr_13309_15722 = state_13239;
(statearr_13309_15722[(1)] = cljs.core.first((state_13239[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15723 = state_13239;
state_13239 = G__15723;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_13239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_13239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_13312 = f__11985__auto__();
(statearr_13312[(6)] = c__11984__auto__);

return statearr_13312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));

return c__11984__auto__;
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
var G__13326 = arguments.length;
switch (G__13326) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_15731 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15731(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15732 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15732(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15749 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15749(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15750 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15750(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13424 = (function (ch,cs,meta13425){
this.ch = ch;
this.cs = cs;
this.meta13425 = meta13425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13426,meta13425__$1){
var self__ = this;
var _13426__$1 = this;
return (new cljs.core.async.t_cljs$core$async13424(self__.ch,self__.cs,meta13425__$1));
}));

(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13426){
var self__ = this;
var _13426__$1 = this;
return self__.meta13425;
}));

(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13424.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13425","meta13425",1359963653,null)], null);
}));

(cljs.core.async.t_cljs$core$async13424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13424");

(cljs.core.async.t_cljs$core$async13424.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13424.
 */
cljs.core.async.__GT_t_cljs$core$async13424 = (function cljs$core$async$__GT_t_cljs$core$async13424(ch,cs,meta13425){
return (new cljs.core.async.t_cljs$core$async13424(ch,cs,meta13425));
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
var m = (new cljs.core.async.t_cljs$core$async13424(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__11984__auto___15751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_13606){
var state_val_13607 = (state_13606[(1)]);
if((state_val_13607 === (7))){
var inst_13599 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13611_15752 = state_13606__$1;
(statearr_13611_15752[(2)] = inst_13599);

(statearr_13611_15752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (20))){
var inst_13488 = (state_13606[(7)]);
var inst_13500 = cljs.core.first(inst_13488);
var inst_13501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13500,(0),null);
var inst_13502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13500,(1),null);
var state_13606__$1 = (function (){var statearr_13615 = state_13606;
(statearr_13615[(8)] = inst_13501);

return statearr_13615;
})();
if(cljs.core.truth_(inst_13502)){
var statearr_13616_15753 = state_13606__$1;
(statearr_13616_15753[(1)] = (22));

} else {
var statearr_13617_15755 = state_13606__$1;
(statearr_13617_15755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (27))){
var inst_13456 = (state_13606[(9)]);
var inst_13534 = (state_13606[(10)]);
var inst_13542 = (state_13606[(11)]);
var inst_13536 = (state_13606[(12)]);
var inst_13542__$1 = cljs.core._nth(inst_13534,inst_13536);
var inst_13543 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13542__$1,inst_13456,done);
var state_13606__$1 = (function (){var statearr_13619 = state_13606;
(statearr_13619[(11)] = inst_13542__$1);

return statearr_13619;
})();
if(cljs.core.truth_(inst_13543)){
var statearr_13622_15756 = state_13606__$1;
(statearr_13622_15756[(1)] = (30));

} else {
var statearr_13623_15758 = state_13606__$1;
(statearr_13623_15758[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (1))){
var state_13606__$1 = state_13606;
var statearr_13627_15759 = state_13606__$1;
(statearr_13627_15759[(2)] = null);

(statearr_13627_15759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (24))){
var inst_13488 = (state_13606[(7)]);
var inst_13509 = (state_13606[(2)]);
var inst_13510 = cljs.core.next(inst_13488);
var inst_13465 = inst_13510;
var inst_13466 = null;
var inst_13467 = (0);
var inst_13468 = (0);
var state_13606__$1 = (function (){var statearr_13628 = state_13606;
(statearr_13628[(13)] = inst_13509);

(statearr_13628[(14)] = inst_13465);

(statearr_13628[(15)] = inst_13468);

(statearr_13628[(16)] = inst_13467);

(statearr_13628[(17)] = inst_13466);

return statearr_13628;
})();
var statearr_13630_15764 = state_13606__$1;
(statearr_13630_15764[(2)] = null);

(statearr_13630_15764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (39))){
var state_13606__$1 = state_13606;
var statearr_13643_15765 = state_13606__$1;
(statearr_13643_15765[(2)] = null);

(statearr_13643_15765[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (4))){
var inst_13456 = (state_13606[(9)]);
var inst_13456__$1 = (state_13606[(2)]);
var inst_13457 = (inst_13456__$1 == null);
var state_13606__$1 = (function (){var statearr_13645 = state_13606;
(statearr_13645[(9)] = inst_13456__$1);

return statearr_13645;
})();
if(cljs.core.truth_(inst_13457)){
var statearr_13647_15767 = state_13606__$1;
(statearr_13647_15767[(1)] = (5));

} else {
var statearr_13649_15768 = state_13606__$1;
(statearr_13649_15768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (15))){
var inst_13465 = (state_13606[(14)]);
var inst_13468 = (state_13606[(15)]);
var inst_13467 = (state_13606[(16)]);
var inst_13466 = (state_13606[(17)]);
var inst_13483 = (state_13606[(2)]);
var inst_13484 = (inst_13468 + (1));
var tmp13637 = inst_13465;
var tmp13638 = inst_13467;
var tmp13639 = inst_13466;
var inst_13465__$1 = tmp13637;
var inst_13466__$1 = tmp13639;
var inst_13467__$1 = tmp13638;
var inst_13468__$1 = inst_13484;
var state_13606__$1 = (function (){var statearr_13654 = state_13606;
(statearr_13654[(14)] = inst_13465__$1);

(statearr_13654[(18)] = inst_13483);

(statearr_13654[(15)] = inst_13468__$1);

(statearr_13654[(16)] = inst_13467__$1);

(statearr_13654[(17)] = inst_13466__$1);

return statearr_13654;
})();
var statearr_13655_15774 = state_13606__$1;
(statearr_13655_15774[(2)] = null);

(statearr_13655_15774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (21))){
var inst_13513 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13660_15776 = state_13606__$1;
(statearr_13660_15776[(2)] = inst_13513);

(statearr_13660_15776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (31))){
var inst_13542 = (state_13606[(11)]);
var inst_13548 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13542);
var state_13606__$1 = state_13606;
var statearr_13661_15777 = state_13606__$1;
(statearr_13661_15777[(2)] = inst_13548);

(statearr_13661_15777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (32))){
var inst_13535 = (state_13606[(19)]);
var inst_13534 = (state_13606[(10)]);
var inst_13533 = (state_13606[(20)]);
var inst_13536 = (state_13606[(12)]);
var inst_13550 = (state_13606[(2)]);
var inst_13551 = (inst_13536 + (1));
var tmp13656 = inst_13535;
var tmp13657 = inst_13534;
var tmp13658 = inst_13533;
var inst_13533__$1 = tmp13658;
var inst_13534__$1 = tmp13657;
var inst_13535__$1 = tmp13656;
var inst_13536__$1 = inst_13551;
var state_13606__$1 = (function (){var statearr_13667 = state_13606;
(statearr_13667[(19)] = inst_13535__$1);

(statearr_13667[(21)] = inst_13550);

(statearr_13667[(10)] = inst_13534__$1);

(statearr_13667[(20)] = inst_13533__$1);

(statearr_13667[(12)] = inst_13536__$1);

return statearr_13667;
})();
var statearr_13668_15779 = state_13606__$1;
(statearr_13668_15779[(2)] = null);

(statearr_13668_15779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (40))){
var inst_13569 = (state_13606[(22)]);
var inst_13574 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13569);
var state_13606__$1 = state_13606;
var statearr_13670_15782 = state_13606__$1;
(statearr_13670_15782[(2)] = inst_13574);

(statearr_13670_15782[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (33))){
var inst_13555 = (state_13606[(23)]);
var inst_13559 = cljs.core.chunked_seq_QMARK_(inst_13555);
var state_13606__$1 = state_13606;
if(inst_13559){
var statearr_13674_15784 = state_13606__$1;
(statearr_13674_15784[(1)] = (36));

} else {
var statearr_13675_15785 = state_13606__$1;
(statearr_13675_15785[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (13))){
var inst_13477 = (state_13606[(24)]);
var inst_13480 = cljs.core.async.close_BANG_(inst_13477);
var state_13606__$1 = state_13606;
var statearr_13676_15786 = state_13606__$1;
(statearr_13676_15786[(2)] = inst_13480);

(statearr_13676_15786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (22))){
var inst_13501 = (state_13606[(8)]);
var inst_13506 = cljs.core.async.close_BANG_(inst_13501);
var state_13606__$1 = state_13606;
var statearr_13679_15789 = state_13606__$1;
(statearr_13679_15789[(2)] = inst_13506);

(statearr_13679_15789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (36))){
var inst_13555 = (state_13606[(23)]);
var inst_13561 = cljs.core.chunk_first(inst_13555);
var inst_13562 = cljs.core.chunk_rest(inst_13555);
var inst_13564 = cljs.core.count(inst_13561);
var inst_13533 = inst_13562;
var inst_13534 = inst_13561;
var inst_13535 = inst_13564;
var inst_13536 = (0);
var state_13606__$1 = (function (){var statearr_13680 = state_13606;
(statearr_13680[(19)] = inst_13535);

(statearr_13680[(10)] = inst_13534);

(statearr_13680[(20)] = inst_13533);

(statearr_13680[(12)] = inst_13536);

return statearr_13680;
})();
var statearr_13681_15791 = state_13606__$1;
(statearr_13681_15791[(2)] = null);

(statearr_13681_15791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (41))){
var inst_13555 = (state_13606[(23)]);
var inst_13576 = (state_13606[(2)]);
var inst_13577 = cljs.core.next(inst_13555);
var inst_13533 = inst_13577;
var inst_13534 = null;
var inst_13535 = (0);
var inst_13536 = (0);
var state_13606__$1 = (function (){var statearr_13682 = state_13606;
(statearr_13682[(19)] = inst_13535);

(statearr_13682[(10)] = inst_13534);

(statearr_13682[(25)] = inst_13576);

(statearr_13682[(20)] = inst_13533);

(statearr_13682[(12)] = inst_13536);

return statearr_13682;
})();
var statearr_13683_15793 = state_13606__$1;
(statearr_13683_15793[(2)] = null);

(statearr_13683_15793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (43))){
var state_13606__$1 = state_13606;
var statearr_13687_15796 = state_13606__$1;
(statearr_13687_15796[(2)] = null);

(statearr_13687_15796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (29))){
var inst_13587 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13688_15797 = state_13606__$1;
(statearr_13688_15797[(2)] = inst_13587);

(statearr_13688_15797[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (44))){
var inst_13596 = (state_13606[(2)]);
var state_13606__$1 = (function (){var statearr_13690 = state_13606;
(statearr_13690[(26)] = inst_13596);

return statearr_13690;
})();
var statearr_13691_15798 = state_13606__$1;
(statearr_13691_15798[(2)] = null);

(statearr_13691_15798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (6))){
var inst_13525 = (state_13606[(27)]);
var inst_13523 = cljs.core.deref(cs);
var inst_13525__$1 = cljs.core.keys(inst_13523);
var inst_13526 = cljs.core.count(inst_13525__$1);
var inst_13527 = cljs.core.reset_BANG_(dctr,inst_13526);
var inst_13532 = cljs.core.seq(inst_13525__$1);
var inst_13533 = inst_13532;
var inst_13534 = null;
var inst_13535 = (0);
var inst_13536 = (0);
var state_13606__$1 = (function (){var statearr_13694 = state_13606;
(statearr_13694[(19)] = inst_13535);

(statearr_13694[(10)] = inst_13534);

(statearr_13694[(28)] = inst_13527);

(statearr_13694[(27)] = inst_13525__$1);

(statearr_13694[(20)] = inst_13533);

(statearr_13694[(12)] = inst_13536);

return statearr_13694;
})();
var statearr_13696_15802 = state_13606__$1;
(statearr_13696_15802[(2)] = null);

(statearr_13696_15802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (28))){
var inst_13555 = (state_13606[(23)]);
var inst_13533 = (state_13606[(20)]);
var inst_13555__$1 = cljs.core.seq(inst_13533);
var state_13606__$1 = (function (){var statearr_13698 = state_13606;
(statearr_13698[(23)] = inst_13555__$1);

return statearr_13698;
})();
if(inst_13555__$1){
var statearr_13702_15803 = state_13606__$1;
(statearr_13702_15803[(1)] = (33));

} else {
var statearr_13703_15804 = state_13606__$1;
(statearr_13703_15804[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (25))){
var inst_13535 = (state_13606[(19)]);
var inst_13536 = (state_13606[(12)]);
var inst_13538 = (inst_13536 < inst_13535);
var inst_13539 = inst_13538;
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13539)){
var statearr_13704_15805 = state_13606__$1;
(statearr_13704_15805[(1)] = (27));

} else {
var statearr_13705_15806 = state_13606__$1;
(statearr_13705_15806[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (34))){
var state_13606__$1 = state_13606;
var statearr_13709_15807 = state_13606__$1;
(statearr_13709_15807[(2)] = null);

(statearr_13709_15807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (17))){
var state_13606__$1 = state_13606;
var statearr_13713_15808 = state_13606__$1;
(statearr_13713_15808[(2)] = null);

(statearr_13713_15808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (3))){
var inst_13601 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13606__$1,inst_13601);
} else {
if((state_val_13607 === (12))){
var inst_13518 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13716_15812 = state_13606__$1;
(statearr_13716_15812[(2)] = inst_13518);

(statearr_13716_15812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (2))){
var state_13606__$1 = state_13606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13606__$1,(4),ch);
} else {
if((state_val_13607 === (23))){
var state_13606__$1 = state_13606;
var statearr_13719_15814 = state_13606__$1;
(statearr_13719_15814[(2)] = null);

(statearr_13719_15814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (35))){
var inst_13585 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13723_15815 = state_13606__$1;
(statearr_13723_15815[(2)] = inst_13585);

(statearr_13723_15815[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (19))){
var inst_13488 = (state_13606[(7)]);
var inst_13492 = cljs.core.chunk_first(inst_13488);
var inst_13493 = cljs.core.chunk_rest(inst_13488);
var inst_13494 = cljs.core.count(inst_13492);
var inst_13465 = inst_13493;
var inst_13466 = inst_13492;
var inst_13467 = inst_13494;
var inst_13468 = (0);
var state_13606__$1 = (function (){var statearr_13727 = state_13606;
(statearr_13727[(14)] = inst_13465);

(statearr_13727[(15)] = inst_13468);

(statearr_13727[(16)] = inst_13467);

(statearr_13727[(17)] = inst_13466);

return statearr_13727;
})();
var statearr_13728_15817 = state_13606__$1;
(statearr_13728_15817[(2)] = null);

(statearr_13728_15817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (11))){
var inst_13465 = (state_13606[(14)]);
var inst_13488 = (state_13606[(7)]);
var inst_13488__$1 = cljs.core.seq(inst_13465);
var state_13606__$1 = (function (){var statearr_13729 = state_13606;
(statearr_13729[(7)] = inst_13488__$1);

return statearr_13729;
})();
if(inst_13488__$1){
var statearr_13730_15819 = state_13606__$1;
(statearr_13730_15819[(1)] = (16));

} else {
var statearr_13732_15820 = state_13606__$1;
(statearr_13732_15820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (9))){
var inst_13520 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13736_15822 = state_13606__$1;
(statearr_13736_15822[(2)] = inst_13520);

(statearr_13736_15822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (5))){
var inst_13463 = cljs.core.deref(cs);
var inst_13464 = cljs.core.seq(inst_13463);
var inst_13465 = inst_13464;
var inst_13466 = null;
var inst_13467 = (0);
var inst_13468 = (0);
var state_13606__$1 = (function (){var statearr_13739 = state_13606;
(statearr_13739[(14)] = inst_13465);

(statearr_13739[(15)] = inst_13468);

(statearr_13739[(16)] = inst_13467);

(statearr_13739[(17)] = inst_13466);

return statearr_13739;
})();
var statearr_13740_15824 = state_13606__$1;
(statearr_13740_15824[(2)] = null);

(statearr_13740_15824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (14))){
var state_13606__$1 = state_13606;
var statearr_13741_15825 = state_13606__$1;
(statearr_13741_15825[(2)] = null);

(statearr_13741_15825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (45))){
var inst_13593 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13743_15829 = state_13606__$1;
(statearr_13743_15829[(2)] = inst_13593);

(statearr_13743_15829[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (26))){
var inst_13525 = (state_13606[(27)]);
var inst_13589 = (state_13606[(2)]);
var inst_13590 = cljs.core.seq(inst_13525);
var state_13606__$1 = (function (){var statearr_13745 = state_13606;
(statearr_13745[(29)] = inst_13589);

return statearr_13745;
})();
if(inst_13590){
var statearr_13746_15831 = state_13606__$1;
(statearr_13746_15831[(1)] = (42));

} else {
var statearr_13747_15832 = state_13606__$1;
(statearr_13747_15832[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (16))){
var inst_13488 = (state_13606[(7)]);
var inst_13490 = cljs.core.chunked_seq_QMARK_(inst_13488);
var state_13606__$1 = state_13606;
if(inst_13490){
var statearr_13752_15833 = state_13606__$1;
(statearr_13752_15833[(1)] = (19));

} else {
var statearr_13753_15834 = state_13606__$1;
(statearr_13753_15834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (38))){
var inst_13581 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13755_15836 = state_13606__$1;
(statearr_13755_15836[(2)] = inst_13581);

(statearr_13755_15836[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (30))){
var state_13606__$1 = state_13606;
var statearr_13759_15838 = state_13606__$1;
(statearr_13759_15838[(2)] = null);

(statearr_13759_15838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (10))){
var inst_13468 = (state_13606[(15)]);
var inst_13466 = (state_13606[(17)]);
var inst_13476 = cljs.core._nth(inst_13466,inst_13468);
var inst_13477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13476,(0),null);
var inst_13478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13476,(1),null);
var state_13606__$1 = (function (){var statearr_13764 = state_13606;
(statearr_13764[(24)] = inst_13477);

return statearr_13764;
})();
if(cljs.core.truth_(inst_13478)){
var statearr_13765_15840 = state_13606__$1;
(statearr_13765_15840[(1)] = (13));

} else {
var statearr_13768_15841 = state_13606__$1;
(statearr_13768_15841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (18))){
var inst_13516 = (state_13606[(2)]);
var state_13606__$1 = state_13606;
var statearr_13770_15842 = state_13606__$1;
(statearr_13770_15842[(2)] = inst_13516);

(statearr_13770_15842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (42))){
var state_13606__$1 = state_13606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13606__$1,(45),dchan);
} else {
if((state_val_13607 === (37))){
var inst_13456 = (state_13606[(9)]);
var inst_13569 = (state_13606[(22)]);
var inst_13555 = (state_13606[(23)]);
var inst_13569__$1 = cljs.core.first(inst_13555);
var inst_13570 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13569__$1,inst_13456,done);
var state_13606__$1 = (function (){var statearr_13775 = state_13606;
(statearr_13775[(22)] = inst_13569__$1);

return statearr_13775;
})();
if(cljs.core.truth_(inst_13570)){
var statearr_13776_15843 = state_13606__$1;
(statearr_13776_15843[(1)] = (39));

} else {
var statearr_13778_15845 = state_13606__$1;
(statearr_13778_15845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13607 === (8))){
var inst_13468 = (state_13606[(15)]);
var inst_13467 = (state_13606[(16)]);
var inst_13470 = (inst_13468 < inst_13467);
var inst_13471 = inst_13470;
var state_13606__$1 = state_13606;
if(cljs.core.truth_(inst_13471)){
var statearr_13780_15848 = state_13606__$1;
(statearr_13780_15848[(1)] = (10));

} else {
var statearr_13781_15849 = state_13606__$1;
(statearr_13781_15849[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11267__auto__ = null;
var cljs$core$async$mult_$_state_machine__11267__auto____0 = (function (){
var statearr_13787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13787[(0)] = cljs$core$async$mult_$_state_machine__11267__auto__);

(statearr_13787[(1)] = (1));

return statearr_13787;
});
var cljs$core$async$mult_$_state_machine__11267__auto____1 = (function (state_13606){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_13606);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e13793){var ex__11270__auto__ = e13793;
var statearr_13794_15852 = state_13606;
(statearr_13794_15852[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_13606[(4)]))){
var statearr_13800_15854 = state_13606;
(statearr_13800_15854[(1)] = cljs.core.first((state_13606[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15861 = state_13606;
state_13606 = G__15861;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11267__auto__ = function(state_13606){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11267__auto____1.call(this,state_13606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11267__auto____0;
cljs$core$async$mult_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11267__auto____1;
return cljs$core$async$mult_$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_13821 = f__11985__auto__();
(statearr_13821[(6)] = c__11984__auto___15751);

return statearr_13821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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
var G__13852 = arguments.length;
switch (G__13852) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_15884 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_15884(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15889 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_15889(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15891 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15891(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15896 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_15896(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15898 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15898(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15900 = arguments.length;
var i__5727__auto___15901 = (0);
while(true){
if((i__5727__auto___15901 < len__5726__auto___15900)){
args__5732__auto__.push((arguments[i__5727__auto___15901]));

var G__15902 = (i__5727__auto___15901 + (1));
i__5727__auto___15901 = G__15902;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13933){
var map__13934 = p__13933;
var map__13934__$1 = cljs.core.__destructure_map(map__13934);
var opts = map__13934__$1;
var statearr_13935_15913 = state;
(statearr_13935_15913[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13936_15914 = state;
(statearr_13936_15914[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_13939_15915 = state;
(statearr_13939_15915[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13910){
var G__13912 = cljs.core.first(seq13910);
var seq13910__$1 = cljs.core.next(seq13910);
var G__13913 = cljs.core.first(seq13910__$1);
var seq13910__$2 = cljs.core.next(seq13910__$1);
var G__13914 = cljs.core.first(seq13910__$2);
var seq13910__$3 = cljs.core.next(seq13910__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13912,G__13913,G__13914,seq13910__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13962 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13963){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13963 = meta13963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13964,meta13963__$1){
var self__ = this;
var _13964__$1 = this;
return (new cljs.core.async.t_cljs$core$async13962(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13963__$1));
}));

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13964){
var self__ = this;
var _13964__$1 = this;
return self__.meta13963;
}));

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13962.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13963","meta13963",-885965519,null)], null);
}));

(cljs.core.async.t_cljs$core$async13962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13962");

(cljs.core.async.t_cljs$core$async13962.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13962.
 */
cljs.core.async.__GT_t_cljs$core$async13962 = (function cljs$core$async$__GT_t_cljs$core$async13962(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13963){
return (new cljs.core.async.t_cljs$core$async13962(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13963));
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
var m = (new cljs.core.async.t_cljs$core$async13962(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__11984__auto___15949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_14060){
var state_val_14061 = (state_14060[(1)]);
if((state_val_14061 === (7))){
var inst_14014 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
if(cljs.core.truth_(inst_14014)){
var statearr_14063_15951 = state_14060__$1;
(statearr_14063_15951[(1)] = (8));

} else {
var statearr_14064_15953 = state_14060__$1;
(statearr_14064_15953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (20))){
var inst_14007 = (state_14060[(7)]);
var state_14060__$1 = state_14060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14060__$1,(23),out,inst_14007);
} else {
if((state_val_14061 === (1))){
var inst_13986 = calc_state();
var inst_13987 = cljs.core.__destructure_map(inst_13986);
var inst_13988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13987,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13987,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13987,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13991 = inst_13986;
var state_14060__$1 = (function (){var statearr_14066 = state_14060;
(statearr_14066[(8)] = inst_13990);

(statearr_14066[(9)] = inst_13989);

(statearr_14066[(10)] = inst_13991);

(statearr_14066[(11)] = inst_13988);

return statearr_14066;
})();
var statearr_14067_15956 = state_14060__$1;
(statearr_14067_15956[(2)] = null);

(statearr_14067_15956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (24))){
var inst_13995 = (state_14060[(12)]);
var inst_13991 = inst_13995;
var state_14060__$1 = (function (){var statearr_14069 = state_14060;
(statearr_14069[(10)] = inst_13991);

return statearr_14069;
})();
var statearr_14070_15958 = state_14060__$1;
(statearr_14070_15958[(2)] = null);

(statearr_14070_15958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (4))){
var inst_14007 = (state_14060[(7)]);
var inst_14009 = (state_14060[(13)]);
var inst_14006 = (state_14060[(2)]);
var inst_14007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14006,(0),null);
var inst_14008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14006,(1),null);
var inst_14009__$1 = (inst_14007__$1 == null);
var state_14060__$1 = (function (){var statearr_14072 = state_14060;
(statearr_14072[(7)] = inst_14007__$1);

(statearr_14072[(14)] = inst_14008);

(statearr_14072[(13)] = inst_14009__$1);

return statearr_14072;
})();
if(cljs.core.truth_(inst_14009__$1)){
var statearr_14073_15960 = state_14060__$1;
(statearr_14073_15960[(1)] = (5));

} else {
var statearr_14074_15961 = state_14060__$1;
(statearr_14074_15961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (15))){
var inst_14031 = (state_14060[(15)]);
var inst_13996 = (state_14060[(16)]);
var inst_14031__$1 = cljs.core.empty_QMARK_(inst_13996);
var state_14060__$1 = (function (){var statearr_14077 = state_14060;
(statearr_14077[(15)] = inst_14031__$1);

return statearr_14077;
})();
if(inst_14031__$1){
var statearr_14078_15962 = state_14060__$1;
(statearr_14078_15962[(1)] = (17));

} else {
var statearr_14080_15963 = state_14060__$1;
(statearr_14080_15963[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (21))){
var inst_13995 = (state_14060[(12)]);
var inst_13991 = inst_13995;
var state_14060__$1 = (function (){var statearr_14081 = state_14060;
(statearr_14081[(10)] = inst_13991);

return statearr_14081;
})();
var statearr_14082_15965 = state_14060__$1;
(statearr_14082_15965[(2)] = null);

(statearr_14082_15965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (13))){
var inst_14023 = (state_14060[(2)]);
var inst_14025 = calc_state();
var inst_13991 = inst_14025;
var state_14060__$1 = (function (){var statearr_14083 = state_14060;
(statearr_14083[(17)] = inst_14023);

(statearr_14083[(10)] = inst_13991);

return statearr_14083;
})();
var statearr_14084_15967 = state_14060__$1;
(statearr_14084_15967[(2)] = null);

(statearr_14084_15967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (22))){
var inst_14052 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
var statearr_14086_15969 = state_14060__$1;
(statearr_14086_15969[(2)] = inst_14052);

(statearr_14086_15969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (6))){
var inst_14008 = (state_14060[(14)]);
var inst_14012 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14008,change);
var state_14060__$1 = state_14060;
var statearr_14087_15970 = state_14060__$1;
(statearr_14087_15970[(2)] = inst_14012);

(statearr_14087_15970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (25))){
var state_14060__$1 = state_14060;
var statearr_14088_15971 = state_14060__$1;
(statearr_14088_15971[(2)] = null);

(statearr_14088_15971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (17))){
var inst_14008 = (state_14060[(14)]);
var inst_13997 = (state_14060[(18)]);
var inst_14033 = (inst_13997.cljs$core$IFn$_invoke$arity$1 ? inst_13997.cljs$core$IFn$_invoke$arity$1(inst_14008) : inst_13997.call(null,inst_14008));
var inst_14034 = cljs.core.not(inst_14033);
var state_14060__$1 = state_14060;
var statearr_14090_15972 = state_14060__$1;
(statearr_14090_15972[(2)] = inst_14034);

(statearr_14090_15972[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (3))){
var inst_14056 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14060__$1,inst_14056);
} else {
if((state_val_14061 === (12))){
var state_14060__$1 = state_14060;
var statearr_14092_15973 = state_14060__$1;
(statearr_14092_15973[(2)] = null);

(statearr_14092_15973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (2))){
var inst_13995 = (state_14060[(12)]);
var inst_13991 = (state_14060[(10)]);
var inst_13995__$1 = cljs.core.__destructure_map(inst_13991);
var inst_13996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13995__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13995__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13995__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14060__$1 = (function (){var statearr_14093 = state_14060;
(statearr_14093[(12)] = inst_13995__$1);

(statearr_14093[(18)] = inst_13997);

(statearr_14093[(16)] = inst_13996);

return statearr_14093;
})();
return cljs.core.async.ioc_alts_BANG_(state_14060__$1,(4),inst_14001);
} else {
if((state_val_14061 === (23))){
var inst_14042 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
if(cljs.core.truth_(inst_14042)){
var statearr_14095_15976 = state_14060__$1;
(statearr_14095_15976[(1)] = (24));

} else {
var statearr_14096_15977 = state_14060__$1;
(statearr_14096_15977[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (19))){
var inst_14037 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
var statearr_14097_15978 = state_14060__$1;
(statearr_14097_15978[(2)] = inst_14037);

(statearr_14097_15978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (11))){
var inst_14008 = (state_14060[(14)]);
var inst_14020 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14008);
var state_14060__$1 = state_14060;
var statearr_14098_15979 = state_14060__$1;
(statearr_14098_15979[(2)] = inst_14020);

(statearr_14098_15979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (9))){
var inst_14008 = (state_14060[(14)]);
var inst_14028 = (state_14060[(19)]);
var inst_13996 = (state_14060[(16)]);
var inst_14028__$1 = (inst_13996.cljs$core$IFn$_invoke$arity$1 ? inst_13996.cljs$core$IFn$_invoke$arity$1(inst_14008) : inst_13996.call(null,inst_14008));
var state_14060__$1 = (function (){var statearr_14100 = state_14060;
(statearr_14100[(19)] = inst_14028__$1);

return statearr_14100;
})();
if(cljs.core.truth_(inst_14028__$1)){
var statearr_14101_15981 = state_14060__$1;
(statearr_14101_15981[(1)] = (14));

} else {
var statearr_14102_15982 = state_14060__$1;
(statearr_14102_15982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (5))){
var inst_14009 = (state_14060[(13)]);
var state_14060__$1 = state_14060;
var statearr_14103_15984 = state_14060__$1;
(statearr_14103_15984[(2)] = inst_14009);

(statearr_14103_15984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (14))){
var inst_14028 = (state_14060[(19)]);
var state_14060__$1 = state_14060;
var statearr_14104_15985 = state_14060__$1;
(statearr_14104_15985[(2)] = inst_14028);

(statearr_14104_15985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (26))){
var inst_14048 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
var statearr_14105_15987 = state_14060__$1;
(statearr_14105_15987[(2)] = inst_14048);

(statearr_14105_15987[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (16))){
var inst_14039 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
if(cljs.core.truth_(inst_14039)){
var statearr_14108_15988 = state_14060__$1;
(statearr_14108_15988[(1)] = (20));

} else {
var statearr_14109_15989 = state_14060__$1;
(statearr_14109_15989[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (10))){
var inst_14054 = (state_14060[(2)]);
var state_14060__$1 = state_14060;
var statearr_14110_15990 = state_14060__$1;
(statearr_14110_15990[(2)] = inst_14054);

(statearr_14110_15990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (18))){
var inst_14031 = (state_14060[(15)]);
var state_14060__$1 = state_14060;
var statearr_14111_15991 = state_14060__$1;
(statearr_14111_15991[(2)] = inst_14031);

(statearr_14111_15991[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14061 === (8))){
var inst_14007 = (state_14060[(7)]);
var inst_14017 = (inst_14007 == null);
var state_14060__$1 = state_14060;
if(cljs.core.truth_(inst_14017)){
var statearr_14112_15992 = state_14060__$1;
(statearr_14112_15992[(1)] = (11));

} else {
var statearr_14114_15993 = state_14060__$1;
(statearr_14114_15993[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11267__auto__ = null;
var cljs$core$async$mix_$_state_machine__11267__auto____0 = (function (){
var statearr_14116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14116[(0)] = cljs$core$async$mix_$_state_machine__11267__auto__);

(statearr_14116[(1)] = (1));

return statearr_14116;
});
var cljs$core$async$mix_$_state_machine__11267__auto____1 = (function (state_14060){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_14060);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e14117){var ex__11270__auto__ = e14117;
var statearr_14118_15994 = state_14060;
(statearr_14118_15994[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_14060[(4)]))){
var statearr_14123_15995 = state_14060;
(statearr_14123_15995[(1)] = cljs.core.first((state_14060[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15996 = state_14060;
state_14060 = G__15996;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11267__auto__ = function(state_14060){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11267__auto____1.call(this,state_14060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11267__auto____0;
cljs$core$async$mix_$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11267__auto____1;
return cljs$core$async$mix_$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_14125 = f__11985__auto__();
(statearr_14125[(6)] = c__11984__auto___15949);

return statearr_14125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_15997 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_15997(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16000 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16000(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16011 = (function() {
var G__16012 = null;
var G__16012__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16012__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16012 = function(p,v){
switch(arguments.length){
case 1:
return G__16012__1.call(this,p);
case 2:
return G__16012__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16012.cljs$core$IFn$_invoke$arity$1 = G__16012__1;
G__16012.cljs$core$IFn$_invoke$arity$2 = G__16012__2;
return G__16012;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14153 = arguments.length;
switch (G__14153) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16011(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16011(p,v);
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
cljs.core.async.t_cljs$core$async14182 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14183){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14183 = meta14183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14184,meta14183__$1){
var self__ = this;
var _14184__$1 = this;
return (new cljs.core.async.t_cljs$core$async14182(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14183__$1));
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14184){
var self__ = this;
var _14184__$1 = this;
return self__.meta14183;
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14183","meta14183",744735920,null)], null);
}));

(cljs.core.async.t_cljs$core$async14182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14182");

(cljs.core.async.t_cljs$core$async14182.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14182.
 */
cljs.core.async.__GT_t_cljs$core$async14182 = (function cljs$core$async$__GT_t_cljs$core$async14182(ch,topic_fn,buf_fn,mults,ensure_mult,meta14183){
return (new cljs.core.async.t_cljs$core$async14182(ch,topic_fn,buf_fn,mults,ensure_mult,meta14183));
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
var G__14170 = arguments.length;
switch (G__14170) {
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
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14165_SHARP_){
if(cljs.core.truth_((p1__14165_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14165_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14165_SHARP_.call(null,topic)))){
return p1__14165_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14165_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14182(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__11984__auto___16030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_14302){
var state_val_14306 = (state_14302[(1)]);
if((state_val_14306 === (7))){
var inst_14295 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14310_16031 = state_14302__$1;
(statearr_14310_16031[(2)] = inst_14295);

(statearr_14310_16031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (20))){
var state_14302__$1 = state_14302;
var statearr_14311_16033 = state_14302__$1;
(statearr_14311_16033[(2)] = null);

(statearr_14311_16033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (1))){
var state_14302__$1 = state_14302;
var statearr_14312_16038 = state_14302__$1;
(statearr_14312_16038[(2)] = null);

(statearr_14312_16038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (24))){
var inst_14278 = (state_14302[(7)]);
var inst_14287 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14278);
var state_14302__$1 = state_14302;
var statearr_14315_16039 = state_14302__$1;
(statearr_14315_16039[(2)] = inst_14287);

(statearr_14315_16039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (4))){
var inst_14222 = (state_14302[(8)]);
var inst_14222__$1 = (state_14302[(2)]);
var inst_14223 = (inst_14222__$1 == null);
var state_14302__$1 = (function (){var statearr_14316 = state_14302;
(statearr_14316[(8)] = inst_14222__$1);

return statearr_14316;
})();
if(cljs.core.truth_(inst_14223)){
var statearr_14317_16041 = state_14302__$1;
(statearr_14317_16041[(1)] = (5));

} else {
var statearr_14318_16042 = state_14302__$1;
(statearr_14318_16042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (15))){
var inst_14272 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14319_16047 = state_14302__$1;
(statearr_14319_16047[(2)] = inst_14272);

(statearr_14319_16047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (21))){
var inst_14292 = (state_14302[(2)]);
var state_14302__$1 = (function (){var statearr_14320 = state_14302;
(statearr_14320[(9)] = inst_14292);

return statearr_14320;
})();
var statearr_14321_16048 = state_14302__$1;
(statearr_14321_16048[(2)] = null);

(statearr_14321_16048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (13))){
var inst_14252 = (state_14302[(10)]);
var inst_14254 = cljs.core.chunked_seq_QMARK_(inst_14252);
var state_14302__$1 = state_14302;
if(inst_14254){
var statearr_14322_16049 = state_14302__$1;
(statearr_14322_16049[(1)] = (16));

} else {
var statearr_14324_16050 = state_14302__$1;
(statearr_14324_16050[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (22))){
var inst_14284 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
if(cljs.core.truth_(inst_14284)){
var statearr_14329_16051 = state_14302__$1;
(statearr_14329_16051[(1)] = (23));

} else {
var statearr_14330_16052 = state_14302__$1;
(statearr_14330_16052[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (6))){
var inst_14278 = (state_14302[(7)]);
var inst_14222 = (state_14302[(8)]);
var inst_14280 = (state_14302[(11)]);
var inst_14278__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14222) : topic_fn.call(null,inst_14222));
var inst_14279 = cljs.core.deref(mults);
var inst_14280__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14279,inst_14278__$1);
var state_14302__$1 = (function (){var statearr_14331 = state_14302;
(statearr_14331[(7)] = inst_14278__$1);

(statearr_14331[(11)] = inst_14280__$1);

return statearr_14331;
})();
if(cljs.core.truth_(inst_14280__$1)){
var statearr_14332_16053 = state_14302__$1;
(statearr_14332_16053[(1)] = (19));

} else {
var statearr_14333_16054 = state_14302__$1;
(statearr_14333_16054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (25))){
var inst_14289 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14335_16055 = state_14302__$1;
(statearr_14335_16055[(2)] = inst_14289);

(statearr_14335_16055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (17))){
var inst_14252 = (state_14302[(10)]);
var inst_14263 = cljs.core.first(inst_14252);
var inst_14264 = cljs.core.async.muxch_STAR_(inst_14263);
var inst_14265 = cljs.core.async.close_BANG_(inst_14264);
var inst_14266 = cljs.core.next(inst_14252);
var inst_14235 = inst_14266;
var inst_14236 = null;
var inst_14237 = (0);
var inst_14238 = (0);
var state_14302__$1 = (function (){var statearr_14337 = state_14302;
(statearr_14337[(12)] = inst_14237);

(statearr_14337[(13)] = inst_14238);

(statearr_14337[(14)] = inst_14235);

(statearr_14337[(15)] = inst_14265);

(statearr_14337[(16)] = inst_14236);

return statearr_14337;
})();
var statearr_14338_16056 = state_14302__$1;
(statearr_14338_16056[(2)] = null);

(statearr_14338_16056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (3))){
var inst_14297 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14302__$1,inst_14297);
} else {
if((state_val_14306 === (12))){
var inst_14274 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14339_16057 = state_14302__$1;
(statearr_14339_16057[(2)] = inst_14274);

(statearr_14339_16057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (2))){
var state_14302__$1 = state_14302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14302__$1,(4),ch);
} else {
if((state_val_14306 === (23))){
var state_14302__$1 = state_14302;
var statearr_14342_16058 = state_14302__$1;
(statearr_14342_16058[(2)] = null);

(statearr_14342_16058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (19))){
var inst_14222 = (state_14302[(8)]);
var inst_14280 = (state_14302[(11)]);
var inst_14282 = cljs.core.async.muxch_STAR_(inst_14280);
var state_14302__$1 = state_14302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14302__$1,(22),inst_14282,inst_14222);
} else {
if((state_val_14306 === (11))){
var inst_14252 = (state_14302[(10)]);
var inst_14235 = (state_14302[(14)]);
var inst_14252__$1 = cljs.core.seq(inst_14235);
var state_14302__$1 = (function (){var statearr_14345 = state_14302;
(statearr_14345[(10)] = inst_14252__$1);

return statearr_14345;
})();
if(inst_14252__$1){
var statearr_14349_16060 = state_14302__$1;
(statearr_14349_16060[(1)] = (13));

} else {
var statearr_14350_16061 = state_14302__$1;
(statearr_14350_16061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (9))){
var inst_14276 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14351_16062 = state_14302__$1;
(statearr_14351_16062[(2)] = inst_14276);

(statearr_14351_16062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (5))){
var inst_14232 = cljs.core.deref(mults);
var inst_14233 = cljs.core.vals(inst_14232);
var inst_14234 = cljs.core.seq(inst_14233);
var inst_14235 = inst_14234;
var inst_14236 = null;
var inst_14237 = (0);
var inst_14238 = (0);
var state_14302__$1 = (function (){var statearr_14354 = state_14302;
(statearr_14354[(12)] = inst_14237);

(statearr_14354[(13)] = inst_14238);

(statearr_14354[(14)] = inst_14235);

(statearr_14354[(16)] = inst_14236);

return statearr_14354;
})();
var statearr_14355_16069 = state_14302__$1;
(statearr_14355_16069[(2)] = null);

(statearr_14355_16069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (14))){
var state_14302__$1 = state_14302;
var statearr_14359_16070 = state_14302__$1;
(statearr_14359_16070[(2)] = null);

(statearr_14359_16070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (16))){
var inst_14252 = (state_14302[(10)]);
var inst_14256 = cljs.core.chunk_first(inst_14252);
var inst_14257 = cljs.core.chunk_rest(inst_14252);
var inst_14258 = cljs.core.count(inst_14256);
var inst_14235 = inst_14257;
var inst_14236 = inst_14256;
var inst_14237 = inst_14258;
var inst_14238 = (0);
var state_14302__$1 = (function (){var statearr_14361 = state_14302;
(statearr_14361[(12)] = inst_14237);

(statearr_14361[(13)] = inst_14238);

(statearr_14361[(14)] = inst_14235);

(statearr_14361[(16)] = inst_14236);

return statearr_14361;
})();
var statearr_14362_16071 = state_14302__$1;
(statearr_14362_16071[(2)] = null);

(statearr_14362_16071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (10))){
var inst_14237 = (state_14302[(12)]);
var inst_14238 = (state_14302[(13)]);
var inst_14235 = (state_14302[(14)]);
var inst_14236 = (state_14302[(16)]);
var inst_14243 = cljs.core._nth(inst_14236,inst_14238);
var inst_14244 = cljs.core.async.muxch_STAR_(inst_14243);
var inst_14245 = cljs.core.async.close_BANG_(inst_14244);
var inst_14248 = (inst_14238 + (1));
var tmp14356 = inst_14237;
var tmp14357 = inst_14235;
var tmp14358 = inst_14236;
var inst_14235__$1 = tmp14357;
var inst_14236__$1 = tmp14358;
var inst_14237__$1 = tmp14356;
var inst_14238__$1 = inst_14248;
var state_14302__$1 = (function (){var statearr_14363 = state_14302;
(statearr_14363[(12)] = inst_14237__$1);

(statearr_14363[(13)] = inst_14238__$1);

(statearr_14363[(14)] = inst_14235__$1);

(statearr_14363[(17)] = inst_14245);

(statearr_14363[(16)] = inst_14236__$1);

return statearr_14363;
})();
var statearr_14369_16074 = state_14302__$1;
(statearr_14369_16074[(2)] = null);

(statearr_14369_16074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (18))){
var inst_14269 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14370_16075 = state_14302__$1;
(statearr_14370_16075[(2)] = inst_14269);

(statearr_14370_16075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (8))){
var inst_14237 = (state_14302[(12)]);
var inst_14238 = (state_14302[(13)]);
var inst_14240 = (inst_14238 < inst_14237);
var inst_14241 = inst_14240;
var state_14302__$1 = state_14302;
if(cljs.core.truth_(inst_14241)){
var statearr_14373_16076 = state_14302__$1;
(statearr_14373_16076[(1)] = (10));

} else {
var statearr_14374_16077 = state_14302__$1;
(statearr_14374_16077[(1)] = (11));

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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_14379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14379[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_14379[(1)] = (1));

return statearr_14379;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_14302){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_14302);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e14380){var ex__11270__auto__ = e14380;
var statearr_14381_16079 = state_14302;
(statearr_14381_16079[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_14302[(4)]))){
var statearr_14382_16081 = state_14302;
(statearr_14382_16081[(1)] = cljs.core.first((state_14302[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16083 = state_14302;
state_14302 = G__16083;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_14302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_14302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_14385 = f__11985__auto__();
(statearr_14385[(6)] = c__11984__auto___16030);

return statearr_14385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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
var G__14390 = arguments.length;
switch (G__14390) {
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
var G__14411 = arguments.length;
switch (G__14411) {
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
var G__14416 = arguments.length;
switch (G__14416) {
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
var c__11984__auto___16102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_14461){
var state_val_14462 = (state_14461[(1)]);
if((state_val_14462 === (7))){
var state_14461__$1 = state_14461;
var statearr_14471_16107 = state_14461__$1;
(statearr_14471_16107[(2)] = null);

(statearr_14471_16107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (1))){
var state_14461__$1 = state_14461;
var statearr_14475_16109 = state_14461__$1;
(statearr_14475_16109[(2)] = null);

(statearr_14475_16109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (4))){
var inst_14420 = (state_14461[(7)]);
var inst_14421 = (state_14461[(8)]);
var inst_14423 = (inst_14421 < inst_14420);
var state_14461__$1 = state_14461;
if(cljs.core.truth_(inst_14423)){
var statearr_14479_16112 = state_14461__$1;
(statearr_14479_16112[(1)] = (6));

} else {
var statearr_14481_16113 = state_14461__$1;
(statearr_14481_16113[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (15))){
var inst_14447 = (state_14461[(9)]);
var inst_14452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14447);
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14461__$1,(17),out,inst_14452);
} else {
if((state_val_14462 === (13))){
var inst_14447 = (state_14461[(9)]);
var inst_14447__$1 = (state_14461[(2)]);
var inst_14448 = cljs.core.some(cljs.core.nil_QMARK_,inst_14447__$1);
var state_14461__$1 = (function (){var statearr_14485 = state_14461;
(statearr_14485[(9)] = inst_14447__$1);

return statearr_14485;
})();
if(cljs.core.truth_(inst_14448)){
var statearr_14486_16119 = state_14461__$1;
(statearr_14486_16119[(1)] = (14));

} else {
var statearr_14487_16120 = state_14461__$1;
(statearr_14487_16120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (6))){
var state_14461__$1 = state_14461;
var statearr_14488_16121 = state_14461__$1;
(statearr_14488_16121[(2)] = null);

(statearr_14488_16121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (17))){
var inst_14454 = (state_14461[(2)]);
var state_14461__$1 = (function (){var statearr_14491 = state_14461;
(statearr_14491[(10)] = inst_14454);

return statearr_14491;
})();
var statearr_14492_16122 = state_14461__$1;
(statearr_14492_16122[(2)] = null);

(statearr_14492_16122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (3))){
var inst_14459 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14461__$1,inst_14459);
} else {
if((state_val_14462 === (12))){
var _ = (function (){var statearr_14494 = state_14461;
(statearr_14494[(4)] = cljs.core.rest((state_14461[(4)])));

return statearr_14494;
})();
var state_14461__$1 = state_14461;
var ex14490 = (state_14461__$1[(2)]);
var statearr_14496_16123 = state_14461__$1;
(statearr_14496_16123[(5)] = ex14490);


if((ex14490 instanceof Object)){
var statearr_14499_16124 = state_14461__$1;
(statearr_14499_16124[(1)] = (11));

(statearr_14499_16124[(5)] = null);

} else {
throw ex14490;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (2))){
var inst_14419 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14420 = cnt;
var inst_14421 = (0);
var state_14461__$1 = (function (){var statearr_14502 = state_14461;
(statearr_14502[(7)] = inst_14420);

(statearr_14502[(8)] = inst_14421);

(statearr_14502[(11)] = inst_14419);

return statearr_14502;
})();
var statearr_14503_16125 = state_14461__$1;
(statearr_14503_16125[(2)] = null);

(statearr_14503_16125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (11))){
var inst_14425 = (state_14461[(2)]);
var inst_14426 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14461__$1 = (function (){var statearr_14504 = state_14461;
(statearr_14504[(12)] = inst_14425);

return statearr_14504;
})();
var statearr_14505_16126 = state_14461__$1;
(statearr_14505_16126[(2)] = inst_14426);

(statearr_14505_16126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (9))){
var inst_14421 = (state_14461[(8)]);
var _ = (function (){var statearr_14507 = state_14461;
(statearr_14507[(4)] = cljs.core.cons((12),(state_14461[(4)])));

return statearr_14507;
})();
var inst_14432 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14421) : chs__$1.call(null,inst_14421));
var inst_14433 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14421) : done.call(null,inst_14421));
var inst_14434 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14432,inst_14433);
var ___$1 = (function (){var statearr_14514 = state_14461;
(statearr_14514[(4)] = cljs.core.rest((state_14461[(4)])));

return statearr_14514;
})();
var state_14461__$1 = state_14461;
var statearr_14515_16127 = state_14461__$1;
(statearr_14515_16127[(2)] = inst_14434);

(statearr_14515_16127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (5))){
var inst_14445 = (state_14461[(2)]);
var state_14461__$1 = (function (){var statearr_14516 = state_14461;
(statearr_14516[(13)] = inst_14445);

return statearr_14516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14461__$1,(13),dchan);
} else {
if((state_val_14462 === (14))){
var inst_14450 = cljs.core.async.close_BANG_(out);
var state_14461__$1 = state_14461;
var statearr_14519_16128 = state_14461__$1;
(statearr_14519_16128[(2)] = inst_14450);

(statearr_14519_16128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (16))){
var inst_14457 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14520_16129 = state_14461__$1;
(statearr_14520_16129[(2)] = inst_14457);

(statearr_14520_16129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (10))){
var inst_14421 = (state_14461[(8)]);
var inst_14437 = (state_14461[(2)]);
var inst_14438 = (inst_14421 + (1));
var inst_14421__$1 = inst_14438;
var state_14461__$1 = (function (){var statearr_14523 = state_14461;
(statearr_14523[(14)] = inst_14437);

(statearr_14523[(8)] = inst_14421__$1);

return statearr_14523;
})();
var statearr_14524_16131 = state_14461__$1;
(statearr_14524_16131[(2)] = null);

(statearr_14524_16131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14462 === (8))){
var inst_14443 = (state_14461[(2)]);
var state_14461__$1 = state_14461;
var statearr_14525_16132 = state_14461__$1;
(statearr_14525_16132[(2)] = inst_14443);

(statearr_14525_16132[(1)] = (5));


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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_14527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14527[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_14527[(1)] = (1));

return statearr_14527;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_14461){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_14461);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e14528){var ex__11270__auto__ = e14528;
var statearr_14530_16133 = state_14461;
(statearr_14530_16133[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_14461[(4)]))){
var statearr_14532_16134 = state_14461;
(statearr_14532_16134[(1)] = cljs.core.first((state_14461[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16135 = state_14461;
state_14461 = G__16135;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_14533 = f__11985__auto__();
(statearr_14533[(6)] = c__11984__auto___16102);

return statearr_14533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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
var G__14548 = arguments.length;
switch (G__14548) {
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
var c__11984__auto___16143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_14590){
var state_val_14591 = (state_14590[(1)]);
if((state_val_14591 === (7))){
var inst_14565 = (state_14590[(7)]);
var inst_14564 = (state_14590[(8)]);
var inst_14564__$1 = (state_14590[(2)]);
var inst_14565__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14564__$1,(0),null);
var inst_14566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14564__$1,(1),null);
var inst_14567 = (inst_14565__$1 == null);
var state_14590__$1 = (function (){var statearr_14593 = state_14590;
(statearr_14593[(7)] = inst_14565__$1);

(statearr_14593[(8)] = inst_14564__$1);

(statearr_14593[(9)] = inst_14566);

return statearr_14593;
})();
if(cljs.core.truth_(inst_14567)){
var statearr_14594_16145 = state_14590__$1;
(statearr_14594_16145[(1)] = (8));

} else {
var statearr_14595_16146 = state_14590__$1;
(statearr_14595_16146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (1))){
var inst_14553 = cljs.core.vec(chs);
var inst_14554 = inst_14553;
var state_14590__$1 = (function (){var statearr_14598 = state_14590;
(statearr_14598[(10)] = inst_14554);

return statearr_14598;
})();
var statearr_14602_16147 = state_14590__$1;
(statearr_14602_16147[(2)] = null);

(statearr_14602_16147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (4))){
var inst_14554 = (state_14590[(10)]);
var state_14590__$1 = state_14590;
return cljs.core.async.ioc_alts_BANG_(state_14590__$1,(7),inst_14554);
} else {
if((state_val_14591 === (6))){
var inst_14583 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14608_16150 = state_14590__$1;
(statearr_14608_16150[(2)] = inst_14583);

(statearr_14608_16150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (3))){
var inst_14585 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14590__$1,inst_14585);
} else {
if((state_val_14591 === (2))){
var inst_14554 = (state_14590[(10)]);
var inst_14557 = cljs.core.count(inst_14554);
var inst_14558 = (inst_14557 > (0));
var state_14590__$1 = state_14590;
if(cljs.core.truth_(inst_14558)){
var statearr_14610_16151 = state_14590__$1;
(statearr_14610_16151[(1)] = (4));

} else {
var statearr_14611_16152 = state_14590__$1;
(statearr_14611_16152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (11))){
var inst_14554 = (state_14590[(10)]);
var inst_14575 = (state_14590[(2)]);
var tmp14609 = inst_14554;
var inst_14554__$1 = tmp14609;
var state_14590__$1 = (function (){var statearr_14615 = state_14590;
(statearr_14615[(11)] = inst_14575);

(statearr_14615[(10)] = inst_14554__$1);

return statearr_14615;
})();
var statearr_14616_16154 = state_14590__$1;
(statearr_14616_16154[(2)] = null);

(statearr_14616_16154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (9))){
var inst_14565 = (state_14590[(7)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14590__$1,(11),out,inst_14565);
} else {
if((state_val_14591 === (5))){
var inst_14581 = cljs.core.async.close_BANG_(out);
var state_14590__$1 = state_14590;
var statearr_14620_16157 = state_14590__$1;
(statearr_14620_16157[(2)] = inst_14581);

(statearr_14620_16157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (10))){
var inst_14578 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14622_16158 = state_14590__$1;
(statearr_14622_16158[(2)] = inst_14578);

(statearr_14622_16158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (8))){
var inst_14565 = (state_14590[(7)]);
var inst_14564 = (state_14590[(8)]);
var inst_14554 = (state_14590[(10)]);
var inst_14566 = (state_14590[(9)]);
var inst_14569 = (function (){var cs = inst_14554;
var vec__14560 = inst_14564;
var v = inst_14565;
var c = inst_14566;
return (function (p1__14545_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14545_SHARP_);
});
})();
var inst_14571 = cljs.core.filterv(inst_14569,inst_14554);
var inst_14554__$1 = inst_14571;
var state_14590__$1 = (function (){var statearr_14632 = state_14590;
(statearr_14632[(10)] = inst_14554__$1);

return statearr_14632;
})();
var statearr_14633_16163 = state_14590__$1;
(statearr_14633_16163[(2)] = null);

(statearr_14633_16163[(1)] = (2));


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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_14636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14636[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_14636[(1)] = (1));

return statearr_14636;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_14590){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_14590);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e14637){var ex__11270__auto__ = e14637;
var statearr_14638_16164 = state_14590;
(statearr_14638_16164[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_14590[(4)]))){
var statearr_14639_16165 = state_14590;
(statearr_14639_16165[(1)] = cljs.core.first((state_14590[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16166 = state_14590;
state_14590 = G__16166;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_14648 = f__11985__auto__();
(statearr_14648[(6)] = c__11984__auto___16143);

return statearr_14648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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
var G__14658 = arguments.length;
switch (G__14658) {
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
var c__11984__auto___16171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_14693){
var state_val_14694 = (state_14693[(1)]);
if((state_val_14694 === (7))){
var inst_14669 = (state_14693[(7)]);
var inst_14669__$1 = (state_14693[(2)]);
var inst_14676 = (inst_14669__$1 == null);
var inst_14677 = cljs.core.not(inst_14676);
var state_14693__$1 = (function (){var statearr_14698 = state_14693;
(statearr_14698[(7)] = inst_14669__$1);

return statearr_14698;
})();
if(inst_14677){
var statearr_14700_16174 = state_14693__$1;
(statearr_14700_16174[(1)] = (8));

} else {
var statearr_14701_16175 = state_14693__$1;
(statearr_14701_16175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (1))){
var inst_14663 = (0);
var state_14693__$1 = (function (){var statearr_14702 = state_14693;
(statearr_14702[(8)] = inst_14663);

return statearr_14702;
})();
var statearr_14703_16176 = state_14693__$1;
(statearr_14703_16176[(2)] = null);

(statearr_14703_16176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (4))){
var state_14693__$1 = state_14693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14693__$1,(7),ch);
} else {
if((state_val_14694 === (6))){
var inst_14688 = (state_14693[(2)]);
var state_14693__$1 = state_14693;
var statearr_14706_16177 = state_14693__$1;
(statearr_14706_16177[(2)] = inst_14688);

(statearr_14706_16177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (3))){
var inst_14690 = (state_14693[(2)]);
var inst_14691 = cljs.core.async.close_BANG_(out);
var state_14693__$1 = (function (){var statearr_14708 = state_14693;
(statearr_14708[(9)] = inst_14690);

return statearr_14708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14693__$1,inst_14691);
} else {
if((state_val_14694 === (2))){
var inst_14663 = (state_14693[(8)]);
var inst_14665 = (inst_14663 < n);
var state_14693__$1 = state_14693;
if(cljs.core.truth_(inst_14665)){
var statearr_14709_16180 = state_14693__$1;
(statearr_14709_16180[(1)] = (4));

} else {
var statearr_14711_16182 = state_14693__$1;
(statearr_14711_16182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (11))){
var inst_14663 = (state_14693[(8)]);
var inst_14680 = (state_14693[(2)]);
var inst_14681 = (inst_14663 + (1));
var inst_14663__$1 = inst_14681;
var state_14693__$1 = (function (){var statearr_14713 = state_14693;
(statearr_14713[(8)] = inst_14663__$1);

(statearr_14713[(10)] = inst_14680);

return statearr_14713;
})();
var statearr_14715_16184 = state_14693__$1;
(statearr_14715_16184[(2)] = null);

(statearr_14715_16184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (9))){
var state_14693__$1 = state_14693;
var statearr_14716_16185 = state_14693__$1;
(statearr_14716_16185[(2)] = null);

(statearr_14716_16185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (5))){
var state_14693__$1 = state_14693;
var statearr_14721_16186 = state_14693__$1;
(statearr_14721_16186[(2)] = null);

(statearr_14721_16186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (10))){
var inst_14685 = (state_14693[(2)]);
var state_14693__$1 = state_14693;
var statearr_14724_16187 = state_14693__$1;
(statearr_14724_16187[(2)] = inst_14685);

(statearr_14724_16187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14694 === (8))){
var inst_14669 = (state_14693[(7)]);
var state_14693__$1 = state_14693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14693__$1,(11),out,inst_14669);
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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_14727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14727[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_14727[(1)] = (1));

return statearr_14727;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_14693){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_14693);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e14729){var ex__11270__auto__ = e14729;
var statearr_14730_16193 = state_14693;
(statearr_14730_16193[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_14693[(4)]))){
var statearr_14731_16194 = state_14693;
(statearr_14731_16194[(1)] = cljs.core.first((state_14693[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16195 = state_14693;
state_14693 = G__16195;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_14693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_14693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_14733 = f__11985__auto__();
(statearr_14733[(6)] = c__11984__auto___16171);

return statearr_14733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
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
cljs.core.async.t_cljs$core$async14753 = (function (f,ch,meta14738,_,fn1,meta14754){
this.f = f;
this.ch = ch;
this.meta14738 = meta14738;
this._ = _;
this.fn1 = fn1;
this.meta14754 = meta14754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14755,meta14754__$1){
var self__ = this;
var _14755__$1 = this;
return (new cljs.core.async.t_cljs$core$async14753(self__.f,self__.ch,self__.meta14738,self__._,self__.fn1,meta14754__$1));
}));

(cljs.core.async.t_cljs$core$async14753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14755){
var self__ = this;
var _14755__$1 = this;
return self__.meta14754;
}));

(cljs.core.async.t_cljs$core$async14753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14736_SHARP_){
var G__14759 = (((p1__14736_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14736_SHARP_) : self__.f.call(null,p1__14736_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14759) : f1.call(null,G__14759));
});
}));

(cljs.core.async.t_cljs$core$async14753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14738","meta14738",-963100600,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14737","cljs.core.async/t_cljs$core$async14737",-1851389571,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14754","meta14754",-2125028771,null)], null);
}));

(cljs.core.async.t_cljs$core$async14753.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14753");

(cljs.core.async.t_cljs$core$async14753.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14753");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14753.
 */
cljs.core.async.__GT_t_cljs$core$async14753 = (function cljs$core$async$__GT_t_cljs$core$async14753(f,ch,meta14738,_,fn1,meta14754){
return (new cljs.core.async.t_cljs$core$async14753(f,ch,meta14738,_,fn1,meta14754));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14737 = (function (f,ch,meta14738){
this.f = f;
this.ch = ch;
this.meta14738 = meta14738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14739,meta14738__$1){
var self__ = this;
var _14739__$1 = this;
return (new cljs.core.async.t_cljs$core$async14737(self__.f,self__.ch,meta14738__$1));
}));

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14739){
var self__ = this;
var _14739__$1 = this;
return self__.meta14738;
}));

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async14753(self__.f,self__.ch,self__.meta14738,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14767 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14767) : self__.f.call(null,G__14767));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14738","meta14738",-963100600,null)], null);
}));

(cljs.core.async.t_cljs$core$async14737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14737");

(cljs.core.async.t_cljs$core$async14737.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14737.
 */
cljs.core.async.__GT_t_cljs$core$async14737 = (function cljs$core$async$__GT_t_cljs$core$async14737(f,ch,meta14738){
return (new cljs.core.async.t_cljs$core$async14737(f,ch,meta14738));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14737(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14785 = (function (f,ch,meta14786){
this.f = f;
this.ch = ch;
this.meta14786 = meta14786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14787,meta14786__$1){
var self__ = this;
var _14787__$1 = this;
return (new cljs.core.async.t_cljs$core$async14785(self__.f,self__.ch,meta14786__$1));
}));

(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14787){
var self__ = this;
var _14787__$1 = this;
return self__.meta14786;
}));

(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14786","meta14786",-803879562,null)], null);
}));

(cljs.core.async.t_cljs$core$async14785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14785");

(cljs.core.async.t_cljs$core$async14785.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14785.
 */
cljs.core.async.__GT_t_cljs$core$async14785 = (function cljs$core$async$__GT_t_cljs$core$async14785(f,ch,meta14786){
return (new cljs.core.async.t_cljs$core$async14785(f,ch,meta14786));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14785(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14810 = (function (p,ch,meta14811){
this.p = p;
this.ch = ch;
this.meta14811 = meta14811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14812,meta14811__$1){
var self__ = this;
var _14812__$1 = this;
return (new cljs.core.async.t_cljs$core$async14810(self__.p,self__.ch,meta14811__$1));
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14812){
var self__ = this;
var _14812__$1 = this;
return self__.meta14811;
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14811","meta14811",-942937227,null)], null);
}));

(cljs.core.async.t_cljs$core$async14810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14810");

(cljs.core.async.t_cljs$core$async14810.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14810.
 */
cljs.core.async.__GT_t_cljs$core$async14810 = (function cljs$core$async$__GT_t_cljs$core$async14810(p,ch,meta14811){
return (new cljs.core.async.t_cljs$core$async14810(p,ch,meta14811));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async14810(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14831 = arguments.length;
switch (G__14831) {
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
var c__11984__auto___16226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_14861){
var state_val_14862 = (state_14861[(1)]);
if((state_val_14862 === (7))){
var inst_14857 = (state_14861[(2)]);
var state_14861__$1 = state_14861;
var statearr_14867_16228 = state_14861__$1;
(statearr_14867_16228[(2)] = inst_14857);

(statearr_14867_16228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (1))){
var state_14861__$1 = state_14861;
var statearr_14868_16230 = state_14861__$1;
(statearr_14868_16230[(2)] = null);

(statearr_14868_16230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (4))){
var inst_14842 = (state_14861[(7)]);
var inst_14842__$1 = (state_14861[(2)]);
var inst_14843 = (inst_14842__$1 == null);
var state_14861__$1 = (function (){var statearr_14870 = state_14861;
(statearr_14870[(7)] = inst_14842__$1);

return statearr_14870;
})();
if(cljs.core.truth_(inst_14843)){
var statearr_14871_16232 = state_14861__$1;
(statearr_14871_16232[(1)] = (5));

} else {
var statearr_14872_16233 = state_14861__$1;
(statearr_14872_16233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (6))){
var inst_14842 = (state_14861[(7)]);
var inst_14848 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14842) : p.call(null,inst_14842));
var state_14861__$1 = state_14861;
if(cljs.core.truth_(inst_14848)){
var statearr_14876_16235 = state_14861__$1;
(statearr_14876_16235[(1)] = (8));

} else {
var statearr_14877_16236 = state_14861__$1;
(statearr_14877_16236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (3))){
var inst_14859 = (state_14861[(2)]);
var state_14861__$1 = state_14861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14861__$1,inst_14859);
} else {
if((state_val_14862 === (2))){
var state_14861__$1 = state_14861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14861__$1,(4),ch);
} else {
if((state_val_14862 === (11))){
var inst_14851 = (state_14861[(2)]);
var state_14861__$1 = state_14861;
var statearr_14879_16238 = state_14861__$1;
(statearr_14879_16238[(2)] = inst_14851);

(statearr_14879_16238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (9))){
var state_14861__$1 = state_14861;
var statearr_14880_16239 = state_14861__$1;
(statearr_14880_16239[(2)] = null);

(statearr_14880_16239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (5))){
var inst_14845 = cljs.core.async.close_BANG_(out);
var state_14861__$1 = state_14861;
var statearr_14881_16240 = state_14861__$1;
(statearr_14881_16240[(2)] = inst_14845);

(statearr_14881_16240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (10))){
var inst_14854 = (state_14861[(2)]);
var state_14861__$1 = (function (){var statearr_14882 = state_14861;
(statearr_14882[(8)] = inst_14854);

return statearr_14882;
})();
var statearr_14883_16242 = state_14861__$1;
(statearr_14883_16242[(2)] = null);

(statearr_14883_16242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14862 === (8))){
var inst_14842 = (state_14861[(7)]);
var state_14861__$1 = state_14861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14861__$1,(11),out,inst_14842);
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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_14887 = [null,null,null,null,null,null,null,null,null];
(statearr_14887[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_14887[(1)] = (1));

return statearr_14887;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_14861){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_14861);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e14889){var ex__11270__auto__ = e14889;
var statearr_14890_16243 = state_14861;
(statearr_14890_16243[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_14861[(4)]))){
var statearr_14891_16244 = state_14861;
(statearr_14891_16244[(1)] = cljs.core.first((state_14861[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16248 = state_14861;
state_14861 = G__16248;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_14861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_14861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_14893 = f__11985__auto__();
(statearr_14893[(6)] = c__11984__auto___16226);

return statearr_14893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14895 = arguments.length;
switch (G__14895) {
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
var c__11984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_14963){
var state_val_14964 = (state_14963[(1)]);
if((state_val_14964 === (7))){
var inst_14959 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14969_16253 = state_14963__$1;
(statearr_14969_16253[(2)] = inst_14959);

(statearr_14969_16253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (20))){
var inst_14928 = (state_14963[(7)]);
var inst_14940 = (state_14963[(2)]);
var inst_14941 = cljs.core.next(inst_14928);
var inst_14911 = inst_14941;
var inst_14912 = null;
var inst_14913 = (0);
var inst_14914 = (0);
var state_14963__$1 = (function (){var statearr_14970 = state_14963;
(statearr_14970[(8)] = inst_14940);

(statearr_14970[(9)] = inst_14911);

(statearr_14970[(10)] = inst_14913);

(statearr_14970[(11)] = inst_14914);

(statearr_14970[(12)] = inst_14912);

return statearr_14970;
})();
var statearr_14971_16255 = state_14963__$1;
(statearr_14971_16255[(2)] = null);

(statearr_14971_16255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (1))){
var state_14963__$1 = state_14963;
var statearr_14973_16257 = state_14963__$1;
(statearr_14973_16257[(2)] = null);

(statearr_14973_16257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (4))){
var inst_14899 = (state_14963[(13)]);
var inst_14899__$1 = (state_14963[(2)]);
var inst_14900 = (inst_14899__$1 == null);
var state_14963__$1 = (function (){var statearr_14974 = state_14963;
(statearr_14974[(13)] = inst_14899__$1);

return statearr_14974;
})();
if(cljs.core.truth_(inst_14900)){
var statearr_14976_16259 = state_14963__$1;
(statearr_14976_16259[(1)] = (5));

} else {
var statearr_14977_16260 = state_14963__$1;
(statearr_14977_16260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (15))){
var state_14963__$1 = state_14963;
var statearr_14981_16261 = state_14963__$1;
(statearr_14981_16261[(2)] = null);

(statearr_14981_16261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (21))){
var state_14963__$1 = state_14963;
var statearr_14982_16262 = state_14963__$1;
(statearr_14982_16262[(2)] = null);

(statearr_14982_16262[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (13))){
var inst_14911 = (state_14963[(9)]);
var inst_14913 = (state_14963[(10)]);
var inst_14914 = (state_14963[(11)]);
var inst_14912 = (state_14963[(12)]);
var inst_14924 = (state_14963[(2)]);
var inst_14925 = (inst_14914 + (1));
var tmp14978 = inst_14911;
var tmp14979 = inst_14913;
var tmp14980 = inst_14912;
var inst_14911__$1 = tmp14978;
var inst_14912__$1 = tmp14980;
var inst_14913__$1 = tmp14979;
var inst_14914__$1 = inst_14925;
var state_14963__$1 = (function (){var statearr_14984 = state_14963;
(statearr_14984[(9)] = inst_14911__$1);

(statearr_14984[(10)] = inst_14913__$1);

(statearr_14984[(11)] = inst_14914__$1);

(statearr_14984[(12)] = inst_14912__$1);

(statearr_14984[(14)] = inst_14924);

return statearr_14984;
})();
var statearr_14985_16266 = state_14963__$1;
(statearr_14985_16266[(2)] = null);

(statearr_14985_16266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (22))){
var state_14963__$1 = state_14963;
var statearr_14989_16267 = state_14963__$1;
(statearr_14989_16267[(2)] = null);

(statearr_14989_16267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (6))){
var inst_14899 = (state_14963[(13)]);
var inst_14909 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14899) : f.call(null,inst_14899));
var inst_14910 = cljs.core.seq(inst_14909);
var inst_14911 = inst_14910;
var inst_14912 = null;
var inst_14913 = (0);
var inst_14914 = (0);
var state_14963__$1 = (function (){var statearr_14990 = state_14963;
(statearr_14990[(9)] = inst_14911);

(statearr_14990[(10)] = inst_14913);

(statearr_14990[(11)] = inst_14914);

(statearr_14990[(12)] = inst_14912);

return statearr_14990;
})();
var statearr_14991_16268 = state_14963__$1;
(statearr_14991_16268[(2)] = null);

(statearr_14991_16268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (17))){
var inst_14928 = (state_14963[(7)]);
var inst_14932 = cljs.core.chunk_first(inst_14928);
var inst_14934 = cljs.core.chunk_rest(inst_14928);
var inst_14935 = cljs.core.count(inst_14932);
var inst_14911 = inst_14934;
var inst_14912 = inst_14932;
var inst_14913 = inst_14935;
var inst_14914 = (0);
var state_14963__$1 = (function (){var statearr_14992 = state_14963;
(statearr_14992[(9)] = inst_14911);

(statearr_14992[(10)] = inst_14913);

(statearr_14992[(11)] = inst_14914);

(statearr_14992[(12)] = inst_14912);

return statearr_14992;
})();
var statearr_14993_16270 = state_14963__$1;
(statearr_14993_16270[(2)] = null);

(statearr_14993_16270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (3))){
var inst_14961 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14963__$1,inst_14961);
} else {
if((state_val_14964 === (12))){
var inst_14949 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14998_16271 = state_14963__$1;
(statearr_14998_16271[(2)] = inst_14949);

(statearr_14998_16271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (2))){
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14963__$1,(4),in$);
} else {
if((state_val_14964 === (23))){
var inst_14957 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_14999_16272 = state_14963__$1;
(statearr_14999_16272[(2)] = inst_14957);

(statearr_14999_16272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (19))){
var inst_14944 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_15001_16274 = state_14963__$1;
(statearr_15001_16274[(2)] = inst_14944);

(statearr_15001_16274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (11))){
var inst_14911 = (state_14963[(9)]);
var inst_14928 = (state_14963[(7)]);
var inst_14928__$1 = cljs.core.seq(inst_14911);
var state_14963__$1 = (function (){var statearr_15002 = state_14963;
(statearr_15002[(7)] = inst_14928__$1);

return statearr_15002;
})();
if(inst_14928__$1){
var statearr_15003_16276 = state_14963__$1;
(statearr_15003_16276[(1)] = (14));

} else {
var statearr_15004_16277 = state_14963__$1;
(statearr_15004_16277[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (9))){
var inst_14951 = (state_14963[(2)]);
var inst_14952 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14963__$1 = (function (){var statearr_15006 = state_14963;
(statearr_15006[(15)] = inst_14951);

return statearr_15006;
})();
if(cljs.core.truth_(inst_14952)){
var statearr_15007_16278 = state_14963__$1;
(statearr_15007_16278[(1)] = (21));

} else {
var statearr_15008_16279 = state_14963__$1;
(statearr_15008_16279[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (5))){
var inst_14903 = cljs.core.async.close_BANG_(out);
var state_14963__$1 = state_14963;
var statearr_15009_16280 = state_14963__$1;
(statearr_15009_16280[(2)] = inst_14903);

(statearr_15009_16280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (14))){
var inst_14928 = (state_14963[(7)]);
var inst_14930 = cljs.core.chunked_seq_QMARK_(inst_14928);
var state_14963__$1 = state_14963;
if(inst_14930){
var statearr_15011_16282 = state_14963__$1;
(statearr_15011_16282[(1)] = (17));

} else {
var statearr_15012_16283 = state_14963__$1;
(statearr_15012_16283[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (16))){
var inst_14947 = (state_14963[(2)]);
var state_14963__$1 = state_14963;
var statearr_15013_16285 = state_14963__$1;
(statearr_15013_16285[(2)] = inst_14947);

(statearr_15013_16285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14964 === (10))){
var inst_14914 = (state_14963[(11)]);
var inst_14912 = (state_14963[(12)]);
var inst_14919 = cljs.core._nth(inst_14912,inst_14914);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14963__$1,(13),out,inst_14919);
} else {
if((state_val_14964 === (18))){
var inst_14928 = (state_14963[(7)]);
var inst_14938 = cljs.core.first(inst_14928);
var state_14963__$1 = state_14963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14963__$1,(20),out,inst_14938);
} else {
if((state_val_14964 === (8))){
var inst_14913 = (state_14963[(10)]);
var inst_14914 = (state_14963[(11)]);
var inst_14916 = (inst_14914 < inst_14913);
var inst_14917 = inst_14916;
var state_14963__$1 = state_14963;
if(cljs.core.truth_(inst_14917)){
var statearr_15015_16287 = state_14963__$1;
(statearr_15015_16287[(1)] = (10));

} else {
var statearr_15016_16288 = state_14963__$1;
(statearr_15016_16288[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11267__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11267__auto____0 = (function (){
var statearr_15020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15020[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11267__auto__);

(statearr_15020[(1)] = (1));

return statearr_15020;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11267__auto____1 = (function (state_14963){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_14963);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e15024){var ex__11270__auto__ = e15024;
var statearr_15025_16292 = state_14963;
(statearr_15025_16292[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_14963[(4)]))){
var statearr_15026_16296 = state_14963;
(statearr_15026_16296[(1)] = cljs.core.first((state_14963[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16297 = state_14963;
state_14963 = G__16297;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11267__auto__ = function(state_14963){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11267__auto____1.call(this,state_14963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11267__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11267__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_15029 = f__11985__auto__();
(statearr_15029[(6)] = c__11984__auto__);

return statearr_15029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));

return c__11984__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15031 = arguments.length;
switch (G__15031) {
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
var G__15038 = arguments.length;
switch (G__15038) {
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
var G__15044 = arguments.length;
switch (G__15044) {
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
var c__11984__auto___16311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_15081){
var state_val_15082 = (state_15081[(1)]);
if((state_val_15082 === (7))){
var inst_15076 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15090_16313 = state_15081__$1;
(statearr_15090_16313[(2)] = inst_15076);

(statearr_15090_16313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (1))){
var inst_15057 = null;
var state_15081__$1 = (function (){var statearr_15091 = state_15081;
(statearr_15091[(7)] = inst_15057);

return statearr_15091;
})();
var statearr_15092_16314 = state_15081__$1;
(statearr_15092_16314[(2)] = null);

(statearr_15092_16314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (4))){
var inst_15060 = (state_15081[(8)]);
var inst_15060__$1 = (state_15081[(2)]);
var inst_15061 = (inst_15060__$1 == null);
var inst_15062 = cljs.core.not(inst_15061);
var state_15081__$1 = (function (){var statearr_15097 = state_15081;
(statearr_15097[(8)] = inst_15060__$1);

return statearr_15097;
})();
if(inst_15062){
var statearr_15099_16316 = state_15081__$1;
(statearr_15099_16316[(1)] = (5));

} else {
var statearr_15100_16317 = state_15081__$1;
(statearr_15100_16317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (6))){
var state_15081__$1 = state_15081;
var statearr_15101_16319 = state_15081__$1;
(statearr_15101_16319[(2)] = null);

(statearr_15101_16319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (3))){
var inst_15078 = (state_15081[(2)]);
var inst_15079 = cljs.core.async.close_BANG_(out);
var state_15081__$1 = (function (){var statearr_15102 = state_15081;
(statearr_15102[(9)] = inst_15078);

return statearr_15102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15081__$1,inst_15079);
} else {
if((state_val_15082 === (2))){
var state_15081__$1 = state_15081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15081__$1,(4),ch);
} else {
if((state_val_15082 === (11))){
var inst_15060 = (state_15081[(8)]);
var inst_15070 = (state_15081[(2)]);
var inst_15057 = inst_15060;
var state_15081__$1 = (function (){var statearr_15104 = state_15081;
(statearr_15104[(7)] = inst_15057);

(statearr_15104[(10)] = inst_15070);

return statearr_15104;
})();
var statearr_15105_16320 = state_15081__$1;
(statearr_15105_16320[(2)] = null);

(statearr_15105_16320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (9))){
var inst_15060 = (state_15081[(8)]);
var state_15081__$1 = state_15081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15081__$1,(11),out,inst_15060);
} else {
if((state_val_15082 === (5))){
var inst_15060 = (state_15081[(8)]);
var inst_15057 = (state_15081[(7)]);
var inst_15064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15060,inst_15057);
var state_15081__$1 = state_15081;
if(inst_15064){
var statearr_15108_16322 = state_15081__$1;
(statearr_15108_16322[(1)] = (8));

} else {
var statearr_15109_16324 = state_15081__$1;
(statearr_15109_16324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (10))){
var inst_15073 = (state_15081[(2)]);
var state_15081__$1 = state_15081;
var statearr_15110_16325 = state_15081__$1;
(statearr_15110_16325[(2)] = inst_15073);

(statearr_15110_16325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (8))){
var inst_15057 = (state_15081[(7)]);
var tmp15107 = inst_15057;
var inst_15057__$1 = tmp15107;
var state_15081__$1 = (function (){var statearr_15115 = state_15081;
(statearr_15115[(7)] = inst_15057__$1);

return statearr_15115;
})();
var statearr_15119_16326 = state_15081__$1;
(statearr_15119_16326[(2)] = null);

(statearr_15119_16326[(1)] = (2));


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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_15147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15147[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_15147[(1)] = (1));

return statearr_15147;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_15081){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_15081);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e15148){var ex__11270__auto__ = e15148;
var statearr_15149_16327 = state_15081;
(statearr_15149_16327[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_15081[(4)]))){
var statearr_15151_16333 = state_15081;
(statearr_15151_16333[(1)] = cljs.core.first((state_15081[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16334 = state_15081;
state_15081 = G__16334;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_15081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_15081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_15161 = f__11985__auto__();
(statearr_15161[(6)] = c__11984__auto___16311);

return statearr_15161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15163 = arguments.length;
switch (G__15163) {
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
var c__11984__auto___16337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_15208){
var state_val_15209 = (state_15208[(1)]);
if((state_val_15209 === (7))){
var inst_15202 = (state_15208[(2)]);
var state_15208__$1 = state_15208;
var statearr_15213_16341 = state_15208__$1;
(statearr_15213_16341[(2)] = inst_15202);

(statearr_15213_16341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (1))){
var inst_15169 = (new Array(n));
var inst_15170 = inst_15169;
var inst_15171 = (0);
var state_15208__$1 = (function (){var statearr_15214 = state_15208;
(statearr_15214[(7)] = inst_15171);

(statearr_15214[(8)] = inst_15170);

return statearr_15214;
})();
var statearr_15215_16344 = state_15208__$1;
(statearr_15215_16344[(2)] = null);

(statearr_15215_16344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (4))){
var inst_15174 = (state_15208[(9)]);
var inst_15174__$1 = (state_15208[(2)]);
var inst_15175 = (inst_15174__$1 == null);
var inst_15176 = cljs.core.not(inst_15175);
var state_15208__$1 = (function (){var statearr_15216 = state_15208;
(statearr_15216[(9)] = inst_15174__$1);

return statearr_15216;
})();
if(inst_15176){
var statearr_15217_16347 = state_15208__$1;
(statearr_15217_16347[(1)] = (5));

} else {
var statearr_15218_16348 = state_15208__$1;
(statearr_15218_16348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (15))){
var inst_15196 = (state_15208[(2)]);
var state_15208__$1 = state_15208;
var statearr_15219_16352 = state_15208__$1;
(statearr_15219_16352[(2)] = inst_15196);

(statearr_15219_16352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (13))){
var state_15208__$1 = state_15208;
var statearr_15221_16354 = state_15208__$1;
(statearr_15221_16354[(2)] = null);

(statearr_15221_16354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (6))){
var inst_15171 = (state_15208[(7)]);
var inst_15192 = (inst_15171 > (0));
var state_15208__$1 = state_15208;
if(cljs.core.truth_(inst_15192)){
var statearr_15223_16355 = state_15208__$1;
(statearr_15223_16355[(1)] = (12));

} else {
var statearr_15224_16356 = state_15208__$1;
(statearr_15224_16356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (3))){
var inst_15204 = (state_15208[(2)]);
var state_15208__$1 = state_15208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15208__$1,inst_15204);
} else {
if((state_val_15209 === (12))){
var inst_15170 = (state_15208[(8)]);
var inst_15194 = cljs.core.vec(inst_15170);
var state_15208__$1 = state_15208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15208__$1,(15),out,inst_15194);
} else {
if((state_val_15209 === (2))){
var state_15208__$1 = state_15208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15208__$1,(4),ch);
} else {
if((state_val_15209 === (11))){
var inst_15186 = (state_15208[(2)]);
var inst_15187 = (new Array(n));
var inst_15170 = inst_15187;
var inst_15171 = (0);
var state_15208__$1 = (function (){var statearr_15231 = state_15208;
(statearr_15231[(7)] = inst_15171);

(statearr_15231[(10)] = inst_15186);

(statearr_15231[(8)] = inst_15170);

return statearr_15231;
})();
var statearr_15232_16363 = state_15208__$1;
(statearr_15232_16363[(2)] = null);

(statearr_15232_16363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (9))){
var inst_15170 = (state_15208[(8)]);
var inst_15184 = cljs.core.vec(inst_15170);
var state_15208__$1 = state_15208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15208__$1,(11),out,inst_15184);
} else {
if((state_val_15209 === (5))){
var inst_15171 = (state_15208[(7)]);
var inst_15174 = (state_15208[(9)]);
var inst_15179 = (state_15208[(11)]);
var inst_15170 = (state_15208[(8)]);
var inst_15178 = (inst_15170[inst_15171] = inst_15174);
var inst_15179__$1 = (inst_15171 + (1));
var inst_15180 = (inst_15179__$1 < n);
var state_15208__$1 = (function (){var statearr_15235 = state_15208;
(statearr_15235[(12)] = inst_15178);

(statearr_15235[(11)] = inst_15179__$1);

return statearr_15235;
})();
if(cljs.core.truth_(inst_15180)){
var statearr_15236_16365 = state_15208__$1;
(statearr_15236_16365[(1)] = (8));

} else {
var statearr_15237_16366 = state_15208__$1;
(statearr_15237_16366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (14))){
var inst_15199 = (state_15208[(2)]);
var inst_15200 = cljs.core.async.close_BANG_(out);
var state_15208__$1 = (function (){var statearr_15240 = state_15208;
(statearr_15240[(13)] = inst_15199);

return statearr_15240;
})();
var statearr_15241_16367 = state_15208__$1;
(statearr_15241_16367[(2)] = inst_15200);

(statearr_15241_16367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (10))){
var inst_15190 = (state_15208[(2)]);
var state_15208__$1 = state_15208;
var statearr_15242_16368 = state_15208__$1;
(statearr_15242_16368[(2)] = inst_15190);

(statearr_15242_16368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15209 === (8))){
var inst_15179 = (state_15208[(11)]);
var inst_15170 = (state_15208[(8)]);
var tmp15239 = inst_15170;
var inst_15170__$1 = tmp15239;
var inst_15171 = inst_15179;
var state_15208__$1 = (function (){var statearr_15243 = state_15208;
(statearr_15243[(7)] = inst_15171);

(statearr_15243[(8)] = inst_15170__$1);

return statearr_15243;
})();
var statearr_15244_16372 = state_15208__$1;
(statearr_15244_16372[(2)] = null);

(statearr_15244_16372[(1)] = (2));


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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_15245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15245[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_15245[(1)] = (1));

return statearr_15245;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_15208){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_15208);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e15247){var ex__11270__auto__ = e15247;
var statearr_15248_16377 = state_15208;
(statearr_15248_16377[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_15208[(4)]))){
var statearr_15249_16379 = state_15208;
(statearr_15249_16379[(1)] = cljs.core.first((state_15208[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16380 = state_15208;
state_15208 = G__16380;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_15208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_15208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_15250 = f__11985__auto__();
(statearr_15250[(6)] = c__11984__auto___16337);

return statearr_15250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15252 = arguments.length;
switch (G__15252) {
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
var c__11984__auto___16387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_15298){
var state_val_15299 = (state_15298[(1)]);
if((state_val_15299 === (7))){
var inst_15294 = (state_15298[(2)]);
var state_15298__$1 = state_15298;
var statearr_15304_16388 = state_15298__$1;
(statearr_15304_16388[(2)] = inst_15294);

(statearr_15304_16388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (1))){
var inst_15253 = [];
var inst_15255 = inst_15253;
var inst_15256 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15298__$1 = (function (){var statearr_15305 = state_15298;
(statearr_15305[(7)] = inst_15256);

(statearr_15305[(8)] = inst_15255);

return statearr_15305;
})();
var statearr_15306_16389 = state_15298__$1;
(statearr_15306_16389[(2)] = null);

(statearr_15306_16389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (4))){
var inst_15259 = (state_15298[(9)]);
var inst_15259__$1 = (state_15298[(2)]);
var inst_15260 = (inst_15259__$1 == null);
var inst_15261 = cljs.core.not(inst_15260);
var state_15298__$1 = (function (){var statearr_15314 = state_15298;
(statearr_15314[(9)] = inst_15259__$1);

return statearr_15314;
})();
if(inst_15261){
var statearr_15315_16390 = state_15298__$1;
(statearr_15315_16390[(1)] = (5));

} else {
var statearr_15316_16391 = state_15298__$1;
(statearr_15316_16391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (15))){
var inst_15255 = (state_15298[(8)]);
var inst_15286 = cljs.core.vec(inst_15255);
var state_15298__$1 = state_15298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15298__$1,(18),out,inst_15286);
} else {
if((state_val_15299 === (13))){
var inst_15281 = (state_15298[(2)]);
var state_15298__$1 = state_15298;
var statearr_15318_16392 = state_15298__$1;
(statearr_15318_16392[(2)] = inst_15281);

(statearr_15318_16392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (6))){
var inst_15255 = (state_15298[(8)]);
var inst_15283 = inst_15255.length;
var inst_15284 = (inst_15283 > (0));
var state_15298__$1 = state_15298;
if(cljs.core.truth_(inst_15284)){
var statearr_15319_16393 = state_15298__$1;
(statearr_15319_16393[(1)] = (15));

} else {
var statearr_15323_16394 = state_15298__$1;
(statearr_15323_16394[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (17))){
var inst_15291 = (state_15298[(2)]);
var inst_15292 = cljs.core.async.close_BANG_(out);
var state_15298__$1 = (function (){var statearr_15325 = state_15298;
(statearr_15325[(10)] = inst_15291);

return statearr_15325;
})();
var statearr_15326_16395 = state_15298__$1;
(statearr_15326_16395[(2)] = inst_15292);

(statearr_15326_16395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (3))){
var inst_15296 = (state_15298[(2)]);
var state_15298__$1 = state_15298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15298__$1,inst_15296);
} else {
if((state_val_15299 === (12))){
var inst_15255 = (state_15298[(8)]);
var inst_15274 = cljs.core.vec(inst_15255);
var state_15298__$1 = state_15298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15298__$1,(14),out,inst_15274);
} else {
if((state_val_15299 === (2))){
var state_15298__$1 = state_15298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15298__$1,(4),ch);
} else {
if((state_val_15299 === (11))){
var inst_15259 = (state_15298[(9)]);
var inst_15255 = (state_15298[(8)]);
var inst_15263 = (state_15298[(11)]);
var inst_15271 = inst_15255.push(inst_15259);
var tmp15327 = inst_15255;
var inst_15255__$1 = tmp15327;
var inst_15256 = inst_15263;
var state_15298__$1 = (function (){var statearr_15332 = state_15298;
(statearr_15332[(7)] = inst_15256);

(statearr_15332[(8)] = inst_15255__$1);

(statearr_15332[(12)] = inst_15271);

return statearr_15332;
})();
var statearr_15333_16397 = state_15298__$1;
(statearr_15333_16397[(2)] = null);

(statearr_15333_16397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (9))){
var inst_15256 = (state_15298[(7)]);
var inst_15267 = cljs.core.keyword_identical_QMARK_(inst_15256,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15298__$1 = state_15298;
var statearr_15334_16398 = state_15298__$1;
(statearr_15334_16398[(2)] = inst_15267);

(statearr_15334_16398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (5))){
var inst_15259 = (state_15298[(9)]);
var inst_15256 = (state_15298[(7)]);
var inst_15264 = (state_15298[(13)]);
var inst_15263 = (state_15298[(11)]);
var inst_15263__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15259) : f.call(null,inst_15259));
var inst_15264__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15263__$1,inst_15256);
var state_15298__$1 = (function (){var statearr_15335 = state_15298;
(statearr_15335[(13)] = inst_15264__$1);

(statearr_15335[(11)] = inst_15263__$1);

return statearr_15335;
})();
if(inst_15264__$1){
var statearr_15336_16399 = state_15298__$1;
(statearr_15336_16399[(1)] = (8));

} else {
var statearr_15337_16400 = state_15298__$1;
(statearr_15337_16400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (14))){
var inst_15259 = (state_15298[(9)]);
var inst_15263 = (state_15298[(11)]);
var inst_15276 = (state_15298[(2)]);
var inst_15277 = [];
var inst_15278 = inst_15277.push(inst_15259);
var inst_15255 = inst_15277;
var inst_15256 = inst_15263;
var state_15298__$1 = (function (){var statearr_15339 = state_15298;
(statearr_15339[(7)] = inst_15256);

(statearr_15339[(8)] = inst_15255);

(statearr_15339[(14)] = inst_15276);

(statearr_15339[(15)] = inst_15278);

return statearr_15339;
})();
var statearr_15340_16402 = state_15298__$1;
(statearr_15340_16402[(2)] = null);

(statearr_15340_16402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (16))){
var state_15298__$1 = state_15298;
var statearr_15344_16403 = state_15298__$1;
(statearr_15344_16403[(2)] = null);

(statearr_15344_16403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (10))){
var inst_15269 = (state_15298[(2)]);
var state_15298__$1 = state_15298;
if(cljs.core.truth_(inst_15269)){
var statearr_15345_16404 = state_15298__$1;
(statearr_15345_16404[(1)] = (11));

} else {
var statearr_15346_16405 = state_15298__$1;
(statearr_15346_16405[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (18))){
var inst_15288 = (state_15298[(2)]);
var state_15298__$1 = state_15298;
var statearr_15350_16406 = state_15298__$1;
(statearr_15350_16406[(2)] = inst_15288);

(statearr_15350_16406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (8))){
var inst_15264 = (state_15298[(13)]);
var state_15298__$1 = state_15298;
var statearr_15352_16407 = state_15298__$1;
(statearr_15352_16407[(2)] = inst_15264);

(statearr_15352_16407[(1)] = (10));


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
var cljs$core$async$state_machine__11267__auto__ = null;
var cljs$core$async$state_machine__11267__auto____0 = (function (){
var statearr_15354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15354[(0)] = cljs$core$async$state_machine__11267__auto__);

(statearr_15354[(1)] = (1));

return statearr_15354;
});
var cljs$core$async$state_machine__11267__auto____1 = (function (state_15298){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_15298);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e15355){var ex__11270__auto__ = e15355;
var statearr_15356_16410 = state_15298;
(statearr_15356_16410[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_15298[(4)]))){
var statearr_15358_16411 = state_15298;
(statearr_15358_16411[(1)] = cljs.core.first((state_15298[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16413 = state_15298;
state_15298 = G__16413;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
cljs$core$async$state_machine__11267__auto__ = function(state_15298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11267__auto____1.call(this,state_15298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11267__auto____0;
cljs$core$async$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11267__auto____1;
return cljs$core$async$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_15361 = f__11985__auto__();
(statearr_15361[(6)] = c__11984__auto___16387);

return statearr_15361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
