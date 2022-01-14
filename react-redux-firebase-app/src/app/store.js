import { configureStore } from '@reduxjs/toolkit';
import createPostSlice from '../reducers/createPostSlice';
import {
  firebaseReducer,
  
} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export const store = configureStore({
  reducer: {
    createPost: createPostSlice,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
