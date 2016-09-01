angular.module("components")
    .directive("customBrand", [function () {
        return {
            template: "<h1>{{brandName}}</h1>",

            restrict: "A",
            scope: {
                brandName: "@" //oneWay communication.+
            }
        };
}]);
