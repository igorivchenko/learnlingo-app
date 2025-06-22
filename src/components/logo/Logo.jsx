import s from '@/components/logo/Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <svg width="28" height="28">
        <use href="/icons.svg#icon-logo"></use>
      </svg>

      <span className={s['logo-text']}>LearnLingo</span>
    </a>
  );
};

export default Logo;
