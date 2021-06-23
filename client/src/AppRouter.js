import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Profile';
import { PostList } from './components/postList/PostList';
import { CreatePost } from './components/createPost/CreatePost';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/posts" component={PostList} />
      <Route path="/create-post" component={CreatePost} />
    </Switch>
  );
};
