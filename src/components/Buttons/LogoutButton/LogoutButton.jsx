import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import s from './LogoutButton.module.css';

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
