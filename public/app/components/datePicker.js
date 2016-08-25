angular.module("components")
    .directive("datePicker", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.datepicker();
            }
        };
}]);
