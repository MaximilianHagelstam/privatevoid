import React from 'react';
import { Stack } from '@chakra-ui/react';

import { Followers } from './Followers';
import { Following } from './Following';

export const FollowStats = ({ followers, following }) => {
  return (
    <Stack direction={'row'} justify={'center'} spacing={6}>
      <Following following={following} />
      <Followers followers={followers} />
    </Stack>
  );
};
