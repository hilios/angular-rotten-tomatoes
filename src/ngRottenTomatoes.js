(function(angular) {
  //= include_tree rottenTomatoes/
  angular.module('ngRottenTomatoes', [])
  .provider('rottenTomatoes', RottenTomatoesProvider);
})(window.angular);
