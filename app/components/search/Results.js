var React = require('react');
var helpers = require("../utils/helpers");

var Results = React.createClass({

    // initializing variable states
    getInitialState: function() {
        return {title: "", published: "", url: ""}
    },

    // display the articles passed down from its parent Search
    // map cycles through array of index-values where values are objects containing articles data
    displayArticles: function() {
        return this.props.apiResults.arts.map(function(article, index) {
            return (
                <li className="list-group-item" style={{
                    overflow: 'auto'
                }} key={index}>
                    <div className="col-sm-10" style={{
                        textAlign: 'left'
                    }}>
                        <p style={{
                            fontSize: '1.5em'
                        }}>{article.headline.main}</p>
                        <p style={{}}>Published on: {article.pub_date}</p>
                    </div>
                    <div className="col-sm-2">
                        <a style={{
                            float: 'right',
                            marginBottom: '10px'
                        }} href={article.web_url} target="_blank">
                            <button className="btn btn-default ">View Article</button>
                        </a>
                        <a style={{
                            float: 'right'
                        }} href={void(0)}>
                            {/* onClick will request helper method to save the article in database */}
                            <button id={"#" + index} className="btn btn-default" onClick={function() {
                                helpers.saveThisArticle({article})
                            }}>Save</button>
                        </a>
                    </div>
                </li>
            );
        });
    },

    render: function() {
        // message if there are no articles to display
        if (!this.props.apiResults.arts) {
            return (
                <div>
                    {/* <h3>No Articles to be Displayed</h3> */}
                    {/* <h4>Enter topic of interest, time interval, and submit to retrieve articles</h4> */}
                </div>
            );
        }

        return (
            <div className="panel-body">
                <h2 style={{
                    marginTop: '0'
                }}>Search Results</h2>
                <ul className='list-group'>
                    {this.displayArticles()}
                </ul>
            </div>
        );
    }
});

module.exports = Results;
