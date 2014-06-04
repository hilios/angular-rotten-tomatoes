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
