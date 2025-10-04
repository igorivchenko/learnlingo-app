import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import BackToTop from './ScrollToTop';
import SettingsModal from './Modals/SettingsModal';

const HomePage = lazy(() => import('@/pages/HomePage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const TeachersPage = lazy(() => import('@/pages/TeachersPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  const location = useLocation();
  const state = location.state;
  const background = state && state.background;

  return (
    <>
      <Routes location={background || location}>
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

      {background && (
        <Routes>
          <Route path={ROUTES.SETTINGS} element={<SettingsModal />} />
        </Routes>
      )}

      <BackToTop />
    </>
  );
}

export default App;
