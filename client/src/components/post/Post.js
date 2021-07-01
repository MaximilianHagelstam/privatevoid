import React, { useState, useEffect } from 'react';
import { Stack, Avatar, Text, Box, Heading } from '@chakra-ui/react';

import { fetchPostById } from '../../util/api';

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
      <Box maxW={'2xl'} w={'full'} rounded={'3xl'} p={6} overflow={'hidden'}>
        <Stack direction={'row'} spacing={4}>
          <Avatar src={postAuthorImage} alt={'Author'} size="md" />
          <Stack direction={'column'} spacing={0}>
            <Heading as="h3" size="sm">
              {postAuthorDisplayName}{' '}
              <Text as={'span'} color="gray" fontWeight="400">
                @{postAuthorUsername} · {postDate}
              </Text>
            </Heading>
            <Text fontSize="lg">{postMessage}</Text>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
