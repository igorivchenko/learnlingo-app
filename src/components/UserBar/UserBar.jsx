import { useSelector } from 'react-redux';
import s from './UserBar.module.css';
import { selectIsAuth, selectUser } from '@/redux/auth/selectors';
import UserAvatar from './UserAvatar';
import { useState } from 'react';
import BurgerDrawer from '@/components/BurgerDrawer';
import { MENU_TYPES, USERBAR_VARIANTS } from '@/constants';
import { useResponsive } from '@/hooks/useResponsive';
import { IconButton } from '@mui/material';
import UserMenu from './UserMenu';

const UserBar = ({ noName = false, variant = USERBAR_VARIANTS.HEADER }) => {
  const { name } = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const [openMenu, setOpenMenu] = useState('');
  const { isMobile } = useResponsive();

  const [hovered, setHovered] = useState(false);

  const onOpenDrawer = type => setOpenMenu(type);
  const onCloseDrawer = () => setOpenMenu(null);

  const handleClick = () => {
    if (isMobile) {
      onOpenDrawer(!isAuth ? MENU_TYPES.ACCOUNT : MENU_TYPES.SETTINGS);
    }
  };

  const firstName = name?.split(' ')[0];

  return (
    <div className={s.userBarWrapper}>
      <IconButton
        size="small"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        className={s.userBar}
        sx={{
          padding: '6px 0',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={handleClick}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        <UserAvatar variant={variant} />
        {!noName && <span className={s.userName}>{firstName}</span>}
      </IconButton>

      {!isMobile && (
        <UserMenu
          open={hovered}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      )}

      {isMobile && (
        <BurgerDrawer
          open={openMenu}
          onClose={onCloseDrawer}
          openMenu={openMenu}
        />
      )}
    </div>
  );
};

export default UserBar;
