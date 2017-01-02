import React from 'react';
import { IndexRoute, Route } from 'react-router';
// import * as auth from './utils/auth';
import { About, Home, Login, Main, NotFound } from './containers';

// const requireAuth = (nextState, replaceState) => {
//   if (!auth.isLoggedIn()) {
//     replaceState({ nextPathname: nextState.location.pathname }, '/login');
//   }
// };

export default(
  <Route path="/" component={Main}>
    <IndexRoute component={Login} />
    <Route path="about" component={About} />
    <Route path="home" component={Home} />
    <Route path="login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);
