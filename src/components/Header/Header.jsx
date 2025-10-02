import s from './Header.module.css';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import AuthButtons from '@/components/Buttons';
import BurgerMenu from '@/components/BurgerMenu';
import { useResponsive } from '@/hooks/useResponsive';

const Header = () => {
  const { isMobile } = useResponsive();

  return (
    <header className={s.header}>
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
    </header>
  );
};

export default Header;
