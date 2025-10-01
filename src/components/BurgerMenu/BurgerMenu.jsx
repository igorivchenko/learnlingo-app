import s from './BurgerMenu.module.css';
import { IconButton } from '@mui/material';
import { MENU_TYPES } from '@/constants';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import UserBar from '@/components/UserBar';
import BurgerDrawer from '@/components/BurgerDrawer';
import { useResponsive } from '@/hooks/useResponsive';

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState('');
  const { isMobile } = useResponsive();

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
          onClick={() => setOpenMenu(MENU_TYPES.MAIN)}
          sx={{
            padding: '6px',
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <BurgerDrawer
        open={openMenu}
        onClose={() => setOpenMenu('')}
        openMenu={openMenu}
      />
    </>
  );
};

export default BurgerMenu;
