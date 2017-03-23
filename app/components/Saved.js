// Include React as a dependency
var React = require("react");

// Include the Helper
var helpers = require("./utils/helpers");

// Create component
var Saved = React.createClass({

  getInitialState: function() {
    return { savedArticles: "" };
  },


  render: function() {

    return <h2>this is saved.js file</h2>
  }
});


module.exports = Saved;
