(function () {
    angular.module('starter.controllers', []);

    function mainController ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
          $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
          $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
          console.log('Doing login', $scope.loginData);

          // Simulate a login delay. Remove this and replace with your login
          // code if using a login system
          $timeout(function() {
            $scope.closeLogin();
          }, 1000);
        };
    }
    angular
        .module('starter.controllers')
        .controller('AppCtrl', mainController);






    function myCarListsController ($scope) {
        $scope.myCarLists = [
            { title: 'Honda Accord', id: 1 },
            { title: 'Nissan Bluebird', id: 2 }
        ];
    }
    angular
        .module('starter.controllers')
        .controller('MyCarListsCtrl', myCarListsController);






    function carDetailController ($scope, $stateParams) {
    }
    angular
        .module('starter.controllers')
        .controller('CarDetailCtrl', carDetailController);
})();