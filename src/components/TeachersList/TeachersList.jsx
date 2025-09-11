import s from './TeachersList.module.css';
import TeachersCard from './TeacherCard';
import { motion } from 'motion/react';
import LoadMoreButton from '@/components/LoadMoreButton';

const TeachersList = () => {
  const teachers = [1];
  return (
    <>
      <ul className={s.list}>
        {/* {teachers.map(teacher => (
        <motion.li
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >         
          <TeachersCard teacher={teacher} />
        </motion.li>
        ))} */}
        <motion.li
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TeachersCard />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TeachersCard />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TeachersCard />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TeachersCard />
        </motion.li>
      </ul>
      {teachers.length > 0 && <LoadMoreButton />}
    </>
  );
};

export default TeachersList;
