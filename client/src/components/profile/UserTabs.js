import React from 'react';
import { Tab, Tabs, TabPanels, TabList, TabPanel, Box } from '@chakra-ui/react';

import { PostsTab } from './PostsTab';

export const UserTabs = ({ username }) => {
  return (
    <Box maxW={'xl'} w={'full'} p={6} overflow={'hidden'}>
      <Tabs size="lg" isFitted>
        <TabList>
          <Tab>Posts</Tab>
          <Tab>Comments</Tab>
          <Tab>Likes</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PostsTab authorUsername={username} />
          </TabPanel>
          <TabPanel>Comments</TabPanel>
          <TabPanel>
            <p>Likes</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
