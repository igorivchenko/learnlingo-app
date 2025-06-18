import s from '@/components/header/Header.module.css';

const Header = ({ children }) => {
  return <header className={s.header}>{children}</header>;
};

export default Header;
