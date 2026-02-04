goog.provide('app.client.routing');

var options__29976__auto___42647 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$routing$query_STAR_(this$){
return cljs.core.PersistentVector.EMPTY;
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$routing$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword(null,"landing","landing",-1137922265)], null);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$routing$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$routing$render_LandingPage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "container"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"textAlign": "center", "padding": "48px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({"style": ({"fontSize": "2.5rem", "marginBottom": "16px", "color": "#1e293b"})}),"Athlete Career Quest"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"fontSize": "1.2rem", "color": "#64748b", "marginBottom": "32px"})}),"Discover your ideal career path based on your unique strengths, interests, and goals."])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "gap": "16px", "justifyContent": "center", "marginBottom": "32px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"padding": "24px", "flex": "1", "maxWidth": "200px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"40+"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"Questions"]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"padding": "24px", "flex": "1", "maxWidth": "200px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"50+"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"Career Paths"]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"padding": "24px", "flex": "1", "maxWidth": "200px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"4"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"Key Recommendations"]))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"1.1rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"16px 48px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["questionnaire"], null));
})], null),"Start Your Journey"], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.routing !== 'undefined') && (typeof app.client.routing.LandingPage !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.routing.LandingPage = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42647,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.routing.LandingPage,new cljs.core.Keyword("app.client.routing","LandingPage","app.client.routing/LandingPage",-833503858),options__29976__auto___42647);
app.client.routing.ui_landing_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.routing.LandingPage);

var options__29976__auto___42648 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"questionnaire","questionnaire",120538116),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.questionnaire.Questionnaire)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$routing$ident_STAR_(this$,p__42595){
var map__42596 = p__42595;
var map__42596__$1 = cljs.core.__destructure_map(map__42596);
var questionnaire = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42596__$1,new cljs.core.Keyword(null,"questionnaire","questionnaire",120538116));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword(null,"questionnaire","questionnaire",120538116)], null);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["questionnaire"], null),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$routing$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"questionnaire","questionnaire",120538116),(function (){var G__42598 = app.ui.questionnaire.Questionnaire;
var G__42599 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42598,G__42599) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42598,G__42599));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$routing$render_QuestionnairePage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42603 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42603__$1 = cljs.core.__destructure_map(map__42603);
var questionnaire = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42603__$1,new cljs.core.Keyword(null,"questionnaire","questionnaire",120538116));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "container"}),com.fulcrologic.fulcro.components.force_children((app.ui.questionnaire.ui_questionnaire.cljs$core$IFn$_invoke$arity$1 ? app.ui.questionnaire.ui_questionnaire.cljs$core$IFn$_invoke$arity$1(questionnaire) : app.ui.questionnaire.ui_questionnaire.call(null,questionnaire)))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.routing !== 'undefined') && (typeof app.client.routing.QuestionnairePage !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.routing.QuestionnairePage = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42648,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.routing.QuestionnairePage,new cljs.core.Keyword("app.client.routing","QuestionnairePage","app.client.routing/QuestionnairePage",-1133084257),options__29976__auto___42648);
app.client.routing.ui_questionnaire_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.routing.QuestionnairePage);

var options__29976__auto___42649 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.results.Results)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$routing$ident_STAR_(this$,p__42609){
var map__42612 = p__42609;
var map__42612__$1 = cljs.core.__destructure_map(map__42612);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42612__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword(null,"results","results",-1134170113)], null);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["results"], null),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$routing$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__42613 = app.ui.results.Results;
var G__42614 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42613,G__42614) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42613,G__42614));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$routing$render_ResultsPage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42617 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42617__$1 = cljs.core.__destructure_map(map__42617);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42617__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "container"}),com.fulcrologic.fulcro.components.force_children((app.ui.results.ui_results.cljs$core$IFn$_invoke$arity$1 ? app.ui.results.ui_results.cljs$core$IFn$_invoke$arity$1(results) : app.ui.results.ui_results.call(null,results)))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.routing !== 'undefined') && (typeof app.client.routing.ResultsPage !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.routing.ResultsPage = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42649,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.routing.ResultsPage,new cljs.core.Keyword("app.client.routing","ResultsPage","app.client.routing/ResultsPage",-1355895322),options__29976__auto___42649);
app.client.routing.ui_results_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.routing.ResultsPage);

var options__29976__auto___42651 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"admin","admin",-1239101627),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.admin.AdminDashboard)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$routing$ident_STAR_(this$,p__42624){
var map__42625 = p__42624;
var map__42625__$1 = cljs.core.__destructure_map(map__42625);
var admin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625__$1,new cljs.core.Keyword(null,"admin","admin",-1239101627));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword(null,"admin","admin",-1239101627)], null);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["admin"], null),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$routing$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"admin","admin",-1239101627),(function (){var G__42626 = app.ui.admin.AdminDashboard;
var G__42627 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__42626,G__42627) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__42626,G__42627));
})()], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$routing$render_AdminPage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42628 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42628__$1 = cljs.core.__destructure_map(map__42628);
var admin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42628__$1,new cljs.core.Keyword(null,"admin","admin",-1239101627));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "container"}),com.fulcrologic.fulcro.components.force_children((app.ui.admin.ui_admin_dashboard.cljs$core$IFn$_invoke$arity$1 ? app.ui.admin.ui_admin_dashboard.cljs$core$IFn$_invoke$arity$1(admin) : app.ui.admin.ui_admin_dashboard.call(null,admin)))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.routing !== 'undefined') && (typeof app.client.routing.AdminPage !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.routing.AdminPage = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42651,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.routing.AdminPage,new cljs.core.Keyword("app.client.routing","AdminPage","app.client.routing/AdminPage",-1422580582),options__29976__auto___42651);
app.client.routing.ui_admin_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.routing.AdminPage);

var options__29976__auto___42652 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297),true,new cljs.core.Keyword(null,"router-targets","router-targets",1582229763),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.client.routing.LandingPage,app.client.routing.QuestionnairePage,app.client.routing.ResultsPage,app.client.routing.AdminPage], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$routing$render_MainRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__42637 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__42637__$1 = cljs.core.__destructure_map(map__42637);
var props = map__42637__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42637__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42637__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
var current_state = com.fulcrologic.fulcro.ui_state_machines.get_active_state(this$,new cljs.core.Keyword("app.client.routing","MainRouter","app.client.routing/MainRouter",1389793060));
var state_map = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,new cljs.core.Keyword("app.client.routing","MainRouter","app.client.routing/MainRouter",1389793060),new cljs.core.Keyword(null,"fake","fake",-904846741),cljs.core.PersistentArrayMap.EMPTY);
var pending_path_segment = ((com.fulcrologic.fulcro.ui_state_machines.asm_active_QMARK_(this$,new cljs.core.Keyword("app.client.routing","MainRouter","app.client.routing/MainRouter",1389793060)))?com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268)):null);
var class$ = com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class(this$);
if(cljs.core.truth_(cljs.core.constantly(true)(current_state))){
if(cljs.core.truth_(class$)){
var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(class$);
var G__42642 = com.fulcrologic.fulcro.raw.components.computed(current_route,com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__42642) : factory.call(null,G__42642));
} else {
return null;
}
} else {
var this$__$1 = this$;
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),current_state,new cljs.core.Keyword(null,"route-factory","route-factory",-1848194547),(cljs.core.truth_(class$)?com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(class$):null),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),pending_path_segment,new cljs.core.Keyword(null,"route-props","route-props",-836332554),current_route], null);
return null;
}
}));
}),new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),false,new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$routing$ident_STAR_(this$,p__42643){
var map__42644 = p__42643;
var map__42644__$1 = cljs.core.__destructure_map(map__42644);
var props = map__42644__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42644__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42644__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword("app.client.routing","MainRouter","app.client.routing/MainRouter",1389793060)], null);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this__41625__auto__){
return com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets(this__41625__auto__);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$routing$build_raw_initial_state_STAR_(params){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword("app.client.routing","MainRouter","app.client.routing/MainRouter",1389793060),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(app.client.routing.LandingPage,params),new cljs.core.Keyword(null,"alt0","alt0",486699186),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(app.client.routing.QuestionnairePage,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"alt1","alt1",-496303545),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(app.client.routing.ResultsPage,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"alt2","alt2",-843512290),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(app.client.routing.AdminPage,cljs.core.PersistentArrayMap.EMPTY)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$routing$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("app.client.routing","MainRouter","app.client.routing/MainRouter",1389793060)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),(function (){var or__5002__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.routing.LandingPage);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(app.client.routing.LandingPage))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt0","alt0",486699186),(function (){var or__5002__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.routing.QuestionnairePage);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(app.client.routing.QuestionnairePage))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt1","alt1",-496303545),(function (){var or__5002__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.routing.ResultsPage);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(app.client.routing.ResultsPage))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt2","alt2",-843512290),(function (){var or__5002__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.routing.AdminPage);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(app.client.routing.AdminPage))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null)], null);
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.routing !== 'undefined') && (typeof app.client.routing.MainRouter !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.routing.MainRouter = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__29976__auto___42652,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.routing.MainRouter,new cljs.core.Keyword("app.client.routing","MainRouter","app.client.routing/MainRouter",1389793060),options__29976__auto___42652);
app.client.routing.ui_main_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.routing.MainRouter);
/**
 * Navigate to a route
 */
app.client.routing.navigate_to_BANG_ = (function app$client$routing$navigate_to_BANG_(app__$1,route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,route);
});
/**
 * Navigate to results page with session ID
 */
app.client.routing.navigate_to_results_BANG_ = (function app$client$routing$navigate_to_results_BANG_(app__$1,session_id){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["results",session_id], null));
});

//# sourceMappingURL=app.client.routing.js.map
