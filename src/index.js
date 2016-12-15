import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

import store from './store';
import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
