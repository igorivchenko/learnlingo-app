import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';
import themeReducer from './theme/slice';
import teachersReducer from './teachers/slice';
import favoriteReducer from './favorite/slice';

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['accessToken'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};
const favoritePersistConfig = {
  key: 'favorite',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    // filters: filtersReducer,
    teachers: teachersReducer,
    favorite: persistedFavoriteReducer,
    theme: persistedThemeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
