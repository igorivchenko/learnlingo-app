import s from './TeacherCardInfo.module.css';
import { motion } from 'motion/react';

const TeacherCardInfo = ({ value }) => {
  const items = ['Speaks: ', 'Lesson Info: ', 'Conditions: '];

  return (
    <ul className={s.list}>
      {items.map((label, idx) => (
        <motion.li
          className={s.item}
          key={idx}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.3 }}
          viewport={{ once: true, margin: '0px 0px -30px 0px' }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.value}>
            {value}Lessons are structured to cover grammar, vocabulary, and
            practical usage of the language.
          </span>
        </motion.li>
      ))}
    </ul>
  );
};

export default TeacherCardInfo;
