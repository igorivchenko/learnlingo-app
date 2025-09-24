import { AnimatePresence, motion } from 'motion/react';
import s from './TeachersList.module.css';
import TeacherCard from '@/components/TeacherCard';
import Loader from '@/components/Loader';

const TeachersList = ({ isLoading, teachers }) => {
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
        <AnimatePresence>
          {teachers.map(teacher => (
            <motion.li
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              style={{ minHeight: 333 }}
            >
              <TeacherCard teacher={teacher} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default TeachersList;
