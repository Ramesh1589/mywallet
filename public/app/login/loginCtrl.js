angular.module("login")
    .controller("loginCtrl", ["loginSvc", "$scope", "$sessionStorage", "$state", "$rootScope",

                         function (loginSvc, $scope, $sessionStorage, $state, $rootScope) {
            $scope.login = {
                userName: "",
                password: ""
            };
            $scope.storage = $sessionStorage;

            $scope.loginUser = function () {
                loginSvc.loginUser($scope.login)
                    .then(function (response) {
                        $scope.storage.user = response;
                        $rootScope.$broadcast("LOGGED-IN");
                        $state.go("products");
                    }).catch(function (response) {
                        console.log(response);
                    });
            };
                         }]);
