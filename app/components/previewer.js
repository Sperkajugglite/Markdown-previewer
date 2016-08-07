var React = require("react");

var Previewer = React.createClass({
  render: function() {
    var md = new Remarkable();
    return (
      <textarea className="component" id="Previewer" readOnly>{md.render(this.props.children.toString())}</textarea>
    )
  }
});

module.exports = Previewer;
