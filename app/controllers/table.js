app.controller('TableController', function($scope, $rootScope) {
  $scope.todoItems = [{
    todo : 'Go to hairdresser',
    done : false
  },
  {
    todo : 'Go to work',
    done : false
  },
  {
    todo : 'Go to bed',
    done : true
  }];

  $rootScope.$on('TODO_ADDED', function(event, data) {
    $scope.todoItems.push({
      todo : data,
      done : false
    });
  });
});