import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Landing from "./pages/Landing";
import "./App.css";

const App = () => {
  return (
    <>
      {" "}
      <CssBaseline />
      <Router>
        <div>
          {/**
           * Put stuff you want to always show above the Switch
           * (for example a navbar)
           */}

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

function NotFound() {
  return <h2>Wops! - TODO need to add a 404 page</h2>;
}

export default App;
