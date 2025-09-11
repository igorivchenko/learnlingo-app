import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute';
import Loader from './Loader';
import { AnimatePresence } from 'motion/react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const TeachersPage = lazy(() => import('@/pages/TeachersPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.TEACHERS} element={<TeachersPage />} />
        <Route
          path={ROUTES.FAVORITES}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
