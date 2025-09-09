import s from './LoginButton.module.css';
import AuthModal from '@/components/AuthModal';
import clsx from 'clsx';
import { useState } from 'react';

const LoginButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button type="button" className={clsx(s.button)} onClick={handleOpen}>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-login"></use>
        </svg>
        <span>Log in</span>
      </button>
      {<AuthModal open={open} handleClose={handleClose} />}
    </>
  );
};

export default LoginButton;
