import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFavoriteTeacher,
  getFavoriteTeachers,
  removeFavoriteTeacher,
} from './operations';

const initialState = {
  favoriteTeachers: [],
  hasMore: true,
  lastVisibleDoc: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    resetFavoritesTeachers: state => {
      state.favoriteTeachers = [];
      state.lastVisibleDoc = null;
      state.hasMore = true;
      state.lastActionType = null;
    },
  },
  extraReducers: build => {
    build
      .addCase(getFavoriteTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteTeachers = [...state.favoriteTeachers, ...payload.data];
        state.lastVisibleDoc = payload.lastVisibleDoc;
        state.hasMore = payload.hasMore;
      })
      .addCase(addFavoriteTeacher.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteTeachers.push(payload);
      })
      .addCase(removeFavoriteTeacher.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteTeachers = state.favoriteTeachers.filter(
          teacher => teacher.id !== payload
        );
      })
      .addMatcher(
        isAnyOf(getFavoriteTeachers.pending, addFavoriteTeacher.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getFavoriteTeachers.rejected,
          addFavoriteTeacher.rejected,
          removeFavoriteTeacher.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { resetFavoritesTeachers } = slice.actions;

export default slice.reducer;
