(function () {
    angular.module("register")
        .service("registerSvc", ["$http", "$q", function ($http, $q) {
            this.getCountries = function () {
                var countryList = [{
                        name: "India",
                        code: "IN"
            },
                    {
                        name: "United States",
                        code: "US"
            }];
                var dfd = $q.defer();
                if (countryList) {
                    dfd.resolve(countryList);
                } else {
                    dfd.reject("Error");
                }

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

    }]);
})();
