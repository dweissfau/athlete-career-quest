goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__11984__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11985__auto__ = (function (){var switch__11266__auto__ = (function (state_20518){
var state_val_20519 = (state_20518[(1)]);
if((state_val_20519 === (7))){
var inst_20514 = (state_20518[(2)]);
var state_20518__$1 = state_20518;
var statearr_20520_20592 = state_20518__$1;
(statearr_20520_20592[(2)] = inst_20514);

(statearr_20520_20592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (1))){
var state_20518__$1 = state_20518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20518__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_20519 === (4))){
var inst_20516 = (state_20518[(2)]);
var state_20518__$1 = state_20518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20518__$1,inst_20516);
} else {
if((state_val_20519 === (6))){
var inst_20512 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_20518__$1 = state_20518;
var statearr_20521_20593 = state_20518__$1;
(statearr_20521_20593[(2)] = inst_20512);

(statearr_20521_20593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (3))){
var inst_20495 = (state_20518[(7)]);
var state_20518__$1 = state_20518;
if(cljs.core.truth_(inst_20495)){
var statearr_20522_20594 = state_20518__$1;
(statearr_20522_20594[(1)] = (5));

} else {
var statearr_20523_20595 = state_20518__$1;
(statearr_20523_20595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (12))){
var inst_20509 = (state_20518[(2)]);
var inst_20495 = inst_20509;
var state_20518__$1 = (function (){var statearr_20525 = state_20518;
(statearr_20525[(7)] = inst_20495);

return statearr_20525;
})();
var statearr_20526_20596 = state_20518__$1;
(statearr_20526_20596[(2)] = null);

(statearr_20526_20596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (2))){
var inst_20494 = (state_20518[(2)]);
var inst_20495 = inst_20494;
var state_20518__$1 = (function (){var statearr_20527 = state_20518;
(statearr_20527[(7)] = inst_20495);

return statearr_20527;
})();
var statearr_20528_20599 = state_20518__$1;
(statearr_20528_20599[(2)] = null);

(statearr_20528_20599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (11))){
var _ = (function (){var statearr_20529 = state_20518;
(statearr_20529[(4)] = cljs.core.rest((state_20518[(4)])));

return statearr_20529;
})();
var state_20518__$1 = state_20518;
var ex20524 = (state_20518__$1[(2)]);
var statearr_20530_20600 = state_20518__$1;
(statearr_20530_20600[(5)] = ex20524);


var statearr_20531_20601 = state_20518__$1;
(statearr_20531_20601[(1)] = (10));

(statearr_20531_20601[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (9))){
var inst_20507 = (state_20518[(2)]);
var state_20518__$1 = (function (){var statearr_20532 = state_20518;
(statearr_20532[(8)] = inst_20507);

return statearr_20532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20518__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_20519 === (5))){
var state_20518__$1 = state_20518;
var statearr_20533_20604 = state_20518__$1;
(statearr_20533_20604[(2)] = null);

(statearr_20533_20604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (10))){
var inst_20498 = (state_20518[(2)]);
var state_20518__$1 = (function (){var statearr_20534 = state_20518;
(statearr_20534[(9)] = inst_20498);

return statearr_20534;
})();
var statearr_20535_20605 = state_20518__$1;
(statearr_20535_20605[(2)] = null);

(statearr_20535_20605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (8))){
var inst_20495 = (state_20518[(7)]);
var _ = (function (){var statearr_20536 = state_20518;
(statearr_20536[(4)] = cljs.core.cons((11),(state_20518[(4)])));

return statearr_20536;
})();
var inst_20504 = (inst_20495.cljs$core$IFn$_invoke$arity$0 ? inst_20495.cljs$core$IFn$_invoke$arity$0() : inst_20495.call(null));
var ___$1 = (function (){var statearr_20537 = state_20518;
(statearr_20537[(4)] = cljs.core.rest((state_20518[(4)])));

return statearr_20537;
})();
var state_20518__$1 = state_20518;
var statearr_20538_20606 = state_20518__$1;
(statearr_20538_20606[(2)] = inst_20504);

(statearr_20538_20606[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__11267__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__11267__auto____0 = (function (){
var statearr_20539 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20539[(0)] = com$fulcrologic$guardrails$core$state_machine__11267__auto__);

(statearr_20539[(1)] = (1));

return statearr_20539;
});
var com$fulcrologic$guardrails$core$state_machine__11267__auto____1 = (function (state_20518){
while(true){
var ret_value__11268__auto__ = (function (){try{while(true){
var result__11269__auto__ = switch__11266__auto__(state_20518);
if(cljs.core.keyword_identical_QMARK_(result__11269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11269__auto__;
}
break;
}
}catch (e20540){var ex__11270__auto__ = e20540;
var statearr_20541_20607 = state_20518;
(statearr_20541_20607[(2)] = ex__11270__auto__);


if(cljs.core.seq((state_20518[(4)]))){
var statearr_20542_20608 = state_20518;
(statearr_20542_20608[(1)] = cljs.core.first((state_20518[(4)])));

} else {
throw ex__11270__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20609 = state_20518;
state_20518 = G__20609;
continue;
} else {
return ret_value__11268__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__11267__auto__ = function(state_20518){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__11267__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__11267__auto____1.call(this,state_20518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__11267__auto____0;
com$fulcrologic$guardrails$core$state_machine__11267__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__11267__auto____1;
return com$fulcrologic$guardrails$core$state_machine__11267__auto__;
})()
})();
var state__11986__auto__ = (function (){var statearr_20543 = f__11985__auto__();
(statearr_20543[(6)] = c__11984__auto__);

return statearr_20543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11986__auto__);
}));

return c__11984__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__20544 = data;
var map__20544__$1 = cljs.core.__destructure_map(map__20544);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,12050,12050,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__20555,spec,value){
var map__20556 = p__20555;
var map__20556__$1 = cljs.core.__destructure_map(map__20556);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20556__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20556__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20556__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20556__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20556__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20556__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20556__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_20614 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__20615 = (function (){var and__5000__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return vararg_QMARK_;
} else {
return and__5000__auto__;
}
})();
var varg_20616 = (cljs.core.truth_(vargs_QMARK__20615)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_20617 = (cljs.core.truth_(vargs_QMARK__20615)?((cljs.core.map_QMARK_(varg_20616))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_20616))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_20616))):value);
var valid_exception_20618 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_20617)){
} else {
var problem_20620 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_20617,expound_opts);
var description_20621 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_20620)].join('');
var context_20622 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5000__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5000__auto__)){
return tap_GT__QMARK_;
} else {
return and__5000__auto__;
}
})())){
var G__20563_20623 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_20617)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__20563_20623) : com.fulcrologic.guardrails.core.tap.call(null,G__20563_20623));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_20618,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__20565 = description_20621;
if(cljs.core.truth_(context_20622)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_20622),G__20565].join('');
} else {
return G__20565;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_20622], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_20617], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_20621,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = callsite;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e20561){var e_20627 = e20561;
com.fulcrologic.guardrails.utils.report_exception(e_20627,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_20628 = (com.fulcrologic.guardrails.core.now_ms() - start_20614);
if((duration_20628 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_20628),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_20618))){
throw cljs.core.deref(valid_exception_20618);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
