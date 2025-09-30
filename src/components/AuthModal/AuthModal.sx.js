export const authModalSx = {
  modal: {
    backdropFilter: 'blur(2px)',
  },
  modalTitle: {
    mb: '20px',
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: 1.2,
    color: 'var(--color-main)',
  },
  modalDescription: {
    mb: '40px',
    lineHeight: 1.35,
    color: 'var(--color-description)',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      height: '54px',
      borderColor: 'var(--color-main)',
      '& input': {
        color: 'var(--color-main)',
      },
      '& fieldset': {
        borderColor: 'var(--color-main)',
        transition: 'border-color 0.2s ease',
      },
      '&:hover fieldset': {
        borderColor: 'var(--color-border-accent)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-border-accent)',
      },
      '&.Mui-error fieldset': {
        borderColor: 'var(--color-border-error)',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'var(--color-main)',
      '&.Mui-error': {
        color: 'var(--color-label-error)',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'var(--color-label-accent)',
      '&.Mui-error': {
        color: 'var(--color-label-error)',
      },
    },
  },
  passwordLabel: {
    color: 'var(--color-main)',
    '&.Mui-focused': { color: 'var(--color-label-accent)' },
    '&.Mui-error': { color: 'var(--color-border-error)' },
  },
  passwordInput: {
    borderRadius: '12px',
    height: '54px',
    '& input': {
      color: 'var(--color-main) !important',
    },
    '& fieldset': {
      borderColor: 'var(--color-main)',
      transition: 'border-color 0.2s ease',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-border-accent)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-border-accent)',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-border-error)',
    },
  },
  passwordIcon: {
    color: 'var(--color-main)',
  },
  submitButton: {
    height: '60px',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 1.5,
    textTransform: 'capitalize',
    color: 'var(--color-secondary)',
    backgroundColor: 'var(--color-button)',
    borderRadius: '12px',
  },
};
