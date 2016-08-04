var React = require("react");
var ReactDOM = require("react-dom");

var Previewer = React.createClass({
  render: function() {
    return (
      <h1 > Atutus</h1>
    )
  }
});

ReactDOM.render(<Previewer />, document.getElementById("app"))
