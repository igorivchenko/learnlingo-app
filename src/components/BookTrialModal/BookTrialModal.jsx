import s from './BookTrialModal.module.css';
import { Box, Modal, Typography } from '@mui/material';
import BookTrialTeacherBadge from './BookTrialTeacherBadge';
import BookTrialForm from './BookTrialForm';

const BookTrialModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <Box className={s.modal}>
        <Typography
          sx={{
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: 1.2,
            color: 'var(--color-main)',
          }}
          className={s.title}
          id="modal-modal-title"
          component="h2"
        >
          Book trial lesson
        </Typography>

        <Typography
          id="modal-modal-description"
          sx={{
            lineHeight: 1.35,
            color: 'var(--color-description)',
          }}
        >
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
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
    </Modal>
  );
};

export default BookTrialModal;
