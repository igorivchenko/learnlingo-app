import LoginButton from '@/components/auth-buttons/login-button/LoginButton';
import RegisterButton from '@/components/auth-buttons/register-button/RegisterButton';
import s from '@/components/auth-buttons/AuthButtons.module.css';

const AuthButtons = () => {
  return (
    <div className={s['auth-buttons']}>
      <LoginButton />
      <RegisterButton />
    </div>
  );
};

export default AuthButtons;
