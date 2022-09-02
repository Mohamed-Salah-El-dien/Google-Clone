import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from './searchApi';
import reduxSlice from './reduxSlice';

const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    mode: reduxSlice.reducer,
  },
});

export default store;
