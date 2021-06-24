import React from 'react';
import { Button } from '@chakra-ui/react';

const handleLogoutClick = () => {
  window.open('http://localhost:8080/auth/logout', '_self');
};

export const Logout = () => {
  return (
    <Button
      onClick={handleLogoutClick}
      colorScheme="purple"
      variant="ghost"
      size="md"
    >
      Log out
    </Button>
  );
};
