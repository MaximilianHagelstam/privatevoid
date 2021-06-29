import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from './components/landing/Landing';
import { Home } from './components/feed/Home';
import { Login } from './components/login/Login';
import { Logout } from './components/logout/Logout';
import { Profile } from './components/profile/Profile';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/logout" component={Logout} />
      <Route path="/user" component={Profile} />
    </Switch>
  );
};
