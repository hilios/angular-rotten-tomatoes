Angular Rotten Tomatoes
=======================

Wraps the Rotten Tomatoes API into AngularJS services.

```js
angular.module('app', ['ngRottenTomatoes'])
.config(function(rottenTomatoesApiProvider) {
  rottenTomatoesApiProvider.setKey('YOUR_TOKEN');
});
```
