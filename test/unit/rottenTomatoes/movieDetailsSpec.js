describe('RottenTomatoesMovieDetails', function() {
  var rottenTomatoes, request, ID = '12345';

  beforeEach(inject(function(_rottenTomatoes_) {
    rottenTomatoes = _rottenTomatoes_;
    request = sinon.spy(rottenTomatoes.$api, 'request');
  }));

  afterEach(function() {
    request.restore();
  });

  describe('#movieInfo(id)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('movieInfo');
      expect(rottenTomatoes.movieInfo()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      rottenTomatoes.movieInfo(ID);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#movieReviews(id, params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('movieReviews');
      expect(rottenTomatoes.movieReviews()).to.be.a.promise;
    });

    it('should execute a request with ID and params', function() {
      rottenTomatoes.movieReviews(ID, {});
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match(ID),
        sinon.match.object);
    });
  });

  describe('#movieCast(id)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('movieCast');
      expect(rottenTomatoes.movieCast()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      rottenTomatoes.movieCast(ID);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#movieSimilar(id, params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('movieSimilar');
      expect(rottenTomatoes.movieSimilar()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      rottenTomatoes.movieSimilar(ID);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#movieClips(id)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('movieClips');
      expect(rottenTomatoes.movieClips()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      rottenTomatoes.movieClips(ID);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match(ID));
    });
  });

  describe('#movieAlias(id)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('movieAlias');
      expect(rottenTomatoes.movieAlias()).to.be.a.promise;
    });

    it('should execute a request with ID', function() {
      rottenTomatoes.movieAlias(ID);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string,
        sinon.match({id: ID}));
    });
  });
});
