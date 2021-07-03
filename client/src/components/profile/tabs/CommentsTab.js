import React, { useState, useEffect } from 'react';

import {
  fetchCommentsByCreatorId,
  convertUsernameToId,
} from '../../../util/api';
import { Post } from '../../common/post';

export const CommentsTab = ({ authorUsername }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { authorId } = await convertUsernameToId(authorUsername);

      const fetchedComments = await fetchCommentsByCreatorId(authorId);

      setComments(fetchedComments);
    };
    fetchComments();
  }, [authorUsername]);

  return (
    <div>
      {comments.map((comment) => (
        <Post
          key={comment.id}
          postId={comment.id}
          message={comment.body}
          username={comment.user.username}
          date={comment.createdAt}
          displayName={comment.user.display_name}
          avatar={comment.user.image_url}
          type="comment"
        />
      ))}
    </div>
  );
};
