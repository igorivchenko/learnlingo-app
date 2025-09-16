import { useTeacher } from '@/context/TeacherContext';
import s from './TeacherCardList.module.css';

const TeacherCardList = () => {
  const { levels } = useTeacher();

  return (
    <ul className={s.list}>
      {levels.map(level => (
        <li className={s.item} key={level}>
          {`#${level}`}
        </li>
      ))}
    </ul>
  );
};

export default TeacherCardList;
