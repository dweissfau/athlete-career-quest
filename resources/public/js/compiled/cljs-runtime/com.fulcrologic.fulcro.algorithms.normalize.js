goog.provide('com.fulcrologic.fulcro.algorithms.normalize');
/**
 * Insert or merge a data entity into a state table under the given `ident`.
 *   A better version of `(update-in state ident merge entity-map)`.
 *   Ex.: `(upsert-ident {} [:person/id 1] #:person{:id 1 :age 42}) => {:person/id {1 #:person{:id 1, :age 42}}}`
 */
com.fulcrologic.fulcro.algorithms.normalize.upsert_ident = (function com$fulcrologic$fulcro$algorithms$normalize$upsert_ident(state,ident,entity_map){
try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,ident,cljs.core.merge,entity_map);
}catch (e45684){var e = e45684;
if(cljs.core.map_QMARK_(entity_map)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query join indicates the data should contain a data map but the actual data is ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity_map], 0))," Joined component's ident: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Insert/update of the presumed data entity ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity_map], 0))," into the state at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident)," failed due to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),cljs.core.PersistentArrayMap.EMPTY,e);
}});
com.fulcrologic.fulcro.algorithms.normalize.hide_not_found = (function com$fulcrologic$fulcro$algorithms$normalize$hide_not_found(m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__45685){
var vec__45686 = p__45685;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45686,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45686,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),k)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))))){
return acc;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
});
com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_ = (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR_(query,data,tables,union_seen,transform){
var data__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = transform;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.vector_QMARK_(data)));
} else {
return and__5043__auto__;
}
})())?(transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(query,data) : transform.call(null,query,data)):data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,com.fulcrologic.fulcro.algorithms.normalize.hide_not_found(data__$1));
if((ident == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Union components must have an ident",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((cljs.core.second(ident) == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.normalize",null,57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union component returned nil for the ID of an ident during normalize."], null);
}),null)),null,1476047263,null);
} else {
}

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__45695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__45696 = data__$1;
var G__45697 = tables;
var G__45698 = union_seen;
var G__45699 = transform;
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(G__45695,G__45696,G__45697,G__45698,G__45699) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,G__45695,G__45696,G__45697,G__45698,G__45699));
})(),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.normalize","tag","com.fulcrologic.fulcro.algorithms.normalize/tag",313912943),cljs.core.first(ident));
}
} else {
if(cljs.core.vector_QMARK_(data__$1)){
return data__$1;
} else {
var q = cljs.core.seq(query);
var ret = data__$1;
while(true){
if((!((q == null)))){
var expr = cljs.core.first(q);
if(com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(expr)){
var vec__45728 = com.fulcrologic.fulcro.algorithms.do_not_use.join_entry(expr);
var join_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(0),null);
var subquery = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45728,(1),null);
var recursive_QMARK_ = com.fulcrologic.fulcro.algorithms.do_not_use.recursion_QMARK_(subquery);
var union_entry = ((com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(expr))?subquery:union_seen);
var subquery__$1 = ((recursive_QMARK_)?(((!((union_seen == null))))?union_seen:query):subquery);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(subquery__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,join_key);
if(((recursive_QMARK_) && (edn_query_language.core.ident_QMARK_(v)))){
var G__45816 = cljs.core.next(q);
var G__45817 = ret;
q = G__45816;
ret = G__45817;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(subquery__$1,v,tables,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,subquery__$1,v,tables,union_entry,transform));
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(class$)))))))){
var i = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,com.fulcrologic.fulcro.algorithms.normalize.hide_not_found(x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tables,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__45836 = cljs.core.next(q);
var G__45837 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,i);
q = G__45836;
ret = G__45837;
continue;
} else {
var G__45838 = cljs.core.next(q);
var G__45839 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,x);
q = G__45838;
ret = G__45839;
continue;
}
} else {
if(((cljs.core.vector_QMARK_(v)) && ((((!(edn_query_language.core.ident_QMARK_(v)))) && ((!(edn_query_language.core.ident_QMARK_(cljs.core.first(v))))))))){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (p1__45691_SHARP_){
return (com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.cljs$core$IFn$_invoke$arity$5(subquery__$1,p1__45691_SHARP_,tables,union_entry,transform) : com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_.call(null,subquery__$1,p1__45691_SHARP_,tables,union_entry,transform));
});})(q,ret,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
),v);
if((!((((class$ == null)) || ((!(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(class$)))))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (p1__45692_SHARP_){
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,com.fulcrologic.fulcro.algorithms.normalize.hide_not_found(p1__45692_SHARP_));
});})(q,ret,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
),xs);
if(cljs.core.vector_QMARK_(subquery__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tables,((function (q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (tables_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR__$_merge_to_client_db(state,p__45736){
var vec__45738 = p__45736;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(0),null);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(1),null);
return com.fulcrologic.fulcro.algorithms.normalize.upsert_ident(state,ident,entity);
});})(q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
,tables_SINGLEQUOTE_,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tables,((function (q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function (tables_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1){
return (function com$fulcrologic$fulcro$algorithms$normalize$normalize_STAR__$_merge_to_client_db(state,p__45742){
var vec__45743 = p__45742;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45743,(0),null);
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45743,(1),null);
return com.fulcrologic.fulcro.algorithms.normalize.upsert_ident(state,ident,entity);
});})(q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
,tables_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__45728,join_key,subquery,recursive_QMARK_,union_entry,subquery__$1,class$,v,expr,data__$1))
);
}

var G__45876 = cljs.core.next(q);
var G__45877 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,is);
q = G__45876;
ret = G__45877;
continue;
} else {
var G__45879 = cljs.core.next(q);
var G__45880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,xs);
q = G__45879;
ret = G__45880;
continue;
}
} else {
if((v == null)){
var G__45881 = cljs.core.next(q);
var G__45882 = ret;
q = G__45881;
ret = G__45882;
continue;
} else {
var G__45883 = cljs.core.next(q);
var G__45884 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,join_key,v);
q = G__45883;
ret = G__45884;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k);
if((v == null)){
var G__45887 = cljs.core.next(q);
var G__45888 = ret;
q = G__45887;
ret = G__45888;
continue;
} else {
var G__45893 = cljs.core.next(q);
var G__45894 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__45893;
ret = G__45894;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
com.fulcrologic.fulcro.algorithms.normalize.better_normalize_STAR_ = (function com$fulcrologic$fulcro$algorithms$normalize$better_normalize_STAR_(query,data,tables,union_seen,transform){
try{return com.fulcrologic.fulcro.algorithms.normalize.normalize_STAR_(query,data,tables,union_seen,transform);
}catch (e45752){var e = e45752;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.normalize",null,148,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Normalize failed and no data will be inserted into the client DB. Error:",cljs.core.ex_message(e),(function (){var temp__5802__auto__ = (function (){var G__45754 = query;
var G__45754__$1 = (((G__45754 == null))?null:cljs.core.meta(G__45754));
var G__45754__$2 = (((G__45754__$1 == null))?null:new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__45754__$1));
if((G__45754__$2 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.component_name(G__45754__$2);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
return ["Target component: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('');
} else {
return ["Query: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
})(),"Data: ",data], null);
}),null)),null,-1994713956,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
/**
 * Given a component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db = (function com$fulcrologic$fulcro$algorithms$normalize$tree__GT_db(var_args){
var G__45766 = arguments.length;
switch (G__45766) {
case 2:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
return com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(x,data,merge_idents,null);
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4 = (function (x,data,merge_idents,transform){
var tables = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(x,data));
var ret = com.fulcrologic.fulcro.algorithms.normalize.better_normalize_STAR_(x__$1,data,tables,null,transform);
if(merge_idents){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,cljs.core.deref(tables)], 0));
} else {
return cljs.core.with_meta(ret,cljs.core.deref(tables));
}
}));

(com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.normalize.js.map
