import { toast } from 'react-hot-toast';

export const successToast = message =>
  toast.success(message, {
    position: window.innerWidth < 767.98 ? 'top-center' : 'top-right',
    style: {
      backgroundColor: '#9be1a0',
      fontWeight: 'medium',
    },
    iconTheme: { primary: 'white', secondary: 'black' },
  });

export const errorToast = err => {
  const message =
    typeof err === 'string'
      ? err
      : err?.message || 'An unexpected error occurred';

  toast.error(message, {
    position: window.innerWidth < 767.98 ? 'top-center' : 'top-right',
    style: {
      backgroundColor: '#FFCCCC',
      fontWeight: 'medium',
    },
    iconTheme: { primary: 'white', secondary: 'red' },
  });
};
