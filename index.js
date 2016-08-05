var React = require("react");
var ReactDOM = require("react-dom");
var Previewer = require("./app/components/previewer");
var Board = require("./app/components/board");

var WholePreviewer = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="someClassName">Some React Header</h1>
        <Previewer />
        <Board />
      </div>
    )
  }
});

ReactDOM.render(<WholePreviewer />, document.getElementById("app"));
