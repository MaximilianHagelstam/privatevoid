import React, { useState, useEffect } from 'react';
import { Heading, Avatar, Box, Text, Stack, Center } from '@chakra-ui/react';

import { FollowButton } from './FollowButton';
import { FollowStats } from './follow/FollowStats';
import {
  convertUsernameToId,
  fetchFollowersByUserId,
  fetchFollowingByUserId,
} from '../../util/api';

export const ProfileCard = ({ avatar, displayName, username, bio }) => {
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowStats = async () => {
      const { authorId } = await convertUsernameToId(username);
      const fetchedFollows = await fetchFollowersByUserId(authorId);
      const fetchedFollowing = await fetchFollowingByUserId(authorId);

      setFollowers(fetchedFollows);
      setFollowing(fetchedFollowing);
    };
    fetchFollowStats();
  }, [username]);

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

          <FollowStats
            followers={followers.length}
            following={following.length}
          />

          <FollowButton username={username} />
        </Box>
      </Box>
    </Center>
  );
};
