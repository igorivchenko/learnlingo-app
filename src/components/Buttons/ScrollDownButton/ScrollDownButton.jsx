import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from '@mui/material/Fade';
import { scrollDownButtonSx } from './scrollDownButton.sx';

function ScrollToDown({ children, containerRef, isAutoScrolling }) {
  const [isAtBottom, setIsAtBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (isAutoScrolling) return;
      if (!el) return;
      const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50;
      setIsAtBottom(nearBottom);
    };

    const el = containerRef.current;
    if (el) el.addEventListener('scroll', handleScroll);

    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, isAutoScrolling]);

  const handleClick = () => {
    const el = containerRef.current;
    if (el) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fade in={!isAtBottom}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={scrollDownButtonSx.wrapper}
      >
        {children}
      </Box>
    </Fade>
  );
}

const ScrollDownButton = ({ containerRef, isAutoScrolling }) => {
  return (
    <ScrollToDown containerRef={containerRef} isAutoScrolling={isAutoScrolling}>
      <Fab size="small" aria-label="scroll down" sx={scrollDownButtonSx.fab}>
        <KeyboardArrowDownIcon />
      </Fab>
    </ScrollToDown>
  );
};

export default ScrollDownButton;
