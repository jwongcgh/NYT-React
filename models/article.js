
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  // title of article from nytimes.com
  upsert: {
    type: Boolean
  },
  title: {
    type: String
  },
  // publish date of article
  published: {
    type: String
  },
  // url link article on nytimes.com)
  url: {
    type: String
  }
});

var Article = mongoose.model("Article", NewsSchema);
module.exports = Article;
