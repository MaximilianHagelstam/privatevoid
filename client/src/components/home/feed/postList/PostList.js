import React, { useState, useEffect } from 'react';
import { getPosts } from '../../../../util/api';

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h1>Posts</h1>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Message</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.message}</td>
                <td>Bob Bobber</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
