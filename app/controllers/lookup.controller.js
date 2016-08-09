var controller = {};
var Country = require("../models/countries");
controller.createCountry = function (req, res) {
    var country = req.body;
    console.log(country);
    // var countryModel = new Country(country);
    Country.collection.insert(country, onInsert);

    function onInsert(err, docs) {
        if (err) {
            console.info("Error Occurred");
        } else {
            console.info("data saved: ")
        }
    }
};

controller.getCountries = function (req, res) {
    Country.find({}, function (err, data) {
        if (err) {
            res.status(500).send("error occured");
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = controller;
