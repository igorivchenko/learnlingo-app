import s from './BurgerMenu.module.css';
import { IconButton, useMediaQuery } from '@mui/material';
import { MENU_TYPES } from '@/constants';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import UserBar from '@/components/UserBar';
import BurgerDrawer from '@/components/BurgerDrawer';

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState('');
  const isMobile = useMediaQuery('(max-width:767.98px)');

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
      <div className={s.userBar}>
        <UserBar noName />
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
      <BurgerDrawer open={openMenu} onClose={handleClose} openMenu={openMenu} />
    </>
  );
};

export default BurgerMenu;
