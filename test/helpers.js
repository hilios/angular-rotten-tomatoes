// Configure an fake ApiKey
angular.module('ngRottenTomatoesTestSuite', [
  'ngRottenTomatoes', 'ngRottenTomatoesMocks'
])
.config(function (rottenTomatoesApiProvider) {
  rottenTomatoesApiProvider.setKey('abcdefghijklmnopqrstuvwxyz0123456789');
});

beforeEach(module('ngRottenTomatoesTestSuite'));
