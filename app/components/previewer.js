var React = require("react");

var Previewer = React.createClass({
  markup: function() {
    var md = new Remarkable();
    var markup = md.render(this.props.text.toString());
    return { __html: markup };
  },
  render: function() {
    return (
        <div className="component" id="Previewer" dangerouslySetInnerHTML={this.markup()}></div>
    )
  }
});

module.exports = Previewer;
