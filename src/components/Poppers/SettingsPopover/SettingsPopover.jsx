import { Box, Button } from '@mui/material';
import BasePopover from '@/components/Poppers/BasePopover';
import { settingsPopoverSx } from './SettingsPopover.sx';

const SettingsPopover = ({ onConfirm, onClose, ...props }) => {
  return (
    <BasePopover onClose={onClose} {...props}>
      <Box sx={settingsPopoverSx.actionsBox}>
        <Button sx={settingsPopoverSx.confirmButton}>Settings</Button>
      </Box>
    </BasePopover>
  );
};

export default SettingsPopover;
