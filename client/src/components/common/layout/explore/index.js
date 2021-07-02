import React from 'react';
import { Input } from '@chakra-ui/react';

import './Explore.css';

export const Explore = () => {
  return (
    <div className="explore">
      <div className="explore__input">
        <Input
          rounded={'full'}
          size="lg"
          type="text"
          placeholder="Search PrivateVoid"
        />
      </div>
      <div className="explore__widget">Hello team</div>
    </div>
  );
};
