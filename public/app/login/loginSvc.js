angular.module("login")
    .service("loginSvc", ["$q", "$http", function ($q, $http) {
        var user;
        this.loginUser = function (data) {
            var dfd = $q.defer();

            $http.post("/api/authenticateUser", data)
                .then(function (response) {
                    user = response.data;
                    dfd.resolve(user);

                })
                .catch(function (response) {
                    dfd.reject("Error Occurred");
                });
            return dfd.promise;
        };
    }]);
