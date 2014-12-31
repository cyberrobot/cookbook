// Code goes here

(function() {
  var app = angular.module('cookBook');
  
  var mainController = function($scope, recipeData) {
    $scope.recipes = recipeData.getAllRecipes();
  };
  
  app.controller('mainController', mainController);
  
}());