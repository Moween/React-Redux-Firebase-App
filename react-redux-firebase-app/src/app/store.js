import { configureStore } from '@reduxjs/toolkit';
import mediaQuerySlice from './reducers/mediaQuerySlice';
import authSlice from './reducers/authSlice';
import createPostSlice from './reducers/createPostSlice'

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQuerySlice,
    auth: authSlice,
    createPost: createPostSlice,
  },
});
