var React = require('react');
var Search = require('./Search.js');
var Saved = require('./Saved.js');

var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>The New York Times</h1>
        <h4>Article Scrubber</h4>
        <h3>Search Articles</h3>
         <div className="nav-wrapper">
           <p>
             <a href="#/Search" className="btn btn-primary btn-lg">Search</a>
             <a href="#/Saved" className="btn btn-primary btn-lg">Saved Articles</a>
           </p>
         </div>
         <div className="container">
          {/* this will dump the correct Child Component */}
           {this.props.children}
         </div>

     </div>
    );
  }
});

module.exports = Main;
