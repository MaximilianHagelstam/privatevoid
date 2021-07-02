import React from 'react';
import { Heading } from '@chakra-ui/react';
import './Layout.css';
import './Main.css';
import '../post/Post.css';

import { Sidebar } from './sidebar/Sidebar';
import { Explore } from './explore/Explore';

export const Layout = ({ main, title }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Heading
          borderBottomWidth="1px"
          paddingLeft="14px"
          paddingBottom="14px"
          paddingTop="4px"
          size="lg"
        >
          {title}
        </Heading>

        {main}
      </div>
      <Explore />
    </div>
  );
};
