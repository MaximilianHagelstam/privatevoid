import React, { useState, useEffect } from 'react';

import { fetchPostById } from '../../util/api';
import { Post } from '../common/post';

export const MaximizePost = ({ postId }) => {
  const [postMessage, setPostMessage] = useState('');
  const [postAuthorImage, setPostAuthorImage] = useState('');
  const [postAuthorDisplayName, setPostAuthorDisplayName] = useState('');
  const [postAuthorUsername, setPostAuthorUsername] = useState('');
  const [postDate, setPostDate] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPostById(postId).then((res) => {
      setPostMessage(res.message);
      setPostAuthorImage(res.user.image_url);
      setPostAuthorDisplayName(res.user.display_name);
      setPostAuthorUsername(res.user.username);
      setPostDate(res.createdAt);
      setComments(res.comments);
    });
  }, [postId]);

  return (
    <div>
      <Post
        message={postMessage}
        username={postAuthorUsername}
        displayName={postAuthorDisplayName}
        date={postDate}
        avatar={postAuthorImage}
        postId={postId}
        size="big"
      />

      {comments.map((comment) => (
        <Post
          key={comments.id}
          message={comment.body}
          username={comment.user.username}
          displayName={comment.user.display_name}
          date={comment.createdAt}
          avatar={comment.user.image_url}
          type="comment"
        />
      ))}
    </div>
  );
};
