import { Divider } from '@chakra-ui/react';

export const Post = ({ message, author }) => {
  return (
    <div>
      <p>Message: {message}</p>
      <p>Author: {author}</p>
      <Divider />
    </div>
  );
};
