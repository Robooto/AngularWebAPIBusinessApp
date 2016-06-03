(function () {
    "use strict";

    angular.module("productManagement",
        ["common.services",
            "ui.router"])
        //.config(appConfig)
        

    // appConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    // function appConfig($stateProvider, $urlRouterProvider) {
    //     $urlRouterProvider.otherwise("/login");

    //     $stateProvider
    //         .state("login", {
    //             url: "/login",
    //             templateUrl: "app/login/loginView.html",
    //             controller: "LoginCtrl as vm",
    //             authenticate: false
    //         })
    //         .state("products", {
    //             url: "/products",
    //             templateUrl: "app/products/productListView.html",
    //             controller: "ProductListCtrl as vm",
    //             authenticate: true
    //         })
    //         .state("productEdit", {
    //             url: "/products/edit/:productId",
    //             templateUrl: "app/products/productEditView.html",
    //             controller: "ProductEditCtrl as vm",
    //             authenticate: true
    //             // resolve: {
    //             //     productResource: "productResource",
    //             //     product: function (productResource, $stateParams) {
    //             //         var productId = $stateParams.productId;
    //             //         return productResource.get({ productId: productId }).$promise;
    //             //     }
    //             // }
    //         });
    // }

} ());