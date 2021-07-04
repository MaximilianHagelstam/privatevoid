import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

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
      icon={isLiked === true ? <AiFillHeart /> : <AiOutlineHeart />}
      onClick={() => {
        if (isLiked) {
          console.log('I JUST UNLIKED THE POST');
          setIsLiked(false);
          unLikePost({ postId });
        } else {
          console.log('I JUST LIKED THE POST');
          setIsLiked(true);
          likePost({ postId });
        }
      }}
    />
  );
};
