import { AnimatePresence, motion } from 'motion/react';
import s from './TeachersList.module.css';
import TeacherCard from '@/components/TeacherCard';
import Loader from '@/components/Loader';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetList } from '@/redux/teachers/slice';
import TeachersListEmptyState from './TeachersListEmptyState';

const TeachersList = ({ isLoading, teachers, variants }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetList());
  }, [dispatch]);

  return (
    <>
      {isLoading && teachers.length === 0 && (
        <Loader
          top
          color="var(--color-accent)"
          height={30}
          width={4}
          margin={2.3}
        />
      )}
      {!isLoading && teachers.length === 0 && <TeachersListEmptyState />}

      {teachers.length > 0 && (
        <ul className={s.list}>
          <AnimatePresence>
            {teachers.map(teacher => (
              <motion.li
                key={teacher.id}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <TeacherCard teacher={teacher} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </>
  );
};

export default TeachersList;
