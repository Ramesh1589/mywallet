var controller = {};
var multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
}).single("upload-eshop");

controller.uploadFile = function (req, res) {
    console.log("file-route");
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.end("Error Uploading file");
        } else {
            console.log(res.filename);
            res.end("File is uploaded-");
        }
    });

};

module.exports = controller;
