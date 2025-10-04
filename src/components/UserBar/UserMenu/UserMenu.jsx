import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/auth/selectors';
import UserMenuList from './UserMenuList';
import { ROUTES } from '@/constants';

const UserMenu = ({ open, onMouseEnter, onMouseLeave }) => {
  const { email } = useSelector(selectUser);

  const menuItems = [
    { label: email, icon: 'icon-account' },
    { label: 'Settings', icon: 'icon-settings', link: ROUTES.SETTINGS },
  ];

  return (
    <UserMenuList
      open={open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      items={menuItems}
    />
  );
};

export default UserMenu;
