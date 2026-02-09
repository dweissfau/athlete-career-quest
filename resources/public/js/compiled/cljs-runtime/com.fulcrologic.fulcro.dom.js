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
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__48586){
var vec__48589 = p__48586;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48589,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48589,(1),null);
var pair = vec__48589;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__48597){
var vec__48598 = p__48597;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48598,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48598,(1),null);
var pair = vec__48598;
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
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__48604){
var vec__48606 = p__48604;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48606,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48606,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__48609 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48609,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__48609;
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
var G__48620 = arguments.length;
switch (G__48620) {
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
var G__48623 = component.refs;
var G__48623__$1 = (((G__48623 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__48623,name));
if((G__48623__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__48623__$1);
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
var G__48625 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__48628 = (function (){var G__48629 = r;
if((G__48629 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__48629);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__48628) : ref.call(null,G__48628));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__48625) : factory.call(null,G__48625));
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
var G__48635 = arguments.length;
switch (G__48635) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___50757 = arguments.length;
var i__5770__auto___50758 = (0);
while(true){
if((i__5770__auto___50758 < len__5769__auto___50757)){
args_arr__5794__auto__.push((arguments[i__5770__auto___50758]));

var G__50759 = (i__5770__auto___50758 + (1));
i__5770__auto___50758 = G__50759;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

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
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq48632){
var G__48633 = cljs.core.first(seq48632);
var seq48632__$1 = cljs.core.next(seq48632);
var G__48634 = cljs.core.first(seq48632__$1);
var seq48632__$2 = cljs.core.next(seq48632__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48633,G__48634,seq48632__$2);
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
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__48647 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__48647) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__48647));
} else {
return and__5043__auto__;
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

var x48662_50767 = ctor.prototype;
(x48662_50767.onChange = (function (event){
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

(x48662_50767.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__48650_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__48650_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1672359903,null);
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

(x48662_50767.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__50773__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__50773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50774__i = 0, G__50774__a = new Array(arguments.length -  0);
while (G__50774__i < G__50774__a.length) {G__50774__a[G__50774__i] = arguments[G__50774__i + 0]; ++G__50774__i;}
  args = new cljs.core.IndexedSeq(G__50774__a,0,null);
} 
return G__50773__delegate.call(this,args);};
G__50773.cljs$lang$maxFixedArity = 0;
G__50773.cljs$lang$applyTo = (function (arglist__50775){
var args = cljs.core.seq(arglist__50775);
return G__50773__delegate(args);
});
G__50773.cljs$core$IFn$_invoke$arity$variadic = G__50773__delegate;
return G__50773;
})()
;
return (function() { 
var G__50776__delegate = function (props,children){
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
var G__50776 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__50778__i = 0, G__50778__a = new Array(arguments.length -  1);
while (G__50778__i < G__50778__a.length) {G__50778__a[G__50778__i] = arguments[G__50778__i + 1]; ++G__50778__i;}
  children = new cljs.core.IndexedSeq(G__50778__a,0,null);
} 
return G__50776__delegate.call(this,props,children);};
G__50776.cljs$lang$maxFixedArity = 1;
G__50776.cljs$lang$applyTo = (function (arglist__50779){
var props = cljs.core.first(arglist__50779);
var children = cljs.core.rest(arglist__50779);
return G__50776__delegate(props,children);
});
G__50776.cljs$core$IFn$_invoke$arity$variadic = G__50776__delegate;
return G__50776;
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
var G__48670 = tag;
switch (G__48670) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48670)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__48674 = arguments.length;
switch (G__48674) {
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
var vec__48679 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__48680 = cljs.core.seq(vec__48679);
var first__48681 = cljs.core.first(seq__48680);
var seq__48680__$1 = cljs.core.next(seq__48680);
var head = first__48681;
var tail = seq__48680__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__48683 = (function (){var G__48685 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48685,tail);

return G__48685;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48683) : f.call(null,G__48683));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__48686 = (function (){var G__48687 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48687,args);

return G__48687;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48686) : f.call(null,G__48686));
} else {
if(cljs.core.object_QMARK_(head)){
var G__48688 = (function (){var G__48689 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48689,tail);

return G__48689;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48688) : f.call(null,G__48688));
} else {
if(cljs.core.map_QMARK_(head)){
var G__48690 = (function (){var G__48691 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__48691,tail);

return G__48691;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48690) : f.call(null,G__48690));
} else {
var G__48692 = (function (){var G__48694 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48694,args);

return G__48694;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48692) : f.call(null,G__48692));

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
var G__48697 = arguments.length;
switch (G__48697) {
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
var vec__48702 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__48703 = cljs.core.seq(vec__48702);
var first__48704 = cljs.core.first(seq__48703);
var seq__48703__$1 = cljs.core.next(seq__48703);
var head = first__48704;
var tail = seq__48703__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48706 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48706,tail);

return G__48706;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48709 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48709,args);

return G__48709;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48710 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48710,tail);

return G__48710;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48711 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__48711,tail);

return G__48711;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__48712 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__48712,args);

return G__48712;
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
var args__5775__auto__ = [];
var len__5769__auto___50810 = arguments.length;
var i__5770__auto___50812 = (0);
while(true){
if((i__5770__auto___50812 < len__5769__auto___50810)){
args__5775__auto__.push((arguments[i__5770__auto___50812]));

var G__50813 = (i__5770__auto___50812 + (1));
i__5770__auto___50812 = G__50813;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48723 = conformed_args__47299__auto__;
var map__48723__$1 = cljs.core.__destructure_map(map__48723);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq48720){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48720));
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
var args__5775__auto__ = [];
var len__5769__auto___50816 = arguments.length;
var i__5770__auto___50817 = (0);
while(true){
if((i__5770__auto___50817 < len__5769__auto___50816)){
args__5775__auto__.push((arguments[i__5770__auto___50817]));

var G__50818 = (i__5770__auto___50817 + (1));
i__5770__auto___50817 = G__50818;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48727 = conformed_args__47299__auto__;
var map__48727__$1 = cljs.core.__destructure_map(map__48727);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq48725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48725));
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
var args__5775__auto__ = [];
var len__5769__auto___50821 = arguments.length;
var i__5770__auto___50822 = (0);
while(true){
if((i__5770__auto___50822 < len__5769__auto___50821)){
args__5775__auto__.push((arguments[i__5770__auto___50822]));

var G__50823 = (i__5770__auto___50822 + (1));
i__5770__auto___50822 = G__50823;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48735 = conformed_args__47299__auto__;
var map__48735__$1 = cljs.core.__destructure_map(map__48735);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq48730){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48730));
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
var args__5775__auto__ = [];
var len__5769__auto___50828 = arguments.length;
var i__5770__auto___50829 = (0);
while(true){
if((i__5770__auto___50829 < len__5769__auto___50828)){
args__5775__auto__.push((arguments[i__5770__auto___50829]));

var G__50830 = (i__5770__auto___50829 + (1));
i__5770__auto___50829 = G__50830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48738 = conformed_args__47299__auto__;
var map__48738__$1 = cljs.core.__destructure_map(map__48738);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq48736){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48736));
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
var args__5775__auto__ = [];
var len__5769__auto___50836 = arguments.length;
var i__5770__auto___50837 = (0);
while(true){
if((i__5770__auto___50837 < len__5769__auto___50836)){
args__5775__auto__.push((arguments[i__5770__auto___50837]));

var G__50838 = (i__5770__auto___50837 + (1));
i__5770__auto___50837 = G__50838;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48745 = conformed_args__47299__auto__;
var map__48745__$1 = cljs.core.__destructure_map(map__48745);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq48740){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48740));
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
var args__5775__auto__ = [];
var len__5769__auto___50840 = arguments.length;
var i__5770__auto___50841 = (0);
while(true){
if((i__5770__auto___50841 < len__5769__auto___50840)){
args__5775__auto__.push((arguments[i__5770__auto___50841]));

var G__50843 = (i__5770__auto___50841 + (1));
i__5770__auto___50841 = G__50843;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48749 = conformed_args__47299__auto__;
var map__48749__$1 = cljs.core.__destructure_map(map__48749);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq48747){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48747));
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
var args__5775__auto__ = [];
var len__5769__auto___50848 = arguments.length;
var i__5770__auto___50849 = (0);
while(true){
if((i__5770__auto___50849 < len__5769__auto___50848)){
args__5775__auto__.push((arguments[i__5770__auto___50849]));

var G__50850 = (i__5770__auto___50849 + (1));
i__5770__auto___50849 = G__50850;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48755 = conformed_args__47299__auto__;
var map__48755__$1 = cljs.core.__destructure_map(map__48755);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq48752){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48752));
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
var args__5775__auto__ = [];
var len__5769__auto___50854 = arguments.length;
var i__5770__auto___50855 = (0);
while(true){
if((i__5770__auto___50855 < len__5769__auto___50854)){
args__5775__auto__.push((arguments[i__5770__auto___50855]));

var G__50856 = (i__5770__auto___50855 + (1));
i__5770__auto___50855 = G__50856;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48762 = conformed_args__47299__auto__;
var map__48762__$1 = cljs.core.__destructure_map(map__48762);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq48761){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48761));
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
var args__5775__auto__ = [];
var len__5769__auto___50860 = arguments.length;
var i__5770__auto___50861 = (0);
while(true){
if((i__5770__auto___50861 < len__5769__auto___50860)){
args__5775__auto__.push((arguments[i__5770__auto___50861]));

var G__50862 = (i__5770__auto___50861 + (1));
i__5770__auto___50861 = G__50862;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48768 = conformed_args__47299__auto__;
var map__48768__$1 = cljs.core.__destructure_map(map__48768);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq48765){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48765));
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
var args__5775__auto__ = [];
var len__5769__auto___50866 = arguments.length;
var i__5770__auto___50867 = (0);
while(true){
if((i__5770__auto___50867 < len__5769__auto___50866)){
args__5775__auto__.push((arguments[i__5770__auto___50867]));

var G__50869 = (i__5770__auto___50867 + (1));
i__5770__auto___50867 = G__50869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48772 = conformed_args__47299__auto__;
var map__48772__$1 = cljs.core.__destructure_map(map__48772);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq48771){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48771));
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
var args__5775__auto__ = [];
var len__5769__auto___50874 = arguments.length;
var i__5770__auto___50875 = (0);
while(true){
if((i__5770__auto___50875 < len__5769__auto___50874)){
args__5775__auto__.push((arguments[i__5770__auto___50875]));

var G__50876 = (i__5770__auto___50875 + (1));
i__5770__auto___50875 = G__50876;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48775 = conformed_args__47299__auto__;
var map__48775__$1 = cljs.core.__destructure_map(map__48775);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq48774){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48774));
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
var args__5775__auto__ = [];
var len__5769__auto___50878 = arguments.length;
var i__5770__auto___50879 = (0);
while(true){
if((i__5770__auto___50879 < len__5769__auto___50878)){
args__5775__auto__.push((arguments[i__5770__auto___50879]));

var G__50880 = (i__5770__auto___50879 + (1));
i__5770__auto___50879 = G__50880;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48782 = conformed_args__47299__auto__;
var map__48782__$1 = cljs.core.__destructure_map(map__48782);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq48777){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48777));
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
var args__5775__auto__ = [];
var len__5769__auto___50886 = arguments.length;
var i__5770__auto___50887 = (0);
while(true){
if((i__5770__auto___50887 < len__5769__auto___50886)){
args__5775__auto__.push((arguments[i__5770__auto___50887]));

var G__50889 = (i__5770__auto___50887 + (1));
i__5770__auto___50887 = G__50889;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48786 = conformed_args__47299__auto__;
var map__48786__$1 = cljs.core.__destructure_map(map__48786);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq48784){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48784));
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
var args__5775__auto__ = [];
var len__5769__auto___50891 = arguments.length;
var i__5770__auto___50892 = (0);
while(true){
if((i__5770__auto___50892 < len__5769__auto___50891)){
args__5775__auto__.push((arguments[i__5770__auto___50892]));

var G__50893 = (i__5770__auto___50892 + (1));
i__5770__auto___50892 = G__50893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48790 = conformed_args__47299__auto__;
var map__48790__$1 = cljs.core.__destructure_map(map__48790);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq48789){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48789));
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
var args__5775__auto__ = [];
var len__5769__auto___50900 = arguments.length;
var i__5770__auto___50901 = (0);
while(true){
if((i__5770__auto___50901 < len__5769__auto___50900)){
args__5775__auto__.push((arguments[i__5770__auto___50901]));

var G__50902 = (i__5770__auto___50901 + (1));
i__5770__auto___50901 = G__50902;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48798 = conformed_args__47299__auto__;
var map__48798__$1 = cljs.core.__destructure_map(map__48798);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq48795){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48795));
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
var args__5775__auto__ = [];
var len__5769__auto___50903 = arguments.length;
var i__5770__auto___50904 = (0);
while(true){
if((i__5770__auto___50904 < len__5769__auto___50903)){
args__5775__auto__.push((arguments[i__5770__auto___50904]));

var G__50905 = (i__5770__auto___50904 + (1));
i__5770__auto___50904 = G__50905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48804 = conformed_args__47299__auto__;
var map__48804__$1 = cljs.core.__destructure_map(map__48804);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq48801){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48801));
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
var args__5775__auto__ = [];
var len__5769__auto___50907 = arguments.length;
var i__5770__auto___50908 = (0);
while(true){
if((i__5770__auto___50908 < len__5769__auto___50907)){
args__5775__auto__.push((arguments[i__5770__auto___50908]));

var G__50911 = (i__5770__auto___50908 + (1));
i__5770__auto___50908 = G__50911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48808 = conformed_args__47299__auto__;
var map__48808__$1 = cljs.core.__destructure_map(map__48808);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq48805){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48805));
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
var args__5775__auto__ = [];
var len__5769__auto___50916 = arguments.length;
var i__5770__auto___50918 = (0);
while(true){
if((i__5770__auto___50918 < len__5769__auto___50916)){
args__5775__auto__.push((arguments[i__5770__auto___50918]));

var G__50920 = (i__5770__auto___50918 + (1));
i__5770__auto___50918 = G__50920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48813 = conformed_args__47299__auto__;
var map__48813__$1 = cljs.core.__destructure_map(map__48813);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq48810){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48810));
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
var args__5775__auto__ = [];
var len__5769__auto___50927 = arguments.length;
var i__5770__auto___50929 = (0);
while(true){
if((i__5770__auto___50929 < len__5769__auto___50927)){
args__5775__auto__.push((arguments[i__5770__auto___50929]));

var G__50930 = (i__5770__auto___50929 + (1));
i__5770__auto___50929 = G__50930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48819 = conformed_args__47299__auto__;
var map__48819__$1 = cljs.core.__destructure_map(map__48819);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq48816){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48816));
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
var args__5775__auto__ = [];
var len__5769__auto___50933 = arguments.length;
var i__5770__auto___50934 = (0);
while(true){
if((i__5770__auto___50934 < len__5769__auto___50933)){
args__5775__auto__.push((arguments[i__5770__auto___50934]));

var G__50935 = (i__5770__auto___50934 + (1));
i__5770__auto___50934 = G__50935;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48831 = conformed_args__47299__auto__;
var map__48831__$1 = cljs.core.__destructure_map(map__48831);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq48829){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48829));
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
var args__5775__auto__ = [];
var len__5769__auto___50936 = arguments.length;
var i__5770__auto___50937 = (0);
while(true){
if((i__5770__auto___50937 < len__5769__auto___50936)){
args__5775__auto__.push((arguments[i__5770__auto___50937]));

var G__50939 = (i__5770__auto___50937 + (1));
i__5770__auto___50937 = G__50939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48841 = conformed_args__47299__auto__;
var map__48841__$1 = cljs.core.__destructure_map(map__48841);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq48836){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48836));
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
var args__5775__auto__ = [];
var len__5769__auto___50944 = arguments.length;
var i__5770__auto___50945 = (0);
while(true){
if((i__5770__auto___50945 < len__5769__auto___50944)){
args__5775__auto__.push((arguments[i__5770__auto___50945]));

var G__50947 = (i__5770__auto___50945 + (1));
i__5770__auto___50945 = G__50947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48849 = conformed_args__47299__auto__;
var map__48849__$1 = cljs.core.__destructure_map(map__48849);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq48846){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48846));
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
var args__5775__auto__ = [];
var len__5769__auto___50952 = arguments.length;
var i__5770__auto___50953 = (0);
while(true){
if((i__5770__auto___50953 < len__5769__auto___50952)){
args__5775__auto__.push((arguments[i__5770__auto___50953]));

var G__50954 = (i__5770__auto___50953 + (1));
i__5770__auto___50953 = G__50954;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48853 = conformed_args__47299__auto__;
var map__48853__$1 = cljs.core.__destructure_map(map__48853);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq48851){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48851));
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
var args__5775__auto__ = [];
var len__5769__auto___50957 = arguments.length;
var i__5770__auto___50958 = (0);
while(true){
if((i__5770__auto___50958 < len__5769__auto___50957)){
args__5775__auto__.push((arguments[i__5770__auto___50958]));

var G__50959 = (i__5770__auto___50958 + (1));
i__5770__auto___50958 = G__50959;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48858 = conformed_args__47299__auto__;
var map__48858__$1 = cljs.core.__destructure_map(map__48858);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq48855){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48855));
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
var args__5775__auto__ = [];
var len__5769__auto___50963 = arguments.length;
var i__5770__auto___50964 = (0);
while(true){
if((i__5770__auto___50964 < len__5769__auto___50963)){
args__5775__auto__.push((arguments[i__5770__auto___50964]));

var G__50965 = (i__5770__auto___50964 + (1));
i__5770__auto___50964 = G__50965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48862 = conformed_args__47299__auto__;
var map__48862__$1 = cljs.core.__destructure_map(map__48862);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq48861){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48861));
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
var args__5775__auto__ = [];
var len__5769__auto___50966 = arguments.length;
var i__5770__auto___50968 = (0);
while(true){
if((i__5770__auto___50968 < len__5769__auto___50966)){
args__5775__auto__.push((arguments[i__5770__auto___50968]));

var G__50970 = (i__5770__auto___50968 + (1));
i__5770__auto___50968 = G__50970;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48866 = conformed_args__47299__auto__;
var map__48866__$1 = cljs.core.__destructure_map(map__48866);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq48865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48865));
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
var args__5775__auto__ = [];
var len__5769__auto___50984 = arguments.length;
var i__5770__auto___50985 = (0);
while(true){
if((i__5770__auto___50985 < len__5769__auto___50984)){
args__5775__auto__.push((arguments[i__5770__auto___50985]));

var G__50986 = (i__5770__auto___50985 + (1));
i__5770__auto___50985 = G__50986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48872 = conformed_args__47299__auto__;
var map__48872__$1 = cljs.core.__destructure_map(map__48872);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq48868){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48868));
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
var args__5775__auto__ = [];
var len__5769__auto___50993 = arguments.length;
var i__5770__auto___50994 = (0);
while(true){
if((i__5770__auto___50994 < len__5769__auto___50993)){
args__5775__auto__.push((arguments[i__5770__auto___50994]));

var G__50995 = (i__5770__auto___50994 + (1));
i__5770__auto___50994 = G__50995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48874 = conformed_args__47299__auto__;
var map__48874__$1 = cljs.core.__destructure_map(map__48874);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq48873){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48873));
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
var args__5775__auto__ = [];
var len__5769__auto___50999 = arguments.length;
var i__5770__auto___51000 = (0);
while(true){
if((i__5770__auto___51000 < len__5769__auto___50999)){
args__5775__auto__.push((arguments[i__5770__auto___51000]));

var G__51001 = (i__5770__auto___51000 + (1));
i__5770__auto___51000 = G__51001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48879 = conformed_args__47299__auto__;
var map__48879__$1 = cljs.core.__destructure_map(map__48879);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48879__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq48876){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48876));
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
var args__5775__auto__ = [];
var len__5769__auto___51005 = arguments.length;
var i__5770__auto___51006 = (0);
while(true){
if((i__5770__auto___51006 < len__5769__auto___51005)){
args__5775__auto__.push((arguments[i__5770__auto___51006]));

var G__51007 = (i__5770__auto___51006 + (1));
i__5770__auto___51006 = G__51007;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48887 = conformed_args__47299__auto__;
var map__48887__$1 = cljs.core.__destructure_map(map__48887);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq48885){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48885));
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
var args__5775__auto__ = [];
var len__5769__auto___51012 = arguments.length;
var i__5770__auto___51014 = (0);
while(true){
if((i__5770__auto___51014 < len__5769__auto___51012)){
args__5775__auto__.push((arguments[i__5770__auto___51014]));

var G__51016 = (i__5770__auto___51014 + (1));
i__5770__auto___51014 = G__51016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48894 = conformed_args__47299__auto__;
var map__48894__$1 = cljs.core.__destructure_map(map__48894);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq48889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48889));
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
var args__5775__auto__ = [];
var len__5769__auto___51018 = arguments.length;
var i__5770__auto___51019 = (0);
while(true){
if((i__5770__auto___51019 < len__5769__auto___51018)){
args__5775__auto__.push((arguments[i__5770__auto___51019]));

var G__51021 = (i__5770__auto___51019 + (1));
i__5770__auto___51019 = G__51021;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48899 = conformed_args__47299__auto__;
var map__48899__$1 = cljs.core.__destructure_map(map__48899);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq48896){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48896));
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
var args__5775__auto__ = [];
var len__5769__auto___51027 = arguments.length;
var i__5770__auto___51028 = (0);
while(true){
if((i__5770__auto___51028 < len__5769__auto___51027)){
args__5775__auto__.push((arguments[i__5770__auto___51028]));

var G__51029 = (i__5770__auto___51028 + (1));
i__5770__auto___51028 = G__51029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48916 = conformed_args__47299__auto__;
var map__48916__$1 = cljs.core.__destructure_map(map__48916);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq48902){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48902));
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
var args__5775__auto__ = [];
var len__5769__auto___51036 = arguments.length;
var i__5770__auto___51038 = (0);
while(true){
if((i__5770__auto___51038 < len__5769__auto___51036)){
args__5775__auto__.push((arguments[i__5770__auto___51038]));

var G__51041 = (i__5770__auto___51038 + (1));
i__5770__auto___51038 = G__51041;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48921 = conformed_args__47299__auto__;
var map__48921__$1 = cljs.core.__destructure_map(map__48921);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq48918){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48918));
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
var args__5775__auto__ = [];
var len__5769__auto___51042 = arguments.length;
var i__5770__auto___51043 = (0);
while(true){
if((i__5770__auto___51043 < len__5769__auto___51042)){
args__5775__auto__.push((arguments[i__5770__auto___51043]));

var G__51044 = (i__5770__auto___51043 + (1));
i__5770__auto___51043 = G__51044;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48926 = conformed_args__47299__auto__;
var map__48926__$1 = cljs.core.__destructure_map(map__48926);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48926__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48926__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48926__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq48923){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48923));
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
var args__5775__auto__ = [];
var len__5769__auto___51045 = arguments.length;
var i__5770__auto___51046 = (0);
while(true){
if((i__5770__auto___51046 < len__5769__auto___51045)){
args__5775__auto__.push((arguments[i__5770__auto___51046]));

var G__51047 = (i__5770__auto___51046 + (1));
i__5770__auto___51046 = G__51047;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48930 = conformed_args__47299__auto__;
var map__48930__$1 = cljs.core.__destructure_map(map__48930);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq48928){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48928));
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
var args__5775__auto__ = [];
var len__5769__auto___51048 = arguments.length;
var i__5770__auto___51049 = (0);
while(true){
if((i__5770__auto___51049 < len__5769__auto___51048)){
args__5775__auto__.push((arguments[i__5770__auto___51049]));

var G__51050 = (i__5770__auto___51049 + (1));
i__5770__auto___51049 = G__51050;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48936 = conformed_args__47299__auto__;
var map__48936__$1 = cljs.core.__destructure_map(map__48936);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48936__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq48933){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48933));
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
var args__5775__auto__ = [];
var len__5769__auto___51051 = arguments.length;
var i__5770__auto___51052 = (0);
while(true){
if((i__5770__auto___51052 < len__5769__auto___51051)){
args__5775__auto__.push((arguments[i__5770__auto___51052]));

var G__51053 = (i__5770__auto___51052 + (1));
i__5770__auto___51052 = G__51053;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48941 = conformed_args__47299__auto__;
var map__48941__$1 = cljs.core.__destructure_map(map__48941);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq48938){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48938));
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
var args__5775__auto__ = [];
var len__5769__auto___51056 = arguments.length;
var i__5770__auto___51057 = (0);
while(true){
if((i__5770__auto___51057 < len__5769__auto___51056)){
args__5775__auto__.push((arguments[i__5770__auto___51057]));

var G__51058 = (i__5770__auto___51057 + (1));
i__5770__auto___51057 = G__51058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48946 = conformed_args__47299__auto__;
var map__48946__$1 = cljs.core.__destructure_map(map__48946);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48946__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48946__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48946__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq48943){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48943));
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
var args__5775__auto__ = [];
var len__5769__auto___51062 = arguments.length;
var i__5770__auto___51064 = (0);
while(true){
if((i__5770__auto___51064 < len__5769__auto___51062)){
args__5775__auto__.push((arguments[i__5770__auto___51064]));

var G__51065 = (i__5770__auto___51064 + (1));
i__5770__auto___51064 = G__51065;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48951 = conformed_args__47299__auto__;
var map__48951__$1 = cljs.core.__destructure_map(map__48951);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq48949){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48949));
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
var args__5775__auto__ = [];
var len__5769__auto___51068 = arguments.length;
var i__5770__auto___51069 = (0);
while(true){
if((i__5770__auto___51069 < len__5769__auto___51068)){
args__5775__auto__.push((arguments[i__5770__auto___51069]));

var G__51070 = (i__5770__auto___51069 + (1));
i__5770__auto___51069 = G__51070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48956 = conformed_args__47299__auto__;
var map__48956__$1 = cljs.core.__destructure_map(map__48956);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq48954){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48954));
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
var args__5775__auto__ = [];
var len__5769__auto___51071 = arguments.length;
var i__5770__auto___51072 = (0);
while(true){
if((i__5770__auto___51072 < len__5769__auto___51071)){
args__5775__auto__.push((arguments[i__5770__auto___51072]));

var G__51073 = (i__5770__auto___51072 + (1));
i__5770__auto___51072 = G__51073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48961 = conformed_args__47299__auto__;
var map__48961__$1 = cljs.core.__destructure_map(map__48961);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq48959){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48959));
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
var args__5775__auto__ = [];
var len__5769__auto___51075 = arguments.length;
var i__5770__auto___51076 = (0);
while(true){
if((i__5770__auto___51076 < len__5769__auto___51075)){
args__5775__auto__.push((arguments[i__5770__auto___51076]));

var G__51079 = (i__5770__auto___51076 + (1));
i__5770__auto___51076 = G__51079;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48965 = conformed_args__47299__auto__;
var map__48965__$1 = cljs.core.__destructure_map(map__48965);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq48963){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48963));
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
var args__5775__auto__ = [];
var len__5769__auto___51081 = arguments.length;
var i__5770__auto___51082 = (0);
while(true){
if((i__5770__auto___51082 < len__5769__auto___51081)){
args__5775__auto__.push((arguments[i__5770__auto___51082]));

var G__51083 = (i__5770__auto___51082 + (1));
i__5770__auto___51082 = G__51083;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48970 = conformed_args__47299__auto__;
var map__48970__$1 = cljs.core.__destructure_map(map__48970);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq48967){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48967));
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
var args__5775__auto__ = [];
var len__5769__auto___51086 = arguments.length;
var i__5770__auto___51087 = (0);
while(true){
if((i__5770__auto___51087 < len__5769__auto___51086)){
args__5775__auto__.push((arguments[i__5770__auto___51087]));

var G__51089 = (i__5770__auto___51087 + (1));
i__5770__auto___51087 = G__51089;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48975 = conformed_args__47299__auto__;
var map__48975__$1 = cljs.core.__destructure_map(map__48975);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq48972){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48972));
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
var args__5775__auto__ = [];
var len__5769__auto___51095 = arguments.length;
var i__5770__auto___51096 = (0);
while(true){
if((i__5770__auto___51096 < len__5769__auto___51095)){
args__5775__auto__.push((arguments[i__5770__auto___51096]));

var G__51097 = (i__5770__auto___51096 + (1));
i__5770__auto___51096 = G__51097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48977 = conformed_args__47299__auto__;
var map__48977__$1 = cljs.core.__destructure_map(map__48977);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq48976){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48976));
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
var args__5775__auto__ = [];
var len__5769__auto___51099 = arguments.length;
var i__5770__auto___51100 = (0);
while(true){
if((i__5770__auto___51100 < len__5769__auto___51099)){
args__5775__auto__.push((arguments[i__5770__auto___51100]));

var G__51101 = (i__5770__auto___51100 + (1));
i__5770__auto___51100 = G__51101;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48979 = conformed_args__47299__auto__;
var map__48979__$1 = cljs.core.__destructure_map(map__48979);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq48978){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48978));
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
var args__5775__auto__ = [];
var len__5769__auto___51103 = arguments.length;
var i__5770__auto___51104 = (0);
while(true){
if((i__5770__auto___51104 < len__5769__auto___51103)){
args__5775__auto__.push((arguments[i__5770__auto___51104]));

var G__51106 = (i__5770__auto___51104 + (1));
i__5770__auto___51104 = G__51106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48981 = conformed_args__47299__auto__;
var map__48981__$1 = cljs.core.__destructure_map(map__48981);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq48980){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48980));
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
var args__5775__auto__ = [];
var len__5769__auto___51108 = arguments.length;
var i__5770__auto___51109 = (0);
while(true){
if((i__5770__auto___51109 < len__5769__auto___51108)){
args__5775__auto__.push((arguments[i__5770__auto___51109]));

var G__51112 = (i__5770__auto___51109 + (1));
i__5770__auto___51109 = G__51112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48983 = conformed_args__47299__auto__;
var map__48983__$1 = cljs.core.__destructure_map(map__48983);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq48982){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48982));
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
var args__5775__auto__ = [];
var len__5769__auto___51119 = arguments.length;
var i__5770__auto___51120 = (0);
while(true){
if((i__5770__auto___51120 < len__5769__auto___51119)){
args__5775__auto__.push((arguments[i__5770__auto___51120]));

var G__51121 = (i__5770__auto___51120 + (1));
i__5770__auto___51120 = G__51121;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__48985 = conformed_args__47299__auto__;
var map__48985__$1 = cljs.core.__destructure_map(map__48985);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq48984){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48984));
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
var args__5775__auto__ = [];
var len__5769__auto___51123 = arguments.length;
var i__5770__auto___51124 = (0);
while(true){
if((i__5770__auto___51124 < len__5769__auto___51123)){
args__5775__auto__.push((arguments[i__5770__auto___51124]));

var G__51125 = (i__5770__auto___51124 + (1));
i__5770__auto___51124 = G__51125;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49009 = conformed_args__47299__auto__;
var map__49009__$1 = cljs.core.__destructure_map(map__49009);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq48994){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48994));
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
var args__5775__auto__ = [];
var len__5769__auto___51128 = arguments.length;
var i__5770__auto___51129 = (0);
while(true){
if((i__5770__auto___51129 < len__5769__auto___51128)){
args__5775__auto__.push((arguments[i__5770__auto___51129]));

var G__51130 = (i__5770__auto___51129 + (1));
i__5770__auto___51129 = G__51130;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49042 = conformed_args__47299__auto__;
var map__49042__$1 = cljs.core.__destructure_map(map__49042);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49042__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49042__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq49032){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49032));
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
var args__5775__auto__ = [];
var len__5769__auto___51135 = arguments.length;
var i__5770__auto___51136 = (0);
while(true){
if((i__5770__auto___51136 < len__5769__auto___51135)){
args__5775__auto__.push((arguments[i__5770__auto___51136]));

var G__51137 = (i__5770__auto___51136 + (1));
i__5770__auto___51136 = G__51137;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49046 = conformed_args__47299__auto__;
var map__49046__$1 = cljs.core.__destructure_map(map__49046);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq49043){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49043));
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
var args__5775__auto__ = [];
var len__5769__auto___51141 = arguments.length;
var i__5770__auto___51142 = (0);
while(true){
if((i__5770__auto___51142 < len__5769__auto___51141)){
args__5775__auto__.push((arguments[i__5770__auto___51142]));

var G__51143 = (i__5770__auto___51142 + (1));
i__5770__auto___51142 = G__51143;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49054 = conformed_args__47299__auto__;
var map__49054__$1 = cljs.core.__destructure_map(map__49054);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq49048){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49048));
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
var args__5775__auto__ = [];
var len__5769__auto___51150 = arguments.length;
var i__5770__auto___51151 = (0);
while(true){
if((i__5770__auto___51151 < len__5769__auto___51150)){
args__5775__auto__.push((arguments[i__5770__auto___51151]));

var G__51152 = (i__5770__auto___51151 + (1));
i__5770__auto___51151 = G__51152;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49102 = conformed_args__47299__auto__;
var map__49102__$1 = cljs.core.__destructure_map(map__49102);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49102__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq49086){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49086));
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
var args__5775__auto__ = [];
var len__5769__auto___51159 = arguments.length;
var i__5770__auto___51160 = (0);
while(true){
if((i__5770__auto___51160 < len__5769__auto___51159)){
args__5775__auto__.push((arguments[i__5770__auto___51160]));

var G__51161 = (i__5770__auto___51160 + (1));
i__5770__auto___51160 = G__51161;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49110 = conformed_args__47299__auto__;
var map__49110__$1 = cljs.core.__destructure_map(map__49110);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq49108){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49108));
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
var args__5775__auto__ = [];
var len__5769__auto___51163 = arguments.length;
var i__5770__auto___51164 = (0);
while(true){
if((i__5770__auto___51164 < len__5769__auto___51163)){
args__5775__auto__.push((arguments[i__5770__auto___51164]));

var G__51165 = (i__5770__auto___51164 + (1));
i__5770__auto___51164 = G__51165;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49122 = conformed_args__47299__auto__;
var map__49122__$1 = cljs.core.__destructure_map(map__49122);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq49114){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49114));
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
var args__5775__auto__ = [];
var len__5769__auto___51171 = arguments.length;
var i__5770__auto___51172 = (0);
while(true){
if((i__5770__auto___51172 < len__5769__auto___51171)){
args__5775__auto__.push((arguments[i__5770__auto___51172]));

var G__51173 = (i__5770__auto___51172 + (1));
i__5770__auto___51172 = G__51173;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49132 = conformed_args__47299__auto__;
var map__49132__$1 = cljs.core.__destructure_map(map__49132);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49132__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49132__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49132__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq49128){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49128));
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
var args__5775__auto__ = [];
var len__5769__auto___51175 = arguments.length;
var i__5770__auto___51176 = (0);
while(true){
if((i__5770__auto___51176 < len__5769__auto___51175)){
args__5775__auto__.push((arguments[i__5770__auto___51176]));

var G__51177 = (i__5770__auto___51176 + (1));
i__5770__auto___51176 = G__51177;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49148 = conformed_args__47299__auto__;
var map__49148__$1 = cljs.core.__destructure_map(map__49148);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq49143){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49143));
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
var args__5775__auto__ = [];
var len__5769__auto___51182 = arguments.length;
var i__5770__auto___51183 = (0);
while(true){
if((i__5770__auto___51183 < len__5769__auto___51182)){
args__5775__auto__.push((arguments[i__5770__auto___51183]));

var G__51184 = (i__5770__auto___51183 + (1));
i__5770__auto___51183 = G__51184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49167 = conformed_args__47299__auto__;
var map__49167__$1 = cljs.core.__destructure_map(map__49167);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq49160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49160));
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
var args__5775__auto__ = [];
var len__5769__auto___51189 = arguments.length;
var i__5770__auto___51192 = (0);
while(true){
if((i__5770__auto___51192 < len__5769__auto___51189)){
args__5775__auto__.push((arguments[i__5770__auto___51192]));

var G__51196 = (i__5770__auto___51192 + (1));
i__5770__auto___51192 = G__51196;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49184 = conformed_args__47299__auto__;
var map__49184__$1 = cljs.core.__destructure_map(map__49184);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq49176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49176));
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
var args__5775__auto__ = [];
var len__5769__auto___51199 = arguments.length;
var i__5770__auto___51200 = (0);
while(true){
if((i__5770__auto___51200 < len__5769__auto___51199)){
args__5775__auto__.push((arguments[i__5770__auto___51200]));

var G__51201 = (i__5770__auto___51200 + (1));
i__5770__auto___51200 = G__51201;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49197 = conformed_args__47299__auto__;
var map__49197__$1 = cljs.core.__destructure_map(map__49197);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq49188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49188));
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
var args__5775__auto__ = [];
var len__5769__auto___51212 = arguments.length;
var i__5770__auto___51213 = (0);
while(true){
if((i__5770__auto___51213 < len__5769__auto___51212)){
args__5775__auto__.push((arguments[i__5770__auto___51213]));

var G__51214 = (i__5770__auto___51213 + (1));
i__5770__auto___51213 = G__51214;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49209 = conformed_args__47299__auto__;
var map__49209__$1 = cljs.core.__destructure_map(map__49209);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq49206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49206));
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
var args__5775__auto__ = [];
var len__5769__auto___51217 = arguments.length;
var i__5770__auto___51218 = (0);
while(true){
if((i__5770__auto___51218 < len__5769__auto___51217)){
args__5775__auto__.push((arguments[i__5770__auto___51218]));

var G__51219 = (i__5770__auto___51218 + (1));
i__5770__auto___51218 = G__51219;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49218 = conformed_args__47299__auto__;
var map__49218__$1 = cljs.core.__destructure_map(map__49218);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq49214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49214));
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
var args__5775__auto__ = [];
var len__5769__auto___51224 = arguments.length;
var i__5770__auto___51225 = (0);
while(true){
if((i__5770__auto___51225 < len__5769__auto___51224)){
args__5775__auto__.push((arguments[i__5770__auto___51225]));

var G__51226 = (i__5770__auto___51225 + (1));
i__5770__auto___51225 = G__51226;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49231 = conformed_args__47299__auto__;
var map__49231__$1 = cljs.core.__destructure_map(map__49231);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq49225){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49225));
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
var args__5775__auto__ = [];
var len__5769__auto___51228 = arguments.length;
var i__5770__auto___51229 = (0);
while(true){
if((i__5770__auto___51229 < len__5769__auto___51228)){
args__5775__auto__.push((arguments[i__5770__auto___51229]));

var G__51230 = (i__5770__auto___51229 + (1));
i__5770__auto___51229 = G__51230;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49249 = conformed_args__47299__auto__;
var map__49249__$1 = cljs.core.__destructure_map(map__49249);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq49236){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49236));
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
var args__5775__auto__ = [];
var len__5769__auto___51235 = arguments.length;
var i__5770__auto___51236 = (0);
while(true){
if((i__5770__auto___51236 < len__5769__auto___51235)){
args__5775__auto__.push((arguments[i__5770__auto___51236]));

var G__51237 = (i__5770__auto___51236 + (1));
i__5770__auto___51236 = G__51237;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49274 = conformed_args__47299__auto__;
var map__49274__$1 = cljs.core.__destructure_map(map__49274);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq49272){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49272));
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
var args__5775__auto__ = [];
var len__5769__auto___51245 = arguments.length;
var i__5770__auto___51246 = (0);
while(true){
if((i__5770__auto___51246 < len__5769__auto___51245)){
args__5775__auto__.push((arguments[i__5770__auto___51246]));

var G__51247 = (i__5770__auto___51246 + (1));
i__5770__auto___51246 = G__51247;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49276 = conformed_args__47299__auto__;
var map__49276__$1 = cljs.core.__destructure_map(map__49276);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq49275){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49275));
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
var args__5775__auto__ = [];
var len__5769__auto___51248 = arguments.length;
var i__5770__auto___51249 = (0);
while(true){
if((i__5770__auto___51249 < len__5769__auto___51248)){
args__5775__auto__.push((arguments[i__5770__auto___51249]));

var G__51250 = (i__5770__auto___51249 + (1));
i__5770__auto___51249 = G__51250;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49292 = conformed_args__47299__auto__;
var map__49292__$1 = cljs.core.__destructure_map(map__49292);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq49281){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49281));
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
var args__5775__auto__ = [];
var len__5769__auto___51256 = arguments.length;
var i__5770__auto___51257 = (0);
while(true){
if((i__5770__auto___51257 < len__5769__auto___51256)){
args__5775__auto__.push((arguments[i__5770__auto___51257]));

var G__51258 = (i__5770__auto___51257 + (1));
i__5770__auto___51257 = G__51258;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49304 = conformed_args__47299__auto__;
var map__49304__$1 = cljs.core.__destructure_map(map__49304);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq49296){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49296));
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
var args__5775__auto__ = [];
var len__5769__auto___51260 = arguments.length;
var i__5770__auto___51261 = (0);
while(true){
if((i__5770__auto___51261 < len__5769__auto___51260)){
args__5775__auto__.push((arguments[i__5770__auto___51261]));

var G__51263 = (i__5770__auto___51261 + (1));
i__5770__auto___51261 = G__51263;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49321 = conformed_args__47299__auto__;
var map__49321__$1 = cljs.core.__destructure_map(map__49321);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq49313){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49313));
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
var args__5775__auto__ = [];
var len__5769__auto___51271 = arguments.length;
var i__5770__auto___51272 = (0);
while(true){
if((i__5770__auto___51272 < len__5769__auto___51271)){
args__5775__auto__.push((arguments[i__5770__auto___51272]));

var G__51275 = (i__5770__auto___51272 + (1));
i__5770__auto___51272 = G__51275;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49343 = conformed_args__47299__auto__;
var map__49343__$1 = cljs.core.__destructure_map(map__49343);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49343__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49343__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq49326){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49326));
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
var args__5775__auto__ = [];
var len__5769__auto___51284 = arguments.length;
var i__5770__auto___51285 = (0);
while(true){
if((i__5770__auto___51285 < len__5769__auto___51284)){
args__5775__auto__.push((arguments[i__5770__auto___51285]));

var G__51286 = (i__5770__auto___51285 + (1));
i__5770__auto___51285 = G__51286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49369 = conformed_args__47299__auto__;
var map__49369__$1 = cljs.core.__destructure_map(map__49369);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49369__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49369__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49369__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq49361){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49361));
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
var args__5775__auto__ = [];
var len__5769__auto___51288 = arguments.length;
var i__5770__auto___51291 = (0);
while(true){
if((i__5770__auto___51291 < len__5769__auto___51288)){
args__5775__auto__.push((arguments[i__5770__auto___51291]));

var G__51293 = (i__5770__auto___51291 + (1));
i__5770__auto___51291 = G__51293;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49395 = conformed_args__47299__auto__;
var map__49395__$1 = cljs.core.__destructure_map(map__49395);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq49379){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49379));
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
var args__5775__auto__ = [];
var len__5769__auto___51299 = arguments.length;
var i__5770__auto___51300 = (0);
while(true){
if((i__5770__auto___51300 < len__5769__auto___51299)){
args__5775__auto__.push((arguments[i__5770__auto___51300]));

var G__51301 = (i__5770__auto___51300 + (1));
i__5770__auto___51300 = G__51301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49397 = conformed_args__47299__auto__;
var map__49397__$1 = cljs.core.__destructure_map(map__49397);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq49396){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49396));
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
var args__5775__auto__ = [];
var len__5769__auto___51305 = arguments.length;
var i__5770__auto___51306 = (0);
while(true){
if((i__5770__auto___51306 < len__5769__auto___51305)){
args__5775__auto__.push((arguments[i__5770__auto___51306]));

var G__51307 = (i__5770__auto___51306 + (1));
i__5770__auto___51306 = G__51307;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49406 = conformed_args__47299__auto__;
var map__49406__$1 = cljs.core.__destructure_map(map__49406);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq49400){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49400));
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
var args__5775__auto__ = [];
var len__5769__auto___51314 = arguments.length;
var i__5770__auto___51315 = (0);
while(true){
if((i__5770__auto___51315 < len__5769__auto___51314)){
args__5775__auto__.push((arguments[i__5770__auto___51315]));

var G__51316 = (i__5770__auto___51315 + (1));
i__5770__auto___51315 = G__51316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49410 = conformed_args__47299__auto__;
var map__49410__$1 = cljs.core.__destructure_map(map__49410);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq49407){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49407));
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
var args__5775__auto__ = [];
var len__5769__auto___51320 = arguments.length;
var i__5770__auto___51321 = (0);
while(true){
if((i__5770__auto___51321 < len__5769__auto___51320)){
args__5775__auto__.push((arguments[i__5770__auto___51321]));

var G__51322 = (i__5770__auto___51321 + (1));
i__5770__auto___51321 = G__51322;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49418 = conformed_args__47299__auto__;
var map__49418__$1 = cljs.core.__destructure_map(map__49418);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq49416){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49416));
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
var args__5775__auto__ = [];
var len__5769__auto___51327 = arguments.length;
var i__5770__auto___51328 = (0);
while(true){
if((i__5770__auto___51328 < len__5769__auto___51327)){
args__5775__auto__.push((arguments[i__5770__auto___51328]));

var G__51329 = (i__5770__auto___51328 + (1));
i__5770__auto___51328 = G__51329;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49422 = conformed_args__47299__auto__;
var map__49422__$1 = cljs.core.__destructure_map(map__49422);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq49420){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49420));
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
var args__5775__auto__ = [];
var len__5769__auto___51331 = arguments.length;
var i__5770__auto___51332 = (0);
while(true){
if((i__5770__auto___51332 < len__5769__auto___51331)){
args__5775__auto__.push((arguments[i__5770__auto___51332]));

var G__51333 = (i__5770__auto___51332 + (1));
i__5770__auto___51332 = G__51333;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49426 = conformed_args__47299__auto__;
var map__49426__$1 = cljs.core.__destructure_map(map__49426);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq49424){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49424));
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
var args__5775__auto__ = [];
var len__5769__auto___51340 = arguments.length;
var i__5770__auto___51341 = (0);
while(true){
if((i__5770__auto___51341 < len__5769__auto___51340)){
args__5775__auto__.push((arguments[i__5770__auto___51341]));

var G__51343 = (i__5770__auto___51341 + (1));
i__5770__auto___51341 = G__51343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49433 = conformed_args__47299__auto__;
var map__49433__$1 = cljs.core.__destructure_map(map__49433);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq49431){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49431));
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
var args__5775__auto__ = [];
var len__5769__auto___51354 = arguments.length;
var i__5770__auto___51355 = (0);
while(true){
if((i__5770__auto___51355 < len__5769__auto___51354)){
args__5775__auto__.push((arguments[i__5770__auto___51355]));

var G__51356 = (i__5770__auto___51355 + (1));
i__5770__auto___51355 = G__51356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49443 = conformed_args__47299__auto__;
var map__49443__$1 = cljs.core.__destructure_map(map__49443);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq49442){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49442));
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
var args__5775__auto__ = [];
var len__5769__auto___51360 = arguments.length;
var i__5770__auto___51361 = (0);
while(true){
if((i__5770__auto___51361 < len__5769__auto___51360)){
args__5775__auto__.push((arguments[i__5770__auto___51361]));

var G__51362 = (i__5770__auto___51361 + (1));
i__5770__auto___51361 = G__51362;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49447 = conformed_args__47299__auto__;
var map__49447__$1 = cljs.core.__destructure_map(map__49447);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49447__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq49444){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49444));
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
var args__5775__auto__ = [];
var len__5769__auto___51363 = arguments.length;
var i__5770__auto___51364 = (0);
while(true){
if((i__5770__auto___51364 < len__5769__auto___51363)){
args__5775__auto__.push((arguments[i__5770__auto___51364]));

var G__51365 = (i__5770__auto___51364 + (1));
i__5770__auto___51364 = G__51365;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49452 = conformed_args__47299__auto__;
var map__49452__$1 = cljs.core.__destructure_map(map__49452);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq49451){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49451));
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
var args__5775__auto__ = [];
var len__5769__auto___51368 = arguments.length;
var i__5770__auto___51369 = (0);
while(true){
if((i__5770__auto___51369 < len__5769__auto___51368)){
args__5775__auto__.push((arguments[i__5770__auto___51369]));

var G__51370 = (i__5770__auto___51369 + (1));
i__5770__auto___51369 = G__51370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49456 = conformed_args__47299__auto__;
var map__49456__$1 = cljs.core.__destructure_map(map__49456);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq49454){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49454));
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
var args__5775__auto__ = [];
var len__5769__auto___51377 = arguments.length;
var i__5770__auto___51378 = (0);
while(true){
if((i__5770__auto___51378 < len__5769__auto___51377)){
args__5775__auto__.push((arguments[i__5770__auto___51378]));

var G__51381 = (i__5770__auto___51378 + (1));
i__5770__auto___51378 = G__51381;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49460 = conformed_args__47299__auto__;
var map__49460__$1 = cljs.core.__destructure_map(map__49460);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq49457){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49457));
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
var args__5775__auto__ = [];
var len__5769__auto___51385 = arguments.length;
var i__5770__auto___51386 = (0);
while(true){
if((i__5770__auto___51386 < len__5769__auto___51385)){
args__5775__auto__.push((arguments[i__5770__auto___51386]));

var G__51387 = (i__5770__auto___51386 + (1));
i__5770__auto___51386 = G__51387;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49468 = conformed_args__47299__auto__;
var map__49468__$1 = cljs.core.__destructure_map(map__49468);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq49467){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49467));
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
var args__5775__auto__ = [];
var len__5769__auto___51390 = arguments.length;
var i__5770__auto___51391 = (0);
while(true){
if((i__5770__auto___51391 < len__5769__auto___51390)){
args__5775__auto__.push((arguments[i__5770__auto___51391]));

var G__51392 = (i__5770__auto___51391 + (1));
i__5770__auto___51391 = G__51392;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49476 = conformed_args__47299__auto__;
var map__49476__$1 = cljs.core.__destructure_map(map__49476);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq49472){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49472));
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
var args__5775__auto__ = [];
var len__5769__auto___51403 = arguments.length;
var i__5770__auto___51404 = (0);
while(true){
if((i__5770__auto___51404 < len__5769__auto___51403)){
args__5775__auto__.push((arguments[i__5770__auto___51404]));

var G__51405 = (i__5770__auto___51404 + (1));
i__5770__auto___51404 = G__51405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49485 = conformed_args__47299__auto__;
var map__49485__$1 = cljs.core.__destructure_map(map__49485);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq49480){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49480));
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
var args__5775__auto__ = [];
var len__5769__auto___51409 = arguments.length;
var i__5770__auto___51410 = (0);
while(true){
if((i__5770__auto___51410 < len__5769__auto___51409)){
args__5775__auto__.push((arguments[i__5770__auto___51410]));

var G__51412 = (i__5770__auto___51410 + (1));
i__5770__auto___51410 = G__51412;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49490 = conformed_args__47299__auto__;
var map__49490__$1 = cljs.core.__destructure_map(map__49490);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq49487){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49487));
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
var args__5775__auto__ = [];
var len__5769__auto___51417 = arguments.length;
var i__5770__auto___51422 = (0);
while(true){
if((i__5770__auto___51422 < len__5769__auto___51417)){
args__5775__auto__.push((arguments[i__5770__auto___51422]));

var G__51423 = (i__5770__auto___51422 + (1));
i__5770__auto___51422 = G__51423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49494 = conformed_args__47299__auto__;
var map__49494__$1 = cljs.core.__destructure_map(map__49494);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq49491){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49491));
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
var args__5775__auto__ = [];
var len__5769__auto___51427 = arguments.length;
var i__5770__auto___51428 = (0);
while(true){
if((i__5770__auto___51428 < len__5769__auto___51427)){
args__5775__auto__.push((arguments[i__5770__auto___51428]));

var G__51429 = (i__5770__auto___51428 + (1));
i__5770__auto___51428 = G__51429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49498 = conformed_args__47299__auto__;
var map__49498__$1 = cljs.core.__destructure_map(map__49498);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq49497){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49497));
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
var args__5775__auto__ = [];
var len__5769__auto___51430 = arguments.length;
var i__5770__auto___51431 = (0);
while(true){
if((i__5770__auto___51431 < len__5769__auto___51430)){
args__5775__auto__.push((arguments[i__5770__auto___51431]));

var G__51432 = (i__5770__auto___51431 + (1));
i__5770__auto___51431 = G__51432;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49506 = conformed_args__47299__auto__;
var map__49506__$1 = cljs.core.__destructure_map(map__49506);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq49500){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49500));
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
var args__5775__auto__ = [];
var len__5769__auto___51437 = arguments.length;
var i__5770__auto___51438 = (0);
while(true){
if((i__5770__auto___51438 < len__5769__auto___51437)){
args__5775__auto__.push((arguments[i__5770__auto___51438]));

var G__51439 = (i__5770__auto___51438 + (1));
i__5770__auto___51438 = G__51439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49509 = conformed_args__47299__auto__;
var map__49509__$1 = cljs.core.__destructure_map(map__49509);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq49507){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49507));
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
var args__5775__auto__ = [];
var len__5769__auto___51441 = arguments.length;
var i__5770__auto___51442 = (0);
while(true){
if((i__5770__auto___51442 < len__5769__auto___51441)){
args__5775__auto__.push((arguments[i__5770__auto___51442]));

var G__51443 = (i__5770__auto___51442 + (1));
i__5770__auto___51442 = G__51443;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49514 = conformed_args__47299__auto__;
var map__49514__$1 = cljs.core.__destructure_map(map__49514);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq49511){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49511));
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
var args__5775__auto__ = [];
var len__5769__auto___51448 = arguments.length;
var i__5770__auto___51449 = (0);
while(true){
if((i__5770__auto___51449 < len__5769__auto___51448)){
args__5775__auto__.push((arguments[i__5770__auto___51449]));

var G__51451 = (i__5770__auto___51449 + (1));
i__5770__auto___51449 = G__51451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49520 = conformed_args__47299__auto__;
var map__49520__$1 = cljs.core.__destructure_map(map__49520);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq49517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49517));
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
var args__5775__auto__ = [];
var len__5769__auto___51454 = arguments.length;
var i__5770__auto___51455 = (0);
while(true){
if((i__5770__auto___51455 < len__5769__auto___51454)){
args__5775__auto__.push((arguments[i__5770__auto___51455]));

var G__51456 = (i__5770__auto___51455 + (1));
i__5770__auto___51455 = G__51456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49526 = conformed_args__47299__auto__;
var map__49526__$1 = cljs.core.__destructure_map(map__49526);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq49523){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49523));
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
var args__5775__auto__ = [];
var len__5769__auto___51457 = arguments.length;
var i__5770__auto___51458 = (0);
while(true){
if((i__5770__auto___51458 < len__5769__auto___51457)){
args__5775__auto__.push((arguments[i__5770__auto___51458]));

var G__51459 = (i__5770__auto___51458 + (1));
i__5770__auto___51458 = G__51459;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49532 = conformed_args__47299__auto__;
var map__49532__$1 = cljs.core.__destructure_map(map__49532);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq49529){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49529));
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
var args__5775__auto__ = [];
var len__5769__auto___51464 = arguments.length;
var i__5770__auto___51466 = (0);
while(true){
if((i__5770__auto___51466 < len__5769__auto___51464)){
args__5775__auto__.push((arguments[i__5770__auto___51466]));

var G__51467 = (i__5770__auto___51466 + (1));
i__5770__auto___51466 = G__51467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49536 = conformed_args__47299__auto__;
var map__49536__$1 = cljs.core.__destructure_map(map__49536);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq49535){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49535));
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
var args__5775__auto__ = [];
var len__5769__auto___51473 = arguments.length;
var i__5770__auto___51474 = (0);
while(true){
if((i__5770__auto___51474 < len__5769__auto___51473)){
args__5775__auto__.push((arguments[i__5770__auto___51474]));

var G__51476 = (i__5770__auto___51474 + (1));
i__5770__auto___51474 = G__51476;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49539 = conformed_args__47299__auto__;
var map__49539__$1 = cljs.core.__destructure_map(map__49539);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq49538){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49538));
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
var args__5775__auto__ = [];
var len__5769__auto___51480 = arguments.length;
var i__5770__auto___51481 = (0);
while(true){
if((i__5770__auto___51481 < len__5769__auto___51480)){
args__5775__auto__.push((arguments[i__5770__auto___51481]));

var G__51482 = (i__5770__auto___51481 + (1));
i__5770__auto___51481 = G__51482;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49546 = conformed_args__47299__auto__;
var map__49546__$1 = cljs.core.__destructure_map(map__49546);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq49541){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49541));
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
var args__5775__auto__ = [];
var len__5769__auto___51488 = arguments.length;
var i__5770__auto___51489 = (0);
while(true){
if((i__5770__auto___51489 < len__5769__auto___51488)){
args__5775__auto__.push((arguments[i__5770__auto___51489]));

var G__51490 = (i__5770__auto___51489 + (1));
i__5770__auto___51489 = G__51490;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49550 = conformed_args__47299__auto__;
var map__49550__$1 = cljs.core.__destructure_map(map__49550);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq49547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49547));
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
var args__5775__auto__ = [];
var len__5769__auto___51496 = arguments.length;
var i__5770__auto___51497 = (0);
while(true){
if((i__5770__auto___51497 < len__5769__auto___51496)){
args__5775__auto__.push((arguments[i__5770__auto___51497]));

var G__51498 = (i__5770__auto___51497 + (1));
i__5770__auto___51497 = G__51498;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49554 = conformed_args__47299__auto__;
var map__49554__$1 = cljs.core.__destructure_map(map__49554);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq49553){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49553));
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
var args__5775__auto__ = [];
var len__5769__auto___51503 = arguments.length;
var i__5770__auto___51504 = (0);
while(true){
if((i__5770__auto___51504 < len__5769__auto___51503)){
args__5775__auto__.push((arguments[i__5770__auto___51504]));

var G__51505 = (i__5770__auto___51504 + (1));
i__5770__auto___51504 = G__51505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49561 = conformed_args__47299__auto__;
var map__49561__$1 = cljs.core.__destructure_map(map__49561);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq49557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49557));
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
var args__5775__auto__ = [];
var len__5769__auto___51513 = arguments.length;
var i__5770__auto___51514 = (0);
while(true){
if((i__5770__auto___51514 < len__5769__auto___51513)){
args__5775__auto__.push((arguments[i__5770__auto___51514]));

var G__51516 = (i__5770__auto___51514 + (1));
i__5770__auto___51514 = G__51516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49568 = conformed_args__47299__auto__;
var map__49568__$1 = cljs.core.__destructure_map(map__49568);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq49565){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49565));
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
var args__5775__auto__ = [];
var len__5769__auto___51517 = arguments.length;
var i__5770__auto___51518 = (0);
while(true){
if((i__5770__auto___51518 < len__5769__auto___51517)){
args__5775__auto__.push((arguments[i__5770__auto___51518]));

var G__51519 = (i__5770__auto___51518 + (1));
i__5770__auto___51518 = G__51519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49573 = conformed_args__47299__auto__;
var map__49573__$1 = cljs.core.__destructure_map(map__49573);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq49571){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49571));
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
var args__5775__auto__ = [];
var len__5769__auto___51521 = arguments.length;
var i__5770__auto___51522 = (0);
while(true){
if((i__5770__auto___51522 < len__5769__auto___51521)){
args__5775__auto__.push((arguments[i__5770__auto___51522]));

var G__51523 = (i__5770__auto___51522 + (1));
i__5770__auto___51522 = G__51523;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49579 = conformed_args__47299__auto__;
var map__49579__$1 = cljs.core.__destructure_map(map__49579);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq49576){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49576));
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
var args__5775__auto__ = [];
var len__5769__auto___51525 = arguments.length;
var i__5770__auto___51526 = (0);
while(true){
if((i__5770__auto___51526 < len__5769__auto___51525)){
args__5775__auto__.push((arguments[i__5770__auto___51526]));

var G__51527 = (i__5770__auto___51526 + (1));
i__5770__auto___51526 = G__51527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49593 = conformed_args__47299__auto__;
var map__49593__$1 = cljs.core.__destructure_map(map__49593);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq49586){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49586));
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
var args__5775__auto__ = [];
var len__5769__auto___51529 = arguments.length;
var i__5770__auto___51530 = (0);
while(true){
if((i__5770__auto___51530 < len__5769__auto___51529)){
args__5775__auto__.push((arguments[i__5770__auto___51530]));

var G__51531 = (i__5770__auto___51530 + (1));
i__5770__auto___51530 = G__51531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49603 = conformed_args__47299__auto__;
var map__49603__$1 = cljs.core.__destructure_map(map__49603);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq49598){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49598));
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
var args__5775__auto__ = [];
var len__5769__auto___51534 = arguments.length;
var i__5770__auto___51535 = (0);
while(true){
if((i__5770__auto___51535 < len__5769__auto___51534)){
args__5775__auto__.push((arguments[i__5770__auto___51535]));

var G__51536 = (i__5770__auto___51535 + (1));
i__5770__auto___51535 = G__51536;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49612 = conformed_args__47299__auto__;
var map__49612__$1 = cljs.core.__destructure_map(map__49612);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq49608){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49608));
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
var args__5775__auto__ = [];
var len__5769__auto___51542 = arguments.length;
var i__5770__auto___51543 = (0);
while(true){
if((i__5770__auto___51543 < len__5769__auto___51542)){
args__5775__auto__.push((arguments[i__5770__auto___51543]));

var G__51544 = (i__5770__auto___51543 + (1));
i__5770__auto___51543 = G__51544;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49618 = conformed_args__47299__auto__;
var map__49618__$1 = cljs.core.__destructure_map(map__49618);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq49614){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49614));
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
var args__5775__auto__ = [];
var len__5769__auto___51549 = arguments.length;
var i__5770__auto___51550 = (0);
while(true){
if((i__5770__auto___51550 < len__5769__auto___51549)){
args__5775__auto__.push((arguments[i__5770__auto___51550]));

var G__51551 = (i__5770__auto___51550 + (1));
i__5770__auto___51550 = G__51551;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49624 = conformed_args__47299__auto__;
var map__49624__$1 = cljs.core.__destructure_map(map__49624);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq49621){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49621));
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
var args__5775__auto__ = [];
var len__5769__auto___51557 = arguments.length;
var i__5770__auto___51559 = (0);
while(true){
if((i__5770__auto___51559 < len__5769__auto___51557)){
args__5775__auto__.push((arguments[i__5770__auto___51559]));

var G__51560 = (i__5770__auto___51559 + (1));
i__5770__auto___51559 = G__51560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49629 = conformed_args__47299__auto__;
var map__49629__$1 = cljs.core.__destructure_map(map__49629);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq49625){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49625));
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
var args__5775__auto__ = [];
var len__5769__auto___51561 = arguments.length;
var i__5770__auto___51562 = (0);
while(true){
if((i__5770__auto___51562 < len__5769__auto___51561)){
args__5775__auto__.push((arguments[i__5770__auto___51562]));

var G__51563 = (i__5770__auto___51562 + (1));
i__5770__auto___51562 = G__51563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49632 = conformed_args__47299__auto__;
var map__49632__$1 = cljs.core.__destructure_map(map__49632);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq49631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49631));
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
var args__5775__auto__ = [];
var len__5769__auto___51569 = arguments.length;
var i__5770__auto___51570 = (0);
while(true){
if((i__5770__auto___51570 < len__5769__auto___51569)){
args__5775__auto__.push((arguments[i__5770__auto___51570]));

var G__51571 = (i__5770__auto___51570 + (1));
i__5770__auto___51570 = G__51571;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49637 = conformed_args__47299__auto__;
var map__49637__$1 = cljs.core.__destructure_map(map__49637);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq49633){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49633));
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
var args__5775__auto__ = [];
var len__5769__auto___51576 = arguments.length;
var i__5770__auto___51577 = (0);
while(true){
if((i__5770__auto___51577 < len__5769__auto___51576)){
args__5775__auto__.push((arguments[i__5770__auto___51577]));

var G__51579 = (i__5770__auto___51577 + (1));
i__5770__auto___51577 = G__51579;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49644 = conformed_args__47299__auto__;
var map__49644__$1 = cljs.core.__destructure_map(map__49644);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49644__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49644__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49644__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq49642){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49642));
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
var args__5775__auto__ = [];
var len__5769__auto___51582 = arguments.length;
var i__5770__auto___51583 = (0);
while(true){
if((i__5770__auto___51583 < len__5769__auto___51582)){
args__5775__auto__.push((arguments[i__5770__auto___51583]));

var G__51584 = (i__5770__auto___51583 + (1));
i__5770__auto___51583 = G__51584;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49648 = conformed_args__47299__auto__;
var map__49648__$1 = cljs.core.__destructure_map(map__49648);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq49647){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49647));
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
var args__5775__auto__ = [];
var len__5769__auto___51587 = arguments.length;
var i__5770__auto___51588 = (0);
while(true){
if((i__5770__auto___51588 < len__5769__auto___51587)){
args__5775__auto__.push((arguments[i__5770__auto___51588]));

var G__51591 = (i__5770__auto___51588 + (1));
i__5770__auto___51588 = G__51591;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49655 = conformed_args__47299__auto__;
var map__49655__$1 = cljs.core.__destructure_map(map__49655);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq49653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49653));
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
var args__5775__auto__ = [];
var len__5769__auto___51595 = arguments.length;
var i__5770__auto___51596 = (0);
while(true){
if((i__5770__auto___51596 < len__5769__auto___51595)){
args__5775__auto__.push((arguments[i__5770__auto___51596]));

var G__51597 = (i__5770__auto___51596 + (1));
i__5770__auto___51596 = G__51597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49661 = conformed_args__47299__auto__;
var map__49661__$1 = cljs.core.__destructure_map(map__49661);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq49658){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49658));
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
var args__5775__auto__ = [];
var len__5769__auto___51598 = arguments.length;
var i__5770__auto___51599 = (0);
while(true){
if((i__5770__auto___51599 < len__5769__auto___51598)){
args__5775__auto__.push((arguments[i__5770__auto___51599]));

var G__51600 = (i__5770__auto___51599 + (1));
i__5770__auto___51599 = G__51600;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49678 = conformed_args__47299__auto__;
var map__49678__$1 = cljs.core.__destructure_map(map__49678);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq49675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49675));
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
var args__5775__auto__ = [];
var len__5769__auto___51606 = arguments.length;
var i__5770__auto___51607 = (0);
while(true){
if((i__5770__auto___51607 < len__5769__auto___51606)){
args__5775__auto__.push((arguments[i__5770__auto___51607]));

var G__51608 = (i__5770__auto___51607 + (1));
i__5770__auto___51607 = G__51608;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49683 = conformed_args__47299__auto__;
var map__49683__$1 = cljs.core.__destructure_map(map__49683);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq49680){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49680));
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
var args__5775__auto__ = [];
var len__5769__auto___51612 = arguments.length;
var i__5770__auto___51613 = (0);
while(true){
if((i__5770__auto___51613 < len__5769__auto___51612)){
args__5775__auto__.push((arguments[i__5770__auto___51613]));

var G__51615 = (i__5770__auto___51613 + (1));
i__5770__auto___51613 = G__51615;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49688 = conformed_args__47299__auto__;
var map__49688__$1 = cljs.core.__destructure_map(map__49688);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq49686){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49686));
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
var args__5775__auto__ = [];
var len__5769__auto___51617 = arguments.length;
var i__5770__auto___51618 = (0);
while(true){
if((i__5770__auto___51618 < len__5769__auto___51617)){
args__5775__auto__.push((arguments[i__5770__auto___51618]));

var G__51619 = (i__5770__auto___51618 + (1));
i__5770__auto___51618 = G__51619;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49693 = conformed_args__47299__auto__;
var map__49693__$1 = cljs.core.__destructure_map(map__49693);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq49691){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49691));
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
var args__5775__auto__ = [];
var len__5769__auto___51620 = arguments.length;
var i__5770__auto___51621 = (0);
while(true){
if((i__5770__auto___51621 < len__5769__auto___51620)){
args__5775__auto__.push((arguments[i__5770__auto___51621]));

var G__51622 = (i__5770__auto___51621 + (1));
i__5770__auto___51621 = G__51622;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49699 = conformed_args__47299__auto__;
var map__49699__$1 = cljs.core.__destructure_map(map__49699);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq49696){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49696));
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
var args__5775__auto__ = [];
var len__5769__auto___51624 = arguments.length;
var i__5770__auto___51625 = (0);
while(true){
if((i__5770__auto___51625 < len__5769__auto___51624)){
args__5775__auto__.push((arguments[i__5770__auto___51625]));

var G__51627 = (i__5770__auto___51625 + (1));
i__5770__auto___51625 = G__51627;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49704 = conformed_args__47299__auto__;
var map__49704__$1 = cljs.core.__destructure_map(map__49704);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq49701){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49701));
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
var args__5775__auto__ = [];
var len__5769__auto___51635 = arguments.length;
var i__5770__auto___51636 = (0);
while(true){
if((i__5770__auto___51636 < len__5769__auto___51635)){
args__5775__auto__.push((arguments[i__5770__auto___51636]));

var G__51637 = (i__5770__auto___51636 + (1));
i__5770__auto___51636 = G__51637;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49709 = conformed_args__47299__auto__;
var map__49709__$1 = cljs.core.__destructure_map(map__49709);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq49707){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49707));
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
var args__5775__auto__ = [];
var len__5769__auto___51638 = arguments.length;
var i__5770__auto___51639 = (0);
while(true){
if((i__5770__auto___51639 < len__5769__auto___51638)){
args__5775__auto__.push((arguments[i__5770__auto___51639]));

var G__51640 = (i__5770__auto___51639 + (1));
i__5770__auto___51639 = G__51640;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49715 = conformed_args__47299__auto__;
var map__49715__$1 = cljs.core.__destructure_map(map__49715);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq49712){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49712));
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
var args__5775__auto__ = [];
var len__5769__auto___51645 = arguments.length;
var i__5770__auto___51646 = (0);
while(true){
if((i__5770__auto___51646 < len__5769__auto___51645)){
args__5775__auto__.push((arguments[i__5770__auto___51646]));

var G__51647 = (i__5770__auto___51646 + (1));
i__5770__auto___51646 = G__51647;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49720 = conformed_args__47299__auto__;
var map__49720__$1 = cljs.core.__destructure_map(map__49720);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq49717){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49717));
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
var args__5775__auto__ = [];
var len__5769__auto___51652 = arguments.length;
var i__5770__auto___51653 = (0);
while(true){
if((i__5770__auto___51653 < len__5769__auto___51652)){
args__5775__auto__.push((arguments[i__5770__auto___51653]));

var G__51654 = (i__5770__auto___51653 + (1));
i__5770__auto___51653 = G__51654;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49725 = conformed_args__47299__auto__;
var map__49725__$1 = cljs.core.__destructure_map(map__49725);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq49722){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49722));
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
var args__5775__auto__ = [];
var len__5769__auto___51656 = arguments.length;
var i__5770__auto___51657 = (0);
while(true){
if((i__5770__auto___51657 < len__5769__auto___51656)){
args__5775__auto__.push((arguments[i__5770__auto___51657]));

var G__51658 = (i__5770__auto___51657 + (1));
i__5770__auto___51657 = G__51658;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49730 = conformed_args__47299__auto__;
var map__49730__$1 = cljs.core.__destructure_map(map__49730);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq49728){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49728));
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
var args__5775__auto__ = [];
var len__5769__auto___51661 = arguments.length;
var i__5770__auto___51662 = (0);
while(true){
if((i__5770__auto___51662 < len__5769__auto___51661)){
args__5775__auto__.push((arguments[i__5770__auto___51662]));

var G__51663 = (i__5770__auto___51662 + (1));
i__5770__auto___51662 = G__51663;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49735 = conformed_args__47299__auto__;
var map__49735__$1 = cljs.core.__destructure_map(map__49735);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq49732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49732));
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
var args__5775__auto__ = [];
var len__5769__auto___51669 = arguments.length;
var i__5770__auto___51670 = (0);
while(true){
if((i__5770__auto___51670 < len__5769__auto___51669)){
args__5775__auto__.push((arguments[i__5770__auto___51670]));

var G__51671 = (i__5770__auto___51670 + (1));
i__5770__auto___51670 = G__51671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49738 = conformed_args__47299__auto__;
var map__49738__$1 = cljs.core.__destructure_map(map__49738);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq49737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49737));
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
var args__5775__auto__ = [];
var len__5769__auto___51674 = arguments.length;
var i__5770__auto___51675 = (0);
while(true){
if((i__5770__auto___51675 < len__5769__auto___51674)){
args__5775__auto__.push((arguments[i__5770__auto___51675]));

var G__51676 = (i__5770__auto___51675 + (1));
i__5770__auto___51675 = G__51676;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49740 = conformed_args__47299__auto__;
var map__49740__$1 = cljs.core.__destructure_map(map__49740);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq49739){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49739));
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
var args__5775__auto__ = [];
var len__5769__auto___51682 = arguments.length;
var i__5770__auto___51683 = (0);
while(true){
if((i__5770__auto___51683 < len__5769__auto___51682)){
args__5775__auto__.push((arguments[i__5770__auto___51683]));

var G__51684 = (i__5770__auto___51683 + (1));
i__5770__auto___51683 = G__51684;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49742 = conformed_args__47299__auto__;
var map__49742__$1 = cljs.core.__destructure_map(map__49742);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq49741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49741));
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
var args__5775__auto__ = [];
var len__5769__auto___51687 = arguments.length;
var i__5770__auto___51688 = (0);
while(true){
if((i__5770__auto___51688 < len__5769__auto___51687)){
args__5775__auto__.push((arguments[i__5770__auto___51688]));

var G__51689 = (i__5770__auto___51688 + (1));
i__5770__auto___51688 = G__51689;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49744 = conformed_args__47299__auto__;
var map__49744__$1 = cljs.core.__destructure_map(map__49744);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq49743){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49743));
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
var args__5775__auto__ = [];
var len__5769__auto___51691 = arguments.length;
var i__5770__auto___51692 = (0);
while(true){
if((i__5770__auto___51692 < len__5769__auto___51691)){
args__5775__auto__.push((arguments[i__5770__auto___51692]));

var G__51693 = (i__5770__auto___51692 + (1));
i__5770__auto___51692 = G__51693;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49746 = conformed_args__47299__auto__;
var map__49746__$1 = cljs.core.__destructure_map(map__49746);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq49745){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49745));
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
var args__5775__auto__ = [];
var len__5769__auto___51697 = arguments.length;
var i__5770__auto___51698 = (0);
while(true){
if((i__5770__auto___51698 < len__5769__auto___51697)){
args__5775__auto__.push((arguments[i__5770__auto___51698]));

var G__51699 = (i__5770__auto___51698 + (1));
i__5770__auto___51698 = G__51699;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49748 = conformed_args__47299__auto__;
var map__49748__$1 = cljs.core.__destructure_map(map__49748);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq49747){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49747));
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
var args__5775__auto__ = [];
var len__5769__auto___51702 = arguments.length;
var i__5770__auto___51703 = (0);
while(true){
if((i__5770__auto___51703 < len__5769__auto___51702)){
args__5775__auto__.push((arguments[i__5770__auto___51703]));

var G__51706 = (i__5770__auto___51703 + (1));
i__5770__auto___51703 = G__51706;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49783 = conformed_args__47299__auto__;
var map__49783__$1 = cljs.core.__destructure_map(map__49783);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq49761){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49761));
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
var args__5775__auto__ = [];
var len__5769__auto___51708 = arguments.length;
var i__5770__auto___51709 = (0);
while(true){
if((i__5770__auto___51709 < len__5769__auto___51708)){
args__5775__auto__.push((arguments[i__5770__auto___51709]));

var G__51710 = (i__5770__auto___51709 + (1));
i__5770__auto___51709 = G__51710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49790 = conformed_args__47299__auto__;
var map__49790__$1 = cljs.core.__destructure_map(map__49790);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq49789){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49789));
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
var args__5775__auto__ = [];
var len__5769__auto___51713 = arguments.length;
var i__5770__auto___51714 = (0);
while(true){
if((i__5770__auto___51714 < len__5769__auto___51713)){
args__5775__auto__.push((arguments[i__5770__auto___51714]));

var G__51715 = (i__5770__auto___51714 + (1));
i__5770__auto___51714 = G__51715;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49803 = conformed_args__47299__auto__;
var map__49803__$1 = cljs.core.__destructure_map(map__49803);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq49793){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49793));
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
var args__5775__auto__ = [];
var len__5769__auto___51721 = arguments.length;
var i__5770__auto___51722 = (0);
while(true){
if((i__5770__auto___51722 < len__5769__auto___51721)){
args__5775__auto__.push((arguments[i__5770__auto___51722]));

var G__51723 = (i__5770__auto___51722 + (1));
i__5770__auto___51722 = G__51723;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49805 = conformed_args__47299__auto__;
var map__49805__$1 = cljs.core.__destructure_map(map__49805);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq49804){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49804));
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
var args__5775__auto__ = [];
var len__5769__auto___51724 = arguments.length;
var i__5770__auto___51725 = (0);
while(true){
if((i__5770__auto___51725 < len__5769__auto___51724)){
args__5775__auto__.push((arguments[i__5770__auto___51725]));

var G__51727 = (i__5770__auto___51725 + (1));
i__5770__auto___51725 = G__51727;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49855 = conformed_args__47299__auto__;
var map__49855__$1 = cljs.core.__destructure_map(map__49855);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq49829){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49829));
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
var args__5775__auto__ = [];
var len__5769__auto___51732 = arguments.length;
var i__5770__auto___51733 = (0);
while(true){
if((i__5770__auto___51733 < len__5769__auto___51732)){
args__5775__auto__.push((arguments[i__5770__auto___51733]));

var G__51734 = (i__5770__auto___51733 + (1));
i__5770__auto___51733 = G__51734;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49892 = conformed_args__47299__auto__;
var map__49892__$1 = cljs.core.__destructure_map(map__49892);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq49870){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49870));
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
var args__5775__auto__ = [];
var len__5769__auto___51737 = arguments.length;
var i__5770__auto___51738 = (0);
while(true){
if((i__5770__auto___51738 < len__5769__auto___51737)){
args__5775__auto__.push((arguments[i__5770__auto___51738]));

var G__51739 = (i__5770__auto___51738 + (1));
i__5770__auto___51738 = G__51739;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49925 = conformed_args__47299__auto__;
var map__49925__$1 = cljs.core.__destructure_map(map__49925);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq49917){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49917));
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
var args__5775__auto__ = [];
var len__5769__auto___51743 = arguments.length;
var i__5770__auto___51744 = (0);
while(true){
if((i__5770__auto___51744 < len__5769__auto___51743)){
args__5775__auto__.push((arguments[i__5770__auto___51744]));

var G__51745 = (i__5770__auto___51744 + (1));
i__5770__auto___51744 = G__51745;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49931 = conformed_args__47299__auto__;
var map__49931__$1 = cljs.core.__destructure_map(map__49931);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq49929){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49929));
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
var args__5775__auto__ = [];
var len__5769__auto___51748 = arguments.length;
var i__5770__auto___51750 = (0);
while(true){
if((i__5770__auto___51750 < len__5769__auto___51748)){
args__5775__auto__.push((arguments[i__5770__auto___51750]));

var G__51752 = (i__5770__auto___51750 + (1));
i__5770__auto___51750 = G__51752;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49941 = conformed_args__47299__auto__;
var map__49941__$1 = cljs.core.__destructure_map(map__49941);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq49939){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49939));
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
var args__5775__auto__ = [];
var len__5769__auto___51760 = arguments.length;
var i__5770__auto___51761 = (0);
while(true){
if((i__5770__auto___51761 < len__5769__auto___51760)){
args__5775__auto__.push((arguments[i__5770__auto___51761]));

var G__51765 = (i__5770__auto___51761 + (1));
i__5770__auto___51761 = G__51765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49946 = conformed_args__47299__auto__;
var map__49946__$1 = cljs.core.__destructure_map(map__49946);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49946__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49946__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49946__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq49944){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49944));
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
var args__5775__auto__ = [];
var len__5769__auto___51770 = arguments.length;
var i__5770__auto___51774 = (0);
while(true){
if((i__5770__auto___51774 < len__5769__auto___51770)){
args__5775__auto__.push((arguments[i__5770__auto___51774]));

var G__51775 = (i__5770__auto___51774 + (1));
i__5770__auto___51774 = G__51775;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49950 = conformed_args__47299__auto__;
var map__49950__$1 = cljs.core.__destructure_map(map__49950);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq49947){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49947));
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
var args__5775__auto__ = [];
var len__5769__auto___51783 = arguments.length;
var i__5770__auto___51784 = (0);
while(true){
if((i__5770__auto___51784 < len__5769__auto___51783)){
args__5775__auto__.push((arguments[i__5770__auto___51784]));

var G__51786 = (i__5770__auto___51784 + (1));
i__5770__auto___51784 = G__51786;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49955 = conformed_args__47299__auto__;
var map__49955__$1 = cljs.core.__destructure_map(map__49955);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq49953){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49953));
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
var args__5775__auto__ = [];
var len__5769__auto___51789 = arguments.length;
var i__5770__auto___51790 = (0);
while(true){
if((i__5770__auto___51790 < len__5769__auto___51789)){
args__5775__auto__.push((arguments[i__5770__auto___51790]));

var G__51791 = (i__5770__auto___51790 + (1));
i__5770__auto___51790 = G__51791;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__49985 = conformed_args__47299__auto__;
var map__49985__$1 = cljs.core.__destructure_map(map__49985);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq49973){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49973));
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
var args__5775__auto__ = [];
var len__5769__auto___51794 = arguments.length;
var i__5770__auto___51795 = (0);
while(true){
if((i__5770__auto___51795 < len__5769__auto___51794)){
args__5775__auto__.push((arguments[i__5770__auto___51795]));

var G__51796 = (i__5770__auto___51795 + (1));
i__5770__auto___51795 = G__51796;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50000 = conformed_args__47299__auto__;
var map__50000__$1 = cljs.core.__destructure_map(map__50000);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq49989){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49989));
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
var args__5775__auto__ = [];
var len__5769__auto___51804 = arguments.length;
var i__5770__auto___51805 = (0);
while(true){
if((i__5770__auto___51805 < len__5769__auto___51804)){
args__5775__auto__.push((arguments[i__5770__auto___51805]));

var G__51807 = (i__5770__auto___51805 + (1));
i__5770__auto___51805 = G__51807;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50017 = conformed_args__47299__auto__;
var map__50017__$1 = cljs.core.__destructure_map(map__50017);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq50013){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50013));
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
var args__5775__auto__ = [];
var len__5769__auto___51810 = arguments.length;
var i__5770__auto___51812 = (0);
while(true){
if((i__5770__auto___51812 < len__5769__auto___51810)){
args__5775__auto__.push((arguments[i__5770__auto___51812]));

var G__51813 = (i__5770__auto___51812 + (1));
i__5770__auto___51812 = G__51813;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50032 = conformed_args__47299__auto__;
var map__50032__$1 = cljs.core.__destructure_map(map__50032);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq50021){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50021));
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
var args__5775__auto__ = [];
var len__5769__auto___51821 = arguments.length;
var i__5770__auto___51822 = (0);
while(true){
if((i__5770__auto___51822 < len__5769__auto___51821)){
args__5775__auto__.push((arguments[i__5770__auto___51822]));

var G__51823 = (i__5770__auto___51822 + (1));
i__5770__auto___51822 = G__51823;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50044 = conformed_args__47299__auto__;
var map__50044__$1 = cljs.core.__destructure_map(map__50044);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq50036){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50036));
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
var args__5775__auto__ = [];
var len__5769__auto___51827 = arguments.length;
var i__5770__auto___51828 = (0);
while(true){
if((i__5770__auto___51828 < len__5769__auto___51827)){
args__5775__auto__.push((arguments[i__5770__auto___51828]));

var G__51829 = (i__5770__auto___51828 + (1));
i__5770__auto___51828 = G__51829;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50073 = conformed_args__47299__auto__;
var map__50073__$1 = cljs.core.__destructure_map(map__50073);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq50064){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50064));
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
var args__5775__auto__ = [];
var len__5769__auto___51833 = arguments.length;
var i__5770__auto___51834 = (0);
while(true){
if((i__5770__auto___51834 < len__5769__auto___51833)){
args__5775__auto__.push((arguments[i__5770__auto___51834]));

var G__51837 = (i__5770__auto___51834 + (1));
i__5770__auto___51834 = G__51837;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50080 = conformed_args__47299__auto__;
var map__50080__$1 = cljs.core.__destructure_map(map__50080);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50080__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50080__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50080__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq50078){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50078));
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
var args__5775__auto__ = [];
var len__5769__auto___51841 = arguments.length;
var i__5770__auto___51842 = (0);
while(true){
if((i__5770__auto___51842 < len__5769__auto___51841)){
args__5775__auto__.push((arguments[i__5770__auto___51842]));

var G__51844 = (i__5770__auto___51842 + (1));
i__5770__auto___51842 = G__51844;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50083 = conformed_args__47299__auto__;
var map__50083__$1 = cljs.core.__destructure_map(map__50083);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq50081){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50081));
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
var args__5775__auto__ = [];
var len__5769__auto___51849 = arguments.length;
var i__5770__auto___51851 = (0);
while(true){
if((i__5770__auto___51851 < len__5769__auto___51849)){
args__5775__auto__.push((arguments[i__5770__auto___51851]));

var G__51852 = (i__5770__auto___51851 + (1));
i__5770__auto___51851 = G__51852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50097 = conformed_args__47299__auto__;
var map__50097__$1 = cljs.core.__destructure_map(map__50097);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq50094){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50094));
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
var args__5775__auto__ = [];
var len__5769__auto___51855 = arguments.length;
var i__5770__auto___51856 = (0);
while(true){
if((i__5770__auto___51856 < len__5769__auto___51855)){
args__5775__auto__.push((arguments[i__5770__auto___51856]));

var G__51859 = (i__5770__auto___51856 + (1));
i__5770__auto___51856 = G__51859;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50108 = conformed_args__47299__auto__;
var map__50108__$1 = cljs.core.__destructure_map(map__50108);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq50101){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50101));
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
var args__5775__auto__ = [];
var len__5769__auto___51864 = arguments.length;
var i__5770__auto___51865 = (0);
while(true){
if((i__5770__auto___51865 < len__5769__auto___51864)){
args__5775__auto__.push((arguments[i__5770__auto___51865]));

var G__51866 = (i__5770__auto___51865 + (1));
i__5770__auto___51865 = G__51866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50121 = conformed_args__47299__auto__;
var map__50121__$1 = cljs.core.__destructure_map(map__50121);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq50112){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50112));
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
var args__5775__auto__ = [];
var len__5769__auto___51872 = arguments.length;
var i__5770__auto___51873 = (0);
while(true){
if((i__5770__auto___51873 < len__5769__auto___51872)){
args__5775__auto__.push((arguments[i__5770__auto___51873]));

var G__51874 = (i__5770__auto___51873 + (1));
i__5770__auto___51873 = G__51874;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50151 = conformed_args__47299__auto__;
var map__50151__$1 = cljs.core.__destructure_map(map__50151);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50151__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq50137){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50137));
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
var args__5775__auto__ = [];
var len__5769__auto___51882 = arguments.length;
var i__5770__auto___51883 = (0);
while(true){
if((i__5770__auto___51883 < len__5769__auto___51882)){
args__5775__auto__.push((arguments[i__5770__auto___51883]));

var G__51886 = (i__5770__auto___51883 + (1));
i__5770__auto___51883 = G__51886;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50202 = conformed_args__47299__auto__;
var map__50202__$1 = cljs.core.__destructure_map(map__50202);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq50176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50176));
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
var args__5775__auto__ = [];
var len__5769__auto___51891 = arguments.length;
var i__5770__auto___51892 = (0);
while(true){
if((i__5770__auto___51892 < len__5769__auto___51891)){
args__5775__auto__.push((arguments[i__5770__auto___51892]));

var G__51893 = (i__5770__auto___51892 + (1));
i__5770__auto___51892 = G__51893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50225 = conformed_args__47299__auto__;
var map__50225__$1 = cljs.core.__destructure_map(map__50225);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq50220){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50220));
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
var args__5775__auto__ = [];
var len__5769__auto___51894 = arguments.length;
var i__5770__auto___51895 = (0);
while(true){
if((i__5770__auto___51895 < len__5769__auto___51894)){
args__5775__auto__.push((arguments[i__5770__auto___51895]));

var G__51896 = (i__5770__auto___51895 + (1));
i__5770__auto___51895 = G__51896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50247 = conformed_args__47299__auto__;
var map__50247__$1 = cljs.core.__destructure_map(map__50247);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq50233){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50233));
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
var args__5775__auto__ = [];
var len__5769__auto___51897 = arguments.length;
var i__5770__auto___51898 = (0);
while(true){
if((i__5770__auto___51898 < len__5769__auto___51897)){
args__5775__auto__.push((arguments[i__5770__auto___51898]));

var G__51900 = (i__5770__auto___51898 + (1));
i__5770__auto___51898 = G__51900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50264 = conformed_args__47299__auto__;
var map__50264__$1 = cljs.core.__destructure_map(map__50264);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50264__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50264__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50264__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq50249){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50249));
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
var args__5775__auto__ = [];
var len__5769__auto___51905 = arguments.length;
var i__5770__auto___51906 = (0);
while(true){
if((i__5770__auto___51906 < len__5769__auto___51905)){
args__5775__auto__.push((arguments[i__5770__auto___51906]));

var G__51907 = (i__5770__auto___51906 + (1));
i__5770__auto___51906 = G__51907;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50280 = conformed_args__47299__auto__;
var map__50280__$1 = cljs.core.__destructure_map(map__50280);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq50273){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50273));
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
var args__5775__auto__ = [];
var len__5769__auto___51909 = arguments.length;
var i__5770__auto___51911 = (0);
while(true){
if((i__5770__auto___51911 < len__5769__auto___51909)){
args__5775__auto__.push((arguments[i__5770__auto___51911]));

var G__51913 = (i__5770__auto___51911 + (1));
i__5770__auto___51911 = G__51913;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50295 = conformed_args__47299__auto__;
var map__50295__$1 = cljs.core.__destructure_map(map__50295);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq50289){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50289));
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
var args__5775__auto__ = [];
var len__5769__auto___51915 = arguments.length;
var i__5770__auto___51916 = (0);
while(true){
if((i__5770__auto___51916 < len__5769__auto___51915)){
args__5775__auto__.push((arguments[i__5770__auto___51916]));

var G__51917 = (i__5770__auto___51916 + (1));
i__5770__auto___51916 = G__51917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50310 = conformed_args__47299__auto__;
var map__50310__$1 = cljs.core.__destructure_map(map__50310);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq50302){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50302));
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
var args__5775__auto__ = [];
var len__5769__auto___51920 = arguments.length;
var i__5770__auto___51921 = (0);
while(true){
if((i__5770__auto___51921 < len__5769__auto___51920)){
args__5775__auto__.push((arguments[i__5770__auto___51921]));

var G__51922 = (i__5770__auto___51921 + (1));
i__5770__auto___51921 = G__51922;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50328 = conformed_args__47299__auto__;
var map__50328__$1 = cljs.core.__destructure_map(map__50328);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq50320){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50320));
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
var args__5775__auto__ = [];
var len__5769__auto___51925 = arguments.length;
var i__5770__auto___51927 = (0);
while(true){
if((i__5770__auto___51927 < len__5769__auto___51925)){
args__5775__auto__.push((arguments[i__5770__auto___51927]));

var G__51928 = (i__5770__auto___51927 + (1));
i__5770__auto___51927 = G__51928;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50356 = conformed_args__47299__auto__;
var map__50356__$1 = cljs.core.__destructure_map(map__50356);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq50340){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50340));
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
var args__5775__auto__ = [];
var len__5769__auto___51929 = arguments.length;
var i__5770__auto___51930 = (0);
while(true){
if((i__5770__auto___51930 < len__5769__auto___51929)){
args__5775__auto__.push((arguments[i__5770__auto___51930]));

var G__51931 = (i__5770__auto___51930 + (1));
i__5770__auto___51930 = G__51931;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50370 = conformed_args__47299__auto__;
var map__50370__$1 = cljs.core.__destructure_map(map__50370);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq50369){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50369));
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
var args__5775__auto__ = [];
var len__5769__auto___51946 = arguments.length;
var i__5770__auto___51947 = (0);
while(true){
if((i__5770__auto___51947 < len__5769__auto___51946)){
args__5775__auto__.push((arguments[i__5770__auto___51947]));

var G__51949 = (i__5770__auto___51947 + (1));
i__5770__auto___51947 = G__51949;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50390 = conformed_args__47299__auto__;
var map__50390__$1 = cljs.core.__destructure_map(map__50390);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50390__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50390__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq50375){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50375));
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
var args__5775__auto__ = [];
var len__5769__auto___51955 = arguments.length;
var i__5770__auto___51957 = (0);
while(true){
if((i__5770__auto___51957 < len__5769__auto___51955)){
args__5775__auto__.push((arguments[i__5770__auto___51957]));

var G__51958 = (i__5770__auto___51957 + (1));
i__5770__auto___51957 = G__51958;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50406 = conformed_args__47299__auto__;
var map__50406__$1 = cljs.core.__destructure_map(map__50406);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq50405){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50405));
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
var args__5775__auto__ = [];
var len__5769__auto___51962 = arguments.length;
var i__5770__auto___51963 = (0);
while(true){
if((i__5770__auto___51963 < len__5769__auto___51962)){
args__5775__auto__.push((arguments[i__5770__auto___51963]));

var G__51964 = (i__5770__auto___51963 + (1));
i__5770__auto___51963 = G__51964;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50415 = conformed_args__47299__auto__;
var map__50415__$1 = cljs.core.__destructure_map(map__50415);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50415__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50415__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq50407){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50407));
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
var args__5775__auto__ = [];
var len__5769__auto___51968 = arguments.length;
var i__5770__auto___51969 = (0);
while(true){
if((i__5770__auto___51969 < len__5769__auto___51968)){
args__5775__auto__.push((arguments[i__5770__auto___51969]));

var G__51970 = (i__5770__auto___51969 + (1));
i__5770__auto___51969 = G__51970;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50427 = conformed_args__47299__auto__;
var map__50427__$1 = cljs.core.__destructure_map(map__50427);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq50423){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50423));
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
var args__5775__auto__ = [];
var len__5769__auto___51977 = arguments.length;
var i__5770__auto___51978 = (0);
while(true){
if((i__5770__auto___51978 < len__5769__auto___51977)){
args__5775__auto__.push((arguments[i__5770__auto___51978]));

var G__51980 = (i__5770__auto___51978 + (1));
i__5770__auto___51978 = G__51980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50432 = conformed_args__47299__auto__;
var map__50432__$1 = cljs.core.__destructure_map(map__50432);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq50429){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50429));
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
var args__5775__auto__ = [];
var len__5769__auto___51984 = arguments.length;
var i__5770__auto___51985 = (0);
while(true){
if((i__5770__auto___51985 < len__5769__auto___51984)){
args__5775__auto__.push((arguments[i__5770__auto___51985]));

var G__51986 = (i__5770__auto___51985 + (1));
i__5770__auto___51985 = G__51986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50443 = conformed_args__47299__auto__;
var map__50443__$1 = cljs.core.__destructure_map(map__50443);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq50436){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50436));
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
var args__5775__auto__ = [];
var len__5769__auto___51989 = arguments.length;
var i__5770__auto___51990 = (0);
while(true){
if((i__5770__auto___51990 < len__5769__auto___51989)){
args__5775__auto__.push((arguments[i__5770__auto___51990]));

var G__51991 = (i__5770__auto___51990 + (1));
i__5770__auto___51990 = G__51991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50449 = conformed_args__47299__auto__;
var map__50449__$1 = cljs.core.__destructure_map(map__50449);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq50445){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50445));
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
var args__5775__auto__ = [];
var len__5769__auto___51993 = arguments.length;
var i__5770__auto___51994 = (0);
while(true){
if((i__5770__auto___51994 < len__5769__auto___51993)){
args__5775__auto__.push((arguments[i__5770__auto___51994]));

var G__51995 = (i__5770__auto___51994 + (1));
i__5770__auto___51994 = G__51995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50463 = conformed_args__47299__auto__;
var map__50463__$1 = cljs.core.__destructure_map(map__50463);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq50456){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50456));
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
var args__5775__auto__ = [];
var len__5769__auto___52003 = arguments.length;
var i__5770__auto___52004 = (0);
while(true){
if((i__5770__auto___52004 < len__5769__auto___52003)){
args__5775__auto__.push((arguments[i__5770__auto___52004]));

var G__52005 = (i__5770__auto___52004 + (1));
i__5770__auto___52004 = G__52005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50474 = conformed_args__47299__auto__;
var map__50474__$1 = cljs.core.__destructure_map(map__50474);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq50470){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50470));
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
var args__5775__auto__ = [];
var len__5769__auto___52006 = arguments.length;
var i__5770__auto___52007 = (0);
while(true){
if((i__5770__auto___52007 < len__5769__auto___52006)){
args__5775__auto__.push((arguments[i__5770__auto___52007]));

var G__52008 = (i__5770__auto___52007 + (1));
i__5770__auto___52007 = G__52008;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50487 = conformed_args__47299__auto__;
var map__50487__$1 = cljs.core.__destructure_map(map__50487);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq50480){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50480));
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
var args__5775__auto__ = [];
var len__5769__auto___52010 = arguments.length;
var i__5770__auto___52011 = (0);
while(true){
if((i__5770__auto___52011 < len__5769__auto___52010)){
args__5775__auto__.push((arguments[i__5770__auto___52011]));

var G__52013 = (i__5770__auto___52011 + (1));
i__5770__auto___52011 = G__52013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50511 = conformed_args__47299__auto__;
var map__50511__$1 = cljs.core.__destructure_map(map__50511);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq50501){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50501));
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
var args__5775__auto__ = [];
var len__5769__auto___52015 = arguments.length;
var i__5770__auto___52016 = (0);
while(true){
if((i__5770__auto___52016 < len__5769__auto___52015)){
args__5775__auto__.push((arguments[i__5770__auto___52016]));

var G__52017 = (i__5770__auto___52016 + (1));
i__5770__auto___52016 = G__52017;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50525 = conformed_args__47299__auto__;
var map__50525__$1 = cljs.core.__destructure_map(map__50525);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq50516){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50516));
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
var args__5775__auto__ = [];
var len__5769__auto___52020 = arguments.length;
var i__5770__auto___52022 = (0);
while(true){
if((i__5770__auto___52022 < len__5769__auto___52020)){
args__5775__auto__.push((arguments[i__5770__auto___52022]));

var G__52023 = (i__5770__auto___52022 + (1));
i__5770__auto___52022 = G__52023;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50532 = conformed_args__47299__auto__;
var map__50532__$1 = cljs.core.__destructure_map(map__50532);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq50530){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50530));
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
var args__5775__auto__ = [];
var len__5769__auto___52025 = arguments.length;
var i__5770__auto___52026 = (0);
while(true){
if((i__5770__auto___52026 < len__5769__auto___52025)){
args__5775__auto__.push((arguments[i__5770__auto___52026]));

var G__52027 = (i__5770__auto___52026 + (1));
i__5770__auto___52026 = G__52027;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50542 = conformed_args__47299__auto__;
var map__50542__$1 = cljs.core.__destructure_map(map__50542);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq50533){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50533));
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
var args__5775__auto__ = [];
var len__5769__auto___52031 = arguments.length;
var i__5770__auto___52032 = (0);
while(true){
if((i__5770__auto___52032 < len__5769__auto___52031)){
args__5775__auto__.push((arguments[i__5770__auto___52032]));

var G__52033 = (i__5770__auto___52032 + (1));
i__5770__auto___52032 = G__52033;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50559 = conformed_args__47299__auto__;
var map__50559__$1 = cljs.core.__destructure_map(map__50559);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq50548){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50548));
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
var args__5775__auto__ = [];
var len__5769__auto___52036 = arguments.length;
var i__5770__auto___52037 = (0);
while(true){
if((i__5770__auto___52037 < len__5769__auto___52036)){
args__5775__auto__.push((arguments[i__5770__auto___52037]));

var G__52038 = (i__5770__auto___52037 + (1));
i__5770__auto___52037 = G__52038;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50575 = conformed_args__47299__auto__;
var map__50575__$1 = cljs.core.__destructure_map(map__50575);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq50565){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50565));
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
var args__5775__auto__ = [];
var len__5769__auto___52040 = arguments.length;
var i__5770__auto___52041 = (0);
while(true){
if((i__5770__auto___52041 < len__5769__auto___52040)){
args__5775__auto__.push((arguments[i__5770__auto___52041]));

var G__52042 = (i__5770__auto___52041 + (1));
i__5770__auto___52041 = G__52042;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50582 = conformed_args__47299__auto__;
var map__50582__$1 = cljs.core.__destructure_map(map__50582);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq50579){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50579));
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
var args__5775__auto__ = [];
var len__5769__auto___52047 = arguments.length;
var i__5770__auto___52048 = (0);
while(true){
if((i__5770__auto___52048 < len__5769__auto___52047)){
args__5775__auto__.push((arguments[i__5770__auto___52048]));

var G__52050 = (i__5770__auto___52048 + (1));
i__5770__auto___52048 = G__52050;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50592 = conformed_args__47299__auto__;
var map__50592__$1 = cljs.core.__destructure_map(map__50592);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq50586){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50586));
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
var args__5775__auto__ = [];
var len__5769__auto___52053 = arguments.length;
var i__5770__auto___52054 = (0);
while(true){
if((i__5770__auto___52054 < len__5769__auto___52053)){
args__5775__auto__.push((arguments[i__5770__auto___52054]));

var G__52055 = (i__5770__auto___52054 + (1));
i__5770__auto___52054 = G__52055;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50599 = conformed_args__47299__auto__;
var map__50599__$1 = cljs.core.__destructure_map(map__50599);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq50595){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50595));
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
var args__5775__auto__ = [];
var len__5769__auto___52057 = arguments.length;
var i__5770__auto___52058 = (0);
while(true){
if((i__5770__auto___52058 < len__5769__auto___52057)){
args__5775__auto__.push((arguments[i__5770__auto___52058]));

var G__52059 = (i__5770__auto___52058 + (1));
i__5770__auto___52058 = G__52059;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50612 = conformed_args__47299__auto__;
var map__50612__$1 = cljs.core.__destructure_map(map__50612);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq50605){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50605));
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
var args__5775__auto__ = [];
var len__5769__auto___52061 = arguments.length;
var i__5770__auto___52062 = (0);
while(true){
if((i__5770__auto___52062 < len__5769__auto___52061)){
args__5775__auto__.push((arguments[i__5770__auto___52062]));

var G__52063 = (i__5770__auto___52062 + (1));
i__5770__auto___52062 = G__52063;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50623 = conformed_args__47299__auto__;
var map__50623__$1 = cljs.core.__destructure_map(map__50623);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq50618){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50618));
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
var args__5775__auto__ = [];
var len__5769__auto___52065 = arguments.length;
var i__5770__auto___52066 = (0);
while(true){
if((i__5770__auto___52066 < len__5769__auto___52065)){
args__5775__auto__.push((arguments[i__5770__auto___52066]));

var G__52068 = (i__5770__auto___52066 + (1));
i__5770__auto___52066 = G__52068;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50637 = conformed_args__47299__auto__;
var map__50637__$1 = cljs.core.__destructure_map(map__50637);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq50628){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50628));
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
var args__5775__auto__ = [];
var len__5769__auto___52070 = arguments.length;
var i__5770__auto___52071 = (0);
while(true){
if((i__5770__auto___52071 < len__5769__auto___52070)){
args__5775__auto__.push((arguments[i__5770__auto___52071]));

var G__52072 = (i__5770__auto___52071 + (1));
i__5770__auto___52071 = G__52072;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50642 = conformed_args__47299__auto__;
var map__50642__$1 = cljs.core.__destructure_map(map__50642);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq50639){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50639));
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
var args__5775__auto__ = [];
var len__5769__auto___52074 = arguments.length;
var i__5770__auto___52075 = (0);
while(true){
if((i__5770__auto___52075 < len__5769__auto___52074)){
args__5775__auto__.push((arguments[i__5770__auto___52075]));

var G__52076 = (i__5770__auto___52075 + (1));
i__5770__auto___52075 = G__52076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50647 = conformed_args__47299__auto__;
var map__50647__$1 = cljs.core.__destructure_map(map__50647);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq50644){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50644));
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
var args__5775__auto__ = [];
var len__5769__auto___52079 = arguments.length;
var i__5770__auto___52080 = (0);
while(true){
if((i__5770__auto___52080 < len__5769__auto___52079)){
args__5775__auto__.push((arguments[i__5770__auto___52080]));

var G__52081 = (i__5770__auto___52080 + (1));
i__5770__auto___52080 = G__52081;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50663 = conformed_args__47299__auto__;
var map__50663__$1 = cljs.core.__destructure_map(map__50663);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq50654){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50654));
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
var args__5775__auto__ = [];
var len__5769__auto___52083 = arguments.length;
var i__5770__auto___52084 = (0);
while(true){
if((i__5770__auto___52084 < len__5769__auto___52083)){
args__5775__auto__.push((arguments[i__5770__auto___52084]));

var G__52085 = (i__5770__auto___52084 + (1));
i__5770__auto___52084 = G__52085;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50671 = conformed_args__47299__auto__;
var map__50671__$1 = cljs.core.__destructure_map(map__50671);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq50665){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50665));
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
var args__5775__auto__ = [];
var len__5769__auto___52087 = arguments.length;
var i__5770__auto___52089 = (0);
while(true){
if((i__5770__auto___52089 < len__5769__auto___52087)){
args__5775__auto__.push((arguments[i__5770__auto___52089]));

var G__52090 = (i__5770__auto___52089 + (1));
i__5770__auto___52089 = G__52090;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__47299__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__50682 = conformed_args__47299__auto__;
var map__50682__$1 = cljs.core.__destructure_map(map__50682);
var attrs__47300__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__47301__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__47302__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__47301__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__47301__auto__);
var attrs_value__47303__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__47300__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__47303__auto__], null),children__47301__auto____$1),css__47302__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq50678){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50678));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
