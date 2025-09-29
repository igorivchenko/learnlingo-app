import { createSlice } from '@reduxjs/toolkit';
import { getTeachers } from './operations';

const initialState = {
  items: [],
  hasMore: true,
  lastVisibleDoc: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    resetList: state => {
      state.items = [];
      state.lastVisibleDoc = null;
      state.hasMore = true;
    },
  },
  extraReducers: build => {
    build
      .addCase(getTeachers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, ...payload.data];
        state.lastVisibleDoc = payload.lastVisibleDoc;
        state.hasMore = payload.hasMore;
      })
      .addCase(getTeachers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default slice.reducer;
export const { resetList } = slice.actions;
