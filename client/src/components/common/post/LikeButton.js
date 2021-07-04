import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

import { likePost } from '../../../util/api';

export const LikeButton = ({ postId }) => {
  return (
    <IconButton
      variant="ghost"
      rounded={'full'}
      colorScheme="red"
      aria-label="Like"
      icon={<FiHeart />}
      onClick={() => {
        likePost({ postId });
      }}
    />
  );
};
