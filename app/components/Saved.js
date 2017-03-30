// Include React as a dependency
var React = require("react");

// Include helper
var helpers = require("./utils/helpers");

// Create the Main component
var Saved = React.createClass({

    getInitialState: function() {
        return {savedArticles: {}};
    },

    // after component mounts retrive saved articles from database
    componentDidMount: function() {
        helpers.retrieveSaved().then(function(response) {
            this.setState({
                savedArticles: {
                    arts: response.data
                }
            });
        }.bind(this));
    },

    // removes articles then refreshes saved articles content page
    handleClick: function(article) {
        helpers.removeThisArticle({article}).then(function() {
            helpers.retrieveSaved().then(function(response) {
                this.setState({
                    savedArticles: {
                        arts: response.data
                    }
                });
            }.bind(this));
        }.bind(this));
    },

    // display the articles that were saved
    displayArticles: function() {
        return this.state.savedArticles.arts.map(function(article, index) {
            return (
                <li className="list-group-item" style={{
                    overflow: 'auto'
                }} key={index}>
                    <div className="col-sm-10" style={{
                        textAlign: 'left'
                    }}>
                        <p style={{
                            fontSize: '1.5em'
                        }}>{article.title}</p>
                        <p style={{}}>Published on: {article.published}</p>
                        {/* <p>article _id: {article._id}</p> */}
                    </div>
                    <div className="col-sm-2">
                        <a style={{
                            float: 'right',
                            marginBottom: '5px'
                        }} href={article.url} target="_blank">
                            <button className="btn btn-default ">View Article</button>
                        </a>
                        <a style={{
                            float: 'right'
                        }} href="#">
                            {/* onClick will pass the current article as an argument to handleClick */}
                            <button className="btn btn-default" // arrow notation does not bind this
                                onClick={(e) => {
                                e.preventDefault();
                                this.handleClick(article)
                            }}>Delete</button>
                        </a>
                    </div>
                </li>
            );
        }.bind(this));
    },

    render: function() {

        if (!this.state.savedArticles.arts) {
            return (
                <div>
                    <h3>No Saved Articles</h3>
                    <p>Click Search Button</p>
                </div>
            );
        }

        return (
            <div className="panel-body">
                <h2>Your Saved Articles</h2>
                <ul className="list-group">
                    {this.displayArticles()}
                </ul>
            </div>
        )
    }
});

module.exports = Saved;
