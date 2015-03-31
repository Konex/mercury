(function () {
    angular.module('mercury.controllers', ['LocalStorageModule']);

    function appController ($scope, $ionicModal, $timeout) {

    }
    angular
        .module('mercury.controllers')
        .controller('AppCtrl', appController);






    function myCarListController ($scope, localStorageService) {
        $scope.myCarList = [
            { title: 'Honda Accord', id: 1 },
            { title: 'Nissan Bluebird', id: 2 }
        ];
    }
    angular
        .module('mercury.controllers')
        .controller('MyCarListCtrl', myCarListController);





    function carDetailController ($scope, $stateParams, localStorageService) {
        var id = $stateParams.carId;
    }
    angular
        .module('mercury.controllers')
        .controller('CarDetailCtrl', carDetailController);
})();