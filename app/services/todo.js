app.service('TodoService', function($http) {
  console.log('TodoService')
  $http.post('/todo', { todo : 'Something', done : false})
  .success(function(data) {
    console.log(data);
  })
  .error(function(err) {
    console.log(err);
  });

  return {};
});