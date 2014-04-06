app.controller('HeaderController', function($scope, $rootScope, TodoService) {
  console.log('hola')

  $scope.submitTodo = function() {
    $rootScope.$broadcast('TODO_ADDED', $scope.todoModel);
  };
});