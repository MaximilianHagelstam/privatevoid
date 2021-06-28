import { IconButton } from '@chakra-ui/react';
import { FiMessageCircle } from 'react-icons/fi';

export const CommentButton = () => {
  return (
    <IconButton
      variant="ghost"
      rounded={'full'}
      colorScheme="purple"
      aria-label="Comment"
      icon={<FiMessageCircle />}
    />
  );
};
