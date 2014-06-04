describe('RottenTomatoesDvdsList', function() {
  var rottenTomatoes, request, PARAMS = {'country': 'foo'};

  beforeEach(inject(function(_rottenTomatoes_) {
    rottenTomatoes = _rottenTomatoes_;
    request = sinon.spy(rottenTomatoes.$api, 'request');
  }));

  afterEach(function() {
    request.restore();
  });

  describe('#topRentals(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('topRentals');
      expect(rottenTomatoes.topRentals()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      rottenTomatoes.topRentals(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#currentReleases(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('currentReleases');
      expect(rottenTomatoes.currentReleases()).to.be.a.promise;
    });

    it('should execute a request', function() {
      rottenTomatoes.currentReleases(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#newReleases(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('newReleases');
      expect(rottenTomatoes.newReleases()).to.be.a.promise;
    });

    it('should execute a request', function() {
      rottenTomatoes.newReleases(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#upcomingDvds(params)', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoes).to.have.property('upcomingDvds');
      expect(rottenTomatoes.upcomingDvds()).to.be.a.promise;
    });

    it('should execute a request', function() {
      rottenTomatoes.upcomingDvds(PARAMS);
      expect(request).to.be.calledOnce;
      expect(request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });
});
