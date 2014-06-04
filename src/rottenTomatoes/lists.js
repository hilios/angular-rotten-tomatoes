function RottenTomatoesLists(api) {
  /**
   * @return {HttpPromise}
   */
  function _overview() {
    return api.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _movies() {
    return api.request('/');
  }


  function _dvds() {
    return api.request('/');
  }

  return {
    overview: _overview,
    movies: _movies,
    dvds: _dvds
  };
}
