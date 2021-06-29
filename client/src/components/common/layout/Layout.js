import React from 'react';
import './Layout.css';

import { Sidebar } from './sidebar/Sidebar';
import { Explore } from './explore/Explore';

export const Layout = ({ main }) => {
  return (
    <div className="layout">
      <Sidebar />
      {main}
      <Explore />
    </div>
  );
};
