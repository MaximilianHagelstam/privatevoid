import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import './Settings.css';

import { editSettings } from '../../util/api';

export const Settings = () => {
  const toast = useToast();
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    editSettings({ displayName: displayName, bio: bio });

    toast({
      title: 'Settings saved.',
      description: `Your new display name is '${displayName}' and your new bio is '${bio}'`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <form className="settings" onSubmit={onSubmit}>
      <FormControl mt={4}>
        <FormLabel>Display Name</FormLabel>
        <Input
          type="text"
          size="lg"
          onChange={(e) => setDisplayName(e.target.value)}
          rounded={'full'}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Bio</FormLabel>
        <Input
          type="text"
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
