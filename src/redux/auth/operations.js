import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { handleHttpError } from '@/utils/handleHttpError';
import { auth, db } from '@/config/firebase.config';

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (cred, { rejectWithValue }) => {
    try {
      const { name, email, password } = cred;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, { displayName: name });

      const user = userCredential.user;

      await set(ref(db, `users/${user.uid}`), {
        name: user.displayName,
        email: user.email,
        favorites: [],
      });

      return {
        name: user.displayName,
        email: user.email,
        id: user.uid,
        token: await user.getIdToken(),
      };
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);

export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (cred, { rejectWithValue }) => {
    try {
      const { email, password } = cred;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      return {
        name: user.displayName,
        email: user.email,
        id: user.uid,
        token: await user.getIdToken(),
      };
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);

export const signOutUser = createAsyncThunk(
  'auth/signOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);
