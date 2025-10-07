import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import BackToTop from './ScrollToTop';
import MainLayout from './Layouts/MainLayout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const TeachersPage = lazy(() => import('@/pages/TeachersPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
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
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <BackToTop />
    </>
  );
}

export default App;
