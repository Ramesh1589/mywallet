angular.module("login")
    .service("loginSvc", ["$q", "$http", function($q, $http) {

        this.loginUser = function(data) {
            var dfd = $q.defer();

            $http.post("/api/authenticateUser", data)
                .then(function(response) {
                    dfd.resolve(response.data);
                })
                .catch(function(response) {
                    dfd.reject("Error Occurred");
                });
            return dfd.promise;
        };
    }]);