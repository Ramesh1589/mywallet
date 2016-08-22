angular.module("products")
    .controller("prodcutsCtrl", ["$scope", "productsSvc", function ($scope, productsSvc) {
        /*$scope.search = {
    product: "ipod"
};*/
        $scope.loadProducts = function () {
            productsSvc.getProducts($scope.search)
                .then(function (response) {
                    console.log(response);
                    $scope.products = response;
                }).catch(function (response) {
                    console.log(response);
                });
        };

        $scope.$on("PRODCUT_SEARCH", function (event, args) {
            $scope.loadProducts();
        });

        $scope.loadProducts();
}]);
