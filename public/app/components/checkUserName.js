angular.module("components")
    .directive("checkUserName", [function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                element.bind("blur", function (evt) {
                    if (this.value == "kiran") {
                        ctrl.$setValidity("checkUserName", false);
                    } else {
                        ctrl.$setValidity("checkUserName", true);
                    }
                    scope.$apply();
                });
            }
        };
}]);
//Validation directive...

//require ngModel
