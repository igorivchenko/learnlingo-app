import s from './NavBar.module.css';
import { motion } from 'motion/react';
import { ROUTES } from '@/constants';
import { selectIsAuth } from '@/redux/auth/selectors';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isDrawer = false, onLinkClick }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const isAuth = useSelector(selectIsAuth);

  const navLinks = [
    { to: ROUTES.HOME, label: 'Home' },
    { to: ROUTES.TEACHERS, label: 'Teachers' },
    { to: ROUTES.FAVORITES, label: 'Favorites', private: true },
  ];

  return (
    <>
      {isDrawer ? (
        <ul className={clsx(s.list, s.listDrawer)}>
          {navLinks.map(
            ({ to, label, private: isPrivate }, idx) =>
              (!isPrivate || isAuth) && (
                <motion.li
                  key={to}
                  className={s.item}
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  viewport={{ once: true, margin: '0px 0px -30px 0px' }}
                >
                  <NavLink
                    to={to}
                    className={buildLinkClass}
                    onClick={onLinkClick}
                  >
                    {label}
                  </NavLink>
                </motion.li>
              )
          )}
        </ul>
      ) : (
        <ul className={clsx(s.list)}>
          {navLinks.map(
            ({ to, label, private: isPrivate }) =>
              (!isPrivate || isAuth) && (
                <li key={to} className={s.item}>
                  <NavLink to={to} className={buildLinkClass}>
                    {label}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

export default NavBar;
