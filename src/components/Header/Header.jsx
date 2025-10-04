import s from './Header.module.css';
import { motion } from 'motion/react';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import AuthButtons from '@/components/Buttons';
import BurgerMenu from '@/components/BurgerMenu';
import { useResponsive } from '@/hooks/useResponsive';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { isMobile } = useResponsive();
  const location = useLocation();

  return (
    <motion.header
      key={location.pathname}
      className={s.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container size="medium" className={s.headerContainer}>
        <Logo />
        {!isMobile && (
          <>
            <NavBar />
            <AuthButtons />
          </>
        )}
        <BurgerMenu />
      </Container>
    </motion.header>
  );
};

export default Header;
