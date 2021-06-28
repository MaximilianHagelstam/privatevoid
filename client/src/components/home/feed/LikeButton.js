import { IconButton } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

export const LikeButton = () => {
  return (
    <IconButton
      variant="ghost"
      rounded={'full'}
      colorScheme="blue"
      aria-label="Like"
      icon={<FiHeart />}
    />
  );
};
