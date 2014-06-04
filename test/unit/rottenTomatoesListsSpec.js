describe('rottenTomatoes.lists', function() {
  var lists;

  beforeEach(inject(
    function(rottenTomatoes) {
      lists = rottenTomatoes.lists;
    }
  ));

  describe('.overview()', function() {
    it('should exist and return a promise', function() {
      expect(lists).to.have.property('overview');
      expect(lists.overview()).to.be.a.promise;
    });
  });

  describe('.movies()', function() {
    it('should exist and return a promise', function() {
      expect(lists).to.have.property('movies');
      expect(lists.movies()).to.be.a.promise;
    });
  });

  describe('.dvds()', function() {
    it('should exist and return a promise', function() {
      expect(lists).to.have.property('dvds');
      expect(lists.dvds()).to.be.a.promise;
    });
  });
});
