import React, { useState, useEffect } from 'react';

import { fetchPostsByAuthorId, convertUsernameToId } from '../../../util/api';
import { Post } from '../../common/post';

export const CommentsTab = ({ authorUsername }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { authorId } = await convertUsernameToId(authorUsername);

      const fetchedPosts = await fetchPostsByAuthorId(authorId);

      setComments(fetchedPosts);
    };
    fetchComments();
  }, [authorUsername]);

  return (
    <div>
      {comments.map((comment) => (
        <Post
          key={comment.id}
          postId={comment.id}
          message={comment.message}
          username={comment.user.username}
          date={comment.createdAt}
          displayName={comment.user.display_name}
          avatar={comment.user.image_url}
        />
      ))}
    </div>
  );
};
