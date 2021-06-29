import React from 'react';
import { Stack, Avatar, Text, Box, Heading, HStack } from '@chakra-ui/react';
import './Post.css';

import { CommentButton } from './CommentButton';
import { LikeButton } from './LikeButton';

export const Post = ({
  message,
  username,
  displayName,
  date,
  avatar,
  postId,
}) => {
  return (
    <div className="post">
      <Box maxW={'2xl'} w={'full'} rounded={'3xl'} p={6} overflow={'hidden'}>
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
            <HStack spacing="24px" paddingTop="6px">
              <CommentButton postId={postId} />
              <LikeButton />
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};