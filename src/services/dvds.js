/**
 * Rotten Tomatoes Service to retrieve DVDs lists.
 * http://developer.rottentomatoes.com/docs/json/v10/DVD_Lists_Directory
 * @requires rottenTomatoesApi
 * @return {Object}
 *
 * @description
 * Exposes all DVD list methods available on Rotten Tomatoes directory:
 *  - Top Rentals
 *  - Current Relesases
 *  - New Releases
 *  - Upcoming
 */
angular.module('ngRottenTomatoes')
.service('rottenTomatoesDvds', function(rottenTomatoesApi) {
  /**
   * Retrieves the current top dvd rentals.
   * http://developer.rottentomatoes.com/docs/json/v10/Top_Rentals
   * @param {Object} params The accepted parameters.
   * @config {Integer} [limit] Limits the number returned data.
   * @config {String} [country] The country to get data.
   * @return {HttpPromise}
   */
  function _topRentals(params) {
    return rottenTomatoesApi.request('/');
  }

  /**
   * Retrieves current release dvds.
   * http://developer.rottentomatoes.com/docs/json/v10/Current_Release_DVDs
   * @param {Object} params The accepted parameters.
   * @config {Integer} [pageLimit] The amount of data to show per page.
   * @config {Integer} [page] The selected page.
   * @config {String} [country] The country to get data.
   * @return {HttpPromise}
   */
  function _currentReleases(params) {
    return rottenTomatoesApi.request('/');
  }

  /**
   * Retrieves new release dvds.
   * http://developer.rottentomatoes.com/docs/json/v10/New_Release_DVDs
   * @param {Object} params The accepted parameters.
   * @config {Integer} [pageLimit] The amount of data to show per page.
   * @config {Integer} [page] The selected page.
   * @config {String} [country] The country to get data.
   * @return {HttpPromise}
   */
  function _newReleases(params) {
    return rottenTomatoesApi.request('/');
  }

  /**
   * Retrieves new release dvds.
   * http://developer.rottentomatoes.com/docs/json/v10/Upcoming_DVDs
   * @param {Object} params The accepted parameters.
   * @config {Integer} [pageLimit] The amount of data to show per page.
   * @config {Integer} [page] The selected page.
   * @config {String} [country] The country to get data.
   * @return {HttpPromise}
   */
  function _upcoming(params) {
    return rottenTomatoesApi.request('/');
  }

  return {
    topRentals: _topRentals,
    currentReleases: _currentReleases,
    newReleases: _newReleases,
    upcoming: _upcoming
  };
});
