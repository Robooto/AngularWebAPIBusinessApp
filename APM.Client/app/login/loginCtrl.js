(function () {
    'use strict';

    angular
        .module("productManagement")
        .controller("LoginCtrl", LoginCtrl);
    LoginCtrl.$inject = ["userAccount", "currentUser", "$state"];

    function LoginCtrl(userAccount, currentUser, $state) {
        var vm = this;

        vm.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        };
        vm.message = '';
        vm.userData = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        vm.registerUser = function () {
            vm.userData.confirmPassword = vm.userData.password;

            userAccount.registration.register(vm.userData,
                function (data) {
                    vm.confirmPassword = "";
                    vm.message = "...Registration successful";
                    vm.login();
                },
                function (response) {
                    vm.isLoggedIn = false;
                    vm.message = response.statusText + "\r\n";
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            vm.message += response.data.modelState[key] + "\r\n";
                        }
                    }
                }
            );
        };

        vm.login = function () {
            vm.userData.grant_type = "password";
            vm.userData.userName = vm.userData.email;

            userAccount.login.loginUser(vm.userData,
                function (data) {
                    vm.message = "";
                    vm.password = "";
                    vm.token = data.access_token;
                    currentUser.setProfile(vm.userData.userName, data.access_token);
                    $state.go("products");
                },
                function (response) {
                    vm.password = "";
                    vm.message = response.statusText + "\r\n";
                    if (response.data && response.data.exceptionMessage)
                        vm.message += response.data.exceptionMessage;
                    if (response.data && response.data.error) {
                        vm.message += response.data.error;
                    }
                }
            )
        };
    }
})();