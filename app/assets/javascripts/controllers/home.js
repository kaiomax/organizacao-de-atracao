angular.module('Watcher')
  .controller('HomeCtrl', [
    '$scope', 'User',
    function($scope, User) {
      $scope.users = User.query();
    }
  ]);
