/**
 * Rotten Tomatoes Movie Details.
 * @param $api Rotten Tomatoes API wrapper
 * @return {Object}
 *
 * @description
 * Expose all method to fetch movie details available in Rotten Tomatoes:
 *  - movieInfo
 *  - movieReviews
 *  - movieCast
 *  - movieSimilar
 *  - movieClips
 *  - movieAlias
 */
function RottenTomatoesMovieDetails($api) {
  /**
   * Retrieves detailed information on a specific movie specified by ID.
   * http://developer.rottentomatoes.com/docs/json/v10/Movie_Info
   * @param {Number|String} id The movie ID.
   * @return {HttpPromise}
   */
  function movieInfo(id) {
    return $api.requestId(id, '/movies/:id.json');
  }

  /**
   * Retrieves the reviews for a movie specified by ID.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Movie_Reviews
   * @param {Number|String} id The movie ID.
   * @param {Object} [params] The accepted parameters.
   * @param {Number} [params.reviewType] The review type, 3 different types are
   * possible: 'all', 'top_critic' and 'dvd'.
   * @param {Number} [params.pageLimit] The amount of data to show per page.
   * @param {Number} [params.page] The selected page.
   * @param {Number} [params.country] The country to get data.
   * @return {HttpPromise}
   */
  function movieReviews(id, params) {
    return $api.requestId(id, '/movies/:id/reviews.json', params,
      ['reviewType', 'pageLimit', 'page', 'country']);
  }

  /**
   * Retrieves the complete movie cast for a movie specified by ID.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Movie_Cast
   * @param {Number|String} id The movie ID.
   * @return {HttpPromise}
   */
  function movieCast(id) {
    return $api.requestId(id, '/movies/:id/cast.json');
  }

  /**
   * Retrieve similar movies for a movie specified by ID.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Movie_Similar
   * @param {Number|String} id The movie ID.
   * @param {Object} [params] The accepted parameters.
   * @param {Number} [params.limit] Limits the number of returned data.
   * @return {HttpPromise}
   */
  function movieSimilar(id, params) {
    return $api.requestId(id, '/movies/:id/similar.json', params,
      ['limit']);
  }

  /**
   * Retrieve clips for a movie specified by ID.
   * @param {Number|String} id The movie ID.
   * @return {HttpPromise}
   */
  function movieClips(id) {
    return $api.requestId(id, '/movies/:id/clips.json');
  }

  /**
   * Retrieves a movie lookup by an id from a different vendor.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Movie_Alias
   * @param {Number|String} id The id you want to look up.
   * @return {HttpPromise}
   */
  function movieAlias(id) {
    return $api.request('/movies/movie_alias.json', {
      id: id,
      alias: 'imdb'
    });
  }

  return {
    movieInfo: movieInfo,
    movieReviews: movieReviews,
    movieCast: movieCast,
    movieSimilar: movieSimilar,
    movieClips: movieClips,
    movieAlias: movieAlias
  };
}
