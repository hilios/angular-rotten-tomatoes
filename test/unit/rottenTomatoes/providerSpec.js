describe('RottenTomatoesProvider', function() {
  var provider;

  beforeEach(function() {
    angular.module('testModule', function() {})
    .config(['rottenTomatoesProvider' ,
      function(rottenTomatoesProvider) {
        provider = rottenTomatoesProvider;
      }
    ]);
    // Initialize test module injector.
    module('testModule');
    // Kickstart the injectors previously registered.
    inject(function () {});
  });

  it('should have provider defined', function() {
    expect(provider).to.be.ok;
  });

  it('should have URL property', function() {
    expect(provider).to.have.property('url').that.is.a('string');
  });

  it('should have key property', function() {
    expect(provider).to.have.property('key');
  });

  it('should have config object', function() {
    expect(provider).to.have.property('config').that.is.an('object');
  });

  describe('#setKey(value)', function() {
    it('should be a function', function() {
      expect(provider).to.have.property('setKey').that.is.a('function');
    });

    it('should set the provider key property value', function() {
      provider.setKey('abc');
      expect(provider.key).to.be.equal('abc');
    });
  });

  describe('#setDefaults(object)', function() {
    it('should be a function', function() {
      expect(provider).to.have.property('setDefaults').that.is.a('function');
    });

    it('should extend the provider $http config property', function() {
      var config = provider.setDefaults({foo: 'bar'});

      expect(config).to.be.an('object');
      expect(provider.config).to.be.equal(config);
      expect(provider.config).to.have.property('foo');
    });
  });

  describe('$get', function() {
    it('should be a injection object', function() {
      expect(provider).to.have.property('$get').that.is.an('array');
      expect(provider.$get[provider.$get.length - 1]).that.is.a('function');
    });
  });
});

describe('RottenTomatoesFactory', function() {
  var rottenTomatoes, $http;

  beforeEach(inject(
    function(_rottenTomatoes_, _$http_) {
      rottenTomatoes = _rottenTomatoes_;
      $http = _$http_;
      // Stub $http.jsonp method.
      sinon.spy($http, 'jsonp');
    }
  ));

  afterEach(function() {
    // Restore $http.jsonp.
    $http.jsonp.restore();
  });

  it('should have $api property', function() {
    expect(rottenTomatoes).to.have.property('$api').that.is.an('object');
  });

  describe('$api', function() {
    var $api;

    beforeEach(function() {
      $api = rottenTomatoes.$api;
    });

    it('should have a config object', function() {
      expect($api).to.have.property('config').that.is.an('object');
      expect($api.config).to.have.property('params');
      expect($api.config.params).to.have.property('apikey');
      expect($api.config.params).to.have.property('callback');
    });

    describe('#request(uri, config)', function() {
      it('should have method', function() {
        expect($api).to.have.property('request').that.is.a('function');
      });

      it('should return a promise', function() {
        expect($api.request('/')).to.be.a.promise;
      });

      it('should have api key and callback appended to call params', function() {
        var config;
        // Call api.request().
        $api.request('/');
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
        $api.request('/', {pageLimit: 10});
        expect($http.jsonp).to.be.called;
        // Get argument from last call.
        params = $http.jsonp.lastCall.args[1].params;
        expect(params).to.have.property('page_limit');
      });
    });
  });
});
