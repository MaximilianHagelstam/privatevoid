import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import './Settings.css';

import {} from '../../util/api';

export const Settings = () => {
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');

  const onSubmit = (e) => {
    // e.preventDefault();

    // createPost({ displayName: displayName bio: bio });

    // setDisplayName('');
    // setBio('');

    alert(`Display Name: ${displayName} Bio: ${bio}`);
  };

  return (
    <form className="settings" onSubmit={onSubmit}>
      <FormControl mt={4}>
        <FormLabel>Display Name</FormLabel>
        <Input
          type="text"
          placeholder="Peter"
          size="lg"
          onChange={(e) => setDisplayName(e.target.value)}
          rounded={'full'}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Bio</FormLabel>
        <Input
          type="text"
          placeholder="Yo Yo"
          size="lg"
          onChange={(e) => setBio(e.target.value)}
          rounded={'full'}
        />
      </FormControl>
      <Button colorScheme="blue" type="submit" rounded={'full'} mt={6}>
        Save
      </Button>
    </form>
  );
};
