(function () {
    angular.module("eShop")
        .config(["$urlRouterProvider", "$stateProvider", "$translateProvider", function ($urlRouterProvider, $stateProvider, $translateProvider) {
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
            var addProductObj = {
                templateUrl: "app/templates/addProduct.html"
            };
            $stateProvider.state("login", loginObj);
            $stateProvider.state("register", registerObj);
            $stateProvider.state("products", productsObj);
            $stateProvider.state("addProduct", addProductObj);

            $translateProvider.translations('en', {
                SEARCH: 'Search',
                ADD_PRODUCT: 'Add Product',
                LOGIN: 'Login',
                REGISTER: 'Register'
            });
            $translateProvider.translations('de', {
                SEARCH: 'Suche',
                ADD_PRODUCT: 'Produkt hinzufügen.',
                LOGIN: 'Anmeldung',
                REGISTER: 'Neu registrieren'
            });
            $translateProvider.preferredLanguage('en');

    }]).run(["$state", function ($state) {
            $state.go("login");


    }])
})();
