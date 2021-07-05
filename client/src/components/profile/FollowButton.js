// followedId
import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

import { followUser, convertUsernameToId } from '../../util/api';

export const FollowButton = ({ username }) => {
  const [isFollowed, setIdFollowed] = useState();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    convertUsernameToId(username).then((res) => setUserId(res.authorId));

    // checkLiked(postId).then((res) => {
    //   setIsLiked(res.liked);
    // });
  }, [username]);

  console.log(userId);

  return (
    <Button
      flex={1}
      rounded={'full'}
      colorScheme="blue"
      variant={isFollowed === true ? 'solid' : 'outline'}
      onClick={() => {
        if (isFollowed) {
          setIdFollowed(false);
        } else {
          setIdFollowed(true);
          followUser({ followedId: userId });
        }
      }}
    >
      Follow
    </Button>
  );
};
