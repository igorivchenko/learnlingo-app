import { useAuthModal } from '@/context/AuthModalContext';
import s from './RegisterButton.module.css';
import { MODES } from '@/constants';

const RegisterButton = ({ closeDrawer }) => {
  const { openModal } = useAuthModal();

  const handleClick = () => {
    openModal(MODES.REGISTER, () => {
      closeDrawer?.();
    });
  };

  return (
    <>
      <button type="button" className={s.button} onClick={handleClick}>
        <span>Registration</span>
      </button>
    </>
  );
};

export default RegisterButton;
