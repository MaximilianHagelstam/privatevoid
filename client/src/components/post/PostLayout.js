import React from 'react';

import { Layout } from '../common/layout/Layout';
import { Post } from './Post';

export const PostLayout = ({ match }) => {
  return <Layout main={<Post postId={match.params.postId} />} />;
};
