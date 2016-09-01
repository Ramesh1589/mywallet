angular.module("components")
    .directive("parentDir", [function () {
        return {
            restrict: "A",
            template: "<h1>{{greetings}}{{name}}</h1><div son></div>",
            compile: function (element, attrs) {
                console.log(element);
                return {
                    pre: function (scope, element, attrs) {
                        console.log("I am the pre-parent");
                        scope.name = "kiran";
                        scope.greetings = "Hw are you...";
                    },
                    post: function (scope, element, attrs) {
                        console.log("I am the post-parent");
                    }
                }
            }
        }

    }])
    .directive("son", [function () {
        return {
            restrict: "A",
            template: "<h1>{{sonGreetings}}</h1>",
            compile: function (element, attrs) {
                console.log(element);
                return {
                    pre: function (scope, element, attrs) {
                        console.log("I am the pre-child");

                    },
                    post: function (scope, element, attrs) {
                        console.log("I am the post-child");
                        scope.sonGreetings = "Hey I am P My dad is" + scope.name;
                    }
                }
            }

        }

    }]);
