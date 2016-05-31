(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ProductListCtrl);
                     
    ProductListCtrl.$inject = ["productResource"];

    function ProductListCtrl(productResource) {
        var vm = this;
        
        vm.searchCriteria = "GDN";
        vm.sortProperty = "Price";
        vm.sortDirection = "desc";

        productResource.query({
            $filter: "contains(ProductCode, '" + vm.searchCriteria + "') and Price lt 10", 
            $orderby: vm.sortProperty + " " + vm.sortDirection}, function (data) {
            vm.products = data;
        });
        
    }
}());