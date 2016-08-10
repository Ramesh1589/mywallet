(function () {
    angular.module("register")
        .controller("registerCtrl", ["$scope", "registerSvc", "Upload", "$timeout",
                                     function ($scope, registerSvc, Upload, $timeout) {
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

                $scope.uploadFiles = function (file, errFiles) {
                    $scope.f = file;
                    $scope.errFile = errFiles && errFiles[0];
                    if (file) {
                        file.upload = Upload.upload({
                            url: 'api/fileUpload',
                            data: {
                                file: file
                            }
                        });

                        file.upload.then(function (response) {
                            $timeout(function () {
                                file.result = response.data;
                            });
                        }, function (response) {
                            if (response.status > 0)
                                $scope.errorMsg = response.status + ': ' + response.data;
                        }, function (evt) {
                            file.progress = Math.min(100, parseInt(100.0 *
                                evt.loaded / evt.total));
                        });
                    }
                }
    }]);
})();
