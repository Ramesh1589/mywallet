(function () {
    angular.module("eShop")
        .config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
            //configuring the routes
            var loginObj = {
                templateUrl: "app/templates/login.html"
            };
            var registerObj = {
                templateUrl: "app/templates/register.html"
            };
            var productsObj = {
                templateUrl: "app/templates/products.html"
            };
            $stateProvider.state("login", loginObj);
            $stateProvider.state("register", registerObj);
            $stateProvider.state("products", productsObj);
    }]).run(["$state", function ($state) {
            $state.go("login");
    }])
})();
