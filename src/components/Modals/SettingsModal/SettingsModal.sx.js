export const settingsModalSx = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backdropFilter: 'blur(2px)',
  },
  title: {
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: 'var(--color-main)',
    '@media (width < 479.98px)': {
      fontSize: '30px',
      textAlign: 'center',
    },
  },
  select: {
    fontSize: 14,
    fontWeight: 700,
    color: 'inherit',
    '& .MuiSelect-select': { padding: '10px 14px' },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid var(--color-border-bottom-modal)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-border-bottom-modal)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-accent)',
      boxShadow: '0 0 5px var(--color-accent)',
    },
    '& .MuiSelect-icon': { color: 'var(--color-text-main)' },
  },
  selectMenu: {
    PaperProps: {
      sx: {
        bgcolor: 'var(--color-bg-popper)',
        color: 'var(--color-text-main)',
      },
    },
  },
};
