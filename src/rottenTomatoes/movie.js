function RottenTomatoesMovie(api) {
  /**
   * @return {HttpPromise}
   */
  function _info(id) {
    return api.requestId(id, '/movies/:id.json');
  }

  /**
   * @return {HttpPromise}
   */
  function _reviews(id, params) {
    return api.requestId(id, '/movies/:id/reviews.json');
  }

  /**
   * @return {HttpPromise}
   */
  function _cast(id) {
    return api.requestId(id, '/movies/:id/cast.json');
  }

  /**
   * @return {HttpPromise}
   */
  function _similar(id) {
    return api.requestId(id, '/movies/:id/similar.json');
  }

  /**
   * @return {HttpPromise}
   */
  function _clips(id) {
    return api.requestId(id, '/movies/:id/clips.json');
  }

  return {
    info: _info,
    reviews: _reviews,
    cast: _cast,
    similar: _similar,
    clips: _clips
  }
}
