export const settingsPopoverSx = {
  title: {
    color: 'var(--color-main)',
    fontSize: 14,
  },

  actionsBox: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 1,
    marginTop: 1.5,
  },

  confirmButton: {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--color-secondary)',
    backgroundColor: 'var(--color-accent)',
    '&:hover': {
      backgroundColor: 'var(--color-accent-bright)',
    },
  },
};
