import s from './ToggleThemeButton.module.css';
import { selectTheme, setTheme } from '@/redux/theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { getSystemTheme } from '@/utils/getSystemTheme';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import AppTooltip from '@/components/AppTooltip';

const ToggleThemeButton = ({ className }) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [systemTheme, setSystemTheme] = useState(getSystemTheme());

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = e => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleToggleTheme = () => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
    }

    if (theme === 'dark') {
      dispatch(setTheme('light'));
    }

    if (theme === 'system' && systemTheme === 'light') {
      dispatch(setTheme('dark'));
    }

    if (theme === 'system' && systemTheme === 'dark') {
      dispatch(setTheme('light'));
    }
  };

  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <AppTooltip title={!isDark ? 'Turn off the light' : 'Turn on the light'}>
      <button
        className={clsx(s.button, className)}
        type="button"
        onClick={handleToggleTheme}
      >
        <span className={`${s.icon} ${!isDark ? s.visible : s.hidden}`}>
          <DarkModeIcon />
        </span>
        <span className={`${s.icon} ${isDark ? s.visible : s.hidden}`}>
          <LightModeIcon />
        </span>
      </button>
    </AppTooltip>
  );
};

export default ToggleThemeButton;
