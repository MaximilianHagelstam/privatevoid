import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Profile';
import { Header } from './components/common/Header';
import { ArticelsList } from './components/articleList/ArticleList';

export const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/articles" component={ArticelsList} />
      </Switch>
    </div>
  );
};
