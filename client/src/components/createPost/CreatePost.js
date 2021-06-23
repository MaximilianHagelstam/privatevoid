import React, { useState } from 'react';
import { createPost } from '../../util/api';

export const CreatePost = () => {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createPost({ message });
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h1>Create Post</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Message
            </label>
            <input
              className="form-control"
              type="text"
              name="message"
              value={message}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
