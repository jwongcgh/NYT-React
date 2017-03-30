var React = require('react');
var Search = require('./Search.js');
var Saved = require('./Saved.js');

var Main = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
      <div className="title">
        <h1>The New York Times</h1>
        <h4>Article Scrubber</h4>
        {/* <h3>Search Articles</h3> */}
      <br />
      <div className="nav-wrapper">
        <p>
          <a style={{width: '130px'}} href="#/Search" className="btn btn-primary btn-lg">Search</a>
        </p>
        <p>
          <a style={{width: '130px'}} href="#/Saved" className="btn btn-primary btn-lg">Saved Articles</a>
        </p>
      </div>
      </div>
      <div className="props container">

         <div className="container">
          {/* this will dump the correct Child Component */}
           {this.props.children}
         </div>

     </div>
   </div>
    );
  }
});

module.exports = Main;
