var React = require("react");

var WeatherForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter the city name"/><br/>
          <button>Get the information</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
