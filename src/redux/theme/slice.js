import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'system',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  selectors: {
    selectTheme: state => state.theme,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = slice.actions;
export const { selectTheme } = slice.selectors;
export default slice.reducer;
