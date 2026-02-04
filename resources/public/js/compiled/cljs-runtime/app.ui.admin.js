goog.provide('app.ui.admin');
/**
 * 
 */
app.ui.admin.set_active_tab = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.ui.admin","set-active-tab","app.ui.admin/set-active-tab",408330092,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.ui.admin","set-active-tab","app.ui.admin/set-active-tab",408330092,null),(function (fulcro_mutation_env_symbol){
var map__42361 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__42361__$1 = cljs.core.__destructure_map(map__42361);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42361__$1,new cljs.core.Keyword(null,"tab","tab",-559583621));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$ui$admin$action(p__42362){
var map__42363 = p__42362;
var map__42363__$1 = cljs.core.__destructure_map(map__42363);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42363__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__42364_42457 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__42365_42458 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__42365_42458);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","dashboard","admin/dashboard",-673035363),new cljs.core.Keyword(null,"admin","admin",-1239101627),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),tab);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__42364_42457);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__42366 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__42367 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__42367);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__42366);
}})], null);
}));
/**
 * 
 */
app.ui.admin.update_weight = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.ui.admin","update-weight","app.ui.admin/update-weight",-207510807,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.ui.admin","update-weight","app.ui.admin/update-weight",-207510807,null),(function (fulcro_mutation_env_symbol){
var map__42368 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__42368__$1 = cljs.core.__destructure_map(map__42368);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42368__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42368__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$ui$admin$action(p__42369){
var map__42370 = p__42369;
var map__42370__$1 = cljs.core.__destructure_map(map__42370);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42370__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__42371_42459 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__42372_42460 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__42372_42460);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","dashboard","admin/dashboard",-673035363),new cljs.core.Keyword(null,"admin","admin",-1239101627),new cljs.core.Keyword(null,"weights","weights",-1097626197),category], null),weight);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__42371_42459);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__42373 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__42374 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__42374);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__42373);
}})], null);
}));

var options__29976__auto___42461 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$admin$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","type","question/type",-2003827326),new cljs.core.Keyword("question","is-active","question/is-active",-1785956410)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$admin$render_QuestionListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42377 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42377__$1 = cljs.core.__destructure_map(map__42377);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42377__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42377__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42377__$1,new cljs.core.Keyword("question","type","question/type",-2003827326));
var is_active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42377__$1,new cljs.core.Keyword("question","is-active","question/is-active",-1785956410));
var on_edit = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"on-edit","on-edit",745088083)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword(null,"on-edit","on-edit",745088083)));
var on_toggle = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774)));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"marginBottom": "12px", "display": "flex", "alignItems": "center"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"flex": (1)})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontWeight": "500", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "gap": "12px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.8rem", "color": "#64748b", "backgroundColor": "#f1f5f9", "padding": "2px 8px", "borderRadius": "4px"})}),com.fulcrologic.fulcro.components.force_children(type)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"0.8rem",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(is_active)?"#166534":"#991b1b"),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),(cljs.core.truth_(is_active)?"#dcfce7":"#fee2e2"),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 8px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"4px"], null)], null),(cljs.core.truth_(is_active)?"Active":"Inactive")], null),null))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "gap": "8px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-secondary",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"0.85rem"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_edit], null),"Edit"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-secondary",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"0.85rem"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_toggle], null),(cljs.core.truth_(is_active)?"Deactivate":"Activate")], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.admin !== 'undefined') && (typeof app.ui.admin.QuestionListItem !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.admin.QuestionListItem = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42461,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.admin.QuestionListItem,new cljs.core.Keyword("app.ui.admin","QuestionListItem","app.ui.admin/QuestionListItem",-1501116284),options__29976__auto___42461);
app.ui.admin.ui_question_list_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.admin.QuestionListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__29976__auto___42462 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$admin$render_WeightSlider(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42387 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42387__$1 = cljs.core.__destructure_map(map__42387);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "8px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontWeight": "500"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((value * (100)))),"%"].join(''))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__42383_SHARP_){
var G__42388 = parseFloat(p1__42383_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__42388) : on_change.call(null,G__42388));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null),null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.admin !== 'undefined') && (typeof app.ui.admin.WeightSlider !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.admin.WeightSlider = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42462,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.admin.WeightSlider,new cljs.core.Keyword("app.ui.admin","WeightSlider","app.ui.admin/WeightSlider",594950424),options__29976__auto___42462);
app.ui.admin.ui_weight_slider = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.admin.WeightSlider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"label","label",1718410804)], null));

var options__29976__auto___42466 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$admin$render_StatsCard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42394 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42394__$1 = cljs.core.__destructure_map(map__42394);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"value","value",305978217));
var subtitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"textAlign": "center", "padding": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"2.5rem",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5002__auto__ = color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#2563eb";
}
})()], null)], null),value], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontWeight": "500", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(title)])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(subtitle)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "0.9rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children(subtitle)]):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.admin !== 'undefined') && (typeof app.ui.admin.StatsCard !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.admin.StatsCard = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42466,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.admin.StatsCard,new cljs.core.Keyword("app.ui.admin","StatsCard","app.ui.admin/StatsCard",-1740065978),options__29976__auto___42466);
app.ui.admin.ui_stats_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.admin.StatsCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"title","title",636505583)], null));

var options__29976__auto___42467 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$admin$render_QuestionManagement(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42397 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42397__$1 = cljs.core.__destructure_map(map__42397);
var questions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42397__$1,new cljs.core.Keyword(null,"questions","questions",1226225380));
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42397__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Question Bank"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "btn btn-primary"}),"+ Add Question"]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({"style": ({"marginRight": "12px"})}),"Filter by category:"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element(["select",({"style": ({"padding": "8px 16px", "borderRadius": "6px", "border": "1px solid #e2e8f0"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element(["option",({"value": ""}),"All Categories"])),com.fulcrologic.fulcro.components.force_children((function (){var iter__5480__auto__ = (function app$ui$admin$render_QuestionManagement_$_iter__42400(s__42401){
return (new cljs.core.LazySeq(null,(function (){
var s__42401__$1 = s__42401;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42401__$1);
if(temp__5804__auto__){
var s__42401__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42401__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42401__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42403 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42402 = (0);
while(true){
if((i__42402 < size__5479__auto__)){
var map__42404 = cljs.core._nth(c__5478__auto__,i__42402);
var map__42404__$1 = cljs.core.__destructure_map(map__42404);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword("category","id","category/id",-1505923754));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword("category","display-name","category/display-name",643312825));
cljs.core.chunk_append(b__42403,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),display_name], null),null));

var G__42469 = (i__42402 + (1));
i__42402 = G__42469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42403),app$ui$admin$render_QuestionManagement_$_iter__42400(cljs.core.chunk_rest(s__42401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42403),null);
}
} else {
var map__42405 = cljs.core.first(s__42401__$2);
var map__42405__$1 = cljs.core.__destructure_map(map__42405);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42405__$1,new cljs.core.Keyword("category","id","category/id",-1505923754));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42405__$1,new cljs.core.Keyword("category","display-name","category/display-name",643312825));
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),display_name], null),null),app$ui$admin$render_QuestionManagement_$_iter__42400(cljs.core.rest(s__42401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(categories);
})())]))]),(function (){var iter__5480__auto__ = (function app$ui$admin$render_QuestionManagement_$_iter__42406(s__42407){
return (new cljs.core.LazySeq(null,(function (){
var s__42407__$1 = s__42407;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42407__$1);
if(temp__5804__auto__){
var s__42407__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42407__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42407__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42409 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42408 = (0);
while(true){
if((i__42408 < size__5479__auto__)){
var question = cljs.core._nth(c__5478__auto__,i__42408);
cljs.core.chunk_append(b__42409,(function (){var G__42411 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"on-edit","on-edit",745088083),((function (i__42408,question,c__5478__auto__,size__5479__auto__,b__42409,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories){
return (function (){
return console.log("Edit",new cljs.core.Keyword("question","id","question/id",-541266322).cljs$core$IFn$_invoke$arity$1(question));
});})(i__42408,question,c__5478__auto__,size__5479__auto__,b__42409,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),((function (i__42408,question,c__5478__auto__,size__5479__auto__,b__42409,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories){
return (function (){
return console.log("Toggle",new cljs.core.Keyword("question","id","question/id",-541266322).cljs$core$IFn$_invoke$arity$1(question));
});})(i__42408,question,c__5478__auto__,size__5479__auto__,b__42409,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories))
], 0));
return (app.ui.admin.ui_question_list_item.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_question_list_item.cljs$core$IFn$_invoke$arity$1(G__42411) : app.ui.admin.ui_question_list_item.call(null,G__42411));
})());

var G__42470 = (i__42408 + (1));
i__42408 = G__42470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42409),app$ui$admin$render_QuestionManagement_$_iter__42406(cljs.core.chunk_rest(s__42407__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42409),null);
}
} else {
var question = cljs.core.first(s__42407__$2);
return cljs.core.cons((function (){var G__42412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"on-edit","on-edit",745088083),((function (question,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories){
return (function (){
return console.log("Edit",new cljs.core.Keyword("question","id","question/id",-541266322).cljs$core$IFn$_invoke$arity$1(question));
});})(question,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),((function (question,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories){
return (function (){
return console.log("Toggle",new cljs.core.Keyword("question","id","question/id",-541266322).cljs$core$IFn$_invoke$arity$1(question));
});})(question,s__42407__$2,temp__5804__auto__,map__42397,map__42397__$1,questions,categories))
], 0));
return (app.ui.admin.ui_question_list_item.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_question_list_item.cljs$core$IFn$_invoke$arity$1(G__42412) : app.ui.admin.ui_question_list_item.call(null,G__42412));
})(),app$ui$admin$render_QuestionManagement_$_iter__42406(cljs.core.rest(s__42407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(questions);
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.admin !== 'undefined') && (typeof app.ui.admin.QuestionManagement !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.admin.QuestionManagement = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42467,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.admin.QuestionManagement,new cljs.core.Keyword("app.ui.admin","QuestionManagement","app.ui.admin/QuestionManagement",-752036449),options__29976__auto___42467);
app.ui.admin.ui_question_management = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.admin.QuestionManagement);

var options__29976__auto___42471 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$admin$render_ScoringConfiguration(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42419 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42419__$1 = cljs.core.__destructure_map(map__42419);
var weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"weights","weights",-1097626197));
var on_weight_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"on-weight-change","on-weight-change",700755901));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px"})}),"Category Weights"]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b", "marginBottom": "24px"})}),"Adjust how much each category contributes to the final career recommendations."]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children((function (){var G__42421 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Interests & Passions",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,new cljs.core.Keyword(null,"interests","interests",1200294902),0.25),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42414_SHARP_){
return (on_weight_change.cljs$core$IFn$_invoke$arity$2 ? on_weight_change.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"interests","interests",1200294902),p1__42414_SHARP_) : on_weight_change.call(null,new cljs.core.Keyword(null,"interests","interests",1200294902),p1__42414_SHARP_));
})], null);
return (app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1(G__42421) : app.ui.admin.ui_weight_slider.call(null,G__42421));
})()),com.fulcrologic.fulcro.components.force_children((function (){var G__42422 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Skills & Strengths",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,new cljs.core.Keyword(null,"skills","skills",958701426),0.3),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42415_SHARP_){
return (on_weight_change.cljs$core$IFn$_invoke$arity$2 ? on_weight_change.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"skills","skills",958701426),p1__42415_SHARP_) : on_weight_change.call(null,new cljs.core.Keyword(null,"skills","skills",958701426),p1__42415_SHARP_));
})], null);
return (app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1(G__42422) : app.ui.admin.ui_weight_slider.call(null,G__42422));
})()),com.fulcrologic.fulcro.components.force_children((function (){var G__42424 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Financial Goals",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,new cljs.core.Keyword(null,"financial","financial",6632681),0.2),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42416_SHARP_){
return (on_weight_change.cljs$core$IFn$_invoke$arity$2 ? on_weight_change.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"financial","financial",6632681),p1__42416_SHARP_) : on_weight_change.call(null,new cljs.core.Keyword(null,"financial","financial",6632681),p1__42416_SHARP_));
})], null);
return (app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1(G__42424) : app.ui.admin.ui_weight_slider.call(null,G__42424));
})()),com.fulcrologic.fulcro.components.force_children((function (){var G__42425 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Timeline Preferences",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,new cljs.core.Keyword(null,"timeline","timeline",192903161),0.25),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42417_SHARP_){
return (on_weight_change.cljs$core$IFn$_invoke$arity$2 ? on_weight_change.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timeline","timeline",192903161),p1__42417_SHARP_) : on_weight_change.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),p1__42417_SHARP_));
})], null);
return (app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_weight_slider.cljs$core$IFn$_invoke$arity$1(G__42425) : app.ui.admin.ui_weight_slider.call(null,G__42425));
})()),com.fulcrologic.fulcro.components.force_children((function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(weights));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "24px", "paddingTop": "16px", "borderTop": "1px solid #e2e8f0", "display": "flex", "justifyContent": "space-between", "alignItems": "center"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((total * (100)))),"%"].join('')], null),null)),com.fulcrologic.fulcro.components.force_children(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(Math.round((total * (100))),(100)))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#ef4444", "fontSize": "0.9rem"})}),"Weights should sum to 100%"]):null))]);
})())]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "btn btn-primary"}),"Save Weights"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "btn btn-secondary", "style": ({"marginLeft": "12px"})}),"Reset to Default"]))])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.admin !== 'undefined') && (typeof app.ui.admin.ScoringConfiguration !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.admin.ScoringConfiguration = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42471,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.admin.ScoringConfiguration,new cljs.core.Keyword("app.ui.admin","ScoringConfiguration","app.ui.admin/ScoringConfiguration",-246035326),options__29976__auto___42471);
app.ui.admin.ui_scoring_configuration = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.admin.ScoringConfiguration);

var options__29976__auto___42472 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$admin$render_AnalyticsTab(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42426 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42426__$1 = cljs.core.__destructure_map(map__42426);
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42426__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
var popular_careers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42426__$1,new cljs.core.Keyword(null,"popular-careers","popular-careers",800205574));
var completion_trend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42426__$1,new cljs.core.Keyword(null,"completion-trend","completion-trend",353005493));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px"})}),"Analytics Overview"]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(200px, 1fr))", "gap": "16px", "marginBottom": "32px"})}),com.fulcrologic.fulcro.components.force_children((function (){var G__42427 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Total Sessions",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(stats),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"All time"], null);
return (app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1(G__42427) : app.ui.admin.ui_stats_card.call(null,G__42427));
})()),com.fulcrologic.fulcro.components.force_children((function (){var G__42428 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Completed",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(stats),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"Finished assessment",new cljs.core.Keyword(null,"color","color",1011675173),"#22c55e"], null);
return (app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1(G__42428) : app.ui.admin.ui_stats_card.call(null,G__42428));
})()),com.fulcrologic.fulcro.components.force_children((function (){var G__42429 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Completion Rate",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(stats)),"%"].join(''),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"Of all sessions",new cljs.core.Keyword(null,"color","color",1011675173),"#f59e0b"], null);
return (app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1(G__42429) : app.ui.admin.ui_stats_card.call(null,G__42429));
})()),com.fulcrologic.fulcro.components.force_children((function (){var G__42430 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Avg. Duration",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(stats),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"Minutes"], null);
return (app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_stats_card.cljs$core$IFn$_invoke$arity$1(G__42430) : app.ui.admin.ui_stats_card.call(null,G__42430));
})())]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "16px"})}),"Most Recommended Careers"])),com.fulcrologic.fulcro.components.force_children((function (){var iter__5480__auto__ = (function app$ui$admin$render_AnalyticsTab_$_iter__42431(s__42432){
return (new cljs.core.LazySeq(null,(function (){
var s__42432__$1 = s__42432;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42432__$1);
if(temp__5804__auto__){
var s__42432__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42432__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42432__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42434 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42433 = (0);
while(true){
if((i__42433 < size__5479__auto__)){
var map__42435 = cljs.core._nth(c__5478__auto__,i__42433);
var map__42435__$1 = cljs.core.__destructure_map(map__42435);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var percentage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650));
cljs.core.chunk_append(b__42434,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"12px"], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"%)"].join(''))]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"%"].join('')], null)], null)], null),null))])], null),null));

var G__42473 = (i__42433 + (1));
i__42433 = G__42473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42434),app$ui$admin$render_AnalyticsTab_$_iter__42431(cljs.core.chunk_rest(s__42432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42434),null);
}
} else {
var map__42436 = cljs.core.first(s__42432__$2);
var map__42436__$1 = cljs.core.__destructure_map(map__42436);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var percentage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650));
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"12px"], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"%)"].join(''))]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"%"].join('')], null)], null)], null),null))])], null),null),app$ui$admin$render_AnalyticsTab_$_iter__42431(cljs.core.rest(s__42432__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(popular_careers);
})())]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"marginTop": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "16px"})}),"Question Drop-off Points"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b", "marginBottom": "16px"})}),"Questions where users most commonly stop the assessment."])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["table",({"style": ({"width": "100%"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({"style": ({"textAlign": "left", "borderBottom": "1px solid #e2e8f0"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({"style": ({"padding": "12px 0"})}),"Question"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({"style": ({"padding": "12px 0"})}),"Drop-off Rate"]))])], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({"style": ({"borderBottom": "1px solid #e2e8f0"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"style": ({"padding": "12px 0"})}),"Q15: Financial Goals"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"style": ({"padding": "12px 0"})}),"8.2%"]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({"style": ({"borderBottom": "1px solid #e2e8f0"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"style": ({"padding": "12px 0"})}),"Q8: Skills Ranking"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"style": ({"padding": "12px 0"})}),"5.1%"]))]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"style": ({"padding": "12px 0"})}),"Q22: Long-term Vision"]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"style": ({"padding": "12px 0"})}),"4.3%"])], null),null)], null),null))]))])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.admin !== 'undefined') && (typeof app.ui.admin.AnalyticsTab !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.admin.AnalyticsTab = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42472,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.admin.AnalyticsTab,new cljs.core.Keyword("app.ui.admin","AnalyticsTab","app.ui.admin/AnalyticsTab",-1803759446),options__29976__auto___42472);
app.ui.admin.ui_analytics_tab = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.admin.AnalyticsTab);

var options__29976__auto___42474 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$admin$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","active-tab","admin/active-tab",1009763689),new cljs.core.Keyword("admin","weights","admin/weights",-988178372),new cljs.core.Keyword("admin","stats","admin/stats",-530373266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("admin","questions","admin/questions",1249425489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","type","question/type",-2003827326),new cljs.core.Keyword("question","is-active","question/is-active",-1785956410)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("admin","categories","admin/categories",170646017),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("category","id","category/id",-1505923754),new cljs.core.Keyword("category","name","category/name",1793490219),new cljs.core.Keyword("category","display-name","category/display-name",643312825)], null)], null),new cljs.core.Keyword("admin","popular-careers","admin/popular-careers",858271605)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$admin$ident_STAR_(this$,p__42437){
var map__42438 = p__42437;
var map__42438__$1 = cljs.core.__destructure_map(map__42438);
var active_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("admin","active-tab","admin/active-tab",1009763689));
var weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("admin","weights","admin/weights",-988178372));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("admin","stats","admin/stats",-530373266));
var questions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("admin","questions","admin/questions",1249425489));
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("admin","categories","admin/categories",170646017));
var popular_careers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("admin","popular-careers","admin/popular-careers",858271605));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","dashboard","admin/dashboard",-673035363),new cljs.core.Keyword(null,"admin","admin",-1239101627)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$admin$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("admin","active-tab","admin/active-tab",1009763689),new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.Keyword("admin","weights","admin/weights",-988178372),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interests","interests",1200294902),0.25,new cljs.core.Keyword(null,"skills","skills",958701426),0.3,new cljs.core.Keyword(null,"financial","financial",6632681),0.2,new cljs.core.Keyword(null,"timeline","timeline",192903161),0.25], null),new cljs.core.Keyword("admin","stats","admin/stats",-530373266),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total","total",1916810418),(1247),new cljs.core.Keyword(null,"completed","completed",-486056503),(892),new cljs.core.Keyword(null,"rate","rate",-1428659698),(72),new cljs.core.Keyword(null,"duration","duration",1444101068),"14"], null),new cljs.core.Keyword("admin","questions","admin/questions",1249425489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("question","id","question/id",-541266322),"1",new cljs.core.Keyword("question","text","question/text",-1429934587),"What year are you in school?",new cljs.core.Keyword("question","type","question/type",-2003827326),"multiple_choice",new cljs.core.Keyword("question","is-active","question/is-active",-1785956410),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("question","id","question/id",-541266322),"2",new cljs.core.Keyword("question","text","question/text",-1429934587),"I enjoy working directly with people.",new cljs.core.Keyword("question","type","question/type",-2003827326),"likert",new cljs.core.Keyword("question","is-active","question/is-active",-1785956410),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("question","id","question/id",-541266322),"3",new cljs.core.Keyword("question","text","question/text",-1429934587),"Rank these activities...",new cljs.core.Keyword("question","type","question/type",-2003827326),"ranking",new cljs.core.Keyword("question","is-active","question/is-active",-1785956410),true], null)], null),new cljs.core.Keyword("admin","categories","admin/categories",170646017),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("category","id","category/id",-1505923754),"1",new cljs.core.Keyword("category","name","category/name",1793490219),"background",new cljs.core.Keyword("category","display-name","category/display-name",643312825),"Background"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("category","id","category/id",-1505923754),"2",new cljs.core.Keyword("category","name","category/name",1793490219),"interests",new cljs.core.Keyword("category","display-name","category/display-name",643312825),"Interests"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("category","id","category/id",-1505923754),"3",new cljs.core.Keyword("category","name","category/name",1793490219),"skills",new cljs.core.Keyword("category","display-name","category/display-name",643312825),"Skills"], null)], null),new cljs.core.Keyword("admin","popular-careers","admin/popular-careers",858271605),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Sports Marketing",new cljs.core.Keyword(null,"count","count",2139924085),(234),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(26)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Athletic Director",new cljs.core.Keyword(null,"count","count",2139924085),(189),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(21)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Corporate Sales",new cljs.core.Keyword(null,"count","count",2139924085),(156),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(17)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Sports Agent",new cljs.core.Keyword(null,"count","count",2139924085),(142),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(16)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Brand Manager",new cljs.core.Keyword(null,"count","count",2139924085),(112),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(13)], null)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$admin$render_AdminDashboard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42439 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42439__$1 = cljs.core.__destructure_map(map__42439);
var active_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword("admin","active-tab","admin/active-tab",1009763689));
var weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword("admin","weights","admin/weights",-988178372));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword("admin","stats","admin/stats",-530373266));
var questions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword("admin","questions","admin/questions",1249425489));
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword("admin","categories","admin/categories",170646017));
var popular_careers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439__$1,new cljs.core.Keyword("admin","popular-careers","admin/popular-careers",858271605));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "32px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({"style": ({"marginBottom": "8px"})}),"Admin Dashboard"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"Manage questions, scoring weights, and view analytics."]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "gap": "8px", "marginBottom": "24px", "borderBottom": "2px solid #e2e8f0", "paddingBottom": "8px"})}),com.fulcrologic.fulcro.components.force_children((function (){var iter__5480__auto__ = (function app$ui$admin$render_AdminDashboard_$_iter__42440(s__42441){
return (new cljs.core.LazySeq(null,(function (){
var s__42441__$1 = s__42441;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42441__$1);
if(temp__5804__auto__){
var s__42441__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42441__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42441__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42443 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42442 = (0);
while(true){
if((i__42442 < size__5479__auto__)){
var vec__42444 = cljs.core._nth(c__5478__auto__,i__42442);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42444,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42444,(1),null);
cljs.core.chunk_append(b__42443,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),tab,new cljs.core.Keyword(null,"className","className",-1983287057),["btn ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,tab))?"btn-primary":"btn-secondary")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"6px 6px 0 0"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__42442,vec__42444,tab,label,c__5478__auto__,size__5479__auto__,b__42443,s__42441__$2,temp__5804__auto__,map__42439,map__42439__$1,active_tab,weights,stats,questions,categories,popular_careers){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42447 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),tab], null);
return (app.ui.admin.set_active_tab.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.set_active_tab.cljs$core$IFn$_invoke$arity$1(G__42447) : app.ui.admin.set_active_tab.call(null,G__42447));
})()], null));
});})(i__42442,vec__42444,tab,label,c__5478__auto__,size__5479__auto__,b__42443,s__42441__$2,temp__5804__auto__,map__42439,map__42439__$1,active_tab,weights,stats,questions,categories,popular_careers))
], null),label], null),null));

var G__42475 = (i__42442 + (1));
i__42442 = G__42475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42443),app$ui$admin$render_AdminDashboard_$_iter__42440(cljs.core.chunk_rest(s__42441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42443),null);
}
} else {
var vec__42448 = cljs.core.first(s__42441__$2);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(1),null);
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),tab,new cljs.core.Keyword(null,"className","className",-1983287057),["btn ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,tab))?"btn-primary":"btn-secondary")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"6px 6px 0 0"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__42448,tab,label,s__42441__$2,temp__5804__auto__,map__42439,map__42439__$1,active_tab,weights,stats,questions,categories,popular_careers){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42451 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),tab], null);
return (app.ui.admin.set_active_tab.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.set_active_tab.cljs$core$IFn$_invoke$arity$1(G__42451) : app.ui.admin.set_active_tab.call(null,G__42451));
})()], null));
});})(vec__42448,tab,label,s__42441__$2,temp__5804__auto__,map__42439,map__42439__$1,active_tab,weights,stats,questions,categories,popular_careers))
], null),label], null),null),app$ui$admin$render_AdminDashboard_$_iter__42440(cljs.core.rest(s__42441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380),"Questions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scoring","scoring",-454135688),"Scoring"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analytics","analytics",316686129),"Analytics"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),"Users"], null)], null));
})())]),(function (){var G__42452 = active_tab;
var G__42452__$1 = (((G__42452 instanceof cljs.core.Keyword))?G__42452.fqn:null);
switch (G__42452__$1) {
case "questions":
var G__42453 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"questions","questions",1226225380),questions,new cljs.core.Keyword(null,"categories","categories",178386610),categories], null);
return (app.ui.admin.ui_question_management.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_question_management.cljs$core$IFn$_invoke$arity$1(G__42453) : app.ui.admin.ui_question_management.call(null,G__42453));

break;
case "scoring":
var G__42454 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weights","weights",-1097626197),weights,new cljs.core.Keyword(null,"on-weight-change","on-weight-change",700755901),(function (cat,val){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42455 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),cat,new cljs.core.Keyword(null,"weight","weight",-1262796205),val], null);
return (app.ui.admin.update_weight.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.update_weight.cljs$core$IFn$_invoke$arity$1(G__42455) : app.ui.admin.update_weight.call(null,G__42455));
})()], null));
})], null);
return (app.ui.admin.ui_scoring_configuration.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_scoring_configuration.cljs$core$IFn$_invoke$arity$1(G__42454) : app.ui.admin.ui_scoring_configuration.call(null,G__42454));

break;
case "analytics":
var G__42456 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stats","stats",-85643011),stats,new cljs.core.Keyword(null,"popular-careers","popular-careers",800205574),popular_careers], null);
return (app.ui.admin.ui_analytics_tab.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_analytics_tab.cljs$core$IFn$_invoke$arity$1(G__42456) : app.ui.admin.ui_analytics_tab.call(null,G__42456));

break;
case "users":
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"textAlign": "center", "padding": "48px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"User Management"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"User authentication integration coming soon."]))]);

break;
default:
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Select a tab"]);

}
})()], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.admin !== 'undefined') && (typeof app.ui.admin.AdminDashboard !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.admin.AdminDashboard = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42474,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.admin.AdminDashboard,new cljs.core.Keyword("app.ui.admin","AdminDashboard","app.ui.admin/AdminDashboard",-19126444),options__29976__auto___42474);
app.ui.admin.ui_admin_dashboard = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.admin.AdminDashboard);

//# sourceMappingURL=app.ui.admin.js.map
