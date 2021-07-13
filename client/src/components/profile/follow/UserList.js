import React from 'react';
import { Flex, Avatar, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const UserList = ({ avatar, displayName, username }) => {
  return (
    <Link to={`/user/${username}`}>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <Avatar size="md" src={avatar} />
        <Flex flexDir="column" padding="10px">
          <Heading as="h3" size="sm">
            {displayName}
          </Heading>
          <Text color="gray">@{username}</Text>
        </Flex>
      </div>
    </Link>
  );
};
