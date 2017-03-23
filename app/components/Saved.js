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
      console.log("will mount: ", response.data)
      this.setState({savedArticles: {arts: response.data}});
    }.bind(this));
	},

  displayArticles: function() {
    console.log("display: ", this.state.savedArticles)
    return this.state.savedArticles.arts.map( function(article, index) {
      console.log(index, article.title)
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
                 onClick={ function(e) {
                   e.preventDefault();
                   helpers.removeThisArticle({article})} }>Delete</button>
             </a>
             <p>Published on: {article.published}</p>
             <p>article _id: {article._id}</p>
           </li>
           );
    });
  },

  // render method
  render: function() {

    if (!this.state.savedArticles.arts) {
    return (
     <li>
           <p>Enter search terms to begin...</p>
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

    // return <h2>this is saved.js file</h2>
  }
});

// Export the module back to the route
module.exports = Saved;
