import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './components/common/layout/Layout';
import { Landing } from './components/landing/index';
import { Feed } from './components/feed/';
import { Login } from './components/login/';
import { Logout } from './components/logout/';
import { Profile } from './components/profile/Profile';
import { PostLayout } from './components/post/PostLayout';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        path="/home"
        component={() => <Layout main={<Feed />} title="Feed" />}
      />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/logout" component={Logout} />
      <Route path="/user/:searchedUsername" component={Profile} />
      <Route path="/post/:postId" component={PostLayout} />
    </Switch>
  );
};
