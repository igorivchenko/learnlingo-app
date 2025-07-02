import LoginButton from '@/components/auth-buttons/login-button/LoginButton';
import RegisterButton from '@/components/auth-buttons/register-button/RegisterButton';
import s from '@/components/auth-buttons/AuthButtons.module.css';
import clsx from 'clsx';

const AuthButtons = ({ isAuthButtons = false }) => {
  const isLoggedIn = false; // Replace with actual authentication logic

  return (
    <>
      {!isLoggedIn && (
        <div
          className={clsx(
            s['auth-buttons'],
            isAuthButtons && s['auth-buttons-modal']
          )}
        >
          <LoginButton />
          <RegisterButton />
        </div>
      )}
    </>
  );
};

export default AuthButtons;
