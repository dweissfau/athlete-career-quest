goog.provide('app.ui.questions');

var options__20391__auto___28778 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_LikertQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28727 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28727__$1 = cljs.core.__destructure_map(map__28727);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28727__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28727__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28727__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28727__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28727__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var labels = (function (){var or__5002__auto__ = options;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"label","label",1718410804),"Strongly Disagree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"label","label",1718410804),"Disagree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(3),new cljs.core.Keyword(null,"label","label",1718410804),"Neutral"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(4),new cljs.core.Keyword(null,"label","label",1718410804),"Agree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(5),new cljs.core.Keyword(null,"label","label",1718410804),"Strongly Agree"], null)], null);
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "likert-scale"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28731){
var map__28732 = p__28731;
var map__28732__$1 = cljs.core.__destructure_map(map__28732);
var opt = map__28732__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28732__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28732__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var opt_value = (function (){var or__5002__auto__ = value__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(opt);
}
})();
var G__28736 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),opt_value,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt_value,value__$1),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__28722_SHARP_){
var G__28737 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__28722_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__28737) : on_change.call(null,G__28737));
})], null);
return (app.ui.components.ui_likert_option.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_likert_option.cljs$core$IFn$_invoke$arity$1(G__28736) : app.ui.components.ui_likert_option.call(null,G__28736));
}),labels))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.LikertQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.LikertQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28778,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.LikertQuestion,new cljs.core.Keyword("app.ui.questions","LikertQuestion","app.ui.questions/LikertQuestion",1845107377),options__20391__auto___28778);
app.ui.questions.ui_likert_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.LikertQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__20391__auto___28779 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_MultipleChoiceQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28748 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28748__$1 = cljs.core.__destructure_map(map__28748);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28748__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28748__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28748__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28748__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28748__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "multiple-choice"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28749){
var map__28750 = p__28749;
var map__28750__$1 = cljs.core.__destructure_map(map__28750);
var opt = map__28750__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28750__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28750__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28750__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28750__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var G__28751 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(value__$1)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__28741_SHARP_){
var G__28755 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),p1__28741_SHARP_,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__28755) : on_change.call(null,G__28755));
})], null);
return (app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1(G__28751) : app.ui.components.ui_choice_option.call(null,G__28751));
}),options))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.MultipleChoiceQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.MultipleChoiceQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28779,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.MultipleChoiceQuestion,new cljs.core.Keyword("app.ui.questions","MultipleChoiceQuestion","app.ui.questions/MultipleChoiceQuestion",157247469),options__20391__auto___28779);
app.ui.questions.ui_multiple_choice_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.MultipleChoiceQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__20391__auto___28780 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_RankingQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28759 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28759__$1 = cljs.core.__destructure_map(map__28759);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28759__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var current_ranks = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"ranks","ranks",-1802584866).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var available = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(current_ranks),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),options));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b", "marginBottom": "24px"})}),"Click items in order of preference (1st = most preferred)"])),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(current_ranks))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "12px"})}),"Your Ranking:"])),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),item,new cljs.core.Keyword(null,"className","className",-1983287057),"choice-option selected",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__28760 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([item]),current_ranks))], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__28760) : on_change.call(null,G__28760));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "white", "borderRadius": "50%", "width": "28px", "justifyContent": "center", "display": "flex", "fontSize": "0.9rem", "backgroundColor": "#2563eb", "height": "28px", "alignItems": "center", "marginRight": "12px"})}),com.fulcrologic.fulcro.components.force_children((idx + (1)))]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"marginLeft": "auto", "color": "#64748b", "fontSize": "0.8rem"})}),"Click to remove"])], null),null);
}),current_ranks))]):null)),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(available))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "12px"})}),"Available Options:"]),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),item,new cljs.core.Keyword(null,"className","className",-1983287057),"choice-option",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__28761 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_ranks,item)], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__28761) : on_change.call(null,G__28761));
})], null),item], null),null);
}),available)], null),null):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.RankingQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.RankingQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28780,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.RankingQuestion,new cljs.core.Keyword("app.ui.questions","RankingQuestion","app.ui.questions/RankingQuestion",317856115),options__20391__auto___28780);
app.ui.questions.ui_ranking_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.RankingQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__20391__auto___28781 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_ShortTextQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28763 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28763__$1 = cljs.core.__destructure_map(map__28763);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28763__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28763__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28763__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28763__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__28762_SHARP_){
var G__28764 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__28762_SHARP_.target.value], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__28764) : on_change.call(null,G__28764));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your answer here...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),"120px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #e2e8f0",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"8px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"1rem",new cljs.core.Keyword(null,"resize","resize",297367086),"vertical"], null)], null)], null),null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.ShortTextQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.ShortTextQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28781,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.ShortTextQuestion,new cljs.core.Keyword("app.ui.questions","ShortTextQuestion","app.ui.questions/ShortTextQuestion",1904912685),options__20391__auto___28781);
app.ui.questions.ui_short_text_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.ShortTextQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__20391__auto___28782 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_ScenarioQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28766 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28766__$1 = cljs.core.__destructure_map(map__28766);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28766__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28766__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28766__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28766__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28766__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "#f8fafc", "padding": "20px", "borderRadius": "8px", "marginBottom": "24px", "borderLeft": "4px solid #2563eb"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "12px"})}),"Scenario"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"lineHeight": "1.8"})}),com.fulcrologic.fulcro.components.force_children(text)]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "16px"})}),"How would you respond?"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "multiple-choice"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28767){
var map__28768 = p__28767;
var map__28768__$1 = cljs.core.__destructure_map(map__28768);
var opt = map__28768__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var G__28769 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(value__$1)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__28765_SHARP_){
var G__28770 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),p1__28765_SHARP_,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__28770) : on_change.call(null,G__28770));
})], null);
return (app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1(G__28769) : app.ui.components.ui_choice_option.call(null,G__28769));
}),options))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.ScenarioQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.ScenarioQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28782,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.ScenarioQuestion,new cljs.core.Keyword("app.ui.questions","ScenarioQuestion","app.ui.questions/ScenarioQuestion",524548684),options__20391__auto___28782);
app.ui.questions.ui_scenario_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.ScenarioQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__20391__auto___28783 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","type","question/type",-2003827326),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword("question","scoring-weights","question/scoring-weights",881341695)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$questions$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","id","question/id",-541266322).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_Question(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28771 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28771__$1 = cljs.core.__destructure_map(map__28771);
var question = map__28771__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword("question","type","question/type",-2003827326));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var scoring_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28771__$1,new cljs.core.Keyword("question","scoring-weights","question/scoring-weights",881341695));
var value = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"value","value",305978217)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword(null,"value","value",305978217)));
var on_change = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"on-change","on-change",-732046149)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword(null,"on-change","on-change",-732046149)));
var G__28772 = type;
switch (G__28772) {
case "likert":
var G__28773 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_likert_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_likert_question.cljs$core$IFn$_invoke$arity$1(G__28773) : app.ui.questions.ui_likert_question.call(null,G__28773));

break;
case "multiple_choice":
var G__28774 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_multiple_choice_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_multiple_choice_question.cljs$core$IFn$_invoke$arity$1(G__28774) : app.ui.questions.ui_multiple_choice_question.call(null,G__28774));

break;
case "ranking":
var G__28775 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_ranking_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_ranking_question.cljs$core$IFn$_invoke$arity$1(G__28775) : app.ui.questions.ui_ranking_question.call(null,G__28775));

break;
case "short_text":
var G__28776 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_short_text_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_short_text_question.cljs$core$IFn$_invoke$arity$1(G__28776) : app.ui.questions.ui_short_text_question.call(null,G__28776));

break;
case "scenario":
var G__28777 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_scenario_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_scenario_question.cljs$core$IFn$_invoke$arity$1(G__28777) : app.ui.questions.ui_scenario_question.call(null,G__28777));

break;
default:
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Unknown question type: ",com.fulcrologic.fulcro.components.force_children(type)]))]);

}
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.Question !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.Question = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28783,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.Question,new cljs.core.Keyword("app.ui.questions","Question","app.ui.questions/Question",-1727109894),options__20391__auto___28783);
app.ui.questions.ui_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.Question,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

//# sourceMappingURL=app.ui.questions.js.map
