/**
 * Rotten Tomatoes service provider to access API data.
 * http://developer.rottentomatoes.com/io-docs
 */
angular.module('ngRottenTomatoes')
.provider('rottenTomatoesApi', function RottenTomatoesApiProvider() {
  var provider = this;

  provider.endpoint = 'http://api.rottentomatoes.com/api/public/v1.0/';
  provider.key = null;
  provider.config = {
    params: {
      apikey: null,
      callback: 'JSON_CALLBACK'
    }
  };

  /**
   * Set the API key.
   * @param {String} value - The Rotten Tomatoes API.
   */
  this.setKey = function(value) {
    provider.key = provider.config.params.apikey = value;
  };

  /**
   * Extends the API defaults object with custom values.
   * @param {Object} newDefault - Source object.
   * @return {Object} default - Destination object after extension.
   */
  this.setConfig = function(config) {
    provider.config = angular.extend(provider.config, config || {});
    return provider.config;
  };

  this.$get = ['$http', '$log', function($http, $log) {
    // Warn if key is missing
    if (!angular.isString(provider.key)) {
      throw 'Missing Rotten Tomatoes API key.';
    }

    /**
     * Wraps $http to format request to Rotten Tomatoes API.
     * @param {String} URI - The uniform resource identifier.
     * @param {Object} [config] - Optional configuration object.
     * @return {HttpPromise}
     */
    function _request(uri, params) {
      var _params = params || {},
        _url = provider.endpoint + uri.replace(/^\//, ''),
        _config = angular.extend({params: _params}, provider.config);

      $log.debug('Requesting ' + _url);

      return $http.jsonp(_url, _config).then(function(response) {
        $log.debug(response.status + ' ' + response.config.url);
        return response;
      }, function(error) {
        $log.error(error);
        return error;
      });
    }

    return {
      /**
       * Performe a request to Rotten Tomatoes API.
       * @param {String} URI - The uniform resource identifier.
       * @param {Object} [params] - Optional request params.
       * @return {HttpPromise}
       */
      request: _request,
      /**
       * API $http config.
       * @return {Object}
       */
      config: provider.config
    };
  }];
});
