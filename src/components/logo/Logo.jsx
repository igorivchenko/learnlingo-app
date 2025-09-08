import { ROUTES } from '@/constants';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <a href={ROUTES.HOME} className={s.logo}>
      <svg width="28" height="28">
        <use href="/icons.svg#icon-logo"></use>
      </svg>

      <span className={s['logo-text']}>LearnLingo</span>
    </a>
  );
};

export default Logo;
