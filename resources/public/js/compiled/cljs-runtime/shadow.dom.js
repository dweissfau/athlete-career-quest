goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38867 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38867(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38868 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38868(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37899 = coll;
var G__37900 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37899,G__37900) : shadow.dom.lazy_native_coll_seq.call(null,G__37899,G__37900));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37926 = arguments.length;
switch (G__37926) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37932 = arguments.length;
switch (G__37932) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37943 = arguments.length;
switch (G__37943) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37949 = arguments.length;
switch (G__37949) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37962 = arguments.length;
switch (G__37962) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37972 = arguments.length;
switch (G__37972) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37974){if((e37974 instanceof Object)){
var e = e37974;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37974;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37977 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37978 = null;
var count__37979 = (0);
var i__37980 = (0);
while(true){
if((i__37980 < count__37979)){
var el = chunk__37978.cljs$core$IIndexed$_nth$arity$2(null,i__37980);
var handler_38898__$1 = ((function (seq__37977,chunk__37978,count__37979,i__37980,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37977,chunk__37978,count__37979,i__37980,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38898__$1);


var G__38899 = seq__37977;
var G__38900 = chunk__37978;
var G__38901 = count__37979;
var G__38902 = (i__37980 + (1));
seq__37977 = G__38899;
chunk__37978 = G__38900;
count__37979 = G__38901;
i__37980 = G__38902;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37977);
if(temp__5804__auto__){
var seq__37977__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37977__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37977__$1);
var G__38904 = cljs.core.chunk_rest(seq__37977__$1);
var G__38905 = c__5568__auto__;
var G__38906 = cljs.core.count(c__5568__auto__);
var G__38907 = (0);
seq__37977 = G__38904;
chunk__37978 = G__38905;
count__37979 = G__38906;
i__37980 = G__38907;
continue;
} else {
var el = cljs.core.first(seq__37977__$1);
var handler_38913__$1 = ((function (seq__37977,chunk__37978,count__37979,i__37980,el,seq__37977__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37977,chunk__37978,count__37979,i__37980,el,seq__37977__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38913__$1);


var G__38914 = cljs.core.next(seq__37977__$1);
var G__38915 = null;
var G__38916 = (0);
var G__38917 = (0);
seq__37977 = G__38914;
chunk__37978 = G__38915;
count__37979 = G__38916;
i__37980 = G__38917;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37996 = arguments.length;
switch (G__37996) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38006 = cljs.core.seq(events);
var chunk__38007 = null;
var count__38008 = (0);
var i__38009 = (0);
while(true){
if((i__38009 < count__38008)){
var vec__38016 = chunk__38007.cljs$core$IIndexed$_nth$arity$2(null,i__38009);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38016,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38921 = seq__38006;
var G__38922 = chunk__38007;
var G__38923 = count__38008;
var G__38924 = (i__38009 + (1));
seq__38006 = G__38921;
chunk__38007 = G__38922;
count__38008 = G__38923;
i__38009 = G__38924;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38006);
if(temp__5804__auto__){
var seq__38006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38006__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38006__$1);
var G__38925 = cljs.core.chunk_rest(seq__38006__$1);
var G__38926 = c__5568__auto__;
var G__38927 = cljs.core.count(c__5568__auto__);
var G__38928 = (0);
seq__38006 = G__38925;
chunk__38007 = G__38926;
count__38008 = G__38927;
i__38009 = G__38928;
continue;
} else {
var vec__38019 = cljs.core.first(seq__38006__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38019,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38929 = cljs.core.next(seq__38006__$1);
var G__38930 = null;
var G__38931 = (0);
var G__38932 = (0);
seq__38006 = G__38929;
chunk__38007 = G__38930;
count__38008 = G__38931;
i__38009 = G__38932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__38025 = cljs.core.seq(styles);
var chunk__38026 = null;
var count__38027 = (0);
var i__38028 = (0);
while(true){
if((i__38028 < count__38027)){
var vec__38040 = chunk__38026.cljs$core$IIndexed$_nth$arity$2(null,i__38028);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38040,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38933 = seq__38025;
var G__38934 = chunk__38026;
var G__38935 = count__38027;
var G__38936 = (i__38028 + (1));
seq__38025 = G__38933;
chunk__38026 = G__38934;
count__38027 = G__38935;
i__38028 = G__38936;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38025);
if(temp__5804__auto__){
var seq__38025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38025__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38025__$1);
var G__38937 = cljs.core.chunk_rest(seq__38025__$1);
var G__38938 = c__5568__auto__;
var G__38939 = cljs.core.count(c__5568__auto__);
var G__38940 = (0);
seq__38025 = G__38937;
chunk__38026 = G__38938;
count__38027 = G__38939;
i__38028 = G__38940;
continue;
} else {
var vec__38043 = cljs.core.first(seq__38025__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38043,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38941 = cljs.core.next(seq__38025__$1);
var G__38942 = null;
var G__38943 = (0);
var G__38944 = (0);
seq__38025 = G__38941;
chunk__38026 = G__38942;
count__38027 = G__38943;
i__38028 = G__38944;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__38052_38945 = key;
var G__38052_38946__$1 = (((G__38052_38945 instanceof cljs.core.Keyword))?G__38052_38945.fqn:null);
switch (G__38052_38946__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38950 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38950,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38950,"aria-");
}
})())){
el.setAttribute(ks_38950,value);
} else {
(el[ks_38950] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38073){
var map__38075 = p__38073;
var map__38075__$1 = cljs.core.__destructure_map(map__38075);
var props = map__38075__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38075__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38077 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38080 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38080,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38080;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38084 = arguments.length;
switch (G__38084) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38093){
var vec__38095 = p__38093;
var seq__38096 = cljs.core.seq(vec__38095);
var first__38097 = cljs.core.first(seq__38096);
var seq__38096__$1 = cljs.core.next(seq__38096);
var nn = first__38097;
var first__38097__$1 = cljs.core.first(seq__38096__$1);
var seq__38096__$2 = cljs.core.next(seq__38096__$1);
var np = first__38097__$1;
var nc = seq__38096__$2;
var node = vec__38095;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38101 = nn;
var G__38102 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38101,G__38102) : create_fn.call(null,G__38101,G__38102));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38103 = nn;
var G__38104 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38103,G__38104) : create_fn.call(null,G__38103,G__38104));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38105 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38105,(1),null);
var seq__38111_38960 = cljs.core.seq(node_children);
var chunk__38112_38961 = null;
var count__38113_38962 = (0);
var i__38114_38963 = (0);
while(true){
if((i__38114_38963 < count__38113_38962)){
var child_struct_38964 = chunk__38112_38961.cljs$core$IIndexed$_nth$arity$2(null,i__38114_38963);
var children_38965 = shadow.dom.dom_node(child_struct_38964);
if(cljs.core.seq_QMARK_(children_38965)){
var seq__38147_38967 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38965));
var chunk__38149_38968 = null;
var count__38150_38969 = (0);
var i__38151_38970 = (0);
while(true){
if((i__38151_38970 < count__38150_38969)){
var child_38971 = chunk__38149_38968.cljs$core$IIndexed$_nth$arity$2(null,i__38151_38970);
if(cljs.core.truth_(child_38971)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38971);


var G__38972 = seq__38147_38967;
var G__38973 = chunk__38149_38968;
var G__38974 = count__38150_38969;
var G__38975 = (i__38151_38970 + (1));
seq__38147_38967 = G__38972;
chunk__38149_38968 = G__38973;
count__38150_38969 = G__38974;
i__38151_38970 = G__38975;
continue;
} else {
var G__38977 = seq__38147_38967;
var G__38978 = chunk__38149_38968;
var G__38979 = count__38150_38969;
var G__38980 = (i__38151_38970 + (1));
seq__38147_38967 = G__38977;
chunk__38149_38968 = G__38978;
count__38150_38969 = G__38979;
i__38151_38970 = G__38980;
continue;
}
} else {
var temp__5804__auto___38981 = cljs.core.seq(seq__38147_38967);
if(temp__5804__auto___38981){
var seq__38147_38982__$1 = temp__5804__auto___38981;
if(cljs.core.chunked_seq_QMARK_(seq__38147_38982__$1)){
var c__5568__auto___38983 = cljs.core.chunk_first(seq__38147_38982__$1);
var G__38985 = cljs.core.chunk_rest(seq__38147_38982__$1);
var G__38986 = c__5568__auto___38983;
var G__38987 = cljs.core.count(c__5568__auto___38983);
var G__38988 = (0);
seq__38147_38967 = G__38985;
chunk__38149_38968 = G__38986;
count__38150_38969 = G__38987;
i__38151_38970 = G__38988;
continue;
} else {
var child_38989 = cljs.core.first(seq__38147_38982__$1);
if(cljs.core.truth_(child_38989)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38989);


var G__38990 = cljs.core.next(seq__38147_38982__$1);
var G__38991 = null;
var G__38992 = (0);
var G__38993 = (0);
seq__38147_38967 = G__38990;
chunk__38149_38968 = G__38991;
count__38150_38969 = G__38992;
i__38151_38970 = G__38993;
continue;
} else {
var G__38994 = cljs.core.next(seq__38147_38982__$1);
var G__38995 = null;
var G__38996 = (0);
var G__38997 = (0);
seq__38147_38967 = G__38994;
chunk__38149_38968 = G__38995;
count__38150_38969 = G__38996;
i__38151_38970 = G__38997;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38965);
}


var G__38999 = seq__38111_38960;
var G__39000 = chunk__38112_38961;
var G__39001 = count__38113_38962;
var G__39002 = (i__38114_38963 + (1));
seq__38111_38960 = G__38999;
chunk__38112_38961 = G__39000;
count__38113_38962 = G__39001;
i__38114_38963 = G__39002;
continue;
} else {
var temp__5804__auto___39003 = cljs.core.seq(seq__38111_38960);
if(temp__5804__auto___39003){
var seq__38111_39006__$1 = temp__5804__auto___39003;
if(cljs.core.chunked_seq_QMARK_(seq__38111_39006__$1)){
var c__5568__auto___39008 = cljs.core.chunk_first(seq__38111_39006__$1);
var G__39009 = cljs.core.chunk_rest(seq__38111_39006__$1);
var G__39010 = c__5568__auto___39008;
var G__39011 = cljs.core.count(c__5568__auto___39008);
var G__39012 = (0);
seq__38111_38960 = G__39009;
chunk__38112_38961 = G__39010;
count__38113_38962 = G__39011;
i__38114_38963 = G__39012;
continue;
} else {
var child_struct_39014 = cljs.core.first(seq__38111_39006__$1);
var children_39015 = shadow.dom.dom_node(child_struct_39014);
if(cljs.core.seq_QMARK_(children_39015)){
var seq__38159_39016 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39015));
var chunk__38161_39017 = null;
var count__38162_39018 = (0);
var i__38163_39019 = (0);
while(true){
if((i__38163_39019 < count__38162_39018)){
var child_39022 = chunk__38161_39017.cljs$core$IIndexed$_nth$arity$2(null,i__38163_39019);
if(cljs.core.truth_(child_39022)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39022);


var G__39025 = seq__38159_39016;
var G__39026 = chunk__38161_39017;
var G__39027 = count__38162_39018;
var G__39028 = (i__38163_39019 + (1));
seq__38159_39016 = G__39025;
chunk__38161_39017 = G__39026;
count__38162_39018 = G__39027;
i__38163_39019 = G__39028;
continue;
} else {
var G__39031 = seq__38159_39016;
var G__39032 = chunk__38161_39017;
var G__39033 = count__38162_39018;
var G__39034 = (i__38163_39019 + (1));
seq__38159_39016 = G__39031;
chunk__38161_39017 = G__39032;
count__38162_39018 = G__39033;
i__38163_39019 = G__39034;
continue;
}
} else {
var temp__5804__auto___39035__$1 = cljs.core.seq(seq__38159_39016);
if(temp__5804__auto___39035__$1){
var seq__38159_39036__$1 = temp__5804__auto___39035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38159_39036__$1)){
var c__5568__auto___39037 = cljs.core.chunk_first(seq__38159_39036__$1);
var G__39039 = cljs.core.chunk_rest(seq__38159_39036__$1);
var G__39040 = c__5568__auto___39037;
var G__39041 = cljs.core.count(c__5568__auto___39037);
var G__39042 = (0);
seq__38159_39016 = G__39039;
chunk__38161_39017 = G__39040;
count__38162_39018 = G__39041;
i__38163_39019 = G__39042;
continue;
} else {
var child_39045 = cljs.core.first(seq__38159_39036__$1);
if(cljs.core.truth_(child_39045)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39045);


var G__39046 = cljs.core.next(seq__38159_39036__$1);
var G__39047 = null;
var G__39048 = (0);
var G__39049 = (0);
seq__38159_39016 = G__39046;
chunk__38161_39017 = G__39047;
count__38162_39018 = G__39048;
i__38163_39019 = G__39049;
continue;
} else {
var G__39051 = cljs.core.next(seq__38159_39036__$1);
var G__39052 = null;
var G__39053 = (0);
var G__39054 = (0);
seq__38159_39016 = G__39051;
chunk__38161_39017 = G__39052;
count__38162_39018 = G__39053;
i__38163_39019 = G__39054;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39015);
}


var G__39055 = cljs.core.next(seq__38111_39006__$1);
var G__39056 = null;
var G__39057 = (0);
var G__39058 = (0);
seq__38111_38960 = G__39055;
chunk__38112_38961 = G__39056;
count__38113_38962 = G__39057;
i__38114_38963 = G__39058;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38191 = cljs.core.seq(node);
var chunk__38192 = null;
var count__38193 = (0);
var i__38194 = (0);
while(true){
if((i__38194 < count__38193)){
var n = chunk__38192.cljs$core$IIndexed$_nth$arity$2(null,i__38194);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39067 = seq__38191;
var G__39068 = chunk__38192;
var G__39069 = count__38193;
var G__39070 = (i__38194 + (1));
seq__38191 = G__39067;
chunk__38192 = G__39068;
count__38193 = G__39069;
i__38194 = G__39070;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38191);
if(temp__5804__auto__){
var seq__38191__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38191__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38191__$1);
var G__39077 = cljs.core.chunk_rest(seq__38191__$1);
var G__39078 = c__5568__auto__;
var G__39079 = cljs.core.count(c__5568__auto__);
var G__39080 = (0);
seq__38191 = G__39077;
chunk__38192 = G__39078;
count__38193 = G__39079;
i__38194 = G__39080;
continue;
} else {
var n = cljs.core.first(seq__38191__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39083 = cljs.core.next(seq__38191__$1);
var G__39084 = null;
var G__39085 = (0);
var G__39086 = (0);
seq__38191 = G__39083;
chunk__38192 = G__39084;
count__38193 = G__39085;
i__38194 = G__39086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38203 = arguments.length;
switch (G__38203) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38207 = arguments.length;
switch (G__38207) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38224 = arguments.length;
switch (G__38224) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39102 = arguments.length;
var i__5770__auto___39103 = (0);
while(true){
if((i__5770__auto___39103 < len__5769__auto___39102)){
args__5775__auto__.push((arguments[i__5770__auto___39103]));

var G__39108 = (i__5770__auto___39103 + (1));
i__5770__auto___39103 = G__39108;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38276_39109 = cljs.core.seq(nodes);
var chunk__38277_39110 = null;
var count__38278_39111 = (0);
var i__38279_39112 = (0);
while(true){
if((i__38279_39112 < count__38278_39111)){
var node_39113 = chunk__38277_39110.cljs$core$IIndexed$_nth$arity$2(null,i__38279_39112);
fragment.appendChild(shadow.dom._to_dom(node_39113));


var G__39114 = seq__38276_39109;
var G__39115 = chunk__38277_39110;
var G__39116 = count__38278_39111;
var G__39117 = (i__38279_39112 + (1));
seq__38276_39109 = G__39114;
chunk__38277_39110 = G__39115;
count__38278_39111 = G__39116;
i__38279_39112 = G__39117;
continue;
} else {
var temp__5804__auto___39118 = cljs.core.seq(seq__38276_39109);
if(temp__5804__auto___39118){
var seq__38276_39119__$1 = temp__5804__auto___39118;
if(cljs.core.chunked_seq_QMARK_(seq__38276_39119__$1)){
var c__5568__auto___39120 = cljs.core.chunk_first(seq__38276_39119__$1);
var G__39122 = cljs.core.chunk_rest(seq__38276_39119__$1);
var G__39123 = c__5568__auto___39120;
var G__39124 = cljs.core.count(c__5568__auto___39120);
var G__39125 = (0);
seq__38276_39109 = G__39122;
chunk__38277_39110 = G__39123;
count__38278_39111 = G__39124;
i__38279_39112 = G__39125;
continue;
} else {
var node_39126 = cljs.core.first(seq__38276_39119__$1);
fragment.appendChild(shadow.dom._to_dom(node_39126));


var G__39127 = cljs.core.next(seq__38276_39119__$1);
var G__39128 = null;
var G__39129 = (0);
var G__39130 = (0);
seq__38276_39109 = G__39127;
chunk__38277_39110 = G__39128;
count__38278_39111 = G__39129;
i__38279_39112 = G__39130;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38267){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38267));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38296_39132 = cljs.core.seq(scripts);
var chunk__38297_39133 = null;
var count__38298_39134 = (0);
var i__38299_39135 = (0);
while(true){
if((i__38299_39135 < count__38298_39134)){
var vec__38314_39136 = chunk__38297_39133.cljs$core$IIndexed$_nth$arity$2(null,i__38299_39135);
var script_tag_39137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314_39136,(0),null);
var script_body_39138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314_39136,(1),null);
eval(script_body_39138);


var G__39139 = seq__38296_39132;
var G__39140 = chunk__38297_39133;
var G__39141 = count__38298_39134;
var G__39142 = (i__38299_39135 + (1));
seq__38296_39132 = G__39139;
chunk__38297_39133 = G__39140;
count__38298_39134 = G__39141;
i__38299_39135 = G__39142;
continue;
} else {
var temp__5804__auto___39143 = cljs.core.seq(seq__38296_39132);
if(temp__5804__auto___39143){
var seq__38296_39144__$1 = temp__5804__auto___39143;
if(cljs.core.chunked_seq_QMARK_(seq__38296_39144__$1)){
var c__5568__auto___39145 = cljs.core.chunk_first(seq__38296_39144__$1);
var G__39146 = cljs.core.chunk_rest(seq__38296_39144__$1);
var G__39147 = c__5568__auto___39145;
var G__39148 = cljs.core.count(c__5568__auto___39145);
var G__39149 = (0);
seq__38296_39132 = G__39146;
chunk__38297_39133 = G__39147;
count__38298_39134 = G__39148;
i__38299_39135 = G__39149;
continue;
} else {
var vec__38321_39150 = cljs.core.first(seq__38296_39144__$1);
var script_tag_39151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38321_39150,(0),null);
var script_body_39152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38321_39150,(1),null);
eval(script_body_39152);


var G__39153 = cljs.core.next(seq__38296_39144__$1);
var G__39154 = null;
var G__39155 = (0);
var G__39156 = (0);
seq__38296_39132 = G__39153;
chunk__38297_39133 = G__39154;
count__38298_39134 = G__39155;
i__38299_39135 = G__39156;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38325){
var vec__38326 = p__38325;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38326,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38326,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38338 = arguments.length;
switch (G__38338) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38359 = cljs.core.seq(style_keys);
var chunk__38360 = null;
var count__38361 = (0);
var i__38362 = (0);
while(true){
if((i__38362 < count__38361)){
var it = chunk__38360.cljs$core$IIndexed$_nth$arity$2(null,i__38362);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39161 = seq__38359;
var G__39162 = chunk__38360;
var G__39163 = count__38361;
var G__39164 = (i__38362 + (1));
seq__38359 = G__39161;
chunk__38360 = G__39162;
count__38361 = G__39163;
i__38362 = G__39164;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38359);
if(temp__5804__auto__){
var seq__38359__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38359__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38359__$1);
var G__39167 = cljs.core.chunk_rest(seq__38359__$1);
var G__39168 = c__5568__auto__;
var G__39169 = cljs.core.count(c__5568__auto__);
var G__39170 = (0);
seq__38359 = G__39167;
chunk__38360 = G__39168;
count__38361 = G__39169;
i__38362 = G__39170;
continue;
} else {
var it = cljs.core.first(seq__38359__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39171 = cljs.core.next(seq__38359__$1);
var G__39172 = null;
var G__39173 = (0);
var G__39174 = (0);
seq__38359 = G__39171;
chunk__38360 = G__39172;
count__38361 = G__39173;
i__38362 = G__39174;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38366,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38374 = k38366;
var G__38374__$1 = (((G__38374 instanceof cljs.core.Keyword))?G__38374.fqn:null);
switch (G__38374__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38366,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38378){
var vec__38380 = p__38378;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38380,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38380,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38365){
var self__ = this;
var G__38365__$1 = this;
return (new cljs.core.RecordIter((0),G__38365__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38367,other38368){
var self__ = this;
var this38367__$1 = this;
return (((!((other38368 == null)))) && ((((this38367__$1.constructor === other38368.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38367__$1.x,other38368.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38367__$1.y,other38368.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38367__$1.__extmap,other38368.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38366){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38405 = k38366;
var G__38405__$1 = (((G__38405 instanceof cljs.core.Keyword))?G__38405.fqn:null);
switch (G__38405__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38366);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38365){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38409 = cljs.core.keyword_identical_QMARK_;
var expr__38410 = k__5352__auto__;
if(cljs.core.truth_((pred__38409.cljs$core$IFn$_invoke$arity$2 ? pred__38409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38410) : pred__38409.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38410)))){
return (new shadow.dom.Coordinate(G__38365,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38409.cljs$core$IFn$_invoke$arity$2 ? pred__38409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38410) : pred__38409.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38410)))){
return (new shadow.dom.Coordinate(self__.x,G__38365,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38365),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38365){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38365,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38371){
var extmap__5385__auto__ = (function (){var G__38423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38371,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38371)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38423);
} else {
return G__38423;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38371),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38371),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38431,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38445 = k38431;
var G__38445__$1 = (((G__38445 instanceof cljs.core.Keyword))?G__38445.fqn:null);
switch (G__38445__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38431,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38451){
var vec__38452 = p__38451;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38430){
var self__ = this;
var G__38430__$1 = this;
return (new cljs.core.RecordIter((0),G__38430__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38432,other38433){
var self__ = this;
var this38432__$1 = this;
return (((!((other38433 == null)))) && ((((this38432__$1.constructor === other38433.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38432__$1.w,other38433.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38432__$1.h,other38433.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38432__$1.__extmap,other38433.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38431){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38478 = k38431;
var G__38478__$1 = (((G__38478 instanceof cljs.core.Keyword))?G__38478.fqn:null);
switch (G__38478__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38431);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38430){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38482 = cljs.core.keyword_identical_QMARK_;
var expr__38483 = k__5352__auto__;
if(cljs.core.truth_((pred__38482.cljs$core$IFn$_invoke$arity$2 ? pred__38482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38483) : pred__38482.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38483)))){
return (new shadow.dom.Size(G__38430,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38482.cljs$core$IFn$_invoke$arity$2 ? pred__38482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38483) : pred__38482.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38483)))){
return (new shadow.dom.Size(self__.w,G__38430,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38430),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38430){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38430,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38437){
var extmap__5385__auto__ = (function (){var G__38493 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38437,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38437)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38493);
} else {
return G__38493;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38437),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38437),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__39209 = (i + (1));
var G__39210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39209;
ret = G__39210;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38522){
var vec__38529 = p__38522;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38529,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38540 = arguments.length;
switch (G__38540) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__39215 = ps;
var G__39216 = (i + (1));
el__$1 = G__39215;
i = G__39216;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38590 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38590,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38590,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38590,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38599_39225 = cljs.core.seq(props);
var chunk__38600_39226 = null;
var count__38601_39227 = (0);
var i__38602_39228 = (0);
while(true){
if((i__38602_39228 < count__38601_39227)){
var vec__38622_39229 = chunk__38600_39226.cljs$core$IIndexed$_nth$arity$2(null,i__38602_39228);
var k_39230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38622_39229,(0),null);
var v_39231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38622_39229,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_39230);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39230),v_39231);


var G__39232 = seq__38599_39225;
var G__39233 = chunk__38600_39226;
var G__39234 = count__38601_39227;
var G__39235 = (i__38602_39228 + (1));
seq__38599_39225 = G__39232;
chunk__38600_39226 = G__39233;
count__38601_39227 = G__39234;
i__38602_39228 = G__39235;
continue;
} else {
var temp__5804__auto___39236 = cljs.core.seq(seq__38599_39225);
if(temp__5804__auto___39236){
var seq__38599_39237__$1 = temp__5804__auto___39236;
if(cljs.core.chunked_seq_QMARK_(seq__38599_39237__$1)){
var c__5568__auto___39238 = cljs.core.chunk_first(seq__38599_39237__$1);
var G__39239 = cljs.core.chunk_rest(seq__38599_39237__$1);
var G__39240 = c__5568__auto___39238;
var G__39241 = cljs.core.count(c__5568__auto___39238);
var G__39242 = (0);
seq__38599_39225 = G__39239;
chunk__38600_39226 = G__39240;
count__38601_39227 = G__39241;
i__38602_39228 = G__39242;
continue;
} else {
var vec__38638_39243 = cljs.core.first(seq__38599_39237__$1);
var k_39244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38638_39243,(0),null);
var v_39245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38638_39243,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_39244);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39244),v_39245);


var G__39246 = cljs.core.next(seq__38599_39237__$1);
var G__39247 = null;
var G__39248 = (0);
var G__39249 = (0);
seq__38599_39225 = G__39246;
chunk__38600_39226 = G__39247;
count__38601_39227 = G__39248;
i__38602_39228 = G__39249;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38658 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38658,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38658,(1),null);
var seq__38663_39251 = cljs.core.seq(node_children);
var chunk__38665_39252 = null;
var count__38666_39253 = (0);
var i__38667_39254 = (0);
while(true){
if((i__38667_39254 < count__38666_39253)){
var child_struct_39259 = chunk__38665_39252.cljs$core$IIndexed$_nth$arity$2(null,i__38667_39254);
if((!((child_struct_39259 == null)))){
if(typeof child_struct_39259 === 'string'){
var text_39263 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39263),child_struct_39259].join(''));
} else {
var children_39264 = shadow.dom.svg_node(child_struct_39259);
if(cljs.core.seq_QMARK_(children_39264)){
var seq__38713_39265 = cljs.core.seq(children_39264);
var chunk__38715_39266 = null;
var count__38716_39267 = (0);
var i__38717_39268 = (0);
while(true){
if((i__38717_39268 < count__38716_39267)){
var child_39269 = chunk__38715_39266.cljs$core$IIndexed$_nth$arity$2(null,i__38717_39268);
if(cljs.core.truth_(child_39269)){
node.appendChild(child_39269);


var G__39270 = seq__38713_39265;
var G__39271 = chunk__38715_39266;
var G__39272 = count__38716_39267;
var G__39273 = (i__38717_39268 + (1));
seq__38713_39265 = G__39270;
chunk__38715_39266 = G__39271;
count__38716_39267 = G__39272;
i__38717_39268 = G__39273;
continue;
} else {
var G__39274 = seq__38713_39265;
var G__39275 = chunk__38715_39266;
var G__39276 = count__38716_39267;
var G__39277 = (i__38717_39268 + (1));
seq__38713_39265 = G__39274;
chunk__38715_39266 = G__39275;
count__38716_39267 = G__39276;
i__38717_39268 = G__39277;
continue;
}
} else {
var temp__5804__auto___39278 = cljs.core.seq(seq__38713_39265);
if(temp__5804__auto___39278){
var seq__38713_39279__$1 = temp__5804__auto___39278;
if(cljs.core.chunked_seq_QMARK_(seq__38713_39279__$1)){
var c__5568__auto___39280 = cljs.core.chunk_first(seq__38713_39279__$1);
var G__39281 = cljs.core.chunk_rest(seq__38713_39279__$1);
var G__39282 = c__5568__auto___39280;
var G__39283 = cljs.core.count(c__5568__auto___39280);
var G__39284 = (0);
seq__38713_39265 = G__39281;
chunk__38715_39266 = G__39282;
count__38716_39267 = G__39283;
i__38717_39268 = G__39284;
continue;
} else {
var child_39285 = cljs.core.first(seq__38713_39279__$1);
if(cljs.core.truth_(child_39285)){
node.appendChild(child_39285);


var G__39286 = cljs.core.next(seq__38713_39279__$1);
var G__39287 = null;
var G__39288 = (0);
var G__39289 = (0);
seq__38713_39265 = G__39286;
chunk__38715_39266 = G__39287;
count__38716_39267 = G__39288;
i__38717_39268 = G__39289;
continue;
} else {
var G__39290 = cljs.core.next(seq__38713_39279__$1);
var G__39291 = null;
var G__39292 = (0);
var G__39293 = (0);
seq__38713_39265 = G__39290;
chunk__38715_39266 = G__39291;
count__38716_39267 = G__39292;
i__38717_39268 = G__39293;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39264);
}
}


var G__39294 = seq__38663_39251;
var G__39295 = chunk__38665_39252;
var G__39296 = count__38666_39253;
var G__39297 = (i__38667_39254 + (1));
seq__38663_39251 = G__39294;
chunk__38665_39252 = G__39295;
count__38666_39253 = G__39296;
i__38667_39254 = G__39297;
continue;
} else {
var G__39298 = seq__38663_39251;
var G__39299 = chunk__38665_39252;
var G__39300 = count__38666_39253;
var G__39301 = (i__38667_39254 + (1));
seq__38663_39251 = G__39298;
chunk__38665_39252 = G__39299;
count__38666_39253 = G__39300;
i__38667_39254 = G__39301;
continue;
}
} else {
var temp__5804__auto___39302 = cljs.core.seq(seq__38663_39251);
if(temp__5804__auto___39302){
var seq__38663_39303__$1 = temp__5804__auto___39302;
if(cljs.core.chunked_seq_QMARK_(seq__38663_39303__$1)){
var c__5568__auto___39304 = cljs.core.chunk_first(seq__38663_39303__$1);
var G__39305 = cljs.core.chunk_rest(seq__38663_39303__$1);
var G__39306 = c__5568__auto___39304;
var G__39307 = cljs.core.count(c__5568__auto___39304);
var G__39308 = (0);
seq__38663_39251 = G__39305;
chunk__38665_39252 = G__39306;
count__38666_39253 = G__39307;
i__38667_39254 = G__39308;
continue;
} else {
var child_struct_39309 = cljs.core.first(seq__38663_39303__$1);
if((!((child_struct_39309 == null)))){
if(typeof child_struct_39309 === 'string'){
var text_39310 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39310),child_struct_39309].join(''));
} else {
var children_39311 = shadow.dom.svg_node(child_struct_39309);
if(cljs.core.seq_QMARK_(children_39311)){
var seq__38736_39312 = cljs.core.seq(children_39311);
var chunk__38738_39313 = null;
var count__38739_39314 = (0);
var i__38740_39315 = (0);
while(true){
if((i__38740_39315 < count__38739_39314)){
var child_39316 = chunk__38738_39313.cljs$core$IIndexed$_nth$arity$2(null,i__38740_39315);
if(cljs.core.truth_(child_39316)){
node.appendChild(child_39316);


var G__39317 = seq__38736_39312;
var G__39318 = chunk__38738_39313;
var G__39319 = count__38739_39314;
var G__39320 = (i__38740_39315 + (1));
seq__38736_39312 = G__39317;
chunk__38738_39313 = G__39318;
count__38739_39314 = G__39319;
i__38740_39315 = G__39320;
continue;
} else {
var G__39321 = seq__38736_39312;
var G__39322 = chunk__38738_39313;
var G__39323 = count__38739_39314;
var G__39324 = (i__38740_39315 + (1));
seq__38736_39312 = G__39321;
chunk__38738_39313 = G__39322;
count__38739_39314 = G__39323;
i__38740_39315 = G__39324;
continue;
}
} else {
var temp__5804__auto___39325__$1 = cljs.core.seq(seq__38736_39312);
if(temp__5804__auto___39325__$1){
var seq__38736_39326__$1 = temp__5804__auto___39325__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38736_39326__$1)){
var c__5568__auto___39327 = cljs.core.chunk_first(seq__38736_39326__$1);
var G__39328 = cljs.core.chunk_rest(seq__38736_39326__$1);
var G__39329 = c__5568__auto___39327;
var G__39330 = cljs.core.count(c__5568__auto___39327);
var G__39331 = (0);
seq__38736_39312 = G__39328;
chunk__38738_39313 = G__39329;
count__38739_39314 = G__39330;
i__38740_39315 = G__39331;
continue;
} else {
var child_39332 = cljs.core.first(seq__38736_39326__$1);
if(cljs.core.truth_(child_39332)){
node.appendChild(child_39332);


var G__39333 = cljs.core.next(seq__38736_39326__$1);
var G__39334 = null;
var G__39335 = (0);
var G__39336 = (0);
seq__38736_39312 = G__39333;
chunk__38738_39313 = G__39334;
count__38739_39314 = G__39335;
i__38740_39315 = G__39336;
continue;
} else {
var G__39337 = cljs.core.next(seq__38736_39326__$1);
var G__39338 = null;
var G__39339 = (0);
var G__39340 = (0);
seq__38736_39312 = G__39337;
chunk__38738_39313 = G__39338;
count__38739_39314 = G__39339;
i__38740_39315 = G__39340;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39311);
}
}


var G__39341 = cljs.core.next(seq__38663_39303__$1);
var G__39342 = null;
var G__39343 = (0);
var G__39344 = (0);
seq__38663_39251 = G__39341;
chunk__38665_39252 = G__39342;
count__38666_39253 = G__39343;
i__38667_39254 = G__39344;
continue;
} else {
var G__39345 = cljs.core.next(seq__38663_39303__$1);
var G__39346 = null;
var G__39347 = (0);
var G__39348 = (0);
seq__38663_39251 = G__39345;
chunk__38665_39252 = G__39346;
count__38666_39253 = G__39347;
i__38667_39254 = G__39348;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39352 = arguments.length;
var i__5770__auto___39353 = (0);
while(true){
if((i__5770__auto___39353 < len__5769__auto___39352)){
args__5775__auto__.push((arguments[i__5770__auto___39353]));

var G__39354 = (i__5770__auto___39353 + (1));
i__5770__auto___39353 = G__39354;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38770){
var G__38771 = cljs.core.first(seq38770);
var seq38770__$1 = cljs.core.next(seq38770);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38771,seq38770__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38790 = arguments.length;
switch (G__38790) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__30698__auto___39359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30699__auto__ = (function (){var switch__29473__auto__ = (function (state_38818){
var state_val_38819 = (state_38818[(1)]);
if((state_val_38819 === (1))){
var state_38818__$1 = state_38818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38818__$1,(2),once_or_cleanup);
} else {
if((state_val_38819 === (2))){
var inst_38815 = (state_38818[(2)]);
var inst_38816 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38818__$1 = (function (){var statearr_38835 = state_38818;
(statearr_38835[(7)] = inst_38815);

return statearr_38835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38818__$1,inst_38816);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29474__auto__ = null;
var shadow$dom$state_machine__29474__auto____0 = (function (){
var statearr_38836 = [null,null,null,null,null,null,null,null];
(statearr_38836[(0)] = shadow$dom$state_machine__29474__auto__);

(statearr_38836[(1)] = (1));

return statearr_38836;
});
var shadow$dom$state_machine__29474__auto____1 = (function (state_38818){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_38818);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e38838){var ex__29477__auto__ = e38838;
var statearr_38839_39364 = state_38818;
(statearr_38839_39364[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_38818[(4)]))){
var statearr_38840_39365 = state_38818;
(statearr_38840_39365[(1)] = cljs.core.first((state_38818[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39366 = state_38818;
state_38818 = G__39366;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
shadow$dom$state_machine__29474__auto__ = function(state_38818){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29474__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29474__auto____1.call(this,state_38818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29474__auto____0;
shadow$dom$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29474__auto____1;
return shadow$dom$state_machine__29474__auto__;
})()
})();
var state__30700__auto__ = (function (){var statearr_38841 = f__30699__auto__();
(statearr_38841[(6)] = c__30698__auto___39359);

return statearr_38841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30700__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
