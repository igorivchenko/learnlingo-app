import {
  Box,
  FormControl,
  Grow,
  MenuItem,
  Modal,
  Select,
  Slide,
} from '@mui/material';
import s from './SettingsModal.module.css';
import { settingsModalSx } from './SettingsModal.sx';
import { useResponsive } from '@/hooks/useResponsive';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '@/redux/theme/slice';

const SettingsModal = ({ open, handleClose }) => {
  const { isMobile } = useResponsive();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const content = (
    <Box className={s.modal}>
      <h2 className={s.title}>Settings</h2>
      <div className={s.themeContainer}>
        <div className={s.themeTitle}>Theme</div>
        <FormControl size="small">
          <Select
            value={theme}
            onChange={e => dispatch(setTheme(e.target.value))}
            sx={settingsModalSx.select}
            MenuProps={settingsModalSx.selectMenu}
          >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </div>
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
