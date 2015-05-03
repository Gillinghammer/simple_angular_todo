
// root module for angular app
var TodoApp = angular.module("TodoApp", []);
// first angular controller w scope
TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  $scope.todos    = [];
  $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete = function () {
    $scope.todos.splice(this.$index, 1);
  }

}]);