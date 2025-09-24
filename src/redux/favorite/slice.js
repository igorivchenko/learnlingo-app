import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFavoriteTeacher,
  getFavoriteTeachers,
  removeFavoriteTeacher,
} from './operations';

const slice = createSlice({
  name: 'favorite',
  initialState: {
    favoritesTeachers: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const isFav = state.favoritesTeachers.includes(payload);

      state.favoritesTeachers = isFav
        ? state.favoritesTeachers.filter(id => id !== payload)
        : [...state.favoritesTeachers, payload];
    },
    resetFavorites: state => {
      state.favoritesTeachers = [];
    },
  },
  extraReducers: build => {
    build
      .addCase(getFavoriteTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favoritesTeachers = payload;
      })
      .addCase(addFavoriteTeacher.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (!state.favoritesTeachers.includes(payload)) {
          state.favoritesTeachers.push(payload);
        }
      })
      .addCase(addFavoriteTeacher.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeFavoriteTeacher.fulfilled, (state, { payload }) => {
        state.favoritesTeachers = state.favoritesTeachers.filter(
          teacher => teacher.id !== payload
        );
        state.isLoading = false;
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

export const { toggleFavorite, resetFavorites } = slice.actions;

export default slice.reducer;
