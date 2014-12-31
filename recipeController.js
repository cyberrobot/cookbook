(function() {
  
  var app = angular.module('cookBook');
  
  var recipeController = function($scope, recipeData, $routeParams) {
    $scope.recipe = recipeData.getSingleRecipe($routeParams.id);
    $scope.ingredients = $scope.recipe.ingredients;
    $scope.method = $scope.recipe.method;
    $scope.preparationTime = $scope.recipe.preparationTime;
    $scope.cookingTime = $scope.recipe.cookingTime;
    $scope.serves = $scope.recipe.serves;
  };
  
  app.controller('recipeController', recipeController);
  
})();