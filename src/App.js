import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Landing from './pages/Landing';
import About from './pages/About';
import './App.css';
import Join from './pages/Join';
import LinksPage from './components/links';

const RedirectForm = () => {};

const userAgent =
  typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
const mobiles = Boolean(
  userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  )
);

const App = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(mobiles);
    const route = window.location.href;
    console.log('route', route);
    if (!mobile && route === 'https://tedxpesu.com') {
      window.location.replace('https://quizzical-ritchie-249997.netlify.app/');
      console.log('mobile', mobile);
    }
  });

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
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            {/* <Route exact path="/join" component={Join} /> */}
            <Route
              path='/cms'
              render={({ history }) =>
                window.location.replace('https://forms.gle/nnSMNsYjedaZY6wN7')
              }
            />
            <Route
              exact
              path='/links/greenmile'
              render={({ history }) =>
                window.location.replace('https://forms.gle/XaTiW9e8gbK34tNb6')
              }
            />
            <Route
              exact
              path='/links/jtc-upload'
              render={({ history }) =>
                window.location.replace('https://forms.gle/vLXhUJMLkXEcX1Hg7')
              }
            />
            <Route
              exact
              path='/links/watchparty'
              render={({ history }) =>
                window.location.replace(
                  'https://www.airmeet.com/e/acbff400-087c-11eb-9aa2-db9f70964def'
                )
              }
            />
            <Route exact path='/links' component={LinksPage} />
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
