import React from 'react';
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
};
