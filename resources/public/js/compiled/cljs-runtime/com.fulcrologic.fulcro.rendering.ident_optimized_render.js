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
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__53718 = app__$1;
var map__53718__$1 = cljs.core.__destructure_map(map__53718);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53718__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__53719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__53720 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__53719,G__53720) : com.fulcrologic.fulcro.components.computed.call(null,G__53719,G__53720));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-1449281078,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__53721 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__53721) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__53721));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-159623474,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__53723 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__53724 = null;
var count__53725 = (0);
var i__53726 = (0);
while(true){
if((i__53726 < count__53725)){
var c = chunk__53724.cljs$core$IIndexed$_nth$arity$2(null,i__53726);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__53800 = seq__53723;
var G__53801 = chunk__53724;
var G__53802 = count__53725;
var G__53803 = (i__53726 + (1));
seq__53723 = G__53800;
chunk__53724 = G__53801;
count__53725 = G__53802;
i__53726 = G__53803;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53723);
if(temp__5804__auto__){
var seq__53723__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53723__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53723__$1);
var G__53804 = cljs.core.chunk_rest(seq__53723__$1);
var G__53805 = c__5568__auto__;
var G__53806 = cljs.core.count(c__5568__auto__);
var G__53807 = (0);
seq__53723 = G__53804;
chunk__53724 = G__53805;
count__53725 = G__53806;
i__53726 = G__53807;
continue;
} else {
var c = cljs.core.first(seq__53723__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__53808 = cljs.core.next(seq__53723__$1);
var G__53809 = null;
var G__53810 = (0);
var G__53811 = (0);
seq__53723 = G__53808;
chunk__53724 = G__53809;
count__53725 = G__53810;
i__53726 = G__53811;
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

var map__53730 = app__$1;
var map__53730__$1 = cljs.core.__destructure_map(map__53730);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53730__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__53731 = cljs.core.deref(runtime_atom);
var map__53731__$1 = cljs.core.__destructure_map(map__53731);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53731__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__53732 = indexes;
var map__53732__$1 = cljs.core.__destructure_map(map__53732);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__53733 = cljs.core.seq(classes);
var chunk__53734 = null;
var count__53735 = (0);
var i__53736 = (0);
while(true){
if((i__53736 < count__53735)){
var class$ = chunk__53734.cljs$core$IIndexed$_nth$arity$2(null,i__53736);
var seq__53751_53813 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__53753_53814 = null;
var count__53754_53815 = (0);
var i__53755_53816 = (0);
while(true){
if((i__53755_53816 < count__53754_53815)){
var component_53817 = chunk__53753_53814.cljs$core$IIndexed$_nth$arity$2(null,i__53755_53816);
var component_ident_53818 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53817) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53817));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53818,component_53817);


var G__53819 = seq__53751_53813;
var G__53820 = chunk__53753_53814;
var G__53821 = count__53754_53815;
var G__53822 = (i__53755_53816 + (1));
seq__53751_53813 = G__53819;
chunk__53753_53814 = G__53820;
count__53754_53815 = G__53821;
i__53755_53816 = G__53822;
continue;
} else {
var temp__5804__auto___53823 = cljs.core.seq(seq__53751_53813);
if(temp__5804__auto___53823){
var seq__53751_53824__$1 = temp__5804__auto___53823;
if(cljs.core.chunked_seq_QMARK_(seq__53751_53824__$1)){
var c__5568__auto___53825 = cljs.core.chunk_first(seq__53751_53824__$1);
var G__53826 = cljs.core.chunk_rest(seq__53751_53824__$1);
var G__53827 = c__5568__auto___53825;
var G__53828 = cljs.core.count(c__5568__auto___53825);
var G__53829 = (0);
seq__53751_53813 = G__53826;
chunk__53753_53814 = G__53827;
count__53754_53815 = G__53828;
i__53755_53816 = G__53829;
continue;
} else {
var component_53830 = cljs.core.first(seq__53751_53824__$1);
var component_ident_53831 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53830) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53830));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53831,component_53830);


var G__53832 = cljs.core.next(seq__53751_53824__$1);
var G__53833 = null;
var G__53834 = (0);
var G__53835 = (0);
seq__53751_53813 = G__53832;
chunk__53753_53814 = G__53833;
count__53754_53815 = G__53834;
i__53755_53816 = G__53835;
continue;
}
} else {
}
}
break;
}


var G__53836 = seq__53733;
var G__53837 = chunk__53734;
var G__53838 = count__53735;
var G__53839 = (i__53736 + (1));
seq__53733 = G__53836;
chunk__53734 = G__53837;
count__53735 = G__53838;
i__53736 = G__53839;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53733);
if(temp__5804__auto__){
var seq__53733__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53733__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53733__$1);
var G__53840 = cljs.core.chunk_rest(seq__53733__$1);
var G__53841 = c__5568__auto__;
var G__53842 = cljs.core.count(c__5568__auto__);
var G__53843 = (0);
seq__53733 = G__53840;
chunk__53734 = G__53841;
count__53735 = G__53842;
i__53736 = G__53843;
continue;
} else {
var class$ = cljs.core.first(seq__53733__$1);
var seq__53758_53844 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__53760_53845 = null;
var count__53761_53846 = (0);
var i__53762_53847 = (0);
while(true){
if((i__53762_53847 < count__53761_53846)){
var component_53848 = chunk__53760_53845.cljs$core$IIndexed$_nth$arity$2(null,i__53762_53847);
var component_ident_53849 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53848) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53848));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53849,component_53848);


var G__53850 = seq__53758_53844;
var G__53851 = chunk__53760_53845;
var G__53852 = count__53761_53846;
var G__53853 = (i__53762_53847 + (1));
seq__53758_53844 = G__53850;
chunk__53760_53845 = G__53851;
count__53761_53846 = G__53852;
i__53762_53847 = G__53853;
continue;
} else {
var temp__5804__auto___53854__$1 = cljs.core.seq(seq__53758_53844);
if(temp__5804__auto___53854__$1){
var seq__53758_53855__$1 = temp__5804__auto___53854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53758_53855__$1)){
var c__5568__auto___53856 = cljs.core.chunk_first(seq__53758_53855__$1);
var G__53857 = cljs.core.chunk_rest(seq__53758_53855__$1);
var G__53858 = c__5568__auto___53856;
var G__53859 = cljs.core.count(c__5568__auto___53856);
var G__53860 = (0);
seq__53758_53844 = G__53857;
chunk__53760_53845 = G__53858;
count__53761_53846 = G__53859;
i__53762_53847 = G__53860;
continue;
} else {
var component_53861 = cljs.core.first(seq__53758_53855__$1);
var component_ident_53862 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53861) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53861));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53862,component_53861);


var G__53863 = cljs.core.next(seq__53758_53855__$1);
var G__53864 = null;
var G__53865 = (0);
var G__53866 = (0);
seq__53758_53844 = G__53863;
chunk__53760_53845 = G__53864;
count__53761_53846 = G__53865;
i__53762_53847 = G__53866;
continue;
}
} else {
}
}
break;
}


var G__53867 = cljs.core.next(seq__53733__$1);
var G__53868 = null;
var G__53869 = (0);
var G__53870 = (0);
seq__53733 = G__53867;
chunk__53734 = G__53868;
count__53735 = G__53869;
i__53736 = G__53870;
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
var map__53766 = app__$1;
var map__53766__$1 = cljs.core.__destructure_map(map__53766);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__53767 = cljs.core.deref(runtime_atom);
var map__53767__$1 = cljs.core.__destructure_map(map__53767);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53767__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__53768 = indexes;
var map__53768__$1 = cljs.core.__destructure_map(map__53768);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53764_SHARP_,p2__53765_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__53764_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__53765_SHARP_) : class__GT_components.call(null,p2__53765_SHARP_)));
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
var map__53769 = app__$1;
var map__53769__$1 = cljs.core.__destructure_map(map__53769);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53769__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53769__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__53770 = cljs.core.deref(runtime_atom);
var map__53770__$1 = cljs.core.__destructure_map(map__53770);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__53771 = indexes;
var map__53771__$1 = cljs.core.__destructure_map(map__53771);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53771__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53771__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53771__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53771__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__53772 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__53772__$1 = cljs.core.__destructure_map(map__53772);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__53773_53871 = cljs.core.seq(limited_to_render);
var chunk__53775_53872 = null;
var count__53776_53873 = (0);
var i__53777_53874 = (0);
while(true){
if((i__53777_53874 < count__53776_53873)){
var c_53875 = chunk__53775_53872.cljs$core$IIndexed$_nth$arity$2(null,i__53777_53874);
var ident_53876 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_53875) : com.fulcrologic.fulcro.components.get_ident.call(null,c_53875));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_53876,c_53875);


var G__53877 = seq__53773_53871;
var G__53878 = chunk__53775_53872;
var G__53879 = count__53776_53873;
var G__53880 = (i__53777_53874 + (1));
seq__53773_53871 = G__53877;
chunk__53775_53872 = G__53878;
count__53776_53873 = G__53879;
i__53777_53874 = G__53880;
continue;
} else {
var temp__5804__auto___53881 = cljs.core.seq(seq__53773_53871);
if(temp__5804__auto___53881){
var seq__53773_53882__$1 = temp__5804__auto___53881;
if(cljs.core.chunked_seq_QMARK_(seq__53773_53882__$1)){
var c__5568__auto___53883 = cljs.core.chunk_first(seq__53773_53882__$1);
var G__53884 = cljs.core.chunk_rest(seq__53773_53882__$1);
var G__53885 = c__5568__auto___53883;
var G__53886 = cljs.core.count(c__5568__auto___53883);
var G__53887 = (0);
seq__53773_53871 = G__53884;
chunk__53775_53872 = G__53885;
count__53776_53873 = G__53886;
i__53777_53874 = G__53887;
continue;
} else {
var c_53888 = cljs.core.first(seq__53773_53882__$1);
var ident_53889 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_53888) : com.fulcrologic.fulcro.components.get_ident.call(null,c_53888));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_53889,c_53888);


var G__53890 = cljs.core.next(seq__53773_53882__$1);
var G__53891 = null;
var G__53892 = (0);
var G__53893 = (0);
seq__53773_53871 = G__53890;
chunk__53775_53872 = G__53891;
count__53776_53873 = G__53892;
i__53777_53874 = G__53893;
continue;
}
} else {
}
}
break;
}

var seq__53782 = cljs.core.seq(limited_idents);
var chunk__53783 = null;
var count__53784 = (0);
var i__53785 = (0);
while(true){
if((i__53785 < count__53784)){
var i = chunk__53783.cljs$core$IIndexed$_nth$arity$2(null,i__53785);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__53894 = seq__53782;
var G__53895 = chunk__53783;
var G__53896 = count__53784;
var G__53897 = (i__53785 + (1));
seq__53782 = G__53894;
chunk__53783 = G__53895;
count__53784 = G__53896;
i__53785 = G__53897;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53782);
if(temp__5804__auto__){
var seq__53782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53782__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53782__$1);
var G__53898 = cljs.core.chunk_rest(seq__53782__$1);
var G__53899 = c__5568__auto__;
var G__53900 = cljs.core.count(c__5568__auto__);
var G__53901 = (0);
seq__53782 = G__53898;
chunk__53783 = G__53899;
count__53784 = G__53900;
i__53785 = G__53901;
continue;
} else {
var i = cljs.core.first(seq__53782__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__53902 = cljs.core.next(seq__53782__$1);
var G__53903 = null;
var G__53904 = (0);
var G__53905 = (0);
seq__53782 = G__53902;
chunk__53783 = G__53903;
count__53784 = G__53904;
i__53785 = G__53905;
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
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var map__53786 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__53786__$1 = cljs.core.__destructure_map(map__53786);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53786__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53786__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__53787_53906 = cljs.core.seq(all_idents);
var chunk__53788_53907 = null;
var count__53789_53908 = (0);
var i__53790_53909 = (0);
while(true){
if((i__53790_53909 < count__53789_53908)){
var i_53911 = chunk__53788_53907.cljs$core$IIndexed$_nth$arity$2(null,i__53790_53909);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_53911);


var G__53912 = seq__53787_53906;
var G__53913 = chunk__53788_53907;
var G__53914 = count__53789_53908;
var G__53915 = (i__53790_53909 + (1));
seq__53787_53906 = G__53912;
chunk__53788_53907 = G__53913;
count__53789_53908 = G__53914;
i__53790_53909 = G__53915;
continue;
} else {
var temp__5804__auto___53916 = cljs.core.seq(seq__53787_53906);
if(temp__5804__auto___53916){
var seq__53787_53917__$1 = temp__5804__auto___53916;
if(cljs.core.chunked_seq_QMARK_(seq__53787_53917__$1)){
var c__5568__auto___53918 = cljs.core.chunk_first(seq__53787_53917__$1);
var G__53919 = cljs.core.chunk_rest(seq__53787_53917__$1);
var G__53920 = c__5568__auto___53918;
var G__53921 = cljs.core.count(c__5568__auto___53918);
var G__53922 = (0);
seq__53787_53906 = G__53919;
chunk__53788_53907 = G__53920;
count__53789_53908 = G__53921;
i__53790_53909 = G__53922;
continue;
} else {
var i_53923 = cljs.core.first(seq__53787_53917__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_53923);


var G__53925 = cljs.core.next(seq__53787_53917__$1);
var G__53926 = null;
var G__53927 = (0);
var G__53928 = (0);
seq__53787_53906 = G__53925;
chunk__53788_53907 = G__53926;
count__53789_53908 = G__53927;
i__53790_53909 = G__53928;
continue;
}
} else {
}
}
break;
}

var seq__53791 = cljs.core.seq(extra_to_force);
var chunk__53792 = null;
var count__53793 = (0);
var i__53794 = (0);
while(true){
if((i__53794 < count__53793)){
var c = chunk__53792.cljs$core$IIndexed$_nth$arity$2(null,i__53794);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__53929 = seq__53791;
var G__53930 = chunk__53792;
var G__53931 = count__53793;
var G__53932 = (i__53794 + (1));
seq__53791 = G__53929;
chunk__53792 = G__53930;
count__53793 = G__53931;
i__53794 = G__53932;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53791);
if(temp__5804__auto__){
var seq__53791__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53791__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53791__$1);
var G__53933 = cljs.core.chunk_rest(seq__53791__$1);
var G__53934 = c__5568__auto__;
var G__53935 = cljs.core.count(c__5568__auto__);
var G__53936 = (0);
seq__53791 = G__53933;
chunk__53792 = G__53934;
count__53793 = G__53935;
i__53794 = G__53936;
continue;
} else {
var c = cljs.core.first(seq__53791__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__53938 = cljs.core.next(seq__53791__$1);
var G__53939 = null;
var G__53940 = (0);
var G__53941 = (0);
seq__53791 = G__53938;
chunk__53792 = G__53939;
count__53793 = G__53940;
i__53794 = G__53941;
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
var G__53796 = arguments.length;
switch (G__53796) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__53797){
var map__53798 = p__53797;
var map__53798__$1 = cljs.core.__destructure_map(map__53798);
var options = map__53798__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53798__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53798__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e53799){var e = e53799;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1539160985,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
