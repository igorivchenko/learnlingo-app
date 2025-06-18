import AuthButtons from '@/components/auth-buttons/AuthButtons';
import Container from '@/components/container/Container';
import Header from '@/components/header/Header';
import Logo from '@/components/logo/Logo';
import NavBar from '@/components/nav-bar/NavBar';

const Home = () => {
  return (
    <>
      <Header>
        <Container size="medium" display="flex">
          <Logo />
          <NavBar />
          <AuthButtons />
        </Container>
      </Header>
    </>
  );
};

export default Home;
