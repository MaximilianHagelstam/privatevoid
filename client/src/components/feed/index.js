import React, { useState, useEffect } from 'react';

import { fetchFollowedPosts } from '../../util/api';
import { Post } from '../common/post/index';
import { NoFollows } from './NoFollows';

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchFollowedPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <NoFollows />
      ) : (
        <div>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                postId={post.id}
                message={post.message}
                username={post.user.username}
                date={post.createdAt}
                displayName={post.user.display_name}
                avatar={post.user.image_url}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
