import React, { useState, useEffect } from 'react';
import { Stack, Avatar, Text, Box, Heading, HStack } from '@chakra-ui/react';

import { fetchPostById } from '../../util/api';
import { CommentButton } from './CommentButton';
import { LikeButton } from './LikeButton';

export const Post = ({ postId }) => {
  const [postMessage, setPostMessage] = useState('');
  const [postAuthorImage, setPostAuthorImage] = useState('');
  const [postAuthorDisplayName, setPostAuthorDisplayName] = useState('');
  const [postAuthorUsername, setPostAuthorUsername] = useState('');
  const [postDate, setPostDate] = useState('');

  useEffect(() => {
    fetchPostById(postId).then((res) => {
      setPostMessage(res.message);
      setPostAuthorImage(res.user.image_url);
      setPostAuthorDisplayName(res.user.display_name);
      setPostAuthorUsername(res.user.username);
      setPostDate(res.createdAt);
    });
  }, [postId]);

  return (
    <div className="post">
      <Box maxW={'xl'} w={'full'} rounded={'3xl'} p={6} overflow={'hidden'}>
        <Stack direction={'row'} spacing={4}>
          <Avatar src={postAuthorImage} alt={'Author'} size="lg" />
          <Stack direction={'column'} spacing={0}>
            <Heading as="h3" size="md">
              {postAuthorDisplayName}{' '}
              <Text as={'span'} color="gray" fontWeight="400">
                @{postAuthorUsername} · {postDate}
              </Text>
            </Heading>
            <Text fontSize="xl">{postMessage}</Text>
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
