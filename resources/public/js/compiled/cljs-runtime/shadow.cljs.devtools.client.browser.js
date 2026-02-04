goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20473 = arguments.length;
var i__5727__auto___20474 = (0);
while(true){
if((i__5727__auto___20474 < len__5726__auto___20473)){
args__5732__auto__.push((arguments[i__5727__auto___20474]));

var G__20475 = (i__5727__auto___20474 + (1));
i__5727__auto___20474 = G__20475;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq19869){
var G__19870 = cljs.core.first(seq19869);
var seq19869__$1 = cljs.core.next(seq19869);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19870,seq19869__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__19871 = cljs.core.seq(sources);
var chunk__19872 = null;
var count__19873 = (0);
var i__19874 = (0);
while(true){
if((i__19874 < count__19873)){
var map__19879 = chunk__19872.cljs$core$IIndexed$_nth$arity$2(null,i__19874);
var map__19879__$1 = cljs.core.__destructure_map(map__19879);
var src = map__19879__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e19880){var e_20478 = e19880;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20478);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20478.message)].join('')));
}

var G__20479 = seq__19871;
var G__20480 = chunk__19872;
var G__20481 = count__19873;
var G__20482 = (i__19874 + (1));
seq__19871 = G__20479;
chunk__19872 = G__20480;
count__19873 = G__20481;
i__19874 = G__20482;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19871);
if(temp__5804__auto__){
var seq__19871__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19871__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19871__$1);
var G__20484 = cljs.core.chunk_rest(seq__19871__$1);
var G__20485 = c__5525__auto__;
var G__20486 = cljs.core.count(c__5525__auto__);
var G__20487 = (0);
seq__19871 = G__20484;
chunk__19872 = G__20485;
count__19873 = G__20486;
i__19874 = G__20487;
continue;
} else {
var map__19881 = cljs.core.first(seq__19871__$1);
var map__19881__$1 = cljs.core.__destructure_map(map__19881);
var src = map__19881__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e19882){var e_20490 = e19882;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20490);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20490.message)].join('')));
}

var G__20493 = cljs.core.next(seq__19871__$1);
var G__20494 = null;
var G__20495 = (0);
var G__20496 = (0);
seq__19871 = G__20493;
chunk__19872 = G__20494;
count__19873 = G__20495;
i__19874 = G__20496;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__19883 = cljs.core.seq(js_requires);
var chunk__19884 = null;
var count__19885 = (0);
var i__19886 = (0);
while(true){
if((i__19886 < count__19885)){
var js_ns = chunk__19884.cljs$core$IIndexed$_nth$arity$2(null,i__19886);
var require_str_20498 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20498);


var G__20499 = seq__19883;
var G__20500 = chunk__19884;
var G__20501 = count__19885;
var G__20502 = (i__19886 + (1));
seq__19883 = G__20499;
chunk__19884 = G__20500;
count__19885 = G__20501;
i__19886 = G__20502;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19883);
if(temp__5804__auto__){
var seq__19883__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19883__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19883__$1);
var G__20503 = cljs.core.chunk_rest(seq__19883__$1);
var G__20504 = c__5525__auto__;
var G__20505 = cljs.core.count(c__5525__auto__);
var G__20506 = (0);
seq__19883 = G__20503;
chunk__19884 = G__20504;
count__19885 = G__20505;
i__19886 = G__20506;
continue;
} else {
var js_ns = cljs.core.first(seq__19883__$1);
var require_str_20507 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20507);


var G__20509 = cljs.core.next(seq__19883__$1);
var G__20510 = null;
var G__20511 = (0);
var G__20512 = (0);
seq__19883 = G__20509;
chunk__19884 = G__20510;
count__19885 = G__20511;
i__19886 = G__20512;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__19894){
var map__19895 = p__19894;
var map__19895__$1 = cljs.core.__destructure_map(map__19895);
var msg = map__19895__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19895__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19895__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__19896(s__19897){
return (new cljs.core.LazySeq(null,(function (){
var s__19897__$1 = s__19897;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19897__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__19903 = cljs.core.first(xs__6360__auto__);
var map__19903__$1 = cljs.core.__destructure_map(map__19903);
var src = map__19903__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__19897__$1,map__19903,map__19903__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__19895,map__19895__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__19896_$_iter__19898(s__19899){
return (new cljs.core.LazySeq(null,((function (s__19897__$1,map__19903,map__19903__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__19895,map__19895__$1,msg,info,reload_info){
return (function (){
var s__19899__$1 = s__19899;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__19899__$1);
if(temp__5804__auto____$1){
var s__19899__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19899__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19899__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19901 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19900 = (0);
while(true){
if((i__19900 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__19900);
cljs.core.chunk_append(b__19901,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20516 = (i__19900 + (1));
i__19900 = G__20516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19901),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__19896_$_iter__19898(cljs.core.chunk_rest(s__19899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19901),null);
}
} else {
var warning = cljs.core.first(s__19899__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__19896_$_iter__19898(cljs.core.rest(s__19899__$2)));
}
} else {
return null;
}
break;
}
});})(s__19897__$1,map__19903,map__19903__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__19895,map__19895__$1,msg,info,reload_info))
,null,null));
});})(s__19897__$1,map__19903,map__19903__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__19895,map__19895__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__19896(cljs.core.rest(s__19897__$1)));
} else {
var G__20517 = cljs.core.rest(s__19897__$1);
s__19897__$1 = G__20517;
continue;
}
} else {
var G__20518 = cljs.core.rest(s__19897__$1);
s__19897__$1 = G__20518;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__19911_20519 = cljs.core.seq(warnings);
var chunk__19912_20520 = null;
var count__19913_20521 = (0);
var i__19914_20522 = (0);
while(true){
if((i__19914_20522 < count__19913_20521)){
var map__19922_20523 = chunk__19912_20520.cljs$core$IIndexed$_nth$arity$2(null,i__19914_20522);
var map__19922_20524__$1 = cljs.core.__destructure_map(map__19922_20523);
var w_20525 = map__19922_20524__$1;
var msg_20526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922_20524__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922_20524__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922_20524__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19922_20524__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20529)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20527),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20528),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20526__$1)].join(''));


var G__20531 = seq__19911_20519;
var G__20532 = chunk__19912_20520;
var G__20533 = count__19913_20521;
var G__20534 = (i__19914_20522 + (1));
seq__19911_20519 = G__20531;
chunk__19912_20520 = G__20532;
count__19913_20521 = G__20533;
i__19914_20522 = G__20534;
continue;
} else {
var temp__5804__auto___20535 = cljs.core.seq(seq__19911_20519);
if(temp__5804__auto___20535){
var seq__19911_20536__$1 = temp__5804__auto___20535;
if(cljs.core.chunked_seq_QMARK_(seq__19911_20536__$1)){
var c__5525__auto___20537 = cljs.core.chunk_first(seq__19911_20536__$1);
var G__20538 = cljs.core.chunk_rest(seq__19911_20536__$1);
var G__20539 = c__5525__auto___20537;
var G__20540 = cljs.core.count(c__5525__auto___20537);
var G__20541 = (0);
seq__19911_20519 = G__20538;
chunk__19912_20520 = G__20539;
count__19913_20521 = G__20540;
i__19914_20522 = G__20541;
continue;
} else {
var map__19924_20543 = cljs.core.first(seq__19911_20536__$1);
var map__19924_20544__$1 = cljs.core.__destructure_map(map__19924_20543);
var w_20545 = map__19924_20544__$1;
var msg_20546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924_20544__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924_20544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924_20544__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19924_20544__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20549)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20547),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20548),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20546__$1)].join(''));


var G__20550 = cljs.core.next(seq__19911_20536__$1);
var G__20551 = null;
var G__20552 = (0);
var G__20553 = (0);
seq__19911_20519 = G__20550;
chunk__19912_20520 = G__20551;
count__19913_20521 = G__20552;
i__19914_20522 = G__20553;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__19892_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__19892_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__19935 = node_uri;
G__19935.setQuery(null);

G__19935.setPath(new$);

return G__19935;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__19937){
var map__19938 = p__19937;
var map__19938__$1 = cljs.core.__destructure_map(map__19938);
var msg = map__19938__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19938__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19938__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__19939 = cljs.core.seq(updates);
var chunk__19941 = null;
var count__19942 = (0);
var i__19943 = (0);
while(true){
if((i__19943 < count__19942)){
var path = chunk__19941.cljs$core$IIndexed$_nth$arity$2(null,i__19943);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20204_20557 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20208_20558 = null;
var count__20209_20559 = (0);
var i__20210_20560 = (0);
while(true){
if((i__20210_20560 < count__20209_20559)){
var node_20561 = chunk__20208_20558.cljs$core$IIndexed$_nth$arity$2(null,i__20210_20560);
if(cljs.core.not(node_20561.shadow$old)){
var path_match_20563 = shadow.cljs.devtools.client.browser.match_paths(node_20561.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20563)){
var new_link_20564 = (function (){var G__20275 = node_20561.cloneNode(true);
G__20275.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20563),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20275;
})();
(node_20561.shadow$old = true);

(new_link_20564.onload = ((function (seq__20204_20557,chunk__20208_20558,count__20209_20559,i__20210_20560,seq__19939,chunk__19941,count__19942,i__19943,new_link_20564,path_match_20563,node_20561,path,map__19938,map__19938__$1,msg,updates,reload_info){
return (function (e){
var seq__20278_20565 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20280_20566 = null;
var count__20281_20567 = (0);
var i__20282_20568 = (0);
while(true){
if((i__20282_20568 < count__20281_20567)){
var map__20294_20570 = chunk__20280_20566.cljs$core$IIndexed$_nth$arity$2(null,i__20282_20568);
var map__20294_20571__$1 = cljs.core.__destructure_map(map__20294_20570);
var task_20572 = map__20294_20571__$1;
var fn_str_20573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20294_20571__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20294_20571__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20575 = goog.getObjectByName(fn_str_20573,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20574)].join(''));

(fn_obj_20575.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20575.cljs$core$IFn$_invoke$arity$2(path,new_link_20564) : fn_obj_20575.call(null,path,new_link_20564));


var G__20577 = seq__20278_20565;
var G__20578 = chunk__20280_20566;
var G__20579 = count__20281_20567;
var G__20580 = (i__20282_20568 + (1));
seq__20278_20565 = G__20577;
chunk__20280_20566 = G__20578;
count__20281_20567 = G__20579;
i__20282_20568 = G__20580;
continue;
} else {
var temp__5804__auto___20581 = cljs.core.seq(seq__20278_20565);
if(temp__5804__auto___20581){
var seq__20278_20582__$1 = temp__5804__auto___20581;
if(cljs.core.chunked_seq_QMARK_(seq__20278_20582__$1)){
var c__5525__auto___20583 = cljs.core.chunk_first(seq__20278_20582__$1);
var G__20584 = cljs.core.chunk_rest(seq__20278_20582__$1);
var G__20585 = c__5525__auto___20583;
var G__20586 = cljs.core.count(c__5525__auto___20583);
var G__20587 = (0);
seq__20278_20565 = G__20584;
chunk__20280_20566 = G__20585;
count__20281_20567 = G__20586;
i__20282_20568 = G__20587;
continue;
} else {
var map__20298_20589 = cljs.core.first(seq__20278_20582__$1);
var map__20298_20590__$1 = cljs.core.__destructure_map(map__20298_20589);
var task_20591 = map__20298_20590__$1;
var fn_str_20592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20298_20590__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20298_20590__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20594 = goog.getObjectByName(fn_str_20592,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20593)].join(''));

(fn_obj_20594.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20594.cljs$core$IFn$_invoke$arity$2(path,new_link_20564) : fn_obj_20594.call(null,path,new_link_20564));


var G__20595 = cljs.core.next(seq__20278_20582__$1);
var G__20596 = null;
var G__20597 = (0);
var G__20598 = (0);
seq__20278_20565 = G__20595;
chunk__20280_20566 = G__20596;
count__20281_20567 = G__20597;
i__20282_20568 = G__20598;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20561);
});})(seq__20204_20557,chunk__20208_20558,count__20209_20559,i__20210_20560,seq__19939,chunk__19941,count__19942,i__19943,new_link_20564,path_match_20563,node_20561,path,map__19938,map__19938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20563], 0));

goog.dom.insertSiblingAfter(new_link_20564,node_20561);


var G__20600 = seq__20204_20557;
var G__20601 = chunk__20208_20558;
var G__20602 = count__20209_20559;
var G__20603 = (i__20210_20560 + (1));
seq__20204_20557 = G__20600;
chunk__20208_20558 = G__20601;
count__20209_20559 = G__20602;
i__20210_20560 = G__20603;
continue;
} else {
var G__20604 = seq__20204_20557;
var G__20605 = chunk__20208_20558;
var G__20606 = count__20209_20559;
var G__20607 = (i__20210_20560 + (1));
seq__20204_20557 = G__20604;
chunk__20208_20558 = G__20605;
count__20209_20559 = G__20606;
i__20210_20560 = G__20607;
continue;
}
} else {
var G__20609 = seq__20204_20557;
var G__20610 = chunk__20208_20558;
var G__20611 = count__20209_20559;
var G__20612 = (i__20210_20560 + (1));
seq__20204_20557 = G__20609;
chunk__20208_20558 = G__20610;
count__20209_20559 = G__20611;
i__20210_20560 = G__20612;
continue;
}
} else {
var temp__5804__auto___20613 = cljs.core.seq(seq__20204_20557);
if(temp__5804__auto___20613){
var seq__20204_20614__$1 = temp__5804__auto___20613;
if(cljs.core.chunked_seq_QMARK_(seq__20204_20614__$1)){
var c__5525__auto___20615 = cljs.core.chunk_first(seq__20204_20614__$1);
var G__20616 = cljs.core.chunk_rest(seq__20204_20614__$1);
var G__20617 = c__5525__auto___20615;
var G__20618 = cljs.core.count(c__5525__auto___20615);
var G__20619 = (0);
seq__20204_20557 = G__20616;
chunk__20208_20558 = G__20617;
count__20209_20559 = G__20618;
i__20210_20560 = G__20619;
continue;
} else {
var node_20620 = cljs.core.first(seq__20204_20614__$1);
if(cljs.core.not(node_20620.shadow$old)){
var path_match_20621 = shadow.cljs.devtools.client.browser.match_paths(node_20620.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20621)){
var new_link_20623 = (function (){var G__20300 = node_20620.cloneNode(true);
G__20300.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20621),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20300;
})();
(node_20620.shadow$old = true);

(new_link_20623.onload = ((function (seq__20204_20557,chunk__20208_20558,count__20209_20559,i__20210_20560,seq__19939,chunk__19941,count__19942,i__19943,new_link_20623,path_match_20621,node_20620,seq__20204_20614__$1,temp__5804__auto___20613,path,map__19938,map__19938__$1,msg,updates,reload_info){
return (function (e){
var seq__20302_20624 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20304_20625 = null;
var count__20305_20626 = (0);
var i__20306_20627 = (0);
while(true){
if((i__20306_20627 < count__20305_20626)){
var map__20311_20629 = chunk__20304_20625.cljs$core$IIndexed$_nth$arity$2(null,i__20306_20627);
var map__20311_20630__$1 = cljs.core.__destructure_map(map__20311_20629);
var task_20631 = map__20311_20630__$1;
var fn_str_20632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20311_20630__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20311_20630__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20634 = goog.getObjectByName(fn_str_20632,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20633)].join(''));

(fn_obj_20634.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20634.cljs$core$IFn$_invoke$arity$2(path,new_link_20623) : fn_obj_20634.call(null,path,new_link_20623));


var G__20635 = seq__20302_20624;
var G__20636 = chunk__20304_20625;
var G__20637 = count__20305_20626;
var G__20638 = (i__20306_20627 + (1));
seq__20302_20624 = G__20635;
chunk__20304_20625 = G__20636;
count__20305_20626 = G__20637;
i__20306_20627 = G__20638;
continue;
} else {
var temp__5804__auto___20640__$1 = cljs.core.seq(seq__20302_20624);
if(temp__5804__auto___20640__$1){
var seq__20302_20641__$1 = temp__5804__auto___20640__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20302_20641__$1)){
var c__5525__auto___20642 = cljs.core.chunk_first(seq__20302_20641__$1);
var G__20643 = cljs.core.chunk_rest(seq__20302_20641__$1);
var G__20644 = c__5525__auto___20642;
var G__20645 = cljs.core.count(c__5525__auto___20642);
var G__20646 = (0);
seq__20302_20624 = G__20643;
chunk__20304_20625 = G__20644;
count__20305_20626 = G__20645;
i__20306_20627 = G__20646;
continue;
} else {
var map__20312_20647 = cljs.core.first(seq__20302_20641__$1);
var map__20312_20648__$1 = cljs.core.__destructure_map(map__20312_20647);
var task_20649 = map__20312_20648__$1;
var fn_str_20650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312_20648__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312_20648__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20652 = goog.getObjectByName(fn_str_20650,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20651)].join(''));

(fn_obj_20652.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20652.cljs$core$IFn$_invoke$arity$2(path,new_link_20623) : fn_obj_20652.call(null,path,new_link_20623));


var G__20654 = cljs.core.next(seq__20302_20641__$1);
var G__20655 = null;
var G__20656 = (0);
var G__20657 = (0);
seq__20302_20624 = G__20654;
chunk__20304_20625 = G__20655;
count__20305_20626 = G__20656;
i__20306_20627 = G__20657;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20620);
});})(seq__20204_20557,chunk__20208_20558,count__20209_20559,i__20210_20560,seq__19939,chunk__19941,count__19942,i__19943,new_link_20623,path_match_20621,node_20620,seq__20204_20614__$1,temp__5804__auto___20613,path,map__19938,map__19938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20621], 0));

goog.dom.insertSiblingAfter(new_link_20623,node_20620);


var G__20658 = cljs.core.next(seq__20204_20614__$1);
var G__20659 = null;
var G__20660 = (0);
var G__20661 = (0);
seq__20204_20557 = G__20658;
chunk__20208_20558 = G__20659;
count__20209_20559 = G__20660;
i__20210_20560 = G__20661;
continue;
} else {
var G__20662 = cljs.core.next(seq__20204_20614__$1);
var G__20663 = null;
var G__20664 = (0);
var G__20665 = (0);
seq__20204_20557 = G__20662;
chunk__20208_20558 = G__20663;
count__20209_20559 = G__20664;
i__20210_20560 = G__20665;
continue;
}
} else {
var G__20666 = cljs.core.next(seq__20204_20614__$1);
var G__20667 = null;
var G__20668 = (0);
var G__20669 = (0);
seq__20204_20557 = G__20666;
chunk__20208_20558 = G__20667;
count__20209_20559 = G__20668;
i__20210_20560 = G__20669;
continue;
}
}
} else {
}
}
break;
}


var G__20670 = seq__19939;
var G__20671 = chunk__19941;
var G__20672 = count__19942;
var G__20673 = (i__19943 + (1));
seq__19939 = G__20670;
chunk__19941 = G__20671;
count__19942 = G__20672;
i__19943 = G__20673;
continue;
} else {
var G__20674 = seq__19939;
var G__20675 = chunk__19941;
var G__20676 = count__19942;
var G__20677 = (i__19943 + (1));
seq__19939 = G__20674;
chunk__19941 = G__20675;
count__19942 = G__20676;
i__19943 = G__20677;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19939);
if(temp__5804__auto__){
var seq__19939__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19939__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19939__$1);
var G__20679 = cljs.core.chunk_rest(seq__19939__$1);
var G__20680 = c__5525__auto__;
var G__20681 = cljs.core.count(c__5525__auto__);
var G__20682 = (0);
seq__19939 = G__20679;
chunk__19941 = G__20680;
count__19942 = G__20681;
i__19943 = G__20682;
continue;
} else {
var path = cljs.core.first(seq__19939__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20328_20683 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20332_20684 = null;
var count__20333_20685 = (0);
var i__20334_20686 = (0);
while(true){
if((i__20334_20686 < count__20333_20685)){
var node_20687 = chunk__20332_20684.cljs$core$IIndexed$_nth$arity$2(null,i__20334_20686);
if(cljs.core.not(node_20687.shadow$old)){
var path_match_20689 = shadow.cljs.devtools.client.browser.match_paths(node_20687.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20689)){
var new_link_20690 = (function (){var G__20408 = node_20687.cloneNode(true);
G__20408.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20689),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20408;
})();
(node_20687.shadow$old = true);

(new_link_20690.onload = ((function (seq__20328_20683,chunk__20332_20684,count__20333_20685,i__20334_20686,seq__19939,chunk__19941,count__19942,i__19943,new_link_20690,path_match_20689,node_20687,path,seq__19939__$1,temp__5804__auto__,map__19938,map__19938__$1,msg,updates,reload_info){
return (function (e){
var seq__20409_20691 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20411_20692 = null;
var count__20412_20693 = (0);
var i__20413_20694 = (0);
while(true){
if((i__20413_20694 < count__20412_20693)){
var map__20418_20696 = chunk__20411_20692.cljs$core$IIndexed$_nth$arity$2(null,i__20413_20694);
var map__20418_20697__$1 = cljs.core.__destructure_map(map__20418_20696);
var task_20698 = map__20418_20697__$1;
var fn_str_20699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20418_20697__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20418_20697__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20701 = goog.getObjectByName(fn_str_20699,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20700)].join(''));

(fn_obj_20701.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20701.cljs$core$IFn$_invoke$arity$2(path,new_link_20690) : fn_obj_20701.call(null,path,new_link_20690));


var G__20703 = seq__20409_20691;
var G__20704 = chunk__20411_20692;
var G__20705 = count__20412_20693;
var G__20706 = (i__20413_20694 + (1));
seq__20409_20691 = G__20703;
chunk__20411_20692 = G__20704;
count__20412_20693 = G__20705;
i__20413_20694 = G__20706;
continue;
} else {
var temp__5804__auto___20707__$1 = cljs.core.seq(seq__20409_20691);
if(temp__5804__auto___20707__$1){
var seq__20409_20708__$1 = temp__5804__auto___20707__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20409_20708__$1)){
var c__5525__auto___20709 = cljs.core.chunk_first(seq__20409_20708__$1);
var G__20710 = cljs.core.chunk_rest(seq__20409_20708__$1);
var G__20711 = c__5525__auto___20709;
var G__20712 = cljs.core.count(c__5525__auto___20709);
var G__20713 = (0);
seq__20409_20691 = G__20710;
chunk__20411_20692 = G__20711;
count__20412_20693 = G__20712;
i__20413_20694 = G__20713;
continue;
} else {
var map__20423_20714 = cljs.core.first(seq__20409_20708__$1);
var map__20423_20715__$1 = cljs.core.__destructure_map(map__20423_20714);
var task_20716 = map__20423_20715__$1;
var fn_str_20717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20423_20715__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20423_20715__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20720 = goog.getObjectByName(fn_str_20717,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20718)].join(''));

(fn_obj_20720.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20720.cljs$core$IFn$_invoke$arity$2(path,new_link_20690) : fn_obj_20720.call(null,path,new_link_20690));


var G__20721 = cljs.core.next(seq__20409_20708__$1);
var G__20722 = null;
var G__20723 = (0);
var G__20724 = (0);
seq__20409_20691 = G__20721;
chunk__20411_20692 = G__20722;
count__20412_20693 = G__20723;
i__20413_20694 = G__20724;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20687);
});})(seq__20328_20683,chunk__20332_20684,count__20333_20685,i__20334_20686,seq__19939,chunk__19941,count__19942,i__19943,new_link_20690,path_match_20689,node_20687,path,seq__19939__$1,temp__5804__auto__,map__19938,map__19938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20689], 0));

goog.dom.insertSiblingAfter(new_link_20690,node_20687);


var G__20725 = seq__20328_20683;
var G__20726 = chunk__20332_20684;
var G__20727 = count__20333_20685;
var G__20728 = (i__20334_20686 + (1));
seq__20328_20683 = G__20725;
chunk__20332_20684 = G__20726;
count__20333_20685 = G__20727;
i__20334_20686 = G__20728;
continue;
} else {
var G__20729 = seq__20328_20683;
var G__20730 = chunk__20332_20684;
var G__20731 = count__20333_20685;
var G__20732 = (i__20334_20686 + (1));
seq__20328_20683 = G__20729;
chunk__20332_20684 = G__20730;
count__20333_20685 = G__20731;
i__20334_20686 = G__20732;
continue;
}
} else {
var G__20733 = seq__20328_20683;
var G__20734 = chunk__20332_20684;
var G__20735 = count__20333_20685;
var G__20737 = (i__20334_20686 + (1));
seq__20328_20683 = G__20733;
chunk__20332_20684 = G__20734;
count__20333_20685 = G__20735;
i__20334_20686 = G__20737;
continue;
}
} else {
var temp__5804__auto___20738__$1 = cljs.core.seq(seq__20328_20683);
if(temp__5804__auto___20738__$1){
var seq__20328_20739__$1 = temp__5804__auto___20738__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20328_20739__$1)){
var c__5525__auto___20740 = cljs.core.chunk_first(seq__20328_20739__$1);
var G__20741 = cljs.core.chunk_rest(seq__20328_20739__$1);
var G__20742 = c__5525__auto___20740;
var G__20743 = cljs.core.count(c__5525__auto___20740);
var G__20744 = (0);
seq__20328_20683 = G__20741;
chunk__20332_20684 = G__20742;
count__20333_20685 = G__20743;
i__20334_20686 = G__20744;
continue;
} else {
var node_20745 = cljs.core.first(seq__20328_20739__$1);
if(cljs.core.not(node_20745.shadow$old)){
var path_match_20746 = shadow.cljs.devtools.client.browser.match_paths(node_20745.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20746)){
var new_link_20747 = (function (){var G__20429 = node_20745.cloneNode(true);
G__20429.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20746),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20429;
})();
(node_20745.shadow$old = true);

(new_link_20747.onload = ((function (seq__20328_20683,chunk__20332_20684,count__20333_20685,i__20334_20686,seq__19939,chunk__19941,count__19942,i__19943,new_link_20747,path_match_20746,node_20745,seq__20328_20739__$1,temp__5804__auto___20738__$1,path,seq__19939__$1,temp__5804__auto__,map__19938,map__19938__$1,msg,updates,reload_info){
return (function (e){
var seq__20432_20749 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20434_20750 = null;
var count__20435_20751 = (0);
var i__20436_20752 = (0);
while(true){
if((i__20436_20752 < count__20435_20751)){
var map__20441_20754 = chunk__20434_20750.cljs$core$IIndexed$_nth$arity$2(null,i__20436_20752);
var map__20441_20755__$1 = cljs.core.__destructure_map(map__20441_20754);
var task_20756 = map__20441_20755__$1;
var fn_str_20757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20441_20755__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20441_20755__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20759 = goog.getObjectByName(fn_str_20757,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20758)].join(''));

(fn_obj_20759.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20759.cljs$core$IFn$_invoke$arity$2(path,new_link_20747) : fn_obj_20759.call(null,path,new_link_20747));


var G__20760 = seq__20432_20749;
var G__20761 = chunk__20434_20750;
var G__20762 = count__20435_20751;
var G__20763 = (i__20436_20752 + (1));
seq__20432_20749 = G__20760;
chunk__20434_20750 = G__20761;
count__20435_20751 = G__20762;
i__20436_20752 = G__20763;
continue;
} else {
var temp__5804__auto___20764__$2 = cljs.core.seq(seq__20432_20749);
if(temp__5804__auto___20764__$2){
var seq__20432_20766__$1 = temp__5804__auto___20764__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20432_20766__$1)){
var c__5525__auto___20767 = cljs.core.chunk_first(seq__20432_20766__$1);
var G__20768 = cljs.core.chunk_rest(seq__20432_20766__$1);
var G__20769 = c__5525__auto___20767;
var G__20770 = cljs.core.count(c__5525__auto___20767);
var G__20771 = (0);
seq__20432_20749 = G__20768;
chunk__20434_20750 = G__20769;
count__20435_20751 = G__20770;
i__20436_20752 = G__20771;
continue;
} else {
var map__20442_20772 = cljs.core.first(seq__20432_20766__$1);
var map__20442_20773__$1 = cljs.core.__destructure_map(map__20442_20772);
var task_20774 = map__20442_20773__$1;
var fn_str_20775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20442_20773__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20442_20773__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20777 = goog.getObjectByName(fn_str_20775,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20776)].join(''));

(fn_obj_20777.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20777.cljs$core$IFn$_invoke$arity$2(path,new_link_20747) : fn_obj_20777.call(null,path,new_link_20747));


var G__20779 = cljs.core.next(seq__20432_20766__$1);
var G__20780 = null;
var G__20781 = (0);
var G__20782 = (0);
seq__20432_20749 = G__20779;
chunk__20434_20750 = G__20780;
count__20435_20751 = G__20781;
i__20436_20752 = G__20782;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20745);
});})(seq__20328_20683,chunk__20332_20684,count__20333_20685,i__20334_20686,seq__19939,chunk__19941,count__19942,i__19943,new_link_20747,path_match_20746,node_20745,seq__20328_20739__$1,temp__5804__auto___20738__$1,path,seq__19939__$1,temp__5804__auto__,map__19938,map__19938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20746], 0));

goog.dom.insertSiblingAfter(new_link_20747,node_20745);


var G__20783 = cljs.core.next(seq__20328_20739__$1);
var G__20784 = null;
var G__20785 = (0);
var G__20786 = (0);
seq__20328_20683 = G__20783;
chunk__20332_20684 = G__20784;
count__20333_20685 = G__20785;
i__20334_20686 = G__20786;
continue;
} else {
var G__20787 = cljs.core.next(seq__20328_20739__$1);
var G__20788 = null;
var G__20789 = (0);
var G__20790 = (0);
seq__20328_20683 = G__20787;
chunk__20332_20684 = G__20788;
count__20333_20685 = G__20789;
i__20334_20686 = G__20790;
continue;
}
} else {
var G__20791 = cljs.core.next(seq__20328_20739__$1);
var G__20792 = null;
var G__20793 = (0);
var G__20794 = (0);
seq__20328_20683 = G__20791;
chunk__20332_20684 = G__20792;
count__20333_20685 = G__20793;
i__20334_20686 = G__20794;
continue;
}
}
} else {
}
}
break;
}


var G__20796 = cljs.core.next(seq__19939__$1);
var G__20797 = null;
var G__20798 = (0);
var G__20799 = (0);
seq__19939 = G__20796;
chunk__19941 = G__20797;
count__19942 = G__20798;
i__19943 = G__20799;
continue;
} else {
var G__20800 = cljs.core.next(seq__19939__$1);
var G__20801 = null;
var G__20802 = (0);
var G__20803 = (0);
seq__19939 = G__20800;
chunk__19941 = G__20801;
count__19942 = G__20802;
i__19943 = G__20803;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__20444 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__20444) : success.call(null,G__20444));
}catch (e20443){var e = e20443;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__20445,success,fail){
var map__20446 = p__20445;
var map__20446__$1 = cljs.core.__destructure_map(map__20446);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20446__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__20448 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__20448) : success.call(null,G__20448));
}catch (e20447){var e = e20447;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20449,done,error){
var map__20450 = p__20449;
var map__20450__$1 = cljs.core.__destructure_map(map__20450);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20450__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20451,done,error){
var map__20452 = p__20451;
var map__20452__$1 = cljs.core.__destructure_map(map__20452);
var msg = map__20452__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20452__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20452__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20452__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20453){
var map__20454 = p__20453;
var map__20454__$1 = cljs.core.__destructure_map(map__20454);
var src = map__20454__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20454__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20455 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20455) : done.call(null,G__20455));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20456){
var map__20457 = p__20456;
var map__20457__$1 = cljs.core.__destructure_map(map__20457);
var msg__$1 = map__20457__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20457__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20458){var ex = e20458;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20459){
var map__20460 = p__20459;
var map__20460__$1 = cljs.core.__destructure_map(map__20460);
var env = map__20460__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20460__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20461){
var map__20462 = p__20461;
var map__20462__$1 = cljs.core.__destructure_map(map__20462);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20462__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20462__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20465){
var map__20466 = p__20465;
var map__20466__$1 = cljs.core.__destructure_map(map__20466);
var svc = map__20466__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20466__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
