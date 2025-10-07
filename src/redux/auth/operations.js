import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';

import { handleHttpError } from '@/utils/handleHttpError';
import { auth, db, googleProvider } from '@/config/firebase.config';

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

      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
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

      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.exists() ? userSnap.data() : {};

      return {
        name: user.displayName,
        email: user.email,
        id: user.uid,
        token: await user.getIdToken(),
        ...userData,
      };
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);

export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      const token = await user.getIdToken();
      const userRef = doc(db, 'users', user.uid);

      const userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };

      await setDoc(userRef, userData, { merge: true });

      return { id: user.uid, token, ...userData };
    } catch (error) {
      return rejectWithValue(error.message);
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
