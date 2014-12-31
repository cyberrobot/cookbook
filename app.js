(function() {
  
  var app = angular.module('cookBook', ['ngRoute', 'ui.bootstrap']);
  
  app.config(function($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'listing.html',
        controller: 'mainController'
      })
      .when('/recipe/:id', {
        templateUrl: 'recipeDetails.html',
        controller: 'recipeController'
      })
      .otherwise('/main');
  });
  
})();