angular.module('Watcher', ['ui.router','templates', 'ngResource'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '_home.html',
          controller: 'HomeCtrl'
        });

        $urlRouterProvider.otherwise('/');

    }
  ]);
