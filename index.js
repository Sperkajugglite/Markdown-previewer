var React = require("react");
var ReactDOM = require("react-dom");
var Board = require("./app/components/board");

var WholePreviewer = React.createClass({
  render: function() {
    return (
        <Board />
    )
  }
});

ReactDOM.render(<WholePreviewer />, document.getElementById("app"));
