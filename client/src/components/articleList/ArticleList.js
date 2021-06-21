import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getArticles } from '../../util/api';

export const ArticelsList = () => {
  const [articles, setArtices] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getArticles();
      setArtices(fetchedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h1>Articles</h1>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.description}</td>
                {/* <td>
                  <Link to={`/edit/${article.id}`}>Edit</Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
