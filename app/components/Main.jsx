var React = require("react");
var Navigation = require("Navigation");

var MainComponent = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Main component</h3>
        <Navigation/>
      </div>
    );
  }
});

module.exports = MainComponent;
