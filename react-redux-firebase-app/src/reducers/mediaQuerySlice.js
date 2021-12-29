import { createSlice } from '@reduxjs/toolkit';

const mediaQuerySlice = createSlice({
  name: 'MediaQuery',
  initialState: {
    smallScreen: '',
    mediumScreen: '',
    largeScreen: '',
  },

  reducers: {
    setSmallScreen: (state, action) => {
      state.smallScreen = action.payload;
    },
    setMediumScreen: (state, action) => {
      state.mediumScreen = action.payload;
    },
    setLargeScreen: (state, action) => {
      state.mediumScreen = action.payload;
    },
  },
});

export const { setSmallScreen, setMediumScreen, setLargeScreen } =
  mediaQuerySlice.actions;
export default mediaQuerySlice.reducer;
