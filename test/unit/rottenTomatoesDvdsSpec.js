describe('rottenTomatoes.dvds', function() {
  var dvds;

  beforeEach(inject(
    function(rottenTomatoes) {
      dvds = rottenTomatoes.dvds;
    }
  ));

  describe('#topRentals(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('topRentals');
      expect(dvds.topRentals()).to.be.a.promise;
    });
  });

  describe('#currentReleases(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('currentReleases');
      expect(dvds.currentReleases()).to.be.a.promise;
    });
  });

  describe('#newReleases(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('newReleases');
      expect(dvds.newReleases()).to.be.a.promise;
    });
  });

  describe('#upcoming(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('upcoming');
      expect(dvds.upcoming()).to.be.a.promise;
    });
  });
});
