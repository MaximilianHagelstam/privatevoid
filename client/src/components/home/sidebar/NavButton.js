import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './NavButton.css';

export const NavButton = ({ text, icon, link }) => {
  return (
    <div className="navButton">
      <Link to={link}>
        <Button
          leftIcon={icon}
          variant="ghost"
          size="lg"
          rounded={'full'}
          paddingInline="14px"
        >
          {text}
        </Button>
      </Link>
    </div>
  );
};
