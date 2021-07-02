import React, { useState, useEffect } from 'react';

import { fetchPostsByAuthorId, convertUsernameToId } from '../../../util/api';
import { Post } from '../../common/post/index';

export const PostsTab = ({ authorUsername }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { authorId } = await convertUsernameToId(authorUsername);

      const fetchedPosts = await fetchPostsByAuthorId(authorId);

      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, [authorUsername]);

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
