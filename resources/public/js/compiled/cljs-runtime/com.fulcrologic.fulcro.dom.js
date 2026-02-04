goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__25788){
var vec__25790 = p__25788;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25790,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25790,(1),null);
var pair = vec__25790;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__25796){
var vec__25800 = p__25796;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25800,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25800,(1),null);
var pair = vec__25800;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__25811){
var vec__25812 = p__25811;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25812,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__25815 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25815,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__25815;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__25822 = arguments.length;
switch (G__25822) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__25825 = component.refs;
var G__25825__$1 = (((G__25825 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__25825,name));
if((G__25825__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__25825__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__25831 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__25832 = (function (){var G__25833 = r;
if((G__25833 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__25833);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__25832) : ref.call(null,G__25832));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__25831) : factory.call(null,G__25831));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__25840 = arguments.length;
switch (G__25840) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___28061 = arguments.length;
var i__5727__auto___28063 = (0);
while(true){
if((i__5727__auto___28063 < len__5726__auto___28061)){
args_arr__5751__auto__.push((arguments[i__5727__auto___28063]));

var G__28065 = (i__5727__auto___28063 + (1));
i__5727__auto___28063 = G__28065;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq25837){
var G__25838 = cljs.core.first(seq25837);
var seq25837__$1 = cljs.core.next(seq25837);
var G__25839 = cljs.core.first(seq25837__$1);
var seq25837__$2 = cljs.core.next(seq25837__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25838,G__25839,seq25837__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5000__auto__ = tag;
if(cljs.core.truth_(and__5000__auto__)){
var G__25858 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25858) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__25858));
} else {
return and__5000__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x25865_28074 = ctor.prototype;
(x25865_28074.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x25865_28074.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__25860_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__25860_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5000__auto__ = state_value;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = element_value;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-786790003);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x25865_28074.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__28080__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__28080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28081__i = 0, G__28081__a = new Array(arguments.length -  0);
while (G__28081__i < G__28081__a.length) {G__28081__a[G__28081__i] = arguments[G__28081__i + 0]; ++G__28081__i;}
  args = new cljs.core.IndexedSeq(G__28081__a,0,null);
} 
return G__28080__delegate.call(this,args);};
G__28080.cljs$lang$maxFixedArity = 0;
G__28080.cljs$lang$applyTo = (function (arglist__28082){
var args = cljs.core.seq(arglist__28082);
return G__28080__delegate(args);
});
G__28080.cljs$core$IFn$_invoke$arity$variadic = G__28080__delegate;
return G__28080;
})()
;
return (function() { 
var G__28083__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__28083 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__28084__i = 0, G__28084__a = new Array(arguments.length -  1);
while (G__28084__i < G__28084__a.length) {G__28084__a[G__28084__i] = arguments[G__28084__i + 1]; ++G__28084__i;}
  children = new cljs.core.IndexedSeq(G__28084__a,0,null);
} 
return G__28083__delegate.call(this,props,children);};
G__28083.cljs$lang$maxFixedArity = 1;
G__28083.cljs$lang$applyTo = (function (arglist__28087){
var props = cljs.core.first(arglist__28087);
var children = cljs.core.rest(arglist__28087);
return G__28083__delegate(props,children);
});
G__28083.cljs$core$IFn$_invoke$arity$variadic = G__28083__delegate;
return G__28083;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__25876 = tag;
switch (G__25876) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25876)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__25880 = arguments.length;
switch (G__25880) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__25884 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__25885 = cljs.core.seq(vec__25884);
var first__25886 = cljs.core.first(seq__25885);
var seq__25885__$1 = cljs.core.next(seq__25885);
var head = first__25886;
var tail = seq__25885__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__25888 = (function (){var G__25889 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25889,tail);

return G__25889;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25888) : f.call(null,G__25888));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__25890 = (function (){var G__25892 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25892,args);

return G__25892;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25890) : f.call(null,G__25890));
} else {
if(cljs.core.object_QMARK_(head)){
var G__25893 = (function (){var G__25894 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25894,tail);

return G__25894;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25893) : f.call(null,G__25893));
} else {
if(cljs.core.map_QMARK_(head)){
var G__25896 = (function (){var G__25898 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__25898,tail);

return G__25898;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25896) : f.call(null,G__25896));
} else {
var G__25899 = (function (){var G__25900 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25900,args);

return G__25900;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25899) : f.call(null,G__25899));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__25904 = arguments.length;
switch (G__25904) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__25908 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__25909 = cljs.core.seq(vec__25908);
var first__25910 = cljs.core.first(seq__25909);
var seq__25909__$1 = cljs.core.next(seq__25909);
var head = first__25910;
var tail = seq__25909__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__25911 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25911,tail);

return G__25911;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__25913 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25913,args);

return G__25913;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__25915 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25915,tail);

return G__25915;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__25916 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__25916,tail);

return G__25916;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__25917 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__25917,args);

return G__25917;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28116 = arguments.length;
var i__5727__auto___28117 = (0);
while(true){
if((i__5727__auto___28117 < len__5726__auto___28116)){
args__5732__auto__.push((arguments[i__5727__auto___28117]));

var G__28118 = (i__5727__auto___28117 + (1));
i__5727__auto___28117 = G__28118;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25929 = conformed_args__24506__auto__;
var map__25929__$1 = cljs.core.__destructure_map(map__25929);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25929__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25929__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25929__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq25922){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25922));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28121 = arguments.length;
var i__5727__auto___28124 = (0);
while(true){
if((i__5727__auto___28124 < len__5726__auto___28121)){
args__5732__auto__.push((arguments[i__5727__auto___28124]));

var G__28125 = (i__5727__auto___28124 + (1));
i__5727__auto___28124 = G__28125;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25933 = conformed_args__24506__auto__;
var map__25933__$1 = cljs.core.__destructure_map(map__25933);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq25930){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25930));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28129 = arguments.length;
var i__5727__auto___28130 = (0);
while(true){
if((i__5727__auto___28130 < len__5726__auto___28129)){
args__5732__auto__.push((arguments[i__5727__auto___28130]));

var G__28131 = (i__5727__auto___28130 + (1));
i__5727__auto___28130 = G__28131;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25939 = conformed_args__24506__auto__;
var map__25939__$1 = cljs.core.__destructure_map(map__25939);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq25936){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25936));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28139 = arguments.length;
var i__5727__auto___28140 = (0);
while(true){
if((i__5727__auto___28140 < len__5726__auto___28139)){
args__5732__auto__.push((arguments[i__5727__auto___28140]));

var G__28141 = (i__5727__auto___28140 + (1));
i__5727__auto___28140 = G__28141;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25947 = conformed_args__24506__auto__;
var map__25947__$1 = cljs.core.__destructure_map(map__25947);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq25942){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25942));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28150 = arguments.length;
var i__5727__auto___28151 = (0);
while(true){
if((i__5727__auto___28151 < len__5726__auto___28150)){
args__5732__auto__.push((arguments[i__5727__auto___28151]));

var G__28152 = (i__5727__auto___28151 + (1));
i__5727__auto___28151 = G__28152;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25954 = conformed_args__24506__auto__;
var map__25954__$1 = cljs.core.__destructure_map(map__25954);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq25953){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25953));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28153 = arguments.length;
var i__5727__auto___28154 = (0);
while(true){
if((i__5727__auto___28154 < len__5726__auto___28153)){
args__5732__auto__.push((arguments[i__5727__auto___28154]));

var G__28155 = (i__5727__auto___28154 + (1));
i__5727__auto___28154 = G__28155;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25960 = conformed_args__24506__auto__;
var map__25960__$1 = cljs.core.__destructure_map(map__25960);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq25957){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25957));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28156 = arguments.length;
var i__5727__auto___28157 = (0);
while(true){
if((i__5727__auto___28157 < len__5726__auto___28156)){
args__5732__auto__.push((arguments[i__5727__auto___28157]));

var G__28158 = (i__5727__auto___28157 + (1));
i__5727__auto___28157 = G__28158;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25964 = conformed_args__24506__auto__;
var map__25964__$1 = cljs.core.__destructure_map(map__25964);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq25963){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25963));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28159 = arguments.length;
var i__5727__auto___28160 = (0);
while(true){
if((i__5727__auto___28160 < len__5726__auto___28159)){
args__5732__auto__.push((arguments[i__5727__auto___28160]));

var G__28161 = (i__5727__auto___28160 + (1));
i__5727__auto___28160 = G__28161;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25967 = conformed_args__24506__auto__;
var map__25967__$1 = cljs.core.__destructure_map(map__25967);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq25966){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25966));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28164 = arguments.length;
var i__5727__auto___28165 = (0);
while(true){
if((i__5727__auto___28165 < len__5726__auto___28164)){
args__5732__auto__.push((arguments[i__5727__auto___28165]));

var G__28166 = (i__5727__auto___28165 + (1));
i__5727__auto___28165 = G__28166;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25974 = conformed_args__24506__auto__;
var map__25974__$1 = cljs.core.__destructure_map(map__25974);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq25969){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25969));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28171 = arguments.length;
var i__5727__auto___28172 = (0);
while(true){
if((i__5727__auto___28172 < len__5726__auto___28171)){
args__5732__auto__.push((arguments[i__5727__auto___28172]));

var G__28173 = (i__5727__auto___28172 + (1));
i__5727__auto___28172 = G__28173;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25978 = conformed_args__24506__auto__;
var map__25978__$1 = cljs.core.__destructure_map(map__25978);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq25976){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28176 = arguments.length;
var i__5727__auto___28177 = (0);
while(true){
if((i__5727__auto___28177 < len__5726__auto___28176)){
args__5732__auto__.push((arguments[i__5727__auto___28177]));

var G__28178 = (i__5727__auto___28177 + (1));
i__5727__auto___28177 = G__28178;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25986 = conformed_args__24506__auto__;
var map__25986__$1 = cljs.core.__destructure_map(map__25986);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq25981){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28179 = arguments.length;
var i__5727__auto___28180 = (0);
while(true){
if((i__5727__auto___28180 < len__5726__auto___28179)){
args__5732__auto__.push((arguments[i__5727__auto___28180]));

var G__28181 = (i__5727__auto___28180 + (1));
i__5727__auto___28180 = G__28181;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25992 = conformed_args__24506__auto__;
var map__25992__$1 = cljs.core.__destructure_map(map__25992);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq25989){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25989));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28186 = arguments.length;
var i__5727__auto___28187 = (0);
while(true){
if((i__5727__auto___28187 < len__5726__auto___28186)){
args__5732__auto__.push((arguments[i__5727__auto___28187]));

var G__28188 = (i__5727__auto___28187 + (1));
i__5727__auto___28187 = G__28188;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__25996 = conformed_args__24506__auto__;
var map__25996__$1 = cljs.core.__destructure_map(map__25996);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq25995){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25995));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28189 = arguments.length;
var i__5727__auto___28190 = (0);
while(true){
if((i__5727__auto___28190 < len__5726__auto___28189)){
args__5732__auto__.push((arguments[i__5727__auto___28190]));

var G__28192 = (i__5727__auto___28190 + (1));
i__5727__auto___28190 = G__28192;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26002 = conformed_args__24506__auto__;
var map__26002__$1 = cljs.core.__destructure_map(map__26002);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq25999){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25999));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28197 = arguments.length;
var i__5727__auto___28199 = (0);
while(true){
if((i__5727__auto___28199 < len__5726__auto___28197)){
args__5732__auto__.push((arguments[i__5727__auto___28199]));

var G__28200 = (i__5727__auto___28199 + (1));
i__5727__auto___28199 = G__28200;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26009 = conformed_args__24506__auto__;
var map__26009__$1 = cljs.core.__destructure_map(map__26009);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq26006){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28204 = arguments.length;
var i__5727__auto___28205 = (0);
while(true){
if((i__5727__auto___28205 < len__5726__auto___28204)){
args__5732__auto__.push((arguments[i__5727__auto___28205]));

var G__28206 = (i__5727__auto___28205 + (1));
i__5727__auto___28205 = G__28206;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26025 = conformed_args__24506__auto__;
var map__26025__$1 = cljs.core.__destructure_map(map__26025);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq26019){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26019));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28208 = arguments.length;
var i__5727__auto___28209 = (0);
while(true){
if((i__5727__auto___28209 < len__5726__auto___28208)){
args__5732__auto__.push((arguments[i__5727__auto___28209]));

var G__28210 = (i__5727__auto___28209 + (1));
i__5727__auto___28209 = G__28210;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26035 = conformed_args__24506__auto__;
var map__26035__$1 = cljs.core.__destructure_map(map__26035);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq26030){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26030));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28212 = arguments.length;
var i__5727__auto___28213 = (0);
while(true){
if((i__5727__auto___28213 < len__5726__auto___28212)){
args__5732__auto__.push((arguments[i__5727__auto___28213]));

var G__28214 = (i__5727__auto___28213 + (1));
i__5727__auto___28213 = G__28214;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26039 = conformed_args__24506__auto__;
var map__26039__$1 = cljs.core.__destructure_map(map__26039);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq26036){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26036));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28219 = arguments.length;
var i__5727__auto___28222 = (0);
while(true){
if((i__5727__auto___28222 < len__5726__auto___28219)){
args__5732__auto__.push((arguments[i__5727__auto___28222]));

var G__28224 = (i__5727__auto___28222 + (1));
i__5727__auto___28222 = G__28224;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26044 = conformed_args__24506__auto__;
var map__26044__$1 = cljs.core.__destructure_map(map__26044);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq26042){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28228 = arguments.length;
var i__5727__auto___28229 = (0);
while(true){
if((i__5727__auto___28229 < len__5726__auto___28228)){
args__5732__auto__.push((arguments[i__5727__auto___28229]));

var G__28230 = (i__5727__auto___28229 + (1));
i__5727__auto___28229 = G__28230;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26050 = conformed_args__24506__auto__;
var map__26050__$1 = cljs.core.__destructure_map(map__26050);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq26049){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26049));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28231 = arguments.length;
var i__5727__auto___28232 = (0);
while(true){
if((i__5727__auto___28232 < len__5726__auto___28231)){
args__5732__auto__.push((arguments[i__5727__auto___28232]));

var G__28234 = (i__5727__auto___28232 + (1));
i__5727__auto___28232 = G__28234;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26054 = conformed_args__24506__auto__;
var map__26054__$1 = cljs.core.__destructure_map(map__26054);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq26051){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26051));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28236 = arguments.length;
var i__5727__auto___28237 = (0);
while(true){
if((i__5727__auto___28237 < len__5726__auto___28236)){
args__5732__auto__.push((arguments[i__5727__auto___28237]));

var G__28239 = (i__5727__auto___28237 + (1));
i__5727__auto___28237 = G__28239;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26057 = conformed_args__24506__auto__;
var map__26057__$1 = cljs.core.__destructure_map(map__26057);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq26055){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26055));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28243 = arguments.length;
var i__5727__auto___28244 = (0);
while(true){
if((i__5727__auto___28244 < len__5726__auto___28243)){
args__5732__auto__.push((arguments[i__5727__auto___28244]));

var G__28246 = (i__5727__auto___28244 + (1));
i__5727__auto___28244 = G__28246;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26062 = conformed_args__24506__auto__;
var map__26062__$1 = cljs.core.__destructure_map(map__26062);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq26060){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26060));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28249 = arguments.length;
var i__5727__auto___28250 = (0);
while(true){
if((i__5727__auto___28250 < len__5726__auto___28249)){
args__5732__auto__.push((arguments[i__5727__auto___28250]));

var G__28251 = (i__5727__auto___28250 + (1));
i__5727__auto___28250 = G__28251;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26064 = conformed_args__24506__auto__;
var map__26064__$1 = cljs.core.__destructure_map(map__26064);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26064__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26064__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26064__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq26063){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26063));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28259 = arguments.length;
var i__5727__auto___28260 = (0);
while(true){
if((i__5727__auto___28260 < len__5726__auto___28259)){
args__5732__auto__.push((arguments[i__5727__auto___28260]));

var G__28265 = (i__5727__auto___28260 + (1));
i__5727__auto___28260 = G__28265;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26073 = conformed_args__24506__auto__;
var map__26073__$1 = cljs.core.__destructure_map(map__26073);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq26068){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26068));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28268 = arguments.length;
var i__5727__auto___28269 = (0);
while(true){
if((i__5727__auto___28269 < len__5726__auto___28268)){
args__5732__auto__.push((arguments[i__5727__auto___28269]));

var G__28270 = (i__5727__auto___28269 + (1));
i__5727__auto___28269 = G__28270;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26078 = conformed_args__24506__auto__;
var map__26078__$1 = cljs.core.__destructure_map(map__26078);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq26075){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26075));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28271 = arguments.length;
var i__5727__auto___28272 = (0);
while(true){
if((i__5727__auto___28272 < len__5726__auto___28271)){
args__5732__auto__.push((arguments[i__5727__auto___28272]));

var G__28274 = (i__5727__auto___28272 + (1));
i__5727__auto___28272 = G__28274;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26085 = conformed_args__24506__auto__;
var map__26085__$1 = cljs.core.__destructure_map(map__26085);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq26081){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26081));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28280 = arguments.length;
var i__5727__auto___28281 = (0);
while(true){
if((i__5727__auto___28281 < len__5726__auto___28280)){
args__5732__auto__.push((arguments[i__5727__auto___28281]));

var G__28282 = (i__5727__auto___28281 + (1));
i__5727__auto___28281 = G__28282;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26091 = conformed_args__24506__auto__;
var map__26091__$1 = cljs.core.__destructure_map(map__26091);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq26088){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26088));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28283 = arguments.length;
var i__5727__auto___28284 = (0);
while(true){
if((i__5727__auto___28284 < len__5726__auto___28283)){
args__5732__auto__.push((arguments[i__5727__auto___28284]));

var G__28285 = (i__5727__auto___28284 + (1));
i__5727__auto___28284 = G__28285;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26108 = conformed_args__24506__auto__;
var map__26108__$1 = cljs.core.__destructure_map(map__26108);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq26105){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26105));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28293 = arguments.length;
var i__5727__auto___28294 = (0);
while(true){
if((i__5727__auto___28294 < len__5726__auto___28293)){
args__5732__auto__.push((arguments[i__5727__auto___28294]));

var G__28295 = (i__5727__auto___28294 + (1));
i__5727__auto___28294 = G__28295;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26113 = conformed_args__24506__auto__;
var map__26113__$1 = cljs.core.__destructure_map(map__26113);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq26111){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26111));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28303 = arguments.length;
var i__5727__auto___28304 = (0);
while(true){
if((i__5727__auto___28304 < len__5726__auto___28303)){
args__5732__auto__.push((arguments[i__5727__auto___28304]));

var G__28305 = (i__5727__auto___28304 + (1));
i__5727__auto___28304 = G__28305;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26118 = conformed_args__24506__auto__;
var map__26118__$1 = cljs.core.__destructure_map(map__26118);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq26116){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26116));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28310 = arguments.length;
var i__5727__auto___28311 = (0);
while(true){
if((i__5727__auto___28311 < len__5726__auto___28310)){
args__5732__auto__.push((arguments[i__5727__auto___28311]));

var G__28312 = (i__5727__auto___28311 + (1));
i__5727__auto___28311 = G__28312;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26122 = conformed_args__24506__auto__;
var map__26122__$1 = cljs.core.__destructure_map(map__26122);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq26120){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26120));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28321 = arguments.length;
var i__5727__auto___28322 = (0);
while(true){
if((i__5727__auto___28322 < len__5726__auto___28321)){
args__5732__auto__.push((arguments[i__5727__auto___28322]));

var G__28323 = (i__5727__auto___28322 + (1));
i__5727__auto___28322 = G__28323;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26128 = conformed_args__24506__auto__;
var map__26128__$1 = cljs.core.__destructure_map(map__26128);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq26125){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26125));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28326 = arguments.length;
var i__5727__auto___28328 = (0);
while(true){
if((i__5727__auto___28328 < len__5726__auto___28326)){
args__5732__auto__.push((arguments[i__5727__auto___28328]));

var G__28330 = (i__5727__auto___28328 + (1));
i__5727__auto___28328 = G__28330;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26133 = conformed_args__24506__auto__;
var map__26133__$1 = cljs.core.__destructure_map(map__26133);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq26131){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26131));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28332 = arguments.length;
var i__5727__auto___28333 = (0);
while(true){
if((i__5727__auto___28333 < len__5726__auto___28332)){
args__5732__auto__.push((arguments[i__5727__auto___28333]));

var G__28334 = (i__5727__auto___28333 + (1));
i__5727__auto___28333 = G__28334;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26138 = conformed_args__24506__auto__;
var map__26138__$1 = cljs.core.__destructure_map(map__26138);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq26136){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26136));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28337 = arguments.length;
var i__5727__auto___28338 = (0);
while(true){
if((i__5727__auto___28338 < len__5726__auto___28337)){
args__5732__auto__.push((arguments[i__5727__auto___28338]));

var G__28339 = (i__5727__auto___28338 + (1));
i__5727__auto___28338 = G__28339;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26144 = conformed_args__24506__auto__;
var map__26144__$1 = cljs.core.__destructure_map(map__26144);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26144__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26144__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26144__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq26141){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26141));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28343 = arguments.length;
var i__5727__auto___28344 = (0);
while(true){
if((i__5727__auto___28344 < len__5726__auto___28343)){
args__5732__auto__.push((arguments[i__5727__auto___28344]));

var G__28346 = (i__5727__auto___28344 + (1));
i__5727__auto___28344 = G__28346;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26148 = conformed_args__24506__auto__;
var map__26148__$1 = cljs.core.__destructure_map(map__26148);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq26146){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26146));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28350 = arguments.length;
var i__5727__auto___28352 = (0);
while(true){
if((i__5727__auto___28352 < len__5726__auto___28350)){
args__5732__auto__.push((arguments[i__5727__auto___28352]));

var G__28353 = (i__5727__auto___28352 + (1));
i__5727__auto___28352 = G__28353;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26154 = conformed_args__24506__auto__;
var map__26154__$1 = cljs.core.__destructure_map(map__26154);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq26151){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26151));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28356 = arguments.length;
var i__5727__auto___28357 = (0);
while(true){
if((i__5727__auto___28357 < len__5726__auto___28356)){
args__5732__auto__.push((arguments[i__5727__auto___28357]));

var G__28358 = (i__5727__auto___28357 + (1));
i__5727__auto___28357 = G__28358;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26159 = conformed_args__24506__auto__;
var map__26159__$1 = cljs.core.__destructure_map(map__26159);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26159__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26159__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq26156){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26156));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28361 = arguments.length;
var i__5727__auto___28362 = (0);
while(true){
if((i__5727__auto___28362 < len__5726__auto___28361)){
args__5732__auto__.push((arguments[i__5727__auto___28362]));

var G__28364 = (i__5727__auto___28362 + (1));
i__5727__auto___28362 = G__28364;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26163 = conformed_args__24506__auto__;
var map__26163__$1 = cljs.core.__destructure_map(map__26163);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq26161){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26161));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28368 = arguments.length;
var i__5727__auto___28369 = (0);
while(true){
if((i__5727__auto___28369 < len__5726__auto___28368)){
args__5732__auto__.push((arguments[i__5727__auto___28369]));

var G__28370 = (i__5727__auto___28369 + (1));
i__5727__auto___28369 = G__28370;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26165 = conformed_args__24506__auto__;
var map__26165__$1 = cljs.core.__destructure_map(map__26165);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq26164){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26164));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28375 = arguments.length;
var i__5727__auto___28377 = (0);
while(true){
if((i__5727__auto___28377 < len__5726__auto___28375)){
args__5732__auto__.push((arguments[i__5727__auto___28377]));

var G__28379 = (i__5727__auto___28377 + (1));
i__5727__auto___28377 = G__28379;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26167 = conformed_args__24506__auto__;
var map__26167__$1 = cljs.core.__destructure_map(map__26167);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq26166){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26166));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28386 = arguments.length;
var i__5727__auto___28387 = (0);
while(true){
if((i__5727__auto___28387 < len__5726__auto___28386)){
args__5732__auto__.push((arguments[i__5727__auto___28387]));

var G__28388 = (i__5727__auto___28387 + (1));
i__5727__auto___28387 = G__28388;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26169 = conformed_args__24506__auto__;
var map__26169__$1 = cljs.core.__destructure_map(map__26169);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq26168){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26168));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28396 = arguments.length;
var i__5727__auto___28397 = (0);
while(true){
if((i__5727__auto___28397 < len__5726__auto___28396)){
args__5732__auto__.push((arguments[i__5727__auto___28397]));

var G__28398 = (i__5727__auto___28397 + (1));
i__5727__auto___28397 = G__28398;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26179 = conformed_args__24506__auto__;
var map__26179__$1 = cljs.core.__destructure_map(map__26179);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq26170){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26170));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28403 = arguments.length;
var i__5727__auto___28404 = (0);
while(true){
if((i__5727__auto___28404 < len__5726__auto___28403)){
args__5732__auto__.push((arguments[i__5727__auto___28404]));

var G__28405 = (i__5727__auto___28404 + (1));
i__5727__auto___28404 = G__28405;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26227 = conformed_args__24506__auto__;
var map__26227__$1 = cljs.core.__destructure_map(map__26227);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq26198){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26198));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28411 = arguments.length;
var i__5727__auto___28412 = (0);
while(true){
if((i__5727__auto___28412 < len__5726__auto___28411)){
args__5732__auto__.push((arguments[i__5727__auto___28412]));

var G__28414 = (i__5727__auto___28412 + (1));
i__5727__auto___28412 = G__28414;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26234 = conformed_args__24506__auto__;
var map__26234__$1 = cljs.core.__destructure_map(map__26234);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq26232){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26232));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28419 = arguments.length;
var i__5727__auto___28421 = (0);
while(true){
if((i__5727__auto___28421 < len__5726__auto___28419)){
args__5732__auto__.push((arguments[i__5727__auto___28421]));

var G__28423 = (i__5727__auto___28421 + (1));
i__5727__auto___28421 = G__28423;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26247 = conformed_args__24506__auto__;
var map__26247__$1 = cljs.core.__destructure_map(map__26247);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq26240){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26240));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28428 = arguments.length;
var i__5727__auto___28429 = (0);
while(true){
if((i__5727__auto___28429 < len__5726__auto___28428)){
args__5732__auto__.push((arguments[i__5727__auto___28429]));

var G__28430 = (i__5727__auto___28429 + (1));
i__5727__auto___28429 = G__28430;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26262 = conformed_args__24506__auto__;
var map__26262__$1 = cljs.core.__destructure_map(map__26262);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq26248){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26248));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28434 = arguments.length;
var i__5727__auto___28435 = (0);
while(true){
if((i__5727__auto___28435 < len__5726__auto___28434)){
args__5732__auto__.push((arguments[i__5727__auto___28435]));

var G__28437 = (i__5727__auto___28435 + (1));
i__5727__auto___28435 = G__28437;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26305 = conformed_args__24506__auto__;
var map__26305__$1 = cljs.core.__destructure_map(map__26305);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq26280){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26280));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28438 = arguments.length;
var i__5727__auto___28439 = (0);
while(true){
if((i__5727__auto___28439 < len__5726__auto___28438)){
args__5732__auto__.push((arguments[i__5727__auto___28439]));

var G__28440 = (i__5727__auto___28439 + (1));
i__5727__auto___28439 = G__28440;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26321 = conformed_args__24506__auto__;
var map__26321__$1 = cljs.core.__destructure_map(map__26321);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq26315){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28442 = arguments.length;
var i__5727__auto___28443 = (0);
while(true){
if((i__5727__auto___28443 < len__5726__auto___28442)){
args__5732__auto__.push((arguments[i__5727__auto___28443]));

var G__28444 = (i__5727__auto___28443 + (1));
i__5727__auto___28443 = G__28444;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26328 = conformed_args__24506__auto__;
var map__26328__$1 = cljs.core.__destructure_map(map__26328);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq26325){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28448 = arguments.length;
var i__5727__auto___28449 = (0);
while(true){
if((i__5727__auto___28449 < len__5726__auto___28448)){
args__5732__auto__.push((arguments[i__5727__auto___28449]));

var G__28452 = (i__5727__auto___28449 + (1));
i__5727__auto___28449 = G__28452;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26342 = conformed_args__24506__auto__;
var map__26342__$1 = cljs.core.__destructure_map(map__26342);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq26337){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26337));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28463 = arguments.length;
var i__5727__auto___28464 = (0);
while(true){
if((i__5727__auto___28464 < len__5726__auto___28463)){
args__5732__auto__.push((arguments[i__5727__auto___28464]));

var G__28465 = (i__5727__auto___28464 + (1));
i__5727__auto___28464 = G__28465;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26357 = conformed_args__24506__auto__;
var map__26357__$1 = cljs.core.__destructure_map(map__26357);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26357__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26357__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq26349){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26349));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28468 = arguments.length;
var i__5727__auto___28469 = (0);
while(true){
if((i__5727__auto___28469 < len__5726__auto___28468)){
args__5732__auto__.push((arguments[i__5727__auto___28469]));

var G__28471 = (i__5727__auto___28469 + (1));
i__5727__auto___28469 = G__28471;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26370 = conformed_args__24506__auto__;
var map__26370__$1 = cljs.core.__destructure_map(map__26370);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq26363){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26363));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28474 = arguments.length;
var i__5727__auto___28475 = (0);
while(true){
if((i__5727__auto___28475 < len__5726__auto___28474)){
args__5732__auto__.push((arguments[i__5727__auto___28475]));

var G__28476 = (i__5727__auto___28475 + (1));
i__5727__auto___28475 = G__28476;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26382 = conformed_args__24506__auto__;
var map__26382__$1 = cljs.core.__destructure_map(map__26382);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq26377){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26377));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28477 = arguments.length;
var i__5727__auto___28478 = (0);
while(true){
if((i__5727__auto___28478 < len__5726__auto___28477)){
args__5732__auto__.push((arguments[i__5727__auto___28478]));

var G__28479 = (i__5727__auto___28478 + (1));
i__5727__auto___28478 = G__28479;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26394 = conformed_args__24506__auto__;
var map__26394__$1 = cljs.core.__destructure_map(map__26394);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq26389){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26389));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28480 = arguments.length;
var i__5727__auto___28481 = (0);
while(true){
if((i__5727__auto___28481 < len__5726__auto___28480)){
args__5732__auto__.push((arguments[i__5727__auto___28481]));

var G__28482 = (i__5727__auto___28481 + (1));
i__5727__auto___28481 = G__28482;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26407 = conformed_args__24506__auto__;
var map__26407__$1 = cljs.core.__destructure_map(map__26407);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq26404){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26404));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28489 = arguments.length;
var i__5727__auto___28490 = (0);
while(true){
if((i__5727__auto___28490 < len__5726__auto___28489)){
args__5732__auto__.push((arguments[i__5727__auto___28490]));

var G__28491 = (i__5727__auto___28490 + (1));
i__5727__auto___28490 = G__28491;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26413 = conformed_args__24506__auto__;
var map__26413__$1 = cljs.core.__destructure_map(map__26413);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq26409){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28499 = arguments.length;
var i__5727__auto___28500 = (0);
while(true){
if((i__5727__auto___28500 < len__5726__auto___28499)){
args__5732__auto__.push((arguments[i__5727__auto___28500]));

var G__28501 = (i__5727__auto___28500 + (1));
i__5727__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26434 = conformed_args__24506__auto__;
var map__26434__$1 = cljs.core.__destructure_map(map__26434);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq26425){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26425));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28502 = arguments.length;
var i__5727__auto___28503 = (0);
while(true){
if((i__5727__auto___28503 < len__5726__auto___28502)){
args__5732__auto__.push((arguments[i__5727__auto___28503]));

var G__28504 = (i__5727__auto___28503 + (1));
i__5727__auto___28503 = G__28504;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26472 = conformed_args__24506__auto__;
var map__26472__$1 = cljs.core.__destructure_map(map__26472);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq26464){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26464));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28507 = arguments.length;
var i__5727__auto___28508 = (0);
while(true){
if((i__5727__auto___28508 < len__5726__auto___28507)){
args__5732__auto__.push((arguments[i__5727__auto___28508]));

var G__28509 = (i__5727__auto___28508 + (1));
i__5727__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26482 = conformed_args__24506__auto__;
var map__26482__$1 = cljs.core.__destructure_map(map__26482);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq26477){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28518 = arguments.length;
var i__5727__auto___28519 = (0);
while(true){
if((i__5727__auto___28519 < len__5726__auto___28518)){
args__5732__auto__.push((arguments[i__5727__auto___28519]));

var G__28520 = (i__5727__auto___28519 + (1));
i__5727__auto___28519 = G__28520;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26493 = conformed_args__24506__auto__;
var map__26493__$1 = cljs.core.__destructure_map(map__26493);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq26485){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28524 = arguments.length;
var i__5727__auto___28526 = (0);
while(true){
if((i__5727__auto___28526 < len__5726__auto___28524)){
args__5732__auto__.push((arguments[i__5727__auto___28526]));

var G__28527 = (i__5727__auto___28526 + (1));
i__5727__auto___28526 = G__28527;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26497 = conformed_args__24506__auto__;
var map__26497__$1 = cljs.core.__destructure_map(map__26497);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq26495){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26495));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28532 = arguments.length;
var i__5727__auto___28533 = (0);
while(true){
if((i__5727__auto___28533 < len__5726__auto___28532)){
args__5732__auto__.push((arguments[i__5727__auto___28533]));

var G__28536 = (i__5727__auto___28533 + (1));
i__5727__auto___28533 = G__28536;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26518 = conformed_args__24506__auto__;
var map__26518__$1 = cljs.core.__destructure_map(map__26518);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq26503){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26503));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28541 = arguments.length;
var i__5727__auto___28542 = (0);
while(true){
if((i__5727__auto___28542 < len__5726__auto___28541)){
args__5732__auto__.push((arguments[i__5727__auto___28542]));

var G__28543 = (i__5727__auto___28542 + (1));
i__5727__auto___28542 = G__28543;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26563 = conformed_args__24506__auto__;
var map__26563__$1 = cljs.core.__destructure_map(map__26563);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26563__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26563__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26563__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq26546){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26546));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28547 = arguments.length;
var i__5727__auto___28548 = (0);
while(true){
if((i__5727__auto___28548 < len__5726__auto___28547)){
args__5732__auto__.push((arguments[i__5727__auto___28548]));

var G__28549 = (i__5727__auto___28548 + (1));
i__5727__auto___28548 = G__28549;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26583 = conformed_args__24506__auto__;
var map__26583__$1 = cljs.core.__destructure_map(map__26583);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq26576){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26576));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28550 = arguments.length;
var i__5727__auto___28552 = (0);
while(true){
if((i__5727__auto___28552 < len__5726__auto___28550)){
args__5732__auto__.push((arguments[i__5727__auto___28552]));

var G__28554 = (i__5727__auto___28552 + (1));
i__5727__auto___28552 = G__28554;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26588 = conformed_args__24506__auto__;
var map__26588__$1 = cljs.core.__destructure_map(map__26588);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq26584){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26584));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28558 = arguments.length;
var i__5727__auto___28559 = (0);
while(true){
if((i__5727__auto___28559 < len__5726__auto___28558)){
args__5732__auto__.push((arguments[i__5727__auto___28559]));

var G__28560 = (i__5727__auto___28559 + (1));
i__5727__auto___28559 = G__28560;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26596 = conformed_args__24506__auto__;
var map__26596__$1 = cljs.core.__destructure_map(map__26596);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq26595){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28561 = arguments.length;
var i__5727__auto___28562 = (0);
while(true){
if((i__5727__auto___28562 < len__5726__auto___28561)){
args__5732__auto__.push((arguments[i__5727__auto___28562]));

var G__28563 = (i__5727__auto___28562 + (1));
i__5727__auto___28562 = G__28563;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26601 = conformed_args__24506__auto__;
var map__26601__$1 = cljs.core.__destructure_map(map__26601);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq26599){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28567 = arguments.length;
var i__5727__auto___28568 = (0);
while(true){
if((i__5727__auto___28568 < len__5726__auto___28567)){
args__5732__auto__.push((arguments[i__5727__auto___28568]));

var G__28569 = (i__5727__auto___28568 + (1));
i__5727__auto___28568 = G__28569;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26608 = conformed_args__24506__auto__;
var map__26608__$1 = cljs.core.__destructure_map(map__26608);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq26605){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28574 = arguments.length;
var i__5727__auto___28575 = (0);
while(true){
if((i__5727__auto___28575 < len__5726__auto___28574)){
args__5732__auto__.push((arguments[i__5727__auto___28575]));

var G__28576 = (i__5727__auto___28575 + (1));
i__5727__auto___28575 = G__28576;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26615 = conformed_args__24506__auto__;
var map__26615__$1 = cljs.core.__destructure_map(map__26615);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq26611){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26611));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28577 = arguments.length;
var i__5727__auto___28578 = (0);
while(true){
if((i__5727__auto___28578 < len__5726__auto___28577)){
args__5732__auto__.push((arguments[i__5727__auto___28578]));

var G__28579 = (i__5727__auto___28578 + (1));
i__5727__auto___28578 = G__28579;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26621 = conformed_args__24506__auto__;
var map__26621__$1 = cljs.core.__destructure_map(map__26621);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq26620){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26620));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28580 = arguments.length;
var i__5727__auto___28581 = (0);
while(true){
if((i__5727__auto___28581 < len__5726__auto___28580)){
args__5732__auto__.push((arguments[i__5727__auto___28581]));

var G__28583 = (i__5727__auto___28581 + (1));
i__5727__auto___28581 = G__28583;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26628 = conformed_args__24506__auto__;
var map__26628__$1 = cljs.core.__destructure_map(map__26628);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq26627){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28587 = arguments.length;
var i__5727__auto___28588 = (0);
while(true){
if((i__5727__auto___28588 < len__5726__auto___28587)){
args__5732__auto__.push((arguments[i__5727__auto___28588]));

var G__28589 = (i__5727__auto___28588 + (1));
i__5727__auto___28588 = G__28589;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26631 = conformed_args__24506__auto__;
var map__26631__$1 = cljs.core.__destructure_map(map__26631);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26631__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26631__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26631__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq26629){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26629));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28594 = arguments.length;
var i__5727__auto___28595 = (0);
while(true){
if((i__5727__auto___28595 < len__5726__auto___28594)){
args__5732__auto__.push((arguments[i__5727__auto___28595]));

var G__28596 = (i__5727__auto___28595 + (1));
i__5727__auto___28595 = G__28596;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26634 = conformed_args__24506__auto__;
var map__26634__$1 = cljs.core.__destructure_map(map__26634);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq26633){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26633));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28600 = arguments.length;
var i__5727__auto___28601 = (0);
while(true){
if((i__5727__auto___28601 < len__5726__auto___28600)){
args__5732__auto__.push((arguments[i__5727__auto___28601]));

var G__28602 = (i__5727__auto___28601 + (1));
i__5727__auto___28601 = G__28602;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26639 = conformed_args__24506__auto__;
var map__26639__$1 = cljs.core.__destructure_map(map__26639);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq26636){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26636));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28606 = arguments.length;
var i__5727__auto___28607 = (0);
while(true){
if((i__5727__auto___28607 < len__5726__auto___28606)){
args__5732__auto__.push((arguments[i__5727__auto___28607]));

var G__28608 = (i__5727__auto___28607 + (1));
i__5727__auto___28607 = G__28608;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26647 = conformed_args__24506__auto__;
var map__26647__$1 = cljs.core.__destructure_map(map__26647);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq26645){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28612 = arguments.length;
var i__5727__auto___28613 = (0);
while(true){
if((i__5727__auto___28613 < len__5726__auto___28612)){
args__5732__auto__.push((arguments[i__5727__auto___28613]));

var G__28614 = (i__5727__auto___28613 + (1));
i__5727__auto___28613 = G__28614;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26654 = conformed_args__24506__auto__;
var map__26654__$1 = cljs.core.__destructure_map(map__26654);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq26651){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26651));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28620 = arguments.length;
var i__5727__auto___28621 = (0);
while(true){
if((i__5727__auto___28621 < len__5726__auto___28620)){
args__5732__auto__.push((arguments[i__5727__auto___28621]));

var G__28623 = (i__5727__auto___28621 + (1));
i__5727__auto___28621 = G__28623;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26660 = conformed_args__24506__auto__;
var map__26660__$1 = cljs.core.__destructure_map(map__26660);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq26658){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28625 = arguments.length;
var i__5727__auto___28626 = (0);
while(true){
if((i__5727__auto___28626 < len__5726__auto___28625)){
args__5732__auto__.push((arguments[i__5727__auto___28626]));

var G__28627 = (i__5727__auto___28626 + (1));
i__5727__auto___28626 = G__28627;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26666 = conformed_args__24506__auto__;
var map__26666__$1 = cljs.core.__destructure_map(map__26666);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq26665){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28630 = arguments.length;
var i__5727__auto___28631 = (0);
while(true){
if((i__5727__auto___28631 < len__5726__auto___28630)){
args__5732__auto__.push((arguments[i__5727__auto___28631]));

var G__28632 = (i__5727__auto___28631 + (1));
i__5727__auto___28631 = G__28632;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26670 = conformed_args__24506__auto__;
var map__26670__$1 = cljs.core.__destructure_map(map__26670);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq26669){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26669));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28638 = arguments.length;
var i__5727__auto___28639 = (0);
while(true){
if((i__5727__auto___28639 < len__5726__auto___28638)){
args__5732__auto__.push((arguments[i__5727__auto___28639]));

var G__28640 = (i__5727__auto___28639 + (1));
i__5727__auto___28639 = G__28640;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26676 = conformed_args__24506__auto__;
var map__26676__$1 = cljs.core.__destructure_map(map__26676);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq26673){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26673));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28646 = arguments.length;
var i__5727__auto___28647 = (0);
while(true){
if((i__5727__auto___28647 < len__5726__auto___28646)){
args__5732__auto__.push((arguments[i__5727__auto___28647]));

var G__28648 = (i__5727__auto___28647 + (1));
i__5727__auto___28647 = G__28648;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26680 = conformed_args__24506__auto__;
var map__26680__$1 = cljs.core.__destructure_map(map__26680);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq26677){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26677));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28649 = arguments.length;
var i__5727__auto___28650 = (0);
while(true){
if((i__5727__auto___28650 < len__5726__auto___28649)){
args__5732__auto__.push((arguments[i__5727__auto___28650]));

var G__28651 = (i__5727__auto___28650 + (1));
i__5727__auto___28650 = G__28651;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26686 = conformed_args__24506__auto__;
var map__26686__$1 = cljs.core.__destructure_map(map__26686);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq26685){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26685));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28653 = arguments.length;
var i__5727__auto___28654 = (0);
while(true){
if((i__5727__auto___28654 < len__5726__auto___28653)){
args__5732__auto__.push((arguments[i__5727__auto___28654]));

var G__28655 = (i__5727__auto___28654 + (1));
i__5727__auto___28654 = G__28655;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26690 = conformed_args__24506__auto__;
var map__26690__$1 = cljs.core.__destructure_map(map__26690);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq26688){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26688));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28657 = arguments.length;
var i__5727__auto___28658 = (0);
while(true){
if((i__5727__auto___28658 < len__5726__auto___28657)){
args__5732__auto__.push((arguments[i__5727__auto___28658]));

var G__28659 = (i__5727__auto___28658 + (1));
i__5727__auto___28658 = G__28659;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26696 = conformed_args__24506__auto__;
var map__26696__$1 = cljs.core.__destructure_map(map__26696);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq26693){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26693));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28661 = arguments.length;
var i__5727__auto___28662 = (0);
while(true){
if((i__5727__auto___28662 < len__5726__auto___28661)){
args__5732__auto__.push((arguments[i__5727__auto___28662]));

var G__28663 = (i__5727__auto___28662 + (1));
i__5727__auto___28662 = G__28663;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26702 = conformed_args__24506__auto__;
var map__26702__$1 = cljs.core.__destructure_map(map__26702);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq26699){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28666 = arguments.length;
var i__5727__auto___28667 = (0);
while(true){
if((i__5727__auto___28667 < len__5726__auto___28666)){
args__5732__auto__.push((arguments[i__5727__auto___28667]));

var G__28668 = (i__5727__auto___28667 + (1));
i__5727__auto___28667 = G__28668;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26707 = conformed_args__24506__auto__;
var map__26707__$1 = cljs.core.__destructure_map(map__26707);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26707__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26707__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26707__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq26705){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28674 = arguments.length;
var i__5727__auto___28675 = (0);
while(true){
if((i__5727__auto___28675 < len__5726__auto___28674)){
args__5732__auto__.push((arguments[i__5727__auto___28675]));

var G__28676 = (i__5727__auto___28675 + (1));
i__5727__auto___28675 = G__28676;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26713 = conformed_args__24506__auto__;
var map__26713__$1 = cljs.core.__destructure_map(map__26713);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq26709){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28681 = arguments.length;
var i__5727__auto___28682 = (0);
while(true){
if((i__5727__auto___28682 < len__5726__auto___28681)){
args__5732__auto__.push((arguments[i__5727__auto___28682]));

var G__28684 = (i__5727__auto___28682 + (1));
i__5727__auto___28682 = G__28684;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26716 = conformed_args__24506__auto__;
var map__26716__$1 = cljs.core.__destructure_map(map__26716);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq26715){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28690 = arguments.length;
var i__5727__auto___28691 = (0);
while(true){
if((i__5727__auto___28691 < len__5726__auto___28690)){
args__5732__auto__.push((arguments[i__5727__auto___28691]));

var G__28692 = (i__5727__auto___28691 + (1));
i__5727__auto___28691 = G__28692;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26719 = conformed_args__24506__auto__;
var map__26719__$1 = cljs.core.__destructure_map(map__26719);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq26717){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28693 = arguments.length;
var i__5727__auto___28694 = (0);
while(true){
if((i__5727__auto___28694 < len__5726__auto___28693)){
args__5732__auto__.push((arguments[i__5727__auto___28694]));

var G__28695 = (i__5727__auto___28694 + (1));
i__5727__auto___28694 = G__28695;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26722 = conformed_args__24506__auto__;
var map__26722__$1 = cljs.core.__destructure_map(map__26722);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq26720){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26720));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28699 = arguments.length;
var i__5727__auto___28702 = (0);
while(true){
if((i__5727__auto___28702 < len__5726__auto___28699)){
args__5732__auto__.push((arguments[i__5727__auto___28702]));

var G__28703 = (i__5727__auto___28702 + (1));
i__5727__auto___28702 = G__28703;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26730 = conformed_args__24506__auto__;
var map__26730__$1 = cljs.core.__destructure_map(map__26730);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq26727){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26727));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28707 = arguments.length;
var i__5727__auto___28708 = (0);
while(true){
if((i__5727__auto___28708 < len__5726__auto___28707)){
args__5732__auto__.push((arguments[i__5727__auto___28708]));

var G__28709 = (i__5727__auto___28708 + (1));
i__5727__auto___28708 = G__28709;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26734 = conformed_args__24506__auto__;
var map__26734__$1 = cljs.core.__destructure_map(map__26734);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq26733){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26733));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28713 = arguments.length;
var i__5727__auto___28714 = (0);
while(true){
if((i__5727__auto___28714 < len__5726__auto___28713)){
args__5732__auto__.push((arguments[i__5727__auto___28714]));

var G__28715 = (i__5727__auto___28714 + (1));
i__5727__auto___28714 = G__28715;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26742 = conformed_args__24506__auto__;
var map__26742__$1 = cljs.core.__destructure_map(map__26742);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq26739){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26739));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28717 = arguments.length;
var i__5727__auto___28718 = (0);
while(true){
if((i__5727__auto___28718 < len__5726__auto___28717)){
args__5732__auto__.push((arguments[i__5727__auto___28718]));

var G__28719 = (i__5727__auto___28718 + (1));
i__5727__auto___28718 = G__28719;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26748 = conformed_args__24506__auto__;
var map__26748__$1 = cljs.core.__destructure_map(map__26748);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq26746){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28720 = arguments.length;
var i__5727__auto___28721 = (0);
while(true){
if((i__5727__auto___28721 < len__5726__auto___28720)){
args__5732__auto__.push((arguments[i__5727__auto___28721]));

var G__28722 = (i__5727__auto___28721 + (1));
i__5727__auto___28721 = G__28722;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26753 = conformed_args__24506__auto__;
var map__26753__$1 = cljs.core.__destructure_map(map__26753);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq26751){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28728 = arguments.length;
var i__5727__auto___28729 = (0);
while(true){
if((i__5727__auto___28729 < len__5726__auto___28728)){
args__5732__auto__.push((arguments[i__5727__auto___28729]));

var G__28730 = (i__5727__auto___28729 + (1));
i__5727__auto___28729 = G__28730;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26759 = conformed_args__24506__auto__;
var map__26759__$1 = cljs.core.__destructure_map(map__26759);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq26756){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28733 = arguments.length;
var i__5727__auto___28734 = (0);
while(true){
if((i__5727__auto___28734 < len__5726__auto___28733)){
args__5732__auto__.push((arguments[i__5727__auto___28734]));

var G__28735 = (i__5727__auto___28734 + (1));
i__5727__auto___28734 = G__28735;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26765 = conformed_args__24506__auto__;
var map__26765__$1 = cljs.core.__destructure_map(map__26765);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq26760){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28736 = arguments.length;
var i__5727__auto___28737 = (0);
while(true){
if((i__5727__auto___28737 < len__5726__auto___28736)){
args__5732__auto__.push((arguments[i__5727__auto___28737]));

var G__28739 = (i__5727__auto___28737 + (1));
i__5727__auto___28737 = G__28739;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26779 = conformed_args__24506__auto__;
var map__26779__$1 = cljs.core.__destructure_map(map__26779);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq26774){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26774));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28745 = arguments.length;
var i__5727__auto___28746 = (0);
while(true){
if((i__5727__auto___28746 < len__5726__auto___28745)){
args__5732__auto__.push((arguments[i__5727__auto___28746]));

var G__28747 = (i__5727__auto___28746 + (1));
i__5727__auto___28746 = G__28747;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26788 = conformed_args__24506__auto__;
var map__26788__$1 = cljs.core.__destructure_map(map__26788);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26788__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26788__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26788__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq26783){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26783));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28750 = arguments.length;
var i__5727__auto___28752 = (0);
while(true){
if((i__5727__auto___28752 < len__5726__auto___28750)){
args__5732__auto__.push((arguments[i__5727__auto___28752]));

var G__28753 = (i__5727__auto___28752 + (1));
i__5727__auto___28752 = G__28753;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26794 = conformed_args__24506__auto__;
var map__26794__$1 = cljs.core.__destructure_map(map__26794);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq26790){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26790));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28755 = arguments.length;
var i__5727__auto___28756 = (0);
while(true){
if((i__5727__auto___28756 < len__5726__auto___28755)){
args__5732__auto__.push((arguments[i__5727__auto___28756]));

var G__28757 = (i__5727__auto___28756 + (1));
i__5727__auto___28756 = G__28757;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26800 = conformed_args__24506__auto__;
var map__26800__$1 = cljs.core.__destructure_map(map__26800);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26800__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26800__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26800__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq26796){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28758 = arguments.length;
var i__5727__auto___28759 = (0);
while(true){
if((i__5727__auto___28759 < len__5726__auto___28758)){
args__5732__auto__.push((arguments[i__5727__auto___28759]));

var G__28761 = (i__5727__auto___28759 + (1));
i__5727__auto___28759 = G__28761;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26806 = conformed_args__24506__auto__;
var map__26806__$1 = cljs.core.__destructure_map(map__26806);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq26803){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28762 = arguments.length;
var i__5727__auto___28763 = (0);
while(true){
if((i__5727__auto___28763 < len__5726__auto___28762)){
args__5732__auto__.push((arguments[i__5727__auto___28763]));

var G__28764 = (i__5727__auto___28763 + (1));
i__5727__auto___28763 = G__28764;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26811 = conformed_args__24506__auto__;
var map__26811__$1 = cljs.core.__destructure_map(map__26811);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq26807){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26807));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28769 = arguments.length;
var i__5727__auto___28770 = (0);
while(true){
if((i__5727__auto___28770 < len__5726__auto___28769)){
args__5732__auto__.push((arguments[i__5727__auto___28770]));

var G__28773 = (i__5727__auto___28770 + (1));
i__5727__auto___28770 = G__28773;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26814 = conformed_args__24506__auto__;
var map__26814__$1 = cljs.core.__destructure_map(map__26814);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq26813){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26813));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28776 = arguments.length;
var i__5727__auto___28777 = (0);
while(true){
if((i__5727__auto___28777 < len__5726__auto___28776)){
args__5732__auto__.push((arguments[i__5727__auto___28777]));

var G__28778 = (i__5727__auto___28777 + (1));
i__5727__auto___28777 = G__28778;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26819 = conformed_args__24506__auto__;
var map__26819__$1 = cljs.core.__destructure_map(map__26819);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq26815){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26815));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28779 = arguments.length;
var i__5727__auto___28780 = (0);
while(true){
if((i__5727__auto___28780 < len__5726__auto___28779)){
args__5732__auto__.push((arguments[i__5727__auto___28780]));

var G__28781 = (i__5727__auto___28780 + (1));
i__5727__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26826 = conformed_args__24506__auto__;
var map__26826__$1 = cljs.core.__destructure_map(map__26826);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq26822){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28782 = arguments.length;
var i__5727__auto___28783 = (0);
while(true){
if((i__5727__auto___28783 < len__5726__auto___28782)){
args__5732__auto__.push((arguments[i__5727__auto___28783]));

var G__28786 = (i__5727__auto___28783 + (1));
i__5727__auto___28783 = G__28786;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26830 = conformed_args__24506__auto__;
var map__26830__$1 = cljs.core.__destructure_map(map__26830);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq26829){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26829));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28789 = arguments.length;
var i__5727__auto___28790 = (0);
while(true){
if((i__5727__auto___28790 < len__5726__auto___28789)){
args__5732__auto__.push((arguments[i__5727__auto___28790]));

var G__28792 = (i__5727__auto___28790 + (1));
i__5727__auto___28790 = G__28792;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26837 = conformed_args__24506__auto__;
var map__26837__$1 = cljs.core.__destructure_map(map__26837);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq26835){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26835));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28795 = arguments.length;
var i__5727__auto___28796 = (0);
while(true){
if((i__5727__auto___28796 < len__5726__auto___28795)){
args__5732__auto__.push((arguments[i__5727__auto___28796]));

var G__28798 = (i__5727__auto___28796 + (1));
i__5727__auto___28796 = G__28798;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26843 = conformed_args__24506__auto__;
var map__26843__$1 = cljs.core.__destructure_map(map__26843);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26843__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26843__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq26840){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28800 = arguments.length;
var i__5727__auto___28801 = (0);
while(true){
if((i__5727__auto___28801 < len__5726__auto___28800)){
args__5732__auto__.push((arguments[i__5727__auto___28801]));

var G__28802 = (i__5727__auto___28801 + (1));
i__5727__auto___28801 = G__28802;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26860 = conformed_args__24506__auto__;
var map__26860__$1 = cljs.core.__destructure_map(map__26860);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq26857){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28803 = arguments.length;
var i__5727__auto___28804 = (0);
while(true){
if((i__5727__auto___28804 < len__5726__auto___28803)){
args__5732__auto__.push((arguments[i__5727__auto___28804]));

var G__28805 = (i__5727__auto___28804 + (1));
i__5727__auto___28804 = G__28805;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26866 = conformed_args__24506__auto__;
var map__26866__$1 = cljs.core.__destructure_map(map__26866);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq26862){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26862));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28808 = arguments.length;
var i__5727__auto___28809 = (0);
while(true){
if((i__5727__auto___28809 < len__5726__auto___28808)){
args__5732__auto__.push((arguments[i__5727__auto___28809]));

var G__28810 = (i__5727__auto___28809 + (1));
i__5727__auto___28809 = G__28810;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26872 = conformed_args__24506__auto__;
var map__26872__$1 = cljs.core.__destructure_map(map__26872);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq26869){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26869));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28814 = arguments.length;
var i__5727__auto___28815 = (0);
while(true){
if((i__5727__auto___28815 < len__5726__auto___28814)){
args__5732__auto__.push((arguments[i__5727__auto___28815]));

var G__28817 = (i__5727__auto___28815 + (1));
i__5727__auto___28815 = G__28817;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26876 = conformed_args__24506__auto__;
var map__26876__$1 = cljs.core.__destructure_map(map__26876);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq26874){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26874));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28819 = arguments.length;
var i__5727__auto___28820 = (0);
while(true){
if((i__5727__auto___28820 < len__5726__auto___28819)){
args__5732__auto__.push((arguments[i__5727__auto___28820]));

var G__28821 = (i__5727__auto___28820 + (1));
i__5727__auto___28820 = G__28821;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26882 = conformed_args__24506__auto__;
var map__26882__$1 = cljs.core.__destructure_map(map__26882);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq26879){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28827 = arguments.length;
var i__5727__auto___28828 = (0);
while(true){
if((i__5727__auto___28828 < len__5726__auto___28827)){
args__5732__auto__.push((arguments[i__5727__auto___28828]));

var G__28829 = (i__5727__auto___28828 + (1));
i__5727__auto___28828 = G__28829;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26887 = conformed_args__24506__auto__;
var map__26887__$1 = cljs.core.__destructure_map(map__26887);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq26884){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26884));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28832 = arguments.length;
var i__5727__auto___28833 = (0);
while(true){
if((i__5727__auto___28833 < len__5726__auto___28832)){
args__5732__auto__.push((arguments[i__5727__auto___28833]));

var G__28834 = (i__5727__auto___28833 + (1));
i__5727__auto___28833 = G__28834;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26891 = conformed_args__24506__auto__;
var map__26891__$1 = cljs.core.__destructure_map(map__26891);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq26889){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26889));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28837 = arguments.length;
var i__5727__auto___28839 = (0);
while(true){
if((i__5727__auto___28839 < len__5726__auto___28837)){
args__5732__auto__.push((arguments[i__5727__auto___28839]));

var G__28840 = (i__5727__auto___28839 + (1));
i__5727__auto___28839 = G__28840;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26897 = conformed_args__24506__auto__;
var map__26897__$1 = cljs.core.__destructure_map(map__26897);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq26894){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26894));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28841 = arguments.length;
var i__5727__auto___28843 = (0);
while(true){
if((i__5727__auto___28843 < len__5726__auto___28841)){
args__5732__auto__.push((arguments[i__5727__auto___28843]));

var G__28845 = (i__5727__auto___28843 + (1));
i__5727__auto___28843 = G__28845;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26903 = conformed_args__24506__auto__;
var map__26903__$1 = cljs.core.__destructure_map(map__26903);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq26900){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28847 = arguments.length;
var i__5727__auto___28848 = (0);
while(true){
if((i__5727__auto___28848 < len__5726__auto___28847)){
args__5732__auto__.push((arguments[i__5727__auto___28848]));

var G__28849 = (i__5727__auto___28848 + (1));
i__5727__auto___28848 = G__28849;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26909 = conformed_args__24506__auto__;
var map__26909__$1 = cljs.core.__destructure_map(map__26909);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq26906){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26906));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28852 = arguments.length;
var i__5727__auto___28853 = (0);
while(true){
if((i__5727__auto___28853 < len__5726__auto___28852)){
args__5732__auto__.push((arguments[i__5727__auto___28853]));

var G__28856 = (i__5727__auto___28853 + (1));
i__5727__auto___28853 = G__28856;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26914 = conformed_args__24506__auto__;
var map__26914__$1 = cljs.core.__destructure_map(map__26914);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq26912){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26912));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28858 = arguments.length;
var i__5727__auto___28859 = (0);
while(true){
if((i__5727__auto___28859 < len__5726__auto___28858)){
args__5732__auto__.push((arguments[i__5727__auto___28859]));

var G__28860 = (i__5727__auto___28859 + (1));
i__5727__auto___28859 = G__28860;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26918 = conformed_args__24506__auto__;
var map__26918__$1 = cljs.core.__destructure_map(map__26918);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq26916){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28863 = arguments.length;
var i__5727__auto___28864 = (0);
while(true){
if((i__5727__auto___28864 < len__5726__auto___28863)){
args__5732__auto__.push((arguments[i__5727__auto___28864]));

var G__28865 = (i__5727__auto___28864 + (1));
i__5727__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26920 = conformed_args__24506__auto__;
var map__26920__$1 = cljs.core.__destructure_map(map__26920);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq26919){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26919));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28870 = arguments.length;
var i__5727__auto___28871 = (0);
while(true){
if((i__5727__auto___28871 < len__5726__auto___28870)){
args__5732__auto__.push((arguments[i__5727__auto___28871]));

var G__28872 = (i__5727__auto___28871 + (1));
i__5727__auto___28871 = G__28872;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26922 = conformed_args__24506__auto__;
var map__26922__$1 = cljs.core.__destructure_map(map__26922);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq26921){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26921));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28874 = arguments.length;
var i__5727__auto___28875 = (0);
while(true){
if((i__5727__auto___28875 < len__5726__auto___28874)){
args__5732__auto__.push((arguments[i__5727__auto___28875]));

var G__28876 = (i__5727__auto___28875 + (1));
i__5727__auto___28875 = G__28876;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26924 = conformed_args__24506__auto__;
var map__26924__$1 = cljs.core.__destructure_map(map__26924);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq26923){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26923));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28879 = arguments.length;
var i__5727__auto___28880 = (0);
while(true){
if((i__5727__auto___28880 < len__5726__auto___28879)){
args__5732__auto__.push((arguments[i__5727__auto___28880]));

var G__28882 = (i__5727__auto___28880 + (1));
i__5727__auto___28880 = G__28882;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26926 = conformed_args__24506__auto__;
var map__26926__$1 = cljs.core.__destructure_map(map__26926);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq26925){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26925));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28885 = arguments.length;
var i__5727__auto___28886 = (0);
while(true){
if((i__5727__auto___28886 < len__5726__auto___28885)){
args__5732__auto__.push((arguments[i__5727__auto___28886]));

var G__28887 = (i__5727__auto___28886 + (1));
i__5727__auto___28886 = G__28887;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26928 = conformed_args__24506__auto__;
var map__26928__$1 = cljs.core.__destructure_map(map__26928);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq26927){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26927));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28893 = arguments.length;
var i__5727__auto___28894 = (0);
while(true){
if((i__5727__auto___28894 < len__5726__auto___28893)){
args__5732__auto__.push((arguments[i__5727__auto___28894]));

var G__28895 = (i__5727__auto___28894 + (1));
i__5727__auto___28894 = G__28895;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26948 = conformed_args__24506__auto__;
var map__26948__$1 = cljs.core.__destructure_map(map__26948);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq26933){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26933));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28898 = arguments.length;
var i__5727__auto___28899 = (0);
while(true){
if((i__5727__auto___28899 < len__5726__auto___28898)){
args__5732__auto__.push((arguments[i__5727__auto___28899]));

var G__28900 = (i__5727__auto___28899 + (1));
i__5727__auto___28899 = G__28900;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26974 = conformed_args__24506__auto__;
var map__26974__$1 = cljs.core.__destructure_map(map__26974);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq26969){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26969));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28906 = arguments.length;
var i__5727__auto___28911 = (0);
while(true){
if((i__5727__auto___28911 < len__5726__auto___28906)){
args__5732__auto__.push((arguments[i__5727__auto___28911]));

var G__28912 = (i__5727__auto___28911 + (1));
i__5727__auto___28911 = G__28912;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__26987 = conformed_args__24506__auto__;
var map__26987__$1 = cljs.core.__destructure_map(map__26987);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq26981){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28920 = arguments.length;
var i__5727__auto___28921 = (0);
while(true){
if((i__5727__auto___28921 < len__5726__auto___28920)){
args__5732__auto__.push((arguments[i__5727__auto___28921]));

var G__28922 = (i__5727__auto___28921 + (1));
i__5727__auto___28921 = G__28922;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27001 = conformed_args__24506__auto__;
var map__27001__$1 = cljs.core.__destructure_map(map__27001);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq26994){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26994));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28927 = arguments.length;
var i__5727__auto___28930 = (0);
while(true){
if((i__5727__auto___28930 < len__5726__auto___28927)){
args__5732__auto__.push((arguments[i__5727__auto___28930]));

var G__28931 = (i__5727__auto___28930 + (1));
i__5727__auto___28930 = G__28931;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27015 = conformed_args__24506__auto__;
var map__27015__$1 = cljs.core.__destructure_map(map__27015);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq27002){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28936 = arguments.length;
var i__5727__auto___28938 = (0);
while(true){
if((i__5727__auto___28938 < len__5726__auto___28936)){
args__5732__auto__.push((arguments[i__5727__auto___28938]));

var G__28939 = (i__5727__auto___28938 + (1));
i__5727__auto___28938 = G__28939;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27052 = conformed_args__24506__auto__;
var map__27052__$1 = cljs.core.__destructure_map(map__27052);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq27037){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27037));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28940 = arguments.length;
var i__5727__auto___28942 = (0);
while(true){
if((i__5727__auto___28942 < len__5726__auto___28940)){
args__5732__auto__.push((arguments[i__5727__auto___28942]));

var G__28943 = (i__5727__auto___28942 + (1));
i__5727__auto___28942 = G__28943;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27073 = conformed_args__24506__auto__;
var map__27073__$1 = cljs.core.__destructure_map(map__27073);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq27071){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27071));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28947 = arguments.length;
var i__5727__auto___28948 = (0);
while(true){
if((i__5727__auto___28948 < len__5726__auto___28947)){
args__5732__auto__.push((arguments[i__5727__auto___28948]));

var G__28949 = (i__5727__auto___28948 + (1));
i__5727__auto___28948 = G__28949;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27117 = conformed_args__24506__auto__;
var map__27117__$1 = cljs.core.__destructure_map(map__27117);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq27095){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27095));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28950 = arguments.length;
var i__5727__auto___28951 = (0);
while(true){
if((i__5727__auto___28951 < len__5726__auto___28950)){
args__5732__auto__.push((arguments[i__5727__auto___28951]));

var G__28952 = (i__5727__auto___28951 + (1));
i__5727__auto___28951 = G__28952;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27121 = conformed_args__24506__auto__;
var map__27121__$1 = cljs.core.__destructure_map(map__27121);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq27119){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27119));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28959 = arguments.length;
var i__5727__auto___28960 = (0);
while(true){
if((i__5727__auto___28960 < len__5726__auto___28959)){
args__5732__auto__.push((arguments[i__5727__auto___28960]));

var G__28961 = (i__5727__auto___28960 + (1));
i__5727__auto___28960 = G__28961;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27140 = conformed_args__24506__auto__;
var map__27140__$1 = cljs.core.__destructure_map(map__27140);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq27131){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27131));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28965 = arguments.length;
var i__5727__auto___28966 = (0);
while(true){
if((i__5727__auto___28966 < len__5726__auto___28965)){
args__5732__auto__.push((arguments[i__5727__auto___28966]));

var G__28967 = (i__5727__auto___28966 + (1));
i__5727__auto___28966 = G__28967;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27159 = conformed_args__24506__auto__;
var map__27159__$1 = cljs.core.__destructure_map(map__27159);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27159__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq27152){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27152));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28970 = arguments.length;
var i__5727__auto___28971 = (0);
while(true){
if((i__5727__auto___28971 < len__5726__auto___28970)){
args__5732__auto__.push((arguments[i__5727__auto___28971]));

var G__28972 = (i__5727__auto___28971 + (1));
i__5727__auto___28971 = G__28972;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27182 = conformed_args__24506__auto__;
var map__27182__$1 = cljs.core.__destructure_map(map__27182);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq27167){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27167));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28977 = arguments.length;
var i__5727__auto___28978 = (0);
while(true){
if((i__5727__auto___28978 < len__5726__auto___28977)){
args__5732__auto__.push((arguments[i__5727__auto___28978]));

var G__28981 = (i__5727__auto___28978 + (1));
i__5727__auto___28978 = G__28981;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27196 = conformed_args__24506__auto__;
var map__27196__$1 = cljs.core.__destructure_map(map__27196);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq27187){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27187));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28983 = arguments.length;
var i__5727__auto___28984 = (0);
while(true){
if((i__5727__auto___28984 < len__5726__auto___28983)){
args__5732__auto__.push((arguments[i__5727__auto___28984]));

var G__28985 = (i__5727__auto___28984 + (1));
i__5727__auto___28984 = G__28985;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27202 = conformed_args__24506__auto__;
var map__27202__$1 = cljs.core.__destructure_map(map__27202);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq27201){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27201));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28989 = arguments.length;
var i__5727__auto___28990 = (0);
while(true){
if((i__5727__auto___28990 < len__5726__auto___28989)){
args__5732__auto__.push((arguments[i__5727__auto___28990]));

var G__28991 = (i__5727__auto___28990 + (1));
i__5727__auto___28990 = G__28991;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27209 = conformed_args__24506__auto__;
var map__27209__$1 = cljs.core.__destructure_map(map__27209);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq27205){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27205));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28995 = arguments.length;
var i__5727__auto___28996 = (0);
while(true){
if((i__5727__auto___28996 < len__5726__auto___28995)){
args__5732__auto__.push((arguments[i__5727__auto___28996]));

var G__28998 = (i__5727__auto___28996 + (1));
i__5727__auto___28996 = G__28998;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27219 = conformed_args__24506__auto__;
var map__27219__$1 = cljs.core.__destructure_map(map__27219);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq27218){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27218));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29003 = arguments.length;
var i__5727__auto___29004 = (0);
while(true){
if((i__5727__auto___29004 < len__5726__auto___29003)){
args__5732__auto__.push((arguments[i__5727__auto___29004]));

var G__29005 = (i__5727__auto___29004 + (1));
i__5727__auto___29004 = G__29005;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27223 = conformed_args__24506__auto__;
var map__27223__$1 = cljs.core.__destructure_map(map__27223);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq27220){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27220));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29007 = arguments.length;
var i__5727__auto___29008 = (0);
while(true){
if((i__5727__auto___29008 < len__5726__auto___29007)){
args__5732__auto__.push((arguments[i__5727__auto___29008]));

var G__29010 = (i__5727__auto___29008 + (1));
i__5727__auto___29008 = G__29010;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27233 = conformed_args__24506__auto__;
var map__27233__$1 = cljs.core.__destructure_map(map__27233);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq27231){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29017 = arguments.length;
var i__5727__auto___29018 = (0);
while(true){
if((i__5727__auto___29018 < len__5726__auto___29017)){
args__5732__auto__.push((arguments[i__5727__auto___29018]));

var G__29019 = (i__5727__auto___29018 + (1));
i__5727__auto___29018 = G__29019;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27271 = conformed_args__24506__auto__;
var map__27271__$1 = cljs.core.__destructure_map(map__27271);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq27247){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27247));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29020 = arguments.length;
var i__5727__auto___29021 = (0);
while(true){
if((i__5727__auto___29021 < len__5726__auto___29020)){
args__5732__auto__.push((arguments[i__5727__auto___29021]));

var G__29022 = (i__5727__auto___29021 + (1));
i__5727__auto___29021 = G__29022;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27292 = conformed_args__24506__auto__;
var map__27292__$1 = cljs.core.__destructure_map(map__27292);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq27284){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27284));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29029 = arguments.length;
var i__5727__auto___29030 = (0);
while(true){
if((i__5727__auto___29030 < len__5726__auto___29029)){
args__5732__auto__.push((arguments[i__5727__auto___29030]));

var G__29031 = (i__5727__auto___29030 + (1));
i__5727__auto___29030 = G__29031;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27316 = conformed_args__24506__auto__;
var map__27316__$1 = cljs.core.__destructure_map(map__27316);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq27301){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27301));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29033 = arguments.length;
var i__5727__auto___29034 = (0);
while(true){
if((i__5727__auto___29034 < len__5726__auto___29033)){
args__5732__auto__.push((arguments[i__5727__auto___29034]));

var G__29035 = (i__5727__auto___29034 + (1));
i__5727__auto___29034 = G__29035;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27347 = conformed_args__24506__auto__;
var map__27347__$1 = cljs.core.__destructure_map(map__27347);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq27331){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27331));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29040 = arguments.length;
var i__5727__auto___29041 = (0);
while(true){
if((i__5727__auto___29041 < len__5726__auto___29040)){
args__5732__auto__.push((arguments[i__5727__auto___29041]));

var G__29042 = (i__5727__auto___29041 + (1));
i__5727__auto___29041 = G__29042;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27367 = conformed_args__24506__auto__;
var map__27367__$1 = cljs.core.__destructure_map(map__27367);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq27354){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27354));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29047 = arguments.length;
var i__5727__auto___29048 = (0);
while(true){
if((i__5727__auto___29048 < len__5726__auto___29047)){
args__5732__auto__.push((arguments[i__5727__auto___29048]));

var G__29051 = (i__5727__auto___29048 + (1));
i__5727__auto___29048 = G__29051;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27393 = conformed_args__24506__auto__;
var map__27393__$1 = cljs.core.__destructure_map(map__27393);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27393__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27393__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq27380){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27380));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29058 = arguments.length;
var i__5727__auto___29059 = (0);
while(true){
if((i__5727__auto___29059 < len__5726__auto___29058)){
args__5732__auto__.push((arguments[i__5727__auto___29059]));

var G__29060 = (i__5727__auto___29059 + (1));
i__5727__auto___29059 = G__29060;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27435 = conformed_args__24506__auto__;
var map__27435__$1 = cljs.core.__destructure_map(map__27435);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq27416){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27416));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29062 = arguments.length;
var i__5727__auto___29063 = (0);
while(true){
if((i__5727__auto___29063 < len__5726__auto___29062)){
args__5732__auto__.push((arguments[i__5727__auto___29063]));

var G__29064 = (i__5727__auto___29063 + (1));
i__5727__auto___29063 = G__29064;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27470 = conformed_args__24506__auto__;
var map__27470__$1 = cljs.core.__destructure_map(map__27470);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq27453){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27453));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29065 = arguments.length;
var i__5727__auto___29066 = (0);
while(true){
if((i__5727__auto___29066 < len__5726__auto___29065)){
args__5732__auto__.push((arguments[i__5727__auto___29066]));

var G__29067 = (i__5727__auto___29066 + (1));
i__5727__auto___29066 = G__29067;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27487 = conformed_args__24506__auto__;
var map__27487__$1 = cljs.core.__destructure_map(map__27487);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq27478){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27478));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29073 = arguments.length;
var i__5727__auto___29074 = (0);
while(true){
if((i__5727__auto___29074 < len__5726__auto___29073)){
args__5732__auto__.push((arguments[i__5727__auto___29074]));

var G__29075 = (i__5727__auto___29074 + (1));
i__5727__auto___29074 = G__29075;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27506 = conformed_args__24506__auto__;
var map__27506__$1 = cljs.core.__destructure_map(map__27506);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq27499){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27499));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29080 = arguments.length;
var i__5727__auto___29081 = (0);
while(true){
if((i__5727__auto___29081 < len__5726__auto___29080)){
args__5732__auto__.push((arguments[i__5727__auto___29081]));

var G__29082 = (i__5727__auto___29081 + (1));
i__5727__auto___29081 = G__29082;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27540 = conformed_args__24506__auto__;
var map__27540__$1 = cljs.core.__destructure_map(map__27540);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq27527){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29084 = arguments.length;
var i__5727__auto___29086 = (0);
while(true){
if((i__5727__auto___29086 < len__5726__auto___29084)){
args__5732__auto__.push((arguments[i__5727__auto___29086]));

var G__29087 = (i__5727__auto___29086 + (1));
i__5727__auto___29086 = G__29087;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27546 = conformed_args__24506__auto__;
var map__27546__$1 = cljs.core.__destructure_map(map__27546);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq27541){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27541));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29091 = arguments.length;
var i__5727__auto___29092 = (0);
while(true){
if((i__5727__auto___29092 < len__5726__auto___29091)){
args__5732__auto__.push((arguments[i__5727__auto___29092]));

var G__29093 = (i__5727__auto___29092 + (1));
i__5727__auto___29092 = G__29093;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27576 = conformed_args__24506__auto__;
var map__27576__$1 = cljs.core.__destructure_map(map__27576);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq27565){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29096 = arguments.length;
var i__5727__auto___29097 = (0);
while(true){
if((i__5727__auto___29097 < len__5726__auto___29096)){
args__5732__auto__.push((arguments[i__5727__auto___29097]));

var G__29098 = (i__5727__auto___29097 + (1));
i__5727__auto___29097 = G__29098;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27596 = conformed_args__24506__auto__;
var map__27596__$1 = cljs.core.__destructure_map(map__27596);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq27591){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27591));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29113 = arguments.length;
var i__5727__auto___29114 = (0);
while(true){
if((i__5727__auto___29114 < len__5726__auto___29113)){
args__5732__auto__.push((arguments[i__5727__auto___29114]));

var G__29116 = (i__5727__auto___29114 + (1));
i__5727__auto___29114 = G__29116;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27600 = conformed_args__24506__auto__;
var map__27600__$1 = cljs.core.__destructure_map(map__27600);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq27598){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27598));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29121 = arguments.length;
var i__5727__auto___29122 = (0);
while(true){
if((i__5727__auto___29122 < len__5726__auto___29121)){
args__5732__auto__.push((arguments[i__5727__auto___29122]));

var G__29123 = (i__5727__auto___29122 + (1));
i__5727__auto___29122 = G__29123;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27612 = conformed_args__24506__auto__;
var map__27612__$1 = cljs.core.__destructure_map(map__27612);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq27607){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29130 = arguments.length;
var i__5727__auto___29131 = (0);
while(true){
if((i__5727__auto___29131 < len__5726__auto___29130)){
args__5732__auto__.push((arguments[i__5727__auto___29131]));

var G__29132 = (i__5727__auto___29131 + (1));
i__5727__auto___29131 = G__29132;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27620 = conformed_args__24506__auto__;
var map__27620__$1 = cljs.core.__destructure_map(map__27620);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq27614){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27614));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29139 = arguments.length;
var i__5727__auto___29140 = (0);
while(true){
if((i__5727__auto___29140 < len__5726__auto___29139)){
args__5732__auto__.push((arguments[i__5727__auto___29140]));

var G__29142 = (i__5727__auto___29140 + (1));
i__5727__auto___29140 = G__29142;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27636 = conformed_args__24506__auto__;
var map__27636__$1 = cljs.core.__destructure_map(map__27636);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq27627){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29146 = arguments.length;
var i__5727__auto___29147 = (0);
while(true){
if((i__5727__auto___29147 < len__5726__auto___29146)){
args__5732__auto__.push((arguments[i__5727__auto___29147]));

var G__29149 = (i__5727__auto___29147 + (1));
i__5727__auto___29147 = G__29149;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27641 = conformed_args__24506__auto__;
var map__27641__$1 = cljs.core.__destructure_map(map__27641);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq27639){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29153 = arguments.length;
var i__5727__auto___29154 = (0);
while(true){
if((i__5727__auto___29154 < len__5726__auto___29153)){
args__5732__auto__.push((arguments[i__5727__auto___29154]));

var G__29157 = (i__5727__auto___29154 + (1));
i__5727__auto___29154 = G__29157;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27652 = conformed_args__24506__auto__;
var map__27652__$1 = cljs.core.__destructure_map(map__27652);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq27647){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27647));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29162 = arguments.length;
var i__5727__auto___29163 = (0);
while(true){
if((i__5727__auto___29163 < len__5726__auto___29162)){
args__5732__auto__.push((arguments[i__5727__auto___29163]));

var G__29164 = (i__5727__auto___29163 + (1));
i__5727__auto___29163 = G__29164;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27678 = conformed_args__24506__auto__;
var map__27678__$1 = cljs.core.__destructure_map(map__27678);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq27666){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27666));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29166 = arguments.length;
var i__5727__auto___29167 = (0);
while(true){
if((i__5727__auto___29167 < len__5726__auto___29166)){
args__5732__auto__.push((arguments[i__5727__auto___29167]));

var G__29168 = (i__5727__auto___29167 + (1));
i__5727__auto___29167 = G__29168;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27693 = conformed_args__24506__auto__;
var map__27693__$1 = cljs.core.__destructure_map(map__27693);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq27684){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29171 = arguments.length;
var i__5727__auto___29172 = (0);
while(true){
if((i__5727__auto___29172 < len__5726__auto___29171)){
args__5732__auto__.push((arguments[i__5727__auto___29172]));

var G__29173 = (i__5727__auto___29172 + (1));
i__5727__auto___29172 = G__29173;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27700 = conformed_args__24506__auto__;
var map__27700__$1 = cljs.core.__destructure_map(map__27700);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq27698){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29175 = arguments.length;
var i__5727__auto___29176 = (0);
while(true){
if((i__5727__auto___29176 < len__5726__auto___29175)){
args__5732__auto__.push((arguments[i__5727__auto___29176]));

var G__29178 = (i__5727__auto___29176 + (1));
i__5727__auto___29176 = G__29178;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27712 = conformed_args__24506__auto__;
var map__27712__$1 = cljs.core.__destructure_map(map__27712);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq27701){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29182 = arguments.length;
var i__5727__auto___29183 = (0);
while(true){
if((i__5727__auto___29183 < len__5726__auto___29182)){
args__5732__auto__.push((arguments[i__5727__auto___29183]));

var G__29185 = (i__5727__auto___29183 + (1));
i__5727__auto___29183 = G__29185;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27723 = conformed_args__24506__auto__;
var map__27723__$1 = cljs.core.__destructure_map(map__27723);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq27716){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29189 = arguments.length;
var i__5727__auto___29190 = (0);
while(true){
if((i__5727__auto___29190 < len__5726__auto___29189)){
args__5732__auto__.push((arguments[i__5727__auto___29190]));

var G__29191 = (i__5727__auto___29190 + (1));
i__5727__auto___29190 = G__29191;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27739 = conformed_args__24506__auto__;
var map__27739__$1 = cljs.core.__destructure_map(map__27739);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq27732){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27732));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29193 = arguments.length;
var i__5727__auto___29194 = (0);
while(true){
if((i__5727__auto___29194 < len__5726__auto___29193)){
args__5732__auto__.push((arguments[i__5727__auto___29194]));

var G__29195 = (i__5727__auto___29194 + (1));
i__5727__auto___29194 = G__29195;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27748 = conformed_args__24506__auto__;
var map__27748__$1 = cljs.core.__destructure_map(map__27748);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq27745){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27745));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29200 = arguments.length;
var i__5727__auto___29201 = (0);
while(true){
if((i__5727__auto___29201 < len__5726__auto___29200)){
args__5732__auto__.push((arguments[i__5727__auto___29201]));

var G__29202 = (i__5727__auto___29201 + (1));
i__5727__auto___29201 = G__29202;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27755 = conformed_args__24506__auto__;
var map__27755__$1 = cljs.core.__destructure_map(map__27755);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq27754){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27754));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29206 = arguments.length;
var i__5727__auto___29207 = (0);
while(true){
if((i__5727__auto___29207 < len__5726__auto___29206)){
args__5732__auto__.push((arguments[i__5727__auto___29207]));

var G__29208 = (i__5727__auto___29207 + (1));
i__5727__auto___29207 = G__29208;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27764 = conformed_args__24506__auto__;
var map__27764__$1 = cljs.core.__destructure_map(map__27764);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq27763){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27763));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29210 = arguments.length;
var i__5727__auto___29211 = (0);
while(true){
if((i__5727__auto___29211 < len__5726__auto___29210)){
args__5732__auto__.push((arguments[i__5727__auto___29211]));

var G__29212 = (i__5727__auto___29211 + (1));
i__5727__auto___29211 = G__29212;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27775 = conformed_args__24506__auto__;
var map__27775__$1 = cljs.core.__destructure_map(map__27775);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq27769){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27769));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29214 = arguments.length;
var i__5727__auto___29215 = (0);
while(true){
if((i__5727__auto___29215 < len__5726__auto___29214)){
args__5732__auto__.push((arguments[i__5727__auto___29215]));

var G__29216 = (i__5727__auto___29215 + (1));
i__5727__auto___29215 = G__29216;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27792 = conformed_args__24506__auto__;
var map__27792__$1 = cljs.core.__destructure_map(map__27792);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq27781){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27781));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29218 = arguments.length;
var i__5727__auto___29219 = (0);
while(true){
if((i__5727__auto___29219 < len__5726__auto___29218)){
args__5732__auto__.push((arguments[i__5727__auto___29219]));

var G__29221 = (i__5727__auto___29219 + (1));
i__5727__auto___29219 = G__29221;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27806 = conformed_args__24506__auto__;
var map__27806__$1 = cljs.core.__destructure_map(map__27806);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq27800){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29223 = arguments.length;
var i__5727__auto___29224 = (0);
while(true){
if((i__5727__auto___29224 < len__5726__auto___29223)){
args__5732__auto__.push((arguments[i__5727__auto___29224]));

var G__29225 = (i__5727__auto___29224 + (1));
i__5727__auto___29224 = G__29225;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27810 = conformed_args__24506__auto__;
var map__27810__$1 = cljs.core.__destructure_map(map__27810);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq27808){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29227 = arguments.length;
var i__5727__auto___29229 = (0);
while(true){
if((i__5727__auto___29229 < len__5726__auto___29227)){
args__5732__auto__.push((arguments[i__5727__auto___29229]));

var G__29230 = (i__5727__auto___29229 + (1));
i__5727__auto___29229 = G__29230;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27815 = conformed_args__24506__auto__;
var map__27815__$1 = cljs.core.__destructure_map(map__27815);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq27812){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29232 = arguments.length;
var i__5727__auto___29233 = (0);
while(true){
if((i__5727__auto___29233 < len__5726__auto___29232)){
args__5732__auto__.push((arguments[i__5727__auto___29233]));

var G__29234 = (i__5727__auto___29233 + (1));
i__5727__auto___29233 = G__29234;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27826 = conformed_args__24506__auto__;
var map__27826__$1 = cljs.core.__destructure_map(map__27826);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq27821){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27821));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29236 = arguments.length;
var i__5727__auto___29237 = (0);
while(true){
if((i__5727__auto___29237 < len__5726__auto___29236)){
args__5732__auto__.push((arguments[i__5727__auto___29237]));

var G__29239 = (i__5727__auto___29237 + (1));
i__5727__auto___29237 = G__29239;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27837 = conformed_args__24506__auto__;
var map__27837__$1 = cljs.core.__destructure_map(map__27837);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq27833){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27833));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29241 = arguments.length;
var i__5727__auto___29242 = (0);
while(true){
if((i__5727__auto___29242 < len__5726__auto___29241)){
args__5732__auto__.push((arguments[i__5727__auto___29242]));

var G__29243 = (i__5727__auto___29242 + (1));
i__5727__auto___29242 = G__29243;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27848 = conformed_args__24506__auto__;
var map__27848__$1 = cljs.core.__destructure_map(map__27848);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq27846){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27846));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29245 = arguments.length;
var i__5727__auto___29246 = (0);
while(true){
if((i__5727__auto___29246 < len__5726__auto___29245)){
args__5732__auto__.push((arguments[i__5727__auto___29246]));

var G__29248 = (i__5727__auto___29246 + (1));
i__5727__auto___29246 = G__29248;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27859 = conformed_args__24506__auto__;
var map__27859__$1 = cljs.core.__destructure_map(map__27859);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq27856){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27856));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29250 = arguments.length;
var i__5727__auto___29251 = (0);
while(true){
if((i__5727__auto___29251 < len__5726__auto___29250)){
args__5732__auto__.push((arguments[i__5727__auto___29251]));

var G__29252 = (i__5727__auto___29251 + (1));
i__5727__auto___29251 = G__29252;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27868 = conformed_args__24506__auto__;
var map__27868__$1 = cljs.core.__destructure_map(map__27868);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq27866){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27866));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29258 = arguments.length;
var i__5727__auto___29259 = (0);
while(true){
if((i__5727__auto___29259 < len__5726__auto___29258)){
args__5732__auto__.push((arguments[i__5727__auto___29259]));

var G__29260 = (i__5727__auto___29259 + (1));
i__5727__auto___29259 = G__29260;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27880 = conformed_args__24506__auto__;
var map__27880__$1 = cljs.core.__destructure_map(map__27880);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq27875){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27875));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29264 = arguments.length;
var i__5727__auto___29265 = (0);
while(true){
if((i__5727__auto___29265 < len__5726__auto___29264)){
args__5732__auto__.push((arguments[i__5727__auto___29265]));

var G__29266 = (i__5727__auto___29265 + (1));
i__5727__auto___29265 = G__29266;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27885 = conformed_args__24506__auto__;
var map__27885__$1 = cljs.core.__destructure_map(map__27885);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq27881){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29272 = arguments.length;
var i__5727__auto___29273 = (0);
while(true){
if((i__5727__auto___29273 < len__5726__auto___29272)){
args__5732__auto__.push((arguments[i__5727__auto___29273]));

var G__29274 = (i__5727__auto___29273 + (1));
i__5727__auto___29273 = G__29274;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27895 = conformed_args__24506__auto__;
var map__27895__$1 = cljs.core.__destructure_map(map__27895);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq27892){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27892));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29278 = arguments.length;
var i__5727__auto___29280 = (0);
while(true){
if((i__5727__auto___29280 < len__5726__auto___29278)){
args__5732__auto__.push((arguments[i__5727__auto___29280]));

var G__29282 = (i__5727__auto___29280 + (1));
i__5727__auto___29280 = G__29282;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27904 = conformed_args__24506__auto__;
var map__27904__$1 = cljs.core.__destructure_map(map__27904);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq27900){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29284 = arguments.length;
var i__5727__auto___29285 = (0);
while(true){
if((i__5727__auto___29285 < len__5726__auto___29284)){
args__5732__auto__.push((arguments[i__5727__auto___29285]));

var G__29286 = (i__5727__auto___29285 + (1));
i__5727__auto___29285 = G__29286;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27913 = conformed_args__24506__auto__;
var map__27913__$1 = cljs.core.__destructure_map(map__27913);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq27907){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27907));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29290 = arguments.length;
var i__5727__auto___29291 = (0);
while(true){
if((i__5727__auto___29291 < len__5726__auto___29290)){
args__5732__auto__.push((arguments[i__5727__auto___29291]));

var G__29292 = (i__5727__auto___29291 + (1));
i__5727__auto___29291 = G__29292;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27922 = conformed_args__24506__auto__;
var map__27922__$1 = cljs.core.__destructure_map(map__27922);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq27916){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29298 = arguments.length;
var i__5727__auto___29299 = (0);
while(true){
if((i__5727__auto___29299 < len__5726__auto___29298)){
args__5732__auto__.push((arguments[i__5727__auto___29299]));

var G__29300 = (i__5727__auto___29299 + (1));
i__5727__auto___29299 = G__29300;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27928 = conformed_args__24506__auto__;
var map__27928__$1 = cljs.core.__destructure_map(map__27928);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27928__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27928__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27928__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq27925){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27925));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29303 = arguments.length;
var i__5727__auto___29304 = (0);
while(true){
if((i__5727__auto___29304 < len__5726__auto___29303)){
args__5732__auto__.push((arguments[i__5727__auto___29304]));

var G__29305 = (i__5727__auto___29304 + (1));
i__5727__auto___29304 = G__29305;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27937 = conformed_args__24506__auto__;
var map__27937__$1 = cljs.core.__destructure_map(map__27937);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq27931){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27931));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29310 = arguments.length;
var i__5727__auto___29311 = (0);
while(true){
if((i__5727__auto___29311 < len__5726__auto___29310)){
args__5732__auto__.push((arguments[i__5727__auto___29311]));

var G__29313 = (i__5727__auto___29311 + (1));
i__5727__auto___29311 = G__29313;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27945 = conformed_args__24506__auto__;
var map__27945__$1 = cljs.core.__destructure_map(map__27945);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq27940){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27940));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29314 = arguments.length;
var i__5727__auto___29315 = (0);
while(true){
if((i__5727__auto___29315 < len__5726__auto___29314)){
args__5732__auto__.push((arguments[i__5727__auto___29315]));

var G__29316 = (i__5727__auto___29315 + (1));
i__5727__auto___29315 = G__29316;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27953 = conformed_args__24506__auto__;
var map__27953__$1 = cljs.core.__destructure_map(map__27953);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq27947){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27947));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29322 = arguments.length;
var i__5727__auto___29323 = (0);
while(true){
if((i__5727__auto___29323 < len__5726__auto___29322)){
args__5732__auto__.push((arguments[i__5727__auto___29323]));

var G__29324 = (i__5727__auto___29323 + (1));
i__5727__auto___29323 = G__29324;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27960 = conformed_args__24506__auto__;
var map__27960__$1 = cljs.core.__destructure_map(map__27960);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq27956){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27956));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29325 = arguments.length;
var i__5727__auto___29326 = (0);
while(true){
if((i__5727__auto___29326 < len__5726__auto___29325)){
args__5732__auto__.push((arguments[i__5727__auto___29326]));

var G__29327 = (i__5727__auto___29326 + (1));
i__5727__auto___29326 = G__29327;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27977 = conformed_args__24506__auto__;
var map__27977__$1 = cljs.core.__destructure_map(map__27977);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq27965){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27965));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29333 = arguments.length;
var i__5727__auto___29334 = (0);
while(true){
if((i__5727__auto___29334 < len__5726__auto___29333)){
args__5732__auto__.push((arguments[i__5727__auto___29334]));

var G__29335 = (i__5727__auto___29334 + (1));
i__5727__auto___29334 = G__29335;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__24506__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__27992 = conformed_args__24506__auto__;
var map__27992__$1 = cljs.core.__destructure_map(map__27992);
var children__24508__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__24509__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__24507__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__24508__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__24508__auto__);
var attrs_value__24510__auto__ = (function (){var or__5002__auto__ = cljs.core.second(attrs__24507__auto__);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__24510__auto__], null),children__24508__auto____$1),css__24509__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq27984){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27984));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
