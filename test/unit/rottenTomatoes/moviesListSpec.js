describe('RottenTomatoesMoviesList', function() {
  var rottenTomatoes, request, PARAMS = {'country': 'foo'};

  beforeEach(inject(function(_rottenTomatoes_) {
    rottenTomatoes = _rottenTomatoes_;
    request = sinon.spy(rottenTomatoes.$api, 'request');
  }));

  afterEach(function() {
    request.restore();
  });

  describe('#search(query, params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('search');
      expect(rottenTomatoes.search()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      rottenTomatoes.search('query', PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#boxOffice(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('boxOffice');
      expect(rottenTomatoes.boxOffice()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      rottenTomatoes.boxOffice(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#inTheaters(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('inTheaters');
      expect(rottenTomatoes.inTheaters()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      rottenTomatoes.inTheaters(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#opening(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('opening');
      expect(rottenTomatoes.opening()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      rottenTomatoes.opening(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#upcoming(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('upcoming');
      expect(rottenTomatoes.upcoming()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      rottenTomatoes.upcoming(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });
});
