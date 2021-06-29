import React from 'react';
import { Flex, Avatar, Heading, Text } from '@chakra-ui/react';
import './CurrentUser.css';

export const CurrentUser = ({ avatar, displayName, username }) => {
  return (
    <div className="currentUser">
      <Avatar size="md" src={avatar} />
      <Flex flexDir="column" padding="10px">
        <Heading as="h3" size="sm">
          {displayName}
        </Heading>
        <Text color="gray">@{username}</Text>
      </Flex>
    </div>
  );
};
