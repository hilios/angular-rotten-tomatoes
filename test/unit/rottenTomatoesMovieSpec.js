describe('rottenTomatoes.movie', function() {
  var movie;

  beforeEach(inject(
    function(rottenTomatoes) {
      movie = rottenTomatoes.movie;
    }
  ));

  describe('#info(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('info');
      expect(movie.info()).to.be.a.promise;
    });
  });

  describe('#reviews(id, params)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('info');
      expect(movie.info()).to.be.a.promise;
    });
  });

  describe('#cast(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('info');
      expect(movie.info()).to.be.a.promise;
    });
  });

  describe('#similar(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('info');
      expect(movie.info()).to.be.a.promise;
    });
  });

  describe('#clips(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('info');
      expect(movie.info()).to.be.a.promise;
    });
  });

});
