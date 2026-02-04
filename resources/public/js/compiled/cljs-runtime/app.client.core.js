goog.provide('app.client.core');
/**
 * Initialize the application
 */
app.client.core.init = (function app$client$core$init(){
console.log("Initializing Athlete Career Quest");

return app.client.app.mount_BANG_();
});
goog.exportSymbol('app.client.core.init', app.client.core.init);
/**
 * Hot reload handler
 */
app.client.core.refresh = (function app$client$core$refresh(){
console.log("Hot reloading...");

return app.client.app.mount_BANG_();
});

//# sourceMappingURL=app.client.core.js.map
