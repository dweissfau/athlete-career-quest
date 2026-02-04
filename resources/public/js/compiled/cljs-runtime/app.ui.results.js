goog.provide('app.ui.results');

var options__29976__auto___42208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$results$render_CareerMatch(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__41985 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__41985__$1 = cljs.core.__destructure_map(map__41985);
var career_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"career-name","career-name",2126938427));
var career_category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"career-category","career-category",1896068630));
var match_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"match-score","match-score",847728677));
var typical_majors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"marginBottom": "12px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "alignItems": "center"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"margin": "0 0 4px 0"})}),com.fulcrologic.fulcro.components.force_children(career_name)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b", "fontSize": "0.9rem"})}),com.fulcrologic.fulcro.components.force_children(career_category)])], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"textAlign": "right"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "1.5rem", "fontWeight": "bold", "color": "#2563eb"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((match_score * (100)))),"%"].join(''))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "0.8rem", "color": "#64748b"})}),"Match"]))]))])),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(typical_majors))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "12px", "paddingTop": "12px", "borderTop": "1px solid #e2e8f0"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.85rem", "color": "#64748b"})}),"Related majors: "])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.85rem"})}),com.fulcrologic.fulcro.components.force_children(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),typical_majors)))]))]):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.results !== 'undefined') && (typeof app.ui.results.CareerMatch !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.results.CareerMatch = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42208,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.results.CareerMatch,new cljs.core.Keyword("app.ui.results","CareerMatch","app.ui.results/CareerMatch",-708455456),options__29976__auto___42208);
app.ui.results.ui_career_match = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.results.CareerMatch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"career-name","career-name",2126938427)], null));

var options__29976__auto___42227 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$results$render_DimensionScore(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42002 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42002__$1 = cljs.core.__destructure_map(map__42002);
var dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42002__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42002__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var dimension_labels = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"leadership","leadership",301358948),new cljs.core.Keyword(null,"entrepreneurial","entrepreneurial",-336834457),new cljs.core.Keyword(null,"education-openness","education-openness",-1411886294),new cljs.core.Keyword(null,"collaborative","collaborative",-18220371),new cljs.core.Keyword(null,"creative","creative",1112319885),new cljs.core.Keyword(null,"urgency","urgency",-1292117426),new cljs.core.Keyword(null,"income-priority","income-priority",-939788561),new cljs.core.Keyword(null,"analytical","analytical",219506896),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.Keyword(null,"competitive","competitive",2077888403),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"risk-tolerance","risk-tolerance",460361079),new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.Keyword(null,"data","data",-232669377)],["Leadership","Entrepreneurial","Education-Oriented","Collaborative","Creative","Career Urgency","Income Focus","Analytical","Technical","Competitive","Communication","Risk Tolerance","People-Oriented","Data-Driven"]);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_labels,dimension,cljs.core.name(dimension));
var percentage = (score * (100));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "12px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.9rem"})}),com.fulcrologic.fulcro.components.force_children(label)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.9rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(percentage)),"%"].join(''))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"%"].join('')], null)], null)], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.results !== 'undefined') && (typeof app.ui.results.DimensionScore !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.results.DimensionScore = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42227,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.results.DimensionScore,new cljs.core.Keyword("app.ui.results","DimensionScore","app.ui.results/DimensionScore",-949994916),options__29976__auto___42227);
app.ui.results.ui_dimension_score = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.results.DimensionScore,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"dimension","dimension",543254198)], null));

var options__29976__auto___42231 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$results$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("results","profile","results/profile",-1595802536),new cljs.core.Keyword("results","category-scores","results/category-scores",2075270318),new cljs.core.Keyword("results","dimension-scores","results/dimension-scores",2096901796),new cljs.core.Keyword("results","career-scores","results/career-scores",-826086807),new cljs.core.Keyword("results","recommendations","results/recommendations",929907074),new cljs.core.Keyword("results","roadmap","results/roadmap",-1856121949)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$results$ident_STAR_(this$,p__42024){
var map__42025 = p__42024;
var map__42025__$1 = cljs.core.__destructure_map(map__42025);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42025__$1,new cljs.core.Keyword("results","profile","results/profile",-1595802536));
var category_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42025__$1,new cljs.core.Keyword("results","category-scores","results/category-scores",2075270318));
var dimension_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42025__$1,new cljs.core.Keyword("results","dimension-scores","results/dimension-scores",2096901796));
var career_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42025__$1,new cljs.core.Keyword("results","career-scores","results/career-scores",-826086807));
var recommendations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42025__$1,new cljs.core.Keyword("results","recommendations","results/recommendations",929907074));
var roadmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42025__$1,new cljs.core.Keyword("results","roadmap","results/roadmap",-1856121949));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword(null,"results","results",-1134170113)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$results$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("results","profile","results/profile",-1595802536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"leadership","leadership",301358948),0.85,new cljs.core.Keyword(null,"communication","communication",1734879700),0.78,new cljs.core.Keyword(null,"analytical","analytical",219506896),0.62,new cljs.core.Keyword(null,"creative","creative",1112319885),0.55,new cljs.core.Keyword(null,"people","people",1443537404),0.82,new cljs.core.Keyword(null,"competitive","competitive",2077888403),0.75], null)], null),new cljs.core.Keyword("results","dimension-scores","results/dimension-scores",2096901796),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"leadership","leadership",301358948),new cljs.core.Keyword(null,"education-openness","education-openness",-1411886294),new cljs.core.Keyword(null,"creative","creative",1112319885),new cljs.core.Keyword(null,"income-priority","income-priority",-939788561),new cljs.core.Keyword(null,"analytical","analytical",219506896),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.Keyword(null,"competitive","competitive",2077888403),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"risk-tolerance","risk-tolerance",460361079),new cljs.core.Keyword(null,"people","people",1443537404)],[0.85,0.65,0.55,0.72,0.62,0.45,0.75,0.78,0.68,0.82]),new cljs.core.Keyword("results","career-scores","results/career-scores",-826086807),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"career-name","career-name",2126938427),"Sports Marketing Manager",new cljs.core.Keyword(null,"career-category","career-category",1896068630),"Sports Business",new cljs.core.Keyword(null,"match-score","match-score",847728677),0.88,new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Marketing","Business Administration","Sports Management"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"career-name","career-name",2126938427),"Athletic Director",new cljs.core.Keyword(null,"career-category","career-category",1896068630),"Sports Administration",new cljs.core.Keyword(null,"match-score","match-score",847728677),0.85,new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sports Management","Business Administration","Education"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"career-name","career-name",2126938427),"Corporate Sales Executive",new cljs.core.Keyword(null,"career-category","career-category",1896068630),"Business",new cljs.core.Keyword(null,"match-score","match-score",847728677),0.82,new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Business","Marketing","Communications"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"career-name","career-name",2126938427),"Sports Agent",new cljs.core.Keyword(null,"career-category","career-category",1896068630),"Sports Business",new cljs.core.Keyword(null,"match-score","match-score",847728677),0.79,new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sports Management","Law","Business"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"career-name","career-name",2126938427),"Brand Manager",new cljs.core.Keyword(null,"career-category","career-category",1896068630),"Marketing",new cljs.core.Keyword(null,"match-score","match-score",847728677),0.76,new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Marketing","Business","Communications"], null)], null)], null),new cljs.core.Keyword("results","recommendations","results/recommendations",929907074),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"internship","internship",-692945875),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"recommended","recommended",992487577),true,new cljs.core.Keyword(null,"confidence","confidence",-2080269669),0.85,new cljs.core.Keyword(null,"reasoning","reasoning",1956143595),"Your strong leadership and communication skills make you well-suited for competitive internship programs in sports business and marketing.",new cljs.core.Keyword(null,"suggested-types","suggested-types",897323794),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sports Marketing","Corporate Sales","Athletic Administration"], null)], null),new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-3","top-3",1356354382),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sports Management",new cljs.core.Keyword(null,"fit","fit",869444807),0.88], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Business Administration",new cljs.core.Keyword(null,"fit","fit",869444807),0.82], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Marketing",new cljs.core.Keyword(null,"fit","fit",869444807),0.78], null)], null),new cljs.core.Keyword(null,"confidence","confidence",-2080269669),0.85], null),new cljs.core.Keyword(null,"grad-school","grad-school",-591199518),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"recommended","recommended",992487577),true,new cljs.core.Keyword(null,"confidence","confidence",-2080269669),0.72,new cljs.core.Keyword(null,"timing","timing",-1849225195),"After 2-3 years of work experience",new cljs.core.Keyword(null,"suggested-programs","suggested-programs",982862372),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MBA","MS in Sports Management","JD (if pursuing sports law)"], null)], null),new cljs.core.Keyword(null,"industry","industry",-1402985528),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-3","top-3",1356354382),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sports Business",new cljs.core.Keyword(null,"fit","fit",869444807),0.87], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Marketing & Advertising",new cljs.core.Keyword(null,"fit","fit",869444807),0.79], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Corporate Sales",new cljs.core.Keyword(null,"fit","fit",869444807),0.74], null)], null),new cljs.core.Keyword(null,"confidence","confidence",-2080269669),0.82], null)], null),new cljs.core.Keyword("results","roadmap","results/roadmap",-1856121949),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Now",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Begin researching sports marketing internships","Connect with your university's career services","Join sports business student organizations"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Sophomore Year",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Secure first internship in sports marketing or sales","Declare Sports Management or Business major","Build network through industry events"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Junior Year",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Complete competitive internship with professional sports team","Develop specialization in marketing or management","Begin informational interviews with industry professionals"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Senior Year",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Apply to entry-level positions in sports business","Consider MBA programs for future advancement","Leverage athletic network for job opportunities"], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$results$render_Results(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42032 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42032__$1 = cljs.core.__destructure_map(map__42032);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032__$1,new cljs.core.Keyword("results","profile","results/profile",-1595802536));
var category_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032__$1,new cljs.core.Keyword("results","category-scores","results/category-scores",2075270318));
var dimension_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032__$1,new cljs.core.Keyword("results","dimension-scores","results/dimension-scores",2096901796));
var career_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032__$1,new cljs.core.Keyword("results","career-scores","results/career-scores",-826086807));
var recommendations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032__$1,new cljs.core.Keyword("results","recommendations","results/recommendations",929907074));
var roadmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032__$1,new cljs.core.Keyword("results","roadmap","results/roadmap",-1856121949));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "result-card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({"style": ({"margin": "0 0 8px 0"})}),"Your Career Profile"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"opacity": "0.9"})}),"Based on your responses, here are your personalized career recommendations."]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({"style": ({"marginBottom": "24px"})}),"Your Strengths Profile"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(280px, 1fr))", "gap": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "16px", "color": "#64748b"})}),"Top Strengths"]),(function (){var iter__5480__auto__ = (function app$ui$results$render_Results_$_iter__42043(s__42044){
return (new cljs.core.LazySeq(null,(function (){
var s__42044__$1 = s__42044;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42044__$1);
if(temp__5804__auto__){
var s__42044__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42044__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42044__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42046 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42045 = (0);
while(true){
if((i__42045 < size__5479__auto__)){
var vec__42052 = cljs.core._nth(c__5478__auto__,i__42045);
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42052,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42052,(1),null);
cljs.core.chunk_append(b__42046,(function (){var G__42055 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimension","dimension",543254198),dim,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1(G__42055) : app.ui.results.ui_dimension_score.call(null,G__42055));
})());

var G__42257 = (i__42045 + (1));
i__42045 = G__42257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42046),app$ui$results$render_Results_$_iter__42043(cljs.core.chunk_rest(s__42044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42046),null);
}
} else {
var vec__42056 = cljs.core.first(s__42044__$2);
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42056,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42056,(1),null);
return cljs.core.cons((function (){var G__42060 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimension","dimension",543254198),dim,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1(G__42060) : app.ui.results.ui_dimension_score.call(null,G__42060));
})(),app$ui$results$render_Results_$_iter__42043(cljs.core.rest(s__42044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.val,cljs.core._GT_,dimension_scores)));
})()], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "16px", "color": "#64748b"})}),"Other Dimensions"]),(function (){var iter__5480__auto__ = (function app$ui$results$render_Results_$_iter__42061(s__42062){
return (new cljs.core.LazySeq(null,(function (){
var s__42062__$1 = s__42062;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42062__$1);
if(temp__5804__auto__){
var s__42062__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42062__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42062__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42064 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42063 = (0);
while(true){
if((i__42063 < size__5479__auto__)){
var vec__42070 = cljs.core._nth(c__5478__auto__,i__42063);
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42070,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42070,(1),null);
cljs.core.chunk_append(b__42064,(function (){var G__42073 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimension","dimension",543254198),dim,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1(G__42073) : app.ui.results.ui_dimension_score.call(null,G__42073));
})());

var G__42268 = (i__42063 + (1));
i__42063 = G__42268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42064),app$ui$results$render_Results_$_iter__42061(cljs.core.chunk_rest(s__42062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42064),null);
}
} else {
var vec__42074 = cljs.core.first(s__42062__$2);
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42074,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42074,(1),null);
return cljs.core.cons((function (){var G__42077 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimension","dimension",543254198),dim,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.ui_dimension_score.cljs$core$IFn$_invoke$arity$1(G__42077) : app.ui.results.ui_dimension_score.call(null,G__42077));
})(),app$ui$results$render_Results_$_iter__42061(cljs.core.rest(s__42062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.val,cljs.core._GT_,dimension_scores)));
})()], null),null))]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({"style": ({"marginBottom": "24px"})}),"Top Career Matches"])),com.fulcrologic.fulcro.components.force_children((function (){var iter__5480__auto__ = (function app$ui$results$render_Results_$_iter__42079(s__42080){
return (new cljs.core.LazySeq(null,(function (){
var s__42080__$1 = s__42080;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42080__$1);
if(temp__5804__auto__){
var s__42080__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42080__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42080__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42082 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42081 = (0);
while(true){
if((i__42081 < size__5479__auto__)){
var career = cljs.core._nth(c__5478__auto__,i__42081);
cljs.core.chunk_append(b__42082,(app.ui.results.ui_career_match.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.ui_career_match.cljs$core$IFn$_invoke$arity$1(career) : app.ui.results.ui_career_match.call(null,career)));

var G__42302 = (i__42081 + (1));
i__42081 = G__42302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42082),app$ui$results$render_Results_$_iter__42079(cljs.core.chunk_rest(s__42080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42082),null);
}
} else {
var career = cljs.core.first(s__42080__$2);
return cljs.core.cons((app.ui.results.ui_career_match.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.ui_career_match.cljs$core$IFn$_invoke$arity$1(career) : app.ui.results.ui_career_match.call(null,career)),app$ui$results$render_Results_$_iter__42079(cljs.core.rest(s__42080__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(career_scores);
})())]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({"style": ({"marginTop": "32px", "marginBottom": "24px"})}),"Key Recommendations"]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(300px, 1fr))", "gap": "16px"})}),com.fulcrologic.fulcro.components.force_children((function (){var G__42085 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Internships",new cljs.core.Keyword(null,"recommended","recommended",992487577),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internship","internship",-692945875),new cljs.core.Keyword(null,"recommended","recommended",992487577)], null)),new cljs.core.Keyword(null,"confidence","confidence",-2080269669),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internship","internship",-692945875),new cljs.core.Keyword(null,"confidence","confidence",-2080269669)], null)),new cljs.core.Keyword(null,"reasoning","reasoning",1956143595),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internship","internship",-692945875),new cljs.core.Keyword(null,"reasoning","reasoning",1956143595)], null)),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internship","internship",-692945875),new cljs.core.Keyword(null,"suggested-types","suggested-types",897323794)], null))], null);
return (app.ui.components.ui_recommendation_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_recommendation_card.cljs$core$IFn$_invoke$arity$1(G__42085) : app.ui.components.ui_recommendation_card.call(null,G__42085));
})()),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "16px"})}),"Recommended Majors"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "16px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({}),"Confidence"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"confidence","confidence",-2080269669)], null))))),"%"].join('')], null),null))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"confidence","confidence",-2080269669)], null)))),"%"].join('')], null)], null)], null),null))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["ol",({"style": ({"margin": (0), "paddingLeft": "20px"})}),com.fulcrologic.fulcro.components.force_children((function (){var iter__5480__auto__ = (function app$ui$results$render_Results_$_iter__42088(s__42089){
return (new cljs.core.LazySeq(null,(function (){
var s__42089__$1 = s__42089;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42089__$1);
if(temp__5804__auto__){
var s__42089__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42089__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42089__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42091 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42090 = (0);
while(true){
if((i__42090 < size__5479__auto__)){
var map__42095 = cljs.core._nth(c__5478__auto__,i__42090);
var map__42095__$1 = cljs.core.__destructure_map(map__42095);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var fit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42095__$1,new cljs.core.Keyword(null,"fit","fit",869444807));
cljs.core.chunk_append(b__42091,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontWeight": "500"})}),com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b", "marginLeft": "8px"})}),com.fulcrologic.fulcro.components.force_children(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((fit * (100)))),"% fit)"].join(''))])], null),null));

var G__42304 = (i__42090 + (1));
i__42090 = G__42304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42091),app$ui$results$render_Results_$_iter__42088(cljs.core.chunk_rest(s__42089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42091),null);
}
} else {
var map__42096 = cljs.core.first(s__42089__$2);
var map__42096__$1 = cljs.core.__destructure_map(map__42096);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var fit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42096__$1,new cljs.core.Keyword(null,"fit","fit",869444807));
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontWeight": "500"})}),com.fulcrologic.fulcro.components.force_children(name)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b", "marginLeft": "8px"})}),com.fulcrologic.fulcro.components.force_children(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((fit * (100)))),"% fit)"].join(''))])], null),null),app$ui$results$render_Results_$_iter__42088(cljs.core.rest(s__42089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"top-3","top-3",1356354382)], null)));
})())]))])),com.fulcrologic.fulcro.components.force_children((function (){var G__42098 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Graduate School",new cljs.core.Keyword(null,"recommended","recommended",992487577),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grad-school","grad-school",-591199518),new cljs.core.Keyword(null,"recommended","recommended",992487577)], null)),new cljs.core.Keyword(null,"confidence","confidence",-2080269669),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grad-school","grad-school",-591199518),new cljs.core.Keyword(null,"confidence","confidence",-2080269669)], null)),new cljs.core.Keyword(null,"reasoning","reasoning",1956143595),["Recommended timing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grad-school","grad-school",-591199518),new cljs.core.Keyword(null,"timing","timing",-1849225195)], null)))].join(''),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grad-school","grad-school",-591199518),new cljs.core.Keyword(null,"suggested-programs","suggested-programs",982862372)], null))], null);
return (app.ui.components.ui_recommendation_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_recommendation_card.cljs$core$IFn$_invoke$arity$1(G__42098) : app.ui.components.ui_recommendation_card.call(null,G__42098));
})()),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "16px"})}),"Target Industries"])),com.fulcrologic.fulcro.components.force_children((function (){var iter__5480__auto__ = (function app$ui$results$render_Results_$_iter__42121(s__42122){
return (new cljs.core.LazySeq(null,(function (){
var s__42122__$1 = s__42122;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42122__$1);
if(temp__5804__auto__){
var s__42122__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42122__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42122__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42124 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42123 = (0);
while(true){
if((i__42123 < size__5479__auto__)){
var map__42126 = cljs.core._nth(c__5478__auto__,i__42123);
var map__42126__$1 = cljs.core.__destructure_map(map__42126);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var fit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42126__$1,new cljs.core.Keyword(null,"fit","fit",869444807));
cljs.core.chunk_append(b__42124,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"12px"], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((fit * (100)))),"%"].join(''))]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((fit * (100))),"%"].join('')], null)], null)], null),null))])], null),null));

var G__42305 = (i__42123 + (1));
i__42123 = G__42305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42124),app$ui$results$render_Results_$_iter__42121(cljs.core.chunk_rest(s__42122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42124),null);
}
} else {
var map__42139 = cljs.core.first(s__42122__$2);
var map__42139__$1 = cljs.core.__destructure_map(map__42139);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var fit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,new cljs.core.Keyword(null,"fit","fit",869444807));
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"12px"], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((fit * (100)))),"%"].join(''))]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((fit * (100))),"%"].join('')], null)], null)], null),null))])], null),null),app$ui$results$render_Results_$_iter__42121(cljs.core.rest(s__42122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"industry","industry",-1402985528),new cljs.core.Keyword(null,"top-3","top-3",1356354382)], null)));
})())]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"marginTop": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({"style": ({"marginBottom": "24px"})}),"Your Career Roadmap"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "recommendation-list"}),com.fulcrologic.fulcro.components.force_children((function (){var iter__5480__auto__ = (function app$ui$results$render_Results_$_iter__42145(s__42146){
return (new cljs.core.LazySeq(null,(function (){
var s__42146__$1 = s__42146;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42146__$1);
if(temp__5804__auto__){
var s__42146__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42146__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__42146__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__42148 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__42147 = (0);
while(true){
if((i__42147 < size__5479__auto__)){
var phase = cljs.core._nth(c__5478__auto__,i__42147);
cljs.core.chunk_append(b__42148,(app.ui.components.ui_roadmap_phase.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_roadmap_phase.cljs$core$IFn$_invoke$arity$1(phase) : app.ui.components.ui_roadmap_phase.call(null,phase)));

var G__42313 = (i__42147 + (1));
i__42147 = G__42313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42148),app$ui$results$render_Results_$_iter__42145(cljs.core.chunk_rest(s__42146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42148),null);
}
} else {
var phase = cljs.core.first(s__42146__$2);
return cljs.core.cons((app.ui.components.ui_roadmap_phase.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_roadmap_phase.cljs$core$IFn$_invoke$arity$1(phase) : app.ui.components.ui_roadmap_phase.call(null,phase)),app$ui$results$render_Results_$_iter__42145(cljs.core.rest(s__42146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(roadmap);
})())]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "gap": "16px", "marginTop": "32px", "justifyContent": "center"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["questionnaire"], null));
})], null),"Retake Assessment"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return window.print();
})], null),"Print Results"], null),null))])], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.results !== 'undefined') && (typeof app.ui.results.Results !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.results.Results = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42231,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.results.Results,new cljs.core.Keyword("app.ui.results","Results","app.ui.results/Results",515009673),options__29976__auto___42231);
app.ui.results.ui_results = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.results.Results);

//# sourceMappingURL=app.ui.results.js.map
