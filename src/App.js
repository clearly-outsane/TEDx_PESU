import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Landing from "./pages/Landing";
import About from "./pages/About";
import "./App.css";
import LinksPage from "./components/links";
import Circle1 from "./components/takeaways/Circle1";
import Takeaway1 from "./components/takeaways/takeaway1";
import Takeaway2 from "./components/takeaways/takeaway2";
import Takeaway5 from "./components/takeaways/takeaway5";
import Takeaway3 from "./components/takeaways/takeaway3";
import Takeaway4 from "./components/takeaways/takeaway4";

const RedirectForm = () => {};

const route = window.location.href;

// const ismobile = Boolean(
//   navigator.userAgent.match(/(iPad)|(iPhone)|(android)|(webOS)/i)
// );

// console.log(ismobile);

// if (ismobile === false && route.toString() === 'https://tedxpesu.com/') {
//   window.location.replace('https://desktop.tedxpesu.com/');
// }

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/join" component={Join} /> */}
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
            <Route
              exact
              path="/links/view"
              render={({ history }) =>
                window.location.replace(
                  "https://www.airmeet.com/e/7219b540-0fa5-11eb-a4df-0be2e439ef27"
                )
              }
            />
            <ScrollToTop>
              <Route exact path="/circles" component={Circle1} />
              <Route exact path="/takeaway1" component={Takeaway1} />
              <Route exact path="/takeaway2" component={Takeaway2} />
              <Route exact path="/takeaway3" component={Takeaway3} />
              <Route exact path="/takeaway4" component={Takeaway4} />
              <Route exact path="/takeaway5" component={Takeaway5} />
            </ScrollToTop>
            <Route exact path="/links" component={LinksPage} />
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
