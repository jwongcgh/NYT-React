// Include React as a dependency
var React = require("react");

// Include helper
var helpers = require("./utils/helpers");

// Create the Main component
var Saved = React.createClass({

  getInitialState: function() {
    return { savedArticles: {} };
  },

  componentDidMount: function() {
		helpers.retrieveSaved().then(function(response) {
      this.setState({savedArticles: {arts: response.data}});
    }.bind(this));
	},

  handleClick: function(article) {
      helpers.removeThisArticle({article}).then(function(){
        helpers.retrieveSaved().then(function(response) {
            this.setState({savedArticles: {arts: response.data}});
          }.bind(this));
      }.bind(this));
    },

  displayArticles: function() {
    return this.state.savedArticles.arts.map( function(article, index) {
      return (
        <li key={index}>
             <p>{article.title}</p>
             <a href={article.url} target="_blank">
               <button className="btn btn-default ">View Article</button>
             </a>
             <a href="#">
               {/* onClick will pass the current article as an argument to handleClick */}
               <button
                 className="btn btn-default"
                 // arrow notation does not bind this
                 onClick={ (e) => {
                   e.preventDefault();
                   this.handleClick(article)}}>Delete</button>
             </a>
             <p>Published on: {article.published}</p>
             <p>article _id: {article._id}</p>
           </li>
           );
    }.bind(this));
  },

  render: function() {

    if (!this.state.savedArticles.arts) {
    return (
     <li>
           <p>Fill information and submit to retrieve articles</p>
     </li>
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

module.exports = Saved;
