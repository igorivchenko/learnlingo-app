import Favorites from '@/pages/favorites/Favorites';
import Home from '@/pages/home/Home';
import Teachers from '@/pages/teachers/Teachers';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './private-route/PrivateRoute';
import NotFoundPage from '@/pages/not-found/NotFoundPage';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
