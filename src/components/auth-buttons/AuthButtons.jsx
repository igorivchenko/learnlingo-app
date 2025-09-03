import clsx from 'clsx';
import s from './AuthButtons.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import UserBar from '../user-panel/user-bar/UserBar';
import LogoutButton from './logout-button/LogoutButton';
import LoginButton from './login-button/LoginButton';
import RegisterButton from './register-button/RegisterButton';

const AuthButtons = ({ isAuthButtons = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className={s.userBarWrapper}>
          <UserBar />
          <LogoutButton />
        </div>
      ) : (
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
