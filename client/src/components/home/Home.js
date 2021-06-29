import React from 'react';
import './Home.css';

import { Sidebar } from './sidebar/Sidebar';
import { Feed } from './feed/Feed';
import { Explore } from './explore/Explore';

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Explore />
    </div>
  );
};
