import { Drawer, IconButton } from '@mui/material';
import UserBar from '@/components/UserBar';
import ToggleThemeButton from '@/components/Buttons/ToggleThemeButton';
import AuthButtons from '@/components/Buttons';
import NavBar from '@/components/NavBar';
import { MENU_TYPES, USERBAR_VARIANTS } from '@/constants';
import s from './BurgerDrawer.module.css';
import SettingsMenu from '@/components/SettingsMenu';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '@/redux/auth/selectors';
import UserAvatar from '@/components/UserBar/UserAvatar';

const BurgerDrawer = ({ open, onClose, openMenu }) => {
  const isAuth = useSelector(selectIsAuth);

  const drawerSx = {
    '& .MuiDrawer-paper': {
      width: '50vw',
      padding: '20px 16px',
      backgroundColor: 'var(--color-bg-burgerMenu)',
      color: 'var(--color-main)',
      overflow: 'hidden',
      '@media (max-width:479.98px)': {
        width: '55vw',
      },
    },
  };

  return (
    <Drawer
      anchor="right"
      open={Boolean(open)}
      onClose={onClose}
      sx={drawerSx}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: 'blur(1.5px)',
          },
        },
      }}
    >
      <div className={s.headerBurger}>
        <UserAvatar variant={USERBAR_VARIANTS.DRAWER} />
        <ToggleThemeButton className={s.toggleBtn} />
        <IconButton
          color="inherit"
          edge="start"
          size="md"
          onClick={onClose}
          sx={{
            width: '24px',
            padding: 0,
            '@media (max-width:767.98px)': {
              marginLeft: 'auto',
            },
          }}
        >
          <svg width="32" height="32">
            <use href="/icons.svg#icon-close"></use>
          </svg>
        </IconButton>
      </div>

      {!isAuth && openMenu === MENU_TYPES.ACCOUNT && (
        <AuthButtons isAuthButtons={true} noToggleButton />
      )}
      {openMenu === MENU_TYPES.MAIN && (
        <NavBar isDrawer={true} onLinkClick={onClose} />
      )}
      {openMenu === MENU_TYPES.SETTINGS && (
        <SettingsMenu onLinkClick={onClose} />
      )}
    </Drawer>
  );
};

export default BurgerDrawer;
