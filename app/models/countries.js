var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var country = new Schema({
    name: String,
    code: String
});
module.exports = mongoose.model("country", country);