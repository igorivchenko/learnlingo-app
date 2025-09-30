import { ROUTES } from '@/constants';
import s from './Logo.module.css';
import SchoolIcon from '@mui/icons-material/School';

const Logo = () => {
  return (
    <a href={ROUTES.HOME} className={s.logo}>
      <SchoolIcon sx={{ fontSize: '30px' }} />

      <span className={s['logo-text']}>LearnLingo</span>
    </a>
  );
};

export default Logo;
