(function () {
    angular.module("register")
        .service("registerSvc", ["$http", function ($http) {
            this.getCountries = function () {
                var countryList = [{
                        name: "India",
                        code: "IN"
            },
                    {
                        name: "United States",
                        code: "US"
            }];
                return countryList;
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
