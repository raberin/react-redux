/**
 * Client entry point
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import * as auth from './utils/auth';
import { loginSuccess } from './actions'
import { configureStore } from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/toastr.scss';
// Initialize store
const store = configureStore(window.__INITIAL_STATE);

if(auth.isLoggedIn()) {
  // that means there is something in localStorage
  let user = auth.getUser();
  store.dispatch(loginSuccess(user));
  // browserHistory.replace('/profile')
}
else {
  browserHistory.replace('/login');
}
const mountApp = document.getElementById('root');

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  const isString = (str) => {
    return typeof str === 'string';
  };

  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      mountApp
    );
  });

  /**
   * Supress Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */

   const orgError = console.error; // eslint-disable-line no-console
   console.error = (...args) => { // eslint-disable-line no-console
     if (args && args.length === 1 && isString(args[0]) && args[0].indexOf('You cannot change <Router routes>;') > -1) {
       // React route changed
     } else {
       // Log the error as normally
       orgError.apply(console, args);
     }
   };
}
