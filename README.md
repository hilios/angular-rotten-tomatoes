Angular Rotten Tomatoes
=======================

Wraps the Rotten Tomatoes API into a AngularJS service.

```js
angular.module('app', ['ngRottenTomatoes'])
.config(function(rottenTomatoesProvider) {
  rottenTomatoesProvider.setKey('YOUR_TOKEN');
});
```

Inject the service to perform request to the api and get the returning promise.

```js
function AppCtrl(rottenTomatoes) {
  rottenTomatoes.movie.info(ID).success(function(data) {
    $scope.movie = data;
  });
}
```

### Available methods:

```js
function AppCtrl(rottenTomatoes) {
  // DVDs Directory
  rottenTomatoes.dvds.topRentals();
  rottenTomatoes.dvds.currentReleases();
  rottenTomatoes.dvds.newReleases();
  rottenTomatoes.dvds.upcoming();

  // Movies Directory
  rottenTomatoes.movies.search(query);
  rottenTomatoes.movies.boxOffice();
  rottenTomatoes.movies.inTheaters();
  rottenTomatoes.movies.opening();
  rottenTomatoes.movies.upcoming();

  // Movie information
  rottenTomatoes.movie.info(id);
  rottenTomatoes.movie.reviews(id);
  rottenTomatoes.movie.cast(id);
  rottenTomatoes.movie.similar(id);
  rottenTomatoes.movie.clips(id);

  // Lists Directory
  rottenTomatoes.lists.overview();
  rottenTomatoes.lists.movies();
  rottenTomatoes.lists.dvds();
}
```
