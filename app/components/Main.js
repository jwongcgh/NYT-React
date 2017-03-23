var React = require('react');
var Search = require('./Search.js');
var Saved = require('./Saved.js');

var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
          <h1>this is Parent/Main</h1>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo">Some web elements here</a>
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
