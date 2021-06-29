import React from 'react';
import { Heading, Box, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const UserNotFound = () => {
  return (
    <Box maxW={'xl'} w={'full'} p={6} textAlign={'center'} overflow={'hidden'}>
      <Heading fontSize={'2xl'}>User Not Found</Heading>

      <Stack mt={8} spacing={6}>
        <Link to="/home">
          <Button flex={1} colorScheme="blue" rounded={'full'}>
            Back Home
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
