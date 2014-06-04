/**
 * Rotten Tomatoes Movies Search and Movies List Diretctory.
 * http://developer.rottentomatoes.com/docs/read/json/v10/Movies_Search
 * http://developer.rottentomatoes.com/docs/read/json/v10/Movie_Lists_Directory
 * @requires rottenTomatoes.$api
 * @return {Object}
 *
 * @description
 * Exposes all Movies search and list methods available on Rotten Tomatoes:
 *  - Search
 *  - Box Office
 *  - In Theaters
 *  - Opening
 *  - Upcoming
 */
function RottenTomatoesMoviesList(api) {
  /**
   * Search movies with plain text queries.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Movies_Search
   * @param {String} q The plain text search query to search for a movie.
   * @param {Object} [params] The accepted parameters.
   * @param {Integer} [params.pageLimit] The amount of data to show per page.
   * @param {Integer} [params.page] The selected page.
   * @return {HttpPromise}
   */
  function search(q, params) {
    angular.extend(params || {}, {q: q});
    return api.request('/movies.json', params,
      ['pageLimit', 'page', 'country']);
  }

  /**
   * Retries top box office earning movies, sorted by most recent weekend gross
   * ticket sales.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Box_Office_Movies
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [param.limit] Limits the number of returned data.
   * @param {String} [param.country] The country to get data.
   * @return {HttpPromise}
   */
  function boxOffice(params) {
    return api.request('/lists/movies/box_office.json', params,
      ['limit', 'country']);
  }

  /**
   * Retrieves movies currently in theaters.
   * http://developer.rottentomatoes.com/docs/read/json/v10/In_Theaters_Movies
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [params.pageLimit] The amount of data to show per page.
   * @param {Integer} [params.page] The selected page.
   * @param {String} [params.country] The country to get data.
   * @return {HttpPromise}
   */
  function inTheaters(params) {
    return api.request('/lists/movies/in_theaters.json', params,
      ['pageLimit', 'page', 'country']);
  }

  /**
   * Retrieves current opening movies.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Opening_Movies
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [param.limit] Limits the number of returned data.
   * @param {String} [param.country] The country to get data.
   * @return {HttpPromise}
   */
  function opening(params) {
    return api.request('/lists/movies/opening.json', params,
      ['limit', 'country']);
  }

  /**
   * Retrieves upcoming movies.
   * http://developer.rottentomatoes.com/docs/read/json/v10/Upcoming_Movies
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [params.pageLimit] The amount of data to show per page.
   * @param {Integer} [params.page] The selected page.
   * @param {String} [params.country] The country to get data.
   * @return {HttpPromise}
   */
  function upcoming(params) {
    return api.request('/lists/movies/upcoming.json', params,
      ['pageLimit', 'page', 'country']);
  }

  return {
    search: search,
    boxOffice: boxOffice,
    inTheaters: inTheaters,
    opening: opening,
    upcoming: upcoming
  };
}
