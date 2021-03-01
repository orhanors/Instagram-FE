import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/me" component={Profile} exact />
	  </Switch>
    </Router>
  );
}

export default App;
