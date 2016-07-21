var express = require('express');
var bodyParser = require('body-parser');
module.exports = function () {
    var app = express();

    app.set("views", "./app/views");
    app.set("view engine", "ejs");
    require("../routes/index.route")(app)
    require("../routes/about.route")(app)
    return app;
};
