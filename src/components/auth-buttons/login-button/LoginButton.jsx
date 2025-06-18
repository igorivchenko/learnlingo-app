import s from '@/components/auth-buttons/login-button/LoginButton.module.css';

const LoginButton = () => {
  return (
    <button type="button" className={s.button}>
      <svg width="20" height="20">
        <use href="/icons.svg#icon-login"></use>
      </svg>
      <span>Log in</span>
    </button>
  );
};

export default LoginButton;
