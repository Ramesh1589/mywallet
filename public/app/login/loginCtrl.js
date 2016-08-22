angular.module("login")
    .controller("loginCtrl", ["loginSvc", "$scope", "$sessionStorage", "$state",

                         function (loginSvc, $scope, $sessionStorage, $state) {
            $scope.login = {
                userName: "",
                password: ""
            };
            $scope.storage = $sessionStorage;

            $scope.loginUser = function () {
                loginSvc.loginUser($scope.login)
                    .then(function (response) {
                        $scope.storage.user = response;

                        $state.go("products");
                    }).catch(function (response) {
                        console.log(response);
                    });
            };
                         }]);
