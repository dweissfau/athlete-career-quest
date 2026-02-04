
shadow.cljs.devtools.client.env.module_loaded('main');

try { app.client.core.init(); } catch (e) { console.error("An error occurred when calling (app.client.core/init)"); console.error(e); }