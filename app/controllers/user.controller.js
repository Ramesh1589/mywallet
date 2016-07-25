var controller = {};
var User = require("../models/user");
controller.createUser = function (req, res) {
    /*var user = {
        userName: "kiran",
        password: "1234",
        age: 30,
        firstName: "kiran",
        lastName: "paturi",
        gender: "Male",
        address: {
            country: "India",
            state: "Andhra Pradesh",
            streetNumber: "1212121",
            zipcode: "50121",
            pobox: ""
        }
    };*/
    var user = req.body;
    console.log(user);
    var userModel = new User(user);
    userModel.save(function (err, data) {
        if (err) {
            res.send("Error Occurred");
        } else {
            res.send("User Created")
        }
    });
};

controller.getUsers = function (req, res) {
    User.find({}, function (err, data) {
        if (err) {
            res.send("error occured");
        } else {
            res.send(data);
        }
    });
};

controller.updateUser = function (req, res) {

};

controller.deleteUser = function (req, res) {

};

controller.findUserById = function (req, res) {

};

module.exports = controller;
