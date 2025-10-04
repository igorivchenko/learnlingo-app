import s from './BookTrialModal.module.css';
import { Box, Grow, Modal, Typography } from '@mui/material';
import BookTrialTeacherBadge from './BookTrialTeacherBadge';
import BookTrialForm from './BookTrialForm';
import { bookTrialModalSx } from './BookTrialModal.sx';

const BookTrialModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={bookTrialModalSx.modal}
    >
      <Grow in={open} timeout={200}>
        <Box className={s.modal}>
          <Typography
            sx={bookTrialModalSx.title}
            className={s.title}
            id="modal-modal-title"
            component="h2"
          >
            Book trial lesson
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={bookTrialModalSx.description}
          >
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </Typography>
          <BookTrialTeacherBadge />
          <BookTrialForm handleClose={handleClose} />
          <button
            type="button"
            className={s['close-button']}
            onClick={handleClose}
          >
            <svg width="32" height="32">
              <use href="/icons.svg#icon-close"></use>
            </svg>
          </button>
        </Box>
      </Grow>
    </Modal>
  );
};

export default BookTrialModal;
