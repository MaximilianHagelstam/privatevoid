import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Profile';
import { ArticelsList } from './components/articleList/ArticleList';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/articles" component={ArticelsList} />
    </Switch>
  );
};
