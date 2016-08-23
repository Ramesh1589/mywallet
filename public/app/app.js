(function () {
    "use strict";
    angular.module("eShop")
        .controller("mainCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
            var baseUrl = "app/templates/";
            $scope.templates = {
                navbarUrl: baseUrl + "navbar.html",
                footerUrl: baseUrl + "footer.html",
                registerUrl: baseUrl + "register.html",
                loginUrl: baseUrl + "login.html",
                productsUrl: baseUrl + "products.html"
            };
            $scope.search = {
                product: "samsung"
            };
            $scope.phoneNumber = "1234567890";
            $scope.user = {};
            $rootScope.$on("LOGGED-IN", function (event, args) {
                $scope.user.isLoggedIn = true;
            });

            /*
                        $scope.loadContent = function (contentType) {
                            $scope.contentUrl = '';
                            if (contentType == "login") {
                                $scope.contentUrl = $scope.templates.loginUrl;
                            } else if (contentType == "register") {
                                $scope.contentUrl = $scope.templates.registerUrl;
                            } else if (contentType == "products") {
                                $scope.contentUrl = $scope.templates.productsUrl;

                                $rootScope.$broadcast("PRODCUT_SEARCH");
                            }
                        };*/

     }]);
})();
