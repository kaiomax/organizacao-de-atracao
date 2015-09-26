app.factory('Attraction', function($resource) {
    return $resource('/users/:userId/attractions/:id', {userId: '@userId', id: '@id'});
});
