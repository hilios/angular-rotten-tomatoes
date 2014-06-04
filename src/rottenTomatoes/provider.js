/**
 * Rotten Tomatoes service provider to access API data.
 * http://developer.rottentomatoes.com/docs
 */
function RottenTomatoesProvider() {
  var provider = this;

  provider.key = null;
  provider.apiVersion = 'v1.0';
  provider.endpoint = 'http://api.rottentomatoes.com/api/public/:version/'
    .replace(/:version/, provider.apiVersion);
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
  provider.setKey = function(value) {
    provider.key = provider.config.params.apikey = value;
  };

  /**
   * Extends the API defaults params object with custom values.
   * @param {Object} defaults - Source object.
   * @return {Object}
   */
  provider.setDefaults = function(defaults) {
    provider.config = angular.extend(provider.config.params, defaults || {});
    return provider.config;
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

  /**
   * Rotten Tomatoes Service Factory.
   * @require {$http}
   * @require {$log}
   */
  function RottenTomatoesFactory($http, $log) {
    // Warn if key is missing
    if (!angular.isString(provider.key)) {
      throw 'Missing Rotten Tomatoes API key.';
    }

    var api = {};

    /**
     * Performs a request to Rotten Tomatoes API. Wrapping the $http service to
     * format the correct params.
     * @param {String} URN - The uniform resource name.
     * @param {Object} [config] - Optional configuration object.
     * @return {HttpPromise}
     */
    api.request = function(urn, params) {
      var _params = params || {},
        _uri = provider.endpoint + urn.replace(/^\//, ''),
        _config = angular.copy(provider.config);

      // Convert and merge params
      angular.extend(_config.params, _snakeCaseKeys(_params))

      $log.debug('Requesting ' + _uri);

      return $http.jsonp(_uri, _config).then(function(response) {
        $log.debug(response.status + ' ' + response.config.url);
        return response;
      }, function(error) {
        $log.error(error);
        return error;
      });
    };

    /**
     * Performs a request to Rotten Tomatoes API replacing any :id key in the
     * URI by the given value.
     * @param {*} id - The id to be replaced.
     * @param {String} URN - The uniform resource name.
     * @param {Object} [config] - Optional configuration object.
     * @return {HttpPromise}
     */
    api.requestId = function(id, urn, params) {
      return api.request(urn.replace(/:id/, id), params);
    }

    /**
     * Returns the API config object.
     * @return {Object}
     */
    api.config = provider.config;

    return {
      $api: api,
      dvds: RottenTomatoesDvds(api),
      movies: RottenTomatoesMovies(api),
      movie: RottenTomatoesMovie(api),
      lists: RottenTomatoesLists(api)
    };
  }

  // Setup the factory
  this.$get = ['$http', '$log', RottenTomatoesFactory];
}
