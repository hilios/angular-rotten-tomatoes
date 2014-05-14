describe('rottenTomatoesApi', function() {
  var rottenTomatoesApi, $http;

  beforeEach(inject(
    function(_rottenTomatoesApi_, _$http_) {
      rottenTomatoesApi = _rottenTomatoesApi_;
      $http = _$http_;
      // Stub $http.jsonp method.
      sinon.spy($http, 'jsonp');
    }
  ));

  afterEach(function() {
    // Restore $http.jsonp.
    $http.jsonp.restore();
  });

  it('should have a config object', function() {
    expect(rottenTomatoesApi).to.have.property('config').that.is.an('object');
    expect(rottenTomatoesApi.config).to.have.property('params');
    expect(rottenTomatoesApi.config.params).to.have.property('apikey');
    expect(rottenTomatoesApi.config.params).to.have.property('callback');
  });

  describe('.request(uri, config)', function() {
    it('should have method', function() {
      expect(rottenTomatoesApi).to.have.property('request').that.is.a('function');
    });

    it('should return a promise', function() {
      expect(rottenTomatoesApi.request('/')).to.be.a.promise;
    });

    it('should have api key and callback appended to call params', function() {
      var config;
      // Call api.request().
      rottenTomatoesApi.request('/');
      // Test if stub was called.
      expect($http.jsonp).to.be.called;
      // Get argument from last call.
      config = $http.jsonp.lastCall.args[1];
      // Check if config was sent properly.
      expect(config).to.be.ok;
      expect(config).to.be.an('object');
      expect(config).to.have.property('params');
      expect(config.params).to.have.property('apikey');
      expect(config.params).to.have.property('callback').that.is
        .equal('JSON_CALLBACK');
    });

    it('should convert convert camel case params to snake case', function() {
      rottenTomatoesApi.request('/', {pageLimit: 10});
      expect($http.jsonp).to.be.called;
      // Get argument from last call.
      params = $http.jsonp.lastCall.args[1].params;
      expect(params).to.have.property('page_limit');
    });
  });
});
