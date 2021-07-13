import React from 'react';
import { Text, Stack } from '@chakra-ui/react';

export const FollowStats = ({ followers, following }) => {
  return (
    <Stack direction={'row'} justify={'center'} spacing={6}>
      <Stack spacing={0} align={'center'}>
        <Text fontWeight={600}>{following}</Text>
        <Text fontSize={'sm'} color={'gray.500'}>
          Following
        </Text>
      </Stack>
      <Stack spacing={0} align={'center'}>
        <Text fontWeight={600}>{followers}</Text>
        <Text fontSize={'sm'} color={'gray.500'}>
          Followers
        </Text>
      </Stack>
    </Stack>
  );
};
