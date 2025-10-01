import { useTeacher } from '@/context/TeacherContext';
import s from './TeacherDetails.module.css';
import TeacherReviews from './TeacherReviews';

const TeacherDetails = () => {
  const { experience } = useTeacher();

  return (
    <>
      <p className={s.description}>{experience}</p>
      <TeacherReviews />
    </>
  );
};

export default TeacherDetails;
