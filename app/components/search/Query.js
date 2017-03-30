var React = require('react');

var Query = React.createClass({

    getInitialState: function() {
        return {topic: "eclipse", startYear: "2012", endYear: "2012"}
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
          padding: '10px 0',

        }


        return (
            <div>

                <h3>Enter topic of interest, time interval, and submit to retrieve articles</h3>
                <section style={styles}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div>
                        <h4 className="form-titles">
                            <strong>Topic</strong>
                        </h4>
                        <input value={this.state.topic} type="text" className="form-control" id="topic" onChange={this.handleChange} required/>
                      </div>
                      <div style={styles}>
                        <h4 className="">
                            <strong>Start Year</strong>
                        </h4>
                        <input value={this.state.startYear} type="text" className="form-control" id="startYear" onChange={this.handleChange} required/>
                      </div>
                      <div style={styles}>
                        <h4 className="">
                            <strong>End Year</strong>
                        </h4>
                        <input value={this.state.endYear} type="text" className="form-control" id="endYear" onChange={this.handleChange} required/>
                      </div>
                    </div>
                    <div>
                    {/* <div className="pull-right"> */}
                        <button style={{width: '100%'}} type="submit" className="btn btn-default">
                            <h4>Submit</h4>
                        </button>
                    </div>
<br />
                </form>

              </section>

            </div>
        );
    }
});

module.exports = Query;
