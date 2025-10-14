import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from 'react';
import { useResponsive } from '@/hooks/useResponsive';
import { scrollUpButtonSx } from './scrollUpButton.sx';

function ScrollToTop({ children }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const { isMobile } = useResponsive();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fade in={trigger && isScrollingUp}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={scrollUpButtonSx.wrapper(isMobile)}
      >
        {children}
      </Box>
    </Fade>
  );
}

const ScrollUpButton = () => {
  const { isMobile } = useResponsive();

  return (
    <ScrollToTop>
      <Fab
        size="medium"
        aria-label="scroll back to top"
        sx={scrollUpButtonSx.fab(isMobile)}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollToTop>
  );
};

export default ScrollUpButton;
