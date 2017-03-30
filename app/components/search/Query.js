var React = require('react');

var Query = React.createClass({

    getInitialState: function() {
        return {topic: "", startYear: "", endYear: ""}
    },

    // listens for changes in the form input
    handleChange: function(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    // the button event on submit
    handleSubmit: function(event) {
        event.preventDefault();
        // arguments/user-input are fed to searchQuery function and passed to parent
        this.props.searchQuery(this.state.topic, this.state.startYear, this.state.endYear);
    },

    render: function() {
        var styles = {
            padding: '10px 0'
        }
        var inputStyles = {
            textAlign: 'center',
            fontSize: '1.5em'
        }

        return (
            <div>
                <h3>Enter topic of interest, time interval, and submit to retrieve articles</h3>
                <section style={styles}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div>
                                <h3>
                                    <strong>Topic</strong>
                                </h3>
                                <input style={inputStyles} value={this.state.topic} type="text" className="form-control" id="topic" onChange={this.handleChange} required/>
                            </div>
                            <div style={styles}>
                                <h3>
                                    <strong>Start Year</strong>
                                </h3>
                                <input style={inputStyles} value={this.state.startYear} type="text" className="form-control" id="startYear" onChange={this.handleChange} required/>
                            </div>
                            <div style={styles}>
                                <h3>
                                    <strong>End Year</strong>
                                </h3>
                                <input style={inputStyles} value={this.state.endYear} type="text" className="form-control" id="endYear" onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div>
                            <button style={{
                                width: '90%',
                                padding: '0',
                                marginTop: '20px'
                            }} type="submit" className="btn btn-default query">
                                <h4><strong>Submit</strong></h4>
                            </button>
                        </div>
                        <br/>
                    </form>
                </section>
            </div>
        );
    }
});

module.exports = Query;
