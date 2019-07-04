var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/capture"] = requestHandlers.capture;
handle["/show"] = requestHandlers.show;
handle["/favicon.ico"] = requestHandlers.icon;

server.start(router.route, handle);