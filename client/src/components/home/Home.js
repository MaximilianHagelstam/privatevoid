import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import { ToggleTheme } from './sidebar/ToggleTheme';

export const Home = () => {
  return (
    <div>
      <h1>Welcome to PrivateVoid</h1>
      <Link to="/logout">
        <Button colorScheme="purple">Logout</Button>
      </Link>
      <ToggleTheme />
    </div>
  );
};
