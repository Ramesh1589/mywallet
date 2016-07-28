module.exports = function(app) {

    var ctrl = require('../controllers/wallmart.controller');

    app.post("/api/WM/search", ctrl.searchProduct);

};