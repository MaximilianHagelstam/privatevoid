import React, { useState, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';

import { getPosts } from '../../../util/api';
import { Post } from './Post';

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Stack spacing={6} alignItems="center" position="relative">
      {posts.map((post) => (
        <Post key={post.id} message={post.message} author={post.author_id} />
      ))}
    </Stack>
  );
};
