export const bookTrialFormSx = {
  radio: {
    color: 'var(--color-book-trial-form-border)',
    '&.Mui-checked': { color: 'var(--color-border-accent)' },
  },

  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      height: '54px',
      borderColor: 'var(--color-border-input)',
      '& input': {
        color: 'var(--color-main)',
      },
      '& fieldset': {
        borderColor: 'var(--color-border-input)',
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

  textFieldWithHelper: {
    '& .MuiOutlinedInput-root': {
      position: 'relative',
      marginBottom: '20px',
      borderRadius: '12px',
      height: '54px',
      borderColor: 'var(--color-border-input)',
      '& input': {
        color: 'var(--color-main)',
      },
      '& fieldset': {
        borderColor: 'var(--color-border-input)',
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
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      lineHeight: 1.2,
      pointerEvents: 'none',
    },
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
