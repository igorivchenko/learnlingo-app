import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import { MENU_TYPES } from '@/constants';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import AuthButtons from '@/components/Buttons';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '@/redux/auth/selectors';
import NavBar from '@/components/NavBar';

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const isMobile = useMediaQuery('(max-width:767.98px)');

  const isAuth = useSelector(selectIsAuth);

  const handleOpenMenu = type => {
    setOpenMenu(type);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '20px' }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => handleOpenMenu(MENU_TYPES.ACCOUNT)}
          sx={{
            padding: '6px',
          }}
        >
          <AccountCircleIcon />
        </IconButton>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => handleOpenMenu(MENU_TYPES.MAIN)}
          sx={{
            padding: '6px',
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={handleClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '50vw',
            backgroundColor: 'var(--color-bg-burgerMenu)',
            color: 'var(--color-main)',
          },
        }}
      >
        {!isAuth && openMenu === MENU_TYPES.ACCOUNT && (
          <AuthButtons isAuthButtons={true} />
        )}
        {openMenu === MENU_TYPES.MAIN && (
          <NavBar isDrawer={true} onLinkClick={handleClose} />
        )}
        <IconButton
          color="inherit"
          edge="start"
          size="md"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '24px',
            padding: 0,
          }}
        >
          <svg width={32} height={32}>
            <use href="/icons.svg#icon-close"></use>
          </svg>
        </IconButton>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
