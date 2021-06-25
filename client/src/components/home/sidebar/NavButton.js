import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NavButton = ({ text, icon, link }) => {
  return (
    <Link to={link}>
      <Button leftIcon={icon} variant="ghost" size="lg" rounded={'full'}>
        {text}
      </Button>
    </Link>
  );
};
