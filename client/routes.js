import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    About,
    Home,
    Login,
    Main,
    NotFound,

  } from './containers';

export default(
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);
