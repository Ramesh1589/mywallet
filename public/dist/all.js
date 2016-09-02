(
    function () {
        angular.module("login", []);
        angular.module("register", []);
        angular.module("products", []);
        angular.module("filters", []);
        angular.module("components", []);
        //build module dependency
        angular.module("eShop", ["login", "register", "products", "ngFileUpload", "ngStorage", "ui.router", "filters", "components", "pascalprecht.translate"]);
    }
)();

angular.module("components")
    .directive("alphabetsOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                /*console.log(scope);
                console.log(element);
                console.log(attrs);*/
                element.bind("keypress", function (evt) {
                    console.log(evt);
                    var alphabets = /^[a-zA-Z ]*$/;
                    if (!alphabets.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        };
}]);

angular.module("components")
    .directive("checkUserName", [function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                element.bind("blur", function (evt) {
                    if (this.value == "kiran") {
                        ctrl.$setValidity("checkUserName", false);
                    } else {
                        ctrl.$setValidity("checkUserName", true);
                    }
                    scope.$apply();
                });
            }
        };
}]);
//Validation directive...

//require ngModel

angular.module("components")
    .directive("parentDir", [function () {
        return {
            restrict: "A",
            template: "<h1>{{greetings}}{{name}}</h1><div son></div>",
            compile: function (element, attrs) {
                console.log(element);
                return {
                    pre: function (scope, element, attrs) {
                        console.log("I am the pre-parent");
                        scope.name = "kiran";
                        scope.greetings = "Hw are you...";
                    },
                    post: function (scope, element, attrs) {
                        console.log("I am the post-parent");
                    }
                }
            }
        }

    }])
    .directive("son", [function () {
        return {
            restrict: "A",
            template: "<h1>{{sonGreetings}}</h1>",
            compile: function (element, attrs) {
                console.log(element);
                return {
                    pre: function (scope, element, attrs) {
                        console.log("I am the pre-child");

                    },
                    post: function (scope, element, attrs) {
                        console.log("I am the post-child");
                        scope.sonGreetings = "Hey I am P My dad is" + scope.name;
                    }
                }
            }

        }

    }]);

angular.module("components")
    .directive("customBrand", [function () {
        return {
            template: "<h1>{{brandName}}</h1>",

            restrict: "A",
            scope: {
                brandName: "@" //oneWay communication.+
            }
        }
}]);

angular.module("components")
    .directive("customHeader", [function () {
        return {
            templateUrl: "app/templates/navbar.html",
            restrict: "A,E,C"
        };
}]);

angular.module("components")
    .directive("customLogo", [function () {
        return {
            templateUrl: "app/templates/customLogo.html",
            restrict: "A,E,C"
        };
}]);

angular.module("components")
    .directive("datePicker", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.datepicker();
            }
        };
}]);

angular.module("components")
    .directive("numbersOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                /*console.log(scope);
                console.log(element);
                console.log(attrs);*/
                element.bind("keypress", function (evt) {
                    console.log(evt);
                    var numbersOnly = /^[0-9]*$/;
                    if (!numbersOnly.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        };
}]);

(function () {
    angular.module("eShop")
        .config(["$urlRouterProvider", "$stateProvider", "$translateProvider", function ($urlRouterProvider, $stateProvider, $translateProvider) {
            //configuring the routes
            var loginObj = {
                templateUrl: "app/templates/login.html"
            };
            var registerObj = {
                templateUrl: "app/templates/register.html"
            };
            var productsObj = {
                templateUrl: "app/templates/products.html"
            };
            var addProductObj = {
                templateUrl: "app/templates/addProduct.html"
            };
            $stateProvider.state("login", loginObj);
            $stateProvider.state("register", registerObj);
            $stateProvider.state("products", productsObj);
            $stateProvider.state("addProduct", addProductObj);

            $translateProvider.translations('en', {
                SEARCH: 'Search',
                ADD_PRODUCT: 'Add Product',
                LOGIN: 'Login',
                REGISTER: 'Register'
            });
            $translateProvider.translations('de', {
                SEARCH: 'Suche',
                ADD_PRODUCT: 'Produkt hinzufügen.',
                LOGIN: 'Anmeldung',
                REGISTER: 'Neu registrieren'
            });
            $translateProvider.preferredLanguage('en');

    }]).run(["$state", function ($state) {
            $state.go("login");


    }])
})();

angular.module("filters")
    .filter("formatPhone", [function () {
        return function (input, criteria, criteria2) {
            if (criteria == "US") {
                return "+1 " + input.substring(0, 3) + "-" +
                    input.substring(3, 6) +
                    "-" + input.substring(6, 10);
            }
            if (criteria == "IN") {
                return "+91 " + input.substring(0, 5) + "-" +
                    input.substring(5, 10);
            }
            return input;
        };
}]);

angular.module("login")
    .controller("loginCtrl", ["loginSvc", "$scope", "$sessionStorage", "$state", "$rootScope",

                         function (loginSvc, $scope, $sessionStorage, $state, $rootScope) {
            $scope.login = {
                userName: "",
                password: ""
            };
            $scope.storage = $sessionStorage;

            $scope.loginUser = function () {
                loginSvc.loginUser($scope.login)
                    .then(function (response) {
                        $scope.storage.user = response;
                        $rootScope.$broadcast("LOGGED-IN");
                        $state.go("products");
                    }).catch(function (response) {
                        console.log(response);
                    });
            };
                         }]);

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

(function () {
    angular.module("register")
        .controller("registerCtrl", ["$scope", "registerSvc", "Upload", "$timeout",
                                     function ($scope, registerSvc, Upload, $timeout) {
                $scope.user = {};
                $scope.product = {};
                
                registerSvc.getCountries()
                    .then(function (response) {
                        $scope.countries = response;
                    }).catch(function () {
                        $scope.showError = true;

                    });

                $scope.register = function () {
                    registerSvc.registerUser($scope.user);
                };

                  $scope.registerProduct = function () {
                    registerSvc.registerProduct($scope.product);
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

(function () {
    "use strict";
    angular.module("eShop")
        .controller("mainCtrl", ["$scope", "$rootScope", "$translate", function ($scope, $rootScope, $translate) {
            var baseUrl = "app/templates/";
            $scope.templates = {
                navbarUrl: baseUrl + "navbar.html",
                footerUrl: baseUrl + "footer.html",
                registerUrl: baseUrl + "register.html",
                loginUrl: baseUrl + "login.html",
                productsUrl: baseUrl + "products.html"
            };
            $scope.language = "en";
            $scope.search = {
                product: "samsung"
            };
            $scope.phoneNumber = "1234567890";
            $scope.user = {};
            $rootScope.$on("LOGGED-IN", function (event, args) {
                $scope.user.isLoggedIn = true;
            });
            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };
            /*
                        $scope.loadContent = function (contentType) {
                            $scope.contentUrl = '';
                            if (contentType == "login") {
                                $scope.contentUrl = $scope.templates.loginUrl;
                            } else if (contentType == "register") {
                                $scope.contentUrl = $scope.templates.registerUrl;
                            } else if (contentType == "products") {
                                $scope.contentUrl = $scope.templates.productsUrl;

                                $rootScope.$broadcast("PRODCUT_SEARCH");
                            }
                        };*/

     }]);
})();
