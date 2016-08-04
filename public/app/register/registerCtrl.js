(function () {
    angular.module("register")
        .controller("registerCtrl", ["$scope", "registerSvc", function ($scope, registerSvc) {
            $scope.user = {};
            $scope.countries = registerSvc.getCountries();

            $scope.register = function () {
                registerSvc.registerUser($scope.user);
            };
    }]);
})();
