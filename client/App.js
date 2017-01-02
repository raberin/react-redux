/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

// Base stylesheet
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (
    <Provider store={props.store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default App;
