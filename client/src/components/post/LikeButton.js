import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

export const LikeButton = () => {
  return (
    <IconButton
      variant="ghost"
      rounded={'full'}
      size="lg"
      colorScheme="red"
      aria-label="Like"
      icon={<FiHeart />}
    />
  );
};
