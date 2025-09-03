import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser } from './operations';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
  },
  favoriteTeachers: [],
  isLoggedIn: false,
  error: null,
  isLoading: false,
  token: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: build => {
    build
      .addCase(signUpUser.pending, state => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = {
          name: payload.name,
          email: payload.email,
          id: payload.id,
        };
        state.token = payload.token;
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(signInUser.pending, state => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.user = {
          name: payload.name,
          email: payload.email,
          id: payload.id,
        };
        state.token = payload.token;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload.message;
      });
  },
});

export default slice.reducer;
