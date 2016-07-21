var config = require("./config/config");
var http = require("http");

http.createServer(function (req, res) {
    console.log(req.url);
    console.log(req.method);
    console.log(req.data);
    if (req.url == "/about") {
        res.end("<h1>I am the about Page</h1>");
    } else {
        res.end("<h1>Welcome to the nodejs</h1>");
    }
}).listen(config.port);

console.log("server running at port" + config.port);
