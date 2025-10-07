import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/redux/auth/selectors';
import UserMenuList from './UserMenuList';
import { openModal } from '@/redux/modals/slice';
import { MODAL_TYPES } from '@/constants';

const UserMenu = ({ open, onMouseEnter, onMouseLeave }) => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSettingsClick = () => {
    dispatch(
      openModal({
        type: MODAL_TYPES.SETTINGS,
      })
    );
  };

  const menuItems = [
    { label: email, icon: 'icon-account' },
    { label: 'Settings', icon: 'icon-settings', onClick: handleSettingsClick },
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
