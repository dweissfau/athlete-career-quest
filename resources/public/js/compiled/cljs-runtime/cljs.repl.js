goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12071){
var map__12073 = p__12071;
var map__12073__$1 = cljs.core.__destructure_map(map__12073);
var m = map__12073__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12073__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12082_12323 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12083_12324 = null;
var count__12084_12325 = (0);
var i__12085_12326 = (0);
while(true){
if((i__12085_12326 < count__12084_12325)){
var f_12327 = chunk__12083_12324.cljs$core$IIndexed$_nth$arity$2(null,i__12085_12326);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12327], 0));


var G__12328 = seq__12082_12323;
var G__12329 = chunk__12083_12324;
var G__12330 = count__12084_12325;
var G__12331 = (i__12085_12326 + (1));
seq__12082_12323 = G__12328;
chunk__12083_12324 = G__12329;
count__12084_12325 = G__12330;
i__12085_12326 = G__12331;
continue;
} else {
var temp__5804__auto___12333 = cljs.core.seq(seq__12082_12323);
if(temp__5804__auto___12333){
var seq__12082_12334__$1 = temp__5804__auto___12333;
if(cljs.core.chunked_seq_QMARK_(seq__12082_12334__$1)){
var c__5525__auto___12335 = cljs.core.chunk_first(seq__12082_12334__$1);
var G__12336 = cljs.core.chunk_rest(seq__12082_12334__$1);
var G__12337 = c__5525__auto___12335;
var G__12338 = cljs.core.count(c__5525__auto___12335);
var G__12339 = (0);
seq__12082_12323 = G__12336;
chunk__12083_12324 = G__12337;
count__12084_12325 = G__12338;
i__12085_12326 = G__12339;
continue;
} else {
var f_12342 = cljs.core.first(seq__12082_12334__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12342], 0));


var G__12343 = cljs.core.next(seq__12082_12334__$1);
var G__12344 = null;
var G__12345 = (0);
var G__12346 = (0);
seq__12082_12323 = G__12343;
chunk__12083_12324 = G__12344;
count__12084_12325 = G__12345;
i__12085_12326 = G__12346;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12347 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_12347], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_12347)))?cljs.core.second(arglists_12347):arglists_12347)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12104_12356 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12105_12357 = null;
var count__12106_12358 = (0);
var i__12107_12359 = (0);
while(true){
if((i__12107_12359 < count__12106_12358)){
var vec__12150_12360 = chunk__12105_12357.cljs$core$IIndexed$_nth$arity$2(null,i__12107_12359);
var name_12361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12150_12360,(0),null);
var map__12153_12362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12150_12360,(1),null);
var map__12153_12363__$1 = cljs.core.__destructure_map(map__12153_12362);
var doc_12364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12153_12363__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12153_12363__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12361], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12365], 0));

if(cljs.core.truth_(doc_12364)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12364], 0));
} else {
}


var G__12366 = seq__12104_12356;
var G__12367 = chunk__12105_12357;
var G__12368 = count__12106_12358;
var G__12369 = (i__12107_12359 + (1));
seq__12104_12356 = G__12366;
chunk__12105_12357 = G__12367;
count__12106_12358 = G__12368;
i__12107_12359 = G__12369;
continue;
} else {
var temp__5804__auto___12370 = cljs.core.seq(seq__12104_12356);
if(temp__5804__auto___12370){
var seq__12104_12371__$1 = temp__5804__auto___12370;
if(cljs.core.chunked_seq_QMARK_(seq__12104_12371__$1)){
var c__5525__auto___12372 = cljs.core.chunk_first(seq__12104_12371__$1);
var G__12374 = cljs.core.chunk_rest(seq__12104_12371__$1);
var G__12375 = c__5525__auto___12372;
var G__12376 = cljs.core.count(c__5525__auto___12372);
var G__12377 = (0);
seq__12104_12356 = G__12374;
chunk__12105_12357 = G__12375;
count__12106_12358 = G__12376;
i__12107_12359 = G__12377;
continue;
} else {
var vec__12157_12378 = cljs.core.first(seq__12104_12371__$1);
var name_12379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12157_12378,(0),null);
var map__12160_12380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12157_12378,(1),null);
var map__12160_12381__$1 = cljs.core.__destructure_map(map__12160_12380);
var doc_12382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12160_12381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12160_12381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12379], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12383], 0));

if(cljs.core.truth_(doc_12382)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12382], 0));
} else {
}


var G__12386 = cljs.core.next(seq__12104_12371__$1);
var G__12387 = null;
var G__12388 = (0);
var G__12389 = (0);
seq__12104_12356 = G__12386;
chunk__12105_12357 = G__12387;
count__12106_12358 = G__12388;
i__12107_12359 = G__12389;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__12166 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12167 = null;
var count__12168 = (0);
var i__12169 = (0);
while(true){
if((i__12169 < count__12168)){
var role = chunk__12167.cljs$core$IIndexed$_nth$arity$2(null,i__12169);
var temp__5804__auto___12392__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___12392__$1)){
var spec_12393 = temp__5804__auto___12392__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_12393)], 0));
} else {
}


var G__12394 = seq__12166;
var G__12395 = chunk__12167;
var G__12396 = count__12168;
var G__12397 = (i__12169 + (1));
seq__12166 = G__12394;
chunk__12167 = G__12395;
count__12168 = G__12396;
i__12169 = G__12397;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__12166);
if(temp__5804__auto____$1){
var seq__12166__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__12166__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12166__$1);
var G__12399 = cljs.core.chunk_rest(seq__12166__$1);
var G__12400 = c__5525__auto__;
var G__12401 = cljs.core.count(c__5525__auto__);
var G__12402 = (0);
seq__12166 = G__12399;
chunk__12167 = G__12400;
count__12168 = G__12401;
i__12169 = G__12402;
continue;
} else {
var role = cljs.core.first(seq__12166__$1);
var temp__5804__auto___12403__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___12403__$2)){
var spec_12405 = temp__5804__auto___12403__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_12405)], 0));
} else {
}


var G__12406 = cljs.core.next(seq__12166__$1);
var G__12407 = null;
var G__12408 = (0);
var G__12409 = (0);
seq__12166 = G__12406;
chunk__12167 = G__12407;
count__12168 = G__12408;
i__12169 = G__12409;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__12199 = datafied_throwable;
var map__12199__$1 = cljs.core.__destructure_map(map__12199);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12199__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12199__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12199__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__12200 = cljs.core.last(via);
var map__12200__$1 = cljs.core.__destructure_map(map__12200);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12200__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12200__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12200__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__12201 = data;
var map__12201__$1 = cljs.core.__destructure_map(map__12201);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12201__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12201__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12201__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__12202 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__12202__$1 = cljs.core.__destructure_map(map__12202);
var top_data = map__12202__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12202__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__12209 = phase;
var G__12209__$1 = (((G__12209 instanceof cljs.core.Keyword))?G__12209.fqn:null);
switch (G__12209__$1) {
case "read-source":
var map__12220 = data;
var map__12220__$1 = cljs.core.__destructure_map(map__12220);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12220__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12220__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__12221 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__12221__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12221,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12221);
var G__12221__$2 = (cljs.core.truth_((function (){var fexpr__12228 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__12228.cljs$core$IFn$_invoke$arity$1 ? fexpr__12228.cljs$core$IFn$_invoke$arity$1(source) : fexpr__12228.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12221__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12221__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12221__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12221__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__12229 = top_data;
var G__12229__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12229,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12229);
var G__12229__$2 = (cljs.core.truth_((function (){var fexpr__12230 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__12230.cljs$core$IFn$_invoke$arity$1 ? fexpr__12230.cljs$core$IFn$_invoke$arity$1(source) : fexpr__12230.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12229__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12229__$1);
var G__12229__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12229__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12229__$2);
var G__12229__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12229__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12229__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12229__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12229__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__12231 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12231,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12231,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12231,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12231,(3),null);
var G__12234 = top_data;
var G__12234__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12234,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__12234);
var G__12234__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12234__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__12234__$1);
var G__12234__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12234__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__12234__$2);
var G__12234__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12234__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12234__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12234__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12234__$4;
}

break;
case "execution":
var vec__12235 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__12194_SHARP_){
var or__5002__auto__ = (p1__12194_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__12244 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__12244.cljs$core$IFn$_invoke$arity$1 ? fexpr__12244.cljs$core$IFn$_invoke$arity$1(p1__12194_SHARP_) : fexpr__12244.call(null,p1__12194_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__12245 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__12245__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12245,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__12245);
var G__12245__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12245__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12245__$1);
var G__12245__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12245__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__12245__$2);
var G__12245__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12245__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__12245__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12245__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12245__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12209__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__12248){
var map__12249 = p__12248;
var map__12249__$1 = cljs.core.__destructure_map(map__12249);
var triage_data = map__12249__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12249__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__12256 = phase;
var G__12256__$1 = (((G__12256 instanceof cljs.core.Keyword))?G__12256.fqn:null);
switch (G__12256__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__12257 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__12258 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__12259 = loc;
var G__12260 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12263_12431 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12264_12432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12273_12433 = true;
var _STAR_print_fn_STAR__temp_val__12274_12434 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12273_12433);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12274_12434);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12246_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__12246_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12264_12432);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12263_12431);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__12257,G__12258,G__12259,G__12260) : format.call(null,G__12257,G__12258,G__12259,G__12260));

break;
case "macroexpansion":
var G__12280 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__12281 = cause_type;
var G__12282 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__12283 = loc;
var G__12284 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__12280,G__12281,G__12282,G__12283,G__12284) : format.call(null,G__12280,G__12281,G__12282,G__12283,G__12284));

break;
case "compile-syntax-check":
var G__12286 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__12287 = cause_type;
var G__12288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__12289 = loc;
var G__12290 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__12286,G__12287,G__12288,G__12289,G__12290) : format.call(null,G__12286,G__12287,G__12288,G__12289,G__12290));

break;
case "compilation":
var G__12291 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__12292 = cause_type;
var G__12293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__12294 = loc;
var G__12295 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__12291,G__12292,G__12293,G__12294,G__12295) : format.call(null,G__12291,G__12292,G__12293,G__12294,G__12295));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__12296 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__12297 = symbol;
var G__12298 = loc;
var G__12299 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12300_12441 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12301_12442 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12302_12443 = true;
var _STAR_print_fn_STAR__temp_val__12303_12444 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12302_12443);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12303_12444);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12247_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__12247_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12301_12442);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12300_12441);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__12296,G__12297,G__12298,G__12299) : format.call(null,G__12296,G__12297,G__12298,G__12299));
} else {
var G__12311 = "Execution error%s at %s(%s).\n%s\n";
var G__12312 = cause_type;
var G__12313 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__12314 = loc;
var G__12315 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__12311,G__12312,G__12313,G__12314,G__12315) : format.call(null,G__12311,G__12312,G__12313,G__12314,G__12315));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12256__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
