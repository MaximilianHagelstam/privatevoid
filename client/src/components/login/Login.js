import React from 'react';
import { Button, Flex, Box, Heading } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const handleSignInClick = () => {
  window.open(`http://localhost:8080/auth/github`, '_self');
};

export const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Flex width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderRadius={8}>
          <Box textAlign="center">
            <Heading>Log in to PrivateVoid</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Button
              onClick={handleSignInClick}
              colorScheme="purple"
              size="lg"
              leftIcon={<FaGithub />}
              width="full"
              mt={4}
              rounded={'full'}
            >
              GitHub
            </Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};
