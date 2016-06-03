(function () {
    'use strict';

    angular
        .module("productManagement")
        .run(runConfig);

    runConfig.$inject = ["$rootScope", "$state", "currentUser"];

    function runConfig($rootScope, $state, currentUser) {
        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            if (toState.authenticate && !currentUser.getProfile().isLoggedIn) {
                // User isn’t authenticated
                $state.go("login");
                event.preventDefault();
            }
        });
    }
})();