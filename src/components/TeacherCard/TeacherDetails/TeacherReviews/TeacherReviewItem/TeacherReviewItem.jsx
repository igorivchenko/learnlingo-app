import s from './TeacherReviewItem.module.css';

const TeacherReviewItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  const avatarLetter = reviewer_name?.split('')[0];

  return (
    <div className={s.reviewWrapper}>
      <div className={s.reviewItem}>
        <span className={s.avatar}>{avatarLetter}</span>
        <div className={s.info}>
          <span className={s.name}>{reviewer_name}</span>
          <span className={s.rating}>
            <svg width="16" height="16">
              <use href="/icons.svg#icon-rating"></use>
            </svg>
            {Number(reviewer_rating).toFixed(1)}
          </span>
        </div>
      </div>
      <span className={s.comment}>{comment}</span>
    </div>
  );
};

export default TeacherReviewItem;
