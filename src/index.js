// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/** Stylesheets **/
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

/** Components **/
import {
  App,
  Home
} from './Components';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
    </App>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
