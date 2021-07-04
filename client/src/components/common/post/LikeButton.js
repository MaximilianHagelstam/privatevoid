import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

import { likePost, unLikePost, checkLiked } from '../../../util/api';

export const LikeButton = ({ postId }) => {
  const [isLiked, setIsLiked] = useState();

  useEffect(() => {
    checkLiked(postId).then((res) => {
      setIsLiked(res.liked);
    });
  }, [postId]);

  return (
    <IconButton
      variant="ghost"
      rounded={'full'}
      colorScheme="red"
      aria-label="Like"
      icon={
        isLiked === true ? <BsHeartFill size={14} /> : <BsHeart size={14} />
      }
      onClick={() => {
        if (isLiked) {
          setIsLiked(false);
          unLikePost({ postId });
        } else {
          setIsLiked(true);
          likePost({ postId });
        }
      }}
    />
  );
};
