import { Header } from '../common/Header';
import React, { useState, useEffect } from 'react';

const fetchUser = () => {
  const user = fetch('http://localhost:8080/auth/user', {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  });

  return user;
};

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
