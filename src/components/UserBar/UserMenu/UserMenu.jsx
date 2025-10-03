import clsx from 'clsx';
import s from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/auth/selectors';

const UserMenu = ({ open, onMouseEnter, onMouseLeave }) => {
  const { email } = useSelector(selectUser);

  return (
    <ul
      className={clsx(s.customMenu, { [s.open]: open })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <li className={s.menuItem}>
        <span>{email}</span>
      </li>
      <li className={s.menuItem}>
        <span>Settings</span>
      </li>
    </ul>
  );
};

export default UserMenu;
