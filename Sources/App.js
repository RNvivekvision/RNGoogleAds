import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './Navigation';
import { Store } from './Redux';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
