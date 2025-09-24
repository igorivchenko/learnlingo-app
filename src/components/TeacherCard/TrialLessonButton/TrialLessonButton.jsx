import { useState } from 'react';
import s from './TrialLessonButton.module.css';
import BookTrialModal from '@/components/BookTrialModal';

const TrialLessonButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className={s.button} type="button" onClick={handleOpen}>
        <span>Book trial lesson</span>
      </button>
      <BookTrialModal open={open} handleClose={handleClose} />
    </>
  );
};

export default TrialLessonButton;
