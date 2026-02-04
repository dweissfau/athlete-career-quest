goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12958 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12958(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12962 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12962(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11838 = coll;
var G__11839 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11838,G__11839) : shadow.dom.lazy_native_coll_seq.call(null,G__11838,G__11839));
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
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
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
var G__11866 = arguments.length;
switch (G__11866) {
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
var G__11883 = arguments.length;
switch (G__11883) {
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
var G__11916 = arguments.length;
switch (G__11916) {
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
var G__11928 = arguments.length;
switch (G__11928) {
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
var G__11946 = arguments.length;
switch (G__11946) {
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
var G__11972 = arguments.length;
switch (G__11972) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11992){if((e11992 instanceof Object)){
var e = e11992;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11992;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11997 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11998 = null;
var count__11999 = (0);
var i__12000 = (0);
while(true){
if((i__12000 < count__11999)){
var el = chunk__11998.cljs$core$IIndexed$_nth$arity$2(null,i__12000);
var handler_12984__$1 = ((function (seq__11997,chunk__11998,count__11999,i__12000,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11997,chunk__11998,count__11999,i__12000,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12984__$1);


var G__12985 = seq__11997;
var G__12986 = chunk__11998;
var G__12987 = count__11999;
var G__12988 = (i__12000 + (1));
seq__11997 = G__12985;
chunk__11998 = G__12986;
count__11999 = G__12987;
i__12000 = G__12988;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11997);
if(temp__5804__auto__){
var seq__11997__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11997__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11997__$1);
var G__12990 = cljs.core.chunk_rest(seq__11997__$1);
var G__12991 = c__5525__auto__;
var G__12992 = cljs.core.count(c__5525__auto__);
var G__12993 = (0);
seq__11997 = G__12990;
chunk__11998 = G__12991;
count__11999 = G__12992;
i__12000 = G__12993;
continue;
} else {
var el = cljs.core.first(seq__11997__$1);
var handler_12994__$1 = ((function (seq__11997,chunk__11998,count__11999,i__12000,el,seq__11997__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11997,chunk__11998,count__11999,i__12000,el,seq__11997__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12994__$1);


var G__12995 = cljs.core.next(seq__11997__$1);
var G__12996 = null;
var G__12997 = (0);
var G__12998 = (0);
seq__11997 = G__12995;
chunk__11998 = G__12996;
count__11999 = G__12997;
i__12000 = G__12998;
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
var G__12020 = arguments.length;
switch (G__12020) {
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
var seq__12030 = cljs.core.seq(events);
var chunk__12031 = null;
var count__12032 = (0);
var i__12033 = (0);
while(true){
if((i__12033 < count__12032)){
var vec__12051 = chunk__12031.cljs$core$IIndexed$_nth$arity$2(null,i__12033);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12051,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13006 = seq__12030;
var G__13007 = chunk__12031;
var G__13008 = count__12032;
var G__13009 = (i__12033 + (1));
seq__12030 = G__13006;
chunk__12031 = G__13007;
count__12032 = G__13008;
i__12033 = G__13009;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12030);
if(temp__5804__auto__){
var seq__12030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12030__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12030__$1);
var G__13010 = cljs.core.chunk_rest(seq__12030__$1);
var G__13011 = c__5525__auto__;
var G__13012 = cljs.core.count(c__5525__auto__);
var G__13013 = (0);
seq__12030 = G__13010;
chunk__12031 = G__13011;
count__12032 = G__13012;
i__12033 = G__13013;
continue;
} else {
var vec__12058 = cljs.core.first(seq__12030__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12058,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13015 = cljs.core.next(seq__12030__$1);
var G__13016 = null;
var G__13017 = (0);
var G__13018 = (0);
seq__12030 = G__13015;
chunk__12031 = G__13016;
count__12032 = G__13017;
i__12033 = G__13018;
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
var seq__12061 = cljs.core.seq(styles);
var chunk__12062 = null;
var count__12063 = (0);
var i__12064 = (0);
while(true){
if((i__12064 < count__12063)){
var vec__12079 = chunk__12062.cljs$core$IIndexed$_nth$arity$2(null,i__12064);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13020 = seq__12061;
var G__13021 = chunk__12062;
var G__13022 = count__12063;
var G__13023 = (i__12064 + (1));
seq__12061 = G__13020;
chunk__12062 = G__13021;
count__12063 = G__13022;
i__12064 = G__13023;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12061);
if(temp__5804__auto__){
var seq__12061__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12061__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12061__$1);
var G__13026 = cljs.core.chunk_rest(seq__12061__$1);
var G__13027 = c__5525__auto__;
var G__13028 = cljs.core.count(c__5525__auto__);
var G__13029 = (0);
seq__12061 = G__13026;
chunk__12062 = G__13027;
count__12063 = G__13028;
i__12064 = G__13029;
continue;
} else {
var vec__12089 = cljs.core.first(seq__12061__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12089,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13030 = cljs.core.next(seq__12061__$1);
var G__13031 = null;
var G__13032 = (0);
var G__13033 = (0);
seq__12061 = G__13030;
chunk__12062 = G__13031;
count__12063 = G__13032;
i__12064 = G__13033;
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
var G__12097_13034 = key;
var G__12097_13035__$1 = (((G__12097_13034 instanceof cljs.core.Keyword))?G__12097_13034.fqn:null);
switch (G__12097_13035__$1) {
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
var ks_13039 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_13039,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_13039,"aria-");
}
})())){
el.setAttribute(ks_13039,value);
} else {
(el[ks_13039] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12171){
var map__12172 = p__12171;
var map__12172__$1 = cljs.core.__destructure_map(map__12172);
var props = map__12172__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12172__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12174 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12174,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12174,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12174,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12180 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12180,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12180;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12184 = arguments.length;
switch (G__12184) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12195){
var vec__12196 = p__12195;
var seq__12197 = cljs.core.seq(vec__12196);
var first__12198 = cljs.core.first(seq__12197);
var seq__12197__$1 = cljs.core.next(seq__12197);
var nn = first__12198;
var first__12198__$1 = cljs.core.first(seq__12197__$1);
var seq__12197__$2 = cljs.core.next(seq__12197__$1);
var np = first__12198__$1;
var nc = seq__12197__$2;
var node = vec__12196;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12203 = nn;
var G__12204 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12203,G__12204) : create_fn.call(null,G__12203,G__12204));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12206 = nn;
var G__12207 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12206,G__12207) : create_fn.call(null,G__12206,G__12207));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12211 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12211,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12211,(1),null);
var seq__12214_13055 = cljs.core.seq(node_children);
var chunk__12215_13056 = null;
var count__12216_13057 = (0);
var i__12217_13058 = (0);
while(true){
if((i__12217_13058 < count__12216_13057)){
var child_struct_13059 = chunk__12215_13056.cljs$core$IIndexed$_nth$arity$2(null,i__12217_13058);
var children_13060 = shadow.dom.dom_node(child_struct_13059);
if(cljs.core.seq_QMARK_(children_13060)){
var seq__12250_13061 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13060));
var chunk__12252_13062 = null;
var count__12253_13063 = (0);
var i__12254_13064 = (0);
while(true){
if((i__12254_13064 < count__12253_13063)){
var child_13065 = chunk__12252_13062.cljs$core$IIndexed$_nth$arity$2(null,i__12254_13064);
if(cljs.core.truth_(child_13065)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13065);


var G__13066 = seq__12250_13061;
var G__13067 = chunk__12252_13062;
var G__13068 = count__12253_13063;
var G__13069 = (i__12254_13064 + (1));
seq__12250_13061 = G__13066;
chunk__12252_13062 = G__13067;
count__12253_13063 = G__13068;
i__12254_13064 = G__13069;
continue;
} else {
var G__13070 = seq__12250_13061;
var G__13071 = chunk__12252_13062;
var G__13072 = count__12253_13063;
var G__13073 = (i__12254_13064 + (1));
seq__12250_13061 = G__13070;
chunk__12252_13062 = G__13071;
count__12253_13063 = G__13072;
i__12254_13064 = G__13073;
continue;
}
} else {
var temp__5804__auto___13074 = cljs.core.seq(seq__12250_13061);
if(temp__5804__auto___13074){
var seq__12250_13075__$1 = temp__5804__auto___13074;
if(cljs.core.chunked_seq_QMARK_(seq__12250_13075__$1)){
var c__5525__auto___13077 = cljs.core.chunk_first(seq__12250_13075__$1);
var G__13078 = cljs.core.chunk_rest(seq__12250_13075__$1);
var G__13079 = c__5525__auto___13077;
var G__13080 = cljs.core.count(c__5525__auto___13077);
var G__13081 = (0);
seq__12250_13061 = G__13078;
chunk__12252_13062 = G__13079;
count__12253_13063 = G__13080;
i__12254_13064 = G__13081;
continue;
} else {
var child_13082 = cljs.core.first(seq__12250_13075__$1);
if(cljs.core.truth_(child_13082)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13082);


var G__13083 = cljs.core.next(seq__12250_13075__$1);
var G__13084 = null;
var G__13085 = (0);
var G__13086 = (0);
seq__12250_13061 = G__13083;
chunk__12252_13062 = G__13084;
count__12253_13063 = G__13085;
i__12254_13064 = G__13086;
continue;
} else {
var G__13087 = cljs.core.next(seq__12250_13075__$1);
var G__13088 = null;
var G__13089 = (0);
var G__13090 = (0);
seq__12250_13061 = G__13087;
chunk__12252_13062 = G__13088;
count__12253_13063 = G__13089;
i__12254_13064 = G__13090;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13060);
}


var G__13091 = seq__12214_13055;
var G__13092 = chunk__12215_13056;
var G__13093 = count__12216_13057;
var G__13094 = (i__12217_13058 + (1));
seq__12214_13055 = G__13091;
chunk__12215_13056 = G__13092;
count__12216_13057 = G__13093;
i__12217_13058 = G__13094;
continue;
} else {
var temp__5804__auto___13095 = cljs.core.seq(seq__12214_13055);
if(temp__5804__auto___13095){
var seq__12214_13096__$1 = temp__5804__auto___13095;
if(cljs.core.chunked_seq_QMARK_(seq__12214_13096__$1)){
var c__5525__auto___13097 = cljs.core.chunk_first(seq__12214_13096__$1);
var G__13098 = cljs.core.chunk_rest(seq__12214_13096__$1);
var G__13099 = c__5525__auto___13097;
var G__13100 = cljs.core.count(c__5525__auto___13097);
var G__13101 = (0);
seq__12214_13055 = G__13098;
chunk__12215_13056 = G__13099;
count__12216_13057 = G__13100;
i__12217_13058 = G__13101;
continue;
} else {
var child_struct_13102 = cljs.core.first(seq__12214_13096__$1);
var children_13103 = shadow.dom.dom_node(child_struct_13102);
if(cljs.core.seq_QMARK_(children_13103)){
var seq__12267_13104 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13103));
var chunk__12269_13105 = null;
var count__12270_13106 = (0);
var i__12271_13107 = (0);
while(true){
if((i__12271_13107 < count__12270_13106)){
var child_13108 = chunk__12269_13105.cljs$core$IIndexed$_nth$arity$2(null,i__12271_13107);
if(cljs.core.truth_(child_13108)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13108);


var G__13111 = seq__12267_13104;
var G__13112 = chunk__12269_13105;
var G__13113 = count__12270_13106;
var G__13114 = (i__12271_13107 + (1));
seq__12267_13104 = G__13111;
chunk__12269_13105 = G__13112;
count__12270_13106 = G__13113;
i__12271_13107 = G__13114;
continue;
} else {
var G__13115 = seq__12267_13104;
var G__13116 = chunk__12269_13105;
var G__13117 = count__12270_13106;
var G__13118 = (i__12271_13107 + (1));
seq__12267_13104 = G__13115;
chunk__12269_13105 = G__13116;
count__12270_13106 = G__13117;
i__12271_13107 = G__13118;
continue;
}
} else {
var temp__5804__auto___13119__$1 = cljs.core.seq(seq__12267_13104);
if(temp__5804__auto___13119__$1){
var seq__12267_13120__$1 = temp__5804__auto___13119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12267_13120__$1)){
var c__5525__auto___13121 = cljs.core.chunk_first(seq__12267_13120__$1);
var G__13122 = cljs.core.chunk_rest(seq__12267_13120__$1);
var G__13123 = c__5525__auto___13121;
var G__13124 = cljs.core.count(c__5525__auto___13121);
var G__13125 = (0);
seq__12267_13104 = G__13122;
chunk__12269_13105 = G__13123;
count__12270_13106 = G__13124;
i__12271_13107 = G__13125;
continue;
} else {
var child_13126 = cljs.core.first(seq__12267_13120__$1);
if(cljs.core.truth_(child_13126)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13126);


var G__13127 = cljs.core.next(seq__12267_13120__$1);
var G__13128 = null;
var G__13129 = (0);
var G__13130 = (0);
seq__12267_13104 = G__13127;
chunk__12269_13105 = G__13128;
count__12270_13106 = G__13129;
i__12271_13107 = G__13130;
continue;
} else {
var G__13131 = cljs.core.next(seq__12267_13120__$1);
var G__13132 = null;
var G__13133 = (0);
var G__13134 = (0);
seq__12267_13104 = G__13131;
chunk__12269_13105 = G__13132;
count__12270_13106 = G__13133;
i__12271_13107 = G__13134;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13103);
}


var G__13136 = cljs.core.next(seq__12214_13096__$1);
var G__13137 = null;
var G__13138 = (0);
var G__13139 = (0);
seq__12214_13055 = G__13136;
chunk__12215_13056 = G__13137;
count__12216_13057 = G__13138;
i__12217_13058 = G__13139;
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
var seq__12349 = cljs.core.seq(node);
var chunk__12350 = null;
var count__12351 = (0);
var i__12352 = (0);
while(true){
if((i__12352 < count__12351)){
var n = chunk__12350.cljs$core$IIndexed$_nth$arity$2(null,i__12352);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13143 = seq__12349;
var G__13144 = chunk__12350;
var G__13145 = count__12351;
var G__13146 = (i__12352 + (1));
seq__12349 = G__13143;
chunk__12350 = G__13144;
count__12351 = G__13145;
i__12352 = G__13146;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12349);
if(temp__5804__auto__){
var seq__12349__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12349__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12349__$1);
var G__13147 = cljs.core.chunk_rest(seq__12349__$1);
var G__13148 = c__5525__auto__;
var G__13149 = cljs.core.count(c__5525__auto__);
var G__13150 = (0);
seq__12349 = G__13147;
chunk__12350 = G__13148;
count__12351 = G__13149;
i__12352 = G__13150;
continue;
} else {
var n = cljs.core.first(seq__12349__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13153 = cljs.core.next(seq__12349__$1);
var G__13154 = null;
var G__13155 = (0);
var G__13156 = (0);
seq__12349 = G__13153;
chunk__12350 = G__13154;
count__12351 = G__13155;
i__12352 = G__13156;
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
var G__12398 = arguments.length;
switch (G__12398) {
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
var G__12415 = arguments.length;
switch (G__12415) {
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
var G__12428 = arguments.length;
switch (G__12428) {
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
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var args__5732__auto__ = [];
var len__5726__auto___13166 = arguments.length;
var i__5727__auto___13167 = (0);
while(true){
if((i__5727__auto___13167 < len__5726__auto___13166)){
args__5732__auto__.push((arguments[i__5727__auto___13167]));

var G__13168 = (i__5727__auto___13167 + (1));
i__5727__auto___13167 = G__13168;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12462_13169 = cljs.core.seq(nodes);
var chunk__12463_13170 = null;
var count__12464_13171 = (0);
var i__12465_13172 = (0);
while(true){
if((i__12465_13172 < count__12464_13171)){
var node_13174 = chunk__12463_13170.cljs$core$IIndexed$_nth$arity$2(null,i__12465_13172);
fragment.appendChild(shadow.dom._to_dom(node_13174));


var G__13176 = seq__12462_13169;
var G__13177 = chunk__12463_13170;
var G__13178 = count__12464_13171;
var G__13179 = (i__12465_13172 + (1));
seq__12462_13169 = G__13176;
chunk__12463_13170 = G__13177;
count__12464_13171 = G__13178;
i__12465_13172 = G__13179;
continue;
} else {
var temp__5804__auto___13180 = cljs.core.seq(seq__12462_13169);
if(temp__5804__auto___13180){
var seq__12462_13181__$1 = temp__5804__auto___13180;
if(cljs.core.chunked_seq_QMARK_(seq__12462_13181__$1)){
var c__5525__auto___13182 = cljs.core.chunk_first(seq__12462_13181__$1);
var G__13183 = cljs.core.chunk_rest(seq__12462_13181__$1);
var G__13184 = c__5525__auto___13182;
var G__13185 = cljs.core.count(c__5525__auto___13182);
var G__13186 = (0);
seq__12462_13169 = G__13183;
chunk__12463_13170 = G__13184;
count__12464_13171 = G__13185;
i__12465_13172 = G__13186;
continue;
} else {
var node_13187 = cljs.core.first(seq__12462_13181__$1);
fragment.appendChild(shadow.dom._to_dom(node_13187));


var G__13188 = cljs.core.next(seq__12462_13181__$1);
var G__13189 = null;
var G__13190 = (0);
var G__13191 = (0);
seq__12462_13169 = G__13188;
chunk__12463_13170 = G__13189;
count__12464_13171 = G__13190;
i__12465_13172 = G__13191;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12457){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12457));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12470_13194 = cljs.core.seq(scripts);
var chunk__12471_13195 = null;
var count__12472_13196 = (0);
var i__12473_13197 = (0);
while(true){
if((i__12473_13197 < count__12472_13196)){
var vec__12486_13198 = chunk__12471_13195.cljs$core$IIndexed$_nth$arity$2(null,i__12473_13197);
var script_tag_13199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486_13198,(0),null);
var script_body_13200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486_13198,(1),null);
eval(script_body_13200);


var G__13201 = seq__12470_13194;
var G__13202 = chunk__12471_13195;
var G__13203 = count__12472_13196;
var G__13204 = (i__12473_13197 + (1));
seq__12470_13194 = G__13201;
chunk__12471_13195 = G__13202;
count__12472_13196 = G__13203;
i__12473_13197 = G__13204;
continue;
} else {
var temp__5804__auto___13205 = cljs.core.seq(seq__12470_13194);
if(temp__5804__auto___13205){
var seq__12470_13206__$1 = temp__5804__auto___13205;
if(cljs.core.chunked_seq_QMARK_(seq__12470_13206__$1)){
var c__5525__auto___13207 = cljs.core.chunk_first(seq__12470_13206__$1);
var G__13208 = cljs.core.chunk_rest(seq__12470_13206__$1);
var G__13209 = c__5525__auto___13207;
var G__13210 = cljs.core.count(c__5525__auto___13207);
var G__13211 = (0);
seq__12470_13194 = G__13208;
chunk__12471_13195 = G__13209;
count__12472_13196 = G__13210;
i__12473_13197 = G__13211;
continue;
} else {
var vec__12490_13213 = cljs.core.first(seq__12470_13206__$1);
var script_tag_13214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490_13213,(0),null);
var script_body_13215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490_13213,(1),null);
eval(script_body_13215);


var G__13217 = cljs.core.next(seq__12470_13206__$1);
var G__13218 = null;
var G__13219 = (0);
var G__13220 = (0);
seq__12470_13194 = G__13217;
chunk__12471_13195 = G__13218;
count__12472_13196 = G__13219;
i__12473_13197 = G__13220;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12494){
var vec__12495 = p__12494;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(1),null);
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
var G__12503 = arguments.length;
switch (G__12503) {
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
var seq__12522 = cljs.core.seq(style_keys);
var chunk__12523 = null;
var count__12524 = (0);
var i__12525 = (0);
while(true){
if((i__12525 < count__12524)){
var it = chunk__12523.cljs$core$IIndexed$_nth$arity$2(null,i__12525);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13226 = seq__12522;
var G__13227 = chunk__12523;
var G__13228 = count__12524;
var G__13229 = (i__12525 + (1));
seq__12522 = G__13226;
chunk__12523 = G__13227;
count__12524 = G__13228;
i__12525 = G__13229;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12522);
if(temp__5804__auto__){
var seq__12522__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12522__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12522__$1);
var G__13232 = cljs.core.chunk_rest(seq__12522__$1);
var G__13233 = c__5525__auto__;
var G__13234 = cljs.core.count(c__5525__auto__);
var G__13235 = (0);
seq__12522 = G__13232;
chunk__12523 = G__13233;
count__12524 = G__13234;
i__12525 = G__13235;
continue;
} else {
var it = cljs.core.first(seq__12522__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13236 = cljs.core.next(seq__12522__$1);
var G__13237 = null;
var G__13238 = (0);
var G__13239 = (0);
seq__12522 = G__13236;
chunk__12523 = G__13237;
count__12524 = G__13238;
i__12525 = G__13239;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12538,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12557 = k12538;
var G__12557__$1 = (((G__12557 instanceof cljs.core.Keyword))?G__12557.fqn:null);
switch (G__12557__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12538,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12561){
var vec__12562 = p__12561;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12562,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12537){
var self__ = this;
var G__12537__$1 = this;
return (new cljs.core.RecordIter((0),G__12537__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12539,other12540){
var self__ = this;
var this12539__$1 = this;
return (((!((other12540 == null)))) && ((((this12539__$1.constructor === other12540.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12539__$1.x,other12540.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12539__$1.y,other12540.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12539__$1.__extmap,other12540.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12538){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12598 = k12538;
var G__12598__$1 = (((G__12598 instanceof cljs.core.Keyword))?G__12598.fqn:null);
switch (G__12598__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12538);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12537){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12603 = cljs.core.keyword_identical_QMARK_;
var expr__12604 = k__5309__auto__;
if(cljs.core.truth_((pred__12603.cljs$core$IFn$_invoke$arity$2 ? pred__12603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12604) : pred__12603.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12604)))){
return (new shadow.dom.Coordinate(G__12537,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12603.cljs$core$IFn$_invoke$arity$2 ? pred__12603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12604) : pred__12603.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12604)))){
return (new shadow.dom.Coordinate(self__.x,G__12537,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12537),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12537){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12537,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12547){
var extmap__5342__auto__ = (function (){var G__12625 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12547,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12547)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12625);
} else {
return G__12625;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12547),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12547),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12645,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12659 = k12645;
var G__12659__$1 = (((G__12659 instanceof cljs.core.Keyword))?G__12659.fqn:null);
switch (G__12659__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12645,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12663){
var vec__12664 = p__12663;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12644){
var self__ = this;
var G__12644__$1 = this;
return (new cljs.core.RecordIter((0),G__12644__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12646,other12647){
var self__ = this;
var this12646__$1 = this;
return (((!((other12647 == null)))) && ((((this12646__$1.constructor === other12647.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12646__$1.w,other12647.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12646__$1.h,other12647.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12646__$1.__extmap,other12647.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12645){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12691 = k12645;
var G__12691__$1 = (((G__12691 instanceof cljs.core.Keyword))?G__12691.fqn:null);
switch (G__12691__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12645);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12644){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12692 = cljs.core.keyword_identical_QMARK_;
var expr__12693 = k__5309__auto__;
if(cljs.core.truth_((pred__12692.cljs$core$IFn$_invoke$arity$2 ? pred__12692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12693) : pred__12692.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12693)))){
return (new shadow.dom.Size(G__12644,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12692.cljs$core$IFn$_invoke$arity$2 ? pred__12692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12693) : pred__12692.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12693)))){
return (new shadow.dom.Size(self__.w,G__12644,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12644),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12644){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12644,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12649){
var extmap__5342__auto__ = (function (){var G__12711 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12649,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12649)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12711);
} else {
return G__12711;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12649),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12649),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13270 = (i + (1));
var G__13271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13270;
ret = G__13271;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12751){
var vec__12752 = p__12751;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12752,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12760 = arguments.length;
switch (G__12760) {
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
var G__13279 = ps;
var G__13280 = (i + (1));
el__$1 = G__13279;
i = G__13280;
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
var vec__12812 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12812,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12816_13282 = cljs.core.seq(props);
var chunk__12817_13283 = null;
var count__12818_13284 = (0);
var i__12819_13285 = (0);
while(true){
if((i__12819_13285 < count__12818_13284)){
var vec__12830_13286 = chunk__12817_13283.cljs$core$IIndexed$_nth$arity$2(null,i__12819_13285);
var k_13287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12830_13286,(0),null);
var v_13288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12830_13286,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13287);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13287),v_13288);


var G__13289 = seq__12816_13282;
var G__13290 = chunk__12817_13283;
var G__13291 = count__12818_13284;
var G__13292 = (i__12819_13285 + (1));
seq__12816_13282 = G__13289;
chunk__12817_13283 = G__13290;
count__12818_13284 = G__13291;
i__12819_13285 = G__13292;
continue;
} else {
var temp__5804__auto___13293 = cljs.core.seq(seq__12816_13282);
if(temp__5804__auto___13293){
var seq__12816_13294__$1 = temp__5804__auto___13293;
if(cljs.core.chunked_seq_QMARK_(seq__12816_13294__$1)){
var c__5525__auto___13295 = cljs.core.chunk_first(seq__12816_13294__$1);
var G__13296 = cljs.core.chunk_rest(seq__12816_13294__$1);
var G__13297 = c__5525__auto___13295;
var G__13298 = cljs.core.count(c__5525__auto___13295);
var G__13299 = (0);
seq__12816_13282 = G__13296;
chunk__12817_13283 = G__13297;
count__12818_13284 = G__13298;
i__12819_13285 = G__13299;
continue;
} else {
var vec__12833_13300 = cljs.core.first(seq__12816_13294__$1);
var k_13301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12833_13300,(0),null);
var v_13302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12833_13300,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13301);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13301),v_13302);


var G__13303 = cljs.core.next(seq__12816_13294__$1);
var G__13304 = null;
var G__13305 = (0);
var G__13306 = (0);
seq__12816_13282 = G__13303;
chunk__12817_13283 = G__13304;
count__12818_13284 = G__13305;
i__12819_13285 = G__13306;
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
var vec__12848 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12848,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12848,(1),null);
var seq__12852_13307 = cljs.core.seq(node_children);
var chunk__12854_13308 = null;
var count__12855_13309 = (0);
var i__12856_13310 = (0);
while(true){
if((i__12856_13310 < count__12855_13309)){
var child_struct_13312 = chunk__12854_13308.cljs$core$IIndexed$_nth$arity$2(null,i__12856_13310);
if((!((child_struct_13312 == null)))){
if(typeof child_struct_13312 === 'string'){
var text_13313 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13313),child_struct_13312].join(''));
} else {
var children_13314 = shadow.dom.svg_node(child_struct_13312);
if(cljs.core.seq_QMARK_(children_13314)){
var seq__12888_13315 = cljs.core.seq(children_13314);
var chunk__12890_13316 = null;
var count__12891_13317 = (0);
var i__12892_13318 = (0);
while(true){
if((i__12892_13318 < count__12891_13317)){
var child_13319 = chunk__12890_13316.cljs$core$IIndexed$_nth$arity$2(null,i__12892_13318);
if(cljs.core.truth_(child_13319)){
node.appendChild(child_13319);


var G__13320 = seq__12888_13315;
var G__13321 = chunk__12890_13316;
var G__13322 = count__12891_13317;
var G__13323 = (i__12892_13318 + (1));
seq__12888_13315 = G__13320;
chunk__12890_13316 = G__13321;
count__12891_13317 = G__13322;
i__12892_13318 = G__13323;
continue;
} else {
var G__13324 = seq__12888_13315;
var G__13325 = chunk__12890_13316;
var G__13326 = count__12891_13317;
var G__13327 = (i__12892_13318 + (1));
seq__12888_13315 = G__13324;
chunk__12890_13316 = G__13325;
count__12891_13317 = G__13326;
i__12892_13318 = G__13327;
continue;
}
} else {
var temp__5804__auto___13328 = cljs.core.seq(seq__12888_13315);
if(temp__5804__auto___13328){
var seq__12888_13330__$1 = temp__5804__auto___13328;
if(cljs.core.chunked_seq_QMARK_(seq__12888_13330__$1)){
var c__5525__auto___13331 = cljs.core.chunk_first(seq__12888_13330__$1);
var G__13332 = cljs.core.chunk_rest(seq__12888_13330__$1);
var G__13333 = c__5525__auto___13331;
var G__13334 = cljs.core.count(c__5525__auto___13331);
var G__13335 = (0);
seq__12888_13315 = G__13332;
chunk__12890_13316 = G__13333;
count__12891_13317 = G__13334;
i__12892_13318 = G__13335;
continue;
} else {
var child_13336 = cljs.core.first(seq__12888_13330__$1);
if(cljs.core.truth_(child_13336)){
node.appendChild(child_13336);


var G__13337 = cljs.core.next(seq__12888_13330__$1);
var G__13338 = null;
var G__13339 = (0);
var G__13340 = (0);
seq__12888_13315 = G__13337;
chunk__12890_13316 = G__13338;
count__12891_13317 = G__13339;
i__12892_13318 = G__13340;
continue;
} else {
var G__13341 = cljs.core.next(seq__12888_13330__$1);
var G__13342 = null;
var G__13343 = (0);
var G__13344 = (0);
seq__12888_13315 = G__13341;
chunk__12890_13316 = G__13342;
count__12891_13317 = G__13343;
i__12892_13318 = G__13344;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13314);
}
}


var G__13345 = seq__12852_13307;
var G__13346 = chunk__12854_13308;
var G__13347 = count__12855_13309;
var G__13348 = (i__12856_13310 + (1));
seq__12852_13307 = G__13345;
chunk__12854_13308 = G__13346;
count__12855_13309 = G__13347;
i__12856_13310 = G__13348;
continue;
} else {
var G__13349 = seq__12852_13307;
var G__13350 = chunk__12854_13308;
var G__13351 = count__12855_13309;
var G__13352 = (i__12856_13310 + (1));
seq__12852_13307 = G__13349;
chunk__12854_13308 = G__13350;
count__12855_13309 = G__13351;
i__12856_13310 = G__13352;
continue;
}
} else {
var temp__5804__auto___13353 = cljs.core.seq(seq__12852_13307);
if(temp__5804__auto___13353){
var seq__12852_13355__$1 = temp__5804__auto___13353;
if(cljs.core.chunked_seq_QMARK_(seq__12852_13355__$1)){
var c__5525__auto___13356 = cljs.core.chunk_first(seq__12852_13355__$1);
var G__13357 = cljs.core.chunk_rest(seq__12852_13355__$1);
var G__13358 = c__5525__auto___13356;
var G__13359 = cljs.core.count(c__5525__auto___13356);
var G__13360 = (0);
seq__12852_13307 = G__13357;
chunk__12854_13308 = G__13358;
count__12855_13309 = G__13359;
i__12856_13310 = G__13360;
continue;
} else {
var child_struct_13361 = cljs.core.first(seq__12852_13355__$1);
if((!((child_struct_13361 == null)))){
if(typeof child_struct_13361 === 'string'){
var text_13362 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13362),child_struct_13361].join(''));
} else {
var children_13363 = shadow.dom.svg_node(child_struct_13361);
if(cljs.core.seq_QMARK_(children_13363)){
var seq__12902_13364 = cljs.core.seq(children_13363);
var chunk__12904_13365 = null;
var count__12905_13366 = (0);
var i__12906_13367 = (0);
while(true){
if((i__12906_13367 < count__12905_13366)){
var child_13368 = chunk__12904_13365.cljs$core$IIndexed$_nth$arity$2(null,i__12906_13367);
if(cljs.core.truth_(child_13368)){
node.appendChild(child_13368);


var G__13369 = seq__12902_13364;
var G__13370 = chunk__12904_13365;
var G__13371 = count__12905_13366;
var G__13372 = (i__12906_13367 + (1));
seq__12902_13364 = G__13369;
chunk__12904_13365 = G__13370;
count__12905_13366 = G__13371;
i__12906_13367 = G__13372;
continue;
} else {
var G__13373 = seq__12902_13364;
var G__13374 = chunk__12904_13365;
var G__13375 = count__12905_13366;
var G__13376 = (i__12906_13367 + (1));
seq__12902_13364 = G__13373;
chunk__12904_13365 = G__13374;
count__12905_13366 = G__13375;
i__12906_13367 = G__13376;
continue;
}
} else {
var temp__5804__auto___13377__$1 = cljs.core.seq(seq__12902_13364);
if(temp__5804__auto___13377__$1){
var seq__12902_13378__$1 = temp__5804__auto___13377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12902_13378__$1)){
var c__5525__auto___13380 = cljs.core.chunk_first(seq__12902_13378__$1);
var G__13381 = cljs.core.chunk_rest(seq__12902_13378__$1);
var G__13382 = c__5525__auto___13380;
var G__13383 = cljs.core.count(c__5525__auto___13380);
var G__13384 = (0);
seq__12902_13364 = G__13381;
chunk__12904_13365 = G__13382;
count__12905_13366 = G__13383;
i__12906_13367 = G__13384;
continue;
} else {
var child_13385 = cljs.core.first(seq__12902_13378__$1);
if(cljs.core.truth_(child_13385)){
node.appendChild(child_13385);


var G__13386 = cljs.core.next(seq__12902_13378__$1);
var G__13387 = null;
var G__13388 = (0);
var G__13389 = (0);
seq__12902_13364 = G__13386;
chunk__12904_13365 = G__13387;
count__12905_13366 = G__13388;
i__12906_13367 = G__13389;
continue;
} else {
var G__13390 = cljs.core.next(seq__12902_13378__$1);
var G__13391 = null;
var G__13392 = (0);
var G__13393 = (0);
seq__12902_13364 = G__13390;
chunk__12904_13365 = G__13391;
count__12905_13366 = G__13392;
i__12906_13367 = G__13393;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13363);
}
}


var G__13394 = cljs.core.next(seq__12852_13355__$1);
var G__13395 = null;
var G__13396 = (0);
var G__13397 = (0);
seq__12852_13307 = G__13394;
chunk__12854_13308 = G__13395;
count__12855_13309 = G__13396;
i__12856_13310 = G__13397;
continue;
} else {
var G__13398 = cljs.core.next(seq__12852_13355__$1);
var G__13399 = null;
var G__13400 = (0);
var G__13401 = (0);
seq__12852_13307 = G__13398;
chunk__12854_13308 = G__13399;
count__12855_13309 = G__13400;
i__12856_13310 = G__13401;
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
var args__5732__auto__ = [];
var len__5726__auto___13404 = arguments.length;
var i__5727__auto___13405 = (0);
while(true){
if((i__5727__auto___13405 < len__5726__auto___13404)){
args__5732__auto__.push((arguments[i__5727__auto___13405]));

var G__13406 = (i__5727__auto___13405 + (1));
i__5727__auto___13405 = G__13406;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12926){
var G__12927 = cljs.core.first(seq12926);
var seq12926__$1 = cljs.core.next(seq12926);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12927,seq12926__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
