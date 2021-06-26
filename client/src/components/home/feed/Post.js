import { Center, Stack, Avatar, Text, Box, Heading } from '@chakra-ui/react';

export const Post = ({ message, author }) => {
  return (
    <Center>
      <Box
        maxW={'445px'}
        w={'full'}
        borderWidth="1px"
        rounded={'3xl'}
        p={6}
        overflow={'hidden'}
      >
        <Stack direction={'row'} spacing={4}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
            size="md"
          />
          <Stack direction={'column'} spacing={0}>
            <Heading as="h3" size="sm">
              John Doe{' '}
              <Text as={'span'} color="gray" fontWeight="400">
                @{author} · 24/6/2021
              </Text>
            </Heading>

            <Text fontSize="lg">{message}</Text>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Box>
    </Center>
  );
};
