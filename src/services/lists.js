angular.module('ngRottenTomatoes')
.service('rottenTomatoesLists', function(rottenTomatoesApi) {
  /**
   * @return {HttpPromise}
   */
  function _overview() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _movies() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _dvds() {
    return rottenTomatoesApi.request('/');
  }

  return {
    overview: _overview,
    movies: _movies,
    dvds: _dvds
  };
});
