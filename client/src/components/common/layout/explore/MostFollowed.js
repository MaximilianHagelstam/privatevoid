import React, { useState, useEffect } from 'react';
import { Heading, Flex, Avatar, Text } from '@chakra-ui/react';

import './User.css';
import { fetchMostFollowed } from '../../../../util/api';

export const MostFollowed = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchMostFollowed()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Heading size="md" paddingBottom="10px">
        Most followed
      </Heading>
      {users.map((user) => {
        return (
          <div className="user" key={user.id}>
            <Avatar size="md" src={user.image_url} />
            <Flex flexDir="column" padding="10px">
              <Heading as="h3" size="sm">
                {user.display_name}
              </Heading>
              <Text color="gray">@{user.username}</Text>
            </Flex>
          </div>
        );
      })}
    </div>
  );
};
