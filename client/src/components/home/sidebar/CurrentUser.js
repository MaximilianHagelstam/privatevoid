import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, Flex, Avatar, Heading, Text } from '@chakra-ui/react';
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
    <>
      <Divider />
      <Flex mt={4} align="center">
        <Avatar size="sm" src={user.image_url} />
        <Flex flexDir="column" ml={4}>
          <Heading as="h3" size="sm">
            {user.display_name}
          </Heading>
          <Text color="gray">@{user.username}</Text>
        </Flex>
      </Flex>
    </>
  );
};
