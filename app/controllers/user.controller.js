var controller = {};
var User = require("../models/user");
var encrypt = require("../Utils/encrypt");
controller.createUser = function(req, res) {
    var user = req.body;
    console.log(user);
    var userModel = new User(user);
    userModel.save(function(err, data) {
        if (err) {
            res.send("Error Occurred");
        } else {
            res.send(data)
        }
    });
};

controller.getUsers = function(req, res) {
    User.find({}, function(err, data) {
        if (err) {
            res.send("error occured");
        } else {
            res.send(data);
        }
    });
};

controller.updateUser = function(req, res) {

};

controller.deleteUser = function(req, res) {

};

var findUserById = function(login, next) {
    login.userName = encrypt(login.userName);
    login.password = encrypt(login.password);
    User.findOne(login, "firstName lastName", function(err, data) {
        if (err) {
            next("Error occurred");
        } else {
            next(data);
        }
    });
};


controller.authenticate = function(req, res) {
    var login = req.body;
    findUserById(login, function(data) {
        res.send(data);
    });
};
module.exports = controller;