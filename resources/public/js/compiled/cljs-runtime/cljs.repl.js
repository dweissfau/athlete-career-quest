goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34234){
var map__34236 = p__34234;
var map__34236__$1 = cljs.core.__destructure_map(map__34236);
var m = map__34236__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var seq__34239_34778 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34240_34779 = null;
var count__34241_34780 = (0);
var i__34242_34781 = (0);
while(true){
if((i__34242_34781 < count__34241_34780)){
var f_34782 = chunk__34240_34779.cljs$core$IIndexed$_nth$arity$2(null,i__34242_34781);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34782], 0));


var G__34783 = seq__34239_34778;
var G__34784 = chunk__34240_34779;
var G__34785 = count__34241_34780;
var G__34786 = (i__34242_34781 + (1));
seq__34239_34778 = G__34783;
chunk__34240_34779 = G__34784;
count__34241_34780 = G__34785;
i__34242_34781 = G__34786;
continue;
} else {
var temp__5804__auto___34787 = cljs.core.seq(seq__34239_34778);
if(temp__5804__auto___34787){
var seq__34239_34788__$1 = temp__5804__auto___34787;
if(cljs.core.chunked_seq_QMARK_(seq__34239_34788__$1)){
var c__5568__auto___34789 = cljs.core.chunk_first(seq__34239_34788__$1);
var G__34790 = cljs.core.chunk_rest(seq__34239_34788__$1);
var G__34791 = c__5568__auto___34789;
var G__34792 = cljs.core.count(c__5568__auto___34789);
var G__34793 = (0);
seq__34239_34778 = G__34790;
chunk__34240_34779 = G__34791;
count__34241_34780 = G__34792;
i__34242_34781 = G__34793;
continue;
} else {
var f_34795 = cljs.core.first(seq__34239_34788__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34795], 0));


var G__34796 = cljs.core.next(seq__34239_34788__$1);
var G__34797 = null;
var G__34798 = (0);
var G__34799 = (0);
seq__34239_34778 = G__34796;
chunk__34240_34779 = G__34797;
count__34241_34780 = G__34798;
i__34242_34781 = G__34799;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34800 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34800], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34800)))?cljs.core.second(arglists_34800):arglists_34800)], 0));
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
var seq__34298_34801 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34299_34802 = null;
var count__34300_34803 = (0);
var i__34301_34804 = (0);
while(true){
if((i__34301_34804 < count__34300_34803)){
var vec__34324_34805 = chunk__34299_34802.cljs$core$IIndexed$_nth$arity$2(null,i__34301_34804);
var name_34806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34324_34805,(0),null);
var map__34327_34807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34324_34805,(1),null);
var map__34327_34808__$1 = cljs.core.__destructure_map(map__34327_34807);
var doc_34809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34327_34808__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34327_34808__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34806], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34810], 0));

if(cljs.core.truth_(doc_34809)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34809], 0));
} else {
}


var G__34811 = seq__34298_34801;
var G__34812 = chunk__34299_34802;
var G__34813 = count__34300_34803;
var G__34814 = (i__34301_34804 + (1));
seq__34298_34801 = G__34811;
chunk__34299_34802 = G__34812;
count__34300_34803 = G__34813;
i__34301_34804 = G__34814;
continue;
} else {
var temp__5804__auto___34815 = cljs.core.seq(seq__34298_34801);
if(temp__5804__auto___34815){
var seq__34298_34816__$1 = temp__5804__auto___34815;
if(cljs.core.chunked_seq_QMARK_(seq__34298_34816__$1)){
var c__5568__auto___34817 = cljs.core.chunk_first(seq__34298_34816__$1);
var G__34818 = cljs.core.chunk_rest(seq__34298_34816__$1);
var G__34819 = c__5568__auto___34817;
var G__34820 = cljs.core.count(c__5568__auto___34817);
var G__34821 = (0);
seq__34298_34801 = G__34818;
chunk__34299_34802 = G__34819;
count__34300_34803 = G__34820;
i__34301_34804 = G__34821;
continue;
} else {
var vec__34332_34822 = cljs.core.first(seq__34298_34816__$1);
var name_34823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34332_34822,(0),null);
var map__34335_34824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34332_34822,(1),null);
var map__34335_34825__$1 = cljs.core.__destructure_map(map__34335_34824);
var doc_34826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34335_34825__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34335_34825__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34823], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34827], 0));

if(cljs.core.truth_(doc_34826)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34826], 0));
} else {
}


var G__34832 = cljs.core.next(seq__34298_34816__$1);
var G__34833 = null;
var G__34834 = (0);
var G__34835 = (0);
seq__34298_34801 = G__34832;
chunk__34299_34802 = G__34833;
count__34300_34803 = G__34834;
i__34301_34804 = G__34835;
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

var seq__34341 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34342 = null;
var count__34343 = (0);
var i__34344 = (0);
while(true){
if((i__34344 < count__34343)){
var role = chunk__34342.cljs$core$IIndexed$_nth$arity$2(null,i__34344);
var temp__5804__auto___34842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34842__$1)){
var spec_34843 = temp__5804__auto___34842__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34843)], 0));
} else {
}


var G__34844 = seq__34341;
var G__34845 = chunk__34342;
var G__34846 = count__34343;
var G__34847 = (i__34344 + (1));
seq__34341 = G__34844;
chunk__34342 = G__34845;
count__34343 = G__34846;
i__34344 = G__34847;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__34341);
if(temp__5804__auto____$1){
var seq__34341__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34341__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34341__$1);
var G__34848 = cljs.core.chunk_rest(seq__34341__$1);
var G__34849 = c__5568__auto__;
var G__34850 = cljs.core.count(c__5568__auto__);
var G__34851 = (0);
seq__34341 = G__34848;
chunk__34342 = G__34849;
count__34343 = G__34850;
i__34344 = G__34851;
continue;
} else {
var role = cljs.core.first(seq__34341__$1);
var temp__5804__auto___34852__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34852__$2)){
var spec_34854 = temp__5804__auto___34852__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34854)], 0));
} else {
}


var G__34855 = cljs.core.next(seq__34341__$1);
var G__34856 = null;
var G__34857 = (0);
var G__34858 = (0);
seq__34341 = G__34855;
chunk__34342 = G__34856;
count__34343 = G__34857;
i__34344 = G__34858;
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
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34861 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34862 = cljs.core.ex_cause(t);
via = G__34861;
t = G__34862;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__34422 = datafied_throwable;
var map__34422__$1 = cljs.core.__destructure_map(map__34422);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34422__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34422__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34422__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34423 = cljs.core.last(via);
var map__34423__$1 = cljs.core.__destructure_map(map__34423);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34423__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34423__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34425 = data;
var map__34425__$1 = cljs.core.__destructure_map(map__34425);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34425__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34425__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34425__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34426 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34426__$1 = cljs.core.__destructure_map(map__34426);
var top_data = map__34426__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34468 = phase;
var G__34468__$1 = (((G__34468 instanceof cljs.core.Keyword))?G__34468.fqn:null);
switch (G__34468__$1) {
case "read-source":
var map__34472 = data;
var map__34472__$1 = cljs.core.__destructure_map(map__34472);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34472__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34477 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34477__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34477,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34477);
var G__34477__$2 = (cljs.core.truth_((function (){var fexpr__34487 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34487.cljs$core$IFn$_invoke$arity$1 ? fexpr__34487.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34487.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34477__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34477__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34477__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34488 = top_data;
var G__34488__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34488,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34488);
var G__34488__$2 = (cljs.core.truth_((function (){var fexpr__34492 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34492.cljs$core$IFn$_invoke$arity$1 ? fexpr__34492.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34492.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34488__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34488__$1);
var G__34488__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34488__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34488__$2);
var G__34488__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34488__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34488__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34488__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34488__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34515 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(3),null);
var G__34531 = top_data;
var G__34531__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34531,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34531);
var G__34531__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34531__$1);
var G__34531__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34531__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34531__$2);
var G__34531__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34531__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34531__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34531__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34531__$4;
}

break;
case "execution":
var vec__34562 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34405_SHARP_){
var or__5045__auto__ = (p1__34405_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__34578 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34578.cljs$core$IFn$_invoke$arity$1 ? fexpr__34578.cljs$core$IFn$_invoke$arity$1(p1__34405_SHARP_) : fexpr__34578.call(null,p1__34405_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__34588 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34588__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34588,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34588);
var G__34588__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34588__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34588__$1);
var G__34588__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34588__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34588__$2);
var G__34588__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34588__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34588__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34588__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34588__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34630){
var map__34631 = p__34630;
var map__34631__$1 = cljs.core.__destructure_map(map__34631);
var triage_data = map__34631__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34631__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34641 = phase;
var G__34641__$1 = (((G__34641 instanceof cljs.core.Keyword))?G__34641.fqn:null);
switch (G__34641__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34644 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34645 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34646 = loc;
var G__34647 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34650_34900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34651_34901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34652_34902 = true;
var _STAR_print_fn_STAR__temp_val__34653_34903 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34652_34902);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34653_34903);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34624_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34624_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34651_34901);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34650_34900);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34644,G__34645,G__34646,G__34647) : format.call(null,G__34644,G__34645,G__34646,G__34647));

break;
case "macroexpansion":
var G__34667 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34668 = cause_type;
var G__34669 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34670 = loc;
var G__34671 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34667,G__34668,G__34669,G__34670,G__34671) : format.call(null,G__34667,G__34668,G__34669,G__34670,G__34671));

break;
case "compile-syntax-check":
var G__34673 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34674 = cause_type;
var G__34675 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34676 = loc;
var G__34677 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34673,G__34674,G__34675,G__34676,G__34677) : format.call(null,G__34673,G__34674,G__34675,G__34676,G__34677));

break;
case "compilation":
var G__34683 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34684 = cause_type;
var G__34685 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34686 = loc;
var G__34687 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34683,G__34684,G__34685,G__34686,G__34687) : format.call(null,G__34683,G__34684,G__34685,G__34686,G__34687));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34700 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34701 = symbol;
var G__34702 = loc;
var G__34703 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34713_34915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34714_34916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34715_34917 = true;
var _STAR_print_fn_STAR__temp_val__34716_34918 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34715_34917);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34716_34918);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34626_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34626_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34714_34916);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34713_34915);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34700,G__34701,G__34702,G__34703) : format.call(null,G__34700,G__34701,G__34702,G__34703));
} else {
var G__34757 = "Execution error%s at %s(%s).\n%s\n";
var G__34758 = cause_type;
var G__34759 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34760 = loc;
var G__34761 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34757,G__34758,G__34759,G__34760,G__34761) : format.call(null,G__34757,G__34758,G__34759,G__34760,G__34761));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34641__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
