describe('rottenTomatoesApiProvider', function() {
  var provider;

  beforeEach(function() {
    angular.module('testModule', function() {})
    .config(['rottenTomatoesApiProvider' ,
      function(rottenTomatoesApiProvider) {
        provider = rottenTomatoesApiProvider;
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

  it('should have endpoint property', function() {
    expect(provider).to.have.property('endpoint').that.is.a('string');
  });

  it('should have key property', function() {
    expect(provider).to.have.property('key');
  });

  it('should have config object', function() {
    expect(provider).to.have.property('config').that.is.an('object');
  });

  describe('.setKey(value)', function() {
    it('should be a function', function() {
      expect(provider).to.have.property('setKey').that.is.a('function');
    });

    it('should set the provider key property value', function() {
      provider.setKey('abc');
      expect(provider.key).to.be.equal('abc');
    });
  });

  describe('.setConfig(object)', function() {
    it('should be a function', function() {
      expect(provider).to.have.property('setConfig').that.is.a('function');
    });

    it('should extend the provider $http config property', function() {
      var config = provider.setConfig({foo: 'bar'});

      expect(config).to.be.an('object');
      expect(provider.config).to.be.equal(config);
      expect(provider.config).to.have.property('foo');
    });
  });

  describe('.$get()', function() {
    it('should be a function', function() {
      expect(provider).to.have.property('$get').that.is.a('array');
    });
  });
});
