import s from './TeacherReviews.module.css';
import { useTeacher } from '@/context/TeacherContext';
import TeacherReviewItem from './TeacherReviewItem';

const TeacherReviews = () => {
  const { reviews } = useTeacher();

  return (
    <ul className={s.list}>
      {reviews.map(review => (
        <li className={s.item} key={review.reviewer_name}>
          <TeacherReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};

export default TeacherReviews;
