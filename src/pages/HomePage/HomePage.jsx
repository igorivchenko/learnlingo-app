import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { AuthModalProvider } from '@/context/AuthModalContext';

const HomePage = () => {
  return (
    <AuthModalProvider>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </AuthModalProvider>
  );
};

export default HomePage;
