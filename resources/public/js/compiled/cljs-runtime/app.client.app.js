goog.provide('app.client.app');
app.client.app.sample_questions = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"bg-1",new cljs.core.Keyword(null,"text","text",-1790561697),"What year of athletic eligibility are you in?",new cljs.core.Keyword(null,"type","type",1174270348),"multiple_choice",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"freshman",new cljs.core.Keyword(null,"label","label",1718410804),"Freshman"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"sophomore",new cljs.core.Keyword(null,"label","label",1718410804),"Sophomore"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"junior",new cljs.core.Keyword(null,"label","label",1718410804),"Junior"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"senior",new cljs.core.Keyword(null,"label","label",1718410804),"Senior"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"int-1",new cljs.core.Keyword(null,"text","text",-1790561697),"As a teammate, I'd rather motivate and support others than analyze game film and statistics.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"people","people",1443537404),1.0,new cljs.core.Keyword(null,"collaborative","collaborative",-18220371),0.7], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"int-2",new cljs.core.Keyword(null,"text","text",-1790561697),"I'd rather design a creative new play than study structured opponent scouting reports.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"creative","creative",1112319885),1.0], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"int-3",new cljs.core.Keyword(null,"text","text",-1790561697),"Rank what motivates you most as an athlete:",new cljs.core.Keyword(null,"type","type",1174270348),"ranking",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"competitive","competitive",2077888403),1.0], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Winning championships and titles"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Setting personal records and improving stats"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Being part of a close-knit team"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Earning recognition from coaches and scouts"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"sk-1",new cljs.core.Keyword(null,"text","text",-1790561697),"Your team is down at halftime in a crucial game. The locker room is tense and some teammates look defeated. What do you do?",new cljs.core.Keyword(null,"type","type",1174270348),"scenario",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leadership","leadership",301358948),1.0,new cljs.core.Keyword(null,"pressure-tolerance","pressure-tolerance",-1685154078),0.6], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"rally",new cljs.core.Keyword(null,"label","label",1718410804),"Stand up and deliver a motivating speech to fire up the team",new cljs.core.Keyword(null,"score","score",-1963588780),1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"strategy",new cljs.core.Keyword(null,"label","label",1718410804),"Quietly review what's working and suggest tactical adjustments",new cljs.core.Keyword(null,"score","score",-1963588780),0.6], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"individual",new cljs.core.Keyword(null,"label","label",1718410804),"Focus on preparing yourself mentally for the second half",new cljs.core.Keyword(null,"score","score",-1963588780),0.3], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"defer",new cljs.core.Keyword(null,"label","label",1718410804),"Let the coaches handle it - that's their job",new cljs.core.Keyword(null,"score","score",-1963588780),0.1], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sk-2",new cljs.core.Keyword(null,"text","text",-1790561697),"I can break down complex plays so any teammate understands their role.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"communication","communication",1734879700),1.0,new cljs.core.Keyword(null,"mentoring","mentoring",-6105529),0.6], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sk-3",new cljs.core.Keyword(null,"text","text",-1790561697),"I enjoy tracking my performance stats and analyzing game data.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),1.0,new cljs.core.Keyword(null,"analytical","analytical",219506896),0.8], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sk-4",new cljs.core.Keyword(null,"text","text",-1790561697),"I quickly adapt to new training technology, performance apps, and video analysis tools.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"technical","technical",-1762752687),1.0], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"fin-1",new cljs.core.Keyword(null,"text","text",-1790561697),"How important is earning potential when choosing your post-athletic career?",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"income-priority","income-priority",-939788561),1.0], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"fin-2",new cljs.core.Keyword(null,"text","text",-1790561697),"Like investing in development years as a young athlete, I'd accept lower initial pay for long-term career growth.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"education-openness","education-openness",-1411886294),0.8], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"tm-1",new cljs.core.Keyword(null,"text","text",-1790561697),"How soon after your athletic career ends do you want to start your professional career?",new cljs.core.Keyword(null,"type","type",1174270348),"multiple_choice",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urgency","urgency",-1292117426),1.0], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"immediate",new cljs.core.Keyword(null,"label","label",1718410804),"Immediately",new cljs.core.Keyword(null,"score","score",-1963588780),1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"3-months",new cljs.core.Keyword(null,"label","label",1718410804),"Within 3 months",new cljs.core.Keyword(null,"score","score",-1963588780),0.75], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"6-months",new cljs.core.Keyword(null,"label","label",1718410804),"Within 6 months",new cljs.core.Keyword(null,"score","score",-1963588780),0.5], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"grad-school",new cljs.core.Keyword(null,"label","label",1718410804),"After graduate school",new cljs.core.Keyword(null,"score","score",-1963588780),0.0], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"tm-2",new cljs.core.Keyword(null,"text","text",-1790561697),"I've thought about starting my own sports-related business (training facility, brand, agency, etc.).",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entrepreneurial","entrepreneurial",-336834457),1.0,new cljs.core.Keyword(null,"risk-tolerance","risk-tolerance",460361079),0.7], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sk-5",new cljs.core.Keyword(null,"text","text",-1790561697),"During training, I like breaking down complex techniques into smaller steps to master each part.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analytical","analytical",219506896),1.0,new cljs.core.Keyword(null,"data","data",-232669377),0.5], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"sk-6",new cljs.core.Keyword(null,"text","text",-1790561697),"It's the final seconds of a championship game. Your team needs one play to win, and the ball is coming to you. How do you feel?",new cljs.core.Keyword(null,"type","type",1174270348),"scenario",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pressure-tolerance","pressure-tolerance",-1685154078),1.0,new cljs.core.Keyword(null,"competitive","competitive",2077888403),0.5], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"thrive",new cljs.core.Keyword(null,"label","label",1718410804),"This is what I live for - I want this moment",new cljs.core.Keyword(null,"score","score",-1963588780),1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"confident",new cljs.core.Keyword(null,"label","label",1718410804),"Nervous but confident - I've prepared for this",new cljs.core.Keyword(null,"score","score",-1963588780),0.75], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"anxious",new cljs.core.Keyword(null,"label","label",1718410804),"Very nervous - I hope I don't mess up",new cljs.core.Keyword(null,"score","score",-1963588780),0.35], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"avoid",new cljs.core.Keyword(null,"label","label",1718410804),"I'd rather someone else take this shot",new cljs.core.Keyword(null,"score","score",-1963588780),0.1], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"int-4",new cljs.core.Keyword(null,"text","text",-1790561697),"Maintaining a connection to athletics is important to my career satisfaction - I want sports in my professional life.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sports-connection","sports-connection",1356367970),1.0], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"sk-7",new cljs.core.Keyword(null,"text","text",-1790561697),"I'm comfortable discussing my value with coaches - negotiating playing time, role, or opportunities.",new cljs.core.Keyword(null,"type","type",1174270348),"likert",new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"negotiation","negotiation",546897901),1.0,new cljs.core.Keyword(null,"communication","communication",1734879700),0.4], null)], null)], null);
app.client.app.sample_results = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"career-matches","career-matches",-1953036919),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Sports Marketing Manager",new cljs.core.Keyword(null,"match","match",1220059550),(88),new cljs.core.Keyword(null,"category","category",-593092832),"Sports Business"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Athletic Director",new cljs.core.Keyword(null,"match","match",1220059550),(85),new cljs.core.Keyword(null,"category","category",-593092832),"Sports Administration"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Corporate Sales Executive",new cljs.core.Keyword(null,"match","match",1220059550),(82),new cljs.core.Keyword(null,"category","category",-593092832),"Business"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Sports Agent",new cljs.core.Keyword(null,"match","match",1220059550),(79),new cljs.core.Keyword(null,"category","category",-593092832),"Sports Business"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Brand Manager",new cljs.core.Keyword(null,"match","match",1220059550),(76),new cljs.core.Keyword(null,"category","category",-593092832),"Marketing"], null)], null),new cljs.core.Keyword(null,"recommended-majors","recommended-majors",964081293),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sports Management","Business Administration","Marketing"], null),new cljs.core.Keyword(null,"internship","internship",-692945875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recommended","recommended",992487577),true,new cljs.core.Keyword(null,"confidence","confidence",-2080269669),(85)], null),new cljs.core.Keyword(null,"grad-school","grad-school",-591199518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"recommended","recommended",992487577),true,new cljs.core.Keyword(null,"timing","timing",-1849225195),"After 2-3 years work experience"], null)], null);
/**
 * 
 */
app.client.app.set_page = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client.app","set-page","app.client.app/set-page",-1661704186,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client.app","set-page","app.client.app/set-page",-1661704186,null),(function (fulcro_mutation_env_symbol){
var map__31952 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__31952__$1 = cljs.core.__destructure_map(map__31952);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31952__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$client$app$action(p__31953){
var map__31954 = p__31953;
var map__31954__$1 = cljs.core.__destructure_map(map__31954);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31954__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__31955_32034 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31956_32035 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31956_32035);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31955_32034);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__31957 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31958 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31958);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31957);
}})], null);
}));
/**
 * 
 */
app.client.app.set_question_index = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client.app","set-question-index","app.client.app/set-question-index",-2040957839,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client.app","set-question-index","app.client.app/set-question-index",-2040957839,null),(function (fulcro_mutation_env_symbol){
var map__31959 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__31959__$1 = cljs.core.__destructure_map(map__31959);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31959__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$client$app$action(p__31960){
var map__31961 = p__31960;
var map__31961__$1 = cljs.core.__destructure_map(map__31961);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31961__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__31962_32036 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31963_32037 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31963_32037);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"current-question","current-question",-749753188),index);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31962_32036);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__31964 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31965 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31965);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31964);
}})], null);
}));
/**
 * 
 */
app.client.app.save_answer = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client.app","save-answer","app.client.app/save-answer",855902303,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client.app","save-answer","app.client.app/save-answer",855902303,null),(function (fulcro_mutation_env_symbol){
var map__31966 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__31966__$1 = cljs.core.__destructure_map(map__31966);
var question_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"question-id","question-id",529146980));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31966__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$client$app$action(p__31967){
var map__31968 = p__31967;
var map__31968__$1 = cljs.core.__destructure_map(map__31968);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31968__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__31969_32038 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31970_32039 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31970_32039);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770),question_id], null),value);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31969_32038);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__31971 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31972 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31972);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31971);
}})], null);
}));
/**
 * Transform client questions to scoring engine format
 */
app.client.app.__GT_scoring_questions = (function app$client$app$__GT_scoring_questions(questions){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (q){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"question-type","question-type",-421413807),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935),new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(q)], null);
}),questions);
});
/**
 * Transform client answers to scoring engine format
 */
app.client.app.__GT_scoring_responses = (function app$client$app$__GT_scoring_responses(answers,questions){
var q_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),questions));
return cljs.core.vec((function (){var iter__5480__auto__ = (function app$client$app$__GT_scoring_responses_$_iter__31975(s__31976){
return (new cljs.core.LazySeq(null,(function (){
var s__31976__$1 = s__31976;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31976__$1);
if(temp__5804__auto__){
var s__31976__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31976__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__31976__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__31978 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__31977 = (0);
while(true){
if((i__31977 < size__5479__auto__)){
var vec__31979 = cljs.core._nth(c__5478__auto__,i__31977);
var qid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31979,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31979,(1),null);
if((!((value == null)))){
cljs.core.chunk_append(b__31978,(function (){var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_map,qid);
var q_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(q);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question-id","question-id",529146980),qid,new cljs.core.Keyword(null,"response-value","response-value",-1642517084),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"likert"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"multiple_choice"))?(function (){var opt = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__31977,s__31976__$1,q,q_type,vec__31979,qid,value,c__5478__auto__,size__5479__auto__,b__31978,s__31976__$2,temp__5804__auto__,q_map){
return (function (p1__31973_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31973_SHARP_),value);
});})(i__31977,s__31976__$1,q,q_type,vec__31979,qid,value,c__5478__auto__,size__5479__auto__,b__31978,s__31976__$2,temp__5804__auto__,q_map))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(q)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"score","score",-1963588780),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.5;
}
})()], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"scenario"))?(function (){var selected_val = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value);
var opt = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__31977,s__31976__$1,selected_val,q,q_type,vec__31979,qid,value,c__5478__auto__,size__5479__auto__,b__31978,s__31976__$2,temp__5804__auto__,q_map){
return (function (p1__31974_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31974_SHARP_),selected_val);
});})(i__31977,s__31976__$1,selected_val,q,q_type,vec__31979,qid,value,c__5478__auto__,size__5479__auto__,b__31978,s__31976__$2,temp__5804__auto__,q_map))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(q)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),selected_val,new cljs.core.Keyword(null,"score","score",-1963588780),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.5;
}
})()], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"ranking"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),new cljs.core.Keyword(null,"ranks","ranks",-1802584866).cljs$core$IFn$_invoke$arity$1(value)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null)
))))], null);
})());

var G__32040 = (i__31977 + (1));
i__31977 = G__32040;
continue;
} else {
var G__32041 = (i__31977 + (1));
i__31977 = G__32041;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31978),app$client$app$__GT_scoring_responses_$_iter__31975(cljs.core.chunk_rest(s__31976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31978),null);
}
} else {
var vec__31982 = cljs.core.first(s__31976__$2);
var qid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31982,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31982,(1),null);
if((!((value == null)))){
return cljs.core.cons((function (){var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_map,qid);
var q_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(q);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question-id","question-id",529146980),qid,new cljs.core.Keyword(null,"response-value","response-value",-1642517084),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"likert"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"multiple_choice"))?(function (){var opt = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s__31976__$1,q,q_type,vec__31982,qid,value,s__31976__$2,temp__5804__auto__,q_map){
return (function (p1__31973_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31973_SHARP_),value);
});})(s__31976__$1,q,q_type,vec__31982,qid,value,s__31976__$2,temp__5804__auto__,q_map))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(q)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"score","score",-1963588780),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.5;
}
})()], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"scenario"))?(function (){var selected_val = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value);
var opt = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s__31976__$1,selected_val,q,q_type,vec__31982,qid,value,s__31976__$2,temp__5804__auto__,q_map){
return (function (p1__31974_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31974_SHARP_),selected_val);
});})(s__31976__$1,selected_val,q,q_type,vec__31982,qid,value,s__31976__$2,temp__5804__auto__,q_map))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(q)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),selected_val,new cljs.core.Keyword(null,"score","score",-1963588780),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.5;
}
})()], null);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(q_type,"ranking"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),new cljs.core.Keyword(null,"ranks","ranks",-1802584866).cljs$core$IFn$_invoke$arity$1(value)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null)
))))], null);
})(),app$client$app$__GT_scoring_responses_$_iter__31975(cljs.core.rest(s__31976__$2)));
} else {
var G__32042 = cljs.core.rest(s__31976__$2);
s__31976__$1 = G__32042;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(answers);
})());
});
/**
 * 
 */
app.client.app.compute_results = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client.app","compute-results","app.client.app/compute-results",-1137270132,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client.app","compute-results","app.client.app/compute-results",-1137270132,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function app$client$app$action(p__31985){
var map__31986 = p__31985;
var map__31986__$1 = cljs.core.__destructure_map(map__31986);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31986__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__31987_32043 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31988_32044 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31988_32044);

try{var answers_32045 = new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var responses_32046 = app.client.app.__GT_scoring_responses(answers_32045,app.client.app.sample_questions);
var questions_32047 = app.client.app.__GT_scoring_questions(app.client.app.sample_questions);
var results_32048 = app.scoring.calculate_results(responses_32046,questions_32047,app.careers.careers,cljs.core.PersistentVector.EMPTY);
var personalized_advice_32049 = app.advice.generate_personalized_advice(results_32048,app.careers.careers);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"computed-results","computed-results",463679020),results_32048,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"personalized-advice","personalized-advice",-2025699737),personalized_advice_32049], 0));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31987_32043);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__31989 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__31990 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__31990);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__31989);
}})], null);
}));

var options__20391__auto___32050 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_LikertScale(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__31991 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__31991__$1 = cljs.core.__destructure_map(map__31991);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31991__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31991__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),(1),new cljs.core.Keyword(null,"label","label",1718410804),"Strongly Disagree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),(2),new cljs.core.Keyword(null,"label","label",1718410804),"Disagree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),(3),new cljs.core.Keyword(null,"label","label",1718410804),"Neutral"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),(4),new cljs.core.Keyword(null,"label","label",1718410804),"Agree"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),(5),new cljs.core.Keyword(null,"label","label",1718410804),"Strongly Agree"], null)], null);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "likert-scale"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31992){
var map__31993 = p__31992;
var map__31993__$1 = cljs.core.__destructure_map(map__31993);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31993__$1,new cljs.core.Keyword(null,"v","v",21465059));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31993__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),v,new cljs.core.Keyword(null,"className","className",-1983287057),["likert-option ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,v))?"selected":null)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v) : on_change.call(null,v));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "1.2rem", "fontWeight": "500"})}),com.fulcrologic.fulcro.components.force_children(v)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"fontSize": "0.75rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children(label)])], null),null);
}),options))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.LikertScale !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.LikertScale = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32050,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.LikertScale,new cljs.core.Keyword("app.client.app","LikertScale","app.client.app/LikertScale",847276388),options__20391__auto___32050);
app.client.app.ui_likert_scale = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.LikertScale);

var options__20391__auto___32051 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_MultipleChoice(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__31994 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__31994__$1 = cljs.core.__destructure_map(map__31994);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31994__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31994__$1,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31994__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "multiple-choice"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31995){
var map__31996 = p__31995;
var map__31996__$1 = cljs.core.__destructure_map(map__31996);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),value,new cljs.core.Keyword(null,"className","className",-1983287057),["choice-option ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_value,value))?"selected":null)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
})], null),label], null),null);
}),options))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.MultipleChoice !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.MultipleChoice = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32051,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.MultipleChoice,new cljs.core.Keyword("app.client.app","MultipleChoice","app.client.app/MultipleChoice",288905365),options__20391__auto___32051);
app.client.app.ui_multiple_choice = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.MultipleChoice);

var options__20391__auto___32052 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_ScenarioChoice(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__31997 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__31997__$1 = cljs.core.__destructure_map(map__31997);
var scenario = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31997__$1,new cljs.core.Keyword(null,"scenario","scenario",-316635333));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31997__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31997__$1,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31997__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "#f8fafc", "padding": "20px", "borderRadius": "8px", "marginBottom": "24px", "borderLeft": "4px solid #2563eb"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "8px", "color": "#1e293b"})}),"Scenario"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"lineHeight": "1.7"})}),com.fulcrologic.fulcro.components.force_children(scenario)]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "16px"})}),"How would you respond?"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "multiple-choice"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31998){
var map__31999 = p__31998;
var map__31999__$1 = cljs.core.__destructure_map(map__31999);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31999__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31999__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31999__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),value,new cljs.core.Keyword(null,"className","className",-1983287057),["choice-option ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_value,value))?"selected":null)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__32000 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__32000) : on_change.call(null,G__32000));
})], null),label], null),null);
}),options))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.ScenarioChoice !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.ScenarioChoice = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32052,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.ScenarioChoice,new cljs.core.Keyword("app.client.app","ScenarioChoice","app.client.app/ScenarioChoice",163790801),options__20391__auto___32052);
app.client.app.ui_scenario_choice = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.ScenarioChoice);

var options__20391__auto___32053 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_RankingChoice(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__32001 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__32001__$1 = cljs.core.__destructure_map(map__32001);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32001__$1,new cljs.core.Keyword(null,"options","options",99638489));
var current_ranks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32001__$1,new cljs.core.Keyword(null,"current-ranks","current-ranks",-996608182));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32001__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var available = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(current_ranks),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),options));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b", "marginBottom": "16px"})}),"Click items in order of preference (1st = most important)"])),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(current_ranks))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "12px"})}),"Your Ranking:"])),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),item,new cljs.core.Keyword(null,"className","className",-1983287057),"choice-option selected",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__32002 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([item]),current_ranks))], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__32002) : on_change.call(null,G__32002));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "white", "borderRadius": "50%", "width": "28px", "justifyContent": "center", "display": "flex", "backgroundColor": "#2563eb", "height": "28px", "alignItems": "center", "marginRight": "12px"})}),com.fulcrologic.fulcro.components.force_children((idx + (1)))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({}),com.fulcrologic.fulcro.components.force_children(item)])], null),null);
}),current_ranks))]):null)),com.fulcrologic.fulcro.components.force_children(((cljs.core.seq(available))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"style": ({"marginBottom": "12px"})}),"Available:"])),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),item,new cljs.core.Keyword(null,"className","className",-1983287057),"choice-option",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__32003 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ranks","ranks",-1802584866),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = current_ranks;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),item)], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__32003) : on_change.call(null,G__32003));
})], null),item], null),null);
}),available))]):null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.RankingChoice !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.RankingChoice = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32053,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.RankingChoice,new cljs.core.Keyword("app.client.app","RankingChoice","app.client.app/RankingChoice",2011036960),options__20391__auto___32053);
app.client.app.ui_ranking_choice = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.RankingChoice);

var options__20391__auto___32054 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_Question(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__32004 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__32004__$1 = cljs.core.__destructure_map(map__32004);
var question = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"question","question",-1411720117));
var answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"answer","answer",-742633163));
var on_answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32004__$1,new cljs.core.Keyword(null,"on-answer","on-answer",2133327845));
var map__32005 = question;
var map__32005__$1 = cljs.core.__destructure_map(map__32005);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32005__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32005__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32005__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32005__$1,new cljs.core.Keyword(null,"options","options",99638489));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"scenario"))?null:com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(text)]))),com.fulcrologic.fulcro.components.force_children((function (){var G__32006 = type;
switch (G__32006) {
case "likert":
var G__32007 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),answer,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_answer], null);
return (app.client.app.ui_likert_scale.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_likert_scale.cljs$core$IFn$_invoke$arity$1(G__32007) : app.client.app.ui_likert_scale.call(null,G__32007));

break;
case "multiple_choice":
var G__32008 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500),answer,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_answer], null);
return (app.client.app.ui_multiple_choice.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_multiple_choice.cljs$core$IFn$_invoke$arity$1(G__32008) : app.client.app.ui_multiple_choice.call(null,G__32008));

break;
case "scenario":
var G__32009 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scenario","scenario",-316635333),text,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(answer),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_answer], null);
return (app.client.app.ui_scenario_choice.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_scenario_choice.cljs$core$IFn$_invoke$arity$1(G__32009) : app.client.app.ui_scenario_choice.call(null,G__32009));

break;
case "ranking":
var G__32010 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"current-ranks","current-ranks",-996608182),new cljs.core.Keyword(null,"ranks","ranks",-1802584866).cljs$core$IFn$_invoke$arity$1(answer),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_answer], null);
return (app.client.app.ui_ranking_choice.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_ranking_choice.cljs$core$IFn$_invoke$arity$1(G__32010) : app.client.app.ui_ranking_choice.call(null,G__32010));

break;
default:
var G__32011 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),answer,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_answer], null);
return (app.client.app.ui_likert_scale.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_likert_scale.cljs$core$IFn$_invoke$arity$1(G__32011) : app.client.app.ui_likert_scale.call(null,G__32011));

}
})())]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.Question !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.Question = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32054,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.Question,new cljs.core.Keyword("app.client.app","Question","app.client.app/Question",-1037883579),options__20391__auto___32054);
app.client.app.ui_question = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.Question);

var options__20391__auto___32056 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_LandingPage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__32012 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__32012__$1 = cljs.core.__destructure_map(map__32012);
var on_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32012__$1,new cljs.core.Keyword(null,"on-start","on-start",-1839785985));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "container"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"textAlign": "center", "padding": "48px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({"style": ({"fontSize": "2.5rem", "marginBottom": "16px", "color": "#1e293b"})}),"Athlete Career Quest"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"fontSize": "1.2rem", "color": "#64748b", "marginBottom": "32px"})}),"Discover your ideal career path based on your unique strengths, interests, and goals."])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "gap": "16px", "justifyContent": "center", "marginBottom": "32px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"padding": "24px", "flex": "1", "maxWidth": "200px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"16"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"Questions"]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"padding": "24px", "flex": "1", "maxWidth": "200px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"50+"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"Career Paths"]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card", "style": ({"padding": "24px", "flex": "1", "maxWidth": "200px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"4"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"color": "#64748b"})}),"Recommendations"]))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"1.1rem",new cljs.core.Keyword(null,"padding","padding",1660304693),"16px 48px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_start], null),"Start Your Journey"], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.LandingPage !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.LandingPage = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32056,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.LandingPage,new cljs.core.Keyword("app.client.app","LandingPage","app.client.app/LandingPage",504073193),options__20391__auto___32056);
app.client.app.ui_landing_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.LandingPage);
/**
 * Check if an answer is valid based on question type
 */
app.client.app.answer_valid_QMARK_ = (function app$client$app$answer_valid_QMARK_(question,answer){
var q_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(question);
var G__32013 = q_type;
switch (G__32013) {
case "likert":
return (!((answer == null)));

break;
case "multiple_choice":
return (!((answer == null)));

break;
case "scenario":
return (!((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(answer) == null)));

break;
case "ranking":
var ranks = new cljs.core.Keyword(null,"ranks","ranks",-1802584866).cljs$core$IFn$_invoke$arity$1(answer);
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(question);
return ((cljs.core.seq(ranks)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ranks),cljs.core.count(options))));

break;
default:
return (!((answer == null)));

}
});

var options__20391__auto___32058 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_QuestionnairePage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__32014 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__32014__$1 = cljs.core.__destructure_map(map__32014);
var question_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014__$1,new cljs.core.Keyword(null,"question-index","question-index",1682907848));
var answers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var on_answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014__$1,new cljs.core.Keyword(null,"on-answer","on-answer",2133327845));
var on_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014__$1,new cljs.core.Keyword(null,"on-next","on-next",1556687516));
var on_back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014__$1,new cljs.core.Keyword(null,"on-back","on-back",1678532171));
var on_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32014__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var total = cljs.core.count(app.client.app.sample_questions);
var question = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.client.app.sample_questions,question_index);
var answer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(question));
var progress = ((100) * ((question_index + (1)) / total));
var is_last = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(question_index,(total - (1)));
var can_proceed = app.client.app.answer_valid_QMARK_(question,answer);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "container"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginBottom": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "8px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.9rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children(["Question ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((question_index + (1)))," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)].join(''))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontSize": "0.9rem", "color": "#64748b"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(progress)),"% complete"].join(''))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress),"%"].join('')], null)], null)], null),null))]))])),com.fulcrologic.fulcro.components.force_children((function (){var G__32015 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question","question",-1411720117),question,new cljs.core.Keyword(null,"answer","answer",-742633163),answer,new cljs.core.Keyword(null,"on-answer","on-answer",2133327845),on_answer], null);
return (app.client.app.ui_question.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_question.cljs$core$IFn$_invoke$arity$1(G__32015) : app.client.app.ui_question.call(null,G__32015));
})()),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginTop": "24px"})}),com.fulcrologic.fulcro.components.force_children((((question_index > (0)))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_back], null),"Back"], null),null):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({})]))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(can_proceed),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not(can_proceed))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.5",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"not-allowed"], null):null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(cljs.core.truth_(can_proceed)?((is_last)?on_complete:on_next):null)], null),((is_last)?"See Results":"Next")], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.QuestionnairePage !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.QuestionnairePage = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32058,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.QuestionnairePage,new cljs.core.Keyword("app.client.app","QuestionnairePage","app.client.app/QuestionnairePage",-416199236),options__20391__auto___32058);
app.client.app.ui_questionnaire_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.QuestionnairePage);

var options__20391__auto___32059 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_ResultsPage(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__32016 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__32016__$1 = cljs.core.__destructure_map(map__32016);
var computed_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32016__$1,new cljs.core.Keyword(null,"computed-results","computed-results",463679020));
var personalized_advice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32016__$1,new cljs.core.Keyword(null,"personalized-advice","personalized-advice",-2025699737));
var on_restart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32016__$1,new cljs.core.Keyword(null,"on-restart","on-restart",-83802489));
var map__32017 = computed_results;
var map__32017__$1 = cljs.core.__destructure_map(map__32017);
var career_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32017__$1,new cljs.core.Keyword(null,"career-scores","career-scores",-1890079113));
var recommendations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32017__$1,new cljs.core.Keyword(null,"recommendations","recommendations",-154139268));
var career_matches = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"career-name","career-name",2126938427).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"match","match",1220059550),Math.round(((100) * new cljs.core.Keyword(null,"match-score","match-score",847728677).cljs$core$IFn$_invoke$arity$1(c))),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"career-category","career-category",1896068630).cljs$core$IFn$_invoke$arity$1(c)], null);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),career_scores));
var recommended_majors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(recommendations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"top-3","top-3",1356354382)], null)));
var internship_advice = new cljs.core.Keyword(null,"internship-advice","internship-advice",-1314806060).cljs$core$IFn$_invoke$arity$1(personalized_advice);
var grad_school_advice = new cljs.core.Keyword(null,"grad-school-advice","grad-school-advice",-1127949285).cljs$core$IFn$_invoke$arity$1(personalized_advice);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "container"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "result-card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({"style": ({"margin": "0 0 8px 0"})}),"Your Career Profile"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"style": ({"opacity": "0.9"})}),"Based on your responses, here are your personalized recommendations."]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({"style": ({"marginBottom": "24px"})}),"Top Career Matches"])),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32018){
var map__32019 = p__32018;
var map__32019__$1 = cljs.core.__destructure_map(map__32019);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32019__$1,new cljs.core.Keyword(null,"match","match",1220059550));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32019__$1,new cljs.core.Keyword(null,"category","category",-593092832));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"16px"], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"color": "#64748b", "marginLeft": "8px"})}),com.fulcrologic.fulcro.components.force_children(category)])], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["span",({"style": ({"fontWeight": "bold", "color": "#2563eb"})}),com.fulcrologic.fulcro.components.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(match),"%"].join(''))]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress-bar"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"progress-bar-fill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(match),"%"].join('')], null)], null)], null),null))])], null),null);
}),career_matches))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(280px, 1fr))", "gap": "16px", "marginTop": "24px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "card"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"marginBottom": "16px"})}),"Recommended Majors"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["ol",({"style": ({"margin": (0), "paddingLeft": "20px"})}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (major){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),major,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"8px"], null)], null),major], null),null);
}),recommended_majors))]))])),com.fulcrologic.fulcro.components.force_children((app.ui.components.ui_personalized_advice_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_personalized_advice_card.cljs$core$IFn$_invoke$arity$1(internship_advice) : app.ui.components.ui_personalized_advice_card.call(null,internship_advice))),com.fulcrologic.fulcro.components.force_children((app.ui.components.ui_personalized_advice_card.cljs$core$IFn$_invoke$arity$1 ? app.ui.components.ui_personalized_advice_card.cljs$core$IFn$_invoke$arity$1(grad_school_advice) : app.ui.components.ui_personalized_advice_card.call(null,grad_school_advice)))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"textAlign": "center", "marginTop": "32px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_restart], null),"Retake Assessment"], null),null))]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.ResultsPage !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.ResultsPage = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32059,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.ResultsPage,new cljs.core.Keyword("app.client.app","ResultsPage","app.client.app/ResultsPage",1156627771),options__20391__auto___32059);
app.client.app.ui_results_page = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.app.ResultsPage);

var options__20391__auto___32060 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$app$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"current-question","current-question",-749753188),new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.Keyword(null,"computed-results","computed-results",463679020),new cljs.core.Keyword(null,"personalized-advice","personalized-advice",-2025699737)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$app$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"landing","landing",-1137922265),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0),new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"computed-results","computed-results",463679020),null,new cljs.core.Keyword(null,"personalized-advice","personalized-advice",-2025699737),null], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$app$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__32021 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__32021__$1 = cljs.core.__destructure_map(map__32021);
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32021__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var current_question = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32021__$1,new cljs.core.Keyword(null,"current-question","current-question",-749753188));
var answers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32021__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var computed_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32021__$1,new cljs.core.Keyword(null,"computed-results","computed-results",463679020));
var personalized_advice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32021__$1,new cljs.core.Keyword(null,"personalized-advice","personalized-advice",-2025699737));
var G__32022 = current_page;
var G__32022__$1 = (((G__32022 instanceof cljs.core.Keyword))?G__32022.fqn:null);
switch (G__32022__$1) {
case "landing":
var G__32023 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-start","on-start",-1839785985),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32024 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"questionnaire","questionnaire",120538116)], null);
return (app.client.app.set_page.cljs$core$IFn$_invoke$arity$1 ? app.client.app.set_page.cljs$core$IFn$_invoke$arity$1(G__32024) : app.client.app.set_page.call(null,G__32024));
})()], null));
})], null);
return (app.client.app.ui_landing_page.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_landing_page.cljs$core$IFn$_invoke$arity$1(G__32023) : app.client.app.ui_landing_page.call(null,G__32023));

break;
case "questionnaire":
var G__32025 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"question-index","question-index",1682907848),current_question,new cljs.core.Keyword(null,"answers","answers",-2066449770),answers,new cljs.core.Keyword(null,"on-answer","on-answer",2133327845),(function (p1__32020_SHARP_){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32026 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"question-id","question-id",529146980),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.client.app.sample_questions,current_question)),new cljs.core.Keyword(null,"value","value",305978217),p1__32020_SHARP_], null);
return (app.client.app.save_answer.cljs$core$IFn$_invoke$arity$1 ? app.client.app.save_answer.cljs$core$IFn$_invoke$arity$1(G__32026) : app.client.app.save_answer.call(null,G__32026));
})()], null));
}),new cljs.core.Keyword(null,"on-next","on-next",1556687516),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32027 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),(current_question + (1))], null);
return (app.client.app.set_question_index.cljs$core$IFn$_invoke$arity$1 ? app.client.app.set_question_index.cljs$core$IFn$_invoke$arity$1(G__32027) : app.client.app.set_question_index.call(null,G__32027));
})()], null));
}),new cljs.core.Keyword(null,"on-back","on-back",1678532171),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32028 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),(current_question - (1))], null);
return (app.client.app.set_question_index.cljs$core$IFn$_invoke$arity$1 ? app.client.app.set_question_index.cljs$core$IFn$_invoke$arity$1(G__32028) : app.client.app.set_question_index.call(null,G__32028));
})()], null));
}),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32029 = cljs.core.PersistentArrayMap.EMPTY;
return (app.client.app.compute_results.cljs$core$IFn$_invoke$arity$1 ? app.client.app.compute_results.cljs$core$IFn$_invoke$arity$1(G__32029) : app.client.app.compute_results.call(null,G__32029));
})(),(function (){var G__32030 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"results","results",-1134170113)], null);
return (app.client.app.set_page.cljs$core$IFn$_invoke$arity$1 ? app.client.app.set_page.cljs$core$IFn$_invoke$arity$1(G__32030) : app.client.app.set_page.call(null,G__32030));
})()], null));
})], null);
return (app.client.app.ui_questionnaire_page.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_questionnaire_page.cljs$core$IFn$_invoke$arity$1(G__32025) : app.client.app.ui_questionnaire_page.call(null,G__32025));

break;
case "results":
var G__32031 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"computed-results","computed-results",463679020),computed_results,new cljs.core.Keyword(null,"personalized-advice","personalized-advice",-2025699737),personalized_advice,new cljs.core.Keyword(null,"on-restart","on-restart",-83802489),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32032 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"landing","landing",-1137922265)], null);
return (app.client.app.set_page.cljs$core$IFn$_invoke$arity$1 ? app.client.app.set_page.cljs$core$IFn$_invoke$arity$1(G__32032) : app.client.app.set_page.call(null,G__32032));
})(),(function (){var G__32033 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),(0)], null);
return (app.client.app.set_question_index.cljs$core$IFn$_invoke$arity$1 ? app.client.app.set_question_index.cljs$core$IFn$_invoke$arity$1(G__32033) : app.client.app.set_question_index.call(null,G__32033));
})()], null));
})], null);
return (app.client.app.ui_results_page.cljs$core$IFn$_invoke$arity$1 ? app.client.app.ui_results_page.cljs$core$IFn$_invoke$arity$1(G__32031) : app.client.app.ui_results_page.call(null,G__32031));

break;
default:
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Loading..."]);

}
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.app.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__20391__auto___32060,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.app.Root,new cljs.core.Keyword("app.client.app","Root","app.client.app/Root",627152149),options__20391__auto___32060);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.app !== 'undefined') && (typeof app.client.app.app !== 'undefined')){
} else {
app.client.app.app = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Mount the application
 */
app.client.app.mount_BANG_ = (function app$client$app$mount_BANG_(){
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.app.app,app.client.app.Root,"app");

return console.log("App mounted!");
});

//# sourceMappingURL=app.client.app.js.map
