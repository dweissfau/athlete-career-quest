goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5000__auto__ = c;
if(cljs.core.truth_(and__5000__auto__)){
return ident;
} else {
return and__5000__auto__;
}
})())){
var map__30911 = app__$1;
var map__30911__$1 = cljs.core.__destructure_map(map__30911);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30911__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5002__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__30912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__30913 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__30912,G__30913) : com.fulcrologic.fulcro.components.computed.call(null,G__30912,G__30913));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-1277131347);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__30914 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__30914) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__30914));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,2127973695);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__30916 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__30917 = null;
var count__30918 = (0);
var i__30919 = (0);
while(true){
if((i__30919 < count__30918)){
var c = chunk__30917.cljs$core$IIndexed$_nth$arity$2(null,i__30919);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__30993 = seq__30916;
var G__30994 = chunk__30917;
var G__30995 = count__30918;
var G__30996 = (i__30919 + (1));
seq__30916 = G__30993;
chunk__30917 = G__30994;
count__30918 = G__30995;
i__30919 = G__30996;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30916);
if(temp__5804__auto__){
var seq__30916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30916__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30916__$1);
var G__30997 = cljs.core.chunk_rest(seq__30916__$1);
var G__30998 = c__5525__auto__;
var G__30999 = cljs.core.count(c__5525__auto__);
var G__31000 = (0);
seq__30916 = G__30997;
chunk__30917 = G__30998;
count__30918 = G__30999;
i__30919 = G__31000;
continue;
} else {
var c = cljs.core.first(seq__30916__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__31001 = cljs.core.next(seq__30916__$1);
var G__31002 = null;
var G__31003 = (0);
var G__31004 = (0);
seq__30916 = G__31001;
chunk__30917 = G__31002;
count__30918 = G__31003;
i__30919 = G__31004;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__30923 = app__$1;
var map__30923__$1 = cljs.core.__destructure_map(map__30923);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30923__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__30924 = cljs.core.deref(runtime_atom);
var map__30924__$1 = cljs.core.__destructure_map(map__30924);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30924__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__30925 = indexes;
var map__30925__$1 = cljs.core.__destructure_map(map__30925);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30925__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30925__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30925__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5002__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__30926 = cljs.core.seq(classes);
var chunk__30927 = null;
var count__30928 = (0);
var i__30929 = (0);
while(true){
if((i__30929 < count__30928)){
var class$ = chunk__30927.cljs$core$IIndexed$_nth$arity$2(null,i__30929);
var seq__30943_31006 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__30946_31007 = null;
var count__30947_31008 = (0);
var i__30948_31009 = (0);
while(true){
if((i__30948_31009 < count__30947_31008)){
var component_31010 = chunk__30946_31007.cljs$core$IIndexed$_nth$arity$2(null,i__30948_31009);
var component_ident_31011 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_31010) : com.fulcrologic.fulcro.components.get_ident.call(null,component_31010));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_31011,component_31010);


var G__31012 = seq__30943_31006;
var G__31013 = chunk__30946_31007;
var G__31014 = count__30947_31008;
var G__31015 = (i__30948_31009 + (1));
seq__30943_31006 = G__31012;
chunk__30946_31007 = G__31013;
count__30947_31008 = G__31014;
i__30948_31009 = G__31015;
continue;
} else {
var temp__5804__auto___31016 = cljs.core.seq(seq__30943_31006);
if(temp__5804__auto___31016){
var seq__30943_31017__$1 = temp__5804__auto___31016;
if(cljs.core.chunked_seq_QMARK_(seq__30943_31017__$1)){
var c__5525__auto___31018 = cljs.core.chunk_first(seq__30943_31017__$1);
var G__31019 = cljs.core.chunk_rest(seq__30943_31017__$1);
var G__31020 = c__5525__auto___31018;
var G__31021 = cljs.core.count(c__5525__auto___31018);
var G__31022 = (0);
seq__30943_31006 = G__31019;
chunk__30946_31007 = G__31020;
count__30947_31008 = G__31021;
i__30948_31009 = G__31022;
continue;
} else {
var component_31023 = cljs.core.first(seq__30943_31017__$1);
var component_ident_31024 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_31023) : com.fulcrologic.fulcro.components.get_ident.call(null,component_31023));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_31024,component_31023);


var G__31025 = cljs.core.next(seq__30943_31017__$1);
var G__31026 = null;
var G__31027 = (0);
var G__31028 = (0);
seq__30943_31006 = G__31025;
chunk__30946_31007 = G__31026;
count__30947_31008 = G__31027;
i__30948_31009 = G__31028;
continue;
}
} else {
}
}
break;
}


var G__31029 = seq__30926;
var G__31030 = chunk__30927;
var G__31031 = count__30928;
var G__31032 = (i__30929 + (1));
seq__30926 = G__31029;
chunk__30927 = G__31030;
count__30928 = G__31031;
i__30929 = G__31032;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30926);
if(temp__5804__auto__){
var seq__30926__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30926__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30926__$1);
var G__31033 = cljs.core.chunk_rest(seq__30926__$1);
var G__31034 = c__5525__auto__;
var G__31035 = cljs.core.count(c__5525__auto__);
var G__31036 = (0);
seq__30926 = G__31033;
chunk__30927 = G__31034;
count__30928 = G__31035;
i__30929 = G__31036;
continue;
} else {
var class$ = cljs.core.first(seq__30926__$1);
var seq__30951_31037 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__30953_31038 = null;
var count__30954_31039 = (0);
var i__30955_31040 = (0);
while(true){
if((i__30955_31040 < count__30954_31039)){
var component_31041 = chunk__30953_31038.cljs$core$IIndexed$_nth$arity$2(null,i__30955_31040);
var component_ident_31042 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_31041) : com.fulcrologic.fulcro.components.get_ident.call(null,component_31041));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_31042,component_31041);


var G__31043 = seq__30951_31037;
var G__31044 = chunk__30953_31038;
var G__31045 = count__30954_31039;
var G__31046 = (i__30955_31040 + (1));
seq__30951_31037 = G__31043;
chunk__30953_31038 = G__31044;
count__30954_31039 = G__31045;
i__30955_31040 = G__31046;
continue;
} else {
var temp__5804__auto___31047__$1 = cljs.core.seq(seq__30951_31037);
if(temp__5804__auto___31047__$1){
var seq__30951_31048__$1 = temp__5804__auto___31047__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30951_31048__$1)){
var c__5525__auto___31049 = cljs.core.chunk_first(seq__30951_31048__$1);
var G__31050 = cljs.core.chunk_rest(seq__30951_31048__$1);
var G__31051 = c__5525__auto___31049;
var G__31052 = cljs.core.count(c__5525__auto___31049);
var G__31053 = (0);
seq__30951_31037 = G__31050;
chunk__30953_31038 = G__31051;
count__30954_31039 = G__31052;
i__30955_31040 = G__31053;
continue;
} else {
var component_31054 = cljs.core.first(seq__30951_31048__$1);
var component_ident_31055 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_31054) : com.fulcrologic.fulcro.components.get_ident.call(null,component_31054));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_31055,component_31054);


var G__31056 = cljs.core.next(seq__30951_31048__$1);
var G__31057 = null;
var G__31058 = (0);
var G__31059 = (0);
seq__30951_31037 = G__31056;
chunk__30953_31038 = G__31057;
count__30954_31039 = G__31058;
i__30955_31040 = G__31059;
continue;
}
} else {
}
}
break;
}


var G__31060 = cljs.core.next(seq__30926__$1);
var G__31061 = null;
var G__31062 = (0);
var G__31063 = (0);
seq__30926 = G__31060;
chunk__30927 = G__31061;
count__30928 = G__31062;
i__30929 = G__31063;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__30959 = app__$1;
var map__30959__$1 = cljs.core.__destructure_map(map__30959);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30959__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__30960 = cljs.core.deref(runtime_atom);
var map__30960__$1 = cljs.core.__destructure_map(map__30960);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30960__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__30961 = indexes;
var map__30961__$1 = cljs.core.__destructure_map(map__30961);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30961__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30961__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30957_SHARP_,p2__30958_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__30957_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__30958_SHARP_) : class__GT_components.call(null,p2__30958_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__30962 = app__$1;
var map__30962__$1 = cljs.core.__destructure_map(map__30962);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__30963 = cljs.core.deref(runtime_atom);
var map__30963__$1 = cljs.core.__destructure_map(map__30963);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__30964 = indexes;
var map__30964__$1 = cljs.core.__destructure_map(map__30964);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30964__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30964__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30964__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30964__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__30965 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__30965__$1 = cljs.core.__destructure_map(map__30965);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30965__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30965__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__30966_31064 = cljs.core.seq(limited_to_render);
var chunk__30968_31065 = null;
var count__30969_31066 = (0);
var i__30970_31067 = (0);
while(true){
if((i__30970_31067 < count__30969_31066)){
var c_31069 = chunk__30968_31065.cljs$core$IIndexed$_nth$arity$2(null,i__30970_31067);
var ident_31070 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_31069) : com.fulcrologic.fulcro.components.get_ident.call(null,c_31069));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_31070,c_31069);


var G__31071 = seq__30966_31064;
var G__31072 = chunk__30968_31065;
var G__31073 = count__30969_31066;
var G__31074 = (i__30970_31067 + (1));
seq__30966_31064 = G__31071;
chunk__30968_31065 = G__31072;
count__30969_31066 = G__31073;
i__30970_31067 = G__31074;
continue;
} else {
var temp__5804__auto___31075 = cljs.core.seq(seq__30966_31064);
if(temp__5804__auto___31075){
var seq__30966_31076__$1 = temp__5804__auto___31075;
if(cljs.core.chunked_seq_QMARK_(seq__30966_31076__$1)){
var c__5525__auto___31077 = cljs.core.chunk_first(seq__30966_31076__$1);
var G__31078 = cljs.core.chunk_rest(seq__30966_31076__$1);
var G__31079 = c__5525__auto___31077;
var G__31080 = cljs.core.count(c__5525__auto___31077);
var G__31081 = (0);
seq__30966_31064 = G__31078;
chunk__30968_31065 = G__31079;
count__30969_31066 = G__31080;
i__30970_31067 = G__31081;
continue;
} else {
var c_31082 = cljs.core.first(seq__30966_31076__$1);
var ident_31084 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_31082) : com.fulcrologic.fulcro.components.get_ident.call(null,c_31082));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_31084,c_31082);


var G__31085 = cljs.core.next(seq__30966_31076__$1);
var G__31086 = null;
var G__31087 = (0);
var G__31088 = (0);
seq__30966_31064 = G__31085;
chunk__30968_31065 = G__31086;
count__30969_31066 = G__31087;
i__30970_31067 = G__31088;
continue;
}
} else {
}
}
break;
}

var seq__30975 = cljs.core.seq(limited_idents);
var chunk__30976 = null;
var count__30977 = (0);
var i__30978 = (0);
while(true){
if((i__30978 < count__30977)){
var i = chunk__30976.cljs$core$IIndexed$_nth$arity$2(null,i__30978);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__31089 = seq__30975;
var G__31090 = chunk__30976;
var G__31091 = count__30977;
var G__31092 = (i__30978 + (1));
seq__30975 = G__31089;
chunk__30976 = G__31090;
count__30977 = G__31091;
i__30978 = G__31092;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30975);
if(temp__5804__auto__){
var seq__30975__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30975__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30975__$1);
var G__31094 = cljs.core.chunk_rest(seq__30975__$1);
var G__31095 = c__5525__auto__;
var G__31096 = cljs.core.count(c__5525__auto__);
var G__31097 = (0);
seq__30975 = G__31094;
chunk__30976 = G__31095;
count__30977 = G__31096;
i__30978 = G__31097;
continue;
} else {
var i = cljs.core.first(seq__30975__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__31098 = cljs.core.next(seq__30975__$1);
var G__31099 = null;
var G__31100 = (0);
var G__31101 = (0);
seq__30975 = G__31098;
chunk__30976 = G__31099;
count__30977 = G__31100;
i__30978 = G__31101;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5002__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__30979 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__30979__$1 = cljs.core.__destructure_map(map__30979);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30979__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30979__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__30980_31102 = cljs.core.seq(all_idents);
var chunk__30981_31103 = null;
var count__30982_31104 = (0);
var i__30983_31105 = (0);
while(true){
if((i__30983_31105 < count__30982_31104)){
var i_31106 = chunk__30981_31103.cljs$core$IIndexed$_nth$arity$2(null,i__30983_31105);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_31106);


var G__31107 = seq__30980_31102;
var G__31108 = chunk__30981_31103;
var G__31109 = count__30982_31104;
var G__31110 = (i__30983_31105 + (1));
seq__30980_31102 = G__31107;
chunk__30981_31103 = G__31108;
count__30982_31104 = G__31109;
i__30983_31105 = G__31110;
continue;
} else {
var temp__5804__auto___31111 = cljs.core.seq(seq__30980_31102);
if(temp__5804__auto___31111){
var seq__30980_31112__$1 = temp__5804__auto___31111;
if(cljs.core.chunked_seq_QMARK_(seq__30980_31112__$1)){
var c__5525__auto___31113 = cljs.core.chunk_first(seq__30980_31112__$1);
var G__31114 = cljs.core.chunk_rest(seq__30980_31112__$1);
var G__31115 = c__5525__auto___31113;
var G__31116 = cljs.core.count(c__5525__auto___31113);
var G__31117 = (0);
seq__30980_31102 = G__31114;
chunk__30981_31103 = G__31115;
count__30982_31104 = G__31116;
i__30983_31105 = G__31117;
continue;
} else {
var i_31118 = cljs.core.first(seq__30980_31112__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_31118);


var G__31119 = cljs.core.next(seq__30980_31112__$1);
var G__31120 = null;
var G__31121 = (0);
var G__31122 = (0);
seq__30980_31102 = G__31119;
chunk__30981_31103 = G__31120;
count__30982_31104 = G__31121;
i__30983_31105 = G__31122;
continue;
}
} else {
}
}
break;
}

var seq__30984 = cljs.core.seq(extra_to_force);
var chunk__30985 = null;
var count__30986 = (0);
var i__30987 = (0);
while(true){
if((i__30987 < count__30986)){
var c = chunk__30985.cljs$core$IIndexed$_nth$arity$2(null,i__30987);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__31123 = seq__30984;
var G__31124 = chunk__30985;
var G__31125 = count__30986;
var G__31126 = (i__30987 + (1));
seq__30984 = G__31123;
chunk__30985 = G__31124;
count__30986 = G__31125;
i__30987 = G__31126;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30984);
if(temp__5804__auto__){
var seq__30984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30984__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30984__$1);
var G__31127 = cljs.core.chunk_rest(seq__30984__$1);
var G__31128 = c__5525__auto__;
var G__31129 = cljs.core.count(c__5525__auto__);
var G__31130 = (0);
seq__30984 = G__31127;
chunk__30985 = G__31128;
count__30986 = G__31129;
i__30987 = G__31130;
continue;
} else {
var c = cljs.core.first(seq__30984__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__31131 = cljs.core.next(seq__30984__$1);
var G__31132 = null;
var G__31133 = (0);
var G__31134 = (0);
seq__30984 = G__31131;
chunk__30985 = G__31132;
count__30986 = G__31133;
i__30987 = G__31134;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * DEPRECATED: Careful use of hooks/use-component will give a much more optimized experience, and async rendering in
 * React 18 may break with this renderer. Use at your own risk with React 18+.
 * 
 *   The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__30989 = arguments.length;
switch (G__30989) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__30990){
var map__30991 = p__30990;
var map__30991__$1 = cljs.core.__destructure_map(map__30991);
var options = map__30991__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5002__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e30992){var e = e30992;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,985990671);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
