import React from 'react';
import { AppRouter } from './AppRouter';
import { Header } from './components/common/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};
