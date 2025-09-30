import { useSelector } from 'react-redux';
import s from './UserBar.module.css';
import { selectIsAuth, selectName } from '@/redux/auth/selectors';
import UserAvatar from './UserAvatar';
import clsx from 'clsx';
import { useState } from 'react';
import { errorToast, successToast } from '@/utils/toastUtils';
import SettingsPopover from '@/components/Poppers/SettingsPopover';
import BurgerDrawer from '@/components/BurgerDrawer';
import { useMediaQuery } from '@mui/material';
import { MENU_TYPES, USERBAR_VARIANTS } from '@/constants';

const UserBar = ({ noName = false, variant = USERBAR_VARIANTS.HEADER }) => {
  const userName = useSelector(selectName);
  const isAuth = useSelector(selectIsAuth);
  const [openMenu, setOpenMenu] = useState('');
  const [confirmState, setConfirmState] = useState({
    anchorEl: null,
  });
  const isMobile = useMediaQuery('(max-width:767.98px)');

  const handleOpenDrawer = type => {
    setOpenMenu(type);
  };

  const handleCloseDrawer = () => {
    setOpenMenu(null);
  };

  const handleClose = () => {
    setConfirmState({ anchorEl: null });
  };

  const handleLogOut = async () => {
    try {
      successToast('Logged out successfully');
    } catch (err) {
      errorToast(err);
    }
  };

  const open = Boolean(confirmState.anchorEl);
  const popoverId = open ? 'confirm-popover' : undefined;

  const firstName = userName?.split(' ')[0];

  const handleOpenPopover = event => {
    setConfirmState({ anchorEl: event.currentTarget });
  };

  return (
    <>
      <button
        type="button"
        className={clsx(
          s.userBar,
          variant === USERBAR_VARIANTS.DRAWER && s.userBarDrawer
        )}
        onClick={
          variant === USERBAR_VARIANTS.HEADER && isMobile
            ? () =>
                handleOpenDrawer(
                  !isAuth ? MENU_TYPES.ACCOUNT : MENU_TYPES.SETTINGS
                )
            : handleOpenPopover
        }
      >
        <UserAvatar variant={variant} />
        {!noName && <span className={s.userName}>{firstName}</span>}{' '}
      </button>

      {isMobile && (
        <BurgerDrawer
          open={openMenu}
          onClose={handleCloseDrawer}
          openMenu={openMenu}
        />
      )}

      {!isMobile && (
        <SettingsPopover
          id={popoverId}
          open={open}
          anchorEl={confirmState.anchorEl}
          onClose={handleClose}
          onConfirm={handleLogOut}
          sx={{
            '& .MuiPaper-root': {
              padding: 1.3,
              backgroundColor: 'var(--color-bg-popper)',
              borderRadius: 2,
              maxWidth: 280,
            },
          }}
        />
      )}
    </>
  );
};

export default UserBar;
