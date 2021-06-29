import React from 'react';

import { Layout } from '../common/layout/Layout';
import { User } from './User';

export const Profile = ({ match }) => {
  return (
    <Layout main={<User searchedUsername={match.params.searchedUsername} />} />
  );
};
