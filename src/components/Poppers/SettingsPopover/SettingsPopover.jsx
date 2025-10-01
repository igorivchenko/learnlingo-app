import { Box, Button, Typography } from '@mui/material';
import BasePopover from '@/components/Poppers/BasePopover';
import { settingsPopoverSx } from './SettingsPopover.sx';

const SettingsPopover = ({ onConfirm, onClose, ...props }) => {
  return (
    <BasePopover onClose={onClose} {...props}>
      <Typography sx={settingsPopoverSx.title}>
        <b>{'Are you sure?'}</b>
      </Typography>
      <Box sx={settingsPopoverSx.actionsBox}>
        <Button sx={settingsPopoverSx.confirmButton} onClick={onConfirm}>
          Settings
        </Button>
      </Box>
    </BasePopover>
  );
};

export default SettingsPopover;
