angular.module('starter', ['ionic', 'firebase', 'ngResource', 'ngCordova', 'ionMdInput', 'ion-datetime-picker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.chat', {
    url: '/rooms/:roomId',
    views: {
      'menuContent': {
        templateUrl: 'templates/message.html',
        controller: 'UsersCtrl'
      }
    }
  })
  .state('app.newchat', {
    url: '/new',
    views: {
      'menuContent': {
        templateUrl: 'templates/new-message.html',
        controller: 'NewMessageCtrl'
      }
    }
  })
  .state('app.lobby', {
    url: '/lobby',
    views: {
      'menuContent': {
        templateUrl: 'templates/lobby.html',
        controller: 'LobbyCtrl'
      }
    }
  })
  .state('app.register', {
    url: '/registerEmail',
    views: {
      'menuContent': {
        templateUrl: 'templates/registerEmail.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.activateaccount', {
    url: '/activateAccount',
    views: {
      'menuContent': {
        templateUrl: 'templates/activateAccount.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.users', {
    url: '/users',
    views: {
      'menuContent': {
        templateUrl: 'templates/users.html',
        controller: 'UsersCtrl'
      }
    }
  })
  .state('app.locations', {
    url: '/locations',
    views: {
      'menuContent': {
        templateUrl: 'templates/locations.html',
        controller: 'locationsCtrl'
      }
    }
  })
  .state('app.location', {
    url: '/location',
    views: {
      'menuContent': {
        templateUrl: 'templates/location.html',
        controller: 'locationsCtrl'
      }
    }
  })
  .state('app.primeiraTelaEdit', {
    url: '/primeiraTelaEdit',
    views: {
      'menuContent': {
        templateUrl: 'templates/primeiraTelaEdit.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.segundaTelaEdit', {
    url: '/segundaTelaEdit',
    views: {
      'menuContent': {
        templateUrl: 'templates/segundaTelaEdit.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.matches', {
    url: '/matches',
    views: {
      'menuContent': {
        templateUrl: 'templates/matches.html',
        controller: 'UsersCtrl'
      }
    }
  })
  .state('app.editprofile', {
    url: '/editprofile',
    views: {
      'menuContent': {
        templateUrl: 'templates/editProfile.html',
        controller: 'LoginCtrl'
      }
    }
  })
  ;
  $urlRouterProvider.otherwise("app/home");
})
