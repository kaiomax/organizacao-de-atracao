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
        })
        .state('users', {
          url: '/users',
          templateUrl: '_users.html',
          controller: 'UsersCtrl'
        })
        .state('user', {
          url: '/users/:id',
          templateUrl: '_user.html',
          controller: 'UserCtrl'
        })
        .state('dashboard', {
          url: '/dashboard/:id',
          templateUrl: '_dashboard.html',
          controller: 'DashboardCtrl'
        });

        $urlRouterProvider.otherwise('/');

    }
  ]);
