import s from '@/components/nav-bar/NavBar.module.css';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isDrawer = false, onLinkClick }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/teachers', label: 'Teachers' },
    { to: '/favorites', label: 'Favorites', private: true },
  ];

  return (
    <>
      <ul className={clsx(s.list, isDrawer && s.listDrawer)}>
        {navLinks.map(
          ({ to, label, private: isPrivate }) =>
            (!isPrivate || isLoggedIn) && (
              <li key={to} className={s.item}>
                <NavLink
                  to={to}
                  className={buildLinkClass}
                  onClick={isDrawer ? onLinkClick : undefined}
                >
                  {label}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default NavBar;
