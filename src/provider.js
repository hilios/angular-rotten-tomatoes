/**
 * Rotten Tomatoes service provider to access API data.
 * http://developer.rottentomatoes.com/docs
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
   * Extends the API defaults params object with custom values.
   * @param {Object} defaults - Source object.
   * @return {Object}
   */
  this.setDefauls = function(defaults) {
    provider.config = angular.extend(provider.config.params, defaults || {});
  };

  /**
   * Convert the keys of an object from camelCase to snake_case.
   * @param {Object} src - the source object.
   * @return {Object}
   */
  function _snakeCaseKeys(src) {
    var dest = {};
    for (key in src) {
      if (src.hasOwnProperty(key)) {
        key = key
        dest[key.replace(/([A-Z]{1,})/g, '_$1').toLowerCase()] = src[key];
      }
    }
    return dest;
  }

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
        _config = angular.copy(provider.config);

      // Convert and merge params
      angular.extend(_config.params, _snakeCaseKeys(_params))

      $log.debug('Requesting ' + _url);

      return $http.jsonp(_url, _config).then(function(response) {
        $log.debug(response.status + ' ' + response.config.url);
        return response;
      }, function(error) {
        $log.error(error);
        return error;
      });
    }

    function _requestId(id, uri, params) {
      return _request(uri.replace(/:id/, id), params);
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
