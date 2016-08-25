angular.module("components")
    .directive("numbersOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                /*console.log(scope);
                console.log(element);
                console.log(attrs);*/
                element.bind("keypress", function (evt) {
                    console.log(evt);
                    var numbersOnly = /^[0-9]*$/;
                    if (!numbersOnly.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        };
}]);
