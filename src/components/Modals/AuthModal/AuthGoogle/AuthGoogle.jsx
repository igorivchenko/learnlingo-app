import s from './AuthGoogle.module.css';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '@/redux/auth/operations';
import { errorToast, successToast } from '@/utils/toastUtils';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants';

const AuthGoogle = ({ handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await dispatch(signInWithGoogle()).unwrap();
      successToast('Login successful');
      navigate(ROUTES.HOME);
    } catch (err) {
      errorToast(err);
    }
    handleClose();
  };

  return (
    <button onClick={handleGoogleLogin} className={s.googlelink}>
      <svg>
        <use href="/icons.svg#icon-google"></use>
      </svg>
      Sign in with Google
    </button>
  );
};

export default AuthGoogle;
