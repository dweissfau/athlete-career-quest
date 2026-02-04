goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__11696){
var map__11698 = p__11696;
var map__11698__$1 = cljs.core.__destructure_map(map__11698);
var runtime = map__11698__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11698__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_11865 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_11865)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__11703 = runtime;
var G__11704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_11865);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__11703,G__11704) : shadow.remote.runtime.shared.process.call(null,G__11703,G__11704));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__11709,res){
var map__11710 = p__11709;
var map__11710__$1 = cljs.core.__destructure_map(map__11710);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11710__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11710__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__11712 = res;
var G__11712__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11712,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__11712);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11712__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__11712__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__11718 = arguments.length;
switch (G__11718) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11723,msg,handlers,timeout_after_ms){
var map__11726 = p__11723;
var map__11726__$1 = cljs.core.__destructure_map(map__11726);
var runtime = map__11726__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11726__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var args__5732__auto__ = [];
var len__5726__auto___11879 = arguments.length;
var i__5727__auto___11880 = (0);
while(true){
if((i__5727__auto___11880 < len__5726__auto___11879)){
args__5732__auto__.push((arguments[i__5727__auto___11880]));

var G__11882 = (i__5727__auto___11880 + (1));
i__5727__auto___11880 = G__11882;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11741,ev,args){
var map__11742 = p__11741;
var map__11742__$1 = cljs.core.__destructure_map(map__11742);
var runtime = map__11742__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11742__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11744 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11747 = null;
var count__11748 = (0);
var i__11749 = (0);
while(true){
if((i__11749 < count__11748)){
var ext = chunk__11747.cljs$core$IIndexed$_nth$arity$2(null,i__11749);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11885 = seq__11744;
var G__11886 = chunk__11747;
var G__11887 = count__11748;
var G__11888 = (i__11749 + (1));
seq__11744 = G__11885;
chunk__11747 = G__11886;
count__11748 = G__11887;
i__11749 = G__11888;
continue;
} else {
var G__11889 = seq__11744;
var G__11890 = chunk__11747;
var G__11891 = count__11748;
var G__11892 = (i__11749 + (1));
seq__11744 = G__11889;
chunk__11747 = G__11890;
count__11748 = G__11891;
i__11749 = G__11892;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11744);
if(temp__5804__auto__){
var seq__11744__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11744__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11744__$1);
var G__11895 = cljs.core.chunk_rest(seq__11744__$1);
var G__11896 = c__5525__auto__;
var G__11897 = cljs.core.count(c__5525__auto__);
var G__11898 = (0);
seq__11744 = G__11895;
chunk__11747 = G__11896;
count__11748 = G__11897;
i__11749 = G__11898;
continue;
} else {
var ext = cljs.core.first(seq__11744__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11900 = cljs.core.next(seq__11744__$1);
var G__11901 = null;
var G__11902 = (0);
var G__11903 = (0);
seq__11744 = G__11900;
chunk__11747 = G__11901;
count__11748 = G__11902;
i__11749 = G__11903;
continue;
} else {
var G__11905 = cljs.core.next(seq__11744__$1);
var G__11906 = null;
var G__11907 = (0);
var G__11908 = (0);
seq__11744 = G__11905;
chunk__11747 = G__11906;
count__11748 = G__11907;
i__11749 = G__11908;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11733){
var G__11734 = cljs.core.first(seq11733);
var seq11733__$1 = cljs.core.next(seq11733);
var G__11735 = cljs.core.first(seq11733__$1);
var seq11733__$2 = cljs.core.next(seq11733__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11734,G__11735,seq11733__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11766,p__11767){
var map__11770 = p__11766;
var map__11770__$1 = cljs.core.__destructure_map(map__11770);
var runtime = map__11770__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11771 = p__11767;
var map__11771__$1 = cljs.core.__destructure_map(map__11771);
var msg = map__11771__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11771__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__11774 = cljs.core.deref(state_ref);
var map__11774__$1 = cljs.core.__destructure_map(map__11774);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11774__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11774__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11781,msg){
var map__11782 = p__11781;
var map__11782__$1 = cljs.core.__destructure_map(map__11782);
var runtime = map__11782__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11782__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11798,key,p__11799){
var map__11800 = p__11798;
var map__11800__$1 = cljs.core.__destructure_map(map__11800);
var state = map__11800__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11800__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11802 = p__11799;
var map__11802__$1 = cljs.core.__destructure_map(map__11802);
var spec = map__11802__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11802__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11802__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11814,key,spec){
var map__11815 = p__11814;
var map__11815__$1 = cljs.core.__destructure_map(map__11815);
var runtime = map__11815__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11815__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___11925 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___11925 == null)){
} else {
var on_welcome_11926 = temp__5808__auto___11925;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_11926.cljs$core$IFn$_invoke$arity$0 ? on_welcome_11926.cljs$core$IFn$_invoke$arity$0() : on_welcome_11926.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11820_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11820_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11822_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11822_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11823_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11823_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11824_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11824_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11825_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11825_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11830,key){
var map__11831 = p__11830;
var map__11831__$1 = cljs.core.__destructure_map(map__11831);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11832,msg){
var map__11833 = p__11832;
var map__11833__$1 = cljs.core.__destructure_map(map__11833);
var runtime = map__11833__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11834,p__11835){
var map__11836 = p__11834;
var map__11836__$1 = cljs.core.__destructure_map(map__11836);
var runtime = map__11836__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11837 = p__11835;
var map__11837__$1 = cljs.core.__destructure_map(map__11837);
var msg = map__11837__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11837__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11837__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__11840 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11842 = null;
var count__11843 = (0);
var i__11844 = (0);
while(true){
if((i__11844 < count__11843)){
var map__11852 = chunk__11842.cljs$core$IIndexed$_nth$arity$2(null,i__11844);
var map__11852__$1 = cljs.core.__destructure_map(map__11852);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11852__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11938 = seq__11840;
var G__11939 = chunk__11842;
var G__11940 = count__11843;
var G__11941 = (i__11844 + (1));
seq__11840 = G__11938;
chunk__11842 = G__11939;
count__11843 = G__11940;
i__11844 = G__11941;
continue;
} else {
var G__11942 = seq__11840;
var G__11943 = chunk__11842;
var G__11944 = count__11843;
var G__11945 = (i__11844 + (1));
seq__11840 = G__11942;
chunk__11842 = G__11943;
count__11843 = G__11944;
i__11844 = G__11945;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11840);
if(temp__5804__auto__){
var seq__11840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11840__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11840__$1);
var G__11947 = cljs.core.chunk_rest(seq__11840__$1);
var G__11948 = c__5525__auto__;
var G__11949 = cljs.core.count(c__5525__auto__);
var G__11950 = (0);
seq__11840 = G__11947;
chunk__11842 = G__11948;
count__11843 = G__11949;
i__11844 = G__11950;
continue;
} else {
var map__11857 = cljs.core.first(seq__11840__$1);
var map__11857__$1 = cljs.core.__destructure_map(map__11857);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11857__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11951 = cljs.core.next(seq__11840__$1);
var G__11952 = null;
var G__11953 = (0);
var G__11954 = (0);
seq__11840 = G__11951;
chunk__11842 = G__11952;
count__11843 = G__11953;
i__11844 = G__11954;
continue;
} else {
var G__11956 = cljs.core.next(seq__11840__$1);
var G__11957 = null;
var G__11958 = (0);
var G__11959 = (0);
seq__11840 = G__11956;
chunk__11842 = G__11957;
count__11843 = G__11958;
i__11844 = G__11959;
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
