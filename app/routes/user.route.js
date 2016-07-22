module.exports = function (app) {

    var ctrl = require('../controllers/user.controller');
    app.post("/api/createuser", ctrl.createUser);
    app.get("/api/getAll", ctrl.getUsers);
};
