import s from '@/components/auth-buttons/logout-button/LogoutButton.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" className={clsx(s.button)}>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-login"></use>
        </svg>
        <span>Log out</span>
      </button>
    </>
  );
};

export default LogoutButton;
