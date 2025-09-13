import { Popover } from '@mui/material';

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
      sx={{
        '& .MuiPaper-root': {
          padding: 1,
          backgroundColor: 'var(--color-bg-popper)',
          borderRadius: 2,
          boxShadow: 'var(--box-shadow-popper)',
          maxWidth: 280,
        },
        ...sx,
      }}
    >
      {children}
    </Popover>
  );
};

export default BasePopover;
