export const scrollUpButtonSx = {
  wrapper: isMobile => ({
    position: 'fixed',
    bottom: isMobile ? 78 : 90,
    right: 35,
  }),
  fab: isMobile => ({
    width: isMobile ? 40 : 48,
    height: isMobile ? 40 : 48,
  }),
};
