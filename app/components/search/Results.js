var React = require('react');

var helpers = require("../utils/helpers");

var Results = React.createClass({

  getInitialState: function() {
    return {
      title: "",  // docs[0].headline.main
      published: "",   // pub_date
      url: ""     // web_url
    }
  },

   displayArticles: function() {
     return this.props.apiResults.arts.map( function(article, index) {
       return (
         <li key={index}>
              <p>{article.headline.main}</p>
              <a href={article.web_url} target="_blank">
                <button className="btn btn-default ">View Article</button>
              </a>
              <a href={void(0)}>
                {/* onClick will pass the current article as an argument to handleClick */}
                <button
                  id={"#" + index}
                  className="btn btn-default"
                  onClick={ function() { helpers.saveThisArticle({article}) }}>Save</button>
              </a>
              <p>Published on: {article.pub_date}</p>
            </li>
            );
     });
   },

     render: function() {


       if (!this.props.apiResults.arts) {
      return (
        <div>
              <h3>No Articles to be Displayed</h3>
        </div>
      );
    }

       return (
         <div className="panel-body">
           <ul className="list-group">
             {this.displayArticles()}
           </ul>
         </div>
       )
     }
   });

module.exports = Results;
