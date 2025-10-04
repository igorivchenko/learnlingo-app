import Header from '@/components/Header';
import { AuthModalProvider } from '@/context/AuthModalContext';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <AuthModalProvider>
      <Header />
      <Outlet />
    </AuthModalProvider>
  );
};

export default MainLayout;
