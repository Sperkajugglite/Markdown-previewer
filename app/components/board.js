var React = require("react");
var Previewer = require("./previewer");

var Board = React.createClass({
  getInitialState: function () {
    return {
      text: "Write Something Here"
    }
  },
  handleChange: function(e) {
    this.setState({text: e.target.value});
    console.log(this.state.text);
  },
  render: function() {
    return (
      <div>
        <textarea
          className="component"
          id="Board"
          onChange={this.handleChange}
          value={this.state.text}></textarea>
        <Previewer text={this.state.text}></Previewer>
      </div>
    )
  }
})

module.exports = Board;
