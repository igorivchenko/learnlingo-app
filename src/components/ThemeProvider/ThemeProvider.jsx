import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/redux/theme/slice';

const ThemeProvider = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return null;
};

export default ThemeProvider;
