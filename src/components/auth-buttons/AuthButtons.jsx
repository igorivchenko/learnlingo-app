import LoginButton from '@/components/auth-buttons/login-button/LoginButton';
import RegisterButton from '@/components/auth-buttons/register-button/RegisterButton';
import s from '@/components/auth-buttons/AuthButtons.module.css';

const AuthButtons = () => {
  const isLoggedIn = false; // Replace with actual authentication logic

  return (
    <div className={s['auth-buttons']}>
      {!isLoggedIn && <LoginButton />}
      {!isLoggedIn && <RegisterButton />}
    </div>
  );
};

export default AuthButtons;
