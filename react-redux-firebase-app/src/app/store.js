import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../reducers/authSlice';
import createPostSlice from '../reducers/createPostSlice';
import {
  firebaseReducer,
  actionTypes,
} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    createPost: createPostSlice,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR],
      },
    }),
});
