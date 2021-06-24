import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Hero } from './Hero';
import { LandingLayout } from './LandingLayout';

export const Landing = () => {
  let history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8080/api/current-user', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log('You are logged in');
        history.push('/home');
      }
    });
  }, [history]);

  return (
    <LandingLayout>
      <Hero
        title="Welcome to PrivateVoid"
        subtitle="Sign in with GitHub and start connecting with other like minded developers"
      />
    </LandingLayout>
  );
};
