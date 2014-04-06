var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports.init = function() {
  mongoose.connect('mongodb://localhost/todo');

  var TodoItem = new Schema({
    todo: String,
    done : Boolean
  });

  mongoose.model('TodoItem', TodoItem);
};