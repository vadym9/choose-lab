import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Table from './components/Table/Table';
import App from './components/App';

import './scss/style.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/table" component={Table} />
    </Switch>
  </Router>,
  document.getElementById('app')
);

module.hot.accept();
