var React = require("react");

var WeatherForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();
    var cityName = this.refs.cityNameTextBox.value;
    if(cityName.length > 0){
      this.refs.cityNameTextBox.value = "";
      this.props.onSearch(cityName);
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="cityNameTextBox" placeholder="Enter the city name"/><br/>
          <button>Get the information</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
