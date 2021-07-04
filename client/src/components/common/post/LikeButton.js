import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

import { likePost, unLikePost } from '../../../util/api';

export const LikeButton = ({ postId }) => {
  const [isLiked, setIsLiked] = useState();

  return (
    <IconButton
      variant="ghost"
      rounded={'full'}
      colorScheme="red"
      aria-label="Like"
      icon={<FiHeart />}
      onClick={() => {
        if (isLiked) {
          console.log('I JUST UNLIKED THE POST');
          setIsLiked(false);
          // unLikePost({ postId });
        } else {
          console.log('I JUST LIKED THE POST');
          setIsLiked(true);
          // likePost({ postId });
        }
      }}
    />
  );
};
