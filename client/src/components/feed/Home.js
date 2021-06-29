import React from 'react';
import { Layout } from '../common/layout/Layout';
import { Feed } from './Feed';

export const Home = () => {
  return <Layout main={<Feed />} />;
};
