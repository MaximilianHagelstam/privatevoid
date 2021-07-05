// followedId
import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

import {
  followUser,
  unfollowUser,
  checkFollowed,
  convertUsernameToId,
} from '../../util/api';

export const FollowButton = ({ username }) => {
  const [isFollowed, setIdFollowed] = useState();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    convertUsernameToId(username).then((res) => setUserId(res.authorId));

    checkFollowed(userId).then((res) => {
      setIdFollowed(res.followed);
    });
  }, [userId, username]);

  return (
    <Button
      flex={1}
      width={175}
      rounded={'full'}
      mt={6}
      colorScheme="blue"
      variant={isFollowed === true ? 'solid' : 'outline'}
      onClick={() => {
        if (isFollowed) {
          setIdFollowed(false);
          unfollowUser({ userId });
        } else {
          setIdFollowed(true);
          followUser({ userId });
        }
      }}
    >
      Follow
    </Button>
  );
};
