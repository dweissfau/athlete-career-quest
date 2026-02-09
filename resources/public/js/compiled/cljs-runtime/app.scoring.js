goog.provide('app.scoring');
app.scoring.default_dimension_weights = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sports-connection","sports-connection",1356367970),new cljs.core.Keyword(null,"pressure-tolerance","pressure-tolerance",-1685154078),new cljs.core.Keyword(null,"leadership","leadership",301358948),new cljs.core.Keyword(null,"entrepreneurial","entrepreneurial",-336834457),new cljs.core.Keyword(null,"mentoring","mentoring",-6105529),new cljs.core.Keyword(null,"social-impact","social-impact",-1320379031),new cljs.core.Keyword(null,"education-openness","education-openness",-1411886294),new cljs.core.Keyword(null,"collaborative","collaborative",-18220371),new cljs.core.Keyword(null,"creative","creative",1112319885),new cljs.core.Keyword(null,"negotiation","negotiation",546897901),new cljs.core.Keyword(null,"urgency","urgency",-1292117426),new cljs.core.Keyword(null,"income-priority","income-priority",-939788561),new cljs.core.Keyword(null,"analytical","analytical",219506896),new cljs.core.Keyword(null,"technical","technical",-1762752687),new cljs.core.Keyword(null,"competitive","competitive",2077888403),new cljs.core.Keyword(null,"communication","communication",1734879700),new cljs.core.Keyword(null,"risk-tolerance","risk-tolerance",460361079),new cljs.core.Keyword(null,"physical","physical",-1228627081),new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.Keyword(null,"data","data",-232669377)],[1.0,1.0,1.2,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.1,1.0,0.8,1.0,1.0]);
app.scoring.default_category_weights = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interests","interests",1200294902),0.25,new cljs.core.Keyword(null,"skills","skills",958701426),0.3,new cljs.core.Keyword(null,"financial","financial",6632681),0.2,new cljs.core.Keyword(null,"timeline","timeline",192903161),0.25], null);
/**
 * Get configuration value with fallback
 */
app.scoring.get_config_value = (function app$scoring$get_config_value(config,key,default$){
var or__5045__auto__ = (function (){var G__45398 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45396_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"config-key","config-key",1125141517).cljs$core$IFn$_invoke$arity$1(p1__45396_SHARP_),key);
}),config);
var G__45398__$1 = (((G__45398 == null))?null:cljs.core.first(G__45398));
if((G__45398__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"config-value","config-value",-442060525).cljs$core$IFn$_invoke$arity$1(G__45398__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
});
/**
 * Normalize a response value to 0-1 scale
 */
app.scoring.normalize_response = (function app$scoring$normalize_response(response,question){
var value = new cljs.core.Keyword(null,"response-value","response-value",-1642517084).cljs$core$IFn$_invoke$arity$1(response);
var q_type = new cljs.core.Keyword(null,"question-type","question-type",-421413807).cljs$core$IFn$_invoke$arity$1(question);
var G__45402 = q_type;
switch (G__45402) {
case "likert":
return (((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = value;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (3);
}
}
})() - (1)) / 4.0);

break;
case "multiple_choice":
var or__5045__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.5;
}

break;
case "ranking":
var ranks = new cljs.core.Keyword(null,"ranks","ranks",-1802584866).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.seq(ranks)){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return ((cljs.core.count(ranks) - i) / cljs.core.count(ranks));
}),ranks)) / cljs.core.count(ranks));
} else {
return 0.5;
}

break;
case "scenario":
var or__5045__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.5;
}

break;
case "short_text":
return 0.5;

break;
default:
return 0.5;

}
});
/**
 * Calculate scores for each dimension based on responses
 */
app.scoring.calculate_dimension_scores = (function app$scoring$calculate_dimension_scores(responses,questions){
var response_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"question-id","question-id",529146980).cljs$core$IFn$_invoke$arity$1(r),r], null);
}),responses));
var question_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (q){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q),q], null);
}),questions));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (scores,response){
var question = cljs.core.get.cljs$core$IFn$_invoke$arity$2(question_map,new cljs.core.Keyword(null,"question-id","question-id",529146980).cljs$core$IFn$_invoke$arity$1(response));
var weights = new cljs.core.Keyword(null,"scoring-weights","scoring-weights",-83168935).cljs$core$IFn$_invoke$arity$1(question);
var normalized = app.scoring.normalize_response(response,question);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__45409){
var vec__45410 = p__45409;
var dimension = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45410,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45410,(1),null);
var dim_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dimension);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,dim_key,(function (p__45413){
var map__45414 = p__45413;
var map__45414__$1 = cljs.core.__destructure_map(map__45414);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45414__$1,new cljs.core.Keyword(null,"total","total",1916810418),(0));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45414__$1,new cljs.core.Keyword(null,"count","count",2139924085),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),(total + (normalized * weight)),new cljs.core.Keyword(null,"count","count",2139924085),(count + (1))], null);
}));
}),scores,weights);
}),cljs.core.PersistentArrayMap.EMPTY,responses);
});
/**
 * Convert accumulated scores to final 0-1 scores
 */
app.scoring.finalize_dimension_scores = (function app$scoring$finalize_dimension_scores(raw_scores,dimension_weights){
return cljs.core.reduce_kv((function (scores,dim,p__45417){
var map__45418 = p__45417;
var map__45418__$1 = cljs.core.__destructure_map(map__45418);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45418__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45418__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var avg = (((count > (0)))?(total / count):0.5);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_weights,dim,1.0);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scores,dim,(avg * weight));
}),cljs.core.PersistentArrayMap.EMPTY,raw_scores);
});
/**
 * Calculate scores by category
 */
app.scoring.calculate_category_scores = (function app$scoring$calculate_category_scores(responses,questions,categories){
var category_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),c], null);
}),categories));
var question_categories = cljs.core.group_by(new cljs.core.Keyword(null,"category-id","category-id",1171211503),questions);
var response_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"question-id","question-id",529146980).cljs$core$IFn$_invoke$arity$1(r),r], null);
}),responses));
return cljs.core.reduce_kv((function (scores,cat_id,cat_questions){
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(category_map,cat_id);
var cat_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(category));
var cat_responses = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45420_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__45420_SHARP_));
}),cat_questions));
var avg_score = ((cljs.core.seq(cat_responses))?(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45421_SHARP_){
return app.scoring.normalize_response(p1__45421_SHARP_,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (q){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"question-id","question-id",529146980).cljs$core$IFn$_invoke$arity$1(p1__45421_SHARP_));
}),cat_questions)));
}),cat_responses)) / cljs.core.count(cat_responses)):0.5);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scores,cat_name,avg_score);
}),cljs.core.PersistentArrayMap.EMPTY,question_categories);
});
/**
 * Calculate match score between user profile and a career
 */
app.scoring.calculate_career_match = (function app$scoring$calculate_career_match(dimension_scores,career){
var required_dims = new cljs.core.Keyword(null,"required-dimensions","required-dimensions",875973834).cljs$core$IFn$_invoke$arity$1(career);
var match_scores = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45428){
var vec__45429 = p__45428;
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45429,(0),null);
var importance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45429,(1),null);
var user_score = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_scores,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dim),0.5);
return (user_score * importance);
}),required_dims);
if(cljs.core.seq(match_scores)){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,match_scores) / cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,required_dims)));
} else {
return 0.5;
}
});
/**
 * Calculate match scores for all careers
 */
app.scoring.calculate_career_scores = (function app$scoring$calculate_career_scores(dimension_scores,careers){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"match-score","match-score",847728677),cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (career){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"career-id","career-id",-64182920),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(career),new cljs.core.Keyword(null,"career-name","career-name",2126938427),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(career),new cljs.core.Keyword(null,"career-category","career-category",1896068630),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(career),new cljs.core.Keyword(null,"match-score","match-score",847728677),app.scoring.calculate_career_match(dimension_scores,career),new cljs.core.Keyword(null,"grad-school-recommended","grad-school-recommended",294447954),new cljs.core.Keyword(null,"grad-school-recommended","grad-school-recommended",294447954).cljs$core$IFn$_invoke$arity$1(career),new cljs.core.Keyword(null,"internship-importance","internship-importance",-1283879578),new cljs.core.Keyword(null,"internship-importance","internship-importance",-1283879578).cljs$core$IFn$_invoke$arity$1(career),new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630).cljs$core$IFn$_invoke$arity$1(career),new cljs.core.Keyword(null,"salary-range","salary-range",1261237589),new cljs.core.Keyword(null,"salary-range","salary-range",1261237589).cljs$core$IFn$_invoke$arity$1(career)], null);
}),careers));
});
/**
 * Generate internship recommendation based on scores
 */
app.scoring.generate_internship_recommendation = (function app$scoring$generate_internship_recommendation(dimension_scores,career_scores){
var leadership = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_scores,new cljs.core.Keyword(null,"leadership","leadership",301358948),0.5);
var communication = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_scores,new cljs.core.Keyword(null,"communication","communication",1734879700),0.5);
var urgency = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_scores,new cljs.core.Keyword(null,"urgency","urgency",-1292117426),0.5);
var top_careers = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),career_scores);
var avg_internship_importance = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internship-importance","internship-importance",-1283879578),top_careers)) / (3));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"recommended","recommended",992487577),(avg_internship_importance > (3)),new cljs.core.Keyword(null,"confidence","confidence",-2080269669),(function (){var x__5133__auto__ = 1.0;
var y__5134__auto__ = ((leadership + communication) * 0.5);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),new cljs.core.Keyword(null,"reasoning","reasoning",1956143595),(((((leadership > 0.7)) && ((communication > 0.7))))?"Strong leadership and communication skills make you well-suited for competitive internship programs.":(((urgency > 0.7))?"Your desire to gain practical experience early makes internships highly valuable.":"Internships will help you explore career options and build professional skills."
)),new cljs.core.Keyword(null,"suggested-types","suggested-types",897323794),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"career-category","career-category",1896068630),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),career_scores))], null);
});
/**
 * Generate major recommendations based on career matches
 */
app.scoring.generate_major_recommendation = (function app$scoring$generate_major_recommendation(career_scores){
var top_careers = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),career_scores);
var all_majors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_careers], 0));
var major_freq = cljs.core.frequencies(all_majors);
var ranked_majors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45440){
var vec__45441 = p__45440;
var major = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45441,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45441,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),major,new cljs.core.Keyword(null,"fit","fit",869444807),(freq / cljs.core.count(top_careers))], null);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.val,cljs.core._GT_,major_freq)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-3","top-3",1356354382),ranked_majors,new cljs.core.Keyword(null,"confidence","confidence",-2080269669),(function (){var top_score = new cljs.core.Keyword(null,"match-score","match-score",847728677).cljs$core$IFn$_invoke$arity$1(cljs.core.first(top_careers));
if(cljs.core.truth_(top_score)){
var x__5133__auto__ = 1.0;
var y__5134__auto__ = (top_score * 1.1);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
} else {
return 0.5;
}
})()], null);
});
/**
 * Generate grad school recommendation based on scores and careers
 */
app.scoring.generate_grad_school_recommendation = (function app$scoring$generate_grad_school_recommendation(dimension_scores,career_scores){
var education_openness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_scores,new cljs.core.Keyword(null,"education-openness","education-openness",-1411886294),0.5);
var income_priority = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_scores,new cljs.core.Keyword(null,"income-priority","income-priority",-939788561),0.5);
var urgency = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dimension_scores,new cljs.core.Keyword(null,"urgency","urgency",-1292117426),0.5);
var top_careers = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),career_scores);
var grad_recommended_careers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grad-school-recommended","grad-school-recommended",294447954),top_careers);
var grad_percentage = (cljs.core.count(grad_recommended_careers) / (function (){var x__5130__auto__ = (1);
var y__5131__auto__ = cljs.core.count(top_careers);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
var explicit_grad_intent = (((urgency < 0.25)) && ((education_openness > 0.4)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"recommended","recommended",992487577),((explicit_grad_intent) || ((((education_openness > 0.5)) && ((grad_percentage > 0.4))))),new cljs.core.Keyword(null,"confidence","confidence",-2080269669),((explicit_grad_intent)?(function (){var x__5133__auto__ = 1.0;
var y__5134__auto__ = (0.7 + (education_openness * 0.3));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})():(function (){var x__5133__auto__ = 1.0;
var y__5134__auto__ = (education_openness * grad_percentage);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})()),new cljs.core.Keyword(null,"timing","timing",-1849225195),(((urgency < 0.25))?"Consider pursuing immediately after undergraduate":(((((income_priority > 0.7)) && ((urgency < 0.3))))?"Consider pursuing immediately after undergraduate":(((urgency > 0.5))?"After 2-3 years of work experience":"After 3-5 years of work experience"
))),new cljs.core.Keyword(null,"suggested-programs","suggested-programs",982862372),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grad_recommended_careers], 0)))], null);
});
/**
 * Generate top industry recommendations
 */
app.scoring.generate_industry_recommendation = (function app$scoring$generate_industry_recommendation(career_scores){
var by_category = cljs.core.group_by(new cljs.core.Keyword(null,"career-category","career-category",1896068630),career_scores);
var category_scores = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"fit","fit",869444807),cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45453){
var vec__45454 = p__45453;
var cat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45454,(0),null);
var careers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45454,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cat,new cljs.core.Keyword(null,"fit","fit",869444807),(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match-score","match-score",847728677),careers)) / cljs.core.count(careers))], null);
}),by_category)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-3","top-3",1356354382),category_scores,new cljs.core.Keyword(null,"confidence","confidence",-2080269669),new cljs.core.Keyword(null,"fit","fit",869444807).cljs$core$IFn$_invoke$arity$1(cljs.core.first(category_scores))], null);
});
/**
 * Generate career roadmap based on recommendations
 */
app.scoring.generate_roadmap = (function app$scoring$generate_roadmap(internship_rec,major_rec,grad_school_rec,industry_rec){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Now",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"recommended","recommended",992487577).cljs$core$IFn$_invoke$arity$1(internship_rec))?"Begin researching internship opportunities":"Focus on building relevant skills"),"Explore recommended majors","Connect with career services"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Sophomore Year",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"recommended","recommended",992487577).cljs$core$IFn$_invoke$arity$1(internship_rec))?"Secure first internship":null),["Declare major: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(major_rec,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-3","top-3",1356354382),(0),new cljs.core.Keyword(null,"name","name",1843675177)], null)))].join(''),"Join relevant student organizations"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Junior Year",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"recommended","recommended",992487577).cljs$core$IFn$_invoke$arity$1(internship_rec))?"Complete competitive internship":null),"Build professional network in target industry","Begin informational interviews"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),"Senior Year",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"recommended","recommended",992487577).cljs$core$IFn$_invoke$arity$1(grad_school_rec))?["Apply to graduate programs (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timing","timing",-1849225195).cljs$core$IFn$_invoke$arity$1(grad_school_rec)),")"].join(''):"Apply to entry-level positions"),["Target industries: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"top-3","top-3",1356354382).cljs$core$IFn$_invoke$arity$1(industry_rec)))].join('')], null)], null)], null);
});
/**
 * Main entry point: calculate all results from responses
 */
app.scoring.calculate_results = (function app$scoring$calculate_results(responses,questions,careers,config){
var category_weights = app.scoring.get_config_value(config,"scoring_weights",app.scoring.default_category_weights);
var dimension_weights = app.scoring.get_config_value(config,"dimension_weights",app.scoring.default_dimension_weights);
var raw_dimension_scores = app.scoring.calculate_dimension_scores(responses,questions);
var dimension_scores = app.scoring.finalize_dimension_scores(raw_dimension_scores,dimension_weights);
var category_scores = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interests","interests",1200294902),0.5,new cljs.core.Keyword(null,"skills","skills",958701426),0.5,new cljs.core.Keyword(null,"financial","financial",6632681),0.5,new cljs.core.Keyword(null,"timeline","timeline",192903161),0.5], null);
var career_scores = app.scoring.calculate_career_scores(dimension_scores,careers);
var internship_rec = app.scoring.generate_internship_recommendation(dimension_scores,career_scores);
var major_rec = app.scoring.generate_major_recommendation(career_scores);
var grad_school_rec = app.scoring.generate_grad_school_recommendation(dimension_scores,career_scores);
var industry_rec = app.scoring.generate_industry_recommendation(career_scores);
var roadmap = app.scoring.generate_roadmap(internship_rec,major_rec,grad_school_rec,industry_rec);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimension_scores], null),new cljs.core.Keyword(null,"category-scores","category-scores",1025990780),category_scores,new cljs.core.Keyword(null,"dimension-scores","dimension-scores",-1230968182),dimension_scores,new cljs.core.Keyword(null,"career-scores","career-scores",-1890079113),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),career_scores),new cljs.core.Keyword(null,"recommendations","recommendations",-154139268),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"internship","internship",-692945875),internship_rec,new cljs.core.Keyword(null,"major","major",-27376078),major_rec,new cljs.core.Keyword(null,"grad-school","grad-school",-591199518),grad_school_rec,new cljs.core.Keyword(null,"industry","industry",-1402985528),industry_rec], null),new cljs.core.Keyword(null,"roadmap","roadmap",1539347925),roadmap], null);
});

//# sourceMappingURL=app.scoring.js.map
