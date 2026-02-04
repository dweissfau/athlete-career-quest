goog.provide('com.fulcrologic.fulcro.routing.dynamic_routing');
goog.scope(function(){
  com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * INTERNAL USE ONLY. Not guaranteed to be available at runtime in production builds. This is used to aid in giving
 * development-time warnings/errors.
 * 
 * Class of the routing target component, available in the notifications fns
 * (:will-enter, :route-cancelled, :will-leave)
 */
com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = null;
/**
 * Returns a vector that describes the sub-path that a given route target represents. String elements represent
 *   explicit path elements, and keywords represent variable values (which are always pulled as strings).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_segment = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_segment(class$){
var result = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5000__auto__)){
return (!((((result == null)) || (cljs.core.vector_QMARK_(result)))));
} else {
return and__5000__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route segment should be a vector!"], null);
}),null)),null,-966861029);
} else {
}

return result;
});
/**
 * Returns the function that should be called if this target was in a deferred state and a different routing choice was made. Is given the same route parameters that were sent to `will-enter`.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_route_cancelled(class$){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-cancelled","route-cancelled",-1402397214)], 0));
});
/**
 * Universal CLJC version of route-cancelled.  Don't use the protocol method in CLJ.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_cancelled(class$,route_params){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled(class$);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__32582 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__32583 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__32583);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(route_params) : f.call(null,route_params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__32582);
}} else {
return null;
}
});
/**
 * Returns the function that is called before a route target is activated (if the route segment of interest has changed and the
 *   target of the result is this target).  MUST return (r/route-immediate ident) or (r/route-deferred ident) to indicate
 *   what ident should be used in app state to connect the router's join.  If deferred, the router must cause a call to
 *   the r/target-ready mutation (or use the target-ready* mutation helper) with a {:target ident} parameter to indicate
 *   that the route target is loaded and ready for display.
 * 
 *   `params` will be a map from any keywords found in `route-segment` to the string value of that path element.
 * 
 *   WARNING: This method MUST be side-effect free.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_enter(class$){
var temp__5802__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-enter","will-enter",-692415624)], 0));
if(cljs.core.truth_(temp__5802__auto__)){
var will_enter = temp__5802__auto__;
return will_enter;
} else {
var ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(ident)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component must have an ident for routing to work properly:",com.fulcrologic.fulcro.raw.components.component_name(class$),"See https://book.fulcrologic.com/#err-dr-comp-needs-ident"], null);
}),null)),null,-748602993);
}

return (function (_,___$1){
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1(ident) : com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.call(null,ident));
});
}
});
/**
 * Universal CLJC version of will-enter.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_enter(class$,app__$1,params){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter(class$);
if(cljs.core.truth_(temp__5804__auto__)){
var will_enter = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__32584 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__32585 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__32585);

try{return (will_enter.cljs$core$IFn$_invoke$arity$2 ? will_enter.cljs$core$IFn$_invoke$arity$2(app__$1,params) : will_enter.call(null,app__$1,params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__32584);
}} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)));
});
/**
 * Returns the function of a route target to be called with
 *   the current component and props. If it returns `true` then the routing operation will continue.  If it returns `false`
 *   then whatever new route was requested will be completely abandoned. If this component has a `allow-route-change?`
 *   then the return value of will-leave will be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_leave(this$){
var or__5002__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.constantly(true);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_leave(c,props){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave(c);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__32586 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__32587 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__32587);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(c,props) : f.call(null,c,props));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__32586);
}} else {
return null;
}
});
/**
 * Returns the function of a route target to be called with the current component and props.
 * If it returns `true` then the routing operation can continue.  If it returns `false`
 * then whatever new route was requested will be completely abandoned. This handler MUST NOT side-effect, and
 * may be called multiple times on a single route request.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_allow_route_change_QMARK_(this$){
var or__5002__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"allow-route-change?","allow-route-change?",173143289)], 0));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5804__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(temp__5804__auto__)){
var will_leave = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEPRECATED USE OF `:will-leave` to check for allowable routing. You should add :allow-route-change? to: ",com.fulcrologic.fulcro.raw.components.component_name(this$),"See https://book.fulcrologic.com/#warn-routing-will-leave-deprecated"], null);
}),null)),null,-1933603289);

return (function (){
var G__32588 = this$;
var G__32589 = com.fulcrologic.fulcro.raw.components.props(this$);
return (will_leave.cljs$core$IFn$_invoke$arity$2 ? will_leave.cljs$core$IFn$_invoke$arity$2(G__32588,G__32589) : will_leave.call(null,G__32588,G__32589));
});
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$allow_route_change_QMARK_(c){
try{var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_(c);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__32591 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__32592 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__32592);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__32591);
}} else {
return null;
}
}catch (e32590){var e = e32590;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot evaluate route change. Assuming ok. Exception message: ",cljs.core.ex_message(e),"See https://book.fulcrologic.com/#err-dr-cant-eval-route-chng"], null);
}),null)),null,-202376851);

return true;
}});
com.fulcrologic.fulcro.routing.dynamic_routing.route_lifecycle_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_lifecycle_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0)));
});
/**
 * Returns a set of classes to which this router routes.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_targets(router){
return cljs.core.set(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(router,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ident_matches_expectation_QMARK_(p__32593,p__32594){
var vec__32595 = p__32593;
var expected_table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32595,(0),null);
var maybe_expected_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32595,(1),null);
var vec__32598 = p__32594;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32598,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32598,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected_table,table)) && ((((maybe_expected_id == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maybe_expected_id,id)))));
});
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$check_ident_matches_expectation_QMARK_(fn_name,ident){
if(cljs.core.truth_((function (){var and__5000__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
if(cljs.core.truth_(and__5000__auto____$1)){
return (!(com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY),ident)));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,137,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_name," was invoked with the ident ",ident," which doesn't seem to match the ident of the wrapping component (class ",com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_," , ident [",cljs.core.first(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY))," ...]) See https://book.fulcrologic.com/#err-dr-ident-mismatch"], null);
}),null)),null,484915222);
} else {
return null;
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system that you would like this target to be
 * routed to as soon as possible. UI switching defaults to depth-first to prevent flicker.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_immediate(ident){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-immediate",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),true], null));
});
/**
 * Used as a return value from `will-enter`. Instructs the router to run the `completion-fn`. The completion function
 * *must* use the mutation `target-ready` or function `target-ready!` to indicate when it is ready for the target to
 * appear on-screen.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_deferred(ident,completion_fn){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-deferred",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),false,new cljs.core.Keyword(null,"fn","fn",-1175266204),completion_fn], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$immediate_QMARK_(ident){
var G__32601 = ident;
var G__32601__$1 = (((G__32601 == null))?null:cljs.core.meta(G__32601));
if((G__32601__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"immediate","immediate",-1684692069).cljs$core$IFn$_invoke$arity$1(G__32601__$1);
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system to execute the `txn` in *routing path order*,
 * and optionally couples these operations into a single transaction. This can be used in cases where you need the
 * side-effects (potentially full-stack) to complete for a parent target before those of a nested target.
 * 
 * The `options` can contain:
 * 
 * * `:optimistic?`  (default false) - When true, don't wait for this transaction to (full-stack) complete before starting
 *   child target effects.
 * * `:route-immediate?` (default false) - When true, apply the UI routing immediately instead of waiting for the transaction
 *   to finish. Of course the UI of the target should then be willing to tolerate the lack of any full-stack result.
 * * `:show-early?` - (default false) - When true each transaction that completes will cause that target to appear. When
 *  false the target won't appear until after all children have completed their non-optimistic path-based transactions.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_with_path_ordered_transaction(var_args){
var G__32603 = arguments.length;
switch (G__32603) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2 = (function (ident,txn){
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3(ident,txn,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3 = (function (ident,txn,p__32604){
var map__32605 = p__32604;
var map__32605__$1 = cljs.core.__destructure_map(map__32605);
var options = map__32605__$1;
var optimistic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32605__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var route_immediate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32605__$1,new cljs.core.Keyword(null,"route-immediate?","route-immediate?",-681888697));
var optimistic_QMARK___$1 = (((!((optimistic_QMARK_ == null))))?optimistic_QMARK_:false);
var route_immediate_QMARK___$1 = (((!((route_immediate_QMARK_ == null))))?route_immediate_QMARK_:false);
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295),true,new cljs.core.Keyword(null,"immediate","immediate",-1684692069),route_immediate_QMARK___$1,new cljs.core.Keyword(null,"txn","txn",-469204789),txn,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),optimistic_QMARK___$1], null));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$apply_route_STAR_(state_map,p__32606){
var map__32607 = p__32606;
var map__32607__$1 = cljs.core.__destructure_map(map__32607);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32607__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32607__$1,new cljs.core.Keyword(null,"target","target",253001721));
var router_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(router));
var router_id = cljs.core.second(router);
var target_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(target));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,186,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying route ident",target,"to router",router_id], null);
}),null)),null,122254077);

if((router_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,188,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* was called without a proper :router argument. See https://book.fulcrologic.com/#err-dr-apply-route-lacks-router"], null);
}),null)),null,-1981219398);
} else {
}

if((target_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,190,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* for router ",router_class,"was given a target that did not have a component. ","Did you remember to call route-deferred or route-immediate? See https://book.fulcrologic.com/#err-dr-apply-route-no-component"], null);
}),null)),null,-699392701);
} else {
}

return com.fulcrologic.fulcro.raw.components.set_query_STAR_(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)),target),router,cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),router_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(target_class,state_map)], null)], null)], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_for_pending_target(state_map,target){
var routers = (function (){var G__32608 = state_map;
var G__32608__$1 = (((G__32608 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(G__32608));
if((G__32608__$1 == null)){
return null;
} else {
return cljs.core.vals(G__32608__$1);
}
})();
var router_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,r){
if(cljs.core.truth_((function (){var and__5000__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5000__auto__)){
return (new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r) == null);
} else {
return and__5000__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,201,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a router in state that is missing an ID. This indicates that","you forgot to compose it into your initial state! It will fail to operate properly. See https://book.fulcrologic.com/#err-dr-router-missing-id"], null);
}),null)),null,-626404417);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,(function (){var G__32609 = r;
var G__32609__$1 = (((G__32609 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373).cljs$core$IFn$_invoke$arity$1(G__32609));
if((G__32609__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__32609__$1);
}
})())){
return cljs.core.reduced(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r));
} else {
return null;
}
}),null,routers);
return router_id;
});
/**
 * Mutation: Indicate that a target is ready.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),(function (fulcro_mutation_env_symbol){
var map__32610 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__32610__$1 = cljs.core.__destructure_map(map__32610);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32610__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function com$fulcrologic$fulcro$routing$dynamic_routing$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__32611){
var map__32612 = p__32611;
var map__32612__$1 = cljs.core.__destructure_map(map__32612);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32612__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__32613_32842 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__32614_32843 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__32614_32843);

try{var state_map_32844 = com.fulcrologic.fulcro.application.current_state(app__$1);
var router_id_32845 = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map_32844,target);
if(cljs.core.truth_(router_id_32845)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,217,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id_32845,"notified that pending route is ready."], null);
}),null)),null,377904996);

if(cljs.core.truth_((function (){var and__5000__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map_32844,target) == null);
} else {
return and__5000__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,219,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),"should route to",target,"but there is no data in the DB for the ident.","Perhaps you supplied a wrong ident? See https://book.fulcrologic.com/#err-dr-target-ready-missing-data"], null);
}),null)),null,1766358795);
} else {
}

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,router_id_32845,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,222,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another. See https://book.fulcrologic.com/#err-dr-target-ready-no-router-waiting"], null);
}),null)),null,933275799);
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__32613_32842);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__32615 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__32616 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__32616);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__32615);
}})], null);
}));
/**
 * Indicate a target is ready.  Safe to use from within mutations.
 * 
 *   target - The ident that was originally listed as a deferred target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_BANG_(component_or_app,target){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32617 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__32617) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__32617));
})()], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
/**
 * Returns the elements of actual-path that match the route-segment definition.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix = (function com$fulcrologic$fulcro$routing$dynamic_routing$matching_prefix(route_segment,actual_path){
var matching_segment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__32618){
var vec__32619 = p__32618;
var expected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32619,(1),null);
if(((typeof expected === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,actual);
} else {
if((((expected instanceof cljs.core.Keyword)) && (cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual));
} else {
return result;

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),route_segment,actual_path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching_segment),cljs.core.count(route_segment))){
return matching_segment;
} else {
return null;
}
});
/**
 * Get the class of the component that is currently being routed to.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route_class(this$){
var state_map = com.fulcrologic.fulcro.application.current_state(com.fulcrologic.fulcro.raw.components.any__GT_app(this$));
var class$ = (function (){var G__32623 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(this$,state_map);
var G__32623__$1 = (((G__32623 == null))?null:edn_query_language.core.query__GT_ast(G__32623));
var G__32623__$2 = (((G__32623__$1 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__32623__$1));
var G__32623__$3 = (((G__32623__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32622_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__32622_SHARP_));
}),G__32623__$2));
var G__32623__$4 = (((G__32623__$3 == null))?null:cljs.core.first(G__32623__$3));
if((G__32623__$4 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__32623__$4);
}
})();
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(com.fulcrologic.fulcro.raw.components.class__GT_registry_key(class$)):class$);
return class$__$1;
});
/**
 * Given a router class and a path segment, returns the class of *that router's* target that accepts the given URI path,
 *   which is a vector of (string) URI components.
 * 
 *   Returns nil if there is no target that accepts the path, or a map containing:
 * 
 *   {:target class
 * :matching-prefix prefix}
 * 
 *   where `class` is the component class that accepts the path (the target, NOT the router), and `matching-prefix` is the
 *   portion of the path that is accepted by that class.
 * 
 *   NOTE: If more than one target matches, then the target with the longest match will be returned. A warning will be
 *   printed if more than one match of equal length is found.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target(router_class,path){
if(cljs.core.truth_((function (){var and__5000__auto__ = router_class;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class);
} else {
return and__5000__auto__;
}
})())){
var targets = com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_class);
var matches = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"length","length",588987862),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,target_class){
var prefix = (function (){var and__5000__auto__ = target_class;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_(target_class);
if(and__5000__auto____$1){
var G__32625 = target_class;
var G__32625__$1 = (((G__32625 == null))?null:com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__32625));
if((G__32625__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix(G__32625__$1,path);
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = prefix;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(prefix);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count(prefix),new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173),prefix,new cljs.core.Keyword(null,"target","target",253001721),target_class], null));
} else {
return result;
}
}),cljs.core.PersistentVector.EMPTY,targets)));
var max_length = (function (){var G__32626 = matches;
var G__32626__$1 = (((G__32626 == null))?null:cljs.core.first(G__32626));
if((G__32626__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__32626__$1);
}
})();
var match = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32624_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_length,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__32624_SHARP_));
}),matches);
if(cljs.core.truth_(cljs.core.second(match))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,296,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target matches",path,"See https://book.fulcrologic.com/#warn-routing-multiple-target-matches"], null);
}),null)),null,-903651328);
} else {
}

return cljs.core.first(match);
} else {
return null;
}
});
/**
 * Returns true if the given component is a router that manages a route target that will accept the given path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$accepts_route_QMARK_(component,path){
return cljs.core.boolean$(com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component,path));
});
/**
 * Returns the AST node for a query that represents the router that has a target that can accept the given path. This is a breadth-first
 *   search.
 * 
 *   ast - A query AST node
 *   path - A vector of the current URI segments.
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_route(p__32629,path){
var map__32630 = p__32629;
var map__32630__$1 = cljs.core.__destructure_map(map__32630);
var ast_node = map__32630__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32630__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__5002__auto__ = (function (){var and__5000__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(component,path);
if(and__5000__auto__){
return ast_node;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.some((function (p1__32627_SHARP_){
var and__5000__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__32627_SHARP_),path);
if(and__5000__auto__){
return p1__32627_SHARP_;
} else {
return and__5000__auto__;
}
}),children);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.some((function (p1__32628_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2(p1__32628_SHARP_,path) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.call(null,p1__32628_SHARP_,path));
}),children);
}
}
});
/**
 * Returns the AST node for a query that represents the closest "live" (on-screen) router
 * 
 *   ast - A query AST node
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router(app__$1,p__32633){
var map__32634 = p__32633;
var map__32634__$1 = cljs.core.__destructure_map(map__32634);
var ast_node = map__32634__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32634__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var live_router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router_$_live_router_QMARK_(c){
return ((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(c)) && (cljs.core.boolean$(com.fulcrologic.fulcro.components.class__GT_any(app__$1,c))));
});
var or__5002__auto__ = (function (){var and__5000__auto__ = live_router_QMARK_(component);
if(cljs.core.truth_(and__5000__auto__)){
return ast_node;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.some((function (p1__32631_SHARP_){
var and__5000__auto__ = live_router_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__32631_SHARP_));
if(cljs.core.truth_(and__5000__auto__)){
return p1__32631_SHARP_;
} else {
return and__5000__auto__;
}
}),children);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.some((function (p1__32632_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2(app__$1,p1__32632_SHARP_) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.call(null,app__$1,p1__32632_SHARP_));
}),children);
}
}
});
/**
 * Mutation: Indicate that a given route is ready and should show the result.
 * 
 *   router - The ident of the router, with metadata :component that is the class of the router.
 *   target - The ident of the target route, with metadata :component that is the class of the target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null),(function (fulcro_mutation_env_symbol){
var map__32635 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__32635__$1 = cljs.core.__destructure_map(map__32635);
var params = map__32635__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__32636){
var map__32637 = p__32636;
var map__32637__$1 = cljs.core.__destructure_map(map__32637);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__32638_32846 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__32639_32847 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__32639_32847);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,params);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__32638_32846);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__32640 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__32641 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__32641);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__32640);
}})], null);
}));
com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$mark_route_pending_STAR_(state_map,p__32642){
var map__32643 = p__32642;
var map__32643__$1 = cljs.core.__destructure_map(map__32643);
var params = map__32643__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32643__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32643__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),params);
});
var target_ready_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_STAR_(state_map,target){
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
return com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_(state_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)], null)));
} else {
return state_map;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$ready_handler(env){
var new_env = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268))),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),cljs.core.PersistentVector.EMPTY),target_ready_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"target","target",253001721))], 0));
var app__$1 = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(app__$1)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$fail_handler(env){
return env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_handler(p__32644){
var map__32645 = p__32644;
var map__32645__$1 = cljs.core.__destructure_map(map__32645);
var env = map__32645__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32645__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32645__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__32646 = event_data;
var map__32646__$1 = cljs.core.__destructure_map(map__32646);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32646__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32646__$1,new cljs.core.Keyword(null,"target","target",253001721));
var error_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32646__$1,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000));
var deferred_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32646__$1,new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20));
var path_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32646__$1,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var immediate_QMARK_ = com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_(target);
return com.fulcrologic.fulcro.ui_state_machines.store((cljs.core.truth_(immediate_QMARK_)?(function (){var new_env = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"routed","routed",-707282794));
if(cljs.core.truth_(app__$1)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
})():com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"error-timer","error-timer",347765002),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),cljs.core.PersistentArrayMap.EMPTY,error_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"delay-timer","delay-timer",-920427787),new cljs.core.Keyword(null,"waiting!","waiting!",373081239),cljs.core.PersistentArrayMap.EMPTY,deferred_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"deferred","deferred",-1976960688))),new cljs.core.Keyword(null,"target","target",253001721),target);
});
com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null));
/**
 * Internal algorithm: Returns a sequence of idents of the targets that the `new-route` goes through by analyzing the current
 *   application query and state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$proposed_new_path(var_args){
var G__32648 = arguments.length;
switch (G__32648) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4 = (function (this_or_app,relative_class_or_instance,new_route,timeouts_and_params){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class_or_instance,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__32650_32860 = root;
var map__32651_32861 = G__32650_32860;
var map__32651_32862__$1 = cljs.core.__destructure_map(map__32651_32861);
var component_32863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32651_32862__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_32864 = new_route;
var G__32650_32865__$1 = G__32650_32860;
var path_32866__$1 = path_32864;
while(true){
var map__32660_32867 = G__32650_32865__$1;
var map__32660_32868__$1 = cljs.core.__destructure_map(map__32660_32867);
var component_32869__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32660_32868__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_32870__$2 = path_32866__$1;
if(cljs.core.truth_((function (){var and__5000__auto__ = component_32869__$1;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_32869__$1);
} else {
return and__5000__auto__;
}
})())){
var map__32661_32873 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_32869__$1,path_32870__$2);
var map__32661_32874__$1 = cljs.core.__destructure_map(map__32661_32873);
var target_32875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32661_32874__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_32876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32661_32874__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_32877 = (function (){var G__32662 = target_32875;
var G__32662__$1 = (((G__32662 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__32662,state_map));
if((G__32662__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__32662__$1);
}
})();
var prefix_length_32878 = cljs.core.count(matching_prefix_32876);
var remaining_path_32879 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_32878,path_32870__$2));
var segment_32880 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_32875);
var params_32881 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result){
return (function (p,p__32663){
var vec__32664 = p__32663;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32664,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32664,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result))
,segment_32880,matching_prefix_32876));
var target_ident_32882 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_32875,app__$1,params_32881);
if((((!(edn_query_language.core.ident_QMARK_(target_ident_32882)))) || ((cljs.core.second(target_ident_32882) == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,444,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,params_32881,target_ident_32882,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_32875),"did not return a valid ident. Instead it returned: ",target_ident_32882,"See https://book.fulcrologic.com/#err-dr-will-enter-invalid-ident"], null);
});})(G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,params_32881,target_ident_32882,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result))
,null)),null,-563549662);
} else {
}

if(((edn_query_language.core.ident_QMARK_(target_ident_32882)) && ((!(cljs.core.contains_QMARK_((function (){var G__32667 = target_ident_32882;
if((G__32667 == null)){
return null;
} else {
return cljs.core.meta(G__32667);
}
})(),new cljs.core.Keyword(null,"immediate","immediate",-1684692069))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,447,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,params_32881,target_ident_32882,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_32875),"did not wrap the ident in route-immediate, route-deferred, or route-with-path-ordered-transaction. See https://book.fulcrologic.com/#err-dr-will-enter-missing-metadata"], null);
});})(G__32650_32865__$1,path_32866__$1,map__32661_32873,map__32661_32874__$1,target_32875,matching_prefix_32876,target_ast_32877,prefix_length_32878,remaining_path_32879,segment_32880,params_32881,target_ident_32882,map__32660_32867,map__32660_32868__$1,component_32869__$1,path_32870__$2,G__32650_32860,map__32651_32861,map__32651_32862__$1,component_32863,path_32864,app__$1,state_map,root_query,ast,root,result))
,null)),null,-815008444);
} else {
}

if(cljs.core.vector_QMARK_(target_ident_32882)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_32882,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_32875,new cljs.core.Keyword(null,"params","params",710516235),params_32881));
} else {
}

if(cljs.core.seq(remaining_path_32879)){
var G__32887 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_32877,remaining_path_32879);
var G__32888 = remaining_path_32879;
G__32650_32865__$1 = G__32887;
path_32866__$1 = G__32888;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$lang$maxFixedArity = 4);

/**
 * Tell active routers that they are about to leave the screen. Returns false if any of them deny the route change.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving = (function com$fulcrologic$fulcro$routing$dynamic_routing$signal_router_leaving(var_args){
var G__32671 = arguments.length;
switch (G__32671) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,timeouts_and_params);
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
var to_signal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var to_cancel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var _ = (function (){var G__32673 = root;
var map__32674 = G__32673;
var map__32674__$1 = cljs.core.__destructure_map(map__32674);
var node = map__32674__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32674__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining = new_path;
var G__32673__$1 = G__32673;
var new_path_remaining__$1 = new_path_remaining;
while(true){
var map__32675 = G__32673__$1;
var map__32675__$1 = cljs.core.__destructure_map(map__32675);
var node__$1 = map__32675__$1;
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32675__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining__$2 = new_path_remaining__$1;
if(cljs.core.truth_((function (){var and__5000__auto__ = component__$1;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__5000__auto__;
}
})())){
var new_target = cljs.core.first(new_path_remaining__$2);
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var map__32676 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)));
var map__32676__$1 = cljs.core.__destructure_map(map__32676);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32676__$1,new cljs.core.Keyword(null,"target","target",253001721));
var next_router = cljs.core.some(((function (G__32673__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__32676,map__32676__$1,target,map__32675,map__32675__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__32673,map__32674,map__32674__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (p1__32668_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__32668_SHARP_);
});})(G__32673__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__32676,map__32676__$1,target,map__32675,map__32675__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__32673,map__32674,map__32674__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel))
,children__$1);
if(edn_query_language.core.ident_QMARK_(target)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_cancel,cljs.core.conj,target);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_target,active_target)) && (cljs.core.vector_QMARK_(active_target)))){
var mounted_target_class_32897 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__32673__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__32676,map__32676__$1,target,next_router,map__32675,map__32675__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__32673,map__32674,map__32674__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (acc,p__32677){
var map__32678 = p__32677;
var map__32678__$1 = cljs.core.__destructure_map(map__32678);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32678__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32678__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component__$2);
} else {
return null;
}
});})(G__32673__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__32676,map__32676__$1,target,next_router,map__32675,map__32675__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__32673,map__32674,map__32674__$1,node,component,children,new_path_remaining,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null,(function (){var G__32679 = component__$1;
var G__32679__$1 = (((G__32679 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__32679,state_map));
var G__32679__$2 = (((G__32679__$1 == null))?null:edn_query_language.core.query__GT_ast(G__32679__$1));
if((G__32679__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__32679__$2);
}
})());
var mounted_targets_32898 = com.fulcrologic.fulcro.components.class__GT_all(app__$1,mounted_target_class_32897);
if(cljs.core.seq(mounted_targets_32898)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_signal,cljs.core.into,mounted_targets_32898);
} else {
}
} else {
}

if(cljs.core.truth_(next_router)){
var G__32901 = next_router;
var G__32902 = cljs.core.rest(new_path_remaining__$2);
G__32673__$1 = G__32901;
new_path_remaining__$1 = G__32902;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
})();
var components = cljs.core.reverse(cljs.core.deref(to_signal));
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var seq__32680_32903 = cljs.core.seq(components);
var chunk__32681_32904 = null;
var count__32682_32905 = (0);
var i__32683_32906 = (0);
while(true){
if((i__32683_32906 < count__32682_32905)){
var c_32907 = chunk__32681_32904.cljs$core$IIndexed$_nth$arity$2(null,i__32683_32906);
var will_leave_result_32908 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_32907,com.fulcrologic.fulcro.raw.components.props(c_32907));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__32680_32903,chunk__32681_32904,count__32682_32905,i__32683_32906,will_leave_result_32908,c_32907,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__32669_SHARP_){
var and__5000__auto__ = p1__32669_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return will_leave_result_32908;
} else {
return and__5000__auto__;
}
});})(seq__32680_32903,chunk__32681_32904,count__32682_32905,i__32683_32906,will_leave_result_32908,c_32907,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__32909 = seq__32680_32903;
var G__32910 = chunk__32681_32904;
var G__32911 = count__32682_32905;
var G__32912 = (i__32683_32906 + (1));
seq__32680_32903 = G__32909;
chunk__32681_32904 = G__32910;
count__32682_32905 = G__32911;
i__32683_32906 = G__32912;
continue;
} else {
var temp__5804__auto___32913 = cljs.core.seq(seq__32680_32903);
if(temp__5804__auto___32913){
var seq__32680_32914__$1 = temp__5804__auto___32913;
if(cljs.core.chunked_seq_QMARK_(seq__32680_32914__$1)){
var c__5525__auto___32915 = cljs.core.chunk_first(seq__32680_32914__$1);
var G__32916 = cljs.core.chunk_rest(seq__32680_32914__$1);
var G__32917 = c__5525__auto___32915;
var G__32918 = cljs.core.count(c__5525__auto___32915);
var G__32919 = (0);
seq__32680_32903 = G__32916;
chunk__32681_32904 = G__32917;
count__32682_32905 = G__32918;
i__32683_32906 = G__32919;
continue;
} else {
var c_32921 = cljs.core.first(seq__32680_32914__$1);
var will_leave_result_32922 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_32921,com.fulcrologic.fulcro.raw.components.props(c_32921));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__32680_32903,chunk__32681_32904,count__32682_32905,i__32683_32906,will_leave_result_32922,c_32921,seq__32680_32914__$1,temp__5804__auto___32913,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__32669_SHARP_){
var and__5000__auto__ = p1__32669_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return will_leave_result_32922;
} else {
return and__5000__auto__;
}
});})(seq__32680_32903,chunk__32681_32904,count__32682_32905,i__32683_32906,will_leave_result_32922,c_32921,seq__32680_32914__$1,temp__5804__auto___32913,new_path,app__$1,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__32926 = cljs.core.next(seq__32680_32914__$1);
var G__32927 = null;
var G__32928 = (0);
var G__32929 = (0);
seq__32680_32903 = G__32926;
chunk__32681_32904 = G__32927;
count__32682_32905 = G__32928;
i__32683_32906 = G__32929;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(result))){
var seq__32684_32930 = cljs.core.seq(cljs.core.deref(to_cancel));
var chunk__32685_32931 = null;
var count__32686_32932 = (0);
var i__32687_32933 = (0);
while(true){
if((i__32687_32933 < count__32686_32932)){
var t_32934 = chunk__32685_32931.cljs$core$IIndexed$_nth$arity$2(null,i__32687_32933);
var map__32692_32935 = (function (){var G__32693 = t_32934;
if((G__32693 == null)){
return null;
} else {
return cljs.core.meta(G__32693);
}
})();
var map__32692_32936__$1 = cljs.core.__destructure_map(map__32692_32935);
var component_32937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32692_32936__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_32938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32692_32936__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_32937,params_32938);


var G__32939 = seq__32684_32930;
var G__32940 = chunk__32685_32931;
var G__32941 = count__32686_32932;
var G__32942 = (i__32687_32933 + (1));
seq__32684_32930 = G__32939;
chunk__32685_32931 = G__32940;
count__32686_32932 = G__32941;
i__32687_32933 = G__32942;
continue;
} else {
var temp__5804__auto___32943 = cljs.core.seq(seq__32684_32930);
if(temp__5804__auto___32943){
var seq__32684_32944__$1 = temp__5804__auto___32943;
if(cljs.core.chunked_seq_QMARK_(seq__32684_32944__$1)){
var c__5525__auto___32947 = cljs.core.chunk_first(seq__32684_32944__$1);
var G__32948 = cljs.core.chunk_rest(seq__32684_32944__$1);
var G__32949 = c__5525__auto___32947;
var G__32950 = cljs.core.count(c__5525__auto___32947);
var G__32951 = (0);
seq__32684_32930 = G__32948;
chunk__32685_32931 = G__32949;
count__32686_32932 = G__32950;
i__32687_32933 = G__32951;
continue;
} else {
var t_32952 = cljs.core.first(seq__32684_32944__$1);
var map__32694_32953 = (function (){var G__32695 = t_32952;
if((G__32695 == null)){
return null;
} else {
return cljs.core.meta(G__32695);
}
})();
var map__32694_32954__$1 = cljs.core.__destructure_map(map__32694_32953);
var component_32955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32694_32954__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_32956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32694_32954__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_32955,params_32956);


var G__32957 = cljs.core.next(seq__32684_32944__$1);
var G__32958 = null;
var G__32959 = (0);
var G__32960 = (0);
seq__32684_32930 = G__32957;
chunk__32685_32931 = G__32958;
count__32686_32932 = G__32959;
i__32687_32933 = G__32960;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$lang$maxFixedArity = 4);

/**
 * Returns the current active route, starting from the relative Fulcro class or instance.
 * 
 *   Any component using this as a basis for rendering will need to add the following to their query to
 *   ensure the props of that component change on route changes:
 * 
 *   ```
 *   [::uism/asm-id fq-router-kw]
 *   ```
 * 
 *   where `fq-router-kw` is a keyword that has the exact namespace and name of the router you're interested in. If you want
 *   to just over-render you can use a quoted `_` instead.
 * 
 *   NOTE: This function is primarily meant to be used in mutation implementations or with global routing.
 *   It is not reliable to use this function during render because it relies on the router being mounted (and render gets
 *   called in order to determine what to render). If you want to know the current state of a particular
 *   router you should query for it's ASM as indicated above.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route(var_args){
var G__32698 = arguments.length;
switch (G__32698) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var temp__5802__auto__ = (function (){var G__32699 = this_or_app;
var G__32699__$1 = (((G__32699 == null))?null:com.fulcrologic.fulcro.raw.components.any__GT_app(G__32699));
if((G__32699__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.root_class(G__32699__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var cls = temp__5802__auto__;
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(this_or_app,cls);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class_or_instance){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__5002__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__32701_32964 = root;
var map__32702_32965 = G__32701_32964;
var map__32702_32966__$1 = cljs.core.__destructure_map(map__32702_32965);
var node_32967 = map__32702_32966__$1;
var component_32968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32702_32966__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__32701_32971__$1 = G__32701_32964;
while(true){
var map__32704_32972 = G__32701_32971__$1;
var map__32704_32973__$1 = cljs.core.__destructure_map(map__32704_32972);
var node_32974__$1 = map__32704_32973__$1;
var component_32975__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32704_32973__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_((function (){var and__5000__auto__ = component_32975__$1;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_32975__$1);
} else {
return and__5000__auto__;
}
})())){
var router_ident_32976 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_32975__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_32977 = cljs.core.second(router_ident_32976);
var sm_env_32978 = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,router_id_32977,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.PersistentArrayMap.EMPTY);
var path_segment_32979 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env_32978,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var next_router_32980 = cljs.core.some(((function (G__32701_32971__$1,router_ident_32976,router_id_32977,sm_env_32978,path_segment_32979,map__32704_32972,map__32704_32973__$1,node_32974__$1,component_32975__$1,G__32701_32964,map__32702_32965,map__32702_32966__$1,node_32967,component_32968,app__$1,state_map,router,root_query,ast,root,result){
return (function (p1__32696_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__32696_SHARP_);
});})(G__32701_32971__$1,router_ident_32976,router_id_32977,sm_env_32978,path_segment_32979,map__32704_32972,map__32704_32973__$1,node_32974__$1,component_32975__$1,G__32701_32964,map__32702_32965,map__32702_32966__$1,node_32967,component_32968,app__$1,state_map,router,root_query,ast,root,result))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_32974__$1));
if(cljs.core.seq(path_segment_32979)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.into,path_segment_32979);
} else {
}

if(cljs.core.truth_(next_router_32980)){
var G__32983 = next_router_32980;
G__32701_32971__$1 = G__32983;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$mounted_targets(app__$1,router_class){
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var mounted_target_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32705){
var map__32706 = p__32705;
var map__32706__$1 = cljs.core.__destructure_map(map__32706);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32706__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32706__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component);
} else {
return null;
}
}),null,(function (){var G__32707 = router_class;
var G__32707__$1 = (((G__32707 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__32707,state_map));
var G__32707__$2 = (((G__32707__$1 == null))?null:edn_query_language.core.query__GT_ast(G__32707__$1));
if((G__32707__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__32707__$2);
}
})());
return com.fulcrologic.fulcro.components.class__GT_all(app__$1,mounted_target_class);
});
com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$set_force_route_flag_BANG_(route_target){
return com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$goog$object.set(route_target,"fulcro$routing$force_route",true);
});
/**
 * returns true if the given route target's allow-route-change? should be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$force_route_flagged_QMARK_(route_target){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(route_target,"fulcro$routing$force_route");
});
/**
 * This function will return the first mounted instance of a route target that is currently indicating it would
 *   deny a route change. If a `relative-class` is given then it only looks for targets that would deny a change within
 *   that router's subtree.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_denying_route_changes(var_args){
var G__32710 = arguments.length;
switch (G__32710) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__5002__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,ast);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var G__32712 = root;
var map__32713 = G__32712;
var map__32713__$1 = cljs.core.__destructure_map(map__32713);
var router_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32713__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__32712__$1 = G__32712;
while(true){
var map__32715 = G__32712__$1;
var map__32715__$1 = cljs.core.__destructure_map(map__32715);
var router_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__5000__auto__ = router_class__$1;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class__$1);
} else {
return and__5000__auto__;
}
})())){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(router_class__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var next_router = cljs.core.some(((function (G__32712__$1,router_ident,active_target,map__32715,map__32715__$1,router_class__$1,children__$1,G__32712,map__32713,map__32713__$1,router_class,children,app__$1,state_map,root_query,ast,root){
return (function (p1__32708_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app__$1,p1__32708_SHARP_);
});})(G__32712__$1,router_ident,active_target,map__32715,map__32715__$1,router_class__$1,children__$1,G__32712,map__32713,map__32713__$1,router_class,children,app__$1,state_map,root_query,ast,root))
,children__$1);
var rejecting_target = ((cljs.core.vector_QMARK_(active_target))?cljs.core.some(((function (G__32712__$1,router_ident,active_target,next_router,map__32715,map__32715__$1,router_class__$1,children__$1,G__32712,map__32713,map__32713__$1,router_class,children,app__$1,state_map,root_query,ast,root){
return (function (c){
if(((com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_(c) === false) && (cljs.core.not(com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_(c))))){
return c;
} else {
return null;
}
});})(G__32712__$1,router_ident,active_target,next_router,map__32715,map__32715__$1,router_class__$1,children__$1,G__32712,map__32713,map__32713__$1,router_class,children,app__$1,state_map,root_query,ast,root))
,com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets(app__$1,router_class__$1)):null);
if(cljs.core.truth_(rejecting_target)){
return rejecting_target;
} else {
if(cljs.core.truth_(next_router)){
var G__32991 = next_router;
G__32712__$1 = G__32991;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var router = com.fulcrologic.fulcro.application.root_class(app__$1);
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(app__$1,router);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the active on-screen targets indicate they will allow navigation.
 * 
 *   NOTE: If your route targets have an `:allow-route-change?`, then that will be used to determine if the route can
 *   be abandoned; otherwise `:will-leave` will be called to answer the question; however, this USE of `will-leave`
 *   is DEPRECATED (though the hook is NOT because it serves another purpose). If you side-effect in `:will-leave` this could cause strange
 *   behavior throughout the application.  It is recommended that your targets implement `:allow-route-change?` if they need
 *   to prevent routing, and only leverage `:will-leave` to do things like cancel in-progress loads.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$can_change_route_QMARK_(var_args){
var G__32717 = arguments.length;
switch (G__32717) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1(this_or_app) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(this_or_app,relative_class) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Takes an on-screen *instance* of a react element and a new route (vector of strings) and returns a vector containing
 * either the original arguments, or an evaluation of relative navigation up the live routing tree.
 * 
 * If `new-route` starts with `:..` (any number of times) then this function finds (and returns) the parent *router*
 * and the new route stripped of `:..` prefix.
 * 
 * For example, say you were in a target instance that has a parent router, which in turn has a parent router called
 * `SomeRouter`. Then:
 * 
 * ```
 * (dr/evaluate-relative-path this [:.. :.. "some-target"])
 * => [SomeRouter ["some-target"]]
 * ```
 * 
 * This function does *not* work on classes. It is meant for live evaluation of on-screen instances to enable relative
 * routing based on the actual on-screen route targets.
 * 
 * CAN return `nil` for the router if no such parent is found.
 * 
 * Returns unmodified input argument if `new-route` does not begin with `:..`.
 * 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$evaluate_relative_path(relative_instance,new_route){
var current_instance = relative_instance;
var G__32721 = new_route;
var vec__32722 = G__32721;
var seq__32723 = cljs.core.seq(vec__32722);
var first__32724 = cljs.core.first(seq__32723);
var seq__32723__$1 = cljs.core.next(seq__32723);
var lead_element = first__32724;
var remainder = seq__32723__$1;
var path = vec__32722;
var looking_for_router_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element);
var current_instance__$1 = current_instance;
var G__32721__$1 = G__32721;
var looking_for_router_QMARK___$1 = looking_for_router_QMARK_;
while(true){
var current_instance__$2 = current_instance__$1;
var vec__32728 = G__32721__$1;
var seq__32729 = cljs.core.seq(vec__32728);
var first__32730 = cljs.core.first(seq__32729);
var seq__32729__$1 = cljs.core.next(seq__32729);
var lead_element__$1 = first__32730;
var remainder__$1 = seq__32729__$1;
var path__$1 = vec__32728;
var looking_for_router_QMARK___$2 = looking_for_router_QMARK___$1;
if((((current_instance__$2 == null)) || (cljs.core.empty_QMARK_(path__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = looking_for_router_QMARK___$2;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(current_instance__$2);
} else {
return and__5000__auto__;
}
})())){
var G__32994 = current_instance__$2;
var G__32995 = cljs.core.vec(remainder__$1);
var G__32996 = false;
current_instance__$1 = G__32994;
G__32721__$1 = G__32995;
looking_for_router_QMARK___$1 = G__32996;
continue;
} else {
if(cljs.core.truth_(looking_for_router_QMARK___$2)){
var G__32997 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__32998 = path__$1;
var G__32999 = true;
current_instance__$1 = G__32997;
G__32721__$1 = G__32998;
looking_for_router_QMARK___$1 = G__32999;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element__$1)){
var G__33000 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__33001 = path__$1;
var G__33002 = true;
current_instance__$1 = G__33000;
G__32721__$1 = G__33001;
looking_for_router_QMARK___$1 = G__33002;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);

}
}
}
}
break;
}
});
/**
 * Change the route, starting at the given Fulcro class or instance (scanning for the first router from there).  `new-route` is a vector
 *   of string components to pass through to the nearest child router as the new path. The first argument is any live component
 *   or the app.  The `timeouts-and-params` are as in `change-route`.
 * 
 *   When possible (i.e. no circular references to components) you can maintain better code navigation by
 *   generating `new-route` via `path-to`.  This will allow readers of your code to quickly jump to the actual
 *   components that implement the targets when reading the code.
 * 
 *   You may include the special keyword `:..` any number of times at the beginning of `new-route` to indicate the
 *   parent(s) of `relative-class-or-instance`, which allows you to do relative routing to a sibling.
 * 
 *   ```
 *   (dr/change-route-relative this this [:.. "sibling-pattern"])
 *   ```
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_relative_BANG_(var_args){
var G__32732 = arguments.length;
switch (G__32732) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var vec__32733 = com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path(relative_class_or_instance,new_route);
var relative_class_or_instance__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(0),null);
var new_route__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(1),null);
var relative_class = (cljs.core.truth_((com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(relative_class_or_instance__$1) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,relative_class_or_instance__$1)))?com.fulcrologic.fulcro.components.react_type(relative_class_or_instance__$1):relative_class_or_instance__$1);
var old_route = com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class);
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class,new_route__$1,timeouts_and_params);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,new_route__$1)) && (cljs.core.not(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","force?","com.fulcrologic.fulcro.routing.dynamic-routing/force?",-1506318960).cljs$core$IFn$_invoke$arity$1(timeouts_and_params))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,679,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Request to change route, but path is the current route. Ignoring change request."], null);
}),null)),null,-1986888827);

return new cljs.core.Keyword(null,"already-there","already-there",1156142236);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.seq(new_path));
} else {
return and__5000__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,684,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find route targets for new-route",new_route__$1,"See https://book.fulcrologic.com/#err-dr-new-route-target-not-found"], null);
}),null)),null,1331103841);

return new cljs.core.Keyword(null,"invalid","invalid",412869516);
} else {
if((!(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class)))){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var target = com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1(app__$1);
var route_denied = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-denied","route-denied",-1140339590)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,691,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route request denied by on-screen target",target,". Calling component's :route-denied (if defined)."], null);
}),null)),null,882692408);

if(cljs.core.truth_(route_denied)){
(route_denied.cljs$core$IFn$_invoke$arity$3 ? route_denied.cljs$core$IFn$_invoke$arity$3(target,relative_class_or_instance__$1,new_route__$1) : route_denied.call(null,target,relative_class_or_instance__$1,new_route__$1));
} else {
}

return new cljs.core.Keyword(null,"denied","denied",-1141109291);
} else {
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance__$1,new_route__$1,timeouts_and_params);

var app_33005__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map_33006 = com.fulcrologic.fulcro.application.current_state(app_33005__$1);
var router_33007 = relative_class_or_instance__$1;
var root_query_33008 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router_33007,state_map_33006);
var ast_33009 = edn_query_language.core.query__GT_ast(root_query_33008);
var root_33010 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast_33009,new_route__$1);
var routing_actions_33011 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var pessimistic_txn_33012 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var delayed_targets_33013 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__32737_33014 = root_33010;
var map__32738_33015 = G__32737_33014;
var map__32738_33016__$1 = cljs.core.__destructure_map(map__32738_33015);
var component_33017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32738_33016__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_33018 = new_route__$1;
var G__32737_33019__$1 = G__32737_33014;
var path_33020__$1 = path_33018;
while(true){
var map__32752_33021 = G__32737_33019__$1;
var map__32752_33022__$1 = cljs.core.__destructure_map(map__32752_33021);
var component_33023__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32752_33022__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_33024__$2 = path_33020__$1;
if(cljs.core.truth_((function (){var and__5000__auto__ = component_33023__$1;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_33023__$1);
} else {
return and__5000__auto__;
}
})())){
var map__32753_33025 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component_33023__$1,path_33024__$2);
var map__32753_33026__$1 = cljs.core.__destructure_map(map__32753_33025);
var target_33027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753_33026__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_33028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753_33026__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_33029 = (function (){var G__32755 = target_33027;
var G__32755__$1 = (((G__32755 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__32755,state_map_33006));
if((G__32755__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__32755__$1);
}
})();
var prefix_length_33030 = cljs.core.count(matching_prefix_33028);
var remaining_path_33031 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_33030,path_33024__$2));
var segment_33032 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_33027);
var params_33033 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__32737_33019__$1,path_33020__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (p,p__32756){
var vec__32757 = p__32756;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32757,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__32737_33019__$1,path_33020__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__32737_33019__$1,path_33020__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__32737_33019__$1,path_33020__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,segment_33032,matching_prefix_33028));
var router_ident_33034 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_33023__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_33035 = cljs.core.second(router_ident_33034);
var target_ident_33036 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_33027,app_33005__$1,params_33033);
var map__32754_33037 = cljs.core.meta(target_ident_33036);
var map__32754_33038__$1 = cljs.core.__destructure_map(map__32754_33037);
var path_ordered_QMARK__33039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32754_33038__$1,new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295));
var txn_33040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32754_33038__$1,new cljs.core.Keyword(null,"txn","txn",-469204789));
var show_early_QMARK__33041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32754_33038__$1,new cljs.core.Keyword(null,"show-early?","show-early?",-1632022246));
var optimistic_QMARK__33042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32754_33038__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var completing_action_33043 = (function (){var or__5002__auto__ = (function (){var G__32760 = target_ident_33036;
var G__32760__$1 = (((G__32760 == null))?null:cljs.core.meta(G__32760));
if((G__32760__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__32760__$1);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var and__5000__auto__ = optimistic_QMARK__33042;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.seq(txn_33040);
if(and__5000__auto____$1){
return ((function (G__32737_33019__$1,path_33020__$1,and__5000__auto____$1,and__5000__auto__,or__5002__auto__,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,params_33033,router_ident_33034,router_id_33035,target_ident_33036,map__32754_33037,map__32754_33038__$1,path_ordered_QMARK__33039,txn_33040,show_early_QMARK__33041,optimistic_QMARK__33042,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app_33005__$1,txn_33040);
});
;})(G__32737_33019__$1,path_33020__$1,and__5000__auto____$1,and__5000__auto__,or__5002__auto__,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,params_33033,router_ident_33034,router_id_33035,target_ident_33036,map__32754_33037,map__32754_33038__$1,path_ordered_QMARK__33039,txn_33040,show_early_QMARK__33041,optimistic_QMARK__33042,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
})();
var event_data_33044 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000),new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20)], null),timeouts_and_params,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),matching_prefix_33028,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident_33034,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component_33023__$1),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_33036,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_33027,new cljs.core.Keyword(null,"params","params",710516235),params_33033)], null)], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = path_ordered_QMARK__33039;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.seq(txn_33040)) && (cljs.core.not(optimistic_QMARK__33042)));
} else {
return and__5000__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_33012,cljs.core.into,txn_33040);

if(cljs.core.truth_(show_early_QMARK__33041)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_33012,cljs.core.conj,(function (){var G__32761 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_33036], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__32761) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__32761));
})());
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(delayed_targets_33013,cljs.core.conj,(function (){var G__32762 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_33036], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__32762) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__32762));
})());
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(routing_actions_33011,cljs.core.conj,((function (G__32737_33019__$1,path_33020__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,params_33033,router_ident_33034,router_id_33035,target_ident_33036,map__32754_33037,map__32754_33038__$1,path_ordered_QMARK__33039,txn_33040,show_early_QMARK__33041,optimistic_QMARK__33042,completing_action_33043,event_data_33044,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
if(cljs.core.not(com.fulcrologic.fulcro.ui_state_machines.get_active_state(app_33005__$1,router_id_33035))){
var state_map_33045__$1 = com.fulcrologic.fulcro.components.component__GT_state_map(app_or_comp);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(state_map_33045__$1),router_id_33035))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,748,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__32737_33019__$1,path_33020__$1,state_map_33045__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,params_33033,router_ident_33034,router_id_33035,target_ident_33036,map__32754_33037,map__32754_33038__$1,path_ordered_QMARK__33039,txn_33040,show_early_QMARK__33041,optimistic_QMARK__33042,completing_action_33043,event_data_33044,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You are routing to a router ",router_id_33035,"whose state was not composed into the app from root. Please check your :initial-state. See https://book.fulcrologic.com/#err-dr-router-state-missing"], null);
});})(G__32737_33019__$1,path_33020__$1,state_map_33045__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,params_33033,router_ident_33034,router_id_33035,target_ident_33036,map__32754_33037,map__32754_33038__$1,path_ordered_QMARK__33039,txn_33040,show_early_QMARK__33041,optimistic_QMARK__33042,completing_action_33043,event_data_33044,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,null)),null,388312463);
}

com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app_or_comp,com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine,router_id_33035,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident_33034,component_33023__$1)], null),event_data_33044);
} else {
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_33005__$1,router_id_33035,new cljs.core.Keyword(null,"route!","route!",-1286958144),event_data_33044);
}

var _STAR_after_render_STAR__orig_val__32763 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__32764 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__32764);

try{return (completing_action_33043.cljs$core$IFn$_invoke$arity$0 ? completing_action_33043.cljs$core$IFn$_invoke$arity$0() : completing_action_33043.call(null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__32763);
}});})(G__32737_33019__$1,path_33020__$1,map__32753_33025,map__32753_33026__$1,target_33027,matching_prefix_33028,target_ast_33029,prefix_length_33030,remaining_path_33031,segment_33032,params_33033,router_ident_33034,router_id_33035,target_ident_33036,map__32754_33037,map__32754_33038__$1,path_ordered_QMARK__33039,txn_33040,show_early_QMARK__33041,optimistic_QMARK__33042,completing_action_33043,event_data_33044,map__32752_33021,map__32752_33022__$1,component_33023__$1,path_33024__$2,G__32737_33014,map__32738_33015,map__32738_33016__$1,component_33017,path_33018,app_33005__$1,state_map_33006,router_33007,root_query_33008,ast_33009,root_33010,routing_actions_33011,pessimistic_txn_33012,delayed_targets_33013,vec__32733,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
);

if(cljs.core.seq(remaining_path_33031)){
var G__33047 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast_33029,remaining_path_33031);
var G__33048 = remaining_path_33031;
G__32737_33019__$1 = G__33047;
path_33020__$1 = G__33048;
continue;
} else {
}
} else {
}
break;
}

var seq__32765_33049 = cljs.core.seq(cljs.core.deref(routing_actions_33011));
var chunk__32766_33050 = null;
var count__32767_33051 = (0);
var i__32768_33052 = (0);
while(true){
if((i__32768_33052 < count__32767_33051)){
var action_33053 = chunk__32766_33050.cljs$core$IIndexed$_nth$arity$2(null,i__32768_33052);
(action_33053.cljs$core$IFn$_invoke$arity$0 ? action_33053.cljs$core$IFn$_invoke$arity$0() : action_33053.call(null));


var G__33054 = seq__32765_33049;
var G__33055 = chunk__32766_33050;
var G__33056 = count__32767_33051;
var G__33057 = (i__32768_33052 + (1));
seq__32765_33049 = G__33054;
chunk__32766_33050 = G__33055;
count__32767_33051 = G__33056;
i__32768_33052 = G__33057;
continue;
} else {
var temp__5804__auto___33058 = cljs.core.seq(seq__32765_33049);
if(temp__5804__auto___33058){
var seq__32765_33059__$1 = temp__5804__auto___33058;
if(cljs.core.chunked_seq_QMARK_(seq__32765_33059__$1)){
var c__5525__auto___33060 = cljs.core.chunk_first(seq__32765_33059__$1);
var G__33061 = cljs.core.chunk_rest(seq__32765_33059__$1);
var G__33062 = c__5525__auto___33060;
var G__33063 = cljs.core.count(c__5525__auto___33060);
var G__33064 = (0);
seq__32765_33049 = G__33061;
chunk__32766_33050 = G__33062;
count__32767_33051 = G__33063;
i__32768_33052 = G__33064;
continue;
} else {
var action_33065 = cljs.core.first(seq__32765_33059__$1);
(action_33065.cljs$core$IFn$_invoke$arity$0 ? action_33065.cljs$core$IFn$_invoke$arity$0() : action_33065.call(null));


var G__33066 = cljs.core.next(seq__32765_33059__$1);
var G__33067 = null;
var G__33068 = (0);
var G__33069 = (0);
seq__32765_33049 = G__33066;
chunk__32766_33050 = G__33067;
count__32767_33051 = G__33068;
i__32768_33052 = G__33069;
continue;
}
} else {
}
}
break;
}

if(((cljs.core.seq(cljs.core.deref(pessimistic_txn_33012))) || (cljs.core.seq(cljs.core.deref(delayed_targets_33013))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.routing.dynamic-routing",null,763,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running pessimistic transaction",cljs.core.deref(pessimistic_txn_33012),"with delayed targets",cljs.core.deref(delayed_targets_33013)], null);
}),null)),null,-1963404374);

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_33005__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pessimistic_txn_33012),cljs.core.reverse(cljs.core.deref(delayed_targets_33013)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
} else {
}

return new cljs.core.Keyword(null,"routing","routing",1440253662);

}
}
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * DEPRECATED NAME: Use change-route-relative!
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_;
/**
 * Retry a route that the receiving component just denied, and ignore this target's answer. All other targets will still
 *   be asked. This is primarily used when you want to be able to use js/confirm in a component to ask the user if
 *   they "really mean to navigate away". You MUST pass the arguments that `:route-denied` received
 *   or you can easily cause an infinite loop. Other on-screen targets can still potentially abort the route.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$retry_route_BANG_(denied_target_instance,relative_root,path){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,778,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retrying route at the request of ",com.fulcrologic.fulcro.raw.components.component_name(denied_target_instance)], null);
}),null)),null,330308296);

com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_(denied_target_instance);

return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3(denied_target_instance,relative_root,path);
});
/**
 * Trigger a route change.
 * 
 *   * `this` - The component (or app) that is causing the route change.
 *   * `new-route` - A vector of URI components to pass to the router.
 *   * `timeouts-and-params` - A map of additional parameters and route timeouts that affect UI during deferred routes:
 *   `{:error-timeout ms :deferred-timeout ms}`.  Anything extra will appear in the `params` of `will-enter`.
 * 
 *   The error timeout is how long to wait  (default 5000ms) before showing the error-ui of a route (which must be defined on the
 *   router that is having problems).  The deferred-timeout (default 100ms) is how long to wait before showing the loading-ui of
 *   a deferred router (to prevent flicker).
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_BANG_(var_args){
var G__32770 = arguments.length;
switch (G__32770) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,new_route,timeouts_and_params){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(this$);
var root = com.fulcrologic.fulcro.application.root_class(app__$1);
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,root,new_route,timeouts_and_params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.change_route = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_;
/**
 * Run a runtime validation on route targets to verify that they at least declare a route-segment that is a vector.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$validate_route_targets(router_instance){
var seq__32772 = cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets(router_instance));
var chunk__32774 = null;
var count__32775 = (0);
var i__32776 = (0);
while(true){
if((i__32776 < count__32775)){
var t = chunk__32774.cljs$core$IIndexed$_nth$arity$2(null,i__32776);
var segment_33071 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__33072 = ((cljs.core.vector_QMARK_(segment_33071)) && ((((!(cljs.core.empty_QMARK_(segment_33071)))) && (cljs.core.every_QMARK_(((function (seq__32772,chunk__32774,count__32775,i__32776,segment_33071,t){
return (function (p1__32771_SHARP_){
return (((p1__32771_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__32771_SHARP_ === 'string'));
});})(seq__32772,chunk__32774,count__32775,i__32776,segment_33071,t))
,segment_33071)))));
if(valid_QMARK__33072){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,828,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__32772,chunk__32774,count__32775,i__32776,segment_33071,valid_QMARK__33072,t){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__32772,chunk__32774,count__32775,i__32776,segment_33071,valid_QMARK__33072,t))
,null)),null,-6042417);
}


var G__33074 = seq__32772;
var G__33075 = chunk__32774;
var G__33076 = count__32775;
var G__33077 = (i__32776 + (1));
seq__32772 = G__33074;
chunk__32774 = G__33075;
count__32775 = G__33076;
i__32776 = G__33077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32772);
if(temp__5804__auto__){
var seq__32772__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32772__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32772__$1);
var G__33078 = cljs.core.chunk_rest(seq__32772__$1);
var G__33079 = c__5525__auto__;
var G__33080 = cljs.core.count(c__5525__auto__);
var G__33081 = (0);
seq__32772 = G__33078;
chunk__32774 = G__33079;
count__32775 = G__33080;
i__32776 = G__33081;
continue;
} else {
var t = cljs.core.first(seq__32772__$1);
var segment_33082 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__33083 = ((cljs.core.vector_QMARK_(segment_33082)) && ((((!(cljs.core.empty_QMARK_(segment_33082)))) && (cljs.core.every_QMARK_(((function (seq__32772,chunk__32774,count__32775,i__32776,segment_33082,t,seq__32772__$1,temp__5804__auto__){
return (function (p1__32771_SHARP_){
return (((p1__32771_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__32771_SHARP_ === 'string'));
});})(seq__32772,chunk__32774,count__32775,i__32776,segment_33082,t,seq__32772__$1,temp__5804__auto__))
,segment_33082)))));
if(valid_QMARK__33083){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,828,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__32772,chunk__32774,count__32775,i__32776,segment_33082,valid_QMARK__33083,t,seq__32772__$1,temp__5804__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__32772,chunk__32774,count__32775,i__32776,segment_33082,valid_QMARK__33083,t,seq__32772__$1,temp__5804__auto__))
,null)),null,1364859205);
}


var G__33084 = cljs.core.next(seq__32772__$1);
var G__33085 = null;
var G__33086 = (0);
var G__33087 = (0);
seq__32772 = G__33084;
chunk__32774 = G__33085;
count__32775 = G__33086;
i__32776 = G__33087;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Returns a sequence of all of the routers reachable in the query of the app.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers(state_map,component_class){
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map);
var map__32779 = edn_query_language.core.query__GT_ast(root_query);
var map__32779__$1 = cljs.core.__destructure_map(map__32779);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var get_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32780){
var map__32781 = p__32780;
var map__32781__$1 = cljs.core.__destructure_map(map__32781);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32781__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,component):acc),com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(children__$1));
}),cljs.core.PersistentVector.EMPTY,nodes);
});
return get_routers(children);
});
/**
 * Initialize the routing system.  This ensures that all routers have state machines in app state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$initialize_BANG_(app__$1){
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var root = com.fulcrologic.fulcro.application.root_class(app__$1);
var routers = com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers(state_map,root);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var G__32782 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),r)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,r)], null)], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__32782) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__32782));
}),routers);
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,tx);
});
/**
 * Returns the given `prefix` with the TargetClass segment appended onto it, replacing the final elements with the
 * given (optional) path args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (into ["f" "g"] X "22") ; => ["f" "g" "a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.into_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$into_path(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33097 = arguments.length;
var i__5727__auto___33098 = (0);
while(true){
if((i__5727__auto___33098 < len__5726__auto___33097)){
args__5732__auto__.push((arguments[i__5727__auto___33098]));

var G__33099 = (i__5727__auto___33098 + (1));
i__5727__auto___33098 = G__33099;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic = (function (prefix,TargetClass,path_args){
var nargs = cljs.core.count(path_args);
var path = (function (){var G__32786 = TargetClass;
var G__32786__$1 = (((G__32786 == null))?null:com.fulcrologic.fulcro.raw.components.component_options(G__32786));
if((G__32786__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"route-segment","route-segment",1812935886).cljs$core$IFn$_invoke$arity$1(G__32786__$1);
}
})();
var static_elements = (cljs.core.count(path) - nargs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(static_elements,path),path_args));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$applyTo = (function (seq32783){
var G__32784 = cljs.core.first(seq32783);
var seq32783__$1 = cljs.core.next(seq32783);
var G__32785 = cljs.core.first(seq32783__$1);
var seq32783__$2 = cljs.core.next(seq32783__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32784,G__32785,seq32783__$2);
}));

/**
 * Returns the route segment of the given TargetClass with the trailing elements replaced by path-args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (subpath X "22") ; => ["a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.subpath = (function com$fulcrologic$fulcro$routing$dynamic_routing$subpath(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33103 = arguments.length;
var i__5727__auto___33104 = (0);
while(true){
if((i__5727__auto___33104 < len__5726__auto___33103)){
args__5732__auto__.push((arguments[i__5727__auto___33104]));

var G__33105 = (i__5727__auto___33104 + (1));
i__5727__auto___33104 = G__33105;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic = (function (TargetClass,path_args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.routing.dynamic_routing.into_path,cljs.core.PersistentVector.EMPTY,TargetClass,path_args);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$applyTo = (function (seq32787){
var G__32788 = cljs.core.first(seq32787);
var seq32787__$1 = cljs.core.next(seq32787);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32788,seq32787__$1);
}));

/**
 * Convert a sequence of router targets and parameters into a vector of strings that represents the target route. Parameters
 *   can be sequenced inline:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (defsc B [_ _]
 *  {:route-segment ["b" :b-param]})
 * 
 *   (route-segment A a-param1 B b-param ...)
 *   ```
 * 
 *   where the parameters for a target immediately follow the component that requires them. Alternatively
 *   one can specify all of the parameters at the end as a single map using the parameter names that are used in
 *   the component `:route-segment` itself:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (route-segment A B C D {:a-param 1})
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.path_to = (function com$fulcrologic$fulcro$routing$dynamic_routing$path_to(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33106 = arguments.length;
var i__5727__auto___33107 = (0);
while(true){
if((i__5727__auto___33107 < len__5726__auto___33106)){
args__5732__auto__.push((arguments[i__5727__auto___33107]));

var G__33108 = (i__5727__auto___33107 + (1));
i__5727__auto___33107 = G__33108;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic = (function (targets_and_params){
var segments = cljs.core.seq(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__32789_SHARP_){
var and__5000__auto__ = cljs.core.fn_QMARK_(p1__32789_SHARP_);
if(and__5000__auto__){
var or__5002__auto__ = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__32789_SHARP_) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,p1__32789_SHARP_));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.component_class_QMARK_(p1__32789_SHARP_);
}
} else {
return and__5000__auto__;
}
}),targets_and_params));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(segments))) && (cljs.core.map_QMARK_(cljs.core.first(cljs.core.second(segments)))))){
var path = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__32790_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__32790_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(segments)], 0));
var params = cljs.core.first(cljs.core.second(segments));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,i,i);
}),path);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path,p__32793){
var vec__32794 = p__32793;
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32794,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32794,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__32791_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__32791_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.butlast(classes)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.routing.dynamic_routing.subpath,cljs.core.last(classes),params));
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),segments));
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$applyTo = (function (seq32792){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32792));
}));

com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path_components(StartingClass,RouteTarget){
if(cljs.core.truth_(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(RouteTarget,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)))){
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(StartingClass);
var root_node = edn_query_language.core.query__GT_ast(query);
var zipper = clojure.zip.zipper((function (p1__32797_SHARP_){
return cljs.core.contains_QMARK_(p1__32797_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982));
}),new cljs.core.Keyword(null,"children","children",-940561982),(function (n,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"children","children",-940561982),children);
}),root_node);
var node = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (n){
var map__32798 = clojure.zip.node(n);
var map__32798__$1 = cljs.core.__destructure_map(map__32798);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32798__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(component,RouteTarget)) && ((!(clojure.zip.end_QMARK_(n)))));
}),cljs.core.iterate(clojure.zip.next,zipper)));
var found_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(RouteTarget,(function (){var G__32799 = node;
var G__32799__$1 = (((G__32799 == null))?null:clojure.zip.node(G__32799));
if((G__32799__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__32799__$1);
}
})());
if(found_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),clojure.zip.path(node))),RouteTarget);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Attempts to resolve a path from StartingClass to the given RouteTarget. Can also be passed `resolved-components`, which
 *   is the output of `resolve-path-components`.
 * 
 * Returns a vector of route segments. Any keywords in the result will be replaced by the values from `params`, if present.
 * 
 * Returns nil if no path can be found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path(var_args){
var G__32802 = arguments.length;
switch (G__32802) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2 = (function (resolved_components,params){
if(cljs.core.seq(resolved_components)){
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__32800_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__32800_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
})),resolved_components);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ele){
if(cljs.core.contains_QMARK_(params,ele)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,ele));
} else {
return ele;
}
}),base_path);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3 = (function (StartingClass,RouteTarget,params){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components(StartingClass,RouteTarget),params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$lang$maxFixedArity = 3);

/**
 * Given a new-route path (vector of strings): resolves the target (class) that is the ultimate target of that path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_target(app__$1,new_route){
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.application.root_class(app__$1),state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(ast,new_route);
var G__32804 = root;
var map__32805 = G__32804;
var map__32805__$1 = cljs.core.__destructure_map(map__32805);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32805__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path = new_route;
var G__32804__$1 = G__32804;
var path__$1 = path;
while(true){
var map__32809 = G__32804__$1;
var map__32809__$1 = cljs.core.__destructure_map(map__32809);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path__$2 = path__$1;
if(cljs.core.truth_((function (){var and__5000__auto__ = component__$1;
if(cljs.core.truth_(and__5000__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__5000__auto__;
}
})())){
var map__32810 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target(component__$1,path__$2);
var map__32810__$1 = cljs.core.__destructure_map(map__32810);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32810__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32810__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast = (function (){var G__32811 = target;
var G__32811__$1 = (((G__32811 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__32811,state_map));
if((G__32811__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__32811__$1);
}
})();
var prefix_length = cljs.core.count(matching_prefix);
var remaining_path = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length,path__$2));
if(cljs.core.seq(remaining_path)){
var G__33110 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route(target_ast,remaining_path);
var G__33111 = remaining_path;
G__32804__$1 = G__33110;
path__$1 = G__33111;
continue;
} else {
return target;
}
} else {
return null;
}
break;
}
});
var active_routes_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,p__32825,parent_component,ast_nodes){
var map__32826 = p__32825;
var map__32826__$1 = cljs.core.__destructure_map(map__32826);
var result = map__32826__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32826__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var segment = (function (){var G__32827 = parent_component;
if((G__32827 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__32827);
}
})();
if((parent_component == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else {
if(cljs.core.truth_((function (){var G__32828 = parent_component;
if((G__32828 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(G__32828);
}
})())){
var ident = (function (){var G__32829 = parent_component;
if((G__32829 == null)){
return null;
} else {
var G__32830 = G__32829;
var G__32831 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__32830,G__32831) : com.fulcrologic.fulcro.components.get_ident.call(null,G__32830,G__32831));
}
})();
var active_ast_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__32832){
var map__32833 = p__32832;
var map__32833__$1 = cljs.core.__destructure_map(map__32833);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key);
}),ast_nodes));
var new_parent = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(active_ast_node);
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment),new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),new_parent,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(active_ast_node));
} else {
if(cljs.core.truth_(segment)){
var subpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__32834){
var map__32835 = p__32834;
var map__32835__$1 = cljs.core.__destructure_map(map__32835);
var node = map__32835__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32835__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),subpath,new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__32836){
var map__32837 = p__32836;
var map__32837__$1 = cljs.core.__destructure_map(map__32837);
var node = map__32837__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,result,component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));

}
}
}
});
/**
 * Return a sequence of the leaf router targets that are routed to in the given app using the active dynamic query
 *   and app state.
 * 
 *   The return values are maps that currently contain a `:path` and `:target-component` key.
 *   Future versions of this function may include additional information.
 * 
 *   Note that dynamic routing purposely supports the ability to have more than one UI path active at a time, as it
 *   is NOT a strict URL-style UI router. However, since your code is ultimately responsible for determining what
 *   parts of the active query are rendered, it is possible for this to return routes that are available (in the props
 *   of components) but are not being rendered by your logic. Thus, the return value of this function isn't necessarily
 *   proof that the routes listed are visible to the user.
 * 
 *   WARNING: If you use disconnected roots (via hooks or otherwise), then you must specify a starting component that is
 *   well-connected (graph/state) from which to scan, and will get back paths relative to that `starting-from`
 *   (a component, element, or factory if you're using factory-based dynamic queries).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.active_routes = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes(var_args){
var G__32839 = arguments.length;
switch (G__32839) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2(app__$1,com.fulcrologic.fulcro.application.root_class(app__$1));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,starting_from){
var state_map = com.fulcrologic.fulcro.application.current_state(app__$1);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(starting_from,state_map);
var map__32840 = edn_query_language.core.query__GT_ast(query);
var map__32840__$1 = cljs.core.__destructure_map(map__32840);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.set(active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY], null),starting_from,children));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.routing.dynamic_routing.js.map
