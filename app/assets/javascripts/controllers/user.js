angular.module('Watcher')
  .controller('UserCtrl', [
    '$scope', '$resource', '$stateParams', 'User', 'Attraction',
    function($scope, $resource, $stateParams, User, Attraction) {
      var userId = $stateParams.id;

      $scope.user = User.get({id: userId});
      $scope.attractions = Attraction.query({userId: userId});
    }
  ]);
