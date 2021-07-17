import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import './User.css';
import { fetchMostLiked } from '../../../../util/api';
import { Post } from '../../post';

export const MostLiked = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchMostLiked()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Heading size="md" paddingBottom="10px">
        Most liked
      </Heading>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            message={post.message}
            username={post.user.username}
            avatar={post.user.image_url}
            postId={post.id}
          />
        );
      })}
    </div>
  );
};
