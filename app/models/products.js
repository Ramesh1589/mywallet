var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var product = new Schema({
    name: String,
    price: Number,
    discount: Number,
    count: Number,
    desc: String
});
module.exports= mongoose.model("product",product);
