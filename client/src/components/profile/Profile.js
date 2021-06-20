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
    <div>
      {!authenticated ? (
        <h1>You are logged out</h1>
      ) : (
        <div>
          <h1>Name: {user.displayName}</h1>
          <h1>Id: {user.githubId}</h1>
        </div>
      )}
    </div>
  );
};
