import clsx from 'clsx';
import s from './UserMenuList.module.css';
import UserMenuItem from '@/components/UserBar/UserMenu/UserMenuItem';

const UserMenuList = ({ open, onMouseEnter, onMouseLeave, items = [] }) => {
  return (
    <ul
      className={clsx(s.customMenu, { [s.open]: open })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map(item => (
        <li className={s.menuItem} key={item.label}>
          <UserMenuItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default UserMenuList;
