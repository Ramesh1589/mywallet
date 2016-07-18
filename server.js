//get the http module
var http = require('http');

//get the config  from the config.js
var config = require("./config/config")

console.log(config);

//http module has a method createServer
//it takes a function as callback
// 
http.createServer(function (request, response) {
    //console.log(request);
    //httpstatus:400
    response.writeHead(200, {
        "Content-Type": "text/json"
    });
    response.end("<h1>Welcome to Nodejs</h1>")
}).listen();

console.log("Http server listening at port 3000")
