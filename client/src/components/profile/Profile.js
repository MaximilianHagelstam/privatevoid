import React, { useState, useEffect } from 'react';

import { fetchUser } from '../../util/api';

export const Profile = () => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetchUser()
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log('User not authenticated');
        }
      })
      .then((resJson) => {
        if (resJson) {
          setAuthenticated(true);
          setUser(resJson);
        } else {
          setAuthenticated(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        {!authenticated ? (
          <h1>You are logged out</h1>
        ) : (
          <div>
            <h1>Profile</h1>
            <img src={user.image_url} alt="Profile"></img>
            <h5>Id: {user.id}</h5>
            <h5>Name: {user.display_name}</h5>
            <h5>Username: @{user.username}</h5>
            <h5>Bio: {user.bio}</h5>
          </div>
        )}
      </div>
    </div>
  );
};
