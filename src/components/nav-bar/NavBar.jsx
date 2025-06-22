import s from '@/components/nav-bar/NavBar.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const isLoggedIn = false; // Replace with actual logic to check if user is logged in

  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={'/'} className={buildLinkClass}>
            Home{' '}
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={'/teachers'} className={buildLinkClass}>
            Teachers
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.item}>
            (
            <NavLink to={'/favorites'} className={buildLinkClass}>
              Teachers
            </NavLink>
            )
          </li>
        )}
      </ul>
    </>
  );
};

export default NavBar;
