// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");


// Components
var Navbar = require("./components/Navbar");
var Dashboard = require("./components/Dashboard");

ReactDOM.render(
 <div className="main-container">
 	<div className="container">
    <div className="header clearfix">
 	<Navbar />
 	<Dashboard />
 	</div>
 	</div>
 </div>,
  document.getElementById("app")
);