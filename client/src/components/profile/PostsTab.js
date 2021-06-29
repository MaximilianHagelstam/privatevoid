import React, { useState, useEffect } from 'react';

import { fetchPostsByAuthorId, convertUsernameToId } from '../../util/api';

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
        <div key={post.id}>
          <p>{post.message}</p>
        </div>
      ))}
      <p>penis</p>
    </div>
  );
};
