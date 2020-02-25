import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Table from './components/Table/Table';
import App from './components/App';


// import 'include-media';
import './scss/style.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/table" component={Table} />
    </Switch>
  </Router>,
  document.getElementById('app')
);

module.hot.accept();
