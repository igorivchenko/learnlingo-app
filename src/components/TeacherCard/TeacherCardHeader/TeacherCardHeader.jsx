import { useTeacher } from '@/context/TeacherContext';
import FavoriteToggleButton from './FavoriteToggleButton';
import s from './TeacherCardHeader.module.css';
import TeacherHeaderList from './TeacherHeaderList';
import TeacherAvatar from '../TeacherAvatar';
import { useResponsive } from '@/hooks/useResponsive';

const TeacherCardHeader = () => {
  const { name, surname } = useTeacher();
  const { isTabletL } = useResponsive();

  return (
    <div className={s.header}>
      {isTabletL && <TeacherAvatar />}
      <div className={s.titleWrapper}>
        <span className={s.label}>Languages</span>
        <h2 className={s.title}>
          {name} {surname}
        </h2>
      </div>
      <div className={s.actions}>
        <TeacherHeaderList />
        <FavoriteToggleButton />
      </div>
    </div>
  );
};

export default TeacherCardHeader;
