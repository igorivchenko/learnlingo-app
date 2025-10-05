import { Box, Grow, Modal, Slide } from '@mui/material';
import s from './SettingsModal.module.css';
import { settingsModalSx } from './SettingsModal.sx';
import { useResponsive } from '@/hooks/useResponsive';

import { useNavigate } from 'react-router-dom';

const SettingsModal = ({ children }) => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  const handleClose = () => navigate('/');

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={settingsModalSx.modal}
    >
      {isMobile ? (
        <Slide direction="right" in={open} timeout={300}>
          <Box className={s.modal}>{children}</Box>
        </Slide>
      ) : (
        <Grow in={open} timeout={200}>
          <Box className={s.modal}>{children}</Box>
        </Grow>
      )}
    </Modal>
  );
};

export default SettingsModal;
