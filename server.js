var config = require("./app/config/config");
var express = require("./app/config/express");
var app = express();
app.listen(config.port);
console.log("server running at port" + config.port);
