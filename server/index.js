var express = require('express');
var app = express();
var models = require('./model');
var mongoose = require('mongoose');
var path = require('path');

models.init();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../app')));

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.post('/todo', function(req, res) {
  var TodoItem = mongoose.model('TodoItem');

  var todoItem = new TodoItem(req.body);

  todoItem.save(function(err, todoItem) {
    if(err || !todoItem) return res.send(500);

    res.json(todoItem);
  });
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});