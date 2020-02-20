import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import 'include-media';
import './scss/style.scss';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
