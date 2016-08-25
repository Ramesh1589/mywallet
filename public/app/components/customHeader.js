angular.module("components")
    .directive("customHeader", [function () {
        return {
            templateUrl: "app/templates/navbar.html",
            restrict: "A,E,C"
        };
}]);
