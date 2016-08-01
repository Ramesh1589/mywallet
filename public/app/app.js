(function () {
    "use strict";
    angular.module("eShop")
        .controller("mainCtrl", ["$scope", function ($scope) {
            var baseUrl = "app/templates/";
            $scope.templates = {
                navbarUrl: baseUrl + "navbar.html",
                footerUrl: baseUrl + "footer.html",
                registerUrl: baseUrl + "register.html",
                loginUrl: baseUrl + "login.html"
            };


            $scope.loadContent = function (contentType) {
                if (contentType == "login") {
                    $scope.contentUrl = $scope.templates.loginUrl;
                } else if (contentType == "register") {
                    $scope.contentUrl = $scope.templates.registerUrl;
                }
            };

     }]);
})();
