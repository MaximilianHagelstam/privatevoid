import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import './Settings.css';

import { fetchUser, editSettings } from '../../util/api';

export const Settings = () => {
  const toast = useToast();
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser()
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        if (resJson) {
          setUser(resJson);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
          placeholder={user.display_name}
          size="lg"
          onChange={(e) => setDisplayName(e.target.value)}
          rounded={'full'}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Bio</FormLabel>
        <Input
          type="text"
          placeholder={user.bio}
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
