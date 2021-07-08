import React from 'react';
import { Heading, Avatar, Box, Text, Stack, Center } from '@chakra-ui/react';

import { FollowButton } from './FollowButton';
import { FollowStats } from './FollowStats';

export const ProfileCard = ({ avatar, displayName, username, bio }) => {
  return (
    <Center>
      <Box w={'full'} p={6} textAlign={'center'} overflow={'hidden'}>
        <Avatar
          size={'2xl'}
          src={avatar}
          alt={'Profile'}
          mb={4}
          pos={'relative'}
        />

        <Box>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {displayName}
            </Heading>
            <Text color={'gray.500'}>{bio}</Text>
          </Stack>

          <FollowStats />

          <FollowButton username={username} />
        </Box>
      </Box>
    </Center>
  );
};
