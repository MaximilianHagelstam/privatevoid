import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';

import { Sidebar } from './sidebar/Sidebar';
import { Feed } from './feed/Feed';

export const Home = () => {
  return (
    <HStack spacing="24px" paddingLeft="96px" paddingRight="96px">
      <Flex w="25%" h="750px" borderRadius="3xl" borderWidth="1px">
        <Sidebar />
      </Flex>
      <Flex
        w="50%"
        h="750"
        borderRadius="3xl"
        borderWidth="1px"
        alignItems="center"
      >
        <Feed />
      </Flex>
      <Flex
        w="25%"
        h="750"
        borderRadius="3xl"
        borderWidth="1px"
        alignItems="center"
        padding="24px"
      >
        Discover
      </Flex>
    </HStack>
  );
};
