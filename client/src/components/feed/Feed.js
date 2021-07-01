import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPosts } from '../../util/api';
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
    <div>
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}>
          <Post
            key={post.id}
            postId={post.id}
            message={post.message}
            username={post.user.username}
            date={post.createdAt}
            displayName={post.user.display_name}
            avatar={post.user.image_url}
          />
        </Link>
      ))}
    </div>
  );
};
