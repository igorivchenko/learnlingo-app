export const bookTrialModalSx = {
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
  description: {
    lineHeight: 1.35,
    color: 'var(--color-description)',
  },
};
