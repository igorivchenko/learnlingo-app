import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import NavBar from '../nav-bar/NavBar';
import AuthButtons from '../auth-buttons/AuthButtons';

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const isMobile = useMediaQuery('(max-width:767.98px)');

  const isLoggedIn = false; // Replace with actual logic to check if user is logged in

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
          onClick={() => handleOpenMenu('account')}
          sx={{
            padding: '6px',
          }}
        >
          <AccountCircleIcon />
        </IconButton>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => handleOpenMenu('menu')}
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
            width: '60vw',
            backgroundColor: '#FBE9BA',
            color: 'var(--color-main)',
          },
        }}
      >
        {!isLoggedIn && openMenu === 'account' && (
          <AuthButtons isAuthButtons={true} />
        )}
        {openMenu === 'menu' && (
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
