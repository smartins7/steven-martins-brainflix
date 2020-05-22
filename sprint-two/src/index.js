import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.css";

import Uploads from "./components/Uploads";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/upload" component={Uploads} />
      {/* <Route path="/videos/:id" component={App} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
