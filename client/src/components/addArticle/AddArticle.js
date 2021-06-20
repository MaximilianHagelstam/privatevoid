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
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} onChange={onTitleChange} />
      <input
        type="text"
        name="description"
        value={description}
        onChange={onDescriptionChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
