goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43418 = arguments.length;
var i__5770__auto___43419 = (0);
while(true){
if((i__5770__auto___43419 < len__5769__auto___43418)){
args__5775__auto__.push((arguments[i__5770__auto___43419]));

var G__43421 = (i__5770__auto___43419 + (1));
i__5770__auto___43419 = G__43421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42704){
var G__42705 = cljs.core.first(seq42704);
var seq42704__$1 = cljs.core.next(seq42704);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42705,seq42704__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42717 = cljs.core.seq(sources);
var chunk__42718 = null;
var count__42719 = (0);
var i__42720 = (0);
while(true){
if((i__42720 < count__42719)){
var map__42761 = chunk__42718.cljs$core$IIndexed$_nth$arity$2(null,i__42720);
var map__42761__$1 = cljs.core.__destructure_map(map__42761);
var src = map__42761__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42767){var e_43429 = e42767;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43429);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43429.message)].join('')));
}

var G__43430 = seq__42717;
var G__43431 = chunk__42718;
var G__43432 = count__42719;
var G__43433 = (i__42720 + (1));
seq__42717 = G__43430;
chunk__42718 = G__43431;
count__42719 = G__43432;
i__42720 = G__43433;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42717);
if(temp__5804__auto__){
var seq__42717__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42717__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42717__$1);
var G__43434 = cljs.core.chunk_rest(seq__42717__$1);
var G__43435 = c__5568__auto__;
var G__43436 = cljs.core.count(c__5568__auto__);
var G__43437 = (0);
seq__42717 = G__43434;
chunk__42718 = G__43435;
count__42719 = G__43436;
i__42720 = G__43437;
continue;
} else {
var map__42777 = cljs.core.first(seq__42717__$1);
var map__42777__$1 = cljs.core.__destructure_map(map__42777);
var src = map__42777__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42777__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42779){var e_43438 = e42779;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43438);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43438.message)].join('')));
}

var G__43439 = cljs.core.next(seq__42717__$1);
var G__43440 = null;
var G__43441 = (0);
var G__43442 = (0);
seq__42717 = G__43439;
chunk__42718 = G__43440;
count__42719 = G__43441;
i__42720 = G__43442;
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
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42791 = cljs.core.seq(js_requires);
var chunk__42792 = null;
var count__42793 = (0);
var i__42794 = (0);
while(true){
if((i__42794 < count__42793)){
var js_ns = chunk__42792.cljs$core$IIndexed$_nth$arity$2(null,i__42794);
var require_str_43444 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43444);


var G__43445 = seq__42791;
var G__43446 = chunk__42792;
var G__43447 = count__42793;
var G__43448 = (i__42794 + (1));
seq__42791 = G__43445;
chunk__42792 = G__43446;
count__42793 = G__43447;
i__42794 = G__43448;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42791);
if(temp__5804__auto__){
var seq__42791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42791__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42791__$1);
var G__43449 = cljs.core.chunk_rest(seq__42791__$1);
var G__43450 = c__5568__auto__;
var G__43451 = cljs.core.count(c__5568__auto__);
var G__43452 = (0);
seq__42791 = G__43449;
chunk__42792 = G__43450;
count__42793 = G__43451;
i__42794 = G__43452;
continue;
} else {
var js_ns = cljs.core.first(seq__42791__$1);
var require_str_43453 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43453);


var G__43454 = cljs.core.next(seq__42791__$1);
var G__43455 = null;
var G__43456 = (0);
var G__43457 = (0);
seq__42791 = G__43454;
chunk__42792 = G__43455;
count__42793 = G__43456;
i__42794 = G__43457;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42799){
var map__42800 = p__42799;
var map__42800__$1 = cljs.core.__destructure_map(map__42800);
var msg = map__42800__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42800__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42800__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42801(s__42802){
return (new cljs.core.LazySeq(null,(function (){
var s__42802__$1 = s__42802;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42802__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__42811 = cljs.core.first(xs__6360__auto__);
var map__42811__$1 = cljs.core.__destructure_map(map__42811);
var src = map__42811__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42811__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42811__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__42802__$1,map__42811,map__42811__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42800,map__42800__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42801_$_iter__42803(s__42804){
return (new cljs.core.LazySeq(null,((function (s__42802__$1,map__42811,map__42811__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42800,map__42800__$1,msg,info,reload_info){
return (function (){
var s__42804__$1 = s__42804;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42804__$1);
if(temp__5804__auto____$1){
var s__42804__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42804__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42804__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42806 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42805 = (0);
while(true){
if((i__42805 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__42805);
cljs.core.chunk_append(b__42806,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__43461 = (i__42805 + (1));
i__42805 = G__43461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42806),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42801_$_iter__42803(cljs.core.chunk_rest(s__42804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42806),null);
}
} else {
var warning = cljs.core.first(s__42804__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42801_$_iter__42803(cljs.core.rest(s__42804__$2)));
}
} else {
return null;
}
break;
}
});})(s__42802__$1,map__42811,map__42811__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42800,map__42800__$1,msg,info,reload_info))
,null,null));
});})(s__42802__$1,map__42811,map__42811__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42800,map__42800__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42801(cljs.core.rest(s__42802__$1)));
} else {
var G__43462 = cljs.core.rest(s__42802__$1);
s__42802__$1 = G__43462;
continue;
}
} else {
var G__43463 = cljs.core.rest(s__42802__$1);
s__42802__$1 = G__43463;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__42816_43464 = cljs.core.seq(warnings);
var chunk__42817_43465 = null;
var count__42818_43466 = (0);
var i__42819_43467 = (0);
while(true){
if((i__42819_43467 < count__42818_43466)){
var map__42827_43469 = chunk__42817_43465.cljs$core$IIndexed$_nth$arity$2(null,i__42819_43467);
var map__42827_43470__$1 = cljs.core.__destructure_map(map__42827_43469);
var w_43471 = map__42827_43470__$1;
var msg_43472__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42827_43470__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42827_43470__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42827_43470__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42827_43470__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43475)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43473),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43474),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43472__$1)].join(''));


var G__43476 = seq__42816_43464;
var G__43477 = chunk__42817_43465;
var G__43478 = count__42818_43466;
var G__43479 = (i__42819_43467 + (1));
seq__42816_43464 = G__43476;
chunk__42817_43465 = G__43477;
count__42818_43466 = G__43478;
i__42819_43467 = G__43479;
continue;
} else {
var temp__5804__auto___43480 = cljs.core.seq(seq__42816_43464);
if(temp__5804__auto___43480){
var seq__42816_43481__$1 = temp__5804__auto___43480;
if(cljs.core.chunked_seq_QMARK_(seq__42816_43481__$1)){
var c__5568__auto___43482 = cljs.core.chunk_first(seq__42816_43481__$1);
var G__43483 = cljs.core.chunk_rest(seq__42816_43481__$1);
var G__43484 = c__5568__auto___43482;
var G__43485 = cljs.core.count(c__5568__auto___43482);
var G__43486 = (0);
seq__42816_43464 = G__43483;
chunk__42817_43465 = G__43484;
count__42818_43466 = G__43485;
i__42819_43467 = G__43486;
continue;
} else {
var map__42831_43487 = cljs.core.first(seq__42816_43481__$1);
var map__42831_43488__$1 = cljs.core.__destructure_map(map__42831_43487);
var w_43489 = map__42831_43488__$1;
var msg_43490__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42831_43488__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42831_43488__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42831_43488__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42831_43488__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43493)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43491),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43492),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43490__$1)].join(''));


var G__43494 = cljs.core.next(seq__42816_43481__$1);
var G__43495 = null;
var G__43496 = (0);
var G__43497 = (0);
seq__42816_43464 = G__43494;
chunk__42817_43465 = G__43495;
count__42818_43466 = G__43496;
i__42819_43467 = G__43497;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42796_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42796_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__42842){
var map__42843 = p__42842;
var map__42843__$1 = cljs.core.__destructure_map(map__42843);
var msg = map__42843__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42843__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42843__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__42846 = cljs.core.seq(updates);
var chunk__42848 = null;
var count__42849 = (0);
var i__42850 = (0);
while(true){
if((i__42850 < count__42849)){
var path = chunk__42848.cljs$core$IIndexed$_nth$arity$2(null,i__42850);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43091_43499 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43095_43500 = null;
var count__43096_43501 = (0);
var i__43097_43502 = (0);
while(true){
if((i__43097_43502 < count__43096_43501)){
var node_43508 = chunk__43095_43500.cljs$core$IIndexed$_nth$arity$2(null,i__43097_43502);
if(cljs.core.not(node_43508.shadow$old)){
var path_match_43509 = shadow.cljs.devtools.client.browser.match_paths(node_43508.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43509)){
var new_link_43513 = (function (){var G__43148 = node_43508.cloneNode(true);
G__43148.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43509),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43148;
})();
(node_43508.shadow$old = true);

(new_link_43513.onload = ((function (seq__43091_43499,chunk__43095_43500,count__43096_43501,i__43097_43502,seq__42846,chunk__42848,count__42849,i__42850,new_link_43513,path_match_43509,node_43508,path,map__42843,map__42843__$1,msg,updates,reload_info){
return (function (e){
var seq__43150_43514 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43152_43515 = null;
var count__43153_43516 = (0);
var i__43154_43517 = (0);
while(true){
if((i__43154_43517 < count__43153_43516)){
var map__43176_43521 = chunk__43152_43515.cljs$core$IIndexed$_nth$arity$2(null,i__43154_43517);
var map__43176_43522__$1 = cljs.core.__destructure_map(map__43176_43521);
var task_43523 = map__43176_43522__$1;
var fn_str_43524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43176_43522__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43176_43522__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43526 = goog.getObjectByName(fn_str_43524,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43525)].join(''));

(fn_obj_43526.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43526.cljs$core$IFn$_invoke$arity$2(path,new_link_43513) : fn_obj_43526.call(null,path,new_link_43513));


var G__43528 = seq__43150_43514;
var G__43529 = chunk__43152_43515;
var G__43530 = count__43153_43516;
var G__43531 = (i__43154_43517 + (1));
seq__43150_43514 = G__43528;
chunk__43152_43515 = G__43529;
count__43153_43516 = G__43530;
i__43154_43517 = G__43531;
continue;
} else {
var temp__5804__auto___43532 = cljs.core.seq(seq__43150_43514);
if(temp__5804__auto___43532){
var seq__43150_43533__$1 = temp__5804__auto___43532;
if(cljs.core.chunked_seq_QMARK_(seq__43150_43533__$1)){
var c__5568__auto___43534 = cljs.core.chunk_first(seq__43150_43533__$1);
var G__43535 = cljs.core.chunk_rest(seq__43150_43533__$1);
var G__43536 = c__5568__auto___43534;
var G__43537 = cljs.core.count(c__5568__auto___43534);
var G__43538 = (0);
seq__43150_43514 = G__43535;
chunk__43152_43515 = G__43536;
count__43153_43516 = G__43537;
i__43154_43517 = G__43538;
continue;
} else {
var map__43177_43539 = cljs.core.first(seq__43150_43533__$1);
var map__43177_43540__$1 = cljs.core.__destructure_map(map__43177_43539);
var task_43541 = map__43177_43540__$1;
var fn_str_43542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177_43540__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43177_43540__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43544 = goog.getObjectByName(fn_str_43542,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43543)].join(''));

(fn_obj_43544.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43544.cljs$core$IFn$_invoke$arity$2(path,new_link_43513) : fn_obj_43544.call(null,path,new_link_43513));


var G__43545 = cljs.core.next(seq__43150_43533__$1);
var G__43546 = null;
var G__43547 = (0);
var G__43548 = (0);
seq__43150_43514 = G__43545;
chunk__43152_43515 = G__43546;
count__43153_43516 = G__43547;
i__43154_43517 = G__43548;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43508);
});})(seq__43091_43499,chunk__43095_43500,count__43096_43501,i__43097_43502,seq__42846,chunk__42848,count__42849,i__42850,new_link_43513,path_match_43509,node_43508,path,map__42843,map__42843__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43509], 0));

goog.dom.insertSiblingAfter(new_link_43513,node_43508);


var G__43549 = seq__43091_43499;
var G__43550 = chunk__43095_43500;
var G__43551 = count__43096_43501;
var G__43552 = (i__43097_43502 + (1));
seq__43091_43499 = G__43549;
chunk__43095_43500 = G__43550;
count__43096_43501 = G__43551;
i__43097_43502 = G__43552;
continue;
} else {
var G__43553 = seq__43091_43499;
var G__43554 = chunk__43095_43500;
var G__43555 = count__43096_43501;
var G__43556 = (i__43097_43502 + (1));
seq__43091_43499 = G__43553;
chunk__43095_43500 = G__43554;
count__43096_43501 = G__43555;
i__43097_43502 = G__43556;
continue;
}
} else {
var G__43557 = seq__43091_43499;
var G__43558 = chunk__43095_43500;
var G__43559 = count__43096_43501;
var G__43560 = (i__43097_43502 + (1));
seq__43091_43499 = G__43557;
chunk__43095_43500 = G__43558;
count__43096_43501 = G__43559;
i__43097_43502 = G__43560;
continue;
}
} else {
var temp__5804__auto___43561 = cljs.core.seq(seq__43091_43499);
if(temp__5804__auto___43561){
var seq__43091_43562__$1 = temp__5804__auto___43561;
if(cljs.core.chunked_seq_QMARK_(seq__43091_43562__$1)){
var c__5568__auto___43563 = cljs.core.chunk_first(seq__43091_43562__$1);
var G__43564 = cljs.core.chunk_rest(seq__43091_43562__$1);
var G__43565 = c__5568__auto___43563;
var G__43566 = cljs.core.count(c__5568__auto___43563);
var G__43567 = (0);
seq__43091_43499 = G__43564;
chunk__43095_43500 = G__43565;
count__43096_43501 = G__43566;
i__43097_43502 = G__43567;
continue;
} else {
var node_43568 = cljs.core.first(seq__43091_43562__$1);
if(cljs.core.not(node_43568.shadow$old)){
var path_match_43569 = shadow.cljs.devtools.client.browser.match_paths(node_43568.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43569)){
var new_link_43570 = (function (){var G__43188 = node_43568.cloneNode(true);
G__43188.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43569),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43188;
})();
(node_43568.shadow$old = true);

(new_link_43570.onload = ((function (seq__43091_43499,chunk__43095_43500,count__43096_43501,i__43097_43502,seq__42846,chunk__42848,count__42849,i__42850,new_link_43570,path_match_43569,node_43568,seq__43091_43562__$1,temp__5804__auto___43561,path,map__42843,map__42843__$1,msg,updates,reload_info){
return (function (e){
var seq__43189_43571 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43191_43572 = null;
var count__43192_43573 = (0);
var i__43193_43574 = (0);
while(true){
if((i__43193_43574 < count__43192_43573)){
var map__43201_43575 = chunk__43191_43572.cljs$core$IIndexed$_nth$arity$2(null,i__43193_43574);
var map__43201_43576__$1 = cljs.core.__destructure_map(map__43201_43575);
var task_43577 = map__43201_43576__$1;
var fn_str_43578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43201_43576__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43201_43576__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43580 = goog.getObjectByName(fn_str_43578,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43579)].join(''));

(fn_obj_43580.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43580.cljs$core$IFn$_invoke$arity$2(path,new_link_43570) : fn_obj_43580.call(null,path,new_link_43570));


var G__43581 = seq__43189_43571;
var G__43582 = chunk__43191_43572;
var G__43583 = count__43192_43573;
var G__43584 = (i__43193_43574 + (1));
seq__43189_43571 = G__43581;
chunk__43191_43572 = G__43582;
count__43192_43573 = G__43583;
i__43193_43574 = G__43584;
continue;
} else {
var temp__5804__auto___43585__$1 = cljs.core.seq(seq__43189_43571);
if(temp__5804__auto___43585__$1){
var seq__43189_43586__$1 = temp__5804__auto___43585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43189_43586__$1)){
var c__5568__auto___43587 = cljs.core.chunk_first(seq__43189_43586__$1);
var G__43588 = cljs.core.chunk_rest(seq__43189_43586__$1);
var G__43589 = c__5568__auto___43587;
var G__43590 = cljs.core.count(c__5568__auto___43587);
var G__43591 = (0);
seq__43189_43571 = G__43588;
chunk__43191_43572 = G__43589;
count__43192_43573 = G__43590;
i__43193_43574 = G__43591;
continue;
} else {
var map__43203_43592 = cljs.core.first(seq__43189_43586__$1);
var map__43203_43593__$1 = cljs.core.__destructure_map(map__43203_43592);
var task_43594 = map__43203_43593__$1;
var fn_str_43595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43203_43593__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43203_43593__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43597 = goog.getObjectByName(fn_str_43595,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43596)].join(''));

(fn_obj_43597.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43597.cljs$core$IFn$_invoke$arity$2(path,new_link_43570) : fn_obj_43597.call(null,path,new_link_43570));


var G__43598 = cljs.core.next(seq__43189_43586__$1);
var G__43599 = null;
var G__43600 = (0);
var G__43601 = (0);
seq__43189_43571 = G__43598;
chunk__43191_43572 = G__43599;
count__43192_43573 = G__43600;
i__43193_43574 = G__43601;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43568);
});})(seq__43091_43499,chunk__43095_43500,count__43096_43501,i__43097_43502,seq__42846,chunk__42848,count__42849,i__42850,new_link_43570,path_match_43569,node_43568,seq__43091_43562__$1,temp__5804__auto___43561,path,map__42843,map__42843__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43569], 0));

goog.dom.insertSiblingAfter(new_link_43570,node_43568);


var G__43602 = cljs.core.next(seq__43091_43562__$1);
var G__43603 = null;
var G__43604 = (0);
var G__43605 = (0);
seq__43091_43499 = G__43602;
chunk__43095_43500 = G__43603;
count__43096_43501 = G__43604;
i__43097_43502 = G__43605;
continue;
} else {
var G__43606 = cljs.core.next(seq__43091_43562__$1);
var G__43607 = null;
var G__43608 = (0);
var G__43609 = (0);
seq__43091_43499 = G__43606;
chunk__43095_43500 = G__43607;
count__43096_43501 = G__43608;
i__43097_43502 = G__43609;
continue;
}
} else {
var G__43610 = cljs.core.next(seq__43091_43562__$1);
var G__43611 = null;
var G__43612 = (0);
var G__43613 = (0);
seq__43091_43499 = G__43610;
chunk__43095_43500 = G__43611;
count__43096_43501 = G__43612;
i__43097_43502 = G__43613;
continue;
}
}
} else {
}
}
break;
}


var G__43614 = seq__42846;
var G__43615 = chunk__42848;
var G__43616 = count__42849;
var G__43617 = (i__42850 + (1));
seq__42846 = G__43614;
chunk__42848 = G__43615;
count__42849 = G__43616;
i__42850 = G__43617;
continue;
} else {
var G__43618 = seq__42846;
var G__43619 = chunk__42848;
var G__43620 = count__42849;
var G__43621 = (i__42850 + (1));
seq__42846 = G__43618;
chunk__42848 = G__43619;
count__42849 = G__43620;
i__42850 = G__43621;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42846);
if(temp__5804__auto__){
var seq__42846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42846__$1);
var G__43622 = cljs.core.chunk_rest(seq__42846__$1);
var G__43623 = c__5568__auto__;
var G__43624 = cljs.core.count(c__5568__auto__);
var G__43625 = (0);
seq__42846 = G__43622;
chunk__42848 = G__43623;
count__42849 = G__43624;
i__42850 = G__43625;
continue;
} else {
var path = cljs.core.first(seq__42846__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43208_43626 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43212_43627 = null;
var count__43213_43628 = (0);
var i__43214_43629 = (0);
while(true){
if((i__43214_43629 < count__43213_43628)){
var node_43630 = chunk__43212_43627.cljs$core$IIndexed$_nth$arity$2(null,i__43214_43629);
if(cljs.core.not(node_43630.shadow$old)){
var path_match_43631 = shadow.cljs.devtools.client.browser.match_paths(node_43630.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43631)){
var new_link_43634 = (function (){var G__43279 = node_43630.cloneNode(true);
G__43279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43631),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43279;
})();
(node_43630.shadow$old = true);

(new_link_43634.onload = ((function (seq__43208_43626,chunk__43212_43627,count__43213_43628,i__43214_43629,seq__42846,chunk__42848,count__42849,i__42850,new_link_43634,path_match_43631,node_43630,path,seq__42846__$1,temp__5804__auto__,map__42843,map__42843__$1,msg,updates,reload_info){
return (function (e){
var seq__43281_43635 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43283_43636 = null;
var count__43284_43637 = (0);
var i__43285_43638 = (0);
while(true){
if((i__43285_43638 < count__43284_43637)){
var map__43306_43639 = chunk__43283_43636.cljs$core$IIndexed$_nth$arity$2(null,i__43285_43638);
var map__43306_43640__$1 = cljs.core.__destructure_map(map__43306_43639);
var task_43641 = map__43306_43640__$1;
var fn_str_43642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306_43640__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306_43640__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43644 = goog.getObjectByName(fn_str_43642,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43643)].join(''));

(fn_obj_43644.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43644.cljs$core$IFn$_invoke$arity$2(path,new_link_43634) : fn_obj_43644.call(null,path,new_link_43634));


var G__43645 = seq__43281_43635;
var G__43646 = chunk__43283_43636;
var G__43647 = count__43284_43637;
var G__43648 = (i__43285_43638 + (1));
seq__43281_43635 = G__43645;
chunk__43283_43636 = G__43646;
count__43284_43637 = G__43647;
i__43285_43638 = G__43648;
continue;
} else {
var temp__5804__auto___43649__$1 = cljs.core.seq(seq__43281_43635);
if(temp__5804__auto___43649__$1){
var seq__43281_43650__$1 = temp__5804__auto___43649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43281_43650__$1)){
var c__5568__auto___43651 = cljs.core.chunk_first(seq__43281_43650__$1);
var G__43652 = cljs.core.chunk_rest(seq__43281_43650__$1);
var G__43653 = c__5568__auto___43651;
var G__43654 = cljs.core.count(c__5568__auto___43651);
var G__43655 = (0);
seq__43281_43635 = G__43652;
chunk__43283_43636 = G__43653;
count__43284_43637 = G__43654;
i__43285_43638 = G__43655;
continue;
} else {
var map__43308_43657 = cljs.core.first(seq__43281_43650__$1);
var map__43308_43658__$1 = cljs.core.__destructure_map(map__43308_43657);
var task_43659 = map__43308_43658__$1;
var fn_str_43660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43308_43658__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43308_43658__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43663 = goog.getObjectByName(fn_str_43660,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43661)].join(''));

(fn_obj_43663.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43663.cljs$core$IFn$_invoke$arity$2(path,new_link_43634) : fn_obj_43663.call(null,path,new_link_43634));


var G__43664 = cljs.core.next(seq__43281_43650__$1);
var G__43665 = null;
var G__43666 = (0);
var G__43667 = (0);
seq__43281_43635 = G__43664;
chunk__43283_43636 = G__43665;
count__43284_43637 = G__43666;
i__43285_43638 = G__43667;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43630);
});})(seq__43208_43626,chunk__43212_43627,count__43213_43628,i__43214_43629,seq__42846,chunk__42848,count__42849,i__42850,new_link_43634,path_match_43631,node_43630,path,seq__42846__$1,temp__5804__auto__,map__42843,map__42843__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43631], 0));

goog.dom.insertSiblingAfter(new_link_43634,node_43630);


var G__43668 = seq__43208_43626;
var G__43669 = chunk__43212_43627;
var G__43670 = count__43213_43628;
var G__43671 = (i__43214_43629 + (1));
seq__43208_43626 = G__43668;
chunk__43212_43627 = G__43669;
count__43213_43628 = G__43670;
i__43214_43629 = G__43671;
continue;
} else {
var G__43672 = seq__43208_43626;
var G__43673 = chunk__43212_43627;
var G__43674 = count__43213_43628;
var G__43675 = (i__43214_43629 + (1));
seq__43208_43626 = G__43672;
chunk__43212_43627 = G__43673;
count__43213_43628 = G__43674;
i__43214_43629 = G__43675;
continue;
}
} else {
var G__43676 = seq__43208_43626;
var G__43677 = chunk__43212_43627;
var G__43678 = count__43213_43628;
var G__43679 = (i__43214_43629 + (1));
seq__43208_43626 = G__43676;
chunk__43212_43627 = G__43677;
count__43213_43628 = G__43678;
i__43214_43629 = G__43679;
continue;
}
} else {
var temp__5804__auto___43680__$1 = cljs.core.seq(seq__43208_43626);
if(temp__5804__auto___43680__$1){
var seq__43208_43682__$1 = temp__5804__auto___43680__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43208_43682__$1)){
var c__5568__auto___43683 = cljs.core.chunk_first(seq__43208_43682__$1);
var G__43684 = cljs.core.chunk_rest(seq__43208_43682__$1);
var G__43685 = c__5568__auto___43683;
var G__43686 = cljs.core.count(c__5568__auto___43683);
var G__43687 = (0);
seq__43208_43626 = G__43684;
chunk__43212_43627 = G__43685;
count__43213_43628 = G__43686;
i__43214_43629 = G__43687;
continue;
} else {
var node_43689 = cljs.core.first(seq__43208_43682__$1);
if(cljs.core.not(node_43689.shadow$old)){
var path_match_43690 = shadow.cljs.devtools.client.browser.match_paths(node_43689.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43690)){
var new_link_43692 = (function (){var G__43320 = node_43689.cloneNode(true);
G__43320.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43690),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43320;
})();
(node_43689.shadow$old = true);

(new_link_43692.onload = ((function (seq__43208_43626,chunk__43212_43627,count__43213_43628,i__43214_43629,seq__42846,chunk__42848,count__42849,i__42850,new_link_43692,path_match_43690,node_43689,seq__43208_43682__$1,temp__5804__auto___43680__$1,path,seq__42846__$1,temp__5804__auto__,map__42843,map__42843__$1,msg,updates,reload_info){
return (function (e){
var seq__43321_43694 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43323_43695 = null;
var count__43324_43696 = (0);
var i__43325_43697 = (0);
while(true){
if((i__43325_43697 < count__43324_43696)){
var map__43333_43698 = chunk__43323_43695.cljs$core$IIndexed$_nth$arity$2(null,i__43325_43697);
var map__43333_43699__$1 = cljs.core.__destructure_map(map__43333_43698);
var task_43700 = map__43333_43699__$1;
var fn_str_43701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43333_43699__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43333_43699__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43703 = goog.getObjectByName(fn_str_43701,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43702)].join(''));

(fn_obj_43703.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43703.cljs$core$IFn$_invoke$arity$2(path,new_link_43692) : fn_obj_43703.call(null,path,new_link_43692));


var G__43704 = seq__43321_43694;
var G__43705 = chunk__43323_43695;
var G__43706 = count__43324_43696;
var G__43707 = (i__43325_43697 + (1));
seq__43321_43694 = G__43704;
chunk__43323_43695 = G__43705;
count__43324_43696 = G__43706;
i__43325_43697 = G__43707;
continue;
} else {
var temp__5804__auto___43708__$2 = cljs.core.seq(seq__43321_43694);
if(temp__5804__auto___43708__$2){
var seq__43321_43709__$1 = temp__5804__auto___43708__$2;
if(cljs.core.chunked_seq_QMARK_(seq__43321_43709__$1)){
var c__5568__auto___43710 = cljs.core.chunk_first(seq__43321_43709__$1);
var G__43711 = cljs.core.chunk_rest(seq__43321_43709__$1);
var G__43712 = c__5568__auto___43710;
var G__43713 = cljs.core.count(c__5568__auto___43710);
var G__43714 = (0);
seq__43321_43694 = G__43711;
chunk__43323_43695 = G__43712;
count__43324_43696 = G__43713;
i__43325_43697 = G__43714;
continue;
} else {
var map__43338_43715 = cljs.core.first(seq__43321_43709__$1);
var map__43338_43716__$1 = cljs.core.__destructure_map(map__43338_43715);
var task_43717 = map__43338_43716__$1;
var fn_str_43718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43338_43716__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43338_43716__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43720 = goog.getObjectByName(fn_str_43718,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43719)].join(''));

(fn_obj_43720.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43720.cljs$core$IFn$_invoke$arity$2(path,new_link_43692) : fn_obj_43720.call(null,path,new_link_43692));


var G__43721 = cljs.core.next(seq__43321_43709__$1);
var G__43722 = null;
var G__43723 = (0);
var G__43724 = (0);
seq__43321_43694 = G__43721;
chunk__43323_43695 = G__43722;
count__43324_43696 = G__43723;
i__43325_43697 = G__43724;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43689);
});})(seq__43208_43626,chunk__43212_43627,count__43213_43628,i__43214_43629,seq__42846,chunk__42848,count__42849,i__42850,new_link_43692,path_match_43690,node_43689,seq__43208_43682__$1,temp__5804__auto___43680__$1,path,seq__42846__$1,temp__5804__auto__,map__42843,map__42843__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43690], 0));

goog.dom.insertSiblingAfter(new_link_43692,node_43689);


var G__43725 = cljs.core.next(seq__43208_43682__$1);
var G__43726 = null;
var G__43727 = (0);
var G__43728 = (0);
seq__43208_43626 = G__43725;
chunk__43212_43627 = G__43726;
count__43213_43628 = G__43727;
i__43214_43629 = G__43728;
continue;
} else {
var G__43729 = cljs.core.next(seq__43208_43682__$1);
var G__43730 = null;
var G__43731 = (0);
var G__43732 = (0);
seq__43208_43626 = G__43729;
chunk__43212_43627 = G__43730;
count__43213_43628 = G__43731;
i__43214_43629 = G__43732;
continue;
}
} else {
var G__43733 = cljs.core.next(seq__43208_43682__$1);
var G__43734 = null;
var G__43735 = (0);
var G__43736 = (0);
seq__43208_43626 = G__43733;
chunk__43212_43627 = G__43734;
count__43213_43628 = G__43735;
i__43214_43629 = G__43736;
continue;
}
}
} else {
}
}
break;
}


var G__43737 = cljs.core.next(seq__42846__$1);
var G__43738 = null;
var G__43739 = (0);
var G__43740 = (0);
seq__42846 = G__43737;
chunk__42848 = G__43738;
count__42849 = G__43739;
i__42850 = G__43740;
continue;
} else {
var G__43741 = cljs.core.next(seq__42846__$1);
var G__43742 = null;
var G__43743 = (0);
var G__43744 = (0);
seq__42846 = G__43741;
chunk__42848 = G__43742;
count__42849 = G__43743;
i__42850 = G__43744;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__43353){
var map__43354 = p__43353;
var map__43354__$1 = cljs.core.__destructure_map(map__43354);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43354__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__43359,done,error){
var map__43360 = p__43359;
var map__43360__$1 = cljs.core.__destructure_map(map__43360);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43360__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__43361,done,error){
var map__43362 = p__43361;
var map__43362__$1 = cljs.core.__destructure_map(map__43362);
var msg = map__43362__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43362__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43362__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43362__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43366){
var map__43367 = p__43366;
var map__43367__$1 = cljs.core.__destructure_map(map__43367);
var src = map__43367__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43367__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__43372 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__43372) : done.call(null,G__43372));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__43376){
var map__43377 = p__43376;
var map__43377__$1 = cljs.core.__destructure_map(map__43377);
var msg__$1 = map__43377__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43377__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e43378){var ex = e43378;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__43383){
var map__43384 = p__43383;
var map__43384__$1 = cljs.core.__destructure_map(map__43384);
var env = map__43384__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43384__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__43395){
var map__43396 = p__43395;
var map__43396__$1 = cljs.core.__destructure_map(map__43396);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__43398){
var map__43399 = p__43398;
var map__43399__$1 = cljs.core.__destructure_map(map__43399);
var svc = map__43399__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43399__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
