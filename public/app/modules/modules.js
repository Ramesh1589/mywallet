(
    function () {
        angular.module("login", []);
        angular.module("register", []);
        angular.module("products", []);
        //build module dependency
        angular.module("eShop", ["login", "register", "products"]);
    }
)();
