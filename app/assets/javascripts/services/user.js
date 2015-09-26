angular.module('Watcher')
  .factory('User', function($resource) {
    return $resource('/users/:id', {id: '@id'});
  });
