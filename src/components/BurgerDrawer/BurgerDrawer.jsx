import { Drawer, IconButton } from '@mui/material';
import ToggleThemeButton from '@/components/Buttons/ToggleThemeButton';
import AuthButtons from '@/components/Buttons';
import NavBar from '@/components/NavBar';
import { MENU_TYPES, USERBAR_VARIANTS } from '@/constants';
import s from './BurgerDrawer.module.css';
import SettingsMenu from '@/components/SettingsMenu';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '@/redux/auth/selectors';
import UserAvatar from '@/components/UserBar/UserAvatar';
import { burgerDrawerSx } from './BurgerDrawer.sx';

const BurgerDrawer = ({ open, onClose, openMenu }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <Drawer
        anchor="right"
        open={Boolean(open)}
        onClose={onClose}
        sx={burgerDrawerSx.drawer}
        slotProps={{
          backdrop: { sx: burgerDrawerSx.backdrop },
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
            sx={burgerDrawerSx.closeButton}
          >
            <svg width="32" height="32">
              <use href="/icons.svg#icon-close"></use>
            </svg>
          </IconButton>
        </div>

        {!isAuth && openMenu === MENU_TYPES.ACCOUNT && (
          <AuthButtons
            isAuthButtons={true}
            noToggleButton
            className={s.buttonRight}
            closeDrawer={onClose}
          />
        )}
        {openMenu === MENU_TYPES.MAIN && (
          <NavBar isDrawer={true} closeDrawer={onClose} />
        )}
        {openMenu === MENU_TYPES.SETTINGS && (
          <SettingsMenu closeDrawer={onClose} />
        )}
      </Drawer>
    </>
  );
};

export default BurgerDrawer;
