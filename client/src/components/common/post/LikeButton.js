import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

import {
  likePost,
  unLikePost,
  checkLiked,
  fetchLikesByPostId,
} from '../../../util/api';

export const LikeButton = ({ postId }) => {
  const [isLiked, setIsLiked] = useState();
  const [likeAmount, setLikeAmount] = useState();

  useEffect(() => {
    checkLiked(postId).then((res) => {
      setIsLiked(res.liked);
    });

    fetchLikesByPostId(postId).then((res) => {
      setLikeAmount(res.length);
    });
  }, [postId]);

  return (
    <Button
      variant="ghost"
      rounded={'full'}
      colorScheme="red"
      aria-label="Like"
      fontWeight="normal"
      leftIcon={
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
    >
      {likeAmount}
    </Button>
  );
};
