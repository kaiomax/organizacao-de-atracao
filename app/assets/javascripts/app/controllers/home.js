app.controller('HomeCtrl', [
  '$scope', '$resource', 'User', 'Attraction',
  function($scope, $resource, User, Attraction) {
    $scope.users = User.query();

    $scope.getAttractions = function(id) {
      $scope.attractions = Attraction.query({userId: id});
    }
  }
]);
