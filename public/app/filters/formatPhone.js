angular.module("filters")
    .filter("formatPhone", [function () {
        return function (input, criteria, criteria2) {
            if (criteria == "US") {
                return "+1 " + input.substring(0, 3) + "-" +
                    input.substring(3, 6) +
                    "-" + input.substring(6, 10);
            }
            if (criteria == "IN") {
                return "+91 " + input.substring(0, 5) + "-" +
                    input.substring(5, 10);
            }
            return input;
        };
}]);
