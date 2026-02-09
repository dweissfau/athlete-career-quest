goog.provide('app.advice');
app.advice.internship_templates = new cljs.core.PersistentArrayMap(null, 6, ["Sports Industry",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intro","intro",-886090599),"As a future %s, hands-on experience in sports organizations is invaluable.",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),"Look for internships with professional teams, athletic departments, or sports agencies."], null),"Business & Sales",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intro","intro",-886090599),"Your competitive drive translates well to %s.",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),"Seek corporate internships where you can develop client relationships and sales skills."], null),"Healthcare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intro","intro",-886090599),"The path to %s requires clinical experience.",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),"Look for practicums and clinical rotations in sports medicine settings."], null),"Media",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intro","intro",-886090599),"Building your portfolio as a future %s is crucial.",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),"Seek internships at sports networks, podcasts, or digital media companies."], null),"Education",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intro","intro",-886090599),"To become an effective %s, practical experience is key.",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),"Look for coaching assistantships, teaching practicums, or youth program coordinator roles."], null),"Technology",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intro","intro",-886090599),"As a future %s, internships provide essential product exposure.",new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),"Target sports tech companies, athletic performance startups, or product teams at larger companies."], null)], null);
app.advice.major_to_programs = cljs.core.PersistentHashMap.fromArrays(["Communications","Nonprofit Management","Psychology","Social Work","Athletic Training","Sports Management","Engineering","Computer Science","Public Administration","Education","Law","Economics","Counseling","Sports Psychology","Marketing","Business Administration","Kinesiology","Physical Therapy","Exercise Science","Finance"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MA Communications","MS Sports Media"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MNA (Master of Nonprofit Administration)","MPA"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PhD in Sports Psychology","PsyD in Sports Psychology","MA in Counseling"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MSW (Master of Social Work)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MS Athletic Training","DAT (Doctor of Athletic Training)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MS Sports Management","MBA with Sports Concentration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MS Engineering","MBA"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MS Computer Science","MBA"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPA (Master of Public Administration)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MEd (Master of Education)","EdD (Doctor of Education)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JD (Juris Doctor)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MA Economics","MBA","PhD Economics"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MA Counseling","PhD Counseling Psychology"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PhD in Sports Psychology","PsyD in Sports Psychology"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MBA","MS Marketing"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MBA"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MS Kinesiology","DPT","PhD Kinesiology"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DPT (Doctor of Physical Therapy)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MS Exercise Science","DPT","PhD Exercise Physiology"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MBA","MS Finance","CFA Certification"], null)]);
/**
 * Convert internship importance (1-5) to recommendation level
 */
app.advice.importance__GT_level = (function app$advice$importance__GT_level(importance){
if((importance >= (5))){
return new cljs.core.Keyword(null,"essential","essential",1969545466);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(importance,(4))){
return new cljs.core.Keyword(null,"highly-recommended","highly-recommended",-2104612210);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(importance,(3))){
return new cljs.core.Keyword(null,"helpful","helpful",-672136259);
} else {
return new cljs.core.Keyword(null,"optional","optional",2053951509);

}
}
}
});
/**
 * Convert grad school recommendation to level
 */
app.advice.grad_school__GT_level = (function app$advice$grad_school__GT_level(recommended_QMARK_,career_category){
if(cljs.core.truth_((function (){var and__5043__auto__ = recommended_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(career_category,"Healthcare");
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.Keyword(null,"required","required",1807647006);
} else {
if(cljs.core.truth_(recommended_QMARK_)){
return new cljs.core.Keyword(null,"recommended","recommended",992487577);
} else {
return new cljs.core.Keyword(null,"optional","optional",2053951509);

}
}
});
/**
 * Get suggested grad programs based on typical majors
 */
app.advice.get_suggested_programs = (function app$advice$get_suggested_programs(typical_majors){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__45400_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.advice.major_to_programs,p1__45400_SHARP_,cljs.core.PersistentVector.EMPTY);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([typical_majors], 0)))));
});
/**
 * Generate personalized internship advice for a career
 */
app.advice.generate_internship_advice = (function app$advice$generate_internship_advice(career){
var map__45404 = career;
var map__45404__$1 = cljs.core.__destructure_map(map__45404);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45404__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var internship_importance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45404__$1,new cljs.core.Keyword(null,"internship-importance","internship-importance",-1283879578));
var level = app.advice.importance__GT_level(internship_importance);
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.advice.internship_templates,category,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.advice.internship_templates,"Business & Sales"));
var intro = goog.string.format(new cljs.core.Keyword(null,"intro","intro",-886090599).cljs$core$IFn$_invoke$arity$1(template),name);
var suggestion = new cljs.core.Keyword(null,"suggestion","suggestion",1624613388).cljs$core$IFn$_invoke$arity$1(template);
var level_headline = (function (){var G__45406 = level;
var G__45406__$1 = (((G__45406 instanceof cljs.core.Keyword))?G__45406.fqn:null);
switch (G__45406__$1) {
case "essential":
return "Internships are Essential";

break;
case "highly-recommended":
return "Internships are Highly Recommended";

break;
case "helpful":
return "Internships are Helpful";

break;
case "optional":
return "Internships are Optional";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45406__$1)].join('')));

}
})();
var importance_paragraph = (function (){var G__45408 = level;
var G__45408__$1 = (((G__45408 instanceof cljs.core.Keyword))?G__45408.fqn:null);
switch (G__45408__$1) {
case "essential":
return "Given the competitive nature of this field, relevant internship experience is often a prerequisite for entry-level positions. Your athletic background gives you a unique advantage in standing out.";

break;
case "highly-recommended":
return "Strong internship experience will significantly improve your job prospects and help you build the professional network essential for this career.";

break;
case "helpful":
return "While not strictly required, internships can help you explore the field and make valuable connections that may lead to job opportunities.";

break;
case "optional":
return "You can enter this field through various paths. Internships are one option, but relevant skills and networking can be equally valuable.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45408__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headline","headline",-157157727),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_headline)," for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"recommendation-level","recommendation-level",-1462464042),level,new cljs.core.Keyword(null,"paragraphs","paragraphs",-690733875),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [intro,importance_paragraph,suggestion], null),new cljs.core.Keyword(null,"career-name","career-name",2126938427),name], null);
});
/**
 * Generate personalized grad school advice for a career
 */
app.advice.generate_grad_school_advice = (function app$advice$generate_grad_school_advice(career){
var map__45415 = career;
var map__45415__$1 = cljs.core.__destructure_map(map__45415);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45415__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var grad_school_recommended = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45415__$1,new cljs.core.Keyword(null,"grad-school-recommended","grad-school-recommended",294447954));
var typical_majors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45415__$1,new cljs.core.Keyword(null,"typical-majors","typical-majors",-450837630));
var level = app.advice.grad_school__GT_level(grad_school_recommended,category);
var suggested_programs = app.advice.get_suggested_programs(typical_majors);
var level_headline = (function (){var G__45416 = level;
var G__45416__$1 = (((G__45416 instanceof cljs.core.Keyword))?G__45416.fqn:null);
switch (G__45416__$1) {
case "required":
return "Graduate School is Required";

break;
case "recommended":
return "Graduate School is Recommended";

break;
case "optional":
return "Graduate School is Optional";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45416__$1)].join('')));

}
})();
var main_paragraph = (function (){var G__45419 = level;
var G__45419__$1 = (((G__45419 instanceof cljs.core.Keyword))?G__45419.fqn:null);
switch (G__45419__$1) {
case "required":
return ["A graduate degree is required to practice as a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),". This is a professional field with specific educational requirements that must be met before you can begin your career."].join('');

break;
case "recommended":
return ["While not strictly required, a graduate degree can significantly accelerate your career as a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),". It opens doors to senior positions and provides advanced knowledge that sets you apart."].join('');

break;
case "optional":
return ["A graduate degree isn't required for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", but it could accelerate your path to leadership roles. Many successful professionals in this field have risen through experience and results alone."].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45419__$1)].join('')));

}
})();
var program_paragraph = ((cljs.core.seq(suggested_programs))?["Programs to consider: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",suggested_programs)].join(''):null);
var timing = (function (){var G__45422 = level;
var G__45422__$1 = (((G__45422 instanceof cljs.core.Keyword))?G__45422.fqn:null);
switch (G__45422__$1) {
case "required":
return "Pursue immediately after your undergraduate degree";

break;
case "recommended":
return "After 2-3 years of work experience";

break;
case "optional":
return "After 3-5 years if you decide to pursue it";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45422__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"headline","headline",-157157727),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_headline)," for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"recommendation-level","recommendation-level",-1462464042),level,new cljs.core.Keyword(null,"paragraphs","paragraphs",-690733875),cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_paragraph,program_paragraph], null)),new cljs.core.Keyword(null,"career-name","career-name",2126938427),name,new cljs.core.Keyword(null,"suggested-programs","suggested-programs",982862372),suggested_programs,new cljs.core.Keyword(null,"timing","timing",-1849225195),timing], null);
});
/**
 * Main entry point: generate personalized advice based on scoring results
 */
app.advice.generate_personalized_advice = (function app$advice$generate_personalized_advice(scoring_results,careers){
var career_scores = new cljs.core.Keyword(null,"career-scores","career-scores",-1890079113).cljs$core$IFn$_invoke$arity$1(scoring_results);
var top_career_score = cljs.core.first(career_scores);
var top_career_name = new cljs.core.Keyword(null,"career-name","career-name",2126938427).cljs$core$IFn$_invoke$arity$1(top_career_score);
var top_career = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45423_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__45423_SHARP_),top_career_name);
}),careers));
if(cljs.core.truth_(top_career)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"internship-advice","internship-advice",-1314806060),app.advice.generate_internship_advice(top_career),new cljs.core.Keyword(null,"grad-school-advice","grad-school-advice",-1127949285),app.advice.generate_grad_school_advice(top_career)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"internship-advice","internship-advice",-1314806060),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Internships are Recommended",new cljs.core.Keyword(null,"recommendation-level","recommendation-level",-1462464042),new cljs.core.Keyword(null,"recommended","recommended",992487577),new cljs.core.Keyword(null,"paragraphs","paragraphs",-690733875),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Building professional experience through internships is valuable for any career path."], null),new cljs.core.Keyword(null,"career-name","career-name",2126938427),"Your Career"], null),new cljs.core.Keyword(null,"grad-school-advice","grad-school-advice",-1127949285),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Graduate School Depends on Your Goals",new cljs.core.Keyword(null,"recommendation-level","recommendation-level",-1462464042),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"paragraphs","paragraphs",-690733875),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Consider graduate school based on your specific career goals and the requirements of your chosen field."], null),new cljs.core.Keyword(null,"career-name","career-name",2126938427),"Your Career",new cljs.core.Keyword(null,"suggested-programs","suggested-programs",982862372),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timing","timing",-1849225195),"Based on your career requirements"], null)], null);
}
});

//# sourceMappingURL=app.advice.js.map
