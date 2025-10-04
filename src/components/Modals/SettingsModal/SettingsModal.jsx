import { Box, Grow, Modal, Typography } from '@mui/material';
import s from './SettingsModal.module.css';
import { useNavigate } from 'react-router-dom';
import { settingsModalSx } from './SettingsModal.sx';

const SettingsModal = () => {
  const navigate = useNavigate();

  const handleClose = () => navigate(-1);

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={settingsModalSx.modal}
    >
      <Grow in={open} timeout={200}>
        <Box className={s.modal}>
          <Typography
            sx={settingsModalSx.title}
            className={s.title}
            id="modal-modal-title"
            component="h2"
          >
            Settings
          </Typography>

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

export default SettingsModal;
