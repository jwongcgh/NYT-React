var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// require database schema
var Article = require("./models/Article");

// Instance of express
var app = express();
var PORT = process.env.PORT || 3000;

// morgan for logging
app.use(logger("dev"));

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

// ==========

// mongodb configuration
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

// mongoose error logs
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// mongoose logged success message
db.once("open", function() {
  console.log("Mongoose connection sucessful");
});

// ==========

// routes
// //save an article
app.post('/api/save', function(req, res) {
  let newArticle = new Article(req.body);
  newArticle.save(function(error, doc) {
    if (error) {
      res.send(error);
    } else {
      res.send(doc);
    }
  });
});

// show all saved articles
app.get('/api/saved', function(req, res) {
  Article.find({}).exec(function(error, doc) {
      if (error) {
        console.log(error);
        res.end();
      } else {
        console.log(doc);
        res.send(doc);
      }
    });
});

// remove a saved article
app.delete('/api/delete/:id', function(req, res) {
  var query = {};
  query._id = req.params.id;

  Article.findOneAndRemove(query).exec( function(error, doc) {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.send(doc);
    }
  });
});
// ==========

app.listen(PORT, function(err) {
  if (err) {
      console.error(err);
    } else {
      console.log('listening on: ' + PORT);
    }
});
