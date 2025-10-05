import s from './RegisterButton.module.css';
import { useDispatch } from 'react-redux';
import { MODAL_TYPES, MODES } from '@/constants';
import { openModal } from '@/redux/modals/slice';

const RegisterButton = ({ closeDrawer }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      openModal({
        type: MODAL_TYPES.AUTH,
        props: {
          mode: MODES.REGISTER,
        },
      })
    );

    closeDrawer?.();
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
