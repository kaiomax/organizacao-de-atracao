angular.module('Watcher')
  .controller('HomeCtrl', [
    '$scope', '$resource', 'User', 'Attraction',
    function($scope, $resource, User, Attraction) {
      $scope.users = User.query();

      $scope.getAttractions = function(id) {
        $scope.attractions = Attraction.query({userId: id});
      }

      $scope.addAttraction = function() {
        var attraction = new Attraction({
          title: $scope.newAttraction.title,
          media: $scope.newAttraction.media,
          schedule: $scope.newAttraction.schedule,
          userId: $scope.newAttraction.userId
        });

        attraction.$save(function(response) {
          $scope.attractions.push (response);
          $scope.newAttraction = {};
        });
      }
    }
  ]);
