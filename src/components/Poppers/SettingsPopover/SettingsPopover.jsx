import { Box, Button, Typography } from '@mui/material';
import BasePopover from '@/components/Poppers/BasePopover';

const SettingsPopover = ({ onConfirm, onClose, ...props }) => {
  return (
    <BasePopover onClose={onClose} {...props}>
      <Typography
        sx={{
          color: 'var(--color-main)',
          fontSize: 14,
        }}
      >
        <b>{'Are you sure?'}</b>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: 1,
          marginTop: 1.5,
        }}
      >
        <Button
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: 'var(--color-secondary)',
            backgroundColor: 'var(--color-accent)',
            '&:hover': {
              backgroundColor: 'var(--color-accent-bright)',
            },
          }}
          onClick={onConfirm}
        >
          Settings
        </Button>
      </Box>
    </BasePopover>
  );
};

export default SettingsPopover;
