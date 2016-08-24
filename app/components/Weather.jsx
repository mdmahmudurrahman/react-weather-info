var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");

var Weather = React.createClass({
  getInitialState: function(){
    return {
      location: "Dhaka",
      temperature: 100
    }
  },
  handleSearch: function(cityName){
    this.setState({
      location: cityName,
      temperature: 78
    });
  },
  render: function functionName() {
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage tmpr= {this.state.temperature} locton = {this.state.location}/>
      </div>
    );
  }
});

module.exports = Weather;
