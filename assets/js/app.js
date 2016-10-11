'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap']);


todoApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/todos', {
                templateUrl: '/templates/todos/index.html',
                controller: 'viewTodos'
            })
            .when('/todos/add', {
                templateUrl: '/templates/todos/add_todo.html',
                controller: 'addTodo'
            })

        $locationProvider.html5Mode(true);

  }

]);

todoApp.controller('viewTodos', ['$scope', '$rootScope', 'TodoService', function ($scope, $rootScope, TodoService) {

    $scope.formData = {};
    $scope.todos = [];

    TodoService.getTodos().then(function (response) {
        console.log(response);
        $scope.todos = response;
    });

}]);

todoApp.controller('addTodo', ['$scope', '$rootScope', '$location', '$filter', function ($scope, $rootScope, $location, $filter) {


}]);