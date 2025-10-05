import s from './TrialLessonButton.module.css';

const TrialLessonButton = ({ onClick }) => {
  return (
    <>
      <button className={s.button} type="button" onClick={onClick}>
        <span>Book trial lesson</span>
      </button>
    </>
  );
};

export default TrialLessonButton;
