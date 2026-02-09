goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29800){
var map__29801 = p__29800;
var map__29801__$1 = cljs.core.__destructure_map(map__29801);
var runtime = map__29801__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29801__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30174 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30174)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__29811 = runtime;
var G__29812 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30174);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__29811,G__29812) : shadow.remote.runtime.shared.process.call(null,G__29811,G__29812));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29817,res){
var map__29818 = p__29817;
var map__29818__$1 = cljs.core.__destructure_map(map__29818);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29818__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29818__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29820 = res;
var G__29820__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29820,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29820);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29820__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29820__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29829 = arguments.length;
switch (G__29829) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29850,msg,handlers,timeout_after_ms){
var map__29851 = p__29850;
var map__29851__$1 = cljs.core.__destructure_map(map__29851);
var runtime = map__29851__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29851__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30180 = arguments.length;
var i__5770__auto___30181 = (0);
while(true){
if((i__5770__auto___30181 < len__5769__auto___30180)){
args__5775__auto__.push((arguments[i__5770__auto___30181]));

var G__30182 = (i__5770__auto___30181 + (1));
i__5770__auto___30181 = G__30182;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29861,ev,args){
var map__29862 = p__29861;
var map__29862__$1 = cljs.core.__destructure_map(map__29862);
var runtime = map__29862__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29862__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29864 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29867 = null;
var count__29868 = (0);
var i__29869 = (0);
while(true){
if((i__29869 < count__29868)){
var ext = chunk__29867.cljs$core$IIndexed$_nth$arity$2(null,i__29869);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30188 = seq__29864;
var G__30189 = chunk__29867;
var G__30190 = count__29868;
var G__30191 = (i__29869 + (1));
seq__29864 = G__30188;
chunk__29867 = G__30189;
count__29868 = G__30190;
i__29869 = G__30191;
continue;
} else {
var G__30193 = seq__29864;
var G__30194 = chunk__29867;
var G__30195 = count__29868;
var G__30196 = (i__29869 + (1));
seq__29864 = G__30193;
chunk__29867 = G__30194;
count__29868 = G__30195;
i__29869 = G__30196;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29864);
if(temp__5804__auto__){
var seq__29864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29864__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29864__$1);
var G__30197 = cljs.core.chunk_rest(seq__29864__$1);
var G__30198 = c__5568__auto__;
var G__30199 = cljs.core.count(c__5568__auto__);
var G__30200 = (0);
seq__29864 = G__30197;
chunk__29867 = G__30198;
count__29868 = G__30199;
i__29869 = G__30200;
continue;
} else {
var ext = cljs.core.first(seq__29864__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30201 = cljs.core.next(seq__29864__$1);
var G__30202 = null;
var G__30203 = (0);
var G__30204 = (0);
seq__29864 = G__30201;
chunk__29867 = G__30202;
count__29868 = G__30203;
i__29869 = G__30204;
continue;
} else {
var G__30205 = cljs.core.next(seq__29864__$1);
var G__30206 = null;
var G__30207 = (0);
var G__30208 = (0);
seq__29864 = G__30205;
chunk__29867 = G__30206;
count__29868 = G__30207;
i__29869 = G__30208;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29856){
var G__29857 = cljs.core.first(seq29856);
var seq29856__$1 = cljs.core.next(seq29856);
var G__29858 = cljs.core.first(seq29856__$1);
var seq29856__$2 = cljs.core.next(seq29856__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29857,G__29858,seq29856__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29941,p__29942){
var map__29943 = p__29941;
var map__29943__$1 = cljs.core.__destructure_map(map__29943);
var runtime = map__29943__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29943__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29945 = p__29942;
var map__29945__$1 = cljs.core.__destructure_map(map__29945);
var msg = map__29945__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29945__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29948 = cljs.core.deref(state_ref);
var map__29948__$1 = cljs.core.__destructure_map(map__29948);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29948__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29948__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29957,msg){
var map__29961 = p__29957;
var map__29961__$1 = cljs.core.__destructure_map(map__29961);
var runtime = map__29961__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29961__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29984,key,p__29985){
var map__29987 = p__29984;
var map__29987__$1 = cljs.core.__destructure_map(map__29987);
var state = map__29987__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29987__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29988 = p__29985;
var map__29988__$1 = cljs.core.__destructure_map(map__29988);
var spec = map__29988__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29988__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29998,key,spec){
var map__30000 = p__29998;
var map__30000__$1 = cljs.core.__destructure_map(map__30000);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30000__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30001_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30001_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30002_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30002_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30003_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30003_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30004_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30004_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30005_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30005_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30043,key){
var map__30048 = p__30043;
var map__30048__$1 = cljs.core.__destructure_map(map__30048);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30048__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30136,msg){
var map__30141 = p__30136;
var map__30141__$1 = cljs.core.__destructure_map(map__30141);
var runtime = map__30141__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30144,p__30145){
var map__30147 = p__30144;
var map__30147__$1 = cljs.core.__destructure_map(map__30147);
var runtime = map__30147__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30147__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30148 = p__30145;
var map__30148__$1 = cljs.core.__destructure_map(map__30148);
var msg = map__30148__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30148__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30148__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__30156 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30158 = null;
var count__30159 = (0);
var i__30160 = (0);
while(true){
if((i__30160 < count__30159)){
var map__30166 = chunk__30158.cljs$core$IIndexed$_nth$arity$2(null,i__30160);
var map__30166__$1 = cljs.core.__destructure_map(map__30166);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30166__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__30273 = seq__30156;
var G__30274 = chunk__30158;
var G__30275 = count__30159;
var G__30276 = (i__30160 + (1));
seq__30156 = G__30273;
chunk__30158 = G__30274;
count__30159 = G__30275;
i__30160 = G__30276;
continue;
} else {
var G__30277 = seq__30156;
var G__30278 = chunk__30158;
var G__30279 = count__30159;
var G__30280 = (i__30160 + (1));
seq__30156 = G__30277;
chunk__30158 = G__30278;
count__30159 = G__30279;
i__30160 = G__30280;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30156);
if(temp__5804__auto__){
var seq__30156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30156__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30156__$1);
var G__30284 = cljs.core.chunk_rest(seq__30156__$1);
var G__30285 = c__5568__auto__;
var G__30286 = cljs.core.count(c__5568__auto__);
var G__30287 = (0);
seq__30156 = G__30284;
chunk__30158 = G__30285;
count__30159 = G__30286;
i__30160 = G__30287;
continue;
} else {
var map__30172 = cljs.core.first(seq__30156__$1);
var map__30172__$1 = cljs.core.__destructure_map(map__30172);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30172__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__30288 = cljs.core.next(seq__30156__$1);
var G__30289 = null;
var G__30290 = (0);
var G__30291 = (0);
seq__30156 = G__30288;
chunk__30158 = G__30289;
count__30159 = G__30290;
i__30160 = G__30291;
continue;
} else {
var G__30292 = cljs.core.next(seq__30156__$1);
var G__30293 = null;
var G__30294 = (0);
var G__30295 = (0);
seq__30156 = G__30292;
chunk__30158 = G__30293;
count__30159 = G__30294;
i__30160 = G__30295;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
