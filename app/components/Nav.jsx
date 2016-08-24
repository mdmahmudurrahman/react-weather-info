var React = require("react");
var {Link} = require("react-router");

var Navigation = React.createClass({
  render: function(){
    return (
      <div>
        <h4>Navigation</h4>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    );
  }
});

module.exports = Navigation;
