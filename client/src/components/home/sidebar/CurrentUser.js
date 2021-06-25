import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Avatar, Heading, Text } from '@chakra-ui/react';
import { fetchUser } from '../../../util/api';

export const CurrentUser = () => {
  let history = useHistory();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser()
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          history.push('/login');
        }
      })
      .then((resJson) => {
        if (resJson) {
          setUser(resJson);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [history]);

  return (
    <Flex mt={4} align="center" position="absolute" bottom="0">
      <Avatar size="md" src={user.image_url} />
      <Flex flexDir="column" padding="10px">
        <Heading as="h3" size="sm">
          {user.display_name}
        </Heading>
        <Text color="gray">@{user.username}</Text>
      </Flex>
    </Flex>
  );
};
