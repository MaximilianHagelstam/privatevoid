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
        image="https://images.unsplash.com/photo-1543805926-214b3603a158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0NTIyNjk3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
      />
    </LandingLayout>
  );
};
