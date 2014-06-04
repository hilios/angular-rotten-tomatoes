describe('rottenTomatoes.movies', function() {
  var movies;

  beforeEach(inject(
    function(rottenTomatoes) {
      movies = rottenTomatoes.movies;
    }
  ));

  describe('#search(query, params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('search');
      expect(movies.search()).to.be.a.promise;
    });
  });

  describe('#boxOffice(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('boxOffice');
      expect(movies.boxOffice()).to.be.a.promise;
    });
  });

  describe('#inTheaters(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('inTheaters');
      expect(movies.inTheaters()).to.be.a.promise;
    });
  });

  describe('#opening(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('opening');
      expect(movies.opening()).to.be.a.promise;
    });
  });

  describe('#upcoming(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('upcoming');
      expect(movies.upcoming()).to.be.a.promise;
    });
  });
});
