import { Box, Grow, Modal, Slide } from '@mui/material';
import s from './SettingsModal.module.css';
import { settingsModalSx } from './SettingsModal.sx';
import { useResponsive } from '@/hooks/useResponsive';

const SettingsModal = ({ open, handleClose }) => {
  const { isMobile } = useResponsive();

  const content = (
    <Box className={s.modal}>
      <h2 style={{ textAlign: 'center' }}>SettingsModal</h2>
      <button className={s.close} onClick={handleClose}>
        <svg width="20" height="20">
          <use href="/icons.svg#icon-close"></use>
        </svg>
      </button>
    </Box>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={settingsModalSx.modal}
    >
      {isMobile ? (
        <Slide direction="right" in={open} timeout={300}>
          {content}
        </Slide>
      ) : (
        <Grow in={open} timeout={200}>
          {content}
        </Grow>
      )}
    </Modal>
  );
};

export default SettingsModal;
