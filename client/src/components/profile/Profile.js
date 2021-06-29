import React from 'react';

import { Layout } from '../common/layout/Layout';
import { User } from './User';

export const Profile = () => {
  return <Layout main={<User />} />;
};
