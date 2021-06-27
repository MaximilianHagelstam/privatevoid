import { Stack, Avatar, Text, Box, Heading } from '@chakra-ui/react';
import './Post.css';

export const Post = ({ message, username, displayName, date, avatar }) => {
  return (
    <div className="post">
      <Box
        maxW={'2xl'}
        w={'full'}
        boxShadow="md"
        rounded={'3xl'}
        p={6}
        overflow={'hidden'}
      >
        <Stack direction={'row'} spacing={4}>
          <Avatar src={avatar} alt={'Author'} size="md" />
          <Stack direction={'column'} spacing={0}>
            <Heading as="h3" size="sm">
              {displayName}{' '}
              <Text as={'span'} color="gray" fontWeight="400">
                @{username} · {date}
              </Text>
            </Heading>

            <Text fontSize="lg">{message}</Text>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
