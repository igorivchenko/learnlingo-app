import { useMediaQuery } from '@mui/material';

export const useResponsive = () => {
  const isMobileS = useMediaQuery('(max-width:479.98px)');
  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(max-width:1023.98px)');
  const isTabletL = useMediaQuery('(max-width:1119.98px)');

  return { isMobileS, isMobile, isTablet, isTabletL };
};
