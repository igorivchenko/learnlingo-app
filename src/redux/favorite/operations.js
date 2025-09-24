import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

import { handleHttpError } from '@/utils/handleHttpError';
import { db } from '@/config/firebase.config';

export const addFavoriteTeacher = createAsyncThunk(
  'favorite/addFavoriteTeacher',
  async ({ userId, teacherId }, rejectWithValue) => {
    try {
      const userRef = doc(db, 'users', userId);
      const teacherRef = doc(db, 'teachers', teacherId);
      const teacherSnap = await getDoc(teacherRef);

      if (!teacherSnap.exists()) {
        throw new Error('Teacher is not found');
      }

      const teacherFullData = teacherSnap.data();
      const teacher = {
        id: teacherId,
        ...teacherFullData,
      };

      await updateDoc(userRef, {
        favorites: arrayUnion(teacher),
      });

      return teacher;
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);

export const removeFavoriteTeacher = createAsyncThunk(
  'favorite/removeFavoriteTeacher',
  async ({ userId, teacherId }, { rejectWithValue }) => {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        throw new Error('User not found');
      }

      const userData = userSnap.data();
      const updatedFavorites = (userData.favorites || []).filter(
        fav => fav.id !== teacherId
      );

      await updateDoc(userRef, {
        favorites: updatedFavorites,
      });

      return teacherId;
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);

export const getFavoriteTeachers = createAsyncThunk(
  'favorite/getFavoriteTeachers',
  async (userId, { rejectWithValue }) => {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) return [];

      const favorites = userSnap.data()?.favorites || [];

      return favorites;
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);
