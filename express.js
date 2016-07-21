var myApp = require('express')();
var bodyParser = require('body-parser');
var config = require('./config/config');


myApp.set("views", "./views");
myApp.set("view engine", "ejs");
//var myApp = express();
// parse application/x-www-form-urlencoded
myApp.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
myApp.use(bodyParser.json());

myApp.get("/", function (req, res) {
    var data = [{
        name: "kiran"
    }, {
        name: "ravi"
    }, {
        name: "Shravya"
    }];
    res.render("index", {
        title: "EJS",
        data: data
    });
}).listen(config.port)


myApp.post("/", function (req, res) {
    console.log(req.body)
    res.send("<h1>hello i am the post</h1>")
})
