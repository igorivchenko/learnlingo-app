import s from './LoginButton.module.css';
import clsx from 'clsx';
import { MODAL_TYPES, MODES } from '@/constants';
import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/modals/slice';

const LoginButton = ({ className, closeDrawer }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      openModal({
        type: MODAL_TYPES.AUTH,
        props: {
          mode: MODES.LOGIN,
        },
      })
    );

    closeDrawer?.();
  };

  return (
    <>
      <button
        type="button"
        className={clsx(s.button, className)}
        onClick={handleClick}
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
