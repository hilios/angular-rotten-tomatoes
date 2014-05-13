describe('rottenTomatoesApi', function() {
  var rottenTomatoesApi, $http;

  beforeEach(inject(
    function(_rottenTomatoesApi_, _$http_) {
      rottenTomatoesApi = _rottenTomatoesApi_;
      $http = _$http_;
    }
  ));

  it.skip('should have a config object', function() {
    expect(rottenTomatoesApi).to.have.property('config').that.is.an('object');
    expect(rottenTomatoesApi.config.params).to.have.property('limit');
    expect(rottenTomatoesApi.config.params).to.have.property('country');
  });

  describe('.request(uri, config)', function() {
    it('should have method', function() {
      expect(rottenTomatoesApi).to.have.property('request').that.is.a('function');
    });

    it('should return a promise', function() {
      expect(rottenTomatoesApi.request('/')).to.have.property('then')
        .that.is.a('function');
    });

    it('should have api key and callback appended to call params', function() {
      var config;
      // Stub $http.jsonp method.
      sinon.spy($http, 'jsonp');
      // Call api.request().
      rottenTomatoesApi.request('/');
      // Test if stub was called.
      expect($http.jsonp).to.be.called;
      // Reuest argument from last call.
      config = $http.jsonp.getCall(0).args[1];
      // Check if config was sent properly.
      expect(config).to.be.ok;
      expect(config).to.be.an('object');
      expect(config).to.have.property('params');
      expect(config.params).to.have.property('apikey');
      expect(config.params).to.have.property('callback')
        .that.is.equal('JSON_CALLBACK');
      // Restore $http.jsonp.
      $http.jsonp.restore();
    });
  });
});
