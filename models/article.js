
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  // title of article from nytimes.com
  title: {
    type: String,
    unique: true,
    required: true
  },
  // publish date of article
  published: {
    type: String,
    required: true,
    unique: true
  },
  // url link article on nytimes.com)
  url: {
    type: String,
    required: true,
    unique: true
  }
});

var Article = mongoose.model("Article", NewsSchema);
module.exports = Article;
