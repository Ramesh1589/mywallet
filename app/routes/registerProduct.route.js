module.exports = function(app) {

    var ctrl = require('../controllers/product.controller');
    app.post("/api/registerProduct", ctrl.registerProduct);
};