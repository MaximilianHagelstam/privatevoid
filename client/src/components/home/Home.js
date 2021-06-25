import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, HStack } from '@chakra-ui/react';

import { ToggleTheme } from './sidebar/ToggleTheme';
// <div>
//   <h1>Welcome to PrivateVoid</h1>
//   <Link to="/logout">
//     <Button colorScheme="purple">Logout</Button>
//   </Link>
//   <ToggleTheme />
// </div>

export const Home = () => {
  return (
    <HStack spacing="24px" paddingLeft="96px" paddingRight="96px">
      <Box
        w="25%"
        h="750"
        borderRadius="3xl"
        borderWidth="1px"
        alignItems="center"
        padding="24px"
      >
        Sidebar
      </Box>
      <Box
        w="50%"
        h="750"
        borderRadius="3xl"
        borderWidth="1px"
        alignItems="center"
        padding="24px"
      >
        Feed
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
