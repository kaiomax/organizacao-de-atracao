angular.module('Watcher')
  .factory('AuthService', function(User) {
    var currentUser;
    var obj = {};

    obj.login = function(id) {
      currentUser = User.get({id: id});
    }

    obj.logout = function() {
      currentUser = null;
    }

    obj.currentUser = function() {
      return currentUser;
    }

    obj.isLogged = function() {
      return (typeof(currentUser) != 'undefined' && currentUser != null);
    }

    return obj;
  });
