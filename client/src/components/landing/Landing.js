import React from 'react';

import { Hero } from './Hero';
import { LandingLayout } from './LandingLayout';

export const Landing = () => {
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
