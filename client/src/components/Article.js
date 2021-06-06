import React from 'react';

const Article = ({ articles }) => {
  return (
    <div>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div>
          <div>
            <h3>Title: {article.title}</h3>
            <h3>Description: {article.description}</h3>
            <hr></hr>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
