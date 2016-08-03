(function () {
    angular.module("register")
        .controller("registerCtrl", ["$scope", function ($scope) {
            $scope.user = {};
            $scope.countries = [{
                name: "India",
                code: "IN"
            },
                  {
                name: "United States",
                code: "US"
            },             ]
    }]);
})();
