import React from 'react';
import { Stack, Avatar, Text, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Comment.css';

export const Comment = ({
  message,
  username,
  displayName,
  date,
  avatar,
  postId,
}) => {
  return (
    <div className="comment">
      <Box maxW={'md'} w={'full'} rounded={'3xl'} p={4} overflow={'hidden'}>
        <Stack direction={'row'} spacing={4}>
          <Link to={`/user/${username}`}>
            <Avatar src={avatar} alt={'Author'} size="md" />
          </Link>
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
