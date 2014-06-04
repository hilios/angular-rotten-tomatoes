describe('RottenTomatoesDvdsList', function() {
  var dvds, $api, PARAMS = {'country': 'foo'};

  beforeEach(inject(
    function(rottenTomatoes) {
      dvds = rottenTomatoes.dvds;
      $api = rottenTomatoes.$api;
      sinon.spy($api, 'request');
    }
  ));

  afterEach(function() {
    $api.request.restore();
  });

  describe('#topRentals(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('topRentals');
      expect(dvds.topRentals()).to.be.a.promise;
    });

    it('should execute a request with params', function() {
      dvds.topRentals(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#currentReleases(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('currentReleases');
      expect(dvds.currentReleases()).to.be.a.promise;
    });

    it('should execute a request', function() {
      dvds.currentReleases(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#newReleases(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('newReleases');
      expect(dvds.newReleases()).to.be.a.promise;
    });

    it('should execute a request', function() {
      dvds.newReleases(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });

  describe('#upcoming(params)', function() {
    it('should exist and return a promise', function() {
      expect(dvds).to.have.property('upcoming');
      expect(dvds.upcoming()).to.be.a.promise;
    });

    it('should execute a request', function() {
      dvds.upcoming(PARAMS);
      expect($api.request).to.be.calledOnce;
      expect($api.request).to.be.calledWith(sinon.match.string, PARAMS);
    });
  });
});
