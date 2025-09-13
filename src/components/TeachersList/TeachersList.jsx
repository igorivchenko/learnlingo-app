import s from './TeachersList.module.css';
import TeachersCard from './TeacherCard';
import { motion } from 'motion/react';
import LoadMoreButton from '@/components/LoadMoreButton';
import Loader from '@/components/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '@/redux/auth/selectors';

const TeachersList = () => {
  const isLoading = useSelector(selectIsLoading);
  const teachers = [1];

  return (
    <>
      {isLoading ? (
        <Loader
          top
          color="var(--color-accent)"
          height={30}
          width={4}
          margin={2.3}
        />
      ) : teachers.length === 0 ? (
        <p>Sorry, no teachers available</p>
      ) : (
        <ul className={s.list}>
          {/* {teachers.map(teacher => (
              <motion.li
                key={teacher.id} // унікальний ключ обов'язковий
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
      )}
      {!isLoading && teachers.length > 0 && <LoadMoreButton />}
    </>
  );
};

export default TeachersList;
