import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const Home = () => {
  return (
    <div>
      <h1>Welcome to PrivateVoid</h1>
      <Link to="/logout">
        <Button colorScheme="green">Logout</Button>
      </Link>
    </div>
  );
};
