describe('rottenTomatoesMovies', function() {
  var rottenTomatoesMovies;

  beforeEach(inject(
    function(_rottenTomatoesMovies_) {
      rottenTomatoesMovies = _rottenTomatoesMovies_;
    }
  ));

  describe('.search()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovies).to.have.property('search');
      expect(rottenTomatoesMovies.search()).to.be.a.promise;
    });
  });

  describe('.boxOffice()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovies).to.have.property('boxOffice');
      expect(rottenTomatoesMovies.boxOffice()).to.be.a.promise;
    });
  });

  describe('.inTheaters()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovies).to.have.property('inTheaters');
      expect(rottenTomatoesMovies.inTheaters()).to.be.a.promise;
    });
  });

  describe('.opening()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovies).to.have.property('opening');
      expect(rottenTomatoesMovies.opening()).to.be.a.promise;
    });
  });

  describe('.upcoming()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesMovies).to.have.property('upcoming');
      expect(rottenTomatoesMovies.upcoming()).to.be.a.promise;
    });
  });
});
