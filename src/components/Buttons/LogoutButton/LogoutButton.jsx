import { useDispatch } from 'react-redux';
import s from './LogoutButton.module.css';
import { signOutUser } from '@/redux/auth/operations';
import { errorToast, successToast } from '@/utils/toastUtils';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await dispatch(signOutUser()).unwrap();
      successToast('Ви вийшли з аккаунту!');
    } catch (err) {
      errorToast(err);
    }
  };

  return (
    <>
      <button type="button" className={s.button} onClick={handleLogOut}>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-login"></use>
        </svg>
        <span>Log out</span>
      </button>
    </>
  );
};

export default LogoutButton;
