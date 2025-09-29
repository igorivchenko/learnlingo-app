import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  doc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  collection,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';

import { handleHttpError } from '@/utils/handleHttpError';
import { db } from '@/config/firebase.config';

export const addFavoriteTeacher = createAsyncThunk(
  'favorite/addFavoriteTeacher',
  async ({ userId, teacherId }, { rejectWithValue }) => {
    try {
      const teacherRef = doc(db, 'teachers', teacherId);
      const teacherSnap = await getDoc(teacherRef);

      if (!teacherSnap.exists()) {
        throw new Error('Teacher is not found');
      }

      const teacherFullData = teacherSnap.data();
      const favoriteRef = doc(db, 'users', userId, 'favorites', teacherId);
      const teacher = {
        teacherId,
        ...teacherFullData,
      };

      await setDoc(favoriteRef, teacher);

      return {
        id: teacherId,
        ...teacherFullData,
      };
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);

export const removeFavoriteTeacher = createAsyncThunk(
  'favorite/removeFavoriteTeacher',
  async ({ userId, teacherId }, { rejectWithValue }) => {
    try {
      const favoriteRef = doc(db, `users/${userId}/favorites/${teacherId}`);

      await deleteDoc(favoriteRef);

      return teacherId;
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);

export const getFavoriteTeachers = createAsyncThunk(
  'teachers/getFavoriteTeachers',
  async (
    { userId, filters = {}, lastVisibleDoc = null },
    { rejectWithValue }
  ) => {
    try {
      const {
        languages,
        levels,
        price_per_hour,
        sortBy = 'name',
        direction = 'asc',
        limit: limitValue = 4,
      } = filters;
      let teachersQuery = query(collection(db, `users/${userId}/favorites`));

      if (languages) {
        teachersQuery = query(
          teachersQuery,
          where('languages', 'array-contains', languages)
        );
      }

      if (price_per_hour) {
        teachersQuery = query(
          teachersQuery,
          where('price_per_hour', '<=', Number(price_per_hour))
        );
      }

      teachersQuery = query(
        teachersQuery,
        orderBy(sortBy, direction),
        limit(limitValue + 1)
      );

      if (lastVisibleDoc) {
        const lastDocRef = doc(db, `users/${userId}/favorites`, lastVisibleDoc);
        const lastDocSnap = await getDoc(lastDocRef);
        if (lastDocSnap.exists())
          teachersQuery = query(teachersQuery, startAfter(lastDocSnap));
      }

      const snapshot = await getDocs(teachersQuery);

      let teachers = snapshot.docs.slice(0, limitValue).map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (levels?.length) {
        const levelsArray = Array.isArray(levels) ? levels : [levels];

        teachers = teachers.filter(t =>
          t.levels?.some(l => levelsArray.includes(l))
        );
      }

      const hasMore = snapshot.docs.length > limitValue;

      const newLastVisibleDoc =
        snapshot.docs.length > 0 ? snapshot.docs[limitValue - 1]?.id : null;

      return {
        data: teachers,
        lastVisibleDoc: newLastVisibleDoc,
        limit: limitValue,
        hasMore,
      };
    } catch (err) {
      console.error('Error in getTeachers:', err);
      return rejectWithValue(handleHttpError(err));
    }
  }
);
