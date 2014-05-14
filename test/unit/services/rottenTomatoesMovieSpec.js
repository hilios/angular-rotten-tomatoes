describe('rottenTomatoesMovie', function() {
  var rottenTomatoesMovie;

  beforeEach(inject(
    function(_rottenTomatoesMovie_) {
      rottenTomatoesMovie = _rottenTomatoesMovie_;
    }
  ));

  describe('.info()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovie).to.have.property('info');
      expect(rottenTomatoesMovie.info()).to.be.a.promise;
    });
  });

  describe('.reviews()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovie).to.have.property('info');
      expect(rottenTomatoesMovie.info()).to.be.a.promise;
    });
  });

  describe('.cast()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovie).to.have.property('info');
      expect(rottenTomatoesMovie.info()).to.be.a.promise;
    });
  });

  describe('.similar()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovie).to.have.property('info');
      expect(rottenTomatoesMovie.info()).to.be.a.promise;
    });
  });

  describe('.clips()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovie).to.have.property('info');
      expect(rottenTomatoesMovie.info()).to.be.a.promise;
    });
  });

});
