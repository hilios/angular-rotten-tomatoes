angular.module('ngRottenTomatoes')
.service('rottenTomatoesMovies', function(rottenTomatoesApi) {
  /**
   * @return {HttpPromise}
   */
  function _search() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _boxOffice() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _inTheaters() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _opening() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _upcoming() {
    return rottenTomatoesApi.request('/');
  }

  return {
    search: _search,
    boxOffice: _boxOffice,
    inTheaters: _inTheaters,
    opening: _opening,
    upcoming: _upcoming
  };
});
