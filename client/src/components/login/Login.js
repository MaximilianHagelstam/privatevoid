import { Button, Flex, Box, Heading } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import './Login.css';

const { REACT_APP_API_HOME } = process.env;

const handleSignInClick = () => {
  window.open(`${REACT_APP_API_HOME}/auth/github`, '_self');
};

export const Login = () => {
  return (
    <div className="login">
      <Flex width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderRadius={8}>
          <Box textAlign="center">
            <Heading>Log in to PrivateVoid</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Button
              onClick={handleSignInClick}
              colorScheme="blue"
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
