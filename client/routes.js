import React from 'react';
import { Route } from 'react-router';
import * as auth from './utils/auth';
import { Login, Main, NotFound, Register } from './containers';

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    replace('/login');
  }
};

export default(
  <Route component={Main}>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="*" component={NotFound} />
  </Route>
);
