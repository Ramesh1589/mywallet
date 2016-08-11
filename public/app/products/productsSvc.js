angular.module("products")
    .service("productsSvc", ["$q", "$http", function ($q, $http) {
        this.getProducts = function (data) {
            var dfd = $q.defer();

            $http.post("api/WM/search", data)
                .then(function (response) {
                    dfd.resolve(response.data);
                })
                .catch(function (response) {
                    dfd.reject("Error Occurred");
                });
            return dfd.promise;
        };
}]);
