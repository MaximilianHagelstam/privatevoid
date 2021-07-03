import React from 'react';
import { Tab, Tabs, TabPanels, TabList, TabPanel, Box } from '@chakra-ui/react';

import { PostsTab } from './PostsTab';
import { CommentsTab } from './CommentsTab';

export const ProfileTabs = ({ username }) => {
  return (
    <Box w={'full'} overflow={'hidden'}>
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
          <TabPanel>
            <CommentsTab authorUsername={username} />
          </TabPanel>
          <TabPanel>
            <p>Likes</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
