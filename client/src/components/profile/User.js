import React from 'react';
import './User.css';

import { UserCard } from './UserCard';

export const User = ({ username }) => {
  return (
    <div className="user">
      <UserCard username={username} />
    </div>
  );
};
