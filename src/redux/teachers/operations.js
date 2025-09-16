import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '@/config/firebase.config';
import {
  getDocs,
  query,
  collection,
  orderBy,
  startAfter,
  limit,
  getDoc,
  doc,
} from 'firebase/firestore';
import { handleHttpError } from '@/utils/handleHttpError.js';

const teachersCollectionRef = collection(db, 'teachers');

export const getTeachers = createAsyncThunk(
  'teachers/getAll',
  async ({ filters = {}, lastVisibleDoc = null }, { rejectWithValue }) => {
    const {
      limit: limitValue = 4,
      sortBy = 'name',
      direction = 'asc',
    } = filters;

    try {
      let teachersQuery = query(
        teachersCollectionRef,
        orderBy(sortBy, direction),
        limit(limitValue)
      );

      if (lastVisibleDoc) {
        const lastVisibleDocRef = doc(db, 'teachers', lastVisibleDoc);
        const lastVisibleDocSnapshot = await getDoc(lastVisibleDocRef);

        if (lastVisibleDocSnapshot.exists()) {
          teachersQuery = query(
            teachersQuery,
            startAfter(lastVisibleDocSnapshot)
          );
        }
      }

      const snapshot = await getDocs(teachersQuery);

      const teachers = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      const newLastVisibleDoc =
        snapshot.docs[snapshot.docs.length - 1]?.id || null;

      return {
        data: teachers,
        lastVisibleDoc: newLastVisibleDoc,
        limit: limitValue,
      };
    } catch (err) {
      return rejectWithValue(handleHttpError(err));
    }
  }
);
