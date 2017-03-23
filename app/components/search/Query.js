var React = require('react');

var Query = React.createClass({

      getInitialState: function() {
          return {topic: "ufo", startYear: "2012", endYear: "2012"}
      },

      handleChange: function(event) {

          var newState = {};
          newState[event.target.id] = event.target.value;
          // console.log(newState[event.target.id]);
          // console.log(event.target.value);
          this.setState(newState);
          console.log("from query: ", event.target.value);
        
      },

      handleSubmit: function(event) {
        event.preventDefault();
        // arguments/user-input are fed to searchQuery function and passed to parent
        this.props.searchQuery(this.state.topic, this.state.startYear, this.state.endYear);
      },

      render: function() {
          return (
              <div>
                  <h2>this is query form</h2>
                  {/* here goes the request form */}
                  <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                          <h4 className="">
                              <strong>Topic</strong>
                          </h4>
                          <input
                            value={this.state.topic}
                            type="text"
                            className="form-control"
                            id="topic"
                            onChange={this.handleChange}
                            required
                          />

                          <h4 className="">
                              <strong>Start Year</strong>
                          </h4>
                          <input
                            value={this.state.startYear}
                            type="text"
                            className="form-control"
                            id="startYear"
                            onChange={this.handleChange}
                            required
                          />

                          <h4 className="">
                              <strong>End Year</strong>
                          </h4>
                          <input
                            value={this.state.endYear}
                            type="text"
                            className="form-control"
                            id="endYear"
                            onChange={this.handleChange}
                            required
                          />

                      </div>

                      <div className="pull-right">
                          <button
                            type="submit"
                            className="btn btn-danger">
                            <h4>Submit</h4>
                          </button>
                      </div>
                  </form>

              </div>
          )
      }
  });

module.exports = Query;
