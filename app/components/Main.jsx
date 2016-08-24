var React = require("react");
var Navigation = require("Navigation");

var MainComponent = React.createClass({
  render: function(){
    return (
      <div>
          <Navigation/>
        <h3>Main component</h3>
        {this.props.children}
      </div>
    );
  }
});

module.exports = MainComponent;
