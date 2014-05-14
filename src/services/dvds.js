/**
 * Rotten Tomatoes DVD lists
 * http://developer.rottentomatoes.com/docs/json/v10/DVD_Lists_Directory
 */
angular.module('ngRottenTomatoes')
.service('rottenTomatoesDvds', function(rottenTomatoesApi) {
  /**
   * @return {HttpPromise}
   */
  function _topRentals() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _currentReleases() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _newReleases() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _upcoming() {
    return rottenTomatoesApi.request('/');
  }

  return {
    topRentals: _topRentals,
    currentReleases: _currentReleases,
    newReleases: _newReleases,
    upcoming: _upcoming
  };
});
