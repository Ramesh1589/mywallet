angular.module("components")
    .directive("customLogo", [function () {
        return {
            templateUrl: "app/templates/customLogo.html",
            restrict: "A,E,C"
        };
}]);
