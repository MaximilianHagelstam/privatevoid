import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};
