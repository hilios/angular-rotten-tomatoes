function RottenTomatoesMovies(api) {
  /**
   * @return {HttpPromise}
   */
  function _search(q, params) {
    angular.extend(params || {}, {q: q});
    return api.request('/movies.json', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _boxOffice(params) {
    return api.request('/', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _inTheaters(params) {
    return api.request('/', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _opening(params) {
    return api.request('/', params);
  }

  /**
   * @return {HttpPromise}
   */
  function _upcoming(params) {
    return api.request('/', params);
  }

  return {
    search: _search,
    boxOffice: _boxOffice,
    inTheaters: _inTheaters,
    opening: _opening,
    upcoming: _upcoming
  };
}
