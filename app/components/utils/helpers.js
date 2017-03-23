// axios allows promised-based http requests / ajax calls
var axios = require('axios');

// nyt api
var apikey = "d6c8cdc35f93488dbaa04dd9173ea9fb";

// helper function
var helpers = {

  runQuery: function(topic, startYear, endYear) {
    // format for years end and start: YYYYMMDD
    var params = {
      "apikey": apikey,
      "q": topic.trim(),
      "begin_date": startYear.trim() + "0101",
      "end_date": endYear.trim() + "1231"
    }

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    let newArticle = {}
    return axios.get(queryURL, {params: params}).then(function(apiResponse){
      // console.log("solamente api-results: ", apiResponse);
      // console.log("solamente api-results: ", apiResponse.data.response);
      return apiResponse.data.response.docs;
      // console.log("nav api-results to title: ", response.data.response.docs[0].headline.main)
    });
  }, // end runQuery


  // Route to local api / to save new articles to our database, function called from Results.js handleclick(article)
  // saveThisArticle: function(title, date, url) {
  saveThisArticle: function(thisArticle) {
    console.log("article is: ", thisArticle.article.headline.main);
    var body = {
      upsert: true,
      title: thisArticle.article.headline.main,
      published: thisArticle.article.pub_date,
      url: thisArticle.article.web_url
    };

      return axios.post("/api/save", body)
        .then(function(response) {
          console.log("post response from helpers: ", response)
          console.log("response data id: ", response.data._id)
          return response.data._id;
        });
  },

  // retrieve saved articles from database
      retrieveSaved: function() {
        return axios.get("/api/saved")
        .then(function(response) {
              return response;
      });
    },

    // remove selected saved articles from database
    removeThisArticle: function(thisArticle) {
      console.log("axios article_id: ", thisArticle.article._id);
      return axios.delete("/api/delete/" + thisArticle.article._id)
      .then(function(response) {
        console.log("axios delete response: ", response)
        return response;
      });
    }

} // end helper

module.exports = helpers;
