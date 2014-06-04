/**
 * Rotten Tomatoes DVDs Lists Directory.
 * http://developer.rottentomatoes.com/docs/json/v10/DVD_Lists_Directory
 * @requires rottenTomatoes.$api
 * @return {Object}
 *
 * @description
 * Exposes all DVDs list methods available on Rotten Tomatoes directory:
 *  - Top Rentals
 *  - Current Relesases
 *  - New Releases
 *  - Upcoming
 */
function RottenTomatoesDvdsList($api) {
  /**
   * Retrieves the current top dvd rentals.
   * http://developer.rottentomatoes.com/docs/json/v10/Top_Rentals
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [param.limit] Limits the number of returned data.
   * @param {String} [param.country] The country to get data.
   * @return {HttpPromise}
   */
  function topRentals(params) {
    return $api.request('/lists/dvds/top_rentals.json', params,
      ['limit', 'country']);
  }

  /**
   * Retrieves current release dvds.
   * http://developer.rottentomatoes.com/docs/json/v10/Current_Release_DVDs
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [params.pageLimit] The amount of data to show per page.
   * @param {Integer} [params.page] The selected page.
   * @param {String} [params.country] The country to get data.
   * @return {HttpPromise}
   */
  function currentReleases(params) {
    return $api.request('/lists/dvds/current_releases.json', params,
      ['pageLimit', 'page', 'country']);
  }

  /**
   * Retrieves new release dvds.
   * http://developer.rottentomatoes.com/docs/json/v10/New_Release_DVDs
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [params.pageLimit] The amount of data to show per page.
   * @param {Integer} [params.page] The selected page.
   * @param {String} [params.country] The country to get data.
   * @return {HttpPromise}
   */
  function newReleases(params) {
    return $api.request('/lists/dvds/new_releases.json', params,
      ['pageLimit', 'page', 'country']);
  }

  /**
   * Retrieves new release dvds.
   * http://developer.rottentomatoes.com/docs/json/v10/Upcoming_DVDs
   * @param {Object} [params] The accepted request parameters.
   * @param {Integer} [params.pageLimit] The amount of data to show per page.
   * @param {Integer} [params.page] The selected page.
   * @param {String} [params.country] The country to get data.
   * @return {HttpPromise}
   */
  function upcoming(params) {
    return $api.request('/lists/dvds/upcoming.json', params,
      ['pageLimit', 'page', 'country']);
  }

  return {
    topRentals: topRentals,
    currentReleases: currentReleases,
    newReleases: newReleases,
    upcoming: upcoming
  };
}
