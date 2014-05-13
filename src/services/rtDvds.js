angular.module('ngRottenTomatoes')
.service('rtDvds', function(rottenTomatoesApi) {
  return {
    topRentals: angular.noop,
    currentReleases: angular.noop,
    newReleases: angular.noop,
    upcoming: angular.noop
  };
});
