angular.module('ngRottenTomatoes')
.service('rottenTomatoesMovies', function(rottenTomatoesApi) {
  /**
   * @return {HttpPromise}
   */
  function _search(q, params) {
    angular.extend(params, {q: q});
    return rottenTomatoesApi.request('/movies.json', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _boxOffice(params) {
    return rottenTomatoesApi.request('/', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _inTheaters(params) {
    return rottenTomatoesApi.request('/', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _opening(params) {
    return rottenTomatoesApi.request('/', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _upcoming(params) {
    return rottenTomatoesApi.request('/', params);
  }

  return {
    search: _search,
    boxOffice: _boxOffice,
    inTheaters: _inTheaters,
    opening: _opening,
    upcoming: _upcoming
  };
});
