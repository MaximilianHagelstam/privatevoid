import React from 'react';
import { Box, HStack } from '@chakra-ui/react';

import { Sidebar } from './sidebar/Sidebar';
import { Feed } from './feed/Feed';

export const Home = () => {
  return (
    <HStack spacing="24px" paddingLeft="96px" paddingRight="96px">
      <Box w="25%" h="750" borderRadius="3xl" borderWidth="1px" padding="24px">
        <Sidebar />
      </Box>
      <Box
        w="50%"
        h="750"
        borderRadius="3xl"
        borderWidth="1px"
        alignItems="center"
        padding="24px"
      >
        <Feed />
      </Box>
      <Box
        w="25%"
        h="750"
        borderRadius="3xl"
        borderWidth="1px"
        alignItems="center"
        padding="24px"
      >
        Discover
      </Box>
    </HStack>
  );
};
