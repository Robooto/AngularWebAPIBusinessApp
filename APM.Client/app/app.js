(function () {
    "use strict";

    angular.module("productManagement",
        ["common.services",
            "ui.router"])
        .config(appConfig);


    appConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .state("productEdit", {
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditCtrl as vm",
                // resolve: {
                //     productResource: "productResource",
                //     product: function (productResource, $stateParams) {
                //         var productId = $stateParams.productId;
                //         return productResource.get({ productId: productId }).$promise;
                //     }
                // }
            });
    }

} ());