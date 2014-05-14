describe('rottenTomatoesDvds', function() {
  var rottenTomatoesDvds;

  beforeEach(inject(
    function(_rottenTomatoesDvds_) {
      rottenTomatoesDvds = _rottenTomatoesDvds_;
    }
  ));

  describe('.topRentals()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesDvds).to.have.property('topRentals');
      expect(rottenTomatoesDvds.topRentals()).to.be.a.promise;
    });
  });

  describe('.currentReleases()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesDvds).to.have.property('currentReleases');
      expect(rottenTomatoesDvds.currentReleases()).to.be.a.promise;
    });
  });

  describe('.newReleases()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesDvds).to.have.property('newReleases');
      expect(rottenTomatoesDvds.newReleases()).to.be.a.promise;
    });
  });

  describe('.upcoming()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesDvds).to.have.property('upcoming');
      expect(rottenTomatoesDvds.upcoming()).to.be.a.promise;
    });
  });
});
