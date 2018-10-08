import React, { Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import {
  Login,
  Dashboard
} from './containers';
// import Login from './containers/Login';
// import Dashboard from './containers/Dashboard';
import { Progressbar } from './components/common';

import store from './store';

import { isLoggedIn } from './utils/auth';
import { loginSuccess } from './actions/authActions';
if (isLoggedIn()) {
  const user = JSON.parse(window.localStorage.getItem('User'));
  store.dispatch(loginSuccess(user));
}

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
const Routes = () => {
  return (
    <Fragment>
      <Progressbar percentage="00" />
      <PrivateRoute isLoggedIn={isLoggedIn()} component={Dashboard} path="/dashboard" />
      <Switch>
      <Route exact path="/" render={() => (
        isLoggedIn() ? (
          <Redirect to="/dashboard"/>
        ) : (
          <Redirect to="/login"/>
        )
      )}/>
      <Route exact path="/login" render={() => (
        isLoggedIn() ? (
          <Redirect to="/dashboard"/>
        ) : (
          <Route path="/login" component={Login}/>
        )
      )}/>
      </Switch>
      </Fragment>
  );
};

export default withRouter(Routes);
