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
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__30698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_42749){
var state_val_42750 = (state_42749[(1)]);
if((state_val_42750 === (7))){
var inst_42744 = (state_42749[(2)]);
var state_42749__$1 = state_42749;
var statearr_42751_42884 = state_42749__$1;
(statearr_42751_42884[(2)] = inst_42744);

(statearr_42751_42884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (1))){
var state_42749__$1 = state_42749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42749__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_42750 === (4))){
var inst_42747 = (state_42749[(2)]);
var state_42749__$1 = state_42749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42749__$1,inst_42747);
} else {
if((state_val_42750 === (6))){
var inst_42742 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_42749__$1 = state_42749;
var statearr_42756_42886 = state_42749__$1;
(statearr_42756_42886[(2)] = inst_42742);

(statearr_42756_42886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (3))){
var inst_42724 = (state_42749[(7)]);
var state_42749__$1 = state_42749;
if(cljs.core.truth_(inst_42724)){
var statearr_42757_42890 = state_42749__$1;
(statearr_42757_42890[(1)] = (5));

} else {
var statearr_42759_42891 = state_42749__$1;
(statearr_42759_42891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (12))){
var inst_42739 = (state_42749[(2)]);
var inst_42724 = inst_42739;
var state_42749__$1 = (function (){var statearr_42762 = state_42749;
(statearr_42762[(7)] = inst_42724);

return statearr_42762;
})();
var statearr_42763_42892 = state_42749__$1;
(statearr_42763_42892[(2)] = null);

(statearr_42763_42892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (2))){
var inst_42722 = (state_42749[(2)]);
var inst_42724 = inst_42722;
var state_42749__$1 = (function (){var statearr_42766 = state_42749;
(statearr_42766[(7)] = inst_42724);

return statearr_42766;
})();
var statearr_42768_42894 = state_42749__$1;
(statearr_42768_42894[(2)] = null);

(statearr_42768_42894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (11))){
var _ = (function (){var statearr_42769 = state_42749;
(statearr_42769[(4)] = cljs.core.rest((state_42749[(4)])));

return statearr_42769;
})();
var state_42749__$1 = state_42749;
var ex42760 = (state_42749__$1[(2)]);
var statearr_42773_42895 = state_42749__$1;
(statearr_42773_42895[(5)] = ex42760);


var statearr_42774_42896 = state_42749__$1;
(statearr_42774_42896[(1)] = (10));

(statearr_42774_42896[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (9))){
var inst_42737 = (state_42749[(2)]);
var state_42749__$1 = (function (){var statearr_42778 = state_42749;
(statearr_42778[(8)] = inst_42737);

return statearr_42778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42749__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_42750 === (5))){
var state_42749__$1 = state_42749;
var statearr_42780_42897 = state_42749__$1;
(statearr_42780_42897[(2)] = null);

(statearr_42780_42897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (10))){
var inst_42727 = (state_42749[(2)]);
var state_42749__$1 = (function (){var statearr_42781 = state_42749;
(statearr_42781[(9)] = inst_42727);

return statearr_42781;
})();
var statearr_42782_42898 = state_42749__$1;
(statearr_42782_42898[(2)] = null);

(statearr_42782_42898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (8))){
var inst_42724 = (state_42749[(7)]);
var _ = (function (){var statearr_42783 = state_42749;
(statearr_42783[(4)] = cljs.core.cons((11),(state_42749[(4)])));

return statearr_42783;
})();
var inst_42734 = (inst_42724.cljs$core$IFn$_invoke$arity$0 ? inst_42724.cljs$core$IFn$_invoke$arity$0() : inst_42724.call(null));
var ___$1 = (function (){var statearr_42784 = state_42749;
(statearr_42784[(4)] = cljs.core.rest((state_42749[(4)])));

return statearr_42784;
})();
var state_42749__$1 = state_42749;
var statearr_42785_42899 = state_42749__$1;
(statearr_42785_42899[(2)] = inst_42734);

(statearr_42785_42899[(1)] = (9));


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
var com$fulcrologic$guardrails$core$state_machine__29474__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__29474__auto____0 = (function (){
var statearr_42786 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42786[(0)] = com$fulcrologic$guardrails$core$state_machine__29474__auto__);

(statearr_42786[(1)] = (1));

return statearr_42786;
});
var com$fulcrologic$guardrails$core$state_machine__29474__auto____1 = (function (state_42749){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_42749);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e42787){var ex__29477__auto__ = e42787;
var statearr_42788_42902 = state_42749;
(statearr_42788_42902[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_42749[(4)]))){
var statearr_42789_42904 = state_42749;
(statearr_42789_42904[(1)] = cljs.core.first((state_42749[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42906 = state_42749;
state_42749 = G__42906;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__29474__auto__ = function(state_42749){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__29474__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__29474__auto____1.call(this,state_42749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__29474__auto____0;
com$fulcrologic$guardrails$core$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__29474__auto____1;
return com$fulcrologic$guardrails$core$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_42790 = f__30699__auto__();
(statearr_42790[(6)] = c__30698__auto__);

return statearr_42790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));

return c__30698__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__42795 = data;
var map__42795__$1 = cljs.core.__destructure_map(map__42795);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42795__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
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
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11858,11858,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__42814,spec,value){
var map__42815 = p__42814;
var map__42815__$1 = cljs.core.__destructure_map(map__42815);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42815__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_42917 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__42918 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_42919 = (cljs.core.truth_(vargs_QMARK__42918)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_42920 = (cljs.core.truth_(vargs_QMARK__42918)?((cljs.core.map_QMARK_(varg_42919))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_42919))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_42919))):value);
var valid_exception_42921 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_42920)){
} else {
var problem_42926 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_42920,expound_opts);
var description_42927 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_42926)].join('');
var context_42928 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5043__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5043__auto__)){
return tap_GT__QMARK_;
} else {
return and__5043__auto__;
}
})())){
var G__42825_42929 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_42920)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__42825_42929) : com.fulcrologic.guardrails.core.tap.call(null,G__42825_42929));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_42921,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__42826 = description_42927;
if(cljs.core.truth_(context_42928)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_42928),G__42826].join('');
} else {
return G__42826;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_42928], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_42920], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_42927,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e42821){var e_42934 = e42821;
com.fulcrologic.guardrails.utils.report_exception(e_42934,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_42935 = (com.fulcrologic.guardrails.core.now_ms() - start_42917);
if((duration_42935 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_42935),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_42921))){
throw cljs.core.deref(valid_exception_42921);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
