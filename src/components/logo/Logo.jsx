import s from '@/components/logo/Logo.module.css';

const Logo = () => {
  return (
    <div className={s.logo}>
      <svg width="28" height="28">
        <use href="/icons.svg#icon-logo"></use>
      </svg>

      <span className={s['logo-text']}>LearnLingo</span>
    </div>
  );
};

export default Logo;
