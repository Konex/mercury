(function () {
    angular.module('mercury.controllers', ['LocalStorageModule']);

    function appController ($scope, $ionicModal, $timeout, localStorageService) {
        var carList = localStorageService.get('myCarList');
        $scope.numberOfCar = carList ? carList.length : 0;
    }
    angular
        .module('mercury.controllers')
        .controller('AppCtrl', appController);






    function myCarListController ($scope, localStorageService) {
        // var defaultCarList = [
        //     { title: 'Honda Accord', id: 1 },
        //     { title: 'Nissan Bluebird', id: 2 }
        // ];
        



        var carList = localStorageService.get('myCarList');
        $scope.myCarList = carList || [];



    }
    angular
        .module('mercury.controllers')
        .controller('MyCarListCtrl', myCarListController);






    function addCarController ($scope, localStorageService) {
        setDefaults();
        wireHandlers();

        function setDefaults () {
            $scope.registrationReminderCycle = 6;
            $scope.regoReminderToggle = { text:'Rego reminder', checked: false };    
        }
        function wireHandlers () {
            $scope.onRegoReminderToggleChange = onRegoReminderToggleChange;    
        }
        function onRegoReminderToggleChange () {
            
        }
    }
    angular
        .module('mercury.controllers')
        .controller('AddCarCtrl', addCarController);






    function carDetailController ($scope, $stateParams, localStorageService) {
        var id = $stateParams.carId;
    }
    angular
        .module('mercury.controllers')
        .controller('CarDetailCtrl', carDetailController);
})();