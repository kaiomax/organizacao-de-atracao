angular.module('Watcher')
  .controller('UsersCtrl', [
    '$scope', '$resource', 'User',
    function($scope, $resource, User) {
      $scope.users = User.query();
      $scope.pageTitle = "Usuários";
    }
  ]);
