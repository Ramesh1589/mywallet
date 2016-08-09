(function () {
    angular.module("register")
        .controller("registerCtrl", ["$scope", "registerSvc", function ($scope, registerSvc) {
            $scope.user = {};
            registerSvc.getCountries()
                .then(function (response) {
                    $scope.countries = response;
                }).catch(function () {
                    $scope.showError = true;

                });

            $scope.register = function () {
                registerSvc.registerUser($scope.user);
            };
    }]);
})();
