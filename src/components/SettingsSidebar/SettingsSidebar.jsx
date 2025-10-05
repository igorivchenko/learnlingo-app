import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import s from './SettingsSidebar.module.css';
import { ROUTES } from '@/constants';

const links = [
  { to: ROUTES.SETTINGS, label: 'General' },
  { to: ROUTES.SETTINGS_ACCOUNT, label: 'Account' },
  { to: ROUTES.SETTINGS_NOTIFICATIONS, label: 'Notifications' },
];

const SettingsSidebar = () => {
  const location = useLocation();

  return (
    <aside className={s.sidebar}>
      <nav className={s.nav}>
        <ul className={s.list}>
          {links.map(({ to, label }) => (
            <li key={to} className={s.item}>
              <NavLink
                to={to}
                className={({ isActive }) => clsx(s.link, isActive && s.active)}
                state={{ background: location }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SettingsSidebar;
