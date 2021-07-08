import React from 'react';
import { Text, Stack } from '@chakra-ui/react';

export const FollowStats = () => {
  return (
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
  );
};
