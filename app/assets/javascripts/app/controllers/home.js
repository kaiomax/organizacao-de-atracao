app.controller('HomeCtrl', ['$scope', '$resource', 'User', function($scope, $resource, User) {
  $scope.users = User.query();
  $scope.name = "Watcher";
}]);
