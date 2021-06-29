import React from 'react';
import { Heading, Avatar, Box, Text, Stack, Button } from '@chakra-ui/react';
import './User.css';

export const User = ({ username }) => {
  return (
    <div className="user">
      <Box
        maxW={'xl'}
        w={'full'}
        p={6}
        textAlign={'center'}
        overflow={'hidden'}
      >
        <Avatar
          size={'2xl'}
          src={'https://avatars.githubusercontent.com/u/49094247?v=4'}
          alt={'Profile'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'}>Lindsey James</Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @{username}
        </Text>
        <Text textAlign={'center'} px={14}>
          Actress, musician, songwriter and artist. PM for work inquires or me
          in your posts
        </Text>

        <Stack mt={8} direction={'row'} spacing={6}>
          <Button flex={1} colorScheme="blue" rounded={'full'}>
            Message
          </Button>
          <Button
            flex={1}
            rounded={'full'}
            colorScheme="blue"
            variant="outline"
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

// maxW={'2xl'} w={'full'} rounded={'3xl'} p={6} overflow={'hidden'}
