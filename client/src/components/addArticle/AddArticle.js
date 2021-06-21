import React, { useState } from 'react';
import { addArticle } from '../../util/api';

export const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addArticle({ title, description });
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h1>Add Article</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={onTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Description:
            </label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={description}
              onChange={onDescriptionChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Publish article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
