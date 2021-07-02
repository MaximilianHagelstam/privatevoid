import React from 'react';

import { Layout } from '../common/layout/Layout';
import { MaximizePost } from './MaximizePost';

export const MaximizePostMatch = ({ match }) => {
  return (
    <Layout main={<MaximizePost postId={match.params.postId} />} title="Post" />
  );
};
