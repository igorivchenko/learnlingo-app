import { Popover } from '@mui/material';
import { basePopoverSx } from './BasePopover.sx';

const BasePopover = ({
  id,
  open,
  anchorEl,
  onClose,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  sx = {},
  children,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      sx={{ ...basePopoverSx.popover, ...sx }}
      disableScrollLock
    >
      {children}
    </Popover>
  );
};

export default BasePopover;
