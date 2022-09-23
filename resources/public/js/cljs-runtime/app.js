goog.provide('app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
if((typeof app !== 'undefined') && (typeof app.root !== 'undefined')){
} else {
app.root = module$node_modules$react_dom$client.createRoot(document.getElementById("patients-app"));
}
app.init = (function app$init(){
app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_view.app], null)));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-patients","get-patients",-2113115950)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-default-db","init-default-db",1789356987)], null));
});
app.re_render = (function app$re_render(){
return app.init();
});

//# sourceMappingURL=app.js.map
