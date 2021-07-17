import React from 'react';
import { Heading, Flex, Avatar, Text } from '@chakra-ui/react';

import './User.css';

export const MostFollowed = () => {
  return (
    <div>
      <Heading size="md" paddingBottom="10px">
        Most followed
      </Heading>
      <div className="user">
        <Avatar
          size="md"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWAgICQdD0xAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
        />
        <Flex flexDir="column" padding="10px">
          <Heading as="h3" size="sm">
            James
          </Heading>
          <Text color="gray">@JamesDeez</Text>
        </Flex>
      </div>
    </div>
  );
};
