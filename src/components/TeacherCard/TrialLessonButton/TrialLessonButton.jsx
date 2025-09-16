import s from './TrialLessonButton.module.css';

const TrialLessonButton = () => {
  return (
    <button className={s.button} type="button">
      <span>Book trial lesson</span>
    </button>
  );
};

export default TrialLessonButton;
