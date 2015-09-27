angular.module('Watcher')
  .controller('DashboardCtrl', [
    '$scope', '$resource', '$stateParams', 'User', 'Attraction', 'AuthService',
    function($scope, $resource, $stateParams, User, Attraction, AuthService) {
      var userId = $stateParams.id;

      AuthService.login(userId);

      $scope.user = User.get({id: userId});
      $scope.users = User.query();
      $scope.attractions = Attraction.query({userId: userId});

      $scope.addAttraction = function() {
        var attraction = new Attraction({
          title: $scope.newAttraction.title,
          media: $scope.newAttraction.media,
          schedule: $scope.newAttraction.schedule,
          userId: userId
        });

        attraction.$save(function(response) {
          $scope.attractions.push (response);
          $scope.newAttraction = {};
        });
      }

      $scope.$watch( AuthService.isLoggedIn, function () {
        $scope.currentUser = AuthService.currentUser();
      });
    }
  ]);
