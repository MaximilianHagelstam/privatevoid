import React from 'react';

import { AppRouter } from './AppRouter';
import { ToggleTheme } from './ToggleTheme';

export const App = () => {
  return (
    <div>
      <AppRouter />
      <ToggleTheme />
    </div>
  );
};
