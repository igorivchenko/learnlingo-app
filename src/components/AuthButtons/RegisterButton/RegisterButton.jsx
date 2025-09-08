import { useState } from 'react';
import AuthModal from '@/components/AuthModal';
import s from './RegisterButton.module.css';

const RegisterButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button type="button" className={s.button} onClick={handleOpen}>
        <span>Registration</span>
      </button>
      {<AuthModal mode={'register'} open={open} handleClose={handleClose} />}
    </>
  );
};

export default RegisterButton;
