var controller = {};
var Product = require("../models/products");
controller.registerProduct = function(req, res) {
    var product = req.body;
    console.log(product);
    var productModel = new Product(product);
    productModel.save(function(err, data) {
        if (err) {
            res.send("Error Occurred");
        } else {
            res.send(data)
        }
    });
};

module.exports = controller;