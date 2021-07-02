import React from 'react';
import { Button, Box, Heading, Text, Stack, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Logout.css';

const { REACT_APP_API_HOME } = process.env;

const handleLogoutClick = () => {
  window.open(`${REACT_APP_API_HOME}/auth/logout`, '_self');
};

export const Logout = () => {
  return (
    <div className="logout">
      <Box
        borderRadius="2xl"
        boxShadow="2xl"
        alignItems="center"
        padding="50px"
      >
        <Heading textAlign="center" paddingBottom="10px">
          Log out of PrivateVoid?
        </Heading>
        <Text colorScheme={'gray'} maxW={'sm'} textAlign="center">
          You can always log back in at any time. If you just want to switch
          accounts, you can do that by adding an existing account.
        </Text>
        <Center>
          <Stack spacing={6} direction={'row'} paddingTop="20px">
            <Link to="/home">
              <Button rounded={'full'} px={6}>
                Cancel
              </Button>
            </Link>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'blue'}
              onClick={handleLogoutClick}
            >
              Log out
            </Button>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};
