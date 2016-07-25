var crypto = require("crypto");
var encryptData = function(input) {
    var md5 = crypto.createHash('md5');
    return md5.update(input).digest('hex');
};

module.exports = encryptData;