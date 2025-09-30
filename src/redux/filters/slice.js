import { CONTEXTS } from '@/constants';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    languages: 'English',
    levels: 'A1 Beginner',
    price_per_hour: '30',
    limit: 4,
    sortBy: 'name',
    direction: 'asc',
  },
  favoritesFilters: {
    languages: '',
    levels: '',
    price_per_hour: '',
    limit: 4,
    sortBy: 'name',
    direction: 'asc',
  },
  currentContext: CONTEXTS.TEACHERS,
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload };
    },
    resetFilters: state => {
      state.filters = initialState.filters;
    },
    setFavoritesFilter: (state, { payload }) => {
      state.favoritesFilters = { ...state.favoritesFilters, ...payload };
    },
    resetFavoritesFilters: state => {
      state.favoritesFilters = initialState.favoritesFilters;
    },
    setCurrentContext: (state, action) => {
      state.currentContext = action.payload;
    },
  },
});

export default slice.reducer;
export const {
  setFilters,
  setFavoritesFilter,
  resetFilters,
  resetFavoritesFilters,
  setCurrentContext,
} = slice.actions;
