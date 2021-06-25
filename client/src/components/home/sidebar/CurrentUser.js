import { Divider, Flex, Avatar, Heading, Text } from '@chakra-ui/react';

export const CurrentUser = () => {
  return (
    <>
      <Divider />
      <Flex mt={4} align="center">
        <Avatar
          size="sm"
          src="https://avatars.githubusercontent.com/u/49094247?v=4"
        />
        <Flex flexDir="column" ml={4}>
          <Heading as="h3" size="sm">
            John Doe
          </Heading>
          <Text color="gray">@Johndeez123</Text>
        </Flex>
      </Flex>
    </>
  );
};
