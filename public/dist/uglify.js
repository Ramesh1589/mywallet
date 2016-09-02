!function(){angular.module("login",[]),angular.module("register",[]),angular.module("products",[]),angular.module("filters",[]),angular.module("components",[]),angular.module("eShop",["login","register","products","ngFileUpload","ngStorage","ui.router","filters","components","pascalprecht.translate"])}(),angular.module("components").directive("alphabetsOnly",[function(){return{restrict:"A",link:function(e,t,n){t.bind("keypress",function(e){console.log(e);var t=/^[a-zA-Z ]*$/;t.test(e.key)||e.preventDefault()})}}}]),angular.module("components").directive("checkUserName",[function(){return{restrict:"A",require:"ngModel",link:function(e,t,n,r){t.bind("blur",function(t){"kiran"==this.value?r.$setValidity("checkUserName",!1):r.$setValidity("checkUserName",!0),e.$apply()})}}}]),angular.module("components").directive("parentDir",[function(){return{restrict:"A",template:"<h1>{{greetings}}{{name}}</h1><div son></div>",compile:function(e,t){return console.log(e),{pre:function(e,t,n){console.log("I am the pre-parent"),e.name="kiran",e.greetings="Hw are you..."},post:function(e,t,n){console.log("I am the post-parent")}}}}}]).directive("son",[function(){return{restrict:"A",template:"<h1>{{sonGreetings}}</h1>",compile:function(e,t){return console.log(e),{pre:function(e,t,n){console.log("I am the pre-child")},post:function(e,t,n){console.log("I am the post-child"),e.sonGreetings="Hey I am P My dad is"+e.name}}}}}]),angular.module("components").directive("customBrand",[function(){return{template:"<h1>{{brandName}}</h1>",restrict:"A",scope:{brandName:"@"}}}]),angular.module("components").directive("customHeader",[function(){return{templateUrl:"app/templates/navbar.html",restrict:"A,E,C"}}]),angular.module("components").directive("customLogo",[function(){return{templateUrl:"app/templates/customLogo.html",restrict:"A,E,C"}}]),angular.module("components").directive("datePicker",[function(){return{restrict:"A",link:function(e,t,n){t.datepicker()}}}]),angular.module("components").directive("numbersOnly",[function(){return{restrict:"A",link:function(e,t,n){t.bind("keypress",function(e){console.log(e);var t=/^[0-9]*$/;t.test(e.key)||e.preventDefault()})}}}]),function(){angular.module("eShop").config(["$urlRouterProvider","$stateProvider","$translateProvider",function(e,t,n){var r={templateUrl:"app/templates/login.html"},o={templateUrl:"app/templates/register.html"},c={templateUrl:"app/templates/products.html"},u={templateUrl:"app/templates/addProduct.html"};t.state("login",r),t.state("register",o),t.state("products",c),t.state("addProduct",u),n.translations("en",{SEARCH:"Search",ADD_PRODUCT:"Add Product",LOGIN:"Login",REGISTER:"Register"}),n.translations("de",{SEARCH:"Suche",ADD_PRODUCT:"Produkt hinzufügen.",LOGIN:"Anmeldung",REGISTER:"Neu registrieren"}),n.preferredLanguage("en")}]).run(["$state",function(e){e.go("login")}])}(),angular.module("filters").filter("formatPhone",[function(){return function(e,t,n){return"US"==t?"+1 "+e.substring(0,3)+"-"+e.substring(3,6)+"-"+e.substring(6,10):"IN"==t?"+91 "+e.substring(0,5)+"-"+e.substring(5,10):e}}]),angular.module("login").controller("loginCtrl",["loginSvc","$scope","$sessionStorage","$state","$rootScope",function(e,t,n,r,o){t.login={userName:"",password:""},t.storage=n,t.loginUser=function(){e.loginUser(t.login).then(function(e){t.storage.user=e,o.$broadcast("LOGGED-IN"),r.go("products")}).catch(function(e){console.log(e)})}}]),angular.module("login").service("loginSvc",["$q","$http",function(e,t){var n;this.loginUser=function(r){var o=e.defer();return t.post("/api/authenticateUser",r).then(function(e){n=e.data,o.resolve(n)}).catch(function(e){o.reject("Error Occurred")}),o.promise}}]),angular.module("products").controller("prodcutsCtrl",["$scope","productsSvc",function(e,t){e.loadProducts=function(){t.getProducts(e.search).then(function(t){console.log(t),e.products=t}).catch(function(e){console.log(e)})},e.$on("PRODCUT_SEARCH",function(t,n){e.loadProducts()}),e.loadProducts()}]),angular.module("products").service("productsSvc",["$q","$http",function(e,t){this.getProducts=function(n){var r=e.defer();return t.post("api/WM/search",n).then(function(e){r.resolve(e.data)}).catch(function(e){r.reject("Error Occurred")}),r.promise}}]),function(){angular.module("register").controller("registerCtrl",["$scope","registerSvc","Upload","$timeout",function(e,t,n,r){e.user={},e.product={},t.getCountries().then(function(t){e.countries=t}).catch(function(){e.showError=!0}),e.register=function(){t.registerUser(e.user)},e.registerProduct=function(){t.registerProduct(e.product)},e.uploadFiles=function(t,o){e.f=t,e.errFile=o&&o[0],t&&(t.upload=n.upload({url:"api/fileUpload",data:{file:t}}),t.upload.then(function(e){r(function(){t.result=e.data})},function(t){t.status>0&&(e.errorMsg=t.status+": "+t.data)},function(e){t.progress=Math.min(100,parseInt(100*e.loaded/e.total))}))}}])}(),function(){angular.module("register").service("registerSvc",["$http","$q",function(e,t){this.getCountries=function(){var n=t.defer();return e.get("/api/getCountries").then(function(e){n.resolve(e.data)}).catch(function(e){n.reject(e)}),n.promise},this.registerUser=function(t){var n="/api/createuser";e.post(n,t).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),console.log(t)},this.registerProduct=function(t){var n="/api/registerProduct";e.post(n,t).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),console.log(t)}}])}(),function(){"use strict";angular.module("eShop").controller("mainCtrl",["$scope","$rootScope","$translate",function(e,t,n){var r="app/templates/";e.templates={navbarUrl:r+"navbar.html",footerUrl:r+"footer.html",registerUrl:r+"register.html",loginUrl:r+"login.html",productsUrl:r+"products.html"},e.language="en",e.search={product:"samsung"},e.phoneNumber="1234567890",e.user={},t.$on("LOGGED-IN",function(t,n){e.user.isLoggedIn=!0}),e.changeLanguage=function(e){n.use(e)}}])}();