import s from './Header.module.css';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import NavBar from '@/components/NavBar';
import AuthButtons from '@/components/Buttons';
import BurgerMenu from '@/components/BurgerMenu';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const isMobile = useMediaQuery('(min-width:767.98px)');

  return (
    <header className={s.header}>
      <Container size="medium" className={s.headerContainer}>
        <Logo />
        {isMobile && <NavBar />}
        {isMobile && <AuthButtons />}
        <BurgerMenu />
      </Container>
    </header>
  );
};

export default Header;
