angular.module("components")
    .directive("alphabetsOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                /*console.log(scope);
                console.log(element);
                console.log(attrs);*/
                element.bind("keypress", function (evt) {
                    console.log(evt);
                    var alphabets = /^[a-zA-Z ]*$/;
                    if (!alphabets.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        };
}]);
