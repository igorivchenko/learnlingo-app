import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signInUser, signOutUser, signUpUser } from './operations';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
  },
  favoriteTeachers: [],
  isAuth: false,
  error: null,
  isLoading: false,
  accessToken: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: build => {
    build
      .addCase(signOutUser.fulfilled, state => {
        return {
          ...initialState,
          favoriteTeachers: state.favoriteTeachers,
        };
      })
      .addMatcher(
        isAnyOf(signUpUser.pending, signInUser.pending, signOutUser.pending),
        state => {
          state.isLoading = true;
          state.isAuth = false;
        }
      )
      .addMatcher(
        isAnyOf(signUpUser.fulfilled, signInUser.fulfilled),
        (state, { payload }) => {
          state.isLoading = false;
          state.isAuth = true;
          state.error = null;
          state.user = {
            name: payload.name,
            email: payload.email,
            id: payload.id,
          };
          state.accessToken = payload.token;
        }
      )
      .addMatcher(
        isAnyOf(signUpUser.rejected, signInUser.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.isAuth = false;
          state.error = payload;
        }
      );
  },
});

export default slice.reducer;
