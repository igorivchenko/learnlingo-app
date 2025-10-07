import { selectModal } from '@/redux/modals/selectors';
import { closeModal } from '@/redux/modals/slice';
import { useDispatch, useSelector } from 'react-redux';
import AuthModal from '@/components/Modals/AuthModal';
import BookTrialModal from '@/components/Modals/BookTrialModal';
import SettingsModal from '@/components/Modals/SettingsModal';
import { MODAL_TYPES } from '@/constants';

const ModalProvider = () => {
  const dispatch = useDispatch();
  const { type, props } = useSelector(selectModal);

  if (!type) return null;

  const handleClose = () => dispatch(closeModal());

  switch (type) {
    case MODAL_TYPES.AUTH:
      return <AuthModal open={true} handleClose={handleClose} {...props} />;
    case MODAL_TYPES.BOOK_TRIAL:
      return (
        <BookTrialModal open={true} handleClose={handleClose} {...props} />
      );
    case MODAL_TYPES.SETTINGS:
      return <SettingsModal open={true} handleClose={handleClose} {...props} />;
    default:
      return null;
  }
};

export default ModalProvider;
