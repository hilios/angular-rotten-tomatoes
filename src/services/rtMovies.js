angular.module('ngRottenTomatoes')
.service('rtMovies', function(rottenTomatoesApi) {
  return {
    search: angular.noop,
    boxOffice: angular.noop,
    inTheaters: angular.noop,
    opening: angular.noop,
    upcoming: angular.noop
  };
});
