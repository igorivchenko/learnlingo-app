export const burgerDrawerSx = {
  drawer: {
    '& .MuiDrawer-paper': {
      width: '50vw',
      padding: '20px 16px',
      backgroundColor: 'var(--color-bg-burgerMenu)',
      color: 'var(--color-main)',
      overflow: 'hidden',
      '@media (width < 479.98px)': {
        width: '55vw',
      },
    },
  },

  backdrop: {
    backdropFilter: 'blur(1.5px)',
  },

  closeButton: {
    width: '24px',
    padding: 0,
    '@media (width < 767.98px)': {
      marginLeft: 'auto',
    },
  },
};
