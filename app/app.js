var React = require('react');
var ReactDOM = require('react-dom');

//  routing
var routes = require('./config/routes.js');

// render according to routing configuration
ReactDOM.render(
  routes,
  document.getElementById('app')
);
