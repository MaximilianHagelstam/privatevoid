import React from 'react';
import { Stack, Avatar, Text, Box, Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
  size,
  type,
}) => {
  return (
    <div className="post">
      {type === 'comment' ? (
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
      ) : (
        <Box maxW={'md'} w={'full'} rounded={'3xl'} p={4} overflow={'hidden'}>
          <Stack direction={'row'} spacing={4}>
            <Link to={`/user/${username}`}>
              <Avatar
                src={avatar}
                alt={'Author'}
                size={size === 'big' ? 'lg' : 'md'}
              />
            </Link>
            <Stack direction={'column'} spacing={0}>
              <Link to={`/post/${postId}`}>
                <Heading as="h3" size={size === 'big' ? 'md' : 'sm'}>
                  {displayName}{' '}
                  <Text as={'span'} color="gray" fontWeight="400">
                    @{username} · {date}
                  </Text>
                </Heading>
                <Text fontSize="lg">{message}</Text>
              </Link>
              <HStack spacing="24px" paddingTop="4px">
                <CommentButton postId={postId} />
                <LikeButton postId={postId} />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      )}
    </div>
  );
};
