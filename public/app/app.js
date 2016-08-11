(function () {
    "use strict";
    angular.module("eShop")
        .controller("mainCtrl", ["$scope", function ($scope) {
            var baseUrl = "app/templates/";
            $scope.templates = {
                navbarUrl: baseUrl + "navbar.html",
                footerUrl: baseUrl + "footer.html",
                registerUrl: baseUrl + "register.html",
                loginUrl: baseUrl + "login.html",
                productsUrl: baseUrl + "products.html"
            };
            $scope.search = {};

            $scope.loadContent = function (contentType) {
                if (contentType == "login") {
                    $scope.contentUrl = $scope.templates.loginUrl;
                } else if (contentType == "register") {
                    $scope.contentUrl = $scope.templates.registerUrl;
                } else if (contentType == "products") {
                    $scope.contentUrl = $scope.templates.productsUrl;
                }
            };

     }]);
})();
