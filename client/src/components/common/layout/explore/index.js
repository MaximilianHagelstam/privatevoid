import React from 'react';
import './Explore.css';
import './User.css';

import { MostFollowed } from './MostFollowed';
import { MostLiked } from './MostLiked';

export const Explore = () => {
  return (
    <div className="explore">
      <div className="widget">
        <MostFollowed />
      </div>
      <div className="widget">
        <MostLiked />
      </div>
    </div>
  );
};
