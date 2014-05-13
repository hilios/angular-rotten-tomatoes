angular.module('ngRottenTomatoes')
.service('rtLists', function(rottenTomatoesApi) {
  return {
    overview: angular.noop,
    movies: angular.noop,
    dvds: angular.noop
  };
});
