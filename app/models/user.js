var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
    userName:String,
    password:String,
    age:Number,
    firstName:String,
    lastName:String,
    gender:String,
    address:{
        country:String,
        state:String,
        streetNumber:String,
        zipcode:Number,
        pobox:String
    }
});

module.exports = mongoose.model("user",user);
