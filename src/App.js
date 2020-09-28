import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Landing from "./pages/Landing";
import About from "./pages/About";
import "./App.css";
import Join from "./pages/Join";
import LinksPage from "./components/links";

const RedirectForm = () => {};

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <div>
          {/**
           * Put stuff you want to always show above the Switch
           * (for example a navbar)
           */}

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/join" component={Join} /> */}
            <Route exact path="/links" component={LinksPage} />
            <Route
              path="/cms"
              render={({ history }) =>
                window.location.replace("https://forms.gle/nnSMNsYjedaZY6wN7")
              }
            />
            <Route
              exact
              path="/links/greenmile"
              render={({ history }) =>
                window.location.replace("https://forms.gle/XaTiW9e8gbK34tNb6")
              }
            />
            <Route
              exact
              path="/links/jtc-upload"
              render={({ history }) =>
                window.location.replace("https://forms.gle/vLXhUJMLkXEcX1Hg7")
              }
            />
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
