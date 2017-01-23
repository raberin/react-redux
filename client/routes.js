import React from 'react';
import { Route } from 'react-router';
import * as auth from './utils/auth';
import { Dashboard, Login, Main, NotFound, Register } from './containers';

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    replace('/login');
  }
};

export default(
  <Route component={Main}>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route onEnter={requireAuth}>
      <Route path="/dashboard" component={Dashboard} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
