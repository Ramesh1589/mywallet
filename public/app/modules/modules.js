(
    function () {
        angular.module("login", []);
        angular.module("register", []);
        angular.module("products", []);
        angular.module("filters", []);
        //build module dependency
        angular.module("eShop", ["login", "register", "products", "ngFileUpload", "ngStorage", "ui.router", "filters"]);
    }
)();
