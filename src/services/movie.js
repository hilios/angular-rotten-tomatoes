angular.module('ngRottenTomatoes')
.service('rottenTomatoesMovie', function(rottenTomatoesApi) {
  /**
   * @return {HttpPromise}
   */
  function _info() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _reviews() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _cast() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _similar() {
    return rottenTomatoesApi.request('/');
  }

  /**
   * @return {HttpPromise}
   */
  function _clips() {
    return rottenTomatoesApi.request('/');
  }

  return {
    info: _info,
    reviews: _reviews,
    cast: _cast,
    similar: _similar,
    clips: _clips
  }
});
