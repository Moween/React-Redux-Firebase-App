import { createSlice } from '@reduxjs/toolkit';

const createPostSlice = createSlice({
  name: 'Create_Post',
  initialState: {
    post: {
      title: '',
      details: '',
      venue: '',
      eventType: '',
      date: null,
    }
  },

  reducers: {
    createPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { createPost } = createPostSlice.actions;
export default createPostSlice.reducer;
