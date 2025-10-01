import { Box, Button, Typography } from '@mui/material';
import BasePopover from '@/components/Poppers/BasePopover';
import { confirmPopoverSx } from './ConfirmPopover.sx';

const ConfirmPopover = ({ onConfirm, onClose, ...props }) => {
  return (
    <BasePopover onClose={onClose} {...props}>
      <Typography sx={confirmPopoverSx.title}>
        <b>{'Are you sure?'}</b>
      </Typography>
      <Box sx={confirmPopoverSx.actionsBox}>
        <Button sx={confirmPopoverSx.actionButton} onClick={onConfirm}>
          Yes
        </Button>
        <Button sx={confirmPopoverSx.actionButton} onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </BasePopover>
  );
};

export default ConfirmPopover;
