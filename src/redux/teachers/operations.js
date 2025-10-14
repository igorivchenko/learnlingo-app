import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '@/config/firebase.config';
import {
  getDocs,
  query,
  collection,
  orderBy,
  startAfter,
  limit,
  where,
  getDoc,
  doc,
} from 'firebase/firestore';
import { handleHttpError } from '@/utils/handleHttpError.js';

const teachersCollectionRef = collection(db, 'teachers');

export const getTeachers = createAsyncThunk(
  'teachers/getAll',
  async ({ filters = {}, lastVisibleDoc = null }, { rejectWithValue }) => {
    try {
      const {
        languages,
        levels,
        price_per_hour,
        sortBy = 'name',
        direction = 'asc',
        limit: limitValue = 4,
      } = filters;

      let teachersQuery = query(teachersCollectionRef);

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
        const lastDocRef = doc(db, 'teachers', lastVisibleDoc);
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
      return rejectWithValue(handleHttpError(err));
    }
  }
);
