import s from '@/components/header/Header.module.css';
import Container from '@/components/container/Container';
import Logo from '@/components/logo/Logo';
import NavBar from '@/components/nav-bar/NavBar';
import AuthButtons from '@/components/auth-buttons/AuthButtons';
import BurgerMenu from '@/components/burger-menu/BurgerMenu';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const isMobile = useMediaQuery('(min-width:767.98px)');

  return (
    <header className={s.header}>
      <Container size="medium" display="flex">
        <Logo />
        {isMobile && <NavBar />}
        {isMobile && <AuthButtons />}
        <BurgerMenu />
      </Container>
    </header>
  );
};

export default Header;
