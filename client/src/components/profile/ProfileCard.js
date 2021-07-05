import React from 'react';
import { Heading, Avatar, Box, Text, Stack, Button } from '@chakra-ui/react';

import { FollowButton } from './FollowButton';

export const ProfileCard = ({ avatar, displayName, username, bio }) => {
  return (
    <Box w={'full'} p={6} textAlign={'center'} overflow={'hidden'}>
      <Avatar
        size={'2xl'}
        src={avatar}
        alt={'Profile'}
        mb={4}
        pos={'relative'}
      />
      <Heading fontSize={'2xl'}>{displayName}</Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        @{username}
      </Text>
      <Text textAlign={'center'} px={14}>
        {bio}
      </Text>

      <Stack mt={8} direction={'row'} spacing={6}>
        <Button flex={1} colorScheme="blue" rounded={'full'}>
          Message
        </Button>
        <FollowButton username={username} />
      </Stack>
    </Box>
  );
};
