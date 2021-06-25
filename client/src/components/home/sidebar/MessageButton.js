import { Button } from '@chakra-ui/react';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const MessageButton = () => {
  return (
    <Link to="/messages">
      <Button leftIcon={<FiMail />} variant="ghost" size="lg" rounded={'full'}>
        Messages
      </Button>
    </Link>
  );
};
