(function () {
    angular.module('mercury.controllers', ['LocalStorageModule']);

    function appController ($scope, $ionicModal, $timeout, localStorageService) {
        var carList = localStorageService.get('carList');
        $scope.numberOfCar = carList ? carList.length : 0;
    }
    angular
        .module('mercury.controllers')
        .controller('AppCtrl', appController);






    function myCarListController ($scope, localStorageService) {
        var carList = localStorageService.get('carList');
        $scope.carList = carList || [];
    }
    angular
        .module('mercury.controllers')
        .controller('MyCarListCtrl', myCarListController);






    function addCarController ($scope, $state, localStorageService) {
        setDefaults();
        wireHandlers();

        function setDefaults () {
            var car = {};
            car.name = '';
            car.registrationNumber = '';
            car.registrationReminderCycle = 6;
            car.serviceProvider = '';
            car.serviceProviderNumber = '';
            car.serviceReminderCycle = 5;
            car.regoReminderToggle = { text:'Rego reminder', checked: false };
            car.serviceReminderToggle = {text: 'Service reminder', checked: false};
            car.tyrePressure = '';
            car.make = '';
            car.model = '';
            car.year = '';
            car.engineSize = '';
            $scope.car = car;
        }
        function wireHandlers () {
            $scope.addCar = addCar;
        }
        function addCar () {
            var carList = localStorageService.get('carList');
            carList = carList || [];

            var car = {};
            car.id = carList.length + 1;
            car.name = $scope.car.name;
            car.registrationNumber = $scope.car.registrationNumber;
            car.regoReminderToggle = $scope.car.regoReminderToggle;
            car.registrationReminderCycle = $scope.car.registrationReminderCycle;
            car.serviceProvider = $scope.car.serviceProvider;
            car.serviceProviderNumber = $scope.car.serviceProviderNumber;
            car.serviceReminderToggle = $scope.car.serviceReminderToggle;
            car.serviceReminderCycle = $scope.car.serviceReminderCycle;
            car.tyrePressure = $scope.car.tyrePressure;
            car.make = $scope.car.make;
            car.model = $scope.car.model;
            car.year = $scope.car.year;
            car.engineSize = $scope.car.engineSize;
            carList.push(car);
            localStorageService.set('carList', carList);

            $state.go('app.single', {carId:car.id});
        }
    }
    angular
        .module('mercury.controllers')
        .controller('AddCarCtrl', addCarController);




    function carDetailController ($scope, $filter, $stateParams, localStorageService) {
        var id = $stateParams.carId;
        var carList = localStorageService.get('carList');
        var car = $filter('filter')(carList, {id:id})[0];
        $scope.car = car;
    }
    angular
        .module('mercury.controllers')
        .controller('CarDetailCtrl', carDetailController);
})();