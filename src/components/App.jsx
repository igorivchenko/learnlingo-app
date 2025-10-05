import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import BackToTop from './ScrollToTop';
import MainLayout from './Layouts/MainLayout';
import SettingsLayout from './Layouts/SettingsLayout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const TeachersPage = lazy(() => import('@/pages/TeachersPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const SettingsGeneralPage = lazy(() => import('@/pages/SettingsGeneralPage'));
const SettingsAccountPage = lazy(() => import('@/pages/SettingsAccountPage'));
const SettingsNotificationsPage = lazy(() =>
  import('@/pages/SettingsNotificationsPage')
);

function App() {
  const location = useLocation();
  const state = location.state;
  const background = state && state.background;

  return (
    <>
      <Routes location={background || location}>
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

      {background && (
        <Routes>
          <Route path={ROUTES.SETTINGS + '/*'} element={<SettingsLayout />}>
            <Route index element={<SettingsGeneralPage />} />
            <Route path="account" element={<SettingsAccountPage />} />
            <Route
              path="notifications"
              element={<SettingsNotificationsPage />}
            />
          </Route>
        </Routes>
      )}

      <BackToTop />
    </>
  );
}

export default App;
