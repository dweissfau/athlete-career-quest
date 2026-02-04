goog.provide('app.ui.components');

var options__20391__auto___28662 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$components$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"total","total",1916810418)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_ProgressBar(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28535 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28535__$1 = cljs.core.__destructure_map(map__28535);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28535__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28535__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var percentage = (((total > (0)))?((100) * (current / total)):(0));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-container", "style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "8px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.9rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children(["Question ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)].join(''))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.9rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(percentage)),"% complete"].join(''))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"%"].join('')], null)], null)], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.ProgressBar !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.ProgressBar = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28662,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.ProgressBar,new cljs.core.Keyword("app.ui.components","ProgressBar","app.ui.components/ProgressBar",813097638),options__20391__auto___28662);
app.ui.components.ui_progress_bar = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.components.ProgressBar);

var options__20391__auto___28666 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_Button(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28537 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28537__$1 = cljs.core.__destructure_map(map__28537);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onClick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28537__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),["btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28540 = variant;
var G__28540__$1 = (((G__28540 instanceof cljs.core.Keyword))?G__28540.fqn:null);
switch (G__28540__$1) {
case "primary":
return "btn-primary";

break;
case "secondary":
return "btn-secondary";

break;
default:
return "btn-primary";

}
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(className)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], null),label], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.Button !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.Button = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28666,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.Button,new cljs.core.Keyword("app.ui.components","Button","app.ui.components/Button",1306112986),options__20391__auto___28666);
app.ui.components.ui_button = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.components.Button);

var options__20391__auto___28672 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_Card(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28545 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28545__$1 = cljs.core.__destructure_map(map__28545);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28545__$1,new cljs.core.Keyword(null,"title","title",636505583));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28545__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),["card ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(className)].join('')], null),(cljs.core.truth_(title)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(title)]):null),children], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.Card !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.Card = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28672,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.Card,new cljs.core.Keyword("app.ui.components","Card","app.ui.components/Card",341018921),options__20391__auto___28672);
app.ui.components.ui_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.components.Card);

var options__20391__auto___28674 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_ScoreBar(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28550 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28550__$1 = cljs.core.__destructure_map(map__28550);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28550__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28550__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var max_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28550__$1,new cljs.core.Keyword(null,"max-score","max-score",-1665682712));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28550__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var percentage = ((100) * (score / (function (){var or__5002__auto__ = max_score;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((score * (100)))),"%"].join('')], null),null))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "score-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"score-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"%"].join(''),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),(function (){var or__5002__auto__ = color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "white";
}
})()], null)], null)], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.ScoreBar !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.ScoreBar = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28674,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.ScoreBar,new cljs.core.Keyword("app.ui.components","ScoreBar","app.ui.components/ScoreBar",-1896732092),options__20391__auto___28674);
app.ui.components.ui_score_bar = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.components.ScoreBar);

var options__20391__auto___28681 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_LikertOption(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28562 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28562__$1 = cljs.core.__destructure_map(map__28562);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28562__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28562__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28562__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var onClick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28562__$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),["likert-option ",(cljs.core.truth_(selected)?"selected":null)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (onClick.cljs$core$IFn$_invoke$arity$1 ? onClick.cljs$core$IFn$_invoke$arity$1(value) : onClick.call(null,value));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "1.2rem", "fontWeight": "500"})}),com.fulcrologic.fulcro.components.force_children(value)]),(cljs.core.truth_(label)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "0.8rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children(label)]):null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.LikertOption !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.LikertOption = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28681,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.LikertOption,new cljs.core.Keyword("app.ui.components","LikertOption","app.ui.components/LikertOption",326925236),options__20391__auto___28681);
app.ui.components.ui_likert_option = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.components.LikertOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"value","value",305978217)], null));

var options__20391__auto___28687 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_ChoiceOption(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28570 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28570__$1 = cljs.core.__destructure_map(map__28570);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var onClick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28570__$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),["choice-option ",(cljs.core.truth_(selected)?"selected":null)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (onClick.cljs$core$IFn$_invoke$arity$1 ? onClick.cljs$core$IFn$_invoke$arity$1(value) : onClick.call(null,value));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontWeight": "500"})}),com.fulcrologic.fulcro.components.force_children(label)]),(cljs.core.truth_(description)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "0.9rem", "color": "#64748b", "marginTop": "4px"})}),com.fulcrologic.fulcro.components.force_children(description)]):null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.ChoiceOption !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.ChoiceOption = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28687,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.ChoiceOption,new cljs.core.Keyword("app.ui.components","ChoiceOption","app.ui.components/ChoiceOption",360061244),options__20391__auto___28687);
app.ui.components.ui_choice_option = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.components.ChoiceOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"value","value",305978217)], null));

var options__20391__auto___28691 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_SectionHeader(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28577 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28577__$1 = cljs.core.__destructure_map(map__28577);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28577__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28577__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28577__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "24px", "textAlign": "center"})}),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(icon)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "2rem", "marginBottom": "8px"})}),com.fulcrologic.fulcro.components.force_children(icon)]):null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({"style": ({"fontSize": "1.5rem", "marginBottom": "8px"})}),com.fulcrologic.fulcro.components.force_children(title)])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(subtitle)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children(subtitle)]):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.SectionHeader !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.SectionHeader = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28691,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.SectionHeader,new cljs.core.Keyword("app.ui.components","SectionHeader","app.ui.components/SectionHeader",-1038816205),options__20391__auto___28691);
app.ui.components.ui_section_header = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.components.SectionHeader);

var options__20391__auto___28698 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_Alert(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28594 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28594__$1 = cljs.core.__destructure_map(map__28594);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28594__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28594__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"card",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),["4px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28596 = type;
var G__28596__$1 = (((G__28596 instanceof cljs.core.Keyword))?G__28596.fqn:null);
switch (G__28596__$1) {
case "success":
return "#22c55e";

break;
case "warning":
return "#f59e0b";

break;
case "error":
return "#ef4444";

break;
default:
return "#2563eb";

}
})())].join(''),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),(function (){var G__28598 = type;
var G__28598__$1 = (((G__28598 instanceof cljs.core.Keyword))?G__28598.fqn:null);
switch (G__28598__$1) {
case "success":
return "#f0fdf4";

break;
case "warning":
return "#fffbeb";

break;
case "error":
return "#fef2f2";

break;
default:
return "#eff6ff";

}
})()], null)], null),message], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.Alert !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.Alert = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28698,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.Alert,new cljs.core.Keyword("app.ui.components","Alert","app.ui.components/Alert",-1312513746),options__20391__auto___28698);
app.ui.components.ui_alert = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.components.Alert);

var options__20391__auto___28704 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_LoadingSpinner(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28625 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28625__$1 = cljs.core.__destructure_map(map__28625);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "padding": "48px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"width": "48px", "height": "48px", "border": "4px solid #e2e8f0", "borderTopColor": "#2563eb", "borderRadius": "50%", "animation": "spin 1s linear infinite"})})])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(message)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"marginTop": "16px", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children(message)]):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.LoadingSpinner !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.LoadingSpinner = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28704,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.LoadingSpinner,new cljs.core.Keyword("app.ui.components","LoadingSpinner","app.ui.components/LoadingSpinner",-203112021),options__20391__auto___28704);
app.ui.components.ui_loading_spinner = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.components.LoadingSpinner);

var options__20391__auto___28710 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_RecommendationCard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28629 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28629__$1 = cljs.core.__destructure_map(map__28629);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28629__$1,new cljs.core.Keyword(null,"title","title",636505583));
var confidence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28629__$1,new cljs.core.Keyword(null,"confidence","confidence",-2080269669));
var recommended = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28629__$1,new cljs.core.Keyword(null,"recommended","recommended",992487577));
var reasoning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28629__$1,new cljs.core.Keyword(null,"reasoning","reasoning",1956143595));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28629__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"margin": (0)})}),com.fulcrologic.fulcro.components.force_children(title)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),(cljs.core.truth_(recommended)?"#dcfce7":"#fee2e2"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(recommended)?"#166534":"#991b1b"),new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 12px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"9999px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"0.9rem"], null)], null),(cljs.core.truth_(recommended)?"Recommended":"Consider")], null),null))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({}),"Confidence"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((confidence * (100)))),"%"].join('')], null),null))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((confidence * (100))),"%"].join('')], null)], null)], null),null))]))])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(reasoning)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b", "marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(reasoning)]):null)),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(items))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["strong",({}),"Suggested: "]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",items)], null),null)], null),null):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.RecommendationCard !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.RecommendationCard = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28710,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.RecommendationCard,new cljs.core.Keyword("app.ui.components","RecommendationCard","app.ui.components/RecommendationCard",-1981911389),options__20391__auto___28710);
app.ui.components.ui_recommendation_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.components.RecommendationCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"title","title",636505583)], null));

var options__20391__auto___28718 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_RoadmapPhase(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28648 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28648__$1 = cljs.core.__destructure_map(map__28648);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28648__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28648__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "recommendation-item"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "8px", "color": "#2563eb"})}),com.fulcrologic.fulcro.components.force_children(phase)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["ul",({"style": ({"margin": (0), "paddingLeft": "20px"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,action){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"4px"], null)], null),action], null),null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,actions)))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.RoadmapPhase !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.RoadmapPhase = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28718,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.RoadmapPhase,new cljs.core.Keyword("app.ui.components","RoadmapPhase","app.ui.components/RoadmapPhase",-2139389681),options__20391__auto___28718);
app.ui.components.ui_roadmap_phase = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.components.RoadmapPhase,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"phase","phase",575722892)], null));

var options__20391__auto___28723 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$components$render_PersonalizedAdviceCard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__28652 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__28652__$1 = cljs.core.__destructure_map(map__28652);
var headline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28652__$1,new cljs.core.Keyword(null,"headline","headline",-157157727));
var recommendation_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28652__$1,new cljs.core.Keyword(null,"recommendation-level","recommendation-level",-1462464042));
var paragraphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28652__$1,new cljs.core.Keyword(null,"paragraphs","paragraphs",-690733875));
var career_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28652__$1,new cljs.core.Keyword(null,"career-name","career-name",2126938427));
var timing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28652__$1,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var level_styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"essential","essential",1969545466),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#dcfce7","#166534","Essential"], null),new cljs.core.Keyword(null,"highly-recommended","highly-recommended",-2104612210),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#dbeafe","#1d4ed8","Highly Recommended"], null),new cljs.core.Keyword(null,"recommended","recommended",992487577),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#e0f2fe","#0369a1","Recommended"], null),new cljs.core.Keyword(null,"helpful","helpful",-672136259),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fef3c7","#92400e","Helpful"], null),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f1f5f9","#475569","Optional"], null),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#dcfce7","#166534","Required"], null)], null);
var vec__28654 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(level_styles,recommendation_level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f1f5f9","#475569","Consider"], null));
var bg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(1),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28654,(2),null);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"margin": (0), "flex": (1), "paddingRight": "12px"})}),com.fulcrologic.fulcro.components.force_children(headline)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),bg,new cljs.core.Keyword(null,"color","color",1011675173),text,new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 12px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"9999px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"0.85rem",new cljs.core.Keyword(null,"whiteSpace","whiteSpace",-575589130),"nowrap"], null)], null),label], null),null))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#475569",new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"1.6",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"12px"], null)], null),p], null),null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,paragraphs)))])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(timing)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b", "fontStyle": "italic", "marginBottom": "12px"})}),com.fulcrologic.fulcro.components.force_children(["Timing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing)].join(''))]):null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"borderTop": "1px solid #e2e8f0", "paddingTop": "12px", "marginTop": "12px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.85rem", "color": "#64748b"})}),"Based on your top match: "])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.85rem", "color": "#2563eb", "fontWeight": "500"})}),com.fulcrologic.fulcro.components.force_children(career_name)]))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.components !== 'undefined') && (typeof app.ui.components.PersonalizedAdviceCard !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.components.PersonalizedAdviceCard = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___28723,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.components.PersonalizedAdviceCard,new cljs.core.Keyword("app.ui.components","PersonalizedAdviceCard","app.ui.components/PersonalizedAdviceCard",888697190),options__20391__auto___28723);
app.ui.components.ui_personalized_advice_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.components.PersonalizedAdviceCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"headline","headline",-157157727)], null));

//# sourceMappingURL=app.ui.components.js.map
