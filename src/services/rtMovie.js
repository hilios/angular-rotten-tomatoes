angular.module('ngRottenTomatoes')
.service('rtMovie', function(rottenTomatoesApi) {
  return {
    info: angular.noop,
    reviews: angular.noop,
    cast: angular.noop,
    similar: angular.noop,
    clips: angular.noop
  }
});
