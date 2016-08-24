var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var MainComponent = require("Main");


ReactDOM.render(<Router history={hashHistory}>
     <Route path="/" component={MainComponent}>

     </Route>
   </Router>,
   document.getElementById("app"));
