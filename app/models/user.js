var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var encrypt = require("../Utils/encrypt");

var user = new Schema({
    userName: String,
    password: String,
    age: Number,
    firstName: String,
    lastName: String,
    gender: String,
    address: {
        country: String,
        state: String,
        streetNumber: String,
        zipcode: Number,
        pobox: String
    }
});

user.pre('save', function(next) {
    if (this.password) {
        this.password = encrypt(this.password);
    }
    if (this.userName) {

        this.userName = encrypt(this.userName);
    }
    next();
});

module.exports = mongoose.model("user", user);