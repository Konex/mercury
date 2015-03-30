(function () {
    angular.module('mercury.controllers', []);

    function appController ($scope, $ionicModal, $timeout) {

    }
    angular
        .module('mercury.controllers')
        .controller('AppCtrl', appController);






    function myCarListController ($scope) {
        $scope.myCarList = [
            { title: 'Honda Accord', id: 1 },
            { title: 'Nissan Bluebird', id: 2 }
        ];
    }
    angular
        .module('mercury.controllers')
        .controller('MyCarListCtrl', myCarListController);





    function carDetailController ($scope, $stateParams) {
        var id = $stateParams.carId;
    }
    angular
        .module('mercury.controllers')
        .controller('CarDetailCtrl', carDetailController);
})();