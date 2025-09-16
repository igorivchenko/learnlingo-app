import { motion } from 'motion/react';
import s from './TeachersList.module.css';
import LoadMoreButton from '@/components/LoadMoreButton';
import TeacherCard from '@/components/TeacherCard';
import Loader from '@/components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectHasMore,
  selectIsLoading,
  selectTeachers,
  selectTeachersLastDoc,
} from '@/redux/teachers/selectors';
import { getTeachers } from '@/redux/teachers/operations';

const TeachersList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const teachers = useSelector(selectTeachers);
  const lastDoc = useSelector(selectTeachersLastDoc);
  const hasMore = useSelector(selectHasMore);

  const handleLoadMore = () => {
    if (lastDoc) {
      dispatch(getTeachers({ filters: {}, lastVisibleDoc: lastDoc }));
    }
  };

  return (
    <>
      {isLoading && (
        <Loader
          top
          color="var(--color-accent)"
          height={30}
          width={4}
          margin={2.3}
        />
      )}
      {!isLoading && teachers.length === 0 && (
        <p>Sorry, no teachers available</p>
      )}
      <ul className={s.list}>
        {teachers.map(teacher => (
          <motion.li
            key={teacher.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TeacherCard teacher={teacher} />
          </motion.li>
        ))}
      </ul>
      {teachers.length > 0 && hasMore && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </>
  );
};

export default TeachersList;
