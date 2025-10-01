import { createContext, useContext, useState } from 'react';
import { MODES } from '@/constants';
import AuthModal from '@/components/AuthModal';

const AuthModalContext = createContext();

export const useAuthModal = () => useContext(AuthModalContext);

export const AuthModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODES.LOGIN);

  const openModal = (newMode = MODES.LOGIN, onOpenCallback) => {
    setMode(newMode);
    setOpen(true);
    if (onOpenCallback) onOpenCallback();
  };

  const closeModal = () => setOpen(false);

  return (
    <AuthModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AuthModal open={open} mode={mode} handleClose={closeModal} />
    </AuthModalContext.Provider>
  );
};
