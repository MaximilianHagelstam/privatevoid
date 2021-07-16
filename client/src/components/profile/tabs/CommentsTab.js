import React, { useState, useEffect } from 'react';

import {
  fetchCommentsByCreatorId,
  convertUsernameToId,
} from '../../../util/api';
import { Post } from '../../common/post';
import { Comment } from '../../common/comment';

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
      {comments.map((comment, index) => (
        <div>
          <Post
            key={index}
            postId={comment.post.id}
            message={comment.post.message}
            username={comment.post.user.username}
            date={comment.post.createdAt}
            displayName={comment.post.user.display_name}
            avatar={comment.post.user.image_url}
            size="big"
          />

          <Comment
            key={comment.id}
            postId={comment.id}
            message={comment.body}
            username={comment.user.username}
            date={comment.createdAt}
            displayName={comment.user.display_name}
            avatar={comment.user.image_url}
          />
        </div>
      ))}
    </div>
  );
};
