import React from 'react';

import { Layout } from '../common/layout/Layout';
import { Profile } from './Profile';

export const ProfileMatch = ({ match }) => {
  return (
    <Layout
      main={<Profile searchedUsername={match.params.searchedUsername} />}
      title="Profile"
    />
  );
};
