angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.settings', {
        url: "/settings",
        views: {
            'menuContent': {
                templateUrl: "templates/settings.html"
            }
        }
    })

    .state('app.mycarlists', {
      url: "/mycarlists",
      views: {
        'menuContent': {
          templateUrl: "templates/mycarlists.html",
          controller: 'MyCarListsCtrl'
        }
      }
    })

    .state('app.single', {
        url: "/mycarlists/:carId",
        views: {
            'menuContent': {
                templateUrl: "templates/carDetail.html",
                controller: 'CarDetailCtrl'
            }
        }
    });
  
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/mycarlists');
});