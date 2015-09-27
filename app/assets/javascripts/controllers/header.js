angular.module('Watcher')
  .controller('HeaderCtrl', [
    '$scope', '$location', 'AuthService',
    function($scope, $location, AuthService) {
      $scope.currentUser = AuthService.currentUser();

      $scope.$watch( AuthService.isLogged, function ( isLogged ) {
        $scope.isLogged = isLogged;
        $scope.currentUser = AuthService.currentUser();
      });

      $scope.logout = function() {
        AuthService.logout();
        $location.path("/");
      }
    }
  ]);
