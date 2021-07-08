import React from 'react';
import { Heading, Avatar, Box, Text, Stack, Center } from '@chakra-ui/react';

import { FollowButton } from './FollowButton';

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

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <FollowButton username={username} />
        </Box>
      </Box>
    </Center>
  );
};
