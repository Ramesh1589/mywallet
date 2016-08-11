angular.module("products")
    .controller("prodcutsCtrl", ["$scope", "productsSvc", function ($scope, productsSvc) {
        /*$scope.search = {
    product: "ipod"
};*/
        productsSvc.getProducts($scope.search)
            .then(function (response) {
                console.log(response);
                $scope.products = response;
            }).catch(function (response) {
                console.log(response);
            });

}]);
