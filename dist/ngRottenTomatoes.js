/**!
 * Rotten Tomatoes API AngularJS Service v0.0.1
 * http://hilios.github.io/angular-rotten-tomatoes/
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */
!function(angular) {
  function RottenTomatoesDvdsList($api) {
    function topRentals(params) {
      return $api.request("/lists/dvds/top_rentals.json", params, [ "limit", "country" ]);
    }
    function currentReleases(params) {
      return $api.request("/lists/dvds/current_releases.json", params, [ "pageLimit", "page", "country" ]);
    }
    function newReleases(params) {
      return $api.request("/lists/dvds/new_releases.json", params, [ "pageLimit", "page", "country" ]);
    }
    function upcomingDvds(params) {
      return $api.request("/lists/dvds/upcoming.json", params, [ "pageLimit", "page", "country" ]);
    }
    return {
      topRentals: topRentals,
      currentReleases: currentReleases,
      newReleases: newReleases,
      upcomingDvds: upcomingDvds
    };
  }
  function RottenTomatoesMovieDetails($api) {
    function movieInfo(id) {
      return $api.requestId(id, "/movies/:id.json");
    }
    function movieReviews(id, params) {
      return $api.requestId(id, "/movies/:id/reviews.json", params, [ "reviewType", "pageLimit", "page", "country" ]);
    }
    function movieCast(id) {
      return $api.requestId(id, "/movies/:id/cast.json");
    }
    function movieSimilar(id, params) {
      return $api.requestId(id, "/movies/:id/similar.json", params, [ "limit" ]);
    }
    function movieClips(id) {
      return $api.requestId(id, "/movies/:id/clips.json");
    }
    function movieAlias(id) {
      return $api.request("/movies/movie_alias.json", {
        id: id,
        alias: "imdb"
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
  function RottenTomatoesMoviesList($api) {
    function search(q, params) {
      return angular.extend(params || {}, {
        q: q
      }), $api.request("/movies.json", params, [ "pageLimit", "page", "country" ]);
    }
    function boxOffice(params) {
      return $api.request("/lists/movies/box_office.json", params, [ "limit", "country" ]);
    }
    function inTheaters(params) {
      return $api.request("/lists/movies/in_theaters.json", params, [ "pageLimit", "page", "country" ]);
    }
    function opening(params) {
      return $api.request("/lists/movies/opening.json", params, [ "limit", "country" ]);
    }
    function upcoming(params) {
      return $api.request("/lists/movies/upcoming.json", params, [ "pageLimit", "page", "country" ]);
    }
    return {
      search: search,
      boxOffice: boxOffice,
      inTheaters: inTheaters,
      opening: opening,
      upcoming: upcoming
    };
  }
  function RottenTomatoesProvider() {
    function _snakeCaseKeys(src) {
      var dest = {};
      for (var key in src) src.hasOwnProperty(key) && (key = key, dest[key.replace(/([A-Z]{1,})/g, "_$1").toLowerCase()] = src[key]);
      return dest;
    }
    function RottenTomatoesFactory($http, $log) {
      if (!angular.isString(provider.key)) throw "Missing Rotten Tomatoes API key.";
      var factoryDefinition = {}, $api = {};
      return $api.request = function(urn, params) {
        var _params = params || {}, _uri = provider.url + urn.replace(/^\//, ""), _config = angular.copy(provider.config);
        return angular.extend(_config.params, _snakeCaseKeys(_params)), $log.debug("Requesting " + _uri), 
        $http.jsonp(_uri, _config).then(function(response) {
          return $log.debug(response.status + " " + response.config.url), response;
        }, function(error) {
          return $log.error(error), error;
        });
      }, $api.requestId = function(id, urn, params) {
        return $api.request(urn.replace(/:id/, id), params);
      }, $api.config = provider.config, angular.extend(factoryDefinition, {
        $api: $api
      }), angular.extend(factoryDefinition, new RottenTomatoesMovieDetails($api)), angular.extend(factoryDefinition, new RottenTomatoesMoviesList($api)), 
      angular.extend(factoryDefinition, new RottenTomatoesDvdsList($api)), factoryDefinition;
    }
    var provider = this;
    provider.key = null, provider.apiVersion = "v1.0", provider.url = "http://api.rottentomatoes.com/api/public/:version/".replace(/:version/, provider.apiVersion), 
    provider.config = {
      params: {
        apikey: null,
        callback: "JSON_CALLBACK"
      }
    }, provider.setKey = function(value) {
      provider.key = provider.config.params.apikey = value;
    }, provider.setDefaults = function(defaults) {
      return provider.config = angular.extend(provider.config.params, defaults || {}), 
      provider.config;
    }, this.$get = [ "$http", "$log", RottenTomatoesFactory ];
  }
  angular.module("ngRottenTomatoes", []).provider("rottenTomatoes", RottenTomatoesProvider);
}(window.angular);