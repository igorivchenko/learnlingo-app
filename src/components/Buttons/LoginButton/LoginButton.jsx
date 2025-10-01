import { useAuthModal } from '@/context/AuthModalContext';
import s from './LoginButton.module.css';
import clsx from 'clsx';

const LoginButton = ({ className, closeDrawer }) => {
  const { openModal } = useAuthModal();

  return (
    <>
      <button
        type="button"
        className={clsx(s.button, className)}
        onClick={() => openModal(closeDrawer?.())}
      >
        <svg width="20" height="20">
          <use href="/icons.svg#icon-login"></use>
        </svg>
        <span>Log in</span>
      </button>
    </>
  );
};

export default LoginButton;
