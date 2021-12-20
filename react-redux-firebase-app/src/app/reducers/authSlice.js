import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'User',
  initialState: {
    username: '',
    isLoggedIn: false,
    isLoggedOut: false,
    isMember: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    signUp: (state, action) => {
      state.isMember = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedOut = action.payload;
    },
    userName: (state, action) => {
      state.username = action.payload;
    }
  },
});

export const { login, logout, signUp, userName } = authSlice.actions;
export default authSlice.reducer;