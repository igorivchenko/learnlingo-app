import clsx from 'clsx';
import s from './AuthButtons.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import UserBar from '@/components/UserPanel/UserBar';

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
