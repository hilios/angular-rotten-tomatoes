Angular Rotten Tomatoes [![Build Status](https://api.travis-ci.org/hilios/angular-rotten-tomatoes.svg)](https://travis-ci.org/hilios/angular-rotten-tomatoes)
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
  rottenTomatoes.topRentals();
  rottenTomatoes.currentReleases();
  rottenTomatoes.newReleases();
  rottenTomatoes.upcomingDvds();

  // Movies Directory
  rottenTomatoes.search(query);
  rottenTomatoes.boxOffice();
  rottenTomatoes.inTheaters();
  rottenTomatoes.opening();
  rottenTomatoes.upcomingMovies();

  // Movie information
  rottenTomatoes.movieInfo(id);
  rottenTomatoes.movieReviews(id);
  rottenTomatoes.movieCast(id);
  rottenTomatoes.movieSimilar(id);
  rottenTomatoes.movieClips(id);
}
```
