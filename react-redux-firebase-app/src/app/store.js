import { configureStore } from '@reduxjs/toolkit';
import {
  firebaseReducer,
  
} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
