import s from '@/components/nav-bar/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={'/'}>Home </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={'/teachers'}>Teachers</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
