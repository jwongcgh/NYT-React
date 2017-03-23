var React = require('react');

// require react-router module
var router = require('react-router');

// ==========
// include the route component to display individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// include the IndexRoute (catch=-all route)
var IndexRoute = router.IndexRoute;

// ==========

// reference the high-level components
var Main = require('../components/Main.js');
var Saved = require('../components/Saved.js');
var Search = require('../components/Search.js');
var Query = require('../components/search/Query.js');
var Results = require('../components/search/Results.js');

// ==========

// export routes
module.exports = (
   // The high level component is the Router component
   <Router history = {hashHistory}>
     <Route path = "/" component={Main}>

       {/* If user selects Info or Chat show the appropriate component */}
       <Route path="Search" component={Search}>
         <Route path="Query" component={Query} />
         <Route path="Results" component={Results} />
         <IndexRoute component={Query} />
       </Route>

       <Route path="Saved" component={Saved} />

       {/* If user selects any other path... we get the Search Route */}
       <IndexRoute component={Search} />
     </Route>
   </Router>
);
