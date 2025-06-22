import s from '@/components/auth-buttons/register-button/RegisterButton.module.css';
import { useState } from 'react';
import AuthModal from '@/components/auth-modal/AuthModal';

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
