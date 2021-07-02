import React, { useState, useEffect } from 'react';

import { fetchPosts } from '../../util/api';
import { Post } from '../common/post/index';

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          message={post.message}
          username={post.user.username}
          date={post.createdAt}
          displayName={post.user.display_name}
          avatar={post.user.image_url}
        />
      ))}
    </div>
  );
};
