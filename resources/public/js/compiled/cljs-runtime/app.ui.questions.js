goog.provide('app.ui.questions');

var options__46170__auto___56775 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_LikertQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__56745 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__56745__$1 = cljs.core.__destructure_map(map__56745);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var labels = (function (){var or__5045__auto__ = options;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"label","label",1718410804),"Strongly Disagree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"label","label",1718410804),"Disagree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(3),new cljs.core.Keyword(null,"label","label",1718410804),"Neutral"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(4),new cljs.core.Keyword(null,"label","label",1718410804),"Agree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(5),new cljs.core.Keyword(null,"label","label",1718410804),"Strongly Agree"], null)], null);
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "accent-stripe"})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px", "lineHeight": "1.4"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "likert-scale stagger-in"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56746){
var map__56747 = p__56746;
var map__56747__$1 = cljs.core.__destructure_map(map__56747);
var opt = map__56747__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var opt_value = (function (){var or__5045__auto__ = value__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(opt);
}
})();
var G__56748 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),opt_value,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt_value,value__$1),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__56744_SHARP_){
var G__56749 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__56744_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56749) : on_change.call(null,G__56749));
})], null);
return (app.ui.components.ui_likert_option.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_likert_option.cljs$core$IFn$_invoke$arity$1(G__56748) : app.ui.components.ui_likert_option.call(null,G__56748));
}),labels))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.LikertQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.LikertQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46170__auto___56775,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.LikertQuestion,new cljs.core.Keyword("app.ui.questions","LikertQuestion","app.ui.questions/LikertQuestion",1845107377),options__46170__auto___56775);
app.ui.questions.ui_likert_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.LikertQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__46170__auto___56776 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_MultipleChoiceQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__56751 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__56751__$1 = cljs.core.__destructure_map(map__56751);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "accent-stripe"})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px", "lineHeight": "1.4"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "multiple-choice stagger-in"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56752){
var map__56753 = p__56752;
var map__56753__$1 = cljs.core.__destructure_map(map__56753);
var opt = map__56753__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56753__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56753__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56753__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56753__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var G__56754 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(value__$1)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__56750_SHARP_){
var G__56755 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),p1__56750_SHARP_,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56755) : on_change.call(null,G__56755));
})], null);
return (app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1(G__56754) : app.ui.components.ui_choice_option.call(null,G__56754));
}),options))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.MultipleChoiceQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.MultipleChoiceQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46170__auto___56776,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.MultipleChoiceQuestion,new cljs.core.Keyword("app.ui.questions","MultipleChoiceQuestion","app.ui.questions/MultipleChoiceQuestion",157247469),options__46170__auto___56776);
app.ui.questions.ui_multiple_choice_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.MultipleChoiceQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__46170__auto___56777 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_RankingQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__56756 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__56756__$1 = cljs.core.__destructure_map(map__56756);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56756__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56756__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56756__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56756__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56756__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var current_ranks = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"ranks","ranks",-1802584866).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var available = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(current_ranks),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),options));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "accent-stripe"})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "12px", "lineHeight": "1.4"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b", "marginBottom": "24px", "fontWeight": "500"})}),"Click items in order of preference (1st = most preferred)"])),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(current_ranks))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "12px"})}),"Your Ranking:"])),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),item,new cljs.core.Keyword(null,"className","className",-1983287057),"choice-option selected",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__56757 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([item]),current_ranks))], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56757) : on_change.call(null,G__56757));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "white", "borderRadius": "50%", "width": "32px", "background": "linear-gradient(135deg, #2563eb, #1d4ed8)", "flexShrink": "0", "justifyContent": "center", "fontWeight": "800", "display": "flex", "fontSize": "0.9rem", "height": "32px", "alignItems": "center", "marginRight": "12px"})}),com.fulcrologic.fulcro.components.force_children((idx + (1)))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontWeight": "600"})}),com.fulcrologic.fulcro.components.force_children(item)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"marginLeft": "auto", "color": "#64748b", "fontSize": "0.8rem", "fontWeight": "500"})}),"Click to remove"])], null),null);
}),current_ranks))]):null)),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(available))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "stagger-in"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "12px"})}),"Available Options:"])),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),item,new cljs.core.Keyword(null,"className","className",-1983287057),"choice-option",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"600"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__56758 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_ranks,item)], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56758) : on_change.call(null,G__56758));
})], null),item], null),null);
}),available))]):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.RankingQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.RankingQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46170__auto___56777,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.RankingQuestion,new cljs.core.Keyword("app.ui.questions","RankingQuestion","app.ui.questions/RankingQuestion",317856115),options__46170__auto___56777);
app.ui.questions.ui_ranking_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.RankingQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__46170__auto___56778 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_ShortTextQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__56760 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__56760__$1 = cljs.core.__destructure_map(map__56760);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56760__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "accent-stripe"})])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px", "lineHeight": "1.4"})}),com.fulcrologic.fulcro.components.force_children(text)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__56759_SHARP_){
var G__56761 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__56759_SHARP_.target.value], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56761) : on_change.call(null,G__56761));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type your answer here...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),"120px",new cljs.core.Keyword(null,"padding","padding",1660304693),"14px",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #e2e8f0",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"12px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"1rem",new cljs.core.Keyword(null,"resize","resize",297367086),"vertical",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Inter, sans-serif"], null)], null)], null),null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.ShortTextQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.ShortTextQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46170__auto___56778,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.ShortTextQuestion,new cljs.core.Keyword("app.ui.questions","ShortTextQuestion","app.ui.questions/ShortTextQuestion",1904912685),options__46170__auto___56778);
app.ui.questions.ui_short_text_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.ShortTextQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__46170__auto___56779 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_ScenarioQuestion(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__56763 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__56763__$1 = cljs.core.__destructure_map(map__56763);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"background": "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(37,99,235,0.12))", "padding": "24px", "borderRadius": "12px", "marginBottom": "24px", "borderLeft": "4px solid #2563eb"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "12px", "color": "#1d4ed8"})}),"Scenario"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"lineHeight": "1.8", "color": "#334155"})}),com.fulcrologic.fulcro.components.force_children(text)]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "16px"})}),"How would you respond?"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "multiple-choice stagger-in"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56764){
var map__56765 = p__56764;
var map__56765__$1 = cljs.core.__destructure_map(map__56765);
var opt = map__56765__$1;
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56765__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56765__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56765__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56765__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var G__56766 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(value__$1)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__56762_SHARP_){
var G__56767 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),p1__56762_SHARP_,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56767) : on_change.call(null,G__56767));
})], null);
return (app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_choice_option.cljs$core$IFn$_invoke$arity$1(G__56766) : app.ui.components.ui_choice_option.call(null,G__56766));
}),options))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.ScenarioQuestion !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.ScenarioQuestion = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46170__auto___56779,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.ScenarioQuestion,new cljs.core.Keyword("app.ui.questions","ScenarioQuestion","app.ui.questions/ScenarioQuestion",524548684),options__46170__auto___56779);
app.ui.questions.ui_scenario_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.ScenarioQuestion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

var options__46170__auto___56787 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$questions$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","text","question/text",-1429934587),new cljs.core.Keyword("question","type","question/type",-2003827326),new cljs.core.Keyword("question","options","question/options",1081190611),new cljs.core.Keyword("question","scoring-weights","question/scoring-weights",881341695)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$questions$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","id","question/id",-541266322),new cljs.core.Keyword("question","id","question/id",-541266322).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$questions$render_Question(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__56768 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__56768__$1 = cljs.core.__destructure_map(map__56768);
var question = map__56768__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword("question","id","question/id",-541266322));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword("question","text","question/text",-1429934587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword("question","type","question/type",-2003827326));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword("question","options","question/options",1081190611));
var scoring_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56768__$1,new cljs.core.Keyword("question","scoring-weights","question/scoring-weights",881341695));
var value = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"value","value",305978217)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword(null,"value","value",305978217)));
var on_change = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"on-change","on-change",-732046149)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword(null,"on-change","on-change",-732046149)));
var G__56769 = type;
switch (G__56769) {
case "likert":
var G__56770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_likert_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_likert_question.cljs$core$IFn$_invoke$arity$1(G__56770) : app.ui.questions.ui_likert_question.call(null,G__56770));

break;
case "multiple_choice":
var G__56771 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_multiple_choice_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_multiple_choice_question.cljs$core$IFn$_invoke$arity$1(G__56771) : app.ui.questions.ui_multiple_choice_question.call(null,G__56771));

break;
case "ranking":
var G__56772 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_ranking_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_ranking_question.cljs$core$IFn$_invoke$arity$1(G__56772) : app.ui.questions.ui_ranking_question.call(null,G__56772));

break;
case "short_text":
var G__56773 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_short_text_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_short_text_question.cljs$core$IFn$_invoke$arity$1(G__56773) : app.ui.questions.ui_short_text_question.call(null,G__56773));

break;
case "scenario":
var G__56774 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(question,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0));
return (app.ui.questions.ui_scenario_question.cljs$core$IFn$_invoke$arity$1 ? app.ui.questions.ui_scenario_question.cljs$core$IFn$_invoke$arity$1(G__56774) : app.ui.questions.ui_scenario_question.call(null,G__56774));

break;
default:
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"fontWeight": "600"})}),"Unknown question type: ",com.fulcrologic.fulcro.components.force_children(type)]))]);

}
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.questions !== 'undefined') && (typeof app.ui.questions.Question !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.questions.Question = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46170__auto___56787,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.questions.Question,new cljs.core.Keyword("app.ui.questions","Question","app.ui.questions/Question",-1727109894),options__46170__auto___56787);
app.ui.questions.ui_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.questions.Question,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("question","id","question/id",-541266322)], null));

//# sourceMappingURL=app.ui.questions.js.map
