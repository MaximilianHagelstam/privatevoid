import React from 'react';
import { Button, Center } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const handleSignInClick = () => {
  window.open(`http://localhost:8080/auth/github`, '_self');
};

export const Login = () => {
  return (
    <Center>
      <Button
        onClick={handleSignInClick}
        colorScheme="twitter"
        size="lg"
        leftIcon={<FaGithub />}
      >
        GitHub
      </Button>
    </Center>
  );
};
