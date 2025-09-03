import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    // filters: filtersReducer,
    // teachers: teachersReducer,
    auth: authReducer,
  },
});
