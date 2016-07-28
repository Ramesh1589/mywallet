var request = require("request");
var config = require("../config/config");

var walmartCtrl = {};
walmartCtrl.searchProduct = function(req, res) {
    var product = req.body.product;
    var url = config.wallmartUrl;
    var search = config.search;
    var query = url + search + product + "&format=json" + "&apiKey=" + config.apiKey;
    console.log(query);
    request.get(query,
        function(error, response, body) {
            console.log(body.items);
            filterProducts(res, body);
        });
};


function filterProducts(res, products) {
    console.log(products.items);
    var data = JSON.parse(products);
    res.send(data.items);
}


module.exports = walmartCtrl;