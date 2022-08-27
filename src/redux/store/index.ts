import { login } from '../slices';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {login}
});

export default store;