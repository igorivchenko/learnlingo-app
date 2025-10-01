import { useDispatch } from 'react-redux';
import s from './LogoutButton.module.css';
import { signOutUser } from '@/redux/auth/operations';
import { errorToast, successToast } from '@/utils/toastUtils';
import { useState } from 'react';
import ConfirmPopover from '@/components/Poppers/ConfirmPopover';
import { logoutButtonSx } from './LogoutButton.sx';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const [confirmState, setConfirmState] = useState({
    anchorEl: null,
  });

  const handleClose = () => {
    setConfirmState({ anchorEl: null });
  };

  const handleLogOut = async () => {
    try {
      await dispatch(signOutUser()).unwrap();
      successToast('Logged out successfully');
    } catch (err) {
      errorToast(err);
    }
  };

  const open = Boolean(confirmState.anchorEl);
  const popoverId = open ? 'confirm-popover' : undefined;

  return (
    <>
      <button
        type="button"
        className={s.button}
        onClick={event =>
          setConfirmState({
            anchorEl: event.currentTarget,
          })
        }
      >
        <svg width="20" height="20">
          <use href="/icons.svg#icon-login"></use>
        </svg>
        <span>Log out</span>
      </button>
      <ConfirmPopover
        id={popoverId}
        open={open}
        anchorEl={confirmState.anchorEl}
        onClose={handleClose}
        onConfirm={handleLogOut}
        sx={logoutButtonSx.confirmPopover}
      />
    </>
  );
};

export default LogoutButton;
