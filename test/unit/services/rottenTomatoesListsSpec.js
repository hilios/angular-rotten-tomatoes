describe('rottenTomatoesLists', function() {
  var rottenTomatoesLists;

  beforeEach(inject(
    function(_rottenTomatoesLists_) {
      rottenTomatoesLists = _rottenTomatoesLists_;
    }
  ));

  describe('.overview()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesLists).to.have.property('overview');
      expect(rottenTomatoesLists.overview()).to.be.a.promise;
    });
  });

  describe('.movies()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesLists).to.have.property('movies');
      expect(rottenTomatoesLists.movies()).to.be.a.promise;
    });
  });

  describe('.dvds()', function() {
    it('should exist and return a promise', function() {
      expect(rottenTomatoesLists).to.have.property('dvds');
      expect(rottenTomatoesLists.dvds()).to.be.a.promise;
    });
  });
});
