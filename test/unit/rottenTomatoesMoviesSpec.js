describe('rottenTomatoes.movies', function() {
  var movies, $api, PARAMS = {'country': 'foo'};

  beforeEach(inject(
    function(rottenTomatoes) {
      movies = rottenTomatoes.movies;
      $api = rottenTomatoes.$api;
      sinon.spy($api, 'request');
    }
  ));

  afterEach(function() {
    $api.request.restore();
  });

  describe('#search(query, params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('search');
      expect(movies.search()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      movies.search('query', PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#boxOffice(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('boxOffice');
      expect(movies.boxOffice()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      movies.boxOffice(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#inTheaters(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('inTheaters');
      expect(movies.inTheaters()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      movies.inTheaters(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#opening(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('opening');
      expect(movies.opening()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      movies.opening(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#upcoming(params)', function() {
    it('should exist and return a promise', function() {
      expect(movies).to.have.property('upcoming');
      expect(movies.upcoming()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      movies.upcoming(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });
});
