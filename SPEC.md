01. Add router => npm install react-router --save
02. Add main and nav component
03. update aliases in the webpack.config.js file
  alias: {
    Main: "app/components/Main.jsx",
    Navigation: "app/components/Nav.jsx"
  }
04. add three new component and their routing
   a. add weather component

......
.
.
.
.
.
10. To get weather info, we have to pass city name from the child
to parent, and the method in the parent will get the date, than it
will send back the data to child.
