import React, { useState, useEffect } from 'react';

import { fetchLikesByCreatorId, convertUsernameToId } from '../../../util/api';
import { Post } from '../../common/post';

export const LikeTab = ({ authorUsername }) => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchLikes = async () => {
      const { authorId } = await convertUsernameToId(authorUsername);

      const fetchedLikes = await fetchLikesByCreatorId(authorId);

      setLikes(fetchedLikes);
    };
    fetchLikes();
  }, [authorUsername]);

  return (
    <div>
      {likes.map((like) => (
        <Post
          key={like.post_id}
          postId={like.post_id}
          message={like.post.message}
          username={like.post.user.username}
          date={like.post.createdAt}
          displayName={like.post.user.display_name}
          avatar={like.post.user.image_url}
        />
      ))}
    </div>
  );
};
