describe('RottenTomatoesMovieDetails', function() {
  var movie, $api, ID = '12345';

  beforeEach(inject(
    function(rottenTomatoes) {
      movie = rottenTomatoes.movie;
      $api = rottenTomatoes.$api;
      sinon.spy($api, 'request');
    }
  ));

  afterEach(function() {
    $api.request.restore();
  });

  describe('#info(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('info');
      expect(movie.info()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      movie.info(ID);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#reviews(id, params)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('reviews');
      expect(movie.reviews()).to.be.a.promise;
    });

    it('should execute a request with ID and params', function() {
      movie.reviews(ID, {});
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match(ID),
        sinon.match.object);
    });
  });

  describe('#cast(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('cast');
      expect(movie.cast()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      movie.cast(ID);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#similar(id, params)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('similar');
      expect(movie.similar()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      movie.similar(ID);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#clips(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('clips');
      expect(movie.clips()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      movie.clips(ID);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#alias(id)', function() {
    it('should exist and return a promise', function() {
      expect(movie).to.have.property('alias');
      expect(movie.alias()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      movie.alias(ID);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string,
        sinon.match({id: ID}));
    });
  });
});
