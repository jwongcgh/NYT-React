var React = require('react');
var helpers = require("../utils/helpers");

var Results = React.createClass({

    // initializing variable states
    getInitialState: function() {
        return {
            title: "",
            published: "",
            url: ""
        }
    },

    // display the articles passed down from its parent Search
    // map cycles through array of index-values where values are objects containing articles data
    displayArticles: function() {
        return this.props.apiResults.arts.map(function(article, index) {
            return (
                <li key={index}>
                    <p>{article.headline.main}</p>
                    <a href={article.web_url} target="_blank">
                        <button className="btn btn-default ">View Article</button>
                    </a>
                    <a href={void(0)}>
                        {/* onClick will request helper method to save the article in database */}
                        <button id={"#" + index} className="btn btn-default" onClick={function() {
                            helpers.saveThisArticle({article})
                        }}>Save</button>
                    </a>
                    <p>Published on: {article.pub_date}</p>
                </li>
            );
        });
    },

    render: function() {
        // message if there are no articles to display
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
        );
    }
});

module.exports = Results;
