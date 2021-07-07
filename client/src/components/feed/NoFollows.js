import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

export const NoFollows = () => {
  return (
    <Box maxW={'xl'} w={'full'} p={6} textAlign={'center'} overflow={'hidden'}>
      <Heading fontSize={'2xl'}>You have yet to follow anyone</Heading>
    </Box>
  );
};
