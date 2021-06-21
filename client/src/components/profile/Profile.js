import React, { useState, useEffect } from 'react';
import { fetchUser } from '../../util/api';

export const Profile = () => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetchUser()
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log('User not authenticated');
        }
      })
      .then((responseJson) => {
        if (responseJson) {
          setAuthenticated(true);
          setUser(responseJson);
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
            <h5>Name: {user.displayName}</h5>
            <h5>Id: {user.githubId}</h5>
          </div>
        )}
      </div>
    </div>
  );
};
