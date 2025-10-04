import { useTeacher } from '@/context/TeacherContext';
import s from './BookTrialTeacherBadge.module.css';

const BookTrialTeacherBadge = () => {
  const { name, surname, avatar_url } = useTeacher();

  return (
    <div className={s.badgeWrapper}>
      <div className={s.badgeItem}>
        <img className={s.avatar} src={avatar_url} alt="" />
        <div className={s.info}>
          <span className={s.label}>Your teacher</span>
          <div className={s.name}>
            <span>{name}</span> <span>{surname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrialTeacherBadge;
