import { configureStore } from '@reduxjs/toolkit';
import { AdReducer } from './Reducers';

const Store = configureStore({
  reducer: { AdReducer },
});

export default Store;
