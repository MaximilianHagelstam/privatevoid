import { IconButton } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

export const LikeButton = () => {
  return (
    <IconButton
      variant="ghost"
      rounded={'full'}
      colorScheme="purple"
      aria-label="Like"
      icon={<FiHeart />}
    />
  );
};
