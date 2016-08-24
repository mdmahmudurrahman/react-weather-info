var React = require("react");

var WeatherMessage = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Location: {this.props.locton}</h3>
          <h3>Temperature: {this.props.tmpr}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
