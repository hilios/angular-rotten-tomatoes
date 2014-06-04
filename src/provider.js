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

  function RottenTomatoesFactory($http, $log) {
    // Warn if key is missing
    if (!angular.isString(provider.key)) {
      throw 'Missing Rotten Tomatoes API key.';
    }

    var api = this;

    /**
     * Performs a request to Rotten Tomatoes API. Wrapping the $http service to
     * format the correct params.
     * @param {String} URI - The uniform resource identifier.
     * @param {Object} [config] - Optional configuration object.
     * @return {HttpPromise}
     */
    api.request = function(uri, params) {
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
    };

    /**
     * Performs a request to Rotten Tomatoes API replacing any :id key in the
     * URI by the given value.
     * @param {*} id - The id to be replaced.
     * @param {String} URI - The uniform resource identifier.
     * @param {Object} [config] - Optional configuration object.
     * @return {HttpPromise}
     */
    api.requestId = function(id, uri, params) {
      return _request(uri.replace(/:id/, id.toString()), params);
    }

    /**
     * Returns the API config used has the $http params.
     * @return {Object}
     */
    api.config = function() {
      return provider.config;
    };

    return {
      $$api: api,
      dvds: RottenTomatoesDvds(api),
      movies: RottenTomatoesMovies(api),
      movie: RottenTomatoesMovies(api),
      lists: RottenTomatoesLists(api)
    };
  }

  // Setup the factory
  this.$get = ['$http', '$log', RottenTomatoesFactory];
};
