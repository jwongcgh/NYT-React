var React = require('react');

// Search queries from NYT API for articles
var Query = require('./search/Query.js');
var Results = require('./search/Results.js');

var helpers = require("./utils/helpers");

var Search = React.createClass({

    getInitialState: function() {
        return {apiResponse: {}}
    },

    // this function will be passed to Query child to retrieve arguments/user-input
    // then using helpers, the actual api request will be executed
    searchQuery: function(topic, startYear, endYear) {
        helpers.runQuery(topic, startYear, endYear).then(function(apiResponse) {
            // updating the content/state of results with the data that returned from api query
            this.setState({
                apiResponse: {
                    arts: apiResponse
                }
            });
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <h2>Search Articles</h2>
                {/* pass searchQuery function to Query where arguments/user-input is fed to searchQuery function */}
                <Query searchQuery={this.searchQuery}/>

                {/* send the api results object to Results file */}
                <Results apiResults={this.state.apiResponse}/> 
            </div>
        )
    }
});

module.exports = Search;
