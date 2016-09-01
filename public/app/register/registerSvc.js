(function () {
    angular.module("register")
        .service("registerSvc", ["$http", "$q", 
                                 function ($http, $q) {
            this.getCountries = function () {
                var dfd = $q.defer();
                $http.get("/api/getCountries")
                    .then(function (response) {
                        dfd.resolve(response.data);
                    }).catch(function (response) {
                        dfd.reject(response);
                    });
                return dfd.promise;
            };

            this.registerUser = function (data) {
                var url = "/api/createuser";
                $http.post(url, data)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
                console.log(data);
            };

             this.registerProduct = function (data) {
                var url = "/api/registerProduct";
                $http.post(url, data)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
                console.log(data);
            };

    }]);
})();
