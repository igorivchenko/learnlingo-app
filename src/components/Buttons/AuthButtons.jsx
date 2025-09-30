import clsx from 'clsx';
import s from './AuthButtons.module.css';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '@/redux/auth/selectors';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import UserBar from '@/components/UserBar';
import ToggleThemeButton from './ToggleThemeButton';

const AuthButtons = ({ isAuthButtons = false, noToggleButton = false }) => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      {isAuth ? (
        <div className={s.userBarWrapper}>
          <ToggleThemeButton />
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
          {!noToggleButton && <ToggleThemeButton />}
          <LoginButton />
          <RegisterButton />
        </div>
      )}
    </>
  );
};

export default AuthButtons;
